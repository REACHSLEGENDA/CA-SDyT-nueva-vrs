import type { Category, CategoryId } from './types';

export const categories: Category[] = [
    {
        id: 'web',
        slug: { 'es-MX': 'web', 'en': 'web' },
        name: { 'es-MX': 'Desarrollo web', 'en': 'Web development' },
        landing: '/apps-web',
    },
    {
        id: 'sistemas',
        slug: { 'es-MX': 'sistemas', 'en': 'systems' },
        name: { 'es-MX': 'Sistemas y CRM', 'en': 'Systems and CRM' },
        landing: '/sistemas',
    },
    {
        id: 'apps',
        slug: { 'es-MX': 'apps', 'en': 'apps' },
        name: { 'es-MX': 'Apps móviles', 'en': 'Mobile apps' },
        landing: '/apps-moviles',
    },
    {
        id: 'marketing',
        slug: { 'es-MX': 'marketing', 'en': 'marketing' },
        name: { 'es-MX': 'Marketing y marca', 'en': 'Marketing and branding' },
        landing: '/marketing',
    },
    {
        id: 'seo-aeo',
        slug: { 'es-MX': 'seo-aeo', 'en': 'seo-aeo' },
        name: { 'es-MX': 'SEO, AEO y analítica', 'en': 'SEO, AEO and analytics' },
        landing: '/seo-aeo',
    },
    {
        id: 'automatizacion',
        slug: { 'es-MX': 'automatizacion', 'en': 'automation' },
        name: { 'es-MX': 'Automatización e IA', 'en': 'Automation and AI' },
        landing: '/automatizacion',
    },
    // Sin fichas de producto (el manual no trae precios de estas líneas); agrupan guías.
    {
        id: 'infraestructura',
        slug: { 'es-MX': 'infraestructura', 'en': 'it-infrastructure' },
        name: { 'es-MX': 'Infraestructura TI', 'en': 'IT infrastructure' },
        landing: '/infraestructura-ti',
    },
    {
        id: 'clases',
        slug: { 'es-MX': 'clases', 'en': 'training' },
        name: { 'es-MX': 'Clases y capacitación', 'en': 'Training' },
        landing: '/clases',
    },
    {
        id: 'paquetes',
        slug: { 'es-MX': 'paquetes', 'en': 'packages' },
        name: { 'es-MX': 'Paquetes', 'en': 'Bundles' },
        landing: '/paquetes-web',
    },
];

export function getCategory(id: CategoryId): Category {
    return categories.find((category) => category.id === id)!;
}
