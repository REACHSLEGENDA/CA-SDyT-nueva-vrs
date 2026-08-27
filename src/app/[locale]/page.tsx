import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { SCHEMA_LANGUAGE, isAppLocale } from '@/lib/locales';
import { HomeClient } from '@/components/pages/HomeClient';
import { BUSINESS_EMAIL, BUSINESS_NAME, CONTENT_LAST_REVIEWED, BUSINESS_PHONE, BUSINESS_SOCIALS, BUSINESS_WHATSAPP, DEFAULT_SOCIAL_IMAGE, getCanonicalUrl, getLanguageAlternates, SITE_URL } from '@/lib/seoUtils';
import { getFaqs } from '@/lib/faqData';

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * Descripcion de la entidad por idioma. Es uno de los campos que los motores de
 * respuesta citan al presentar la empresa, asi que cada mercado recibe el encuadre
 * que le corresponde. Donde no hay cobertura fisica se dice de forma explicita que
 * el servicio es remoto, para no afirmar de mas.
 */
const BUSINESS_DESCRIPTIONS: Record<string, string> = {
  'es-MX': 'Agencia mexicana de desarrollo de software, automatizacion con IA, SEO/AEO e infraestructura TI. Servicios digitales remotos en todo Mexico; los servicios de infraestructura fisica estan sujetos a cobertura.',
  'en': 'Mexico-based software agency building custom web applications, mobile apps, CRM systems and AI automation for companies in the United States, Canada, the United Kingdom and Europe. English-speaking team working remotely with business-hours overlap across the Americas.',
  'es-419': 'Agencia de desarrollo de software, automatizacion con IA y SEO/AEO para empresas de Latinoamerica. Servicios digitales 100% remotos en Colombia, Chile, Argentina, Peru y el resto de la region.',
  'es-ES': 'Agencia de desarrollo de software a medida, aplicaciones moviles, automatizacion con IA y SEO/AEO para empresas en Espana. Servicios digitales prestados de forma remota.',
  'pt-BR': 'Agencia de desenvolvimento de software sob medida, aplicativos moveis, automacao com IA e SEO/AEO para empresas no Brasil. Servicos digitais prestados remotamente.',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const robots = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as const;

  const languages = getLanguageAlternates('/');
  const socialImage = {
    url: DEFAULT_SOCIAL_IMAGE,
    width: 1672,
    height: 941,
    alt: 'CA Soluciones Digitales y Tecnologicas',
  };
  const twitter = {
    card: 'summary_large_image' as const,
    images: [DEFAULT_SOCIAL_IMAGE],
  };

  if (locale === 'en') {
    return {
      metadataBase: new URL(SITE_URL),
      title: 'CA Digital Solutions | Web Development, Apps & IT Services Worldwide',
      description: 'Professional software agency serving businesses worldwide. We design and build custom websites, mobile apps, CRM systems, AI automation, and IT solutions. English-speaking team, competitive remote rates, and enterprise-grade support.',
      keywords: [
        // General Global Keywords (High Volume)
        'web development agency',
        'custom software development',
        'mobile app development company',
        'custom CRM development',
        'AI automation agency',
        'hire Next.js developers',
        'React web development remote',
        'SaaS development agency',
        'Flutter app development company',
        'WhatsApp bot development',
        'n8n automation services',
        'AEO optimization agency',
        'affordable web development agency',
        'custom software development remote',
        // Nearshore & Mexico Specific Keywords (High Value B2B)
        'nearshore software development Mexico',
        'outsource web development Mexico',
        'software development agency Latin America',
        'affordable web development Mexico',
        'hire developers in Mexico English speaking',
        'IT support services Mexico'
      ],
      robots,
      twitter,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://casolutecdigital.com/en',
        siteName: 'CA Digital Solutions',
        title: 'CA Digital Solutions | Web, Apps & IT Services — Enterprise Quality, Competitive Rates',
        description: 'Professional software agency building custom websites, mobile apps, CRM systems, and AI automation for businesses worldwide. English-speaking remote team, competitive rates.',
        images: [socialImage]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/en',
        languages,
      }
    };
  }

  if (locale === 'es-419') {
    return {
      metadataBase: new URL(SITE_URL),
      title: 'CA Soluciones Digitales | Agencia Web, Apps y Sistemas para toda Latinoamérica',
      description: 'Agencia digital con sede en México atendiendo clientes en toda Latinoamérica. Desarrollo web, apps móviles, CRM, automatización con IA y bots de WhatsApp. Trabajo 100% remoto. Precios en USD. Soporte real.',
      keywords: [
        'agencia de desarrollo web Latinoamérica', 'desarrollo web Colombia', 'desarrollo web Argentina',
        'desarrollo web Chile', 'desarrollo web Perú', 'desarrollo web Venezuela', 'apps móviles LATAM',
        'CRM personalizado Latinoamérica', 'automatización con IA empresa LATAM', 'bot WhatsApp empresa LATAM',
        'agencia digital México para LATAM', 'outsourcing desarrollo software LATAM', 'agencia web remota español',
        'desarrollo de sistemas a medida colombia peru chile ecuador'
      ],
      robots,
      twitter,
      openGraph: {
        type: 'website',
        locale: 'es_419',
        url: 'https://casolutecdigital.com/es-419',
        siteName: 'CA Soluciones Digitales',
        title: 'CA Soluciones Digitales | Agencia Web, Apps y Sistemas para toda Latinoamérica',
        description: 'Agencia digital con sede en México atendiendo clientes en toda Latinoamérica. Desarrollo web, apps móviles, CRM, automatización con IA y bots de WhatsApp. Trabajo 100% remoto. Precios en USD. Soporte real.',
        images: [socialImage]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/es-419',
        languages,
      }
    };
  }

  if (locale === 'es-ES') {
    return {
      title: 'CA Soluciones Digitales | Agencia de Desarrollo Web y Apps desde México para España',
      metadataBase: new URL(SITE_URL),
      description: 'Agencia digital mexicana con servicios para España. Desarrollo web con React y Next.js, apps móviles, sistemas a medida, CRM, automatización con IA y bots de WhatsApp. Servicio remoto, precios competitivos.',
      keywords: [
        'agencia desarrollo web México para España', 'desarrollo web barato para España', 'outsourcing web España México',
        'apps móviles para empresas España', 'CRM personalizado España', 'automatización IA para empresas España',
        'bot WhatsApp empresas España', 'agencia digital hispanohablante', 'nearshore desarrollo software España',
        'desarrollo de paginas web madrid barcelona valencia'
      ],
      robots,
      twitter,
      openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://casolutecdigital.com/es-ES',
        siteName: 'CA Soluciones Digitales',
        title: 'CA Soluciones Digitales | Agencia de Desarrollo Web y Apps desde México para España',
        description: 'Agencia digital mexicana con servicios para España. Desarrollo web con React y Next.js, apps móviles, sistemas a medida, CRM, automatización con IA y bots de WhatsApp. Servicio remoto, precios competitivos.',
        images: [socialImage]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/es-ES',
        languages,
      }
    };
  }

  if (locale === 'pt-BR') {
    return {
      title: 'CA Soluções Digitais | Desenvolvimento Web, Apps e Sistemas no Brasil',
      description: 'Agência digital mexicana atendendo clientes no Brasil. Desenvolvimento web com React e Next.js, apps móveis, sistemas personalizados, CRM, automação com IA e bots do WhatsApp. Trabalho remoto, preços competitivos.',
      metadataBase: new URL(SITE_URL),
      keywords: [
        'agência desenvolvimento web México Brasil', 'desenvolvimento web React Next.js Brasil',
        'aplicativo móvel Android iOS Brasil', 'CRM personalizado Brasil', 'automação de processos IA Brasil',
        'bot WhatsApp empresas Brasil', 'outsourcing software desenvolvimento Brasil', 'agência digital LATAM português',
        'desenvolvimento de sistemas sao paulo rio de janeiro'
      ],
      robots,
      twitter,
      openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://casolutecdigital.com/pt-BR',
        siteName: 'CA Soluções Digitais',
        title: 'CA Soluções Digitais | Desenvolvimento Web, Apps e Sistemas no Brasil',
        description: 'Agência digital mexicana atendendo clientes no Brasil. Desenvolvimento web com React e Next.js, apps móveis, sistemas personalizados, CRM, automação com IA e bots do WhatsApp. Trabalho remoto, preços competitivos.',
        images: [socialImage]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/pt-BR',
        languages,
      }
    };
  }

  // Default: es-MX
  return {
    title: 'CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad',
    description: 'Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones.',
    metadataBase: new URL(SITE_URL),
    keywords: [
      'desarrollo web mexico', 'creacion de paginas web cdmx', 'sistemas web a medida mexico',
      'agencia de software mexico', 'desarrollo de apps moviles mexico', 'automatizacion de procesos con ia mexico',
      'soporte ti y ciberseguridad cdmx', 'outsourcing ti mexico', 'desarrolladores nextjs react mexico',
      'servidores y redes monterrey guadalajara', 'agencia digital mexico', 'consultoria ti mexico',
      'outsourcing desarrollo de software espana latam'
    ],
    robots,
    twitter,
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: 'https://casolutecdigital.com',
      siteName: 'CA Soluciones Digitales',
      title: 'CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad',
      description: 'Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones.',
      images: [socialImage]
    },
    alternates: {
      canonical: SITE_URL,
      languages,
    }
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    'url': SITE_URL,
    'name': locale === 'en' ? 'CA Digital Solutions' : 'CA Soluciones Digitales',
    'alternateName': locale === 'en' ? 'CA Soluciones Digitales' : 'CA Digital Solutions',
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'publisher': { '@id': `${SITE_URL}/#organization` }
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    'name': BUSINESS_NAME,
    'alternateName': 'CA Digital Solutions',
    'url': SITE_URL,
    'logo': `${SITE_URL}/assets/logo.png`,
    'image': DEFAULT_SOCIAL_IMAGE,
    'telephone': BUSINESS_PHONE,
    'email': BUSINESS_EMAIL,
    'description': BUSINESS_DESCRIPTIONS[locale] ?? BUSINESS_DESCRIPTIONS['es-MX'],
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'dateModified': CONTENT_LAST_REVIEWED,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': BUSINESS_PHONE,
      'email': BUSINESS_EMAIL,
      'url': BUSINESS_WHATSAPP,
      'contactType': 'sales and customer service',
      'availableLanguage': ['Spanish', 'English', 'Portuguese']
    },
    'sameAs': BUSINESS_SOCIALS,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Mexico City',
      'addressCountry': 'MX'
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Mexico' },
      { '@type': 'Country', 'name': 'Colombia' },
      { '@type': 'Country', 'name': 'Argentina' },
      { '@type': 'Country', 'name': 'Chile' },
      { '@type': 'Country', 'name': 'Peru' },
      { '@type': 'Country', 'name': 'Venezuela' },
      { '@type': 'Country', 'name': 'Ecuador' },
      { '@type': 'Country', 'name': 'Bolivia' },
      { '@type': 'Country', 'name': 'Uruguay' },
      { '@type': 'Country', 'name': 'Paraguay' },
      { '@type': 'Country', 'name': 'Brazil' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'Canada' },
      { '@type': 'Country', 'name': 'Spain' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'Germany' },
      { '@type': 'Country', 'name': 'France' },
      { '@type': 'Country', 'name': 'Netherlands' },
      { '@type': 'Country', 'name': 'Italy' },
      { '@type': 'Country', 'name': 'Portugal' },
      { '@type': 'Country', 'name': 'Russia' },
      { '@type': 'Country', 'name': 'India' },
      { '@type': 'Country', 'name': 'Saudi Arabia' },
      { '@type': 'Country', 'name': 'United Arab Emirates' }
    ],
    'availableChannel': {
      '@type': 'ServiceChannel',
      'serviceType': 'Remote / Online',
      'availableLanguage': ['Spanish', 'English', 'Portuguese']
    }
  };

  const faqs = getFaqs(locale);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${getCanonicalUrl('/', locale)}#faq`,
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
