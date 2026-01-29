import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-white/[0.03] border border-white/[0.05] backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden group",
                    hover && "transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                {/* Gradient Blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-brand-blue/10" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-brand-purple/10" />

                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
Card.displayName = "Card";

export { Card };
