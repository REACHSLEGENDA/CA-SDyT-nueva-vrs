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

function getRouteKeywords(route: string, locale: string): string[] {
  const keywordsByRoute: Record<string, Record<string, string[]>> = {
    '/seo-aeo': {
      'es-MX': ['posicionamiento seo google', 'optimizacion motores de respuesta aeo', 'chatgpt seo mexico', 'perplexity aeo cdmx', 'auditoria seo gratis'],
      'es-419': ['seo y aeo latinoamerica', 'optimizacion chatgpt bogota santiago', 'posicionamiento motores de IA chile', 'agencia aeo colombia'],
      'es-ES': ['agencia seo madrid barcelona', 'optimizacion motores de respuesta aeo espana', 'posicionamiento chatgpt espana', 'auditoria aeo gratis madrid'],
      'en': ['seo aeo optimization google chatgpt', 'rank on perplexity gemini claude', 'answer engine optimization agency', 'seo audit for startup'],
      'pt-BR': ['otimizacao seo aeo google ia', 'posicionamento no chatgpt perplexity brasil', 'consultoria seo aeo sao paulo', 'otimizar para motores de resposta']
    },
    '/sistemas': {
      'es-MX': ['desarrollo crm pos erp mexico', 'sistemas a medida cdmx', 'software administrativo monterrey', 'sistema de punto de venta a medida', 'bases de datos sql postgresql'],
      'es-419': ['crm erp a medida latinoamerica', 'desarrollo de sistemas personalizados colombia', 'sistemas de inventario chile argentina', 'software empresarial latam'],
      'es-ES': ['desarrollo crm erp espana', 'sistemas a medida madrid barcelona', 'software gestion empresarial espana', 'consultoria bases de datos espana'],
      'en': ['custom crm erp development usa', 'bespoke business software solutions', 'inventory management systems canada', 'postgresql mysql database developers'],
      'pt-BR': ['desenvolvimento crm erp personalizado brasil', 'sistemas de gestao sob medida', 'software administrativo sao paulo', 'desenvolvimento de bancos de dados']
    },
    '/automatizacion': {
      'es-MX': ['automatizacion de procesos con ia', 'bot de whatsapp business api mexico', 'consultoria n8n make cdmx', 'automatizar flujos de trabajo empresa', 'chatbots inteligentes para ventas'],
      'es-419': ['automatizacion con ia latinoamerica', 'crear bot whatsapp empresas colombia', 'flujos de trabajo automaticos chile peru', 'consultor n8n latam'],
      'es-ES': ['automatizacion de procesos ia espana', 'bot whatsapp business madrid barcelona', 'consultor n8n make espana', 'automatizar tareas repetitivas empresas'],
      'en': ['workflow automation n8n make', 'whatsapp business api chatbot development', 'ai agent integration services', 'automate business processes remote'],
      'pt-BR': ['automacao de processos com ia brasil', 'chatbot whatsapp business api', 'consultoria n8n make sao paulo', 'automatizar fluxos de trabalho empresas']
    },
    '/apps-web': {
      'es-MX': ['desarrollo de paginas web nextjs react', 'creacion de aplicaciones web mexico', 'desarrollo web frontend backend cdmx', 'paginas web rapidas premium', 'desarrolladores nextjs mexico'],
      'es-419': ['desarrollo web react nextjs latinoamerica', 'crear aplicacion web colombia chile', 'desarrolladores frontend latam', 'paginas web administrables latam'],
      'es-ES': ['desarrollo web nextjs react espana', 'aplicaciones web a medida madrid barcelona', 'desarrolladores frontend backend espana', 'paginas web premium nextjs'],
      'en': ['custom web application development nextjs react', 'hire nextjs frontend developers', 'fullstack web development remote', 'fast responsive websites nextjs'],
      'pt-BR': ['desenvolvimento web react nextjs brasil', 'aplicativos web sob medida sao paulo', 'programadores nextjs react brasil', 'paginas web de alta performance']
    },
    '/apps-moviles': {
      'es-MX': ['desarrollo de apps moviles ios android', 'crear aplicaciones con flutter react native', 'diseno de interfaces ui ux app cdmx', 'desarrollador flutter mexico', 'publicar app google play app store'],
      'es-419': ['desarrollo apps moviles latinoamerica', 'crear aplicacion android ios colombia chile', 'desarrolladores flutter latam', 'diseno ui ux apps latam'],
      'es-ES': ['desarrollo apps moviles espana', 'crear aplicaciones ios android madrid barcelona', 'desarrolladores flutter react native espana', 'diseno ui ux apps espana'],
      'en': ['mobile app development ios android flutter react native', 'hire mobile app developers remote', 'ui ux design for mobile apps', 'publish app store play store'],
      'pt-BR': ['desenvolvimento de aplicativos android ios brasil', 'desenvolvedor flutter react native', 'design ui ux para aplicativos', 'publicar aplicativo google play app store']
    },
    '/contacto': {
      'es-MX': ['agendar consultoria gratuita de software', 'cotizar desarrollo web gratis mexico', 'contacto ca soluciones digitales', 'telefono de soporte ti cdmx'],
      'es-419': ['cotizar desarrollo de software latam', 'presupuesto pagina web gratis colombia chile', 'contacto desarrolladores software latam', 'soporte tecnico remoto latam'],
      'es-ES': ['presupuesto desarrollo web madrid barcelona', 'cotizar software a medida espana', 'contacto desarrolladores software espana', 'agendar consultoria tecnologica espana'],
      'en': ['request free software development quote', 'contact nearshore developers mexico', 'hire remote software agency', 'get free tech consultation'],
      'pt-BR': ['solicitar orcamento desenvolvimento web', 'contato agência de software brasil', 'agendar consultoria de software gratuita', 'suporte tecnico remoto brasil']
    },
    '/portafolio': {
      'es-MX': ['casos de exito desarrollo software mexico', 'proyectos web realizados cdmx', 'portafolio de aplicaciones moviles', 'ejemplos de sistemas a medida realizados'],
      'es-419': ['portafolio de desarrollo de software latam', 'casos de exito paginas web colombia chile', 'proyectos realizados apps moviles latam', 'ejemplos de automatizaciones ia'],
      'es-ES': ['proyectos desarrollo software espana', 'portafolio paginas web madrid barcelona', 'casos de exito sistemas a medida espana', 'ejemplos de bots whatsapp realizados'],
      'en': ['software development case studies portfolio', 'custom web app projects portfolio', 'mobile app portfolio nearshore', 'successful automation projects examples'],
      'pt-BR': ['portfolio de desenvolvimento de software brasil', 'casos de sucesso desenvolvimento web', 'exemplos de aplicativos desenvolvidos', 'sistemas de gestao realizados']
    }
  };

  return keywordsByRoute[route]?.[locale] || [];
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

  // Default Regional Keywords per locale to cover LATAM, Spain, US, Brazil
  const defaultKeywords: Record<string, string[]> = {
    'es-MX': [
      'desarrollo web mexico', 'creacion de paginas web cdmx', 'sistemas web a medida mexico',
      'agencia de software mexico', 'desarrollo de apps moviles mexico', 'automatizacion de procesos con ia mexico',
      'soporte ti y ciberseguridad cdmx', 'outsourcing ti mexico', 'desarrolladores nextjs react mexico',
      'servidores y redes monterrey guadalajara', 'agencia digital mexico', 'consultoria ti mexico'
    ],
    'es-419': [
      'agencia de software latinoamerica', 'desarrollo web colombia', 'desarrollo web chile',
      'desarrollo web argentina', 'desarrollo web peru', 'desarrollo web ecuador', 'desarrollo web uruguay',
      'desarrollo de aplicaciones moviles latam', 'crm personalizado bogota santiago buenos aires',
      'automatizacion ia empresas chile colombia', 'outsourcing de desarrollo de software latam',
      'programadores remoto latinoamerica', 'empresa de tecnologia latam'
    ],
    'es-ES': [
      'agencia de desarrollo web madrid barcelona', 'desarrollo web nextjs espana', 'creacion de apps moviles madrid',
      'empresa de software a medida espana', 'crm personalizado espana', 'automatizacion de procesos ia espana',
      'agencia seo y aeo espana', 'consultoria tecnologica espana', 'outsourcing de desarrollo web espana',
      'desarrollo de paginas web valencia sevilla', 'desarrollo software de calidad espana'
    ],
    'en': [
      'nearshore software development mexico', 'outsource web development to mexico', 'nearshore developers latin america',
      'custom web development agency usa', 'mobile app developers canada', 'ai automation agency usa',
      'custom crm developers latin america', 'hire react developers nearshore', 'software development company americas',
      'whatsapp bot for business usa', 'n8n integration services remote'
    ],
    'pt-BR': [
      'desenvolvimento web react nextjs brasil', 'agencia de software personalizado brasil',
      'desenvolvimento de aplicativos android ios brasil', 'automacao de processos com ia brasil',
      'outsourcing de software latam', 'crm sob medida brasil', 'desenvolvimento de sistemas brasil'
    ]
  };

  const routeKeywords = getRouteKeywords(route, locale);
  const baseKeywords = defaultKeywords[locale] || defaultKeywords['es-MX'];
  const keywords = [...routeKeywords, ...baseKeywords];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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

export function getBreadcrumbSchema(route: string, locale: string, pageName: string) {
  const homeName = locale === 'en' ? 'Home' : locale === 'pt-BR' ? 'Início' : 'Inicio';
  const servicesName = locale === 'en' ? 'Services' : locale === 'pt-BR' ? 'Serviços' : 'Servicios';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': homeName,
        'item': getCanonicalUrl('/', locale)
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': servicesName,
        'item': getCanonicalUrl('/servicios', locale)
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': pageName,
        'item': getCanonicalUrl(route, locale)
      }
    ]
  };
}
