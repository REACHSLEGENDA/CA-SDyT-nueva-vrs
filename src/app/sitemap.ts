import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casolutecdigital.com';
  const now = new Date();
  
  const esRoutes = [
    '', '/servicios', '/redes-empresariales', '/ciberseguridad',
    '/servidores', '/soporte-tecnico', '/videovigilancia-cctv',
    '/google-workspace', '/seo-aeo', '/apps-moviles',
    '/sistemas', '/automatizacion', '/portafolio', '/nosotros', '/contacto',
  ];
  
  const enRoutes = [
    '/en', '/en/services', '/en/services/web-development',
    '/en/services/mobile-app-development', '/en/services/custom-crm',
    '/en/services/automation-ai', '/en/services/whatsapp-bot',
    '/en/services/seo-aeo', '/en/services/ui-ux-design', '/en/contact',
  ];
  
  const es419Routes = ['/es-419', '/es-419/servicios', '/es-419/contacto'];
  const esEsRoutes  = ['/es-es', '/es-es/servicios', '/es-es/contacto'];
  const ptBrRoutes  = ['/pt-br', '/pt-br/servicos', '/pt-br/contato'];
  
  return [
    ...esRoutes.map(r => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1.0 : 0.8,
    })),
    ...enRoutes.map(r => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r === '/en' ? 1.0 : 0.9,
    })),
    ...[...es419Routes, ...esEsRoutes, ...ptBrRoutes].map(r => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
