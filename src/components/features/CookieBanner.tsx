'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'ca-cookie-consent';

export function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            // pequeño delay para que no choque con la animación del hero
            const t = setTimeout(() => setVisible(true), 1800);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = (type: 'all' | 'essential') => {
        localStorage.setItem(STORAGE_KEY, type);
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 120, opacity: 0 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 200 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[calc(100vw-2rem)] max-w-2xl"
                    role="dialog"
                    aria-label="Aviso de cookies"
                >
                    <div className="bg-ca-surface/95 backdrop-blur-xl border border-ca-border rounded-2xl shadow-2xl shadow-black/50 p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">

                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-ca-cyan/10 border border-ca-cyan/20 flex items-center justify-center shrink-0">
                            <Cookie size={20} className="text-ca-cyan" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                            <p className="text-ca-text text-sm font-semibold mb-1">
                                Usamos cookies 🍪
                            </p>
                            <p className="text-ca-muted text-xs leading-relaxed">
                                Utilizamos cookies esenciales y analíticas para mejorar tu experiencia. Puedes aceptar todas o solo las necesarias.{' '}
                                <Link href="/legal/privacidad" className="text-ca-cyan hover:underline">
                                    Ver Aviso de Privacidad
                                </Link>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                            <button
                                onClick={() => accept('essential')}
                                className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-ca-border text-ca-muted hover:text-ca-text hover:border-ca-cyan/30 transition-colors text-xs font-medium whitespace-nowrap"
                            >
                                Solo esenciales
                            </button>
                            <button
                                onClick={() => accept('all')}
                                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-ca-gradient text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-ca-cyan/20 whitespace-nowrap"
                            >
                                <ShieldCheck size={13} />
                                Aceptar todas
                            </button>
                            <button
                                onClick={() => accept('essential')}
                                aria-label="Cerrar"
                                className="w-8 h-8 flex items-center justify-center rounded-lg border border-ca-border text-ca-muted hover:text-ca-text hover:border-ca-cyan/30 transition-colors shrink-0"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
