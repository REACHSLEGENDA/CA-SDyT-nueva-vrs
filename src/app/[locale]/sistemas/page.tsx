import type { Metadata } from 'next';
import SystemsPageClient from './SistemasClient';
import { getPageMetadata, getServiceSchema } from '@/lib/seoUtils';

interface Props {
  params: Promise<{ locale: string }>;
}

const titles = {
  'es-MX': 'Sistemas CRM y ERP a Medida para Negocios | CA Soluciones Digitales',
  'en': 'Custom CRM & ERP Software Development | CA Digital Solutions',
  'es-419': 'Desarrollo de CRM y Software a Medida | CA Soluciones Digitales',
  'es-ES': 'Sistemas CRM y ERP a Medida | CA Soluciones Digitales',
  'pt-BR': 'Desenvolvimento de CRM e ERP sob Medida | CA Soluções Digitais'
};

const descriptions = {
  'es-MX': 'Desarrollo de plataformas personalizadas, sistemas de administración, CRM, ERP y bases de datos a la medida de tu operación empresarial.',
  'en': 'Tailored business software, custom CRM, ERP platforms, and databases designed to streamline and automate your enterprise operations.',
  'es-419': 'Creamos el software que tu empresa necesita: CRM, ERP y portales internos para digitalizar y controlar la operación en LATAM.',
  'es-ES': 'Desarrollo de software empresarial a medida en España. Digitaliza tus procesos de venta y facturación con paneles personalizados.',
  'pt-BR': 'Sistemas de gestão personalizados, CRM, ERP e painéis administrativos sob medida para automatizar as operações da sua empresa.'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata('/sistemas', locale, titles, descriptions);
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const schema = getServiceSchema('Desarrollo de Sistemas a Medida (CRM & ERP)', locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SystemsPageClient />
    </>
  );
}
