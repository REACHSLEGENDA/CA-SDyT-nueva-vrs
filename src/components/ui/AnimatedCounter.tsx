'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
    to: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export function AnimatedCounter({
    to,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(to);
    const startTimeRef = useRef<number | null>(null);
    const frameRef = useRef<number>(0);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (!inView) return;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [inView, to, duration]);

    return (
        <span ref={ref} className={`font-display font-black text-3xl text-ca-cyan tabular-nums ${className}`}>
            {prefix}{count}{suffix}
        </span>
    );
}
