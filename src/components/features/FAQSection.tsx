'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: '¿Cuánto tiempo tarda el desarrollo de un proyecto web?',
        answer: 'Depende de la complejidad. Una Landing Page profesional toma entre 1 y 2 semanas. Un sitio corporativo completo, de 3 a 5 semanas. Para plataformas a medida (SaaS, E-commerce avanzado), el plazo varía entre 2 y 4 meses, dependiendo del alcance definido en la fase de análisis.'
    },
    {
        question: '¿Trabajan también con aplicaciones móviles?',
        answer: 'Sí. Somos expertos en desarrollo móvil nativo (Swift, Kotlin) y multiplataforma (React Native). Podemos llevar tu idea a iOS y Android con una base de código optimizada, asegurando rendimiento nativo y una experiencia de usuario fluida.'
    },
    {
        question: '¿Pueden integrar sistemas o APIs existentes?',
        answer: 'Absolutamente. Nos especializamos en arquitectura de software compleja. Podemos conectar tu nuevo sitio o app con CRMs (Salesforce, HubSpot), ERPs, pasarelas de pago (Stripe, PayPal) o cualquier API REST/GraphQL que tu negocio utilice actualmente.'
    },
    {
        question: '¿Ofrecen mantenimiento después del lanzamiento?',
        answer: 'El software es un organismo vivo. Ofrecemos planes de mantenimiento evolutivo que incluyen actualizaciones de seguridad, monitoreo de servidores 24/7, respaldos automáticos y optimizaciones de rendimiento continuas para que tu inversión nunca quede obsoleta.'
    },
    {
        question: '¿El sitio será rápido y seguro?',
        answer: 'La velocidad y seguridad son pilares de nuestra ingeniería. Usamos tecnologías modernas (Next.js, Edge Computing) para lograr cargas casi instantáneas. Implementamos protocolos de seguridad bancaria, certificados SSL avanzados y protección contra ataques DDoS por defecto.'
    },
    {
        question: '¿Puedo escalar mi sistema en el futuro?',
        answer: 'Diseñamos pensando en el crecimiento desde el día uno. Nuestra arquitectura modular y serverless permite que tu sistema soporte desde 100 usuarios hasta millones sin necesidad de reescribir el código base. Tu tecnología crecerá al ritmo de tu éxito.'
    },
    {
        question: '¿Cómo se realiza el proceso de cotización?',
        answer: 'Transparente y detallado. Primero agendamos una breve llamada para entender tus necesidades. Luego, te entregamos una propuesta formal desglosada por fases, entregables y tiempos. Sin costos ocultos ni letras pequeñas.'
    },
    {
        question: '¿Qué tecnologías utilizan en sus desarrollos?',
        answer: 'Usamos un stack de vanguardia: React y Next.js para frontend, Node.js o Python para backend, bases de datos SQL/NoSQL escalables (PostgreSQL, MongoDB) y nube en AWS o Vercel. Seleccionamos la mejor herramienta para cada problema específico.'
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-sm font-medium mb-6"
                    >
                        <HelpCircle size={16} />
                        <span>Resolviendo dudas</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        Preguntas Frecuentes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        Resolvemos las dudas más comunes antes de comenzar tu proyecto.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AccordionItem({ item, isOpen, onClick, index }: { item: FAQItem, isOpen: boolean, onClick: () => void, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen
                    ? "bg-white/5 border-brand-blue/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
            )}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className={cn(
                    "text-lg font-medium transition-colors pr-8",
                    isOpen ? "text-brand-blue" : "text-gray-200"
                )}>
                    {item.question}
                </span>
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    isOpen ? "bg-brand-blue text-white" : "bg-white/10 text-gray-400"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
