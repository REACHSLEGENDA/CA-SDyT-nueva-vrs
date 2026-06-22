import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    glow?: 'cyan' | 'purple' | 'none';
    hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, glow = 'none', hover = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'relative rounded-2xl overflow-hidden',
                    'bg-ca-surface/70 backdrop-blur-md border border-ca-border',
                    hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                    glow === 'cyan' && hover && 'hover:border-ca-cyan/30 hover:shadow-ca-cyan/10',
                    glow === 'purple' && hover && 'hover:border-ca-purple/30 hover:shadow-ca-purple/10',
                    className
                )}
                {...props}
            >
                {glow === 'cyan' && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-ca-cyan/5 blur-2xl rounded-full pointer-events-none" />
                )}
                {glow === 'purple' && (
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-ca-purple/5 blur-2xl rounded-full pointer-events-none" />
                )}
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
GlassCard.displayName = 'GlassCard';

export { GlassCard };
