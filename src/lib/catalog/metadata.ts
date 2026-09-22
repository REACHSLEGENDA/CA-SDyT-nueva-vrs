import type { Metadata } from 'next';
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from '@/lib/seoUtils';
import { catalogAlternates, type CatalogUrls } from './urls';
import type { CatalogLocale } from './types';

const OG_LOCALE: Record<CatalogLocale, string> = { 'es-MX': 'es_MX', 'en': 'en_US' };

/**
 * Metadata de las páginas del catálogo y de CA Explica.
 *
 * A diferencia de `getPageMetadata`, el hreflang solo enlaza las dos versiones
 * que existen (es-MX y en): anunciar es-419, es-ES o pt-BR apuntaría a páginas 404.
 */
export function catalogMetadata({
    locale,
    title,
    description,
    keywords,
    urls,
    type = 'website',
    publishedTime,
    modifiedTime,
}: {
    locale: CatalogLocale;
    title: string;
    description: string;
    keywords?: string[];
    urls: CatalogUrls;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
}): Metadata {
    const url = urls[locale]!;
    const other: CatalogLocale = locale === 'en' ? 'es-MX' : 'en';
    const hasOther = Boolean(urls[other]);
    // Variante Markdown para agentes (servida por el proxy con el sufijo .md).
    const markdownUrl = `${url}.md`;
    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        keywords,
        alternates: { canonical: url, languages: catalogAlternates(urls), types: { 'text/markdown': markdownUrl } },
        robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
        openGraph: {
            type,
            locale: OG_LOCALE[locale],
            alternateLocale: hasOther ? [OG_LOCALE[other]] : [],
            url,
            siteName: 'CA Soluciones Digitales',
            title,
            description,
            ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
            images: [{ url: DEFAULT_SOCIAL_IMAGE, width: 1672, height: 941, alt: 'CA Soluciones Digitales y Tecnologicas' }],
        },
        twitter: { card: 'summary_large_image', title, description, images: [DEFAULT_SOCIAL_IMAGE] },
    };
}
