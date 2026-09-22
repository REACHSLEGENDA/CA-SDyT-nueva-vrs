import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Nova, la mantarraya anfitriona de CA Explica y del catálogo. */
export function NovaBubble({ text, label = 'Nova', className }: { text: string; label?: string; className?: string }) {
    return (
        <figure className={cn('flex items-start gap-3', className)}>
            <div className="relative w-12 h-12 shrink-0 rounded-full bg-ca-surface2 border border-ca-cyan/25 shadow-[0_0_18px_rgba(0,207,255,0.18)]">
                <Image src="/assets/nova-avatar.webp" alt="" fill sizes="48px" className="object-contain p-0.5" />
            </div>
            <blockquote className="relative rounded-2xl rounded-tl-sm bg-ca-cyan/[0.06] border border-ca-cyan/15 px-4 py-3">
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.2em] text-ca-cyan mb-1">{label}</figcaption>
                <p className="text-sm leading-relaxed text-ca-text/90 italic">“{text}”</p>
            </blockquote>
        </figure>
    );
}
