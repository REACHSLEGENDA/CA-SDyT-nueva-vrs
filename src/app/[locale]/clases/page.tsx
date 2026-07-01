import type { Metadata } from 'next';
import ClassesPageClient from './ClasesClient';
import { getPageMetadata } from '@/lib/seoUtils';

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

export default async function Page() {
  return <ClassesPageClient />;
}
