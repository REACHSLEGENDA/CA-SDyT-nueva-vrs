import type { Metadata } from 'next';
import PortfolioPageClient from './PortafolioClient';
import { getPageMetadata } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Portafolio de Proyectos y Casos de Éxito | CA Soluciones Digitales',
  'en': 'Our Work & Case Studies Portfolio | CA Digital Solutions',
  'es-419': 'Portafolio de Desarrollo y Software | CA Soluciones Digitales',
  'es-ES': 'Portafolio de Proyectos Digitales | CA Soluciones Digitales',
  'pt-BR': 'Portfólio de Projetos e Sistemas | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Explora nuestros desarrollos: sitios web premium, aplicaciones móviles, sistemas CRM a medida y automatizaciones exitosas.',
  'en': 'Explore our portfolio of custom websites, mobile applications, CRM platforms, and business automations developed for global clients.',
  'es-419': 'Casos de éxito y proyectos entregados a clientes de México, Colombia, Argentina, Chile y toda Latinoamérica.',
  'es-ES': 'Ejemplos de páginas web, e-commerce y aplicaciones móviles a medida desarrolladas para empresas de habla hispana.',
  'pt-BR': 'Veja os projetos que desenvolvemos: aplicativos, websites, CRM e automações personalizadas para nossos clientes.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/portafolio', locale, titles, descriptions);
}

export default async function Page() {
  return <PortfolioPageClient />;
}
