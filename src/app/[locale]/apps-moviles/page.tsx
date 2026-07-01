import type { Metadata } from 'next';
import MobileAppsPageClient from './AppsMovilesClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Desarrollo de Aplicaciones Móviles iOS y Android | CA Soluciones Digitales',
  'en': 'iOS & Android Mobile App Development | CA Digital Solutions',
  'es-419': 'Desarrollo de Apps Móviles en Latinoamérica | CA Soluciones Digitales',
  'es-ES': 'Desarrollo de Aplicaciones Móviles | CA Soluciones Digitales',
  'pt-BR': 'Desenvolvimento de Aplicativos Móveis | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Desarrollo de apps nativas y multiplataforma con Flutter y Kotlin. Interfaces móviles fluidas, notificaciones push y bases de datos seguras.',
  'en': 'Custom mobile application development for iOS and Android using Flutter and Kotlin. Fluid user experience and real-time syncing.',
  'es-419': 'Creamos aplicaciones para iOS y Android en toda Latinoamérica. Código limpio, interfaces modernas y publicación en App Store / Play Store.',
  'es-ES': 'Servicios de desarrollo de apps móviles para empresas en España. Soluciones híbridas y nativas de alto rendimiento.',
  'pt-BR': 'Desenvolvimento de apps iOS e Android com Flutter e Kotlin. Interfaces modernas, notificações e banco de dados em tempo real.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/apps-moviles', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Desarrollo de Aplicaciones Móviles', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MobileAppsPageClient />
    </>
  );
}
