import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { GuideArticle } from '@/components/catalog/GuideArticle';
import { getGuideBySlug, guidesFor } from '@/lib/catalog/guides';
import { catalogMetadata } from '@/lib/catalog/metadata';
import { guideSchema, jsonLd } from '@/lib/catalog/schema';
import { guideUrl } from '@/lib/catalog/urls';
import { UNPUBLISHED_LOCALE_PARAMS, isCatalogLocale } from '@/lib/catalog/types';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

// `params` del segmento padre ([locale]); se espera con await porque según la
// versión de Next llega como objeto o como promesa.
export async function generateStaticParams({ params }: { params: Promise<{ locale: string }> | { locale: string } }) {
    const { locale } = await params;
    if (!isCatalogLocale(locale)) return UNPUBLISHED_LOCALE_PARAMS.guide;
    return guidesFor(locale).map((entry) => ({ slug: entry.slug }));
}

async function resolve(params: Props['params']) {
    const { locale, slug } = await params;
    if (!isCatalogLocale(locale)) return null;
    const entry = getGuideBySlug(locale, slug);
    return entry ? { locale, entry } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolved = await resolve(params);
    if (!resolved) return {};
    const { locale, entry } = resolved;
    const { guide, content: c } = entry;
    return catalogMetadata({
        locale,
        title: `${c.shortTitle} | ${locale === 'en' ? 'CA Explains' : 'CA Explica'}`,
        description: c.description,
        keywords: c.keywords,
        urls: { 'es-MX': guideUrl(guide, 'es-MX')!, en: guideUrl(guide, 'en') },
        type: 'article',
        publishedTime: guide.datePublished,
        modifiedTime: guide.dateModified,
    });
}

export default async function GuidePage({ params }: Props) {
    const resolved = await resolve(params);
    if (!resolved) notFound();
    const { locale, entry } = resolved;
    setRequestLocale(locale);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(guideSchema(entry, locale)) }} />
            <GuideArticle entry={entry} locale={locale} />
        </>
    );
}
