import 'server-only';
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Currency, TierPrice } from './types';

/**
 * Precios completos por nivel. SOLO SERVIDOR.
 *
 * `server-only` hace fallar el build si algún componente cliente importa este
 * archivo, así que estos importes nunca llegan al HTML ni al bundle del navegador.
 * Salen únicamente por `/api/precios` después de que la persona deja sus datos.
 *
 * Fuente: Manual interno de cotizaciones, septiembre 2026 (MXN v1.0 y USD v1.1).
 * El manual USD no es una conversión directa: incorpora un ajuste internacional.
 * Actualiza ambos importes a la vez cuando cambie el manual.
 */

type PriceByCurrency = Record<Currency, TierPrice>;

const p = (mxn: TierPrice, usd: TierPrice): PriceByCurrency => ({ MXN: mxn, USD: usd });
const QUOTE: PriceByCurrency = { MXN: { quote: true, billing: 'one-time' }, USD: { quote: true, billing: 'one-time' } };

const PRICES: Record<string, Record<string, PriceByCurrency>> = {
    'pagina-web': {
        basico: p({ min: 4500, billing: 'one-time', maintenance: 500 }, { min: 280, billing: 'one-time', maintenance: 35 }),
        mediano: p({ min: 9000, billing: 'one-time', maintenance: 1000 }, { min: 560, billing: 'one-time', maintenance: 65 }),
        premium: p({ min: 18000, billing: 'one-time', maintenance: 1500 }, { min: 1120, billing: 'one-time', maintenance: 95 }),
        personalizado: QUOTE,
    },
    'sistema-web-a-medida': {
        basico: p({ min: 12000, from: true, billing: 'one-time' }, { min: 750, from: true, billing: 'one-time' }),
        intermedio: p({ min: 25000, from: true, billing: 'one-time' }, { min: 1550, from: true, billing: 'one-time' }),
        avanzado: p({ min: 45000, from: true, billing: 'one-time' }, { min: 2800, from: true, billing: 'one-time' }),
        personalizado: QUOTE,
    },
    crm: {
        basico: p({ min: 18000, from: true, billing: 'one-time' }, { min: 1120, from: true, billing: 'one-time' }),
        comercial: p({ min: 35000, from: true, billing: 'one-time' }, { min: 2200, from: true, billing: 'one-time' }),
        avanzado: p({ min: 60000, from: true, billing: 'one-time' }, { min: 3750, from: true, billing: 'one-time' }),
    },
    'app-movil': {
        informativa: p({ min: 20000, from: true, billing: 'one-time' }, { min: 1250, from: true, billing: 'one-time' }),
        login: p({ min: 35000, from: true, billing: 'one-time' }, { min: 2200, from: true, billing: 'one-time' }),
        comercial: p({ min: 55000, from: true, billing: 'one-time' }, { min: 3450, from: true, billing: 'one-time' }),
        empresarial: p({ min: 85000, from: true, billing: 'one-time' }, { min: 5300, from: true, billing: 'one-time' }),
    },
    'gestion-de-redes-sociales': {
        basico: p({ min: 3500, billing: 'monthly' }, { min: 220, billing: 'monthly' }),
        intermedio: p({ min: 7500, billing: 'monthly' }, { min: 470, billing: 'monthly' }),
        premium: p({ min: 12000, from: true, billing: 'monthly' }, { min: 750, from: true, billing: 'monthly' }),
    },
    'diseno-de-marca': {
        logotipo: p({ min: 2500, from: true, billing: 'one-time' }, { min: 160, from: true, billing: 'one-time' }),
        identidad: p({ max: 12000, billing: 'one-time' }, { max: 750, billing: 'one-time' }),
    },
    'seo-local-google-maps': {
        perfil: p({ min: 2000, billing: 'setup' }, { min: 125, billing: 'setup' }),
        'seo-local': p({ min: 3500, from: true, billing: 'monthly' }, { min: 220, from: true, billing: 'monthly' }),
    },
    'seo-web': {
        configuracion: p({ min: 3000, billing: 'setup' }, { min: 190, billing: 'setup' }),
        mensual: p({ min: 2000, from: true, billing: 'monthly' }, { min: 125, from: true, billing: 'monthly' }),
        analitica: p({ min: 1500, billing: 'one-time' }, { min: 95, billing: 'one-time' }),
    },
    'aeo-optimizacion-ia': {
        inicial: p({ min: 2000, billing: 'setup' }, { min: 125, billing: 'setup' }),
        mensual: p({ min: 800, from: true, billing: 'monthly' }, { min: 50, from: true, billing: 'monthly' }),
    },
    'bot-de-whatsapp': {
        estandar: p({ min: 2500, from: true, billing: 'one-time' }, { min: 160, from: true, billing: 'one-time' }),
        ia: p({ min: 8000, max: 25000, billing: 'one-time' }, { min: 500, max: 1550, billing: 'one-time' }),
    },
    'pasarelas-de-pago': {
        basica: p({ min: 3000, from: true, billing: 'one-time' }, { min: 190, from: true, billing: 'one-time' }),
        completa: p({ max: 8000, billing: 'one-time' }, { max: 500, billing: 'one-time' }),
    },
    'integraciones-api': {
        api: p({ min: 1500, from: true, billing: 'one-time' }, { min: 95, from: true, billing: 'one-time' }),
        email: p({ min: 2500, from: true, billing: 'one-time' }, { min: 160, from: true, billing: 'one-time' }),
    },
    'paquetes-360': {
        despegue: p({ min: 9900, billing: 'one-time' }, { min: 620, billing: 'one-time' }),
        trafico: p({ min: 18500, billing: 'one-time' }, { min: 1150, billing: 'one-time' }),
        ecosistema: p({ min: 39000, billing: 'one-time' }, { min: 2450, billing: 'one-time' }),
    },
};

export function getTierPrices(productId: string, currency: Currency): Record<string, TierPrice> | null {
    const product = PRICES[productId];
    if (!product) return null;
    return Object.fromEntries(Object.entries(product).map(([tierId, prices]) => [tierId, prices[currency]]));
}

// ─── Token de desbloqueo ──────────────────────────────────────────────────
//
// Tras registrar el lead, el servidor firma un token con caducidad. El navegador
// lo guarda y lo presenta en otras fichas para no pedir los datos otra vez.
// Sin el secreto nadie puede fabricar un token válido.

const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function getSecret(): string | null {
    const secret = process.env.PRICING_TOKEN_SECRET;
    if (secret && secret.length >= 32) return secret;
    // En desarrollo se permite un secreto local para poder probar sin configurar nada.
    if (process.env.NODE_ENV !== 'production') return 'dev-only-pricing-secret-not-for-production';
    return null;
}

export function isPricingConfigured(): boolean {
    return getSecret() !== null;
}

function sign(payload: string, secret: string): string {
    return createHmac('sha256', secret).update(payload).digest('base64url');
}

export function issueToken(now = Date.now()): string {
    const secret = getSecret();
    if (!secret) throw new Error('PRICING_TOKEN_SECRET no está configurado');
    const expires = String(now + TOKEN_TTL_MS);
    return `${expires}.${sign(expires, secret)}`;
}

export function verifyToken(token: unknown, now = Date.now()): boolean {
    const secret = getSecret();
    if (!secret || typeof token !== 'string') return false;
    const [expires, signature] = token.split('.');
    if (!expires || !signature || !/^\d+$/.test(expires)) return false;
    if (Number(expires) < now) return false;
    const expected = Buffer.from(sign(expires, secret));
    const received = Buffer.from(signature);
    return expected.length === received.length && timingSafeEqual(expected, received);
}
