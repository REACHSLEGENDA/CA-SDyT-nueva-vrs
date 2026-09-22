import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_WHATSAPP, SITE_URL } from '@/lib/seoUtils';
import { categories, getCategory } from './categories';
import { getGuideBySlug, guidesFor } from './guides';
import { getProductBySlug, products } from './products';
import { UI, billingLabel, formatFrom } from './ui';
import { guideUrl, guidesIndexUrl, productUrl, servicesUrl } from './urls';
import { CURRENCY_BY_LOCALE, type CatalogLocale, type LocalizedGuide, type Product } from './types';

/**
 * Variante Markdown de las páginas del catálogo y de CA Explica, para agentes de IA
 * (negociación de contenido: `Accept: text/markdown` o sufijo `.md`).
 *
 * Mismo contenido público que el HTML: solo el precio "desde"; la tabla por nivel
 * sigue detrás del registro. Cada respuesta termina con los datos de contacto y los
 * recursos para agentes, para que un agente que llega a una sola página tenga contexto.
 */

export type MarkdownResult = { status: 200 | 404; body: string; canonical?: string };

const TEXT = {
    'es-MX': {
        catalogTitle: 'Catálogo de servicios de CA Soluciones Digitales',
        catalogIntro: 'Agencia mexicana de desarrollo de software, automatización, SEO/AEO e infraestructura TI. Precios de referencia en pesos mexicanos; el alcance y el precio final se confirman en la propuesta.',
        guidesTitle: 'CA Explica — guías',
        from: 'Precio de referencia',
        billing: 'Modalidad',
        timeline: 'Tiempo estimado',
        tiers: 'Niveles',
        tiersNote: 'Los precios de cada nivel se entregan al solicitarlos desde la ficha o por contacto directo.',
        notFound: 'Página no encontrada',
        notFoundText: 'No hay versión Markdown para esta ruta. Estas son las páginas disponibles:',
        contact: 'Contacto',
        agents: 'Recursos para agentes',
        category: 'Categoría',
        updated: 'Actualizado',
        html: 'Versión HTML',
    },
    'en': {
        catalogTitle: 'CA Digital Solutions service catalog',
        catalogIntro: 'Mexico-based agency for software development, automation, SEO/AEO and IT infrastructure. Reference prices in US dollars; final scope and price are confirmed in the proposal.',
        guidesTitle: 'CA Explains — guides',
        from: 'Reference price',
        billing: 'Billing',
        timeline: 'Estimated timeline',
        tiers: 'Tiers',
        tiersNote: 'Per-tier prices are provided on request from the product page or by direct contact.',
        notFound: 'Page not found',
        notFoundText: 'There is no Markdown version for this path. These pages are available:',
        contact: 'Contact',
        agents: 'Resources for agents',
        category: 'Category',
        updated: 'Updated',
        html: 'HTML version',
    },
} as const;

function footer(locale: CatalogLocale): string {
    const t = TEXT[locale];
    return [
        '---',
        '',
        `**${t.contact}:** ${SITE_URL}${locale === 'en' ? '/en/contact' : '/contacto'} · ${BUSINESS_EMAIL} · WhatsApp ${BUSINESS_PHONE} (${BUSINESS_WHATSAPP})`,
        '',
        `**${t.agents}:** ${SITE_URL}/llms.txt · ${SITE_URL}/agent-instructions.md · ${SITE_URL}/sitemap.xml`,
        '',
    ].join('\n');
}

const bullets = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');

// ─── Páginas ──────────────────────────────────────────────────────────────

export function productMarkdown(product: Product, locale: CatalogLocale): string {
    const t = TEXT[locale];
    const ui = UI[locale];
    const c = product.content[locale];
    const currency = CURRENCY_BY_LOCALE[locale];
    const lines = [
        `# ${c.name}`,
        '',
        `> ${c.description}`,
        '',
        c.intro,
        '',
        `- **${t.from}:** ${formatFrom(product.from.amount[currency], currency, product.from.billing, locale)}`,
        `- **${t.billing}:** ${billingLabel(product.from.billing, locale)}`,
        `- **${t.timeline}:** ${c.timeline ?? ui.timelineByScope}`,
        `- **${t.category}:** ${getCategory(product.category).name[locale]}`,
        `- **${t.html}:** ${productUrl(product, locale)}`,
        '',
        `## ${ui.includes}`,
        '',
        bullets(c.includes),
        '',
    ];
    if (product.tiers) {
        lines.push(`## ${t.tiers}`, '');
        for (const tier of product.tiers) lines.push(`- **${tier.name[locale]}:** ${tier.features[locale].join('; ')}`);
        lines.push('', t.tiersNote, '');
    }
    lines.push(
        `## ${ui.inputs}`, '', bullets(c.inputs), '',
        `## ${ui.deliverables}`, '', bullets(c.deliverables), '',
        `## ${ui.notIncluded}`, '', ui.notIncludedText, '',
        `## ${ui.faqs}`, '',
        ...c.faqs.flatMap((faq) => [`### ${faq.question}`, '', faq.answer, '']),
        ui.referencePrice,
        '',
        footer(locale),
    );
    return lines.join('\n');
}

export function guideMarkdown({ guide, content: c }: LocalizedGuide, locale: CatalogLocale): string {
    const ui = UI[locale];
    const t = TEXT[locale];
    const lines = [
        `# ${c.title}`,
        '',
        `*${t.updated}: ${guide.dateModified} · ${t.category}: ${getCategory(guide.category).name[locale]} · ${t.html}: ${guideUrl(guide, locale)}*`,
        '',
        `## ${ui.quickAnswer}`,
        '',
        c.quickAnswer,
        '',
        `## ${ui.keyFacts}`,
        '',
        '| | |',
        '|---|---|',
        ...c.keyFacts.map((row) => `| ${row.label} | ${row.value} |`),
        '',
    ];
    for (const section of c.sections) {
        lines.push(`## ${section.title}`, '', ...section.paragraphs.flatMap((p) => [p, '']));
        if (section.bullets) lines.push(bullets(section.bullets), '');
    }
    lines.push(`## ${ui.faqs}`, '', ...c.faqs.flatMap((faq) => [`### ${faq.question}`, '', faq.answer, '']));
    if (c.sources.length > 0) {
        lines.push(`## ${ui.sources}`, '', ...c.sources.map((s) => `- [${s.label}](${s.url})`), '', ui.sourcesNote, '');
    }
    const related = guide.relatedProducts
        .map((id) => products.find((p) => p.id === id))
        .filter((p) => p !== undefined);
    if (related.length > 0) {
        const currency = CURRENCY_BY_LOCALE[locale];
        lines.push(
            `## ${ui.relatedProducts}`, '',
            ...related.map((p) => `- [${p.content[locale].name}](${productUrl(p, locale)}): ${formatFrom(p.from.amount[currency], currency, p.from.billing, locale)}`),
            '',
        );
    }
    lines.push(footer(locale));
    return lines.join('\n');
}

export function guidesIndexMarkdown(locale: CatalogLocale): string {
    const t = TEXT[locale];
    const ui = UI[locale];
    const lines = [`# ${t.guidesTitle}`, '', ui.guidesIntro, ''];
    for (const category of categories) {
        const items = guidesFor(locale).filter((entry) => entry.guide.category === category.id);
        if (items.length === 0) continue;
        lines.push(`## ${category.name[locale]}`, '');
        for (const { guide, content } of items) {
            lines.push(`- [${content.title}](${guideUrl(guide, locale)}.md): ${content.quickAnswer}`);
        }
        lines.push('');
    }
    lines.push(footer(locale));
    return lines.join('\n');
}

export function catalogMarkdown(locale: CatalogLocale): string {
    const t = TEXT[locale];
    const currency = CURRENCY_BY_LOCALE[locale];
    const lines = [`# ${t.catalogTitle}`, '', t.catalogIntro, ''];
    for (const category of categories) {
        const items = products.filter((p) => p.category === category.id);
        if (items.length === 0) continue;
        lines.push(`## ${category.name[locale]}`, '');
        for (const p of items) {
            lines.push(`- [${p.content[locale].name}](${productUrl(p, locale)}.md): ${formatFrom(p.from.amount[currency], currency, p.from.billing, locale)}. ${p.content[locale].description}`);
        }
        lines.push('');
    }
    lines.push(`## ${t.guidesTitle}`, '', `${guidesIndexUrl(locale)}.md`, '', footer(locale));
    return lines.join('\n');
}

function notFoundMarkdown(locale: CatalogLocale): string {
    const t = TEXT[locale];
    return [
        `# ${t.notFound}`,
        '',
        t.notFoundText,
        '',
        `- ${servicesUrl(locale)}.md`,
        `- ${guidesIndexUrl(locale)}.md`,
        ...products.map((p) => `- ${productUrl(p, locale)}.md`),
        ...guidesFor(locale).map(({ guide }) => `- ${guideUrl(guide, locale)}.md`),
        '',
        footer(locale),
    ].join('\n');
}

// ─── Resolución de rutas ──────────────────────────────────────────────────

/** Quita el sufijo .md, la barra final y `/index`. */
export function normalizeMarkdownPath(pathname: string): string {
    let path = pathname.split('?')[0].replace(/\.md$/i, '');
    if (path.length > 1) path = path.replace(/\/+$/, '');
    if (path === '/index' || path === '') path = '/';
    if (path.endsWith('/index')) path = path.slice(0, -'/index'.length) || '/';
    return path;
}

export function resolveMarkdown(rawPath: string): MarkdownResult {
    const path = normalizeMarkdownPath(rawPath);
    const locale: CatalogLocale = path === '/en' || path.startsWith('/en/') ? 'en' : 'es-MX';
    const rest = locale === 'en' ? path.slice(3) || '/' : path;
    const parts = rest.split('/').filter(Boolean);
    const services = locale === 'en' ? 'services' : 'servicios';
    const guidesSegment = locale === 'en' ? 'guides' : 'guias';

    // Inicio y /servicios → catálogo completo.
    if (parts.length === 0 || (parts.length === 1 && parts[0] === services)) {
        return { status: 200, body: catalogMarkdown(locale), canonical: parts.length === 0 ? `${SITE_URL}${locale === 'en' ? '/en' : ''}` : servicesUrl(locale) };
    }
    if (parts[0] === guidesSegment) {
        if (parts.length === 1) return { status: 200, body: guidesIndexMarkdown(locale), canonical: guidesIndexUrl(locale) };
        if (parts.length === 2) {
            const entry = getGuideBySlug(locale, parts[1]);
            if (entry) return { status: 200, body: guideMarkdown(entry, locale), canonical: guideUrl(entry.guide, locale)! };
        }
    }
    if (parts[0] === services && parts.length === 3) {
        const product = getProductBySlug(locale, parts[1], parts[2]);
        if (product) return { status: 200, body: productMarkdown(product, locale), canonical: productUrl(product, locale) };
    }
    return { status: 404, body: notFoundMarkdown(locale) };
}
