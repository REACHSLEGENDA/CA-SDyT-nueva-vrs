'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Smartphone,
    WifiOff,
    Bell,
    Zap,
    Fingerprint,
    Layers,
    ArrowRight,
    CheckCircle2,
    Apple,
    Play,
    Cpu,
    Globe,
    Code2,
    Palette,
    Rocket,
    ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function MobileAppsPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Mobile-First High Impact Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-bold mb-8"
                >
                    <Smartphone size={16} className="fill-brand-purple" />
                    <span>Experiencias Nativas Premium</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Innovación en la <br />
                    <span className="text-gradient">Palma de tu Mano</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    Desarrollamos aplicaciones móviles de alto rendimiento para iOS y Android. Desde apps corporativas hasta plataformas disruptivas, nos enfocamos en una UX impecable y un rendimiento que se siente instantáneo.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">Inicia tu App Móvil</Button>
                    </Link>
                    <div className="flex items-center justify-center gap-6 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Apple size={24} />
                            <span className="text-xs font-medium">iOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Play size={24} />
                            <span className="text-xs font-medium">Android</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. TECHNOLOGY - Native vs Hybrid Approach */}
            <Section className="py-24 border-t border-white/5">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Arquitectura de <br /> <span className="text-brand-purple">Siguiente Generación</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            No comprometemos el rendimiento. Seleccionamos el stack tecnológico que mejor se adapte a tus objetivos de negocio y presupuesto.
                        </p>

                        <div className="space-y-6">
                            <TechCard
                                icon={<Code2 className="text-brand-blue" />}
                                title="Desarrollo Híbrido Senior (React Native)"
                                text="Un solo código para iOS y Android con rendimiento nativo. Ideal para optimizar costos y tiempos de salida al mercado."
                            />
                            <TechCard
                                icon={<Cpu className="text-brand-purple" />}
                                title="Desarrollo Nativo"
                                text="Experiencia total en Swift/Kotlin para aplicaciones que requieren un manejo extremo de hardware y sensores."
                            />
                            <TechCard
                                icon={<Globe className="text-brand-cyan" />}
                                title="PWA (Progressive Web Apps)"
                                text="Apps web que se instalan y funcionan offline. La forma más rápida de llegar a tus usuarios sin pasar por las tiendas."
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-black/40 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px]" />
                        <h3 className="text-2xl font-bold text-white mb-8">Funciones de Vanguardia</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FeatureItem icon={<Bell />} title="Push Notifications" text="Alertas inteligentes segmentadas." />
                            <FeatureItem icon={<WifiOff />} title="Modo Offline" text="Funciona sin conexión a internet." />
                            <FeatureItem icon={<Fingerprint />} title="Biometría" text="Acceso seguro con FaceID/Huella." />
                            <FeatureItem icon={<Zap />} title="Real-time Data" text="Sincronización instantánea de datos." />
                            <FeatureItem icon={<ShieldCheck />} title="Seguridad Robusta" text="Encriptación de datos sensibles." />
                            <FeatureItem icon={<Layers />} title="Cloud Sync" text="Tu info en todos tus dispositivos." />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 3. CAPABILITIES GRID - What we Build */}
            <Section className="py-24 bg-white/[0.01]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">¿Qué construimos para móvil?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Soluciones personalizadas para cada industria y necesidad operativa.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <CapabilityCard
                        title="E-commerce Pro"
                        desc="Tiendas móviles con carritos persistentes, pasarelas de pago integradas y seguimiento de pedidos en vivo."
                        color="blue"
                    />
                    <CapabilityCard
                        title="Delivery & Logística"
                        desc="Gestión de flotas, geolocalización en tiempo real y comunicación directa entre usuarios y repartidores."
                        color="purple"
                    />
                    <CapabilityCard
                        title="Sistemas Internos"
                        desc="Apps para que tu equipo gestione inventarios, reportes de campo o procesos desde cualquier lugar."
                        color="cyan"
                    />
                </div>
            </Section>

            {/* 4. PROCESS - Roadmap to the Stores */}
            <Section className="py-24 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-display font-bold text-white mb-16">Tu App en 4 Pasos</h2>
                    <div className="space-y-12">
                        <ProcessRow num="01" title="Diseño UI/UX Móvil" text="Creamos interfaces intuitivas adaptadas a los gestos y hábitos del usuario móvil." icon={<Palette />} />
                        <ProcessRow num="02" title="Arquitectura y Desarrollo" text="Programamos con estándares de código limpio y escalable (Clean Architecture)." icon={<Code2 />} />
                        <ProcessRow num="03" title="QA y Testing Riguroso" text="Pruebas en dispositivos reales de todas las gamas para garantizar fluidez total." icon={<CheckCircle2 />} />
                        <ProcessRow num="04" title="Publicación y Lanzamiento" text="Gestionamos la subida a App Store y Play Store, cumpliendo todos los requisitos." icon={<Rocket />} />
                    </div>
                </div>
            </Section>

            {/* 5. CTA FINAL */}
            <Section className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-[3rem] p-12 md:p-24 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">¿Listo para dominar <span className="text-gradient">el ecosistema móvil</span>?</h2>
                    <p className="text-xl text-gray-400 mb-12 relative z-10">Agenda una consultoría gratuita y definamos juntos el mejor camino para tu aplicación.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Empezar a Programar</Button>
                        </Link>
                        <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">Hablar con un Consultor</Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function TechCard({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex gap-6 items-start group p-4 hover:bg-white/5 rounded-2xl transition-all">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/30 transition-all">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function FeatureItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="space-y-2 group">
            <div className="text-brand-purple mb-2 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <h4 className="text-white font-bold text-sm tracking-tight">{title}</h4>
            <p className="text-gray-500 text-[11px] leading-tight">{text}</p>
        </div>
    );
}

function CapabilityCard({ title, desc, color }: { title: string, desc: string, color: 'blue' | 'purple' | 'cyan' }) {
    const borders = {
        blue: 'border-brand-blue/20 hover:border-brand-blue/50',
        purple: 'border-brand-purple/20 hover:border-brand-purple/50',
        cyan: 'border-brand-cyan/20 hover:border-brand-cyan/50'
    };

    return (
        <Card className={`p-10 flex flex-col h-full bg-brand-black/40 ${borders[color]} transition-all duration-500 group`}>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{desc}</p>
            <div className="mt-auto">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                    Fase de diseño a código <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Card>
    );
}

function ProcessRow({ num, title, text, icon }: { num: string, title: string, text: string, icon: any }) {
    return (
        <div className="flex gap-8 group">
            <div className="hidden md:flex flex-col items-center">
                <div className="text-4xl font-display font-bold text-white/5 group-hover:text-brand-purple/20 transition-colors">{num}</div>
                <div className="w-px h-full bg-white/5 group-hover:bg-brand-purple/20 transition-colors" />
            </div>
            <div className="flex-1 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 group-hover:border-brand-purple/20 group-hover:bg-white/[0.05] transition-all flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-purple shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    {icon}
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    );
}
