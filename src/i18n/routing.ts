import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es-MX', 'en', 'es-419', 'es-ES', 'pt-BR'],
  defaultLocale: 'es-MX',
  localePrefix: 'as-needed', // No prefix for the default locale
  pathnames: {
    '/': '/',
    '/nosotros': '/nosotros',
    '/portafolio': '/portafolio',
    '/contacto': {
      'es-MX': '/contacto',
      'en': '/contact',
      'es-419': '/contacto',
      'es-ES': '/contacto',
      'pt-BR': '/contato'
    },
    '/servicios': {
      'es-MX': '/servicios',
      'en': '/services',
      'es-419': '/servicios',
      'es-ES': '/servicios',
      'pt-BR': '/servicos'
    },
    '/apps-web': {
      'es-MX': '/apps-web',
      'en': '/services/web-development'
    },
    '/apps-moviles': {
      'es-MX': '/apps-moviles',
      'en': '/services/mobile-app-development'
    },
    '/sistemas': {
      'es-MX': '/sistemas',
      'en': '/services/custom-crm'
    },
    '/automatizacion': {
      'es-MX': '/automatizacion',
      'en': '/services/automation-ai'
    },
    '/seo-aeo': {
      'es-MX': '/seo-aeo',
      'en': '/services/seo-aeo'
    },
    '/infraestructura-ti': '/infraestructura-ti',
    '/marketing': '/marketing',
    '/paquetes-web': '/paquetes-web',
    '/clases': '/clases',
    '/legal': '/legal'
  }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
