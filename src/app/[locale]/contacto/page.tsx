import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ContactPageClient from './ContactoClient';
import { getPageMetadata, getCanonicalUrl, BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_WHATSAPP, SITE_URL } from '@/lib/seoUtils';
import { SCHEMA_LANGUAGE, isAppLocale } from '@/lib/locales';

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

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pageUrl = getCanonicalUrl('/contacto', locale);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#contact`,
    'url': pageUrl,
    'name': titles[locale as keyof typeof titles] ?? titles['es-MX'],
    'description': descriptions[locale as keyof typeof descriptions] ?? descriptions['es-MX'],
    'inLanguage': isAppLocale(locale) ? SCHEMA_LANGUAGE[locale] : locale,
    'isPartOf': { '@id': `${SITE_URL}/#website` },
    'mainEntity': {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': BUSINESS_NAME,
      'url': SITE_URL,
      'email': BUSINESS_EMAIL,
      'telephone': BUSINESS_PHONE,
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'contactType': 'sales',
          'telephone': BUSINESS_PHONE,
          'email': BUSINESS_EMAIL,
          'url': BUSINESS_WHATSAPP,
          'availableLanguage': ['Spanish', 'English', 'Portuguese'],
          'areaServed': ['MX', 'US', 'CA', 'ES', 'BR', 'CO', 'AR', 'CL', 'PE'],
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
