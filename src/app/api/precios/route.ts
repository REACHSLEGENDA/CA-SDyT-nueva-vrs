import { NextResponse } from 'next/server';
import { getProduct } from '@/lib/catalog/products';
import { getTierPrices, isPricingConfigured, issueToken, verifyToken } from '@/lib/catalog/pricing.server';
import { CURRENCY_BY_LOCALE, isCatalogLocale } from '@/lib/catalog/types';
import { SITE_URL } from '@/lib/seoUtils';

/**
 * Precios completos de una ficha, detrás de un registro.
 *
 *  - `{ mode: 'lead', product, locale, name, email?, phone? }`
 *      Reenvía el lead a Formspree (el mismo formulario que /contacto) y, si se
 *      registró, devuelve los precios y un token firmado válido 30 días.
 *  - `{ mode: 'token', product, locale, token }`
 *      Con un token válido devuelve los precios sin pedir los datos otra vez.
 *
 * El lead se reenvía desde el servidor a propósito: así nadie obtiene precios
 * sin que el lead quede registrado, porque el navegador nunca ve los importes
 * antes de que Formspree confirme.
 */

export const dynamic = 'force-dynamic';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwlzjjo';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s().-]{7,20}$/;

function clean(value: unknown, max = 120): string {
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function error(status: number, code: string) {
    return NextResponse.json({ error: code }, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: Request) {
    if (!isPricingConfigured()) return error(503, 'not-configured');

    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return error(400, 'invalid-json');
    }

    const locale = clean(body.locale, 10);
    const productId = clean(body.product, 60);
    const product = getProduct(productId);
    if (!isCatalogLocale(locale) || !product) return error(400, 'invalid-product');

    const currency = CURRENCY_BY_LOCALE[locale];
    const prices = getTierPrices(product.id, currency);
    if (!prices) return error(404, 'no-prices');

    if (body.mode === 'token') {
        if (!verifyToken(body.token)) return error(401, 'invalid-token');
        return NextResponse.json({ currency, prices }, { headers: { 'Cache-Control': 'no-store' } });
    }

    if (body.mode !== 'lead') return error(400, 'invalid-mode');

    // Honeypot: un bot rellena el campo oculto; una persona no lo ve.
    if (clean(body._gotcha)) return error(400, 'rejected');

    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    const phone = clean(body.phone, 30);
    if (name.length < 2) return error(400, 'invalid-name');
    const validEmail = email && EMAIL.test(email);
    const validPhone = phone && PHONE.test(phone);
    if (!validEmail && !validPhone) return error(400, 'invalid-contact');

    const skipForward = process.env.NODE_ENV !== 'production' && process.env.PRICING_SKIP_LEAD_FORWARD === '1';
    if (!skipForward) {
        try {
            const productName = product.content['es-MX'].name;
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                // Origin/Referer del sitio: si el formulario tiene restringidos los
                // dominios permitidos en Formspree, la petición del servidor debe
                // presentarse como el propio sitio.
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Origin: SITE_URL,
                    Referer: `${SITE_URL}/`,
                },
                body: JSON.stringify({
                    // Mismas claves que el formulario de /contacto; el servicio va en español
                    // para que el equipo lea siempre la misma etiqueta.
                    _subject: `Solicitud de precios: ${productName}`,
                    name,
                    ...(validEmail ? { email, _replyto: email } : {}),
                    phone: validPhone ? phone : '',
                    service: productName,
                    message: `Desbloqueó la tabla de precios de "${productName}" desde la ficha del catálogo (${locale}, ${currency}).`,
                    origen: 'Ficha de catálogo — solicitud de precios',
                }),
                signal: AbortSignal.timeout(8000),
            });
            if (!response.ok) return error(502, 'lead-not-recorded');
        } catch {
            return error(502, 'lead-not-recorded');
        }
    }

    return NextResponse.json(
        { currency, prices, token: issueToken() },
        { headers: { 'Cache-Control': 'no-store' } },
    );
}
