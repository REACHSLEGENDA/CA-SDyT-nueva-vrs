'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const links = [
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
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    scrolled ? "bg-brand-black/80 backdrop-blur-xl border-white/10 py-3" : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative h-10 w-32 transition-transform group-hover:scale-105">
                            <Image
                                src="/assets/logo.png"
                                alt="SDyT Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Shortcuts */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/servicios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Servicios
                        </Link>
                        <Link href="/portafolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Portafolio
                        </Link>
                        <Link href="/contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Contacto
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white"
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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60] bg-brand-black/95 backdrop-blur-2xl"
                    >
                        <div className="container mx-auto px-4 py-8 h-full flex flex-col">
                            <div className="flex justify-between items-center mb-12">
                                <Link href="/" className="flex items-center gap-4 group">
                                    <div className="relative h-10 w-32 transition-transform group-hover:scale-105">
                                        <Image
                                            src="/assets/logo.png"
                                            alt="SDyT Logo"
                                            fill
                                            className="object-contain object-left"
                                            priority
                                        />
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 flex-1 content-start md:content-center">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-brand-blue uppercase tracking-wider mb-6">Navegación</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {links.map((link, idx) => (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.05 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={cn(
                                                        "flex items-center justify-between p-4 rounded-xl border border-white/5 hover:border-brand-blue/30 hover:bg-white/5 transition-all group",
                                                        pathname === link.href && "border-brand-blue/50 bg-brand-blue/5"
                                                    )}
                                                >
                                                    <span className={cn(
                                                        "text-lg font-medium transition-colors",
                                                        pathname === link.href ? "text-brand-blue" : "text-gray-300 group-hover:text-white"
                                                    )}>
                                                        {link.label}
                                                    </span>
                                                    <ChevronRight size={16} className="text-gray-500 group-hover:text-brand-blue opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden md:flex flex-col justify-center space-y-8 border-l border-white/10 pl-12 h-fit">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">Contáctanos hoy</h3>
                                        <p className="text-gray-400 mb-6">Estamos listos para llevar tu negocio al siguiente nivel.</p>
                                        <div className="space-y-4">
                                            <a href="mailto:ca.sodiyte@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-brand-blue transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                    <Mail size={18} />
                                                </div>
                                                ca.sodiyte@gmail.com
                                            </a>
                                            <a href="https://wa.me/525633680348" className="flex items-center gap-3 text-gray-300 hover:text-brand-blue transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                    <Phone size={18} />
                                                </div>
                                                +52 56 3368 0348
                                            </a>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10">
                                        <Button className="w-full" onClick={() => setIsOpen(false)}>
                                            <Link href="/contacto">Solicitar Cotización</Link>
                                        </Button>
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
