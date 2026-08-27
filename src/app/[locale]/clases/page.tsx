import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ClassesPageClient from './ClasesClient';
import { getPageMetadata, getCanonicalUrl, getServiceSchema, BUSINESS_NAME, SITE_URL } from '@/lib/seoUtils';
import { SCHEMA_LANGUAGE, isAppLocale } from '@/lib/locales';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Clases de Cómputo y Capacitación Digital | CA Soluciones Digitales',
  'en': 'Computer & Programming Lessons | CA Digital Solutions',
  'es-419': 'Clases de Informática y Programación | CA Soluciones Digitales',
  'es-ES': 'Capacitación Digital y Clases de Cómputo | CA Soluciones Digitales',
  'pt-BR': 'Aulas de Computação e Programação | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Aprende computación, programación, herramientas de oficina e informática básica o avanzada con clases personalizadas y dinámicas.',
  'en': 'Learn programming, office tools, and general computing with personalized, step-by-step lessons for all ages and skill levels.',
  'es-419': 'Capacitación digital personalizada para estudiantes y profesionales en Latinoamérica. Domina la tecnología desde cero.',
  'es-ES': 'Cursos y clases particulares de informática, desarrollo de software y herramientas digitales para el mercado español.',
  'pt-BR': 'Aprenda programação, pacote office e informática com professores particulares de forma dinâmica e focada na prática.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/clases', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pageUrl = getCanonicalUrl('/clases', locale);
  const serviceSchema = getServiceSchema('Clases de Cómputo y Capacitación Digital', locale, '/clases');

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    'url': pageUrl,
    'name': titles[locale as keyof typeof titles] ?? titles['es-MX'],
    'description': descriptions[locale as keyof typeof descriptions] ?? descriptions['es-MX'],
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'provider': {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': BUSINESS_NAME,
      'url': SITE_URL,
    },
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': ['online', 'onsite'],
      'courseWorkload': 'PT2H',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <ClassesPageClient />
    </>
  );
}
