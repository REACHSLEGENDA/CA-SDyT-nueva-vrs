import type { Metadata } from 'next';
import AboutPageClient from './NosotrosClient';
import { getPageMetadata, getAboutPageSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Sobre Nosotros y Nuestro Equipo | CA Soluciones Digitales',
  'en': 'About Us & Our Development Team | CA Digital Solutions',
  'es-419': 'Agencia de Desarrollo de Software | CA Soluciones Digitales',
  'es-ES': 'Quiénes Somos | CA Soluciones Digitales',
  'pt-BR': 'Quem Somos | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Conoce a la agencia detrás de tus soluciones tecnológicas. Especialistas en desarrollo de software, automatización e infraestructura TI.',
  'en': 'Meet the team behind CA Digital Solutions. A remote-first software agency helping businesses scale through technology and automation.',
  'es-419': 'Somos un equipo apasionado por la tecnología y la optimización de procesos para empresas y startups en toda Latinoamérica.',
  'es-ES': 'Tu socio tecnológico desde México. Desarrollamos software de alta calidad a precios competitivos para el mercado español.',
  'pt-BR': 'Conheça nossa agência de desenvolvimento de software e soluções digitais. Foco em escalabilidade, performance e satisfação do cliente.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/nosotros', locale, titles, descriptions);
}

export default async function Page() {
  const schema = getAboutPageSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPageClient />
    </>
  );
}
