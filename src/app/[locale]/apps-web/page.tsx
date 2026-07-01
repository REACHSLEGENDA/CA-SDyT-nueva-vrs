import type { Metadata } from 'next';
import AppsWebPageClient from './AppsWebClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Desarrollo Web Premium con React y Next.js | CA Soluciones Digitales',
  'en': 'Professional Web Development Services | CA Digital Solutions',
  'es-419': 'Desarrollo de Páginas Web y SaaS | CA Soluciones Digitales',
  'es-ES': 'Desarrollo Web React y Next.js para España | CA Soluciones Digitales',
  'pt-BR': 'Desenvolvimento de Sites e Plataformas Web | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Diseñamos y programamos páginas web institucionales, landing pages de alta conversión y SaaS veloces con Next.js y React en México.',
  'en': 'High-conversion websites, SaaS platforms, and custom web applications built with Next.js, React, and serverless architectures.',
  'es-419': 'Desarrollo de sitios web veloces y plataformas SaaS escalables con Next.js para toda Latinoamérica. Optimización SEO integrada.',
  'es-ES': 'Creación de páginas web profesionales, rápidas y seguras para empresas españolas. Diseño premium y optimización Core Web Vitals.',
  'pt-BR': 'Desenvolvimento web de alto desempenho com React e Next.js no Brasil. Sites institucionais, e-commerce e portais sob medida.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/apps-web', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Desarrollo Web Premium', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AppsWebPageClient />
    </>
  );
}
