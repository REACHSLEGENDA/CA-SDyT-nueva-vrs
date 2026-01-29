'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Info, X, Layers, Code, User, PlayCircle, Globe, Smartphone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    type: "Desarrollo Completo" | "Colaboración" | "App Web";
    client: string;
    stack: string;
    description: string;
    demoUrl?: string;
}

const portfolioItems: Project[] = [
    {
        id: 1,
        title: "Kovex",
        url: "https://kovex.net",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202025-08-16%20194802.png",
        type: "Desarrollo Completo",
        client: "Sector Financiero",
        stack: "React, Node.js, AWS",
        description: "Plataforma financiera integral para la gestión de activos y transacciones de alta seguridad."
    },
    {
        id: 2,
        title: "Kiper",
        url: "https://kiper.app/?gad_source=1&gad_campaignid=22984206467&gbraid=0AAAABBKikHugtD12u8E6QHp0azg6zYqRI&gclid=Cj0KCQiAhOfLBhCCARIsAJPiopNTyhr0dZD1Suav3uMl3hUHeVDKgiDcSlYplCwxJaV3B5XWH9DA2dQaAnMNEALw_wcB",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/fa65e77a159d8b7f1b52b0bbb577ca3fb95792cd/Captura%20de%20pantalla%202026-01-28%20171424.png",
        type: "Colaboración",
        client: "Software CRM",
        stack: "Participación en Desarrollo & Optimización",
        description: "Participamos en módulos clave de este CRM inmobiliario líder en el mercado."
    },
    {
        id: 3,
        title: "AbastoFlow",
        url: "https://abasto-flow.netlify.app/",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/abas.png",
        type: "App Web",
        client: "Logística y Suministro",
        stack: "Next.js, Supabase, Tailwind",
        description: "Aplicación web completa para la gestión de inventarios y flujo de abasto. Control total de stock y pedidos.",
        demoUrl: "/contacto"
    },
    {
        id: 4,
        title: "FX Latam Pro",
        url: "https://www.fxlatampro.site/",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20172653.png",
        type: "Desarrollo Completo",
        client: "Educación Financiera",
        stack: "Web Platform & LMS",
        description: "Academia de trading online con gestión de usuarios, cursos y señales en tiempo real."
    },
    {
        id: 5,
        title: "Emuna",
        url: "https://www.emuna.mx/",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20172306.png",
        type: "Colaboración",
        client: "E-commerce & Retail",
        stack: "Shopify / Custom Code",
        description: "Colaboración en el desarrollo frontend y optimización de conversión para esta marca de joyería."
    },
    {
        id: 6,
        title: "Brokers Calificados",
        url: "https://brokerscalificados.net",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202025-08-16%20194913.png",
        type: "Desarrollo Completo",
        client: "Directorio Inmobiliario",
        stack: "Next.js, SEO Avanzado",
        description: "Portal especializado para conectar usuarios con brokers certificados en todo México."
    },
    {
        id: 7,
        title: "Hotel BINDANI",
        url: "https://hotelbindani.com/",
        imageUrl: "https://raw.githubusercontent.com/REACHSLEGENDA/Imagenes/refs/heads/main/Captura%20de%20pantalla%202026-01-28%20173045.png",
        type: "Desarrollo Completo",
        client: "Hospitalidad & Turismo",
        stack: "Web, Booking Engine & Redes Sociales",
        description: "Diseño web elegante y gestión de estrategia digital para posicionamiento de hotel boutique."
    }
];

export default function PortfolioPage() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="pt-20 min-h-screen">
            <Section className="text-center pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-8">
                        <Globe size={16} />
                        <span>Experiencia Global Comprobada</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                        Nuestra <span className="text-gradient">Trayectoria</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed text-balance">
                        Hemos construido soluciones para startups fintech, inmobiliarias, hoteles y empresas de logística. Aquí una muestra de nuestra ingeniería en acción.
                    </p>
                </motion.div>
            </Section>

            <Section className="pb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <Card className="h-full overflow-hidden border-white/5 bg-brand-black/50 group hover:border-brand-blue/30 transition-all duration-300 flex flex-col">
                                {/* Image Container */}
                                <div className="h-56 w-full relative overflow-hidden bg-brand-black">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />

                                    {/* Type Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl">
                                        {item.type}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow relative">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{item.client}</p>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex items-center gap-2 mb-6 text-xs text-gray-500">
                                        <Code size={14} className="text-brand-purple" />
                                        <span>{item.stack}</span>
                                    </div>

                                    {/* Actions */}
                                    <div className={`grid gap-3 mt-auto ${item.demoUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="outline" size="sm" className="w-full text-xs h-10 border-white/10 hover:border-white/30 hover:bg-white/5">
                                                <ExternalLink size={14} className="mr-2" /> Visitar
                                            </Button>
                                        </a>
                                        {item.demoUrl && (
                                            <Link href={item.demoUrl} className="w-full">
                                                <Button size="sm" className="w-full text-xs h-10 bg-brand-blue hover:bg-brand-blue/80 border-0">
                                                    <PlayCircle size={14} className="mr-2" /> Solicitar Demo
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="pb-32 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-white">¿Tienes un proyecto en mente?</h2>
                    <p className="text-gray-400">Si te gustó nuestro trabajo, imagina lo que podemos hacer por tu marca.</p>
                    <Link href="/contacto">
                        <Button size="lg" className="px-12">Iniciar Cotización</Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
