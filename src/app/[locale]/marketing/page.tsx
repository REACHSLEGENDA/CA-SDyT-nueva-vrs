import type { Metadata } from 'next';
import MarketingPageClient from './MarketingClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Campañas de Marketing Digital y Redes Sociales | CA Soluciones Digitales',
  'en': 'Digital Marketing & Social Media Services | CA Digital Solutions',
  'es-419': 'Marketing Digital y Publicidad Online | CA Soluciones Digitales',
  'es-ES': 'Gestión de Redes y Marketing Digital | CA Soluciones Digitales',
  'pt-BR': 'Marketing Digital e Gestão de Redes Sociais | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Gestión profesional de redes sociales, campañas en Facebook, Instagram y Google Ads enfocadas en generar prospectos y ventas.',
  'en': 'Professional social media management, Google Ads, and Meta campaigns designed to generate high-quality leads and drive sales.',
  'es-419': 'Campañas de publicidad digital y administración de redes sociales en LATAM. Estrategia 360° para potenciar tu marca.',
  'es-ES': 'Servicios de marketing online y gestión de campañas B2B y B2C en España. Maximiza el retorno de inversión en publicidad.',
  'pt-BR': 'Campanhas no Google Ads, Meta Ads e gestão de redes sociais no Brasil para atração de leads qualificados e engajamento.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/marketing', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Marketing Digital y Gestión de Redes Sociales', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MarketingPageClient />
    </>
  );
}
