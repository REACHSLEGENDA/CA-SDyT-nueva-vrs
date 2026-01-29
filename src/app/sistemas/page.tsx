'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Database,
    ShoppingCart,
    Users,
    ClipboardList,
    ShieldCheck,
    Zap,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Server,
    Share2,
    Cog,
    Lock,
    RefreshCw,
    Network
} from 'lucide-react';
import Link from 'next/link';

export default function SystemsPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* 1. HERO - Enterprise Architecture Header */}
            <Section className="text-center pb-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-8"
                >
                    <Server size={16} className="fill-brand-cyan" />
                    <span>Software de Grado Empresarial</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
                    Sistemas <br />
                    <span className="text-gradient">a Medida</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                    Tu negocio tiene reglas únicas, tu software también debería tenerlas. Construimos el núcleo tecnológico de tu empresa mediante sistemas robustos, seguros y totalmente adaptados a tus procesos operativos.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/contacto" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-12 h-16 text-lg">Solicitar Consultoría Técnica</Button>
                    </Link>
                    <Link href="/nosotros" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">Nuestra Metodología</Button>
                    </Link>
                </div>
            </Section>

            {/* 2. CORE SOLUTIONS - 4 Pillar Grid */}
            <Section className="py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Verticales de Especialización</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg text-balance">
                        Soluciones diseñadas desde cero para eliminar los cuellos de botella de tu gestión diaria.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SystemCard
                        icon={<Users />}
                        title="CRM Estratégico"
                        desc="Control total del ciclo de vida del cliente. Embudos de venta, seguimiento comercial y gestión de leads con alertas inteligentes."
                        features={["Embudo Personalizado", "Historial de Interacciones", "Automatización de Email"]}
                    />
                    <SystemCard
                        icon={<ShoppingCart />}
                        title="POS / Punto de Venta"
                        desc="Sistemas de venta rápida con control de inventarios, reportes de caja en vivo e integración de facturación electrónica."
                        features={["Multi-sucursal", "Gestión de Stock", "Tickets y Facturación"]}
                    />
                    <SystemCard
                        icon={<ClipboardList />}
                        title="ERP & Gestión Interna"
                        desc="Administración integral de recursos: nómina, proveedores, logística y finanzas en una sola plataforma segura."
                        features={["Contabilidad Básica", "Gestión de Proveedores", "Control de Activos"]}
                    />
                    <SystemCard
                        icon={<Database />}
                        title="Migración de Datos"
                        desc="Modernizamos tus sistemas antiguos. Pasamos tu info de Excel o software legacy a bases de datos cloud modernas."
                        features={["Limpieza de Datos", "Arquitectura en la Nube", "Cero Downtime"]}
                    />
                </div>
            </Section>

            {/* 3. TECHNICAL DEPTH - Methodology & Security */}
            <Section className="py-24 bg-brand-cyan/5 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10" />
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ingeniería que <br /> <span className="text-brand-cyan">Escala tu Operación</span></h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <BenefitItem
                                icon={<Lock className="text-brand-cyan" />}
                                title="Seguridad Centinela"
                                text="Encriptación de datos, auditoría de accesos y cumplimiento de normativas de protección de información."
                            />
                            <BenefitItem
                                icon={<Network className="text-brand-purple" />}
                                title="Integración Total"
                                text="Conectamos tu sistema con APIs de terceros, bancos, transportistas o cualquier software que ya utilices."
                            />
                            <BenefitItem
                                icon={<RefreshCw className="text-green-400" />}
                                title="Sincronización Cloud"
                                text="Acceso desde cualquier lugar con actualizaciones en tiempo real y respaldos automáticos cada minuto."
                            />
                            <BenefitItem
                                icon={<BarChart3 className="text-yellow-400" />}
                                title="Business Intelligence"
                                text="Toma decisiones basadas en datos reales. Gráficas y tableros que te dicen la verdad de tu negocio."
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-1 rounded-[3rem] bg-gradient-to-br from-brand-cyan/30 via-white/5 to-transparent"
                    >
                        <div className="bg-brand-black p-12 rounded-[2.9rem] border border-white/5 space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Fases de Ingeniería CA</h3>
                            <div className="space-y-6">
                                <StepLine num="01" title="Modelado de Negocio" desc="Mapeamos tus procesos actuales y detectamos áreas de optimización automática." />
                                <StepLine num="02" title="Diseño de Arquitectura" desc="Definimos la base de datos y la seguridad para soportar el crecimiento futuro." />
                                <StepLine num="03" title="Desarrollo Iterativo" desc="Entregamos módulos funcionales cada 2 semanas para tu validación constante." />
                                <StepLine num="04" title="Testing & Despliegue" desc="Pruebas de estrés y capacitación a tu equipo para un lanzamiento sin fricciones." />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 4. TECH SPECS - Authority Block */}
            <Section className="py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-white">Nuestro Stack para Sistemas</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <TechIcon name="Node.js" />
                    <TechIcon name="PostgreSQL" />
                    <TechIcon name="Typescript" />
                    <TechIcon name="Redis" />
                    <TechIcon name="Docker" />
                    <TechIcon name="AWS" />
                    <TechIcon name="Next.js" />
                </div>
            </Section>

            {/* 5. CTA FINAL - High Conversion */}
            <Section className="py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-brand-black border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Cog size={180} className="animate-spin-slow" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">
                        Optimiza tu negocio con un <br />
                        <span className="text-gradient">sistema que trabaje por ti</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        Deja de usar herramientas genéricas que limitan tu crecimiento. Diseñemos la herramienta que tu operación realmente merece.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contacto" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-12 h-16 text-lg bg-brand-cyan hover:bg-brand-cyan/90 text-brand-black border-0 font-bold">
                                Diagnóstico de Proyecto
                            </Button>
                        </Link>
                        <a href="https://wa.me/525633680348" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full px-12 h-16 text-lg">
                                Hablar con un Arquitecto de Software
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}

// Child Components
function SystemCard({ icon, title, desc, features }: { icon: any, title: string, desc: string, features: string[] }) {
    return (
        <Card className="p-8 flex flex-col h-full bg-white/[0.02] border-white/10 hover:border-brand-cyan/40 hover:bg-brand-cyan/[0.03] transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-8 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-brand-black transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
            <ul className="space-y-2 pt-6 border-t border-white/5">
                {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-widest">
                        <ArrowRight size={12} className="text-brand-cyan" /> {f}
                    </li>
                ))}
            </ul>
        </Card>
    );
}

function BenefitItem({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );
}

function StepLine({ num, title, desc }: { num: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 items-start group">
            <div className="text-2xl font-display font-bold text-brand-cyan/40 group-hover:text-brand-cyan transition-colors">{num}</div>
            <div>
                <h5 className="text-white font-bold mb-1">{title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function TechIcon({ name }: { name: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white bg-white/5">
                <Cpu size={20} className="text-gray-400" />
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{name}</span>
        </div>
    );
}
