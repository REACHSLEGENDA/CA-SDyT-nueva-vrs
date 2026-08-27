'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Volume2, VolumeX } from 'lucide-react';
import { SOUND_STORAGE_KEY, SOUND_CHANGE_EVENT } from '@/lib/sound';

/**
 * Interruptor de los sonidos de interfaz.
 *
 * `SoundListener` ya leia `ca:sounds-enabled` de localStorage, pero nada lo
 * escribia nunca: el sonido en cada clic no se podia desactivar. Este control
 * cierra ese hueco y avisa al listener por evento, sin recargar la pagina.
 */
export function SoundToggle() {
    // Arranca en `true` para coincidir con el render del servidor; el valor real
    // se lee tras la hidratacion, cuando localStorage esta disponible.
    const [enabled, setEnabled] = useState(true);
    const [hydrated, setHydrated] = useState(false);
    const t = useTranslations('Nav');

    useEffect(() => {
        try {
            const saved = localStorage.getItem(SOUND_STORAGE_KEY);
            if (saved !== null) setEnabled(saved === 'true');
        } catch {
            // Modo privado o almacenamiento bloqueado: se queda con el valor por defecto.
        }
        setHydrated(true);
    }, []);

    const toggle = () => {
        const next = !enabled;
        setEnabled(next);
        try {
            localStorage.setItem(SOUND_STORAGE_KEY, String(next));
        } catch {
            // Si no se puede persistir, al menos vale para esta sesion.
        }
        window.dispatchEvent(new CustomEvent(SOUND_CHANGE_EVENT, { detail: next }));
    };

    return (
        <button
            type="button"
            onClick={toggle}
            data-sound="none"
            aria-pressed={enabled}
            aria-label={enabled ? t('soundOff') : t('soundOn')}
            title={enabled ? t('soundOff') : t('soundOn')}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-ca-surface/80 hover:bg-ca-surface
                       border border-ca-border hover:border-ca-cyan/30 transition-colors text-ca-muted hover:text-ca-text"
        >
            {hydrated && !enabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
    );
}
