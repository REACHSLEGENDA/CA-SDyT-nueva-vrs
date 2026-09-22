import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ProductArticle } from '@/components/catalog/ProductArticle';
import { getCategory } from '@/lib/catalog/categories';
import { catalogMetadata } from '@/lib/catalog/metadata';
import { getProductBySlug, products } from '@/lib/catalog/products';
import { jsonLd, productSchema } from '@/lib/catalog/schema';
import { productUrl } from '@/lib/catalog/urls';
import { CATALOG_LOCALES, UNPUBLISHED_LOCALE_PARAMS, isCatalogLocale } from '@/lib/catalog/types';

type Props = { params: Promise<{ locale: string; categoria: string; slug: string }> };

// Solo existen las combinaciones generadas: es-MX y en (fase 1).
export const dynamicParams = false;

// `params` del segmento padre ([locale]); se espera con await porque según la
// versión de Next llega como objeto o como promesa.
export async function generateStaticParams({ params }: { params: Promise<{ locale: string }> | { locale: string } }) {
    const { locale } = await params;
    if (!isCatalogLocale(locale)) return UNPUBLISHED_LOCALE_PARAMS.product;
    return products.map((product) => ({
        categoria: getCategory(product.category).slug[locale],
        slug: product.slug[locale],
    }));
}

async function resolve(params: Props['params']) {
    const { locale, categoria, slug } = await params;
    if (!isCatalogLocale(locale)) return null;
    const product = getProductBySlug(locale, categoria, slug);
    return product ? { locale, product } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolved = await resolve(params);
    if (!resolved) return {};
    const { locale, product } = resolved;
    const c = product.content[locale];
    return catalogMetadata({
        locale,
        title: c.seoTitle,
        description: c.description,
        keywords: c.keywords,
        urls: Object.fromEntries(CATALOG_LOCALES.map((l) => [l, productUrl(product, l)])) as Record<(typeof CATALOG_LOCALES)[number], string>,
    });
}

export default async function ProductPage({ params }: Props) {
    const resolved = await resolve(params);
    if (!resolved) notFound();
    const { locale, product } = resolved;
    setRequestLocale(locale);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(productSchema(product, locale)) }} />
            <ProductArticle product={product} locale={locale} />
        </>
    );
}
