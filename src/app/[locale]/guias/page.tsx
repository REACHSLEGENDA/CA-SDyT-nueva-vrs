import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { GuidesIndex } from '@/components/catalog/GuidesIndex';
import { catalogMetadata } from '@/lib/catalog/metadata';
import { guidesIndexSchema, jsonLd } from '@/lib/catalog/schema';
import { UI } from '@/lib/catalog/ui';
import { guidesIndexUrl } from '@/lib/catalog/urls';
import { isCatalogLocale } from '@/lib/catalog/types';

type Props = { params: Promise<{ locale: string }> };

const TITLES = {
    'es-MX': 'CA Explica | Guías de tecnología, precios y decisiones para tu negocio',
    'en': 'CA Explains | Technology guides, pricing and decisions for your business',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    if (!isCatalogLocale(locale)) return {};
    return catalogMetadata({
        locale,
        title: TITLES[locale],
        description: UI[locale].guidesIntro,
        urls: { 'es-MX': guidesIndexUrl('es-MX'), 'en': guidesIndexUrl('en') },
    });
}

export default async function GuidesPage({ params }: Props) {
    const { locale } = await params;
    // Fase 1: CA Explica solo existe en es-MX y en.
    if (!isCatalogLocale(locale)) notFound();
    setRequestLocale(locale);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(guidesIndexSchema(locale)) }} />
            <GuidesIndex locale={locale} />
        </>
    );
}
