'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const links: { href: any; label: string }[] = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/paquetes-web', label: 'Paquetes Web' },
    { href: '/marketing', label: 'Marketing' },
    { href: '/apps-web', label: 'Apps Web' },
    { href: '/apps-moviles', label: 'Apps Móviles' },
    { href: '/automatizacion', label: 'Automatización' },
    { href: '/sistemas', label: 'Sistemas a Medida' },
    { href: '/clases', label: 'Clases de Cómputo' },
    { href: '/portafolio', label: 'Portafolio' },
    { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const pathname = usePathname();

    // isHeroPlaying es consistente entre SSR y cliente: pathname viene de Next.js
    const isHeroPlaying = pathname === '/' && !videoEnded;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const onEnd = () => setVideoEnded(true);
        window.addEventListener('ca:heroVideoEnd', onEnd);
        return () => window.removeEventListener('ca:heroVideoEnd', onEnd);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
                    isHeroPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100',
                    scrolled
                        ? 'bg-ca-dark/85 backdrop-blur-xl border-b border-ca-border py-3 shadow-lg shadow-black/30'
                        : 'bg-transparent py-5'
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-9 w-32 transition-transform group-hover:scale-105">
                            <Image
                                src="/assets/logo.png"
                                alt="CA Soluciones Digitales"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/servicios"
                            className="text-sm font-medium text-ca-muted hover:text-ca-text transition-colors"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/portafolio"
                            className="text-sm font-medium text-ca-muted hover:text-ca-text transition-colors"
                        >
                            Portafolio
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-sm font-medium text-ca-muted hover:text-ca-text transition-colors"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        {/* CTA WhatsApp */}
                        <a
                            href="https://wa.me/5951145576"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 bg-ca-gradient text-white font-semibold px-5 py-2.5 rounded-xl
                                       hover:opacity-90 hover:scale-105 transition-all duration-200 text-sm shadow-lg shadow-ca-cyan/20"
                        >
                            Hablemos →
                        </a>

                        {/* Hamburger */}
                        <button
                            onClick={handleOpen}
                            data-sound="toggle"
                            aria-label="Abrir menú"
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-ca-surface/80 hover:bg-ca-surface border border-ca-border transition-colors text-ca-text"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 z-[60] bg-ca-dark/95 backdrop-blur-2xl"
                    >
                        {/* Ambient glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ca-cyan/5 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ca-purple/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="container mx-auto px-4 py-8 h-full flex flex-col relative z-10">
                            {/* Header */}
                             <div className="flex justify-between items-center mb-12">
                                <Link href="/" onClick={handleClose} className="relative h-9 w-32">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="CA Soluciones Digitales"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </Link>
                                <button
                                    onClick={handleClose}
                                    data-sound="toggle"
                                    aria-label="Cerrar menú"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-ca-surface border border-ca-border hover:border-ca-cyan/30 transition-colors text-ca-text"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Links Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 flex-1 content-start md:content-center">
                                <div className="space-y-3">
                                    <p className="text-xs font-mono text-ca-cyan uppercase tracking-widest mb-5">
                                        Navegación
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {links.map((link, idx) => (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.05 + idx * 0.04 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={handleClose}
                                                    className={cn(
                                                        'flex items-center justify-between p-3.5 rounded-xl border transition-all group',
                                                        pathname === link.href
                                                            ? 'border-ca-cyan/40 bg-ca-cyan/5 text-ca-cyan'
                                                            : 'border-ca-border hover:border-ca-cyan/30 hover:bg-ca-surface text-ca-muted hover:text-ca-text'
                                                    )}
                                                >
                                                    <span className="text-sm font-medium">{link.label}</span>
                                                    <ChevronRight
                                                        size={14}
                                                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                                                    />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Panel */}
                                <div className="hidden md:flex flex-col justify-center border-l border-ca-border pl-12 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-ca-text mb-2">
                                            Contáctanos hoy
                                        </h3>
                                        <p className="text-ca-muted mb-6 text-sm">
                                            Listos para llevar tu negocio al siguiente nivel.
                                        </p>
                                        <div className="space-y-3">
                                            <a
                                                href="mailto:contacto@casolutecdigital.com"
                                                className="flex items-center gap-3 text-ca-muted hover:text-ca-cyan transition-colors text-sm group"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-ca-surface border border-ca-border flex items-center justify-center group-hover:border-ca-cyan/30 transition-colors">
                                                    <Mail size={16} />
                                                </div>
                                                contacto@casolutecdigital.com
                                            </a>
                                            <a
                                                href="https://wa.me/5951145576"
                                                className="flex items-center gap-3 text-ca-muted hover:text-ca-cyan transition-colors text-sm group"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-ca-surface border border-ca-border flex items-center justify-center group-hover:border-ca-cyan/30 transition-colors">
                                                    <Phone size={16} />
                                                </div>
                                                +52 595 114 5576
                                            </a>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-ca-border">
                                        <a
                                            href="https://wa.me/5951145576"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-full text-center bg-ca-gradient text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                                        >
                                            Solicitar Cotización →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
