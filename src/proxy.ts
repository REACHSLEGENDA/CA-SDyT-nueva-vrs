import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

/** Calidad (q) que la cabecera Accept declara para un tipo MIME; 0 si no lo pide. */
function acceptQuality(accept: string, mime: string): number {
  for (const part of accept.toLowerCase().split(',')) {
    const [type, ...params] = part.trim().split(';');
    if (type.trim() !== mime) continue;
    const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const value = q ? Number.parseFloat(q.slice(2)) : 1;
    return Number.isNaN(value) ? 1 : value;
  }
  return 0;
}

/** El cliente prefiere Markdown sobre HTML (negociación estilo acceptmarkdown.com). */
function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  const markdown = Math.max(acceptQuality(accept, 'text/markdown'), acceptQuality(accept, 'text/x-markdown'));
  return markdown > 0 && markdown > acceptQuality(accept, 'text/html');
}

// Archivos .md reales de /public: se sirven tal cual.
const STATIC_MARKDOWN = new Set(['/agent-instructions.md']);

// Rutas con variante Markdown (inicio, catálogo, fichas y CA Explica, es-MX y en).
// Con `Accept: text/markdown` el resto de páginas sigue sirviendo HTML en vez de 404.
const MARKDOWN_ROUTES = /^(\/en)?(\/|\/(servicios|services)(\/[^/]+\/[^/]+)?|\/(guias|guides)(\/[^/]+)?)\/?$/;

function hasMarkdownVariant(pathname: string): boolean {
  return pathname === '/' || pathname === '/en' || MARKDOWN_ROUTES.test(pathname);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isRead = request.method === 'GET' || request.method === 'HEAD';
  const isRsc = request.headers.has('rsc') || request.headers.has('next-router-prefetch');
  const isMdSuffix = pathname.toLowerCase().endsWith('.md');

  // Archivos .md reales de /public: sin reescritura de idioma ni variante.
  if (STATIC_MARKDOWN.has(pathname)) return NextResponse.next();

  // Variante Markdown para agentes: sufijo .md o Accept: text/markdown.
  if (isRead && !isRsc && (isMdSuffix || (hasMarkdownVariant(pathname) && prefersMarkdown(request.headers.get('accept'))))) {
    const url = request.nextUrl.clone();
    url.pathname = '/api/md';
    url.search = '';
    url.searchParams.set('path', pathname);
    // La query no siempre sobrevive al rewrite: la ruta viaja también en una cabecera.
    const headers = new Headers(request.headers);
    headers.set('x-markdown-path', pathname);
    const response = NextResponse.rewrite(url, { request: { headers } });
    response.headers.set('Vary', 'Accept');
    return response;
  }

  // La variante HTML declara Vary: Accept para que un CDN no la sirva a un agente
  // que pidió Markdown (y viceversa).
  const response = intlMiddleware(request);
  const vary = response.headers.get('Vary');
  if (!vary?.toLowerCase().split(',').map((v) => v.trim()).includes('accept')) {
    response.headers.set('Vary', vary ? `${vary}, Accept` : 'Accept');
  }
  return response;
}

export default proxy;

export const config = {
  matcher: [
    // Páginas: ignora API, estáticos, _next, _vercel y rutas con extensión.
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    // Excepción: rutas terminadas en .md para la variante Markdown.
    '/((?!api|_next|_vercel).*\\.md)',
  ],
};
