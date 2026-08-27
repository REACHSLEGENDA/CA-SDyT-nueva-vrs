'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

import { useLocale } from 'next-intl';
import { getFaqs, FAQItem } from '@/lib/faqData';

const COPY: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
    'es-MX': { eyebrow: 'Resolviendo dudas', title: 'Preguntas Frecuentes', subtitle: 'Resolvemos las dudas mas comunes antes de comenzar tu proyecto.' },
    'en': { eyebrow: 'Common questions', title: 'Frequently Asked Questions', subtitle: 'The answers most clients need before starting a project with a remote team.' },
    'es-419': { eyebrow: 'Resolviendo dudas', title: 'Preguntas Frecuentes', subtitle: 'Lo que suelen preguntarnos las empresas de la region antes de empezar.' },
    'es-ES': { eyebrow: 'Resolviendo dudas', title: 'Preguntas Frecuentes', subtitle: 'Lo que necesitas saber antes de empezar tu proyecto con un equipo remoto.' },
    'pt-BR': { eyebrow: 'Duvidas comuns', title: 'Perguntas Frequentes', subtitle: 'O que as empresas costumam perguntar antes de iniciar um projeto.' },
};

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const locale = useLocale();
    const faqs = getFaqs(locale);
    const copy = COPY[locale] ?? COPY['es-MX'];

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
                        <span>{copy.eyebrow}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        {copy.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        {copy.subtitle}
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
