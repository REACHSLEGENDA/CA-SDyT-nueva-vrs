import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'new' | 'popular' | 'default' | 'outline';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider',
                variant === 'new' && 'bg-ca-cyan/10 border border-ca-cyan/30 text-ca-cyan badge-glow-cyan',
                variant === 'popular' && 'bg-ca-purple/10 border border-ca-purple/30 text-ca-purple',
                variant === 'default' && 'bg-ca-surface border border-ca-border text-ca-muted',
                variant === 'outline' && 'border border-ca-border text-ca-muted',
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
