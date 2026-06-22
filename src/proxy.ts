import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Ignora llamadas de API, estáticos, _next, _vercel y ficheros con extensiones (ej. png, jpg, log)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
