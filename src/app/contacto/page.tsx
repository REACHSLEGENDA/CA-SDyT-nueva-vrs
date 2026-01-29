'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/features/ContactForm';
import { Section } from '@/components/ui/Section';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Facebook, Instagram, Twitter, CheckCircle2, Zap, Clock, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
    return (
        <div className="pt-20 min-h-screen relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] -z-10" />

            <Section className="pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Direct Contact & Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold">
                                <Zap size={14} className="fill-brand-blue" />
                                <span>Atención Inmediata</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                                Hablemos de tu <br />
                                <span className="text-gradient">Próximo Éxito</span>
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                                Ya sea que tengas una idea clara o solo un boceto, estamos listos para escuchar, asesorarte y proponerte la mejor estrategia tecnológica para tu negocio.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <ContactCard
                                href="https://wa.me/525633680348"
                                icon={<Phone size={24} />}
                                title="Llámanos / WhatsApp"
                                value="+52 56 3368 0348"
                                color="blue"
                            />
                            <ContactCard
                                href="mailto:ca.sodiyte@gmail.com"
                                icon={<Mail size={24} />}
                                title="Envíanos un Correo"
                                value="ca.sodiyte@gmail.com"
                                color="purple"
                            />
                        </div>

                        {/* Why contact us now? */}
                        <div className="pt-8 space-y-6">
                            <h4 className="text-white font-bold text-lg">¿Qué esperar al contactarnos?</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <FeatureItem icon={<Clock />} text="Respuesta en menos de 2h" />
                                <FeatureItem icon={<CheckCircle2 />} text="Consultoría técnica inicial" />
                                <FeatureItem icon={<Zap />} text="Diagnóstico de viabilidad" />
                                <FeatureItem icon={<ShieldCheck />} text="Confidencialidad total" />
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-white/5">
                            <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Síguenos en Redes</h4>
                            <div className="flex gap-4">
                                <SocialIcon href="#" icon={<Linkedin size={20} />} />
                                <SocialIcon href="#" icon={<Facebook size={20} />} />
                                <SocialIcon href="#" icon={<Instagram size={20} />} />
                                <SocialIcon href="#" icon={<Twitter size={20} />} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-[2.5rem] blur-xl opacity-50 -z-10" />
                        <Card className="p-8 md:p-12 bg-brand-black/40 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <MessageSquare size={120} className="text-brand-blue" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-white mb-2">Cuéntanos tu proyecto</h2>
                                <p className="text-gray-400 mb-10">Completa el formulario y un especialista técnico se pondrá en contacto contigo.</p>
                                <ContactForm />
                            </div>
                        </Card>

                        {/* Trust badge */}
                        <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale">
                            <span className="text-xs font-bold text-gray-500 tracking-tighter uppercase italic">Secure Form</span>
                            <div className="w-px h-8 bg-white/10" />
                            <span className="text-xs font-bold text-gray-500 tracking-tighter uppercase italic">24/7 Support</span>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Global Presence Section */}
            <Section className="py-24 bg-white/[0.01] border-t border-white/5">
                <div className="grid md:grid-cols-3 gap-12 text-center items-center">
                    <div>
                        <MapPin className="mx-auto text-brand-cyan mb-4" size={32} />
                        <h4 className="text-lg font-bold text-white">CDMX, México</h4>
                        <p className="text-gray-500 text-sm">Oficina Central de Ingeniería</p>
                    </div>
                    <div className="border-x border-white/5 px-6">
                        <Globe className="mx-auto text-brand-blue mb-4" size={32} />
                        <h4 className="text-lg font-bold text-white">Presencia Global</h4>
                        <p className="text-gray-500 text-sm">Operamos 100% en remoto para el mundo</p>
                    </div>
                    <div>
                        <MessageSquare className="mx-auto text-brand-purple mb-4" size={32} />
                        <h4 className="text-lg font-bold text-white">Soporte Multilingüe</h4>
                        <p className="text-gray-500 text-sm">Atención en Español e Inglés</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}

// Child Components
function ContactCard({ icon, title, value, href, color }: { icon: any, title: string, value: string, href: string, color: 'blue' | 'purple' }) {
    return (
        <a
            href={href}
            className="group flex gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 hover:bg-white/5 transition-all duration-300 items-center overflow-hidden relative"
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color === 'blue' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-purple/10 text-brand-purple'} group-hover:scale-110 transition-transform relative z-10`}>
                {icon}
            </div>
            <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{title}</h3>
                <p className="text-lg font-bold text-white">{value}</p>
            </div>
            <div className="absolute right-6 opacity-0 group-hover:opacity-10 transition-opacity translate-x-4 group-hover:translate-x-0">
                <ArrowRight size={32} className="text-white" />
            </div>
        </a>
    );
}

function FeatureItem({ icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="text-brand-blue">{icon && (typeof icon === 'object' ? { ...icon, props: { ...icon.props, size: 18 } } : icon)}</div>
            <span className="text-gray-300 text-sm font-medium">{text}</span>
        </div>
    );
}

function SocialIcon({ icon, href }: { icon: any, href: string }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
            {icon}
        </a>
    );
}

import { Globe, ArrowRight } from 'lucide-react';
