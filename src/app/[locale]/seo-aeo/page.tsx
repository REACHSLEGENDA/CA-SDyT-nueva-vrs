import type { Metadata } from 'next';
import SeoAeoPageClient from './SeoAeoClient';
import { getPageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Posicionamiento SEO y AEO para Google e IAs | CA Soluciones Digitales',
  'en': 'SEO & AEO Optimization for Google & AI | CA Digital Solutions',
  'es-419': 'Optimización SEO y AEO para Latinoamérica | CA Soluciones Digitales',
  'es-ES': 'Servicios de Posicionamiento SEO y AEO | CA Soluciones Digitales',
  'pt-BR': 'Otimização SEO e AEO para Google e IA | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Optimiza tu negocio para aparecer en Google, ChatGPT, Gemini, Perplexity y Claude. Estrategias avanzadas de SEO y optimización para motores de respuesta.',
  'en': 'Optimize your business to rank on Google, ChatGPT, Gemini, Perplexity, and Claude. Advanced search engine and answer engine optimization.',
  'es-419': 'Atrae clientes posicionándote en Google y motores de IA en toda Latinoamérica. Auditoría, optimización on-page y posicionamiento de respuesta.',
  'es-ES': 'Estrategias de SEO y AEO para empresas en España. Domina los resultados de búsqueda tradicionales y las respuestas generadas por IA.',
  'pt-BR': 'Posicione sua empresa no Google e em assistentes de IA como ChatGPT e Claude. Otimização avançada de SEO e motores de resposta no Brasil.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/seo-aeo', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Optimización de Motores de Búsqueda y de Respuesta (SEO & AEO)', locale);
  const breadcrumb = getBreadcrumbSchema('/seo-aeo', locale, 'SEO & AEO');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SeoAeoPageClient />
    </>
  );
}
