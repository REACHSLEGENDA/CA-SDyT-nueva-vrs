import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

// Bots y crawlers que deben pasar sin redirect de idioma
const BOT_UA = /bot|crawler|spider|scraper|crawling|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|telegrambot|vibiz|wget|curl|python|go-http|java\/|ruby|php|perl|libwww|jakarta|httpclient|w3c_validator|validator|ahrefs|semrush|moz|majestic|screaming/i;

export default function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') ?? '';

    // Bots pasan directo — sin redirect de locale
    if (BOT_UA.test(ua)) {
        return NextResponse.next();
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
