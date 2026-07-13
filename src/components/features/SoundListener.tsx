'use client';

import { useEffect, useState } from 'react';
import { playSound, UIChangeSound } from '@/lib/sound';

export function SoundListener() {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        // Cargar estado inicial de localStorage (por si el usuario lo desactivó)
        const saved = localStorage.getItem('ca:sounds-enabled');
        if (saved !== null) {
            setEnabled(saved === 'true');
        }
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
