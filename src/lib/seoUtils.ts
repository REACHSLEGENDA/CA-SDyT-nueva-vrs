import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';

export function getCanonicalUrl(route: string, locale: string): string {
  const base = 'https://casolutecdigital.com';
  
  // Manejar subrutas de legal que no están explícitas en pathnames
  let localizedPath = route;
  if (!route.startsWith('/legal/')) {
    const pathnameConfig = (routing.pathnames as any)[route];
    if (pathnameConfig) {
      if (typeof pathnameConfig === 'string') {
        localizedPath = pathnameConfig;
      } else if (pathnameConfig[locale]) {
        localizedPath = pathnameConfig[locale];
      } else if (pathnameConfig[routing.defaultLocale]) {
        localizedPath = pathnameConfig[routing.defaultLocale];
      }
    }
  }

  // Si es la home
  if (route === '/') {
    return locale === routing.defaultLocale ? base : `${base}/${locale.toLowerCase()}`;
  }

  // Si es el locale por defecto (es-MX), no lleva prefijo
  if (locale === routing.defaultLocale) {
    return `${base}${localizedPath}`;
  }

  return `${base}/${locale.toLowerCase()}${localizedPath}`;
}

export function getPageMetadata(
  route: string,
  locale: string,
  titles: Record<string, string>,
  descriptions: Record<string, string>
): Metadata {
  const title = titles[locale] || titles['es-MX'] || titles['en'];
  const description = descriptions[locale] || descriptions['es-MX'] || descriptions['en'];
  
  const canonicalUrl = getCanonicalUrl(route, locale);
  
  const languages: Record<string, string> = {
    'es-MX': getCanonicalUrl(route, 'es-MX'),
    'en': getCanonicalUrl(route, 'en'),
    'es-419': getCanonicalUrl(route, 'es-419'),
    'es-ES': getCanonicalUrl(route, 'es-ES'),
    'pt-BR': getCanonicalUrl(route, 'pt-BR'),
    'x-default': getCanonicalUrl(route, 'en'),
  };

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'pt-BR' ? 'pt_BR' : 'es_MX',
      url: canonicalUrl,
      siteName: 'CA Soluciones Digitales',
      title,
      description,
      images: [{ url: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png', width: 1200, height: 630 }]
    }
  };
}

export function getServiceSchema(serviceType: string, locale: string) {
  const countries = {
    'es-MX': ['Mexico'],
    'en': ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'India', 'United Arab Emirates'],
    'es-419': ['Colombia', 'Argentina', 'Chile', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Uruguay', 'Paraguay'],
    'es-ES': ['Spain'],
    'pt-BR': ['Brazil']
  };

  const areaServed = (countries[locale as keyof typeof countries] || countries['es-MX']).map(country => ({
    '@type': 'Country',
    'name': country
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceType,
    'serviceType': serviceType,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CA Soluciones Digitales y Tecnológicas',
      'alternateName': 'CA Digital Solutions',
      'url': 'https://casolutecdigital.com',
      'logo': 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png',
      'image': 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png',
      'telephone': '+52 56 3368 0348',
      'email': 'ca.sodiyte@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mexico City',
        'addressCountry': 'MX'
      }
    },
    'areaServed': areaServed
  };
}

export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'CA Soluciones Digitales y Tecnológicas',
      'alternateName': 'CA Digital Solutions',
      'url': 'https://casolutecdigital.com',
      'logo': 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png',
      'sameAs': [
        'https://www.instagram.com/ca.sodiyte',
        'https://www.facebook.com/ca.sodiyte'
      ]
    }
  };
}
