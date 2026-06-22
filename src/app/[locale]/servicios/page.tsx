'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, TrendingUp, Network, Lightbulb,
    Globe, Smartphone, Database, Bot, Share2, BookOpen,
    Search, Shield, Camera, Server, Headphones,
    CheckCircle2, ArrowRight, ChevronDown
} from 'lucide-react';
import { Link } from '@/i18n/routing';

/* ─── Tipos ─────────────────────────────────────────────────────────── */
interface SubService {
    icon: React.ReactNode;
    title: string;
    desc: string;
    bullets: string[];
    pageLink?: string;   // ruta a la página detallada (si existe)
}

interface Category {
    id: string;
    icon: React.ReactNode;
    label: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    accent: string;
    badge?: React.ReactNode;
    services: SubService[];
}

/* ─── Datos ──────────────────────────────────────────────────────────── */
const categories: Category[] = [
    {
        id: 'digital',
        icon: <Code2 size={22} />,
        label: 'Desarrollo Digital',
        eyebrow: 'Categoría 1',
        title: 'Desarrollo Digital',
        subtitle: 'Soluciones web, móviles y sistemas a medida con la mejor tecnología.',
        accent: 'text-ca-cyan border-ca-cyan/40 bg-ca-cyan/10',
        services: [
            {
                icon: <Globe size={24} className="text-ca-cyan" />,
                title: 'Desarrollo Web Premium',
                desc: 'Páginas institucionales, landing pages de alta conversión y sistemas web completos con Next.js y React.',
                bullets: ['Next.js App Router + SSR', 'Core Web Vitals 100/100', 'Panel CMS autoadministrable', 'Infraestructura Cloud segura'],
                pageLink: '/apps-web',
            },
            {
                icon: <Smartphone size={24} className="text-ca-mid" />,
                title: 'Aplicaciones Móviles',
                desc: 'Apps nativas y multiplataforma para iOS y Android con Flutter y Kotlin.',
                bullets: ['Flutter & Kotlin nativo', 'Sincronización en tiempo real', 'Push notifications', 'UX Mobile-First premium'],
                pageLink: '/apps-moviles',
            },
            {
                icon: <Database size={24} className="text-purple-400" />,
                title: 'Sistemas Empresariales a Medida',
                desc: 'CRM, ERP, Puntos de Venta y herramientas de gestión que automatizan tu operación.',
                bullets: ['Dashboards analíticos avanzados', 'Reportes PDF/Excel automáticos', 'Roles y permisos granulares', 'Seguridad de datos nivel bancario'],
                pageLink: '/sistemas',
            },
            {
                icon: <Bot size={24} className="text-pink-400" />,
                title: 'Automatización e Integraciones IA',
                desc: 'Bots para WhatsApp, flujos automáticos y conexión entre plataformas.',
                bullets: ['Chatbots cognitivos (GPT-4)', 'Integración Make.com / Zapier', 'Automatización de WhatsApp', 'Análisis de datos con IA'],
                pageLink: '/automatizacion',
            },
            {
                icon: <Search size={24} className="text-yellow-400" />,
                title: 'UI/UX Design',
                desc: 'Wireframes, prototipos interactivos y design systems que convierten visitantes en clientes.',
                bullets: ['Wireframes de baja/alta fidelidad', 'Prototipos interactivos', 'Design system completo', 'Pruebas de usabilidad'],
            },
        ],
    },
    {
        id: 'marketing',
        icon: <TrendingUp size={22} />,
        label: 'Marketing Digital',
        eyebrow: 'Categoría 2',
        title: 'Marketing y Presencia Digital',
        subtitle: 'Estrategias para crecer tu marca, captar clientes y posicionarte en Google y en IA.',
        accent: 'text-ca-purple border-ca-purple/40 bg-ca-purple/10',
        services: [
            {
                icon: <Share2 size={24} className="text-ca-purple" />,
                title: 'Gestión de Redes Sociales',
                desc: 'Contenido estratégico y campañas pagadas en Meta, Google y LinkedIn con enfoque en ROI.',
                bullets: ['Estrategia de contenido 360°', 'Facebook & Instagram Ads', 'LinkedIn Ads B2B', 'Diseño gráfico para redes'],
                pageLink: '/marketing',
            },
            {
                icon: <Search size={24} className="text-orange-400" />,
                title: 'SEO Técnico y AEO',
                desc: 'Posicionamiento en Google y optimización para respuestas de IA (ChatGPT, Gemini, Claude).',
                bullets: ['SEO On-Page y técnico', 'AEO – Answer Engine Optimization', 'Posicionamiento en IA generativa', 'Auditoría de velocidad y Core Web Vitals'],
                pageLink: '/seo-aeo',
            },
            {
                icon: <Globe size={24} className="text-emerald-400" />,
                title: 'Google Business & Maps',
                desc: 'Optimizamos y verificamos tu ficha en Google Maps para que te encuentren primero.',
                bullets: ['Alta y verificación de perfil', 'Optimización de reseñas', 'Fotos y posts estratégicos', 'Seguimiento de posición local'],
                pageLink: '/seo-aeo',
            },
            {
                icon: <Bot size={24} className="text-green-400" />,
                title: 'Bot de WhatsApp con IA',
                desc: 'Chatbot inteligente que atiende, vende y agenda por ti las 24 horas.',
                bullets: ['Respuestas automáticas con GPT-4', 'Integración con tu catálogo', 'Captura de leads calificados', 'Gestión de citas y pedidos'],
                pageLink: '/automatizacion',
            },
            {
                icon: <BookOpen size={24} className="text-pink-400" />,
                title: 'Diseño de Marca e Identidad Visual',
                desc: 'Logo, paleta, tipografía y brand manual para que tu marca hable antes de que abras la boca.',
                bullets: ['Logotipo vectorial', 'Manual de identidad', 'Papelería corporativa', 'Templates redes sociales'],
            },
        ],
    },
    {
        id: 'infraestructura',
        icon: <Network size={22} />,
        label: 'Infraestructura TI',
        eyebrow: 'Categoría 3',
        title: 'Infraestructura TI y Ciberseguridad',
        subtitle: 'Redes, ciberseguridad, CCTV, servidores y soporte para que tu operación nunca se detenga.',
        accent: 'text-ca-gradient border-ca-cyan/40',
        badge: <Badge variant="new">✦ Nuevo</Badge>,
        services: [
            {
                icon: <Network size={24} className="text-ca-mid" />,
                title: 'Redes y Conectividad Profesional',
                desc: 'Diseño, instalación y optimización de redes locales para que tu empresa nunca se quede sin conexión.',
                bullets: [
                    'Instalación de cableado estructurado UTP (tendido, ponchado y organización)',
                    'Configuración de routers y switches DrayTek y Extreme Networks',
                    'Segmentación de redes con VLANs para mayor seguridad y velocidad',
                    'Monitoreo en tiempo real con PRTG',
                ],
                pageLink: '/infraestructura-ti',
            },
            {
                icon: <Shield size={24} className="text-ca-success" />,
                title: 'Ciberseguridad y Protección de Datos',
                desc: 'Protegemos la infraestructura digital de tu negocio contra amenazas y accesos no autorizados.',
                bullets: [
                    'Seguridad perimetral con firewalls Fortinet y políticas avanzadas',
                    'CyberOps: monitoreo de sistemas críticos e identificación de vulnerabilidades',
                    'Configuración de VPN para trabajo remoto seguro',
                    'Auditorías de seguridad y reportes de cumplimiento',
                ],
                pageLink: '/infraestructura-ti',
            },
            {
                icon: <Camera size={24} className="text-ca-purple" />,
                title: 'Videovigilancia CCTV',
                desc: 'Instalación, configuración y puesta en marcha de sistemas de vigilancia con monitoreo remoto.',
                bullets: [
                    'Instalación de cámaras IP y analógicas',
                    'Configuración de grabadores DVR/NVR',
                    'Acceso y monitoreo remoto desde cualquier dispositivo',
                    'Alertas y notificaciones inteligentes',
                ],
                pageLink: '/infraestructura-ti',
            },
            {
                icon: <Server size={24} className="text-ca-cyan" />,
                title: 'Servidores y Nube Privada',
                desc: 'Centralizamos la información de tu equipo y garantizamos respaldos automáticos y seguros.',
                bullets: [
                    'Windows Server 2025 con Active Directory y políticas de grupo',
                    'Servidores NAS Synology: nube privada local con respaldos automáticos',
                    'Migración y administración de Google Workspace',
                    'Virtualización y monitoreo de recursos',
                ],
                pageLink: '/infraestructura-ti',
            },
            {
                icon: <Headphones size={24} className="text-yellow-400" />,
                title: 'Soporte Técnico Integral',
                desc: 'Mesa de ayuda presencial y remota para que tu operación tecnológica nunca se detenga.',
                bullets: [
                    'Resolución de problemas en Windows, Linux y Mac',
                    'Mantenimiento preventivo: diagnóstico de hardware, formateo, clonación',
                    'Instalación y configuración de impresoras en red (IP y Dominio)',
                    'Control de inventarios tecnológicos para empresas multisucursal',
                ],
                pageLink: '/infraestructura-ti',
            },
        ],
    },
    {
        id: 'consultoria',
        icon: <Lightbulb size={22} />,
        label: 'Consultoría',
        eyebrow: 'Categoría 4',
        title: 'Consultoría y Estrategia Digital',
        subtitle: 'Diagnóstico experto, roadmap claro y capacitación para que tu equipo aproveche la tecnología al máximo.',
        accent: 'text-ca-mid border-ca-mid/40 bg-ca-mid/10',
        services: [
            {
                icon: <Search size={24} className="text-ca-mid" />,
                title: 'Auditoría Digital Completa',
                desc: 'Analizamos tu web, SEO, velocidad, UX y seguridad para detectar oportunidades de mejora.',
                bullets: ['Análisis de velocidad y rendimiento', 'Auditoría SEO técnica', 'Revisión de experiencia de usuario', 'Reporte con plan de acción'],
            },
            {
                icon: <TrendingUp size={24} className="text-ca-cyan" />,
                title: 'Estrategia de Presencia Digital',
                desc: 'Roadmap personalizado con metas, métricas y acciones concretas para dominar tu mercado.',
                bullets: ['Análisis de competencia', 'Definición de KPIs y objetivos', 'Roadmap trimestral', 'Seguimiento mensual de resultados'],
            },
            {
                icon: <Database size={24} className="text-ca-purple" />,
                title: 'Integración de Plataformas',
                desc: 'Conectamos tus herramientas (CRM, ERP, ecommerce, pagos) en un solo flujo de trabajo sin fricciones.',
                bullets: ['Mapeo de flujos actuales', 'Selección de herramientas óptimas', 'Integración via APIs', 'Capacitación del equipo'],
                pageLink: '/automatizacion',
            },
            {
                icon: <BookOpen size={24} className="text-emerald-400" />,
                title: 'Capacitación Tecnológica',
                desc: 'Talleres prácticos para que tu equipo use la tecnología con eficiencia y sin depender de terceros.',
                bullets: ['Cursos de herramientas digitales', 'Talleres de ciberseguridad básica', 'Capacitación en Google Workspace', 'Certificado de formación'],
                pageLink: '/clases',
            },
        ],
    },
];

/* ─── Componente principal ───────────────────────────────────────────── */
export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState('digital');
    const [openService, setOpenService] = useState<number | null>(null);

    const active = categories.find((c) => c.id === activeTab)!;

    return (
        <div className="pt-20 min-h-screen">

            {/* Header */}
            <Section className="pb-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-6">
                        ✦ Soluciones completas
                    </span>
                </motion.div>
                <motion.h1
                    className="font-display text-5xl md:text-7xl font-black text-ca-text leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Servicios que impulsan tu{' '}
                    <span className="text-ca-gradient">Crecimiento Digital</span>
                </motion.h1>
                <motion.p
                    className="text-ca-muted text-xl max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    Del desarrollo web a la infraestructura crítica: diseño, ingeniería, redes, seguridad y soporte.
                    Un solo equipo para todo lo que necesitas.
                </motion.p>
            </Section>

            {/* Tabs de categorías */}
            <Section className="pt-0">
                <div className="flex flex-wrap gap-3 justify-center mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveTab(cat.id); setOpenService(null); }}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${activeTab === cat.id
                                    ? 'bg-ca-surface border-ca-cyan/40 text-ca-cyan shadow-lg shadow-ca-cyan/10'
                                    : 'bg-ca-surface/40 border-ca-border text-ca-muted hover:border-ca-border hover:text-ca-text'
                                }`}
                        >
                            {cat.icon}
                            <span className="hidden sm:inline">{cat.label}</span>
                            {cat.badge && <span className="hidden lg:inline">{cat.badge}</span>}
                        </button>
                    ))}
                </div>

                {/* Contenido de la categoría activa */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header de categoría */}
                        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <span className="font-mono text-xs text-ca-muted uppercase tracking-widest">
                                    {active.eyebrow}
                                </span>
                                <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mt-2 flex items-center gap-3">
                                    {active.title}
                                    {active.badge}
                                </h2>
                                <p className="text-ca-muted mt-2 max-w-2xl">{active.subtitle}</p>
                            </div>
                        </div>

                        {/* Grid de servicios */}
                        <div className="space-y-4">
                            {active.services.map((svc, idx) => (
                                <motion.div
                                    key={svc.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.06 }}
                                >
                                    <GlassCard
                                        glow={activeTab === 'infraestructura' ? 'cyan' : 'none'}
                                        hover={false}
                                        className="p-6 cursor-pointer"
                                        onClick={() => setOpenService(openService === idx ? null : idx)}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <div className="w-11 h-11 rounded-xl bg-ca-surface2 border border-ca-border flex items-center justify-center shrink-0">
                                                    {svc.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="font-bold text-ca-text text-lg">{svc.title}</h3>
                                                    <p className="text-ca-muted text-sm mt-0.5 line-clamp-1">{svc.desc}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {svc.pageLink && (
                                                    <Link
                                                        href={svc.pageLink}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-ca-text border border-ca-border px-3 py-1.5 rounded-lg hover:border-ca-cyan/30 hover:text-ca-cyan transition-colors"
                                                    >
                                                        Ver más
                                                    </Link>
                                                )}
                                                <Link
                                                    href={`/contacto?servicio=${encodeURIComponent(svc.title)}`}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-ca-cyan border border-ca-cyan/30 px-3 py-1.5 rounded-lg hover:bg-ca-cyan/10 transition-colors"
                                                >
                                                    Solicitar <ArrowRight size={12} />
                                                </Link>
                                                <motion.div
                                                    animate={{ rotate: openService === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={18} className="text-ca-muted" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {openService === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-5 pt-5 border-t border-ca-border">
                                                        <p className="text-ca-muted text-sm mb-4">{svc.desc}</p>
                                                        <ul className="grid sm:grid-cols-2 gap-2">
                                                            {svc.bullets.map((b, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-ca-text">
                                                                    <CheckCircle2 size={14} className="text-ca-cyan mt-0.5 shrink-0" />
                                                                    {b}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-5 flex flex-wrap gap-3">
                                                            {svc.pageLink && (
                                                                <Link
                                                                    href={svc.pageLink}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    className="inline-flex items-center gap-2 text-sm font-medium text-ca-text border border-ca-border px-4 py-2 rounded-lg hover:border-ca-cyan/40 hover:text-ca-cyan transition-all"
                                                                >
                                                                    Ver página completa →
                                                                </Link>
                                                            )}
                                                            <Link
                                                                href={`/contacto?servicio=${encodeURIComponent(svc.title)}`}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center gap-2 text-sm font-medium text-ca-cyan hover:gap-3 transition-all"
                                                            >
                                                                Solicitar este servicio →
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-ca-surface/30 rounded-[2rem] border border-ca-border mx-4 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-display font-black text-3xl md:text-4xl text-ca-text mb-3">
                            ¿No encuentras lo que buscas?
                        </h2>
                        <p className="text-ca-muted">
                            Si es digital o tecnológico, podemos construirlo. Cuéntanos tu idea y recibe
                            una propuesta sin compromiso.
                        </p>
                    </div>
                    <Link
                        href="/contacto"
                        className="bg-ca-gradient text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-lg shadow-ca-cyan/20"
                    >
                        Háblanos de tu proyecto →
                    </Link>
                </div>
            </Section>
        </div>
    );
}
