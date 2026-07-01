import type { Metadata } from 'next';
import InfraestructuraTIClient from './InfraestructuraTIClient';
import { getPageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Infraestructura TI, Redes y Ciberseguridad | CA Soluciones Digitales',
  'en': 'IT Infrastructure, Networking & Cybersecurity | CA Digital Solutions',
  'es-419': 'Infraestructura TI, Redes y Ciberseguridad | CA Soluciones Digitales',
  'es-ES': 'Infraestructura TI, Redes y Ciberseguridad | CA Soluciones Digitales',
  'pt-BR': 'Infraestrutura de TI e Cibersegurança | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Instalación de redes empresariales, configuración de servidores Windows y NAS, CCTV y ciberseguridad avanzada con Fortinet.',
  'en': 'Enterprise network installations, Windows/NAS servers, CCTV monitoring, and Fortinet firewall configuration for businesses.',
  'es-419': 'Instalación de redes empresariales, configuración de servidores Windows y NAS, CCTV y ciberseguridad avanzada con Fortinet.',
  'es-ES': 'Instalación de redes empresariales, configuración de servidores Windows y NAS, CCTV y ciberseguridad avanzada con Fortinet.',
  'pt-BR': 'Instalação de redes, servidores Windows e NAS, câmeras de monitoramento (CCTV) e segurança com Fortinet no Brasil.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/infraestructura-ti', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Servicios de Infraestructura de TI, Redes y Ciberseguridad', locale);
  const breadcrumb = getBreadcrumbSchema('/infraestructura-ti', locale, locale === 'en' ? 'IT Infrastructure' : locale === 'pt-BR' ? 'Infraestrutura TI' : 'Infraestructura TI');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <InfraestructuraTIClient />
    </>
  );
}
