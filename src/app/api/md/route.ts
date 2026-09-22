import { NextResponse, type NextRequest } from 'next/server';
import { resolveMarkdown } from '@/lib/catalog/markdown';

/**
 * Variante text/markdown del catálogo y de CA Explica para agentes de IA.
 *
 * Se llega por el proxy (`Accept: text/markdown` o sufijo `.md`), que pasa la ruta
 * original en la cabecera interna `x-markdown-path`, o directamente con `?path=`.
 * `Vary: Accept` evita que un CDN entregue esta variante a quien pidió HTML.
 */
export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
    const requested = request.headers.get('x-markdown-path') || request.nextUrl.searchParams.get('path') || '/';
    const { status, body, canonical } = resolveMarkdown(requested);

    return new NextResponse(body, {
        status,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            Vary: 'Accept',
            'Cache-Control': status === 200 ? 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' : 'no-store',
            // El HTML es la versión que se indexa; esta variante solo apunta a ella.
            'X-Robots-Tag': 'noindex',
            ...(canonical ? { Link: `<${canonical}>; rel="canonical"` } : {}),
        },
    });
}
