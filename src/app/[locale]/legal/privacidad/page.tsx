import type { Metadata } from 'next';
import PrivacyPageClient from './PrivacidadClient';
import { getPageMetadata } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Política de Privacidad | CA Soluciones Digitales',
  'en': 'Privacy Policy | CA Digital Solutions',
  'es-419': 'Política de Privacidad | CA Soluciones Digitales',
  'es-ES': 'Política de Privacidad | CA Soluciones Digitales',
  'pt-BR': 'Política de Privacidade | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Política de privacidad de datos y protección de la información de los usuarios en CA Soluciones Digitales.',
  'en': 'Privacy policy and user data protection guidelines established by CA Soluciones Digitales y Tecnológicas.',
  'es-419': 'Política de privacidad de datos y protección de la información de los usuarios en CA Soluciones Digitales.',
  'es-ES': 'Política de privacidad de datos y protección de la información de los usuarios en CA Soluciones Digitales.',
  'pt-BR': 'Política de privacidade de dados e termos de proteção das informações dos usuários de CA Soluções Digitais.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/legal/privacidad', locale, titles, descriptions);
}

export default async function Page() {
  return <PrivacyPageClient />;
}
