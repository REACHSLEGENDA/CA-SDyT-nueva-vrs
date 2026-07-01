import type { Metadata } from 'next';
import TermsPageClient from './TerminosClient';
import { getPageMetadata } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Términos y Condiciones | CA Soluciones Digitales',
  'en': 'Terms & Conditions | CA Digital Solutions',
  'es-419': 'Términos y Condiciones | CA Soluciones Digitales',
  'es-ES': 'Términos y Condiciones | CA Soluciones Digitales',
  'pt-BR': 'Termos e Condições de Uso | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Términos y condiciones de uso de nuestro sitio web y la prestación de nuestros servicios de software.',
  'en': 'Terms of use and service agreements details for CA Soluciones Digitales y Tecnológicas web services.',
  'es-419': 'Términos y condiciones de uso de nuestro sitio web y la prestación de nuestros servicios de software.',
  'es-ES': 'Términos y condiciones de uso de nuestro sitio web y la prestación de nuestros servicios de software.',
  'pt-BR': 'Termos e condições de uso do site e dos serviços de desenvolvimento de software da CA Soluções Digitais.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/legal/terminos', locale, titles, descriptions);
}

export default async function Page() {
  return <TermsPageClient />;
}
