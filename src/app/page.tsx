'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ChevronRight, Layout, Smartphone, Bot, Cpu, Layers, ShieldCheck, Zap, Globe, Code2, Server, Database, Plug } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ProcessSection } from '@/components/features/ProcessSection';
import { FAQSection } from '@/components/features/FAQSection';
import { CTASection } from '@/components/features/CTASection';


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden min-h-screen flex items-center bg-transparent">

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darker overlay for better text readability over video */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-20" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/hero-video-light.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Global background particles handled in Layout, but we have video now so it covers them. That's fine. */}

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-brand-blue uppercase tracking-wider mx-auto lg:mx-0 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Innovación Digital
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg">
              Soluciones digitales y <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">tecnológicas</span> para tu negocio
            </h1>

            <p className="text-xl text-gray-200 max-w-xl leading-relaxed mx-auto lg:mx-0 drop-shadow-md">
              Desarrollo web, aplicaciones móviles, automatización y sistemas a medida. Elevamos tu marca con tecnología de vanguardia y soporte real.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {['Web', 'Apps', 'Integraciones', 'Automatización', 'UI/UX', 'Sistemas'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-md bg-white/10 text-gray-100 text-sm border border-white/10 hover:border-brand-blue/50 transition-colors cursor-default backdrop-blur-sm">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/contacto">
                <Button size="lg" className="group bg-brand-blue hover:bg-brand-blue/90 border-none">
                  Cotizar proyecto <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" size="lg" className="bg-white/5 border-white/20 hover:bg-white/10 text-white">Ver servicios</Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual (CSS Dashboard Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4 p-6 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-brand-blue/10 hover:shadow-brand-blue/20">
              <div className="col-span-2 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 p-6 rounded-2xl border border-white/10 h-40 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/40 blur-3xl rounded-full translate-x-10 -translate-y-10" />
                <div className="h-3 w-1/3 bg-white/30 rounded mb-2 z-10" />
                <div className="h-3 w-1/2 bg-white/30 rounded z-10" />
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <Globe className="text-brand-blue" size={24} />
                </div>
                <span className="text-sm font-medium text-gray-200">Web Global</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Smartphone className="text-brand-purple" size={24} />
                </div>
                <span className="text-sm font-medium text-gray-200">Mobile First</span>
              </div>
              <div className="col-span-2 bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Zap size={20} /></div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="text-green-400 font-bold text-lg">+240%</div>
              </div>
            </div>

            {/* Decor elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-blue/30 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-purple/30 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Por qué elegirnos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            No somos solo programadores. Somos socios estratégicos que entienden tu negocio y crean soluciones escalables.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            delay={0.1}
            icon={<Zap size={32} className="text-yellow-400" />}
            title="Rendimiento Extremo"
            desc="Sitios optimizados para cargar en milisegundos. Core Web Vitals en verde garantizado."
          />
          <FeatureCard
            delay={0.2}
            icon={<ShieldCheck size={32} className="text-green-400" />}
            title="Seguridad Blindada"
            desc="Protección contra ataques, SSL incluido y buenas prácticas de seguridad desde el código."
          />
          <FeatureCard
            delay={0.3}
            icon={<Layout size={32} className="text-brand-blue" />}
            title="Diseño Premium"
            desc="Estética 'high-end' que posiciona tu marca por encima de la competencia."
          />
          <FeatureCard
            delay={0.4}
            icon={<Cpu size={32} className="text-brand-purple" />}
            title="Escalabilidad"
            desc="Arquitectura lista para crecer. De 100 a 1 millón de usuarios sin reescribir todo."
          />
          <FeatureCard
            delay={0.5}
            icon={<Bot size={32} className="text-pink-400" />}
            title="Automatización"
            desc="Integramos IA y bots para que tu negocio funcione 24/7 sin intervención humana."
          />
          <FeatureCard
            delay={0.6}
            icon={<Layers size={32} className="text-orange-400" />}
            title="Soporte Real"
            desc="No desaparecemos tras la entrega. Acompañamiento y mantenimiento continuo."
          />
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Tecnologías que usamos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Usamos tecnologías modernas, escalables y seguras, las mismas que utilizan startups y empresas globales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          <TechBadge name="React / Next.js" icon={<Code2 size={20} className="text-blue-400" />} />
          <TechBadge name="Tailwind CSS" icon={<Layout size={20} className="text-cyan-400" />} />
          <TechBadge name="Node.js" icon={<Server size={20} className="text-green-500" />} />
          <TechBadge name="APIs & GraphQL" icon={<Globe size={20} className="text-purple-400" />} />
          <TechBadge name="MySQL" icon={<Database size={20} className="text-blue-500" />} />
          <TechBadge name="Supabase" icon={<Zap size={20} className="text-emerald-400" />} />
          <TechBadge name="Integraciones" icon={<Plug size={20} className="text-yellow-400" />} />
          <TechBadge name="PWA" icon={<Smartphone size={20} className="text-indigo-400" />} />
          <TechBadge name="Seguridad SSL" icon={<ShieldCheck size={20} className="text-green-400" />} />
          <TechBadge name="Kotlin" icon={<Smartphone size={20} className="text-purple-500" />} />
          <TechBadge name="Flutter" icon={<Layout size={20} className="text-blue-400" />} />
        </div>
      </Section>
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </>
  )
}


function FeatureCard({ icon, title, desc, delay = 0 }: { icon: React.ReactNode, title: string, desc: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="hover:bg-white/10 group h-full">
        <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {desc}
        </p>
      </Card>
    </motion.div>
  )
}

function TechBadge({ name, icon }: { name: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300 group cursor-default">
      <div className="text-gray-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{name}</span>
    </div>
  )
}
