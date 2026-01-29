'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Target,
    Rocket,
    Layers,
    Smartphone,
    Bot,
    Mail,
    MessageCircle,
    Sparkles,
    ShieldCheck,
    Search,
    Code2,
    Database,
    BarChart3,
    Clock,
    Layout,
    Plus,
    Minus,
    ChevronRight,
    Headset,
    Globe
} from 'lucide-react';
import Link from 'next/link';

export default function WebPackagesPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Servicios Web Profesionales */}
            <Section className="text-center pb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-8"
                >
                    <Globe size={16} />
                    <span>Impulsa tu Presencia Global</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Servicios Web <br />
                    <span className="text-gradient">Profesionales</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    CA Soluciones Digitales y Tecnológicas ofrece desarrollo web estratégico estructurado por ventanas, diseñado para impulsar tu presencia digital, convertir visitantes en clientes y escalar tu negocio de manera eficiente.
                </p>
            </Section>

            {/* 2. ENFOQUE - Soluciones Web Estructuradas y Escalables */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Enfoque Digital Estratégico</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Entendemos que cada negocio tiene necesidades únicas. Por eso desarrollamos un sistema de paquetes web estructurados por número de ventanas, permitiéndote iniciar con lo esencial y crecer a tu ritmo.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <FocusBlock
                        icon={<Layout size={48} />}
                        title="Presencia Digital"
                        desc="Construye tu imagen profesional en internet con una estructura sólida y diseño moderno."
                        color="blue"
                    />
                    <FocusBlock
                        icon={<Target size={48} />}
                        title="Conversión"
                        desc="Transforma visitas en oportunidades reales con llamadas a la acción estratégicas."
                        color="purple"
                    />
                    <FocusBlock
                        icon={<Rocket size={48} />}
                        title="Escalabilidad"
                        desc="Crece sin límites. Nuestros sistemas están preparados para evolucionar con tu negocio."
                        color="cyan"
                    />
                </div>
            </Section>

            {/* 🔥 3. PAQUETES - Independent Landing Style Sections */}

            {/* PAQUETE BÁSICO */}
            <div className="bg-white/[0.02] border-y border-white/5">
                <Section className="py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold">
                                Paquete Inicial
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                                Paquete Básico <br />
                                <span className="text-green-400">Landing de 3 Ventanas</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Ideal para negocios que buscan presencia rápida y contacto inmediato con sus clientes.
                            </p>

                            <div className="space-y-6">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <Layers size={20} className="text-green-400" /> Ventanas Incluidas:
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <WindowItem label="Inicio" desc="Impacto inicial" />
                                    <WindowItem label="Servicios" desc="Lo que haces" />
                                    <WindowItem label="Contacto" desc="Conversión" />
                                </ul>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-8">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="text-green-400" /> Diseño Responsive
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="text-green-400" /> WhatsApp y Llamadas
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="text-green-400" /> Redes Sociales
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="text-green-400" /> Optimización de carga
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm"
                        >
                            <h4 className="text-xl font-bold text-white mb-6">Extras Recomendados:</h4>
                            <div className="space-y-4">
                                <ExtraItem label="Ventana extra" desc="Conócenos o Galería" />
                                <ExtraItem label="Copywriting básico" desc="Textos profesionales" />
                                <ExtraItem label="Correo corporativo" desc="Dominio incluido" />
                                <ExtraItem label="Optimización visual" desc="Diseño avanzado" />
                            </div>
                            <Link href="/contacto" className="block mt-10">
                                <Button size="lg" className="w-full bg-green-600 hover:bg-green-500 text-white border-0">
                                    Elegir Plan Básico
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Section>
            </div>

            {/* PAQUETE MEDIANO */}
            <div className="relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />
                <Section className="py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 bg-brand-blue/5 border border-brand-blue/20 p-8 rounded-[2.5rem] backdrop-blur-md"
                        >
                            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Bot className="text-brand-blue animate-pulse" /> Automatización Incluida
                            </h4>
                            <div className="space-y-6">
                                <FeatureLine icon={<MessageCircle size={20} />} title="Respuestas automáticas" />
                                <FeatureLine icon={<ArrowRight size={20} />} title="Redirección a WhatsApp" />
                                <FeatureLine icon={<Clock size={20} />} title="Gestión de horarios" />
                                <FeatureLine icon={<Database size={20} />} title="Captura de datos simples" />
                            </div>
                            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                                <h5 className="text-white font-bold mb-3">Ideal para:</h5>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs">Restaurantes</span>
                                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs">Despachos</span>
                                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs">Consultorios</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 space-y-8"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold">
                                Más Popular
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                Paquete Mediano <br />
                                <span className="text-brand-blue">Profesional de 7 Ventanas</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Diseñado para proyectar imagen profesional y generar confianza. Incluye chatbot automático para comenzar a automatizar la atención.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {['Inicio', 'Servicios', 'Nosotros', 'Galería', 'Testimonios', 'FAQ', 'Contacto'].map(win => (
                                    <span key={win} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white text-sm font-medium">
                                        {win}
                                    </span>
                                ))}
                            </div>
                            <Link href="/contacto" className="block pt-8">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Elegir Plan Profesional
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Section>
            </div>

            {/* PAQUETE PREMIUM */}
            <div className="bg-brand-black/60 border-y border-white/5 relative">
                <Section className="py-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-bold">
                                Elite Digital
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                                Paquete Premium <br />
                                <span className="text-brand-purple">Web Estratégica 14+ Ventanas</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                La solución más completa para convertir visitas en clientes y posicionar tu marca como líder indiscutible en el mercado.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <PremiumFeature icon={<BarChart3 />} title="SEO Avanzado" text="Posicionamiento real en Google" />
                                <PremiumFeature icon={<Code2 />} title="Copywriting Prof." text="Textos que venden por ti" />
                                <PremiumFeature icon={<Zap />} title="Alta Conversión" text="Arquitectura centrada en ventas" />
                                <PremiumFeature icon={<ShieldCheck />} title="Seguridad Robusta" text="Protocolos de alta gama" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <Sparkles className="text-brand-purple/40" size={100} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-8">Ventanas Base Incluidas:</h4>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    'Inicio de Alta Conversión',
                                    '3 Servicios Detallados',
                                    'Proceso de Trabajo',
                                    'Casos de Éxito',
                                    'Portafolio / Blog',
                                    'FAQ Avanzado',
                                    'Contacto + Agenda',
                                    'Landing para Ads'
                                ].map(item => (
                                    <div key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_var(--color-brand-purple)]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contacto" className="block mt-12 relative z-10">
                                <Button size="lg" className="w-full bg-brand-purple hover:bg-brand-purple/90 border-0">
                                    Obtener Suite Premium
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Section>
            </div>

            {/* 4. TABLA COMPARATIVA */}
            <Section className="py-32">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Compara nuestros planes</h2>
                    <p className="text-gray-400 mt-4">Transparencia total en cada nivel de servicio.</p>
                </div>

                <div className="overflow-x-auto relative rounded-3xl border border-white/10 bg-white/5">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-8 text-lg font-bold text-white">Característica</th>
                                <th className="p-8 text-center text-lg font-bold text-green-400">Básico</th>
                                <th className="p-8 text-center text-lg font-bold text-brand-blue">Pre-Mediano</th>
                                <th className="p-8 text-center text-lg font-bold text-brand-purple">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <TableRow label="Número de Ventanas" v1="3" v2="7" v3="14+" />
                            <TableRow label="SEO Optimizado" v1="Básico" v2="Intermedio" v3="Avanzado (Profesional)" />
                            <TableRow label="Chatbot Automático" v1={<Minus className="mx-auto" />} v2="Estándar" v3="IA Cognitiva Avanzada" />
                            <TableRow label="Copywriting Profesional" v1={<Minus className="mx-auto" />} v2="Básico" v3="Estratégico / Ventas" />
                            <TableRow label="Google Analytics / Pixel" v1="Config. Básica" v2="Integrado" v3="Dashboards Personalizados" />
                            <TableRow label="Automatizaciones" v1={<Minus className="mx-auto" />} v2="1 Flujo" v3="Ecosistema Completo" />
                        </tbody>
                    </table>
                </div>
            </Section>

            {/* 5. DESARROLLO PERSONALIZADO */}
            <Section className="py-24 bg-gradient-to-b from-brand-blue/10 to-transparent rounded-[4rem] border border-white/5">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            Paquete Personalizado <br />
                            <span className="text-gradient">Desarrollo a Medida</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Para negocios con necesidades específicas que van más allá de una web informativa. Si lo puedes imaginar, lo podemos programar.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                'Tiendas en línea (E-commerce)',
                                'Sistemas de inventario',
                                'CRM Personalizado',
                                'Reservas avanzadas',
                                'Paneles de administración',
                                'Apps web complejas'
                            ].map(item => (
                                <div key={item} className="flex gap-3 items-start group">
                                    <Plus size={18} className="text-brand-blue mt-1 group-hover:rotate-90 transition-transform" />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Card className="p-10 bg-brand-black/50 border-white/10 backdrop-blur-xl space-y-8">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-4">Cotización basada en:</h4>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400 font-medium">Funcionalidades</span>
                                    <span className="text-brand-blue">Definidas x Cliente</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400 font-medium">Módulos</span>
                                    <span className="text-brand-blue">Escalables</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400 font-medium">Complejidad</span>
                                    <span className="text-brand-blue">Arquitectura Senior</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400 font-medium">Tiempo</span>
                                    <span className="text-brand-blue">Roadmap Ágil</span>
                                </li>
                            </ul>
                        </div>
                        <Link href="/contacto">
                            <Button size="lg" className="w-full group">
                                Solicitar Consultoría <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </Card>
                </div>
            </Section>

            {/* 6. SERVICIOS COMPLEMENTARIOS */}
            <Section className="py-32">
                <div className="grid md:grid-cols-3 gap-8">
                    <ExtraColumn title="Servicios Web" color="blue">
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Mantenimiento mensual</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Cambios de contenido</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Respaldos y seguridad</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Optimizaciones de velocidad</li>
                    </ExtraColumn>
                    <ExtraColumn title="Marketing Digital" color="purple">
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Facebook & Instagram Ads</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Pixel & Conversiones</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Landing pages para pauta</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Estrategia de Copy</li>
                    </ExtraColumn>
                    <ExtraColumn title="Servicios Corporativos" color="cyan">
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Correos empresariales</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Google Workspace Setup</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Microsoft 365 / Teams</li>
                        <li className="flex gap-3 items-center text-sm text-gray-400"><CheckCircle2 size={16} /> Asesoría Digital 1:1</li>
                    </ExtraColumn>
                </div>
            </Section>

            {/* 7. VENTAJAS DEL SISTEMA POR VENTANAS */}
            <Section className="py-24 bg-brand-black/40 border border-white/5 rounded-[3rem]">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ventajas de nuestra metodología</h2>
                    <p className="text-gray-500">Cada paquete incluye un número definido de ventanas. Funciones adicionales se cotizan aparte.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    <BenefitItem icon={<ShieldCheck />} title="Transparencia" text="Sabes exactamente qué recibes y por qué." />
                    <BenefitItem icon={<Layers />} title="Escalabilidad" text="Inicia pequeño, crece cuando necesites." />
                    <BenefitItem icon={<Zap />} title="Optimización" text="Velocidad y calidad garantizada 100%." />
                    <BenefitItem icon={<Headset />} title="Flexibilidad" text="Módulos adaptables a tu ritmo real." />
                </div>
            </Section>

            {/* 8. CTA FINAL */}
            <Section className="py-40 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-10"
                >
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1]">
                        ¿Listo para transformar <br />
                        <span className="text-gradient">tu presencia digital</span>?
                    </h2>
                    <p className="text-2xl text-gray-400 leading-relaxed">
                        Tenemos la solución perfecta para tu negocio, desde una landing básica hasta una web estratégica completa.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg">Cotizar Proyecto</Button>
                        </Link>
                        <a href="https://wa.me/52563368048" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg border-green-500/50 hover:bg-green-500/10 hover:text-green-400">
                                <MessageCircle className="mr-3" /> WhatsApp
                            </Button>
                        </a>
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">
                                <Mail className="mr-3" /> Contacto
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function FocusBlock({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: 'blue' | 'purple' | 'cyan' }) {
    const colors = {
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
        purple: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20',
        cyan: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20'
    };
    return (
        <Card className="p-12 text-center group hover:translate-y-[-10px] transition-all duration-500 overflow-hidden relative">
            <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center border-2 ${colors[color]} group-hover:scale-110 transition-transform duration-500`}>
                {icon}
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-gradient transition-all">{title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
        </Card>
    );
}

function WindowItem({ label, desc }: { label: string, desc: string }) {
    return (
        <li className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
            <span className="block text-white font-bold">{label}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{desc}</span>
        </li>
    );
}

function ExtraItem({ label, desc }: { label: string, desc: string }) {
    return (
        <div className="flex justify-between items-center p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all">
            <div>
                <span className="text-white font-medium block">{label}</span>
                <span className="text-xs text-gray-500">{desc}</span>
            </div>
            <Plus size={16} className="text-gray-400" />
        </div>
    );
}

function FeatureLine({ icon, title }: { icon: any, title: string }) {
    return (
        <div className="flex gap-4 items-center group">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{title}</span>
        </div>
    );
}

function PremiumFeature({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex gap-4 items-start p-4 hover:bg-white/5 rounded-2xl transition-all">
            <div className="text-brand-purple">{icon}</div>
            <div>
                <h5 className="text-white font-bold text-sm">{title}</h5>
                <p className="text-gray-500 text-[11px] leading-tight">{text}</p>
            </div>
        </div>
    );
}

function TableRow({ label, v1, v2, v3 }: { label: string, v1: any, v2: any, v3: any }) {
    return (
        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
            <td className="p-6 font-bold text-white text-sm md:text-base">{label}</td>
            <td className="p-6 text-center text-gray-400 text-sm md:text-base">{v1}</td>
            <td className="p-6 text-center text-gray-300 font-medium text-sm md:text-base">{v2}</td>
            <td className="p-6 text-center text-white font-bold text-sm md:text-base">{v3}</td>
        </tr>
    );
}

function ExtraColumn({ title, children, color }: { title: string, children: any, color: 'blue' | 'purple' | 'cyan' }) {
    const borders = {
        blue: 'border-brand-blue/20',
        purple: 'border-brand-purple/20',
        cyan: 'border-brand-cyan/20'
    };
    return (
        <Card className={`p-8 space-y-8 bg-brand-black border-2 ${borders[color]}`}>
            <h3 className="text-2xl font-display font-bold text-white border-b border-white/5 pb-6">{title}</h3>
            <ul className="space-y-4">
                {children}
            </ul>
        </Card>
    );
}

function BenefitItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:text-white transition-all">
                {icon}
            </div>
            <h4 className="font-bold text-white mb-2">{title}</h4>
            <p className="text-gray-500 text-sm">{text}</p>
        </div>
    );
}
