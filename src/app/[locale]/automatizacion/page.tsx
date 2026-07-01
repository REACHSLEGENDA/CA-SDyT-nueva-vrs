import type { Metadata } from 'next';
import AutomationPageClient from './AutomatizacionClient';
import { getPageMetadata, getServiceSchema, getBreadcrumbSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Automatización de Procesos e Integración IA | CA Soluciones Digitales',
  'en': 'Business Automation & AI Integrations | CA Digital Solutions',
  'es-419': 'Automatización e Inteligencia Artificial | CA Soluciones Digitales',
  'es-ES': 'Servicios de Automatización con IA | CA Soluciones Digitales',
  'pt-BR': 'Automação de Processos e Integração de IA | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Eficientiza tu negocio con automatizaciones con n8n, Make y bots de WhatsApp con IA (GPT-4) integrados en tus sistemas.',
  'en': 'Streamline your workflows with n8n, Make.com, and custom AI WhatsApp bots powered by GPT-4 to handle operations 24/7.',
  'es-419': 'Bots de WhatsApp con IA y flujos automáticos de datos para empresas de Latinoamérica. Ahorra costos y automatiza tu servicio.',
  'es-ES': 'Automatiza tareas repetitivas en tu empresa en España. Integración de n8n, Make y asistentes virtuales inteligentes con IA.',
  'pt-BR': 'Otimize seus fluxos com n8n, Make e bots do WhatsApp inteligentes baseados em IA para atendimento automático no Brasil.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/automatizacion', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Automatización de Procesos e Integraciones IA', locale);
  const breadcrumb = getBreadcrumbSchema('/automatizacion', locale, locale === 'en' ? 'Automation & AI' : locale === 'pt-BR' ? 'Automação' : 'Automatización');

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
      <AutomationPageClient />
    </>
  );
}
