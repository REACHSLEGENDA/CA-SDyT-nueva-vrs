import type { Metadata } from 'next';
import { HomeClient } from '@/components/pages/HomeClient';
import { getTranslations } from 'next-intl/server';
import { faqs } from '@/lib/faqData';

interface Props {
  params: Promise<{ locale: string }>;
}

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

  if (locale === 'en') {
    return {
      metadataBase: new URL('https://casolutecdigital.com'),
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
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://casolutecdigital.com/en',
        siteName: 'CA Digital Solutions',
        title: 'CA Digital Solutions | Web, Apps & IT Services — Enterprise Quality, Competitive Rates',
        description: 'Professional software agency building custom websites, mobile apps, CRM systems, and AI automation for businesses worldwide. English-speaking remote team, competitive rates.',
        images: [{ url: '/assets/og-image-en.jpg', width: 1200, height: 630 }]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/en'
      }
    };
  }

  if (locale === 'es-419') {
    return {
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
      openGraph: {
        type: 'website',
        locale: 'es_MX',
        url: 'https://casolutecdigital.com/es-419',
        siteName: 'CA Soluciones Digitales',
        title: 'CA Soluciones Digitales | Agencia Web, Apps y Sistemas para toda Latinoamérica',
        description: 'Agencia digital con sede en México atendiendo clientes en toda Latinoamérica. Desarrollo web, apps móviles, CRM, automatización con IA y bots de WhatsApp. Trabajo 100% remoto. Precios en USD. Soporte real.',
        images: [{ url: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png', width: 1200, height: 630 }]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/es-419/'
      }
    };
  }

  if (locale === 'es-ES') {
    return {
      title: 'CA Soluciones Digitales | Agencia de Desarrollo Web y Apps desde México para España',
      description: 'Agencia digital mexicana con servicios para España. Desarrollo web con React y Next.js, apps móviles, sistemas a medida, CRM, automatización con IA y bots de WhatsApp. Servicio remoto, precios competitivos.',
      keywords: [
        'agencia desarrollo web México para España', 'desarrollo web barato para España', 'outsourcing web España México',
        'apps móviles para empresas España', 'CRM personalizado España', 'automatización IA para empresas España',
        'bot WhatsApp empresas España', 'agencia digital hispanohablante', 'nearshore desarrollo software España',
        'desarrollo de paginas web madrid barcelona valencia'
      ],
      robots,
      openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://casolutecdigital.com/es-es',
        siteName: 'CA Soluciones Digitales',
        title: 'CA Soluciones Digitales | Agencia de Desarrollo Web y Apps desde México para España',
        description: 'Agencia digital mexicana con servicios para España. Desarrollo web con React y Next.js, apps móviles, sistemas a medida, CRM, automatización con IA y bots de WhatsApp. Servicio remoto, precios competitivos.',
        images: [{ url: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png', width: 1200, height: 630 }]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/es-es/'
      }
    };
  }

  if (locale === 'pt-BR') {
    return {
      title: 'CA Soluções Digitais | Desenvolvimento Web, Apps e Sistemas no Brasil',
      description: 'Agência digital mexicana atendendo clientes no Brasil. Desenvolvimento web com React e Next.js, apps móveis, sistemas personalizados, CRM, automação com IA e bots do WhatsApp. Trabalho remoto, preços competitivos.',
      keywords: [
        'agência desenvolvimento web México Brasil', 'desenvolvimento web React Next.js Brasil',
        'aplicativo móvel Android iOS Brasil', 'CRM personalizado Brasil', 'automação de processos IA Brasil',
        'bot WhatsApp empresas Brasil', 'outsourcing software desenvolvimento Brasil', 'agência digital LATAM português',
        'desenvolvimento de sistemas sao paulo rio de janeiro'
      ],
      robots,
      openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://casolutecdigital.com/pt-br',
        siteName: 'CA Soluções Digitais',
        title: 'CA Soluções Digitais | Desenvolvimento Web, Apps e Sistemas no Brasil',
        description: 'Agência digital mexicana atendendo clientes no Brasil. Desenvolvimento web com React e Next.js, apps móveis, sistemas personalizados, CRM, automação com IA e bots do WhatsApp. Trabalho remoto, preços competitivos.',
        images: [{ url: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png', width: 1200, height: 630 }]
      },
      alternates: {
        canonical: 'https://casolutecdigital.com/pt-br/'
      }
    };
  }

  // Default: es-MX
  return {
    title: 'CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad',
    description: 'Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones.',
    keywords: [
      'desarrollo web mexico', 'creacion de paginas web cdmx', 'sistemas web a medida mexico',
      'agencia de software mexico', 'desarrollo de apps moviles mexico', 'automatizacion de procesos con ia mexico',
      'soporte ti y ciberseguridad cdmx', 'outsourcing ti mexico', 'desarrolladores nextjs react mexico',
      'servidores y redes monterrey guadalajara', 'agencia digital mexico', 'consultoria ti mexico',
      'outsourcing desarrollo de software espana latam'
    ],
    robots,
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: 'https://casolutecdigital.com',
      siteName: 'CA Soluciones Digitales',
      title: 'CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad',
      description: 'Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones.',
      images: [{ url: 'https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/logo.png', width: 1200, height: 630 }]
    },
    alternates: {
      canonical: 'https://casolutecdigital.com/'
    }
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const schema = {
    '@context': 'https://schema.org',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
