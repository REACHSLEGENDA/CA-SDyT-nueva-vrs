import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { AppLocale, DEFAULT_LOCALE, SCHEMA_LANGUAGE, isAppLocale } from './locales';

export const SITE_URL = 'https://casolutecdigital.com';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/assets/home.png`;
export const BUSINESS_NAME = 'CA Soluciones Digitales y Tecnol\u00f3gicas';
export const BUSINESS_PHONE = '+52 595 114 5576';
export const BUSINESS_EMAIL = 'contacto@casolutecdigital.com';
export const BUSINESS_WHATSAPP = 'https://wa.me/525951145576';
export const BUSINESS_SOCIALS = ['https://www.instagram.com/ca.sodiyte', 'https://www.facebook.com/ca.sodiyte'];

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  'es-MX': 'es_MX',
  'en': 'en_US',
  'es-419': 'es_419',
  'es-ES': 'es_ES',
  'pt-BR': 'pt_BR',
};
type LocalizedPathname = string | Partial<Record<string, string>>;


export function getCanonicalUrl(route: string, locale: string): string {
  const base = SITE_URL;
  
  // Manejar subrutas de legal que no están explícitas en pathnames
  let localizedPath = route;
  if (!route.startsWith('/legal/')) {
    const pathnameConfig = (routing.pathnames as unknown as Record<string, LocalizedPathname>)[route];
    if (pathnameConfig) {
      if (typeof pathnameConfig === 'string') {
        localizedPath = pathnameConfig;
      } else {
        localizedPath = pathnameConfig[locale]
          ?? pathnameConfig[routing.defaultLocale]
          ?? route;
      }
    }
  }

  // Si es la home
  if (route === '/') {
    return locale === routing.defaultLocale ? base : `${base}/${locale}`;
  }

  // Si es el locale por defecto (es-MX), no lleva prefijo
  if (locale === routing.defaultLocale) {
    return `${base}${localizedPath}`;
  }

  return `${base}/${locale}${localizedPath}`;
}

export function getLanguageAlternates(route: string): Record<string, string> {
  return {
    'es-MX': getCanonicalUrl(route, 'es-MX'),
    'en': getCanonicalUrl(route, 'en'),
    'es-419': getCanonicalUrl(route, 'es-419'),
    'es-ES': getCanonicalUrl(route, 'es-ES'),
    'pt-BR': getCanonicalUrl(route, 'pt-BR'),
    'x-default': getCanonicalUrl(route, routing.defaultLocale),
  };
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
  
  const languages = getLanguageAlternates(route);

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
  const openGraphLocale = OPEN_GRAPH_LOCALES[locale] || OPEN_GRAPH_LOCALES['es-MX'];
  const alternateLocales = Object.values(OPEN_GRAPH_LOCALES).filter(value => value !== openGraphLocale);

  const keywords = [...routeKeywords, ...baseKeywords];

  return {
    metadataBase: new URL(SITE_URL),
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
      locale: openGraphLocale,
      alternateLocale: alternateLocales,
      url: canonicalUrl,
      siteName: 'CA Soluciones Digitales',
      title,
      description,
      images: [{
        url: DEFAULT_SOCIAL_IMAGE,
        width: 1672,
        height: 941,
        alt: 'CA Soluciones Digitales y Tecnologicas',
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_SOCIAL_IMAGE],
    },
  };
}


/**
 * Fecha de última revisión editorial del contenido de servicios.
 * Alimenta `dateModified`, una señal de frescura que los motores de respuesta
 * ponderan al decidir qué fuente citar. Actualízala cuando cambien los servicios.
 */
export const CONTENT_LAST_REVIEWED = '2026-08-26';

/** Nombre de cada servicio en el idioma de la página. */
const SERVICE_NAMES: Record<string, Record<AppLocale, string>> = {
  '/servicios': {
    'es-MX': 'Desarrollo de Software y Servicios TI',
    'en': 'Software Development and IT Services',
    'es-419': 'Desarrollo de Software y Servicios TI',
    'es-ES': 'Desarrollo de Software y Servicios TI',
    'pt-BR': 'Desenvolvimento de Software e Serviços de TI',
  },
  '/apps-web': {
    'es-MX': 'Desarrollo Web Premium',
    'en': 'Custom Web Application Development',
    'es-419': 'Desarrollo Web a Medida',
    'es-ES': 'Desarrollo Web a Medida',
    'pt-BR': 'Desenvolvimento Web Sob Medida',
  },
  '/apps-moviles': {
    'es-MX': 'Desarrollo de Aplicaciones Móviles',
    'en': 'Mobile App Development for iOS and Android',
    'es-419': 'Desarrollo de Aplicaciones Móviles',
    'es-ES': 'Desarrollo de Aplicaciones Móviles',
    'pt-BR': 'Desenvolvimento de Aplicativos Móveis',
  },
  '/sistemas': {
    'es-MX': 'Desarrollo de Sistemas a Medida (CRM & ERP)',
    'en': 'Custom CRM and ERP Development',
    'es-419': 'Desarrollo de Sistemas a Medida (CRM y ERP)',
    'es-ES': 'Desarrollo de Sistemas a Medida (CRM y ERP)',
    'pt-BR': 'Desenvolvimento de Sistemas Sob Medida (CRM e ERP)',
  },
  '/automatizacion': {
    'es-MX': 'Automatización de Procesos e Integraciones IA',
    'en': 'Business Process Automation and AI Integration',
    'es-419': 'Automatización de Procesos e Integraciones con IA',
    'es-ES': 'Automatización de Procesos e Integraciones con IA',
    'pt-BR': 'Automação de Processos e Integrações com IA',
  },
  '/seo-aeo': {
    'es-MX': 'Optimización de Motores de Búsqueda y de Respuesta (SEO & AEO)',
    'en': 'Search and Answer Engine Optimization (SEO & AEO)',
    'es-419': 'Optimización de Motores de Búsqueda y de Respuesta (SEO y AEO)',
    'es-ES': 'Optimización de Motores de Búsqueda y de Respuesta (SEO y AEO)',
    'pt-BR': 'Otimização para Motores de Busca e de Resposta (SEO e AEO)',
  },
  '/marketing': {
    'es-MX': 'Marketing Digital y Gestión de Redes Sociales',
    'en': 'Digital Marketing and Social Media Management',
    'es-419': 'Marketing Digital y Gestión de Redes Sociales',
    'es-ES': 'Marketing Digital y Gestión de Redes Sociales',
    'pt-BR': 'Marketing Digital e Gestão de Redes Sociais',
  },
  '/paquetes-web': {
    'es-MX': 'Paquetes de Diseño y Desarrollo Web',
    'en': 'Web Design and Development Packages',
    'es-419': 'Paquetes de Diseño y Desarrollo Web',
    'es-ES': 'Paquetes de Diseño y Desarrollo Web',
    'pt-BR': 'Pacotes de Design e Desenvolvimento Web',
  },
  '/infraestructura-ti': {
    'es-MX': 'Servicios de Infraestructura de TI, Redes y Ciberseguridad',
    'en': 'IT Infrastructure, Networking and Cybersecurity Services',
    'es-419': 'Servicios de Infraestructura TI, Redes y Ciberseguridad',
    'es-ES': 'Servicios de Infraestructura TI, Redes y Ciberseguridad',
    'pt-BR': 'Serviços de Infraestrutura de TI, Redes e Cibersegurança',
  },
  '/clases': {
    'es-MX': 'Clases de Cómputo y Capacitación Digital',
    'en': 'Computer Skills and Programming Training',
    'es-419': 'Clases de Informática y Capacitación Digital',
    'es-ES': 'Clases de Informática y Formación Digital',
    'pt-BR': 'Aulas de Informática e Capacitação Digital',
  },
};

/**
 * Cobertura por locale para los servicios que se prestan de forma remota.
 * Es el conjunto de mercados donde la empresa se ofrece activamente, no una
 * promesa de presencia física.
 */
export const REMOTE_COVERAGE: Record<AppLocale, string[]> = {
  'es-MX': ['Mexico', 'United States'],
  'en': ['United States', 'Canada', 'United Kingdom', 'Ireland', 'Australia', 'New Zealand', 'Germany', 'Netherlands', 'United Arab Emirates', 'Singapore'],
  'es-419': ['Colombia', 'Argentina', 'Chile', 'Peru', 'Ecuador', 'Bolivia', 'Uruguay', 'Paraguay', 'Venezuela', 'Costa Rica', 'Panama', 'Guatemala', 'Dominican Republic'],
  'es-ES': ['Spain', 'Andorra'],
  'pt-BR': ['Brazil', 'Portugal'],
};

/**
 * Rutas cuyo servicio requiere presencia física y por tanto NO puede declararse
 * con cobertura internacional: redes, servidores y CCTV dependen de desplazamiento.
 * Declarar lo contrario sería una afirmación falsa en los datos estructurados.
 */
const ONSITE_ONLY_ROUTES = new Set(['/infraestructura-ti']);

export function getServiceSchema(
  serviceType: string,
  locale: string,
  route = '/servicios',
  description?: string
) {
  const appLocale: AppLocale = isAppLocale(locale) ? locale : DEFAULT_LOCALE;

  // La infraestructura física sólo se presta donde hay cobertura; el resto es remoto.
  const countries = ONSITE_ONLY_ROUTES.has(route)
    ? ['Mexico']
    : REMOTE_COVERAGE[appLocale];

  const areaServed = countries.map(country => ({
    '@type': 'Country',
    'name': country
  }));
  const serviceUrl = getCanonicalUrl(route, locale);
  const localizedName = SERVICE_NAMES[route]?.[appLocale] ?? serviceType;


  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': localizedName,
    'serviceType': localizedName,
    '@id': `${serviceUrl}#service`,
    'url': serviceUrl,
    'inLanguage': SCHEMA_LANGUAGE[appLocale],
    'dateModified': CONTENT_LAST_REVIEWED,
    ...(description ? { 'description': description } : {}),
    'provider': {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      'name': BUSINESS_NAME,
      'alternateName': 'CA Digital Solutions',
      'url': SITE_URL,
      'logo': `${SITE_URL}/assets/logo.png`,
      'image': DEFAULT_SOCIAL_IMAGE,
      'telephone': BUSINESS_PHONE,
      'email': BUSINESS_EMAIL,
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
      'name': BUSINESS_NAME,
      'alternateName': 'CA Digital Solutions',
      'url': SITE_URL,
      'logo': `${SITE_URL}/assets/logo.png`,
      'sameAs': BUSINESS_SOCIALS
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
