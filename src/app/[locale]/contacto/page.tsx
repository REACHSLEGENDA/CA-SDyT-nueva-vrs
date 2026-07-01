import type { Metadata } from 'next';
import ContactPageClient from './ContactoClient';
import { getPageMetadata } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Contacto y Cotizaciones de Proyectos | CA Soluciones Digitales',
  'en': 'Contact & Project Inquiries | CA Digital Solutions',
  'es-419': 'Contacto y Presupuestos Digitales | CA Soluciones Digitales',
  'es-ES': 'Contactar con Agencia Digital | CA Soluciones Digitales',
  'pt-BR': 'Contato e Orçamentos de Software | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': '¿Listo para iniciar tu proyecto? Contáctanos para cotizar desarrollo web, apps, automatizaciones o soporte TI. Respuestas en menos de 24 horas.',
  'en': 'Ready to start your digital project? Contact us for custom web development, mobile apps, CRM, or AI automation. We reply within 24 hours.',
  'es-419': 'Cotiza tu software, sitio web o automatización para cualquier país de Latinoamérica. Escríbenos y agenda una asesoría gratuita.',
  'es-ES': 'Ponte en contacto con nuestro equipo para cotizar tu proyecto de software en España. Facturación local y atención remota inmediata.',
  'pt-BR': 'Pronto para tirar sua ideia do papel? Entre en contato para orçar desenvolvimento web, apps ou automações. Atendimento em português.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/contacto', locale, titles, descriptions);
}

export default async function Page() {
  return <ContactPageClient />;
}
