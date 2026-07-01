import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casolutecdigital.com';
  const now = new Date();
  
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
        url = `${base}/${locale.toLowerCase()}${localizedPath === '/' ? '' : localizedPath}`;
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

      sitemapEntries.push({
        url,
        lastModified: now,
        changeFrequency,
        priority
      });
    });
  });

  return sitemapEntries;
}

