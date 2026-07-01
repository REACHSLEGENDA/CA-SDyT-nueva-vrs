'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
    Network, Shield, Camera, Server, Headphones,
    CheckCircle2, Wifi, Monitor, HardDrive,
    AlertTriangle, Lock, Eye, MessageSquare,
    ArrowRight, Zap, Globe, Cpu
} from 'lucide-react';
import { Link } from '@/i18n/routing';

const SERVICIOS_TI = [
    {
        id: 'redes',
        icon: <Network size={32} className="text-ca-mid" />,
        glowColor: 'text-ca-mid',
        title: 'Redes y Conectividad',
        tagline: 'Nunca sin conexión.',
        desc: 'Diseñamos, instalamos y optimizamos redes locales profesionales para empresas de cualquier tamaño. Desde cableado estructurado hasta configuración de VLANs y monitoreo en tiempo real.',
        bullets: [
            'Cableado estructurado UTP Cat6/Cat6A (tendido, ponchado y organización)',
            'Routers y switches DrayTek y Extreme Networks',
            'Segmentación con VLANs para seguridad y rendimiento',
            'Monitoreo continuo con PRTG — detección de fallas antes de que afecten',
            'Wi-Fi empresarial con cobertura garantizada',
        ],
        link: { pathname: '/contacto' as const, query: { servicio: 'Redes y Conectividad Profesional' } },
    },
    {
        id: 'ciberseguridad',
        icon: <Shield size={32} className="text-ca-success" />,
        glowColor: 'text-ca-success',
        title: 'Ciberseguridad',
        tagline: 'Protegemos lo que más importa.',
        desc: 'Seguridad perimetral con firewalls Fortinet y monitoreo de amenazas para que tu operación esté protegida las 24 horas contra ataques, accesos no autorizados y filtraciones de datos.',
        bullets: [
            'Firewalls Fortinet configurados con políticas de seguridad avanzadas',
            'CyberOps: monitoreo de sistemas críticos e identificación de vulnerabilidades',
            'VPN segura para trabajo remoto sin comprometer la red corporativa',
            'Auditorías de seguridad y reportes de cumplimiento',
            'Respuesta a incidentes y recuperación',
        ],
        link: { pathname: '/contacto' as const, query: { servicio: 'Ciberseguridad' } },
    },
    {
        id: 'cctv',
        icon: <Camera size={32} className="text-ca-purple" />,
        glowColor: 'text-ca-purple',
        title: 'Videovigilancia CCTV',
        tagline: 'Siempre con ojo en tu negocio.',
        desc: 'Instalación completa de sistemas de videovigilancia IP y analógica con acceso remoto desde tu teléfono o computadora, sin importar dónde estés.',
        bullets: [
            'Cámaras IP y analógicas HD/4K para interior y exterior',
            'Configuración de grabadores DVR/NVR con almacenamiento local o en nube',
            'Acceso y monitoreo remoto desde cualquier dispositivo',
            'Alertas de movimiento y notificaciones inteligentes',
            'Integración con sistemas de control de acceso',
        ],
        link: { pathname: '/contacto' as const, query: { servicio: 'Videovigilancia CCTV' } },
    },
    {
        id: 'servidores',
        icon: <Server size={32} className="text-ca-cyan" />,
        glowColor: 'text-ca-cyan',
        title: 'Servidores y Nube Privada',
        tagline: 'Tu información segura y centralizada.',
        desc: 'Implementamos servidores físicos y virtuales, NAS Synology para respaldos automáticos y administramos Google Workspace para que tu equipo colabore sin fricciones.',
        bullets: [
            'Windows Server 2025 con Active Directory y políticas de grupo',
            'NAS Synology: nube privada local con respaldos automáticos y cifrados',
            'Google Workspace: migración, usuarios, correos corporativos y permisos',
            'Virtualización con Hyper-V o VMware',
            'Monitoreo de recursos y alertas de capacidad',
        ],
        link: { pathname: '/contacto' as const, query: { servicio: 'Servidores y Nube Privada' } },
    },
    {
        id: 'soporte',
        icon: <Headphones size={32} className="text-yellow-400" />,
        glowColor: 'text-yellow-400',
        title: 'Soporte Técnico Integral',
        tagline: 'Estamos cuando más nos necesitas.',
        desc: 'Mesa de ayuda presencial y remota para mantener tu operación tecnológica sin interrupciones. Mantenimiento preventivo, correctivo y gestión de inventarios.',
        bullets: [
            'Resolución de problemas en Windows, Linux y Mac',
            'Mantenimiento preventivo y correctivo de hardware (diagnóstico, formateo, clonación)',
            'Instalación y configuración de impresoras en red (IP y Dominio)',
            'Control y gestión de inventarios tecnológicos para multisucursales',
            'Soporte remoto inmediato via herramientas de acceso seguro',
        ],
        link: { pathname: '/contacto' as const, query: { servicio: 'Soporte Técnico Integral' } },
    },
];

export default function InfraestructuraTIPage() {
    return (
        <div className="pt-20 min-h-screen">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <Section className="text-center pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-ca-mid/8 rounded-full blur-[140px] -z-10" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ca-purple/5 rounded-full blur-[120px] -z-10" />

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest">
                            ✦ Infraestructura TI
                        </span>
                        <Badge variant="new">Nuevo servicio</Badge>
                    </div>
                </motion.div>

                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text mb-6 leading-[1.05]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Tu empresa operando{' '}
                    <span className="text-ca-gradient">sin interrupciones.</span>
                </motion.h1>

                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    Redes, ciberseguridad, CCTV, servidores y soporte técnico. Diseñamos y mantenemos
                    la infraestructura tecnológica de tu negocio para que nunca pares.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href={{ pathname: '/contacto', query: { servicio: 'Plan TI Empresarial' } }}
                        className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                    >
                        Diagnóstico TI gratuito →
                    </Link>
                    <a
                        href="https://wa.me/5951145576"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-ca-border text-ca-text px-8 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all flex items-center justify-center gap-2"
                    >
                        <MessageSquare size={18} /> WhatsApp
                    </a>
                </motion.div>

                {/* Íconos de servicios en strip */}
                <motion.div
                    className="mt-14 flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                >
                    {[
                        { icon: <Wifi size={18} />, label: 'Redes', color: 'text-ca-mid' },
                        { icon: <Shield size={18} />, label: 'Ciberseguridad', color: 'text-ca-success' },
                        { icon: <Camera size={18} />, label: 'CCTV', color: 'text-ca-purple' },
                        { icon: <Server size={18} />, label: 'Servidores', color: 'text-ca-cyan' },
                        { icon: <Headphones size={18} />, label: 'Soporte', color: 'text-yellow-400' },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ca-surface border border-ca-border">
                            <span className={item.color}>{item.icon}</span>
                            <span className="text-ca-muted text-sm">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </Section>

            {/* ─── PROBLEMA / SOLUCIÓN ──────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <GlassCard className="p-7 border-red-500/10">
                        <div className="flex items-center gap-3 mb-5">
                            <AlertTriangle size={20} className="text-red-400" />
                            <h3 className="font-bold text-ca-text">Sin infraestructura adecuada</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Red lenta que frena la productividad',
                                'Datos sin respaldo = riesgo total',
                                'Sin firewall, cualquiera puede entrar',
                                'Soporte tardío: horas sin trabajar',
                                'Sin CCTV, sin control de tu negocio',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-ca-muted">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-7 border-ca-success/15" glow="cyan">
                        <div className="flex items-center gap-3 mb-5">
                            <CheckCircle2 size={20} className="text-ca-success" />
                            <h3 className="font-bold text-ca-text">Con CA Infraestructura TI</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Red profesional diseñada para tu operación',
                                'Respaldos automáticos cifrados en NAS',
                                'Fortinet bloqueando amenazas 24/7',
                                'Soporte remoto y presencial inmediato',
                                'CCTV con acceso desde tu teléfono',
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-ca-text">
                                    <CheckCircle2 size={14} className="text-ca-success shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </Section>

            {/* ─── SERVICIOS DETALLADOS ─────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <SectionHeader
                    eyebrow="Lo que incluye"
                    title="Cada servicio, al detalle"
                    subtitle="5 áreas de especialización que conforman una infraestructura TI sólida."
                />

                <div className="space-y-6">
                    {SERVICIOS_TI.map((svc, i) => (
                        <motion.div
                            key={svc.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <GlassCard glow="cyan" className="p-7">
                                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                                    {/* Ícono */}
                                    <div className="w-14 h-14 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center shrink-0">
                                        {svc.icon}
                                    </div>

                                    {/* Contenido */}
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="font-display font-black text-xl text-ca-text">{svc.title}</h3>
                                            <span className={`font-mono text-xs ${svc.glowColor}`}>{svc.tagline}</span>
                                        </div>
                                        <p className="text-ca-muted text-sm leading-relaxed mb-4">{svc.desc}</p>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {svc.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2 text-sm text-ca-text">
                                                    <CheckCircle2 size={13} className="text-ca-cyan mt-0.5 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="shrink-0">
                                        <Link
                                            href={svc.link}
                                            className="inline-flex items-center gap-2 font-mono text-xs text-ca-cyan border border-ca-cyan/30 px-4 py-2 rounded-lg hover:bg-ca-cyan/10 transition-colors whitespace-nowrap"
                                        >
                                            Solicitar <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── TECNOLOGÍAS ─────────────────────────────────────── */}
            <Section className="border-t border-ca-border">
                <SectionHeader
                    eyebrow="Equipos y marcas"
                    title="Tecnología de nivel empresarial"
                    subtitle="Trabajamos con fabricantes líderes para garantizar durabilidad y soporte."
                />
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { name: 'Fortinet', icon: <Shield size={16} />, color: 'text-ca-success' },
                        { name: 'Synology NAS', icon: <HardDrive size={16} />, color: 'text-ca-cyan' },
                        { name: 'Windows Server 2025', icon: <Server size={16} />, color: 'text-blue-400' },
                        { name: 'DrayTek', icon: <Wifi size={16} />, color: 'text-ca-mid' },
                        { name: 'Extreme Networks', icon: <Network size={16} />, color: 'text-purple-400' },
                        { name: 'PRTG', icon: <Monitor size={16} />, color: 'text-orange-400' },
                        { name: 'Google Workspace', icon: <Globe size={16} />, color: 'text-emerald-400' },
                        { name: 'Active Directory', icon: <Cpu size={16} />, color: 'text-ca-muted' },
                        { name: 'VPN / Zero Trust', icon: <Lock size={16} />, color: 'text-ca-purple' },
                    ].map((tech) => (
                        <motion.div
                            key={tech.name}
                            whileHover={{ y: -3 }}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-ca-surface border border-ca-border hover:border-ca-cyan/30 transition-all cursor-default"
                        >
                            <span className={tech.color}>{tech.icon}</span>
                            <span className="text-ca-muted text-sm">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* ─── PLAN TI EMPRESARIAL CTA ──────────────────────────── */}
            <Section className="py-20">
                <GlassCard glow="cyan" className="p-10 md:p-14">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <Badge variant="new" className="mb-4">Plan completo</Badge>
                            <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mb-4">
                                Plan TI Empresarial
                            </h2>
                            <p className="text-ca-muted mb-6">
                                Todos los servicios anteriores en un plan mensual único. Red, firewall,
                                servidor, CCTV, soporte y monitoreo — un solo equipo para todo.
                            </p>
                            <ul className="space-y-2.5 mb-8">
                                {[
                                    'Red local diseñada e instalada',
                                    'Firewall Fortinet configurado',
                                    'Servidor o NAS implementado',
                                    'Google Workspace administrado',
                                    'Monitoreo PRTG 24/7',
                                    'Soporte técnico mensual incluido',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-ca-text">
                                        <CheckCircle2 size={14} className="text-ca-cyan shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={{ pathname: '/contacto', query: { servicio: 'Plan TI Empresarial' } }}
                                className="inline-flex items-center gap-2 bg-ca-gradient text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                            >
                                Solicitar Plan TI <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: <Zap size={18} className="text-ca-cyan" />, title: 'Diagnóstico gratuito', desc: 'Evaluamos tu infraestructura actual sin costo.' },
                                { icon: <Eye size={18} className="text-ca-mid" />, title: 'Sin contratos eternos', desc: 'Planes flexibles mes a mes adaptados a tu negocio.' },
                                { icon: <Headphones size={18} className="text-yellow-400" />, title: 'Soporte presencial', desc: 'Técnicos que van a tu oficina cuando los necesitas.' },
                                { icon: <Lock size={18} className="text-ca-success" />, title: 'Confidencialidad total', desc: 'Tus datos y sistemas son completamente privados.' },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-ca-surface2 border border-ca-border">
                                    <div className="w-9 h-9 rounded-lg bg-ca-surface border border-ca-border flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-ca-text text-sm">{item.title}</h4>
                                        <p className="text-ca-muted text-xs mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </GlassCard>
            </Section>

            {/* ─── CTA FINAL ───────────────────────────────────────── */}
            <Section className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-display font-black text-4xl text-ca-text mb-4">
                        ¿Listo para una infraestructura que no falla?
                    </h2>
                    <p className="text-ca-muted mb-8">
                        Contáctanos y un especialista TI analizará tu situación actual y te propondrá
                        la solución más eficiente para tu empresa.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={{ pathname: '/contacto', query: { servicio: 'Plan TI Empresarial' } }}
                            className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-ca-cyan/20"
                        >
                            Contactar especialista TI →
                        </Link>
                        <Link
                            href={{ pathname: '/paquetes-web', hash: 'ti' }}
                            className="border border-ca-border text-ca-text px-8 py-3.5 rounded-xl hover:border-ca-cyan/40 hover:text-ca-cyan transition-all"
                        >
                            Ver Plan TI Empresarial
                        </Link>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
