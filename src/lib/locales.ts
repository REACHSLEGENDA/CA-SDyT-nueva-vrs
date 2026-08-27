/**
 * Tipos y utilidades compartidas para el contenido localizado.
 *
 * Mantener esto separado de `@/i18n/routing` evita arrastrar la configuración de
 * navegación de next-intl a los archivos de datos, que son simples objetos planos.
 */

export const APP_LOCALES = ['es-MX', 'en', 'es-419', 'es-ES', 'pt-BR'] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'es-MX';

/** Etiqueta BCP-47 para el campo `inLanguage` de schema.org. */
export const SCHEMA_LANGUAGE: Record<AppLocale, string> = {
    'es-MX': 'es-MX',
    'en': 'en',
    'es-419': 'es-419',
    'es-ES': 'es-ES',
    'pt-BR': 'pt-BR',
};

export function isAppLocale(value: string): value is AppLocale {
    return (APP_LOCALES as readonly string[]).includes(value);
}

/**
 * Devuelve la entrada del locale pedido y, si no existe, la del locale por defecto.
 * Evita repetir `contenido[locale] ?? contenido['es-MX']` en cada consumidor.
 */
export function pickLocale<T>(content: Record<AppLocale, T>, locale: string): T {
    return isAppLocale(locale) ? content[locale] : content[DEFAULT_LOCALE];
}
