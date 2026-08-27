'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown, Loader2 } from 'lucide-react';
import { usePathname, useRouter, routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

/**
 * Etiquetas de cada idioma en su propio idioma. `short` es lo que se ve en la
 * barra; `label` lo que se ve en el desplegable.
 * No usamos emojis de bandera: Windows los dibuja como dos letras sueltas.
 */
const LOCALE_LABELS: Record<string, { short: string; label: string }> = {
    'es-MX': { short: 'MX', label: 'Español (México)' },
    'en': { short: 'EN', label: 'English' },
    'es-419': { short: 'LATAM', label: 'Español (Latinoamérica)' },
    'es-ES': { short: 'ES', label: 'Español (España)' },
    'pt-BR': { short: 'BR', label: 'Português (Brasil)' },
};

export function LocaleSwitcher() {
    const activeLocale = useLocale();
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Cerrar al hacer clic fuera o con Escape
    useEffect(() => {
        if (!isOpen) return;

        const onPointerDown = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const change = (nextLocale: string) => {
        setIsOpen(false);
        if (nextLocale === activeLocale) return;

        startTransition(() => {
            // `replace` en vez de `push`: cambiar de idioma no deberia ensuciar el historial.
            // next-intl reescribe el slug traducido de la ruta actual (p.ej. /servicios -> /services)
            // y el middleware sincroniza la cookie NEXT_LOCALE.
            router.replace(
                // @ts-expect-error -- next-intl valida los params de rutas dinamicas en tiempo de tipos
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                data-sound="toggle"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Idioma actual: ${LOCALE_LABELS[activeLocale]?.label ?? activeLocale}. Cambiar idioma`}
                className="flex items-center gap-1.5 h-10 px-3 rounded-xl bg-ca-surface/80 hover:bg-ca-surface border border-ca-border
                           hover:border-ca-cyan/30 transition-colors text-ca-muted hover:text-ca-text"
            >
                {isPending
                    ? <Loader2 size={16} className="animate-spin text-ca-cyan" />
                    : <Globe size={16} />}
                <span className="text-xs font-semibold tracking-wide">
                    {LOCALE_LABELS[activeLocale]?.short ?? activeLocale}
                </span>
                <ChevronDown
                    size={13}
                    className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        role="listbox"
                        aria-label="Seleccionar idioma"
                        className="absolute right-0 mt-2 w-56 p-1.5 rounded-2xl bg-ca-surface/95 backdrop-blur-xl border border-ca-border
                                   shadow-2xl shadow-black/50 z-[70]"
                    >
                        {routing.locales.map((locale) => {
                            const isActive = locale === activeLocale;
                            return (
                                <li key={locale}>
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={isActive}
                                        lang={locale}
                                        onClick={() => change(locale)}
                                        className={cn(
                                            'w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors text-left',
                                            isActive
                                                ? 'bg-ca-cyan/10 text-ca-cyan font-medium'
                                                : 'text-ca-muted hover:bg-white/[0.04] hover:text-ca-text'
                                        )}
                                    >
                                        <span>{LOCALE_LABELS[locale].label}</span>
                                        {isActive
                                            ? <Check size={14} className="shrink-0" />
                                            : <span className="text-[10px] font-mono opacity-50 shrink-0">
                                                  {LOCALE_LABELS[locale].short}
                                              </span>}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
