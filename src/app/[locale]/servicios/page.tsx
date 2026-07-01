import type { Metadata } from 'next';
import ServicesPageClient from './ServiciosClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Servicios de Desarrollo Web y Soporte TI | CA Soluciones Digitales',
  'en': 'Software Development & IT Services | CA Digital Solutions',
  'es-419': 'Desarrollo de Software y Automatización IA | CA Soluciones Digitales',
  'es-ES': 'Agencia de Desarrollo de Software y Apps | CA Soluciones Digitales',
  'pt-BR': 'Desenvolvimento de Software e TI | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Desarrollo web premium, aplicaciones móviles, software a medida, automatización con IA y soporte TI empresarial en México.',
  'en': 'Professional web development, mobile apps, custom CRM, AI automation, and enterprise IT services worldwide at competitive rates.',
  'es-419': 'Desarrollo web, apps móviles y automatización con IA para toda Latinoamérica. Equipos de desarrollo remotos a precios competitivos.',
  'es-ES': 'Servicios de desarrollo de páginas web, aplicaciones móviles y software a medida para empresas en España. Trabajo 100% remoto.',
  'pt-BR': 'Desenvolvimento de sites profissionais, aplicativos móveis, CRM sob medida e automação com IA para empresas no Brasil. Suporte remoto.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/servicios', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Desarrollo de Software y Servicios TI', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicesPageClient />
    </>
  );
}
