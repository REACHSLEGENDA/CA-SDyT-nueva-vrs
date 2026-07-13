'use client';

import { play } from 'cuelume';

export type UIChangeSound = 
    | 'chime'
    | 'sparkle'
    | 'droplet'
    | 'bloom'
    | 'whisper'
    | 'tick'
    | 'press'
    | 'release'
    | 'toggle'
    | 'success';

/**
 * Reproduce un sonido de interfaz de usuario sintetizado en tiempo real.
 * Seguro para SSR.
 */
export function playSound(soundName: UIChangeSound) {
    if (typeof window !== 'undefined') {
        try {
            play(soundName);
        } catch (e) {
            // Silencia errores por restricciones de interacción del navegador
            console.debug('Failed to play UI sound:', e);
        }
    }
}
