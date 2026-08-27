'use client';

import { useEffect, useState } from 'react';
import { playSound, UIChangeSound, SOUND_STORAGE_KEY, SOUND_CHANGE_EVENT } from '@/lib/sound';

export function SoundListener() {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(SOUND_STORAGE_KEY);
            if (saved !== null) setEnabled(saved === 'true');
        } catch {
            // Almacenamiento bloqueado: se queda con el valor por defecto.
        }

        // SoundToggle avisa por evento para no depender de una recarga.
        const onChange = (e: Event) => setEnabled((e as CustomEvent<boolean>).detail);
        window.addEventListener(SOUND_CHANGE_EVENT, onChange);
        return () => window.removeEventListener(SOUND_CHANGE_EVENT, onChange);
    }, []);

    useEffect(() => {
        const handleGlobalClick = (e: MouseEvent) => {
            if (!enabled) return;

            const target = e.target as HTMLElement;
            // Buscar el elemento interactivo más cercano
            const clickable = target.closest('a, button, [role="button"], input[type="submit"], input[type="button"]');

            if (clickable) {
                const customSound = clickable.getAttribute('data-sound');
                if (customSound === 'none') return;
                
                playSound((customSound as UIChangeSound) || 'droplet');
            }
        };

        window.addEventListener('click', handleGlobalClick, { capture: true });
        return () => {
            window.removeEventListener('click', handleGlobalClick, { capture: true });
        };
    }, [enabled]);

    return null;
}
