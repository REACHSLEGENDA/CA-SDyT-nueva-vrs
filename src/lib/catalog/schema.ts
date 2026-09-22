import { BUSINESS_NAME, DEFAULT_SOCIAL_IMAGE, REMOTE_COVERAGE, SITE_URL, getCanonicalUrl } from '@/lib/seoUtils';
import { getCategory } from './categories';
import { guidesFor } from './guides';
import { UI, formatFrom } from './ui';
import { guideUrl, guidesIndexUrl, productUrl, servicesUrl } from './urls';
import { CURRENCY_BY_LOCALE, type CatalogLocale, type Faq, type LocalizedGuide, type Product } from './types';

/**
 * JSON-LD del catálogo y de CA Explica.
 *
 * Solo declara lo que es visible en la página: el precio "desde" público va en
 * `offers`; los precios por nivel no, porque están detrás del registro.
 */

const ORGANIZATION_REF = {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
};

function faqPage(faqs: Faq[], url: string) {
    return {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };
}

function breadcrumb(items: Array<[string, string]>) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })),
    };
}

export function productSchema(product: Product, locale: CatalogLocale) {
    const ui = UI[locale];
    const c = product.content[locale];
    const category = getCategory(product.category);
    const url = productUrl(product, locale);
    const currency = CURRENCY_BY_LOCALE[locale];
    const amount = product.from.amount[currency];

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: c.name,
                description: c.description,
                serviceType: category.name[locale],
                url,
                inLanguage: locale,
                provider: ORGANIZATION_REF,
                areaServed: (locale === 'es-MX' ? ['Mexico'] : REMOTE_COVERAGE.en).map((name) => ({ '@type': 'Country', name })),
                offers: {
                    '@type': 'Offer',
                    url,
                    priceCurrency: currency,
                    price: amount,
                    description: formatFrom(amount, currency, product.from.billing, locale),
                    priceSpecification: {
                        '@type': 'PriceSpecification',
                        minPrice: amount,
                        priceCurrency: currency,
                    },
                },
            },
            breadcrumb([
                [ui.home, getCanonicalUrl('/', locale)],
                [ui.services, servicesUrl(locale)],
                [category.name[locale], getCanonicalUrl(category.landing, locale)],
                [c.name, url],
            ]),
            faqPage(c.faqs, url),
        ],
    };
}

export function guideSchema({ guide, content: c }: LocalizedGuide, locale: CatalogLocale) {
    const ui = UI[locale];
    const url = guideUrl(guide, locale)!;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                '@id': `${url}#article`,
                headline: c.title,
                description: c.description,
                abstract: c.quickAnswer,
                inLanguage: locale,
                datePublished: guide.datePublished,
                dateModified: guide.dateModified,
                mainEntityOfPage: url,
                image: DEFAULT_SOCIAL_IMAGE,
                author: ORGANIZATION_REF,
                publisher: ORGANIZATION_REF,
                isPartOf: { '@type': 'CollectionPage', '@id': `${guidesIndexUrl(locale)}#collection`, name: ui.guides },
                citation: c.sources.map((source) => source.url),
                keywords: c.keywords.join(', '),
            },
            breadcrumb([
                [ui.home, getCanonicalUrl('/', locale)],
                [ui.guides, guidesIndexUrl(locale)],
                [c.shortTitle, url],
            ]),
            faqPage(c.faqs, url),
        ],
    };
}

export function guidesIndexSchema(locale: CatalogLocale) {
    const ui = UI[locale];
    const url = guidesIndexUrl(locale);
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${url}#collection`,
                name: ui.guides,
                description: ui.guidesIntro,
                url,
                inLanguage: locale,
                publisher: ORGANIZATION_REF,
                hasPart: guidesFor(locale).map(({ guide, content }) => ({
                    '@type': 'Article',
                    headline: content.title,
                    url: guideUrl(guide, locale),
                })),
            },
            breadcrumb([
                [ui.home, getCanonicalUrl('/', locale)],
                [ui.guides, url],
            ]),
        ],
    };
}

/** Serializa JSON-LD sin permitir que un "</script>" en el texto cierre la etiqueta. */
export function jsonLd(data: unknown): string {
    return JSON.stringify(data).replace(/</g, '\\u003c');
}
