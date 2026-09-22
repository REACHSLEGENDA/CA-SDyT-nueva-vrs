import Image from 'next/image';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { categories } from '@/lib/catalog/categories';
import { guidesFor } from '@/lib/catalog/guides';
import { UI } from '@/lib/catalog/ui';
import type { CatalogLocale } from '@/lib/catalog/types';

/**
 * Índice de CA Explica, agrupado por las mismas categorías del catálogo de
 * servicios para que guías y fichas se lean como un solo sistema.
 */
export function GuidesIndex({ locale }: { locale: CatalogLocale }) {
    const ui = UI[locale];
    const entries = guidesFor(locale);
    const groups = categories
        .map((category) => ({ category, items: entries.filter((entry) => entry.guide.category === category.id) }))
        .filter((group) => group.items.length > 0);

    return (
        <div className="pb-24">
            <header className="relative overflow-hidden border-b border-ca-border/60">
                <div className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-ca-cyan/10 blur-[120px]" />
                <div className="pointer-events-none absolute -bottom-32 right-10 h-[360px] w-[360px] rounded-full bg-ca-purple/15 blur-[120px]" />
                <div className="container relative mx-auto grid items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
                    <div>
                        <span className="inline-block rounded-full border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ca-cyan">
                            {ui.guides}
                        </span>
                        <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] text-ca-text md:text-6xl">
                            {ui.guidesTagline}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ca-muted">{ui.guidesIntro}</p>

                        {/* Categorías: saltos a cada grupo */}
                        <nav aria-label={ui.guidesByTopic} className="mt-8 flex flex-wrap gap-2">
                            {groups.map(({ category, items }) => (
                                <a
                                    key={category.id}
                                    href={`#tema-${category.id}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-ca-border bg-ca-surface/60 px-3.5 py-1.5 text-xs font-medium text-ca-muted transition-colors hover:border-ca-cyan/40 hover:text-ca-cyan"
                                >
                                    {category.name[locale]}
                                    <span className="rounded-full bg-white/5 px-1.5 font-mono text-[10px] text-ca-text/70">{items.length}</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="relative mx-auto h-56 w-full max-w-[420px] md:h-72">
                        <div className="absolute inset-10 rounded-full bg-ca-cyan/20 blur-[70px]" aria-hidden />
                        <Image
                            src="/assets/cta-manta.webp"
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 1024px) 90vw, 420px"
                            className="object-contain drop-shadow-[0_12px_30px_rgba(0,207,255,0.35)] animate-float"
                        />
                    </div>
                </div>
            </header>

            <div className="container mx-auto space-y-16 px-4 pt-14 sm:px-6 lg:px-8">
                {groups.map(({ category, items }) => (
                    <section key={category.id} id={`tema-${category.id}`} className="scroll-mt-28">
                        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                            <h2 className="font-display text-2xl font-bold text-ca-text md:text-3xl">{category.name[locale]}</h2>
                            <Link href={category.landing} className="inline-flex items-center gap-1 text-sm text-ca-cyan hover:underline">
                                {ui.seeServices} <ArrowRight size={14} aria-hidden />
                            </Link>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {items.map(({ guide, slug, content: c }) => (
                                <Link
                                    key={guide.id}
                                    href={{ pathname: '/guias/[slug]', params: { slug } }}
                                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-ca-border bg-ca-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ca-cyan/30"
                                >
                                    <span className="w-fit rounded-full border border-ca-purple/30 bg-ca-purple/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#B98CFF]">
                                        {c.badge}
                                    </span>
                                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-ca-text">{c.title}</h3>
                                    <p className="mt-4 flex gap-2 text-sm leading-relaxed text-ca-muted">
                                        <Zap size={15} className="mt-0.5 shrink-0 text-ca-cyan" aria-hidden />
                                        <span className="line-clamp-3">{c.quickAnswer}</span>
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ca-cyan">
                                        {ui.readGuide}
                                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
