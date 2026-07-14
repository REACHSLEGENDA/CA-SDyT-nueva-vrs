'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { ChevronRight, MessageCircle, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function CTASection() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">

            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                {/* Top Fade overlay to blend with previous section */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-transparent z-10" />

                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-brand-purple/10 to-transparent opacity-60" />
                <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-purple/10 rounded-full blur-[150px] animate-pulse" />
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.05]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-brand-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group">

                    {/* Glow Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[2s] pointer-events-none" />

                    <div className="grid lg:grid-cols-[1.3fr_1fr_0.8fr] gap-8 lg:gap-10 items-center">

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple font-bold text-sm">
                                <Sparkles size={16} className="fill-brand-purple" />
                                <span>Potencia tu negocio hoy</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                                ¿Listo para llevar tu negocio al <span className="text-gradient">siguiente nivel</span>?
                            </h2>

                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Creamos soluciones digitales rápidas, seguras y escalables. Cuéntanos tu idea y te enviamos una cotización clara sin compromiso.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-brand-purple" /> Desarrollo Profesional
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-brand-purple" /> Soporte Real
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-brand-purple" /> Tecnología Moderna
                                </div>
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 w-full sm:max-w-xs justify-center mx-auto lg:mx-0">
                            <Link href="/contacto" className="w-full">
                                <Button size="lg" className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.3)] border-0 text-md py-6 px-6">
                                    Cotizar Proyecto <ChevronRight className="ml-1" size={18} />
                                </Button>
                            </Link>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <a href="https://wa.me/5951145576" target="_blank" rel="noreferrer" className="w-full">
                                    <Button variant="outline" size="lg" className="w-full justify-center bg-white/5 border-white/10 hover:bg-brand-purple/20 hover:border-brand-purple/50 hover:text-brand-purple text-sm py-5 px-3">
                                        <MessageCircle className="mr-1.5" size={16} /> WhatsApp
                                    </Button>
                                </a>
                                <a href="mailto:contacto@casolutecdigital.com" className="w-full">
                                    <Button variant="outline" size="lg" className="w-full justify-center bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-sm py-5 px-3">
                                        <Mail className="mr-1.5" size={16} /> Correo
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Character (Cassie) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center items-center lg:justify-end"
                        >
                            {/* Radial Glow behind Cassie */}
                            <div className="absolute w-40 h-40 rounded-full bg-ca-cyan/15 blur-[50px] pointer-events-none" />
                            
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-40 h-40 md:w-44 md:h-44 drop-shadow-[0_8px_20px_rgba(0,207,255,0.25)]"
                            >
                                <Image
                                    src="/assets/cta.png"
                                    alt="Cassie"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
