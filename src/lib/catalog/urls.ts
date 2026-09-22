import { SITE_URL } from '@/lib/seoUtils';
import { getCategory } from './categories';
import type { CatalogLocale, Guide, Product } from './types';

// ─── URLs ─────────────────────────────────────────────────────────────────

const LOCALE_PREFIX: Record<CatalogLocale, string> = { 'es-MX': '', 'en': '/en' };
const SERVICES_SEGMENT: Record<CatalogLocale, string> = { 'es-MX': 'servicios', 'en': 'services' };
const GUIDES_SEGMENT: Record<CatalogLocale, string> = { 'es-MX': 'guias', 'en': 'guides' };

/** Parámetros para `<Link href={{ pathname: '/servicios/[categoria]/[slug]', params }}>`. */
export function productParams(product: Product, locale: CatalogLocale) {
    return { categoria: getCategory(product.category).slug[locale], slug: product.slug[locale] };
}

export function productUrl(product: Product, locale: CatalogLocale): string {
    const { categoria, slug } = productParams(product, locale);
    return `${SITE_URL}${LOCALE_PREFIX[locale]}/${SERVICES_SEGMENT[locale]}/${categoria}/${slug}`;
}

/** URL de la guía en ese idioma; null si la guía no existe en él. */
export function guideUrl(guide: Guide, locale: CatalogLocale): string | null {
    const slug = guide.slug[locale];
    return slug ? `${SITE_URL}${LOCALE_PREFIX[locale]}/${GUIDES_SEGMENT[locale]}/${slug}` : null;
}

export function guidesIndexUrl(locale: CatalogLocale): string {
    return `${SITE_URL}${LOCALE_PREFIX[locale]}/${GUIDES_SEGMENT[locale]}`;
}

export function servicesUrl(locale: CatalogLocale): string {
    return `${SITE_URL}${LOCALE_PREFIX[locale]}/${SERVICES_SEGMENT[locale]}`;
}

/** hreflang solo entre las versiones publicadas. x-default apunta a es-MX. */
export function catalogAlternates(urls: CatalogUrls) {
    return { 'es-MX': urls['es-MX'], ...(urls.en ? { en: urls.en } : {}), 'x-default': urls['es-MX'] };
}

/** es-MX siempre existe; en puede faltar (guías solo para México). */
export type CatalogUrls = { 'es-MX': string; en?: string | null };
