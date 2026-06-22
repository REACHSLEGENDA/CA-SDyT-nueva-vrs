import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, className }: SectionHeaderProps) {
    return (
        <div className={cn('mb-14', centered && 'text-center', className)}>
            {eyebrow && (
                <span className="inline-block font-mono text-xs text-ca-cyan border border-ca-cyan/30 bg-ca-cyan/5 px-3 py-1.5 rounded-full uppercase tracking-widest mb-5">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display font-black text-3xl md:text-5xl text-ca-text leading-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-ca-muted text-lg leading-relaxed max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
