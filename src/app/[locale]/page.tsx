import type { Metadata } from 'next';
import { HomeClient } from '@/components/pages/HomeClient';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return {
      metadataBase: new URL('https://casolutecdigital.com'),
      title: 'CA Digital Solutions | Web Development, Apps & IT Services Worldwide',
      description: 'Mexican software agency serving clients worldwide. We build professional websites, mobile apps, custom CRM systems, automation with AI, WhatsApp bots and IT infrastructure. Remote work. Competitive prices. Real support.',
      keywords: [
        'web development agency Mexico', 'affordable web development Latin America', 'Next.js development agency',
        'React web development remote', 'custom software development Mexico', 'web development company Mexico English',
        'mobile app development Mexico', 'Flutter app development agency', 'Android iOS app development Latin America',
        'custom CRM development', 'SaaS development agency Latin America', 'custom software remote team Mexico',
        'IT support services Mexico', 'network installation Mexico', 'Fortinet firewall setup Mexico',
        'Windows Server 2025 setup', 'Synology NAS configuration', 'Google Workspace admin Mexico',
        'AI automation agency', 'WhatsApp bot development', 'business automation Mexico', 'n8n automation agency',
        'SEO agency Mexico English', 'AEO optimization agency', 'affordable web development English speaking Mexico',
        'nearshore software development Mexico', 'outsource web development Mexico', 'hire Mexican developers'
      ],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://casolutecdigital.com/en',
        siteName: 'CA Digital Solutions',
        title: 'CA Digital Solutions | Web, Apps & IT Services — Mexico-based, Global Reach',
        description: 'We build websites, apps, CRM systems, WhatsApp bots and IT infrastructure for businesses worldwide. Mexico-based team, English-speaking, remote-first. Competitive rates, enterprise quality.',
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
        'agencia digital México para LATAM', 'outsourcing desarrollo software LATAM', 'agencia web remota español'
      ],
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
        'bot WhatsApp empresas España', 'agencia digital hispanohablante', 'nearshore desarrollo software España'
      ],
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
        'bot WhatsApp empresas Brasil', 'outsourcing software desenvolvimento Brasil', 'agência digital LATAM português'
      ],
      alternates: {
        canonical: 'https://casolutecdigital.com/pt-br/'
      }
    };
  }

  // Default: es-MX
  return {
    title: 'CA Soluciones Digitales | Desarrollo Web · Infraestructura TI · Ciberseguridad',
    description: 'Ecosistemas digitales completos: webs, apps, sistemas, redes, ciberseguridad, CCTV, servidores y soporte TI. Todo para operar sin interrupciones.',
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeClient />
    </>
  );
}
