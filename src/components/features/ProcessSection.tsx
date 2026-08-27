'use client';

import { motion } from 'framer-motion';
import { Search, Layout, AppWindow, Code2, TestTube2, Rocket, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

// Solo lo que no se traduce: icono, numero y alineacion. El texto vive en messages/*.json.
const stepVisuals = [
    { number: '01', icon: <Search className="w-8 h-8 text-brand-blue" />, align: 'left' },
    { number: '02', icon: <Layout className="w-8 h-8 text-brand-purple" />, align: 'right' },
    { number: '03', icon: <AppWindow className="w-8 h-8 text-pink-400" />, align: 'left' },
    { number: '04', icon: <Code2 className="w-8 h-8 text-brand-cyan" />, align: 'right' },
    { number: '05', icon: <TestTube2 className="w-8 h-8 text-green-400" />, align: 'left' },
    { number: '06', icon: <Rocket className="w-8 h-8 text-orange-400" />, align: 'right' },
];

interface ProcessStepCopy { title: string; description: string; bullets: string[] }


export function ProcessSection() {
    const t = useTranslations('Process');
    const copy = t.raw('steps') as ProcessStepCopy[];
    const steps = stepVisuals.map((v, i) => ({ ...v, ...copy[i] }));

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-medium mb-6"
                    >
                        {t('eyebrow')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                    >
                        {t('titleA')}<span className="text-gradient">{t('titleB')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent hidden md:block" />

                    <div className="space-y-20 md:space-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className={cn(
                                "relative flex flex-col md:flex-row gap-10 md:gap-0 items-center",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}>

                                {/* Number & Dot (Desktop Center) */}
                                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-black border border-brand-blue/30 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                        <div className="w-3 h-3 rounded-full bg-brand-blue" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className={cn(
                                        "w-full md:w-1/2 px-4 md:px-16",
                                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                                    )}
                                >
                                    <div className={cn(
                                        "flex flex-col gap-4 relative",
                                        index % 2 === 0 ? "md:items-end text-right" : "md:items-start text-left"
                                    )}>
                                        <span className={cn(
                                            "text-8xl md:text-[14rem] font-display font-bold text-white/[0.08] leading-none absolute top-1/2 -translate-y-1/2 select-none pointer-events-none -z-10 transition-all duration-500",
                                            index % 2 === 0 ? "-right-[60%] md:-right-[80%]" : "-left-[60%] md:-left-[80%]"
                                        )}>
                                            {step.number}
                                        </span>

                                        <div className="flex items-center gap-4 text-brand-blue mb-2">
                                            <div className={cn(
                                                "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0",
                                                index % 2 === 0 ? "md:order-2" : "md:order-1"
                                            )}>
                                                {step.icon}
                                            </div>
                                            <h3 className={cn("text-2xl md:text-3xl font-bold text-white", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                                                {step.title}
                                            </h3>
                                        </div>

                                        <p className="text-lg text-gray-400 leading-relaxed relative z-10">
                                            {step.description}
                                        </p>

                                        <ul className={cn(
                                            "mt-4 space-y-2",
                                            index % 2 === 0 ? "md:items-end" : "md:items-start"
                                        )}>
                                            {step.bullets.map((bullet, i) => (
                                                <li key={i} className={cn(
                                                    "flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit",
                                                    index % 2 === 0 ? "md:flex-row-reverse md:ml-auto" : ""
                                                )}>
                                                    <CheckCircle2 size={14} className="text-brand-blue" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Empty Side for Spacing */}
                                <div className="w-full md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
