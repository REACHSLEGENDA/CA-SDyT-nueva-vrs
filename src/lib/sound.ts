'use client';

import { play } from 'cuelume';

// Parche global seguro para aumentar el volumen de cuelume al interceptar la ganancia (GainNode)
if (typeof window !== 'undefined') {
    try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass && AudioContextClass.prototype) {
            const nativeCreateGain = AudioContextClass.prototype.createGain;
            AudioContextClass.prototype.createGain = function(this: any) {
                const node = nativeCreateGain.call(this);
                try {
                    const gainParam = node.gain;
                    if (gainParam) {
                        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(gainParam), 'value');
                        if (descriptor && descriptor.set) {
                            const originalSet = descriptor.set;
                            Object.defineProperty(gainParam, 'value', {
                                configurable: true,
                                get: descriptor.get,
                                set: function(val) {
                                    let boosted = val * 2.2;
                                    if (boosted > 1) boosted = 1;
                                    return originalSet.call(this, boosted);
                                }
                            });
                        }

                        const originalExponentialRamp = gainParam.exponentialRampToValueAtTime;
                        if (originalExponentialRamp) {
                            gainParam.exponentialRampToValueAtTime = function(value: number, endTime: number) {
                                let boosted = value * 2.2;
                                if (boosted > 1) boosted = 1;
                                return originalExponentialRamp.call(this, boosted, endTime);
                            };
                        }
                    }
                } catch (err) {
                    console.debug('Failed to patch GainNode volume:', err);
                }
                return node;
            };
        }
    } catch (e) {
        console.debug('Failed to apply global AudioContext patch:', e);
    }
}

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
