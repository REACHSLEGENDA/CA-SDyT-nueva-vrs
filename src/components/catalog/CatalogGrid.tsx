import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { categories } from '@/lib/catalog/categories';
import { getProduct, products } from '@/lib/catalog/products';
import { UI, formatFrom } from '@/lib/catalog/ui';
import { productParams } from '@/lib/catalog/urls';
import { CURRENCY_BY_LOCALE, type CatalogLocale, type CategoryId } from '@/lib/catalog/types';
import { ProductIcon } from './ProductIcon';

/**
 * Fichas que muestra cada página de servicio. No es solo su categoría: varias
 * categorías tienen una o dos fichas y la cuadrícula se veía vacía, así que cada
 * página enlaza también las fichas afines a su tema (mínimo tres).
 */
const LANDING_PRODUCTS: Partial<Record<CategoryId, string[]>> = {
    web: ['pagina-web', 'sistema-web-a-medida', 'plataforma-saas'],
    sistemas: ['sistema-web-a-medida', 'crm', 'plataforma-saas', 'sistema-de-inventarios', 'sistema-de-ventas', 'integraciones-api'],
    apps: ['app-movil', 'plataforma-saas', 'integraciones-api'],
    marketing: ['gestion-de-redes-sociales', 'diseno-de-marca', 'seo-local-google-maps'],
    'seo-aeo': ['seo-web', 'aeo-optimizacion-ia', 'seo-local-google-maps'],
    automatizacion: ['bot-de-whatsapp', 'agenda-automatica', 'integraciones-api', 'pasarelas-de-pago', 'inteligencia-artificial-integrada', 'crm'],
    paquetes: ['paquetes-360', 'pagina-web', 'gestion-de-redes-sociales'],
};

/**
 * Cuadrícula de fichas de producto con su precio "desde".
 *
 * Es un componente de servidor: las páginas lo pasan como prop (`catalog`) a su
 * componente cliente, así el contenido del catálogo no entra en el bundle JS.
 * Sin `category` muestra todo el catálogo agrupado; con `category`, las fichas
 * de LANDING_PRODUCTS para esa página.
 */
export function CatalogGrid({ locale, category }: { locale: CatalogLocale; category?: CategoryId }) {
    const ui = UI[locale];
    const currency = CURRENCY_BY_LOCALE[locale];
    const groups = category
        ? [{
            category: categories.find((item) => item.id === category)!,
            items: (LANDING_PRODUCTS[category] ?? []).map(getProduct).filter((product) => product !== undefined),
        }]
        : categories
            .map((item) => ({ category: item, items: products.filter((product) => product.category === item.id) }))
            .filter((group) => group.items.length > 0);

    return (
        <section id="catalogo" className="container relative mx-auto scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
                <span className="mb-4 inline-block rounded-full border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ca-cyan">
                    {category ? groups[0]?.category.name[locale] : ui.services}
                </span>
                <h2 className="font-display text-3xl font-black leading-tight text-ca-text md:text-5xl">{ui.catalogTitle}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ca-muted">{ui.catalogSubtitle}</p>
            </div>

            <div className="space-y-12">
                {groups.map((group) => (
                    <div key={group.category.id}>
                        {!category && (
                            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ca-muted">{group.category.name[locale]}</h3>
                        )}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((product) => (
                                <Link
                                    key={product.id}
                                    href={{ pathname: '/servicios/[categoria]/[slug]', params: productParams(product, locale) }}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-ca-border bg-ca-surface/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ca-cyan/30 hover:shadow-[0_12px_40px_rgba(0,207,255,0.08)]"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ca-cyan/20 bg-ca-cyan/10 text-ca-cyan">
                                        <ProductIcon name={product.icon} size={19} />
                                    </span>
                                    <h4 className="mt-4 font-display text-lg font-bold text-ca-text">{product.content[locale].name}</h4>
                                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ca-muted">{product.content[locale].description}</p>
                                    <div className="mt-auto flex items-center justify-between pt-5">
                                        <span className="text-sm font-semibold text-ca-text">
                                            {formatFrom(product.from.amount[currency], currency, product.from.billing, locale)}
                                        </span>
                                        <ArrowRight size={16} className="text-ca-muted transition-transform group-hover:translate-x-1 group-hover:text-ca-cyan" aria-hidden />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
