import type { Metadata } from 'next';
import WebPackagesPageClient from './PaquetesWebClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Precios y Paquetes de Diseño Web Profesional | CA Soluciones Digitales',
  'en': 'Web Design Packages & Pricing Plans | CA Digital Solutions',
  'es-419': 'Paquetes de Páginas Web y Precios | CA Soluciones Digitales',
  'es-ES': 'Planes y Tarifas de Desarrollo Web | CA Soluciones Digitales',
  'pt-BR': 'Planos e Preços de Criação de Sites | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Compara nuestros paquetes web: Landing Page, Sitio Corporativo, Tienda en Línea o Desarrollo a Medida. Precios claros y sin sorpresas.',
  'en': 'Compare our professional web packages: Landing Page, Corporate Website, E-commerce, or Custom SaaS. Transparent rates and plans.',
  'es-419': 'Planes de desarrollo web adaptados a tu presupuesto en Latinoamérica. Landing page, sitio corporativo y tiendas virtuales.',
  'es-ES': 'Paquetes de diseño y desarrollo de páginas web para España. Precios desglosados y facturación en euros sin costos ocultos.',
  'pt-BR': 'Escolha o plano ideal para sua empresa: Landing Page, Site Corporativo ou Loja Virtual com suporte e manutenção inclusos.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/paquetes-web', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Paquetes de Diseño y Desarrollo Web', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WebPackagesPageClient />
    </>
  );
}
