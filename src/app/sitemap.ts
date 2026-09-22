import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { CONTENT_LAST_REVIEWED } from '@/lib/seoUtils';
import { getLanguageAlternates } from '@/lib/seoUtils';
import { guides } from '@/lib/catalog/guides';
import { CATALOG_LAST_REVIEWED, products } from '@/lib/catalog/products';
import { guideUrl, guidesIndexUrl, productUrl } from '@/lib/catalog/urls';
import { CATALOG_LOCALES, type CatalogLocale } from '@/lib/catalog/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casolutecdigital.com';
  
  // Rutas canónicas reales en el proyecto
  const routes = [
    '/',
    '/servicios',
    '/apps-web',
    '/apps-moviles',
    '/sistemas',
    '/automatizacion',
    '/seo-aeo',
    '/infraestructura-ti',
    '/marketing',
    '/paquetes-web',
    '/clases',
    '/portafolio',
    '/nosotros',
    '/contacto',
    '/legal/privacidad',
    '/legal/terminos'
  ];

  const locales = ['es-MX', 'en', 'es-419', 'es-ES', 'pt-BR'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    routes.forEach(route => {
      // Determinar la ruta correspondiente según next-intl pathnames
      let localizedPath = route;
      const config = (routing.pathnames as any)[route];
      
      if (config) {
        if (typeof config === 'string') {
          localizedPath = config;
        } else if (config[locale]) {
          localizedPath = config[locale];
        } else if (config[routing.defaultLocale]) {
          localizedPath = config[routing.defaultLocale];
        }
      }

      // Manejar subrutas de legal que no están explícitas en pathnames
      if (route.startsWith('/legal/')) {
        localizedPath = route;
      }

      let url = '';
      if (locale === 'es-MX') {
        // es-MX es el idioma por defecto sin prefijo
        url = `${base}${localizedPath === '/' ? '' : localizedPath}`;
      } else {
        url = `${base}/${locale}${localizedPath === '/' ? '' : localizedPath}`;
      }

      // Prioridad y frecuencia de actualización
      let priority = 0.8;
      let changeFrequency: 'weekly' | 'monthly' = 'weekly';

      if (route === '/') {
        priority = 1.0;
      } else if (['/servicios', '/contacto', '/nosotros'].includes(route)) {
        priority = 0.9;
      } else if (route.startsWith('/legal/')) {
        priority = 0.5;
        changeFrequency = 'monthly';
      }

      // `alternates.languages` publica el hreflang tambien en el sitemap, no solo en
      // el <head>. Es la forma que Google recomienda para sitios multiidioma y ayuda a
      // que descubra las 5 versiones de cada pagina aunque solo rastree una.
      // Se excluye x-default: Next lo emitiria como un hreflang mas, y en el sitemap
      // duplicaria la URL del locale por defecto.
      const alternates = getLanguageAlternates(route);
      const languages = Object.fromEntries(
        Object.entries(alternates).filter(([hreflang]) => hreflang !== 'x-default')
      );

      sitemapEntries.push({
        url,
        lastModified: new Date(CONTENT_LAST_REVIEWED),
        changeFrequency,
        priority,
        alternates: { languages }
      });
    });
  });

  // Catálogo y CA Explica (fase 1: es-MX y en). El hreflang solo enlaza las dos
  // versiones que existen; anunciar las otras tres apuntaría a páginas 404.
  const catalogEntry = (
    urls: Record<CatalogLocale, string | null>,
    lastModified: string,
    priority: number,
  ) => {
    // Solo los idiomas en los que existe la página (hay guías solo para México).
    const published = CATALOG_LOCALES.filter((locale) => urls[locale]);
    const languages = Object.fromEntries(published.map((locale) => [locale, urls[locale]!]));
    return published.map((locale) => ({
      url: urls[locale]!,
      lastModified: new Date(lastModified),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages },
    }));
  };

  const byLocale = <T,>(build: (locale: CatalogLocale) => T) =>
    Object.fromEntries(CATALOG_LOCALES.map((locale) => [locale, build(locale)])) as Record<CatalogLocale, T>;

  sitemapEntries.push(...catalogEntry(byLocale(guidesIndexUrl), CONTENT_LAST_REVIEWED, 0.8));
  for (const guide of guides) {
    sitemapEntries.push(...catalogEntry(byLocale((locale) => guideUrl(guide, locale)), guide.dateModified, 0.8));
  }
  for (const product of products) {
    sitemapEntries.push(...catalogEntry(byLocale((locale) => productUrl(product, locale)), CATALOG_LAST_REVIEWED, 0.8));
  }

  return sitemapEntries;
}

