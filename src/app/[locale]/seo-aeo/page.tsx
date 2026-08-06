import type { Metadata } from 'next';
import SeoAeoPageClient from './SeoAeoClient';
import { getPageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seoUtils';
import { aeoFaqs } from '@/lib/aeoFaqData';

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
  'es-MX': 'SEO técnico y AEO para mejorar la visibilidad de tu negocio en Google y experiencias de búsqueda con IA. Auditoría, contenido, entidad y medición sin promesas artificiales.',
  'en': 'Technical SEO and AEO to improve your business eligibility and visibility in Google and AI search experiences. Auditing, content, entity signals, and measurable outcomes.',
  'es-419': 'SEO y AEO para mejorar la visibilidad de tu empresa en Google y búsquedas con IA en Latinoamérica. Auditoría técnica, contenido y medición.',
  'es-ES': 'SEO y AEO para mejorar la visibilidad de empresas en Google y experiencias de búsqueda con IA en España. Estrategia técnica, editorial y medible.',
  'pt-BR': 'SEO técnico e AEO para melhorar a visibilidade da sua empresa no Google e em experiências de busca com IA. Auditoria, conteúdo e medição.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/seo-aeo', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema(
    'Optimización de Motores de Búsqueda y de Respuesta (SEO & AEO)',
    locale,
    '/seo-aeo',
    descriptions[locale as keyof typeof descriptions] || descriptions['es-MX']
  );
  const breadcrumb = getBreadcrumbSchema('/seo-aeo', locale, 'SEO & AEO');
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': aeoFaqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoAeoPageClient />
    </>
  );
}
