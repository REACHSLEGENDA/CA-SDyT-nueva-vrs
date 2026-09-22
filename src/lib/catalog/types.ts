/**
 * Tipos del catálogo de productos y de CA Explica.
 *
 * Todo lo que vive aquí es PÚBLICO: se empaqueta en el HTML y en el bundle del
 * cliente. Los precios completos por nivel NO van aquí; viven en
 * `src/lib/catalog/pricing.server.ts` y solo salen por `/api/precios` después
 * de que la persona deja sus datos.
 */

/** Fase 1: el catálogo y las guías solo se publican en estos dos idiomas. */
export const CATALOG_LOCALES = ['es-MX', 'en'] as const;
export type CatalogLocale = (typeof CATALOG_LOCALES)[number];

export function isCatalogLocale(value: string): value is CatalogLocale {
    return (CATALOG_LOCALES as readonly string[]).includes(value);
}

/**
 * Parámetros de relleno para los idiomas que aún no publican catálogo.
 *
 * Next 16 descarta TODAS las rutas de un segmento anidado si `generateStaticParams`
 * devuelve `[]` para alguno de los valores del segmento padre ([locale]). Por eso
 * a es-419, es-ES y pt-BR se les devuelve un único parámetro que la página
 * resuelve con `notFound()`: se prerenderiza como 404 y el resto sí se genera.
 */
export const UNPUBLISHED_LOCALE_PARAMS = {
    product: [{ categoria: '_', slug: '_' }],
    guide: [{ slug: '_' }],
};

/** es-MX ve pesos; el resto del mundo ve dólares (manual USD con ajuste internacional). */
export type Currency = 'MXN' | 'USD';
export const CURRENCY_BY_LOCALE: Record<CatalogLocale, Currency> = {
    'es-MX': 'MXN',
    'en': 'USD',
};

export type Localized<T> = Record<CatalogLocale, T>;

export type CategoryId =
    | 'web'
    | 'sistemas'
    | 'apps'
    | 'marketing'
    | 'seo-aeo'
    | 'automatizacion'
    | 'paquetes';

export type Category = {
    id: CategoryId;
    slug: Localized<string>;
    name: Localized<string>;
    /** Página de servicio existente que actúa como "landing" de la categoría. */
    landing: '/apps-web' | '/sistemas' | '/apps-moviles' | '/marketing' | '/seo-aeo' | '/automatizacion' | '/paquetes-web';
};

/** Cómo se cobra el precio "desde" que se muestra en público. */
export type Billing = 'one-time' | 'monthly' | 'setup';

export type PublicPrice = {
    amount: Record<Currency, number>;
    billing: Billing;
};

/** Precio de un nivel. Solo lo entrega `/api/precios`; el tipo es público, los importes no. */
export type TierPrice = {
    /** Importe base. Si `from` es true, se muestra como "Desde". */
    min?: number;
    /** Tope del rango ("hasta"), cuando el manual da un rango. */
    max?: number;
    from?: boolean;
    billing: Billing;
    /** Mantenimiento mensual asociado al nivel. */
    maintenance?: number;
    /** Sin importe: se cotiza por proyecto. */
    quote?: boolean;
};

export type Tier = {
    id: string;
    name: Localized<string>;
    features: Localized<string[]>;
};

export type Faq = { question: string; answer: string };

export type ProductContent = {
    name: string;
    /** <title> de la página. */
    seoTitle: string;
    /** Meta description, ~150 caracteres. */
    description: string;
    /** Párrafo del hero. */
    intro: string;
    /** Frase de Nova, la anfitriona. */
    novaLine: string;
    includes: string[];
    inputs: string[];
    deliverables: string[];
    /** Plazo estimado; null cuando el manual no lo fija. */
    timeline: string | null;
    faqs: Faq[];
    keywords: string[];
};

export type Product = {
    id: string;
    category: CategoryId;
    slug: Localized<string>;
    icon: ProductIcon;
    from: PublicPrice;
    /**
     * Niveles visibles. Sus precios quedan bloqueados hasta el registro, salvo el
     * "desde" del primero, que coincide con `from`. Un producto sin `tiers` tiene
     * un único precio público y no necesita registro.
     */
    tiers?: Tier[];
    content: Localized<ProductContent>;
    relatedGuides: string[];
    relatedProducts: string[];
};

export type ProductIcon =
    | 'globe' | 'layout' | 'users' | 'cloud' | 'smartphone' | 'megaphone' | 'palette'
    | 'map-pin' | 'search' | 'sparkles' | 'message' | 'calendar' | 'package' | 'receipt'
    | 'credit-card' | 'plug' | 'brain' | 'layers';

export type GuideSection = {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
};

export type GuideContent = {
    title: string;
    shortTitle: string;
    description: string;
    keywords: string[];
    badge: string;
    novaLine: string;
    /** Respuesta directa de 40–60 palabras: el fragmento que un motor puede citar. */
    quickAnswer: string;
    keyFacts: Array<{ label: string; value: string }>;
    sections: GuideSection[];
    faqs: Faq[];
    sources: Array<{ label: string; url: string }>;
    midCta: string;
    finalCta: string;
};

export type Guide = {
    id: string;
    slug: Localized<string>;
    datePublished: string;
    dateModified: string;
    content: Localized<GuideContent>;
    relatedProducts: string[];
    relatedGuides: string[];
};
