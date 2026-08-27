import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import PortfolioPageClient from './PortafolioClient';
import { getPageMetadata, getCanonicalUrl, BUSINESS_NAME, SITE_URL } from '@/lib/seoUtils';
import { portfolioItems } from '@/lib/portfolioData';
import { SCHEMA_LANGUAGE, isAppLocale } from '@/lib/locales';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Portafolio de Proyectos y Casos de Éxito | CA Soluciones Digitales',
  'en': 'Our Work & Case Studies Portfolio | CA Digital Solutions',
  'es-419': 'Portafolio de Desarrollo y Software | CA Soluciones Digitales',
  'es-ES': 'Portafolio de Proyectos Digitales | CA Soluciones Digitales',
  'pt-BR': 'Portfólio de Projetos e Sistemas | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Explora nuestros desarrollos: sitios web premium, aplicaciones móviles, sistemas CRM a medida y automatizaciones exitosas.',
  'en': 'Explore our portfolio of custom websites, mobile applications, CRM platforms, and business automations developed for global clients.',
  'es-419': 'Casos de éxito y proyectos entregados a clientes de México, Colombia, Argentina, Chile y toda Latinoamérica.',
  'es-ES': 'Ejemplos de páginas web, e-commerce y aplicaciones móviles a medida desarrolladas para empresas de habla hispana.',
  'pt-BR': 'Veja os projetos que desenvolvemos: aplicativos, websites, CRM e automações personalizadas para nossos clientes.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/portafolio', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pageUrl = getCanonicalUrl('/portafolio', locale);

  // ItemList responde de forma directa a "que ha construido esta agencia",
  // que es justo la pregunta que un motor de respuestas necesita resolver
  // para poder recomendarla.
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#portfolio`,
    'url': pageUrl,
    'name': titles[locale as keyof typeof titles] ?? titles['es-MX'],
    'description': descriptions[locale as keyof typeof descriptions] ?? descriptions['es-MX'],
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'isPartOf': { '@id': `${SITE_URL}/#website` },
    'about': { '@id': `${SITE_URL}/#organization` },
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': portfolioItems.length,
      'itemListElement': portfolioItems.map((project, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'CreativeWork',
          'name': project.title,
          'description': project.description,
          'url': project.url,
          'image': `${SITE_URL}${project.imageUrl}`,
          'creator': { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', 'name': BUSINESS_NAME },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <PortfolioPageClient />
    </>
  );
}
