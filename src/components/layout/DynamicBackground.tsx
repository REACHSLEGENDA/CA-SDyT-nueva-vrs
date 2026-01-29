'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function DynamicBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-brand-black">

            {/* 1. Floating Particles (Now primary visual) */}

            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <Particle key={i} index={i} />
                ))}
            </div>

            {/* 2. Noise & Grid Overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.02]" />
        </div>
    );
}

function Particle({ index }: { index: number }) {
    const randomX = Math.random() * 100; // %
    const randomY = Math.random() * 100; // %
    const size = Math.random() * 3 + 1; // px
    const duration = Math.random() * 20 + 10; // s
    const delay = Math.random() * 5; // s

    return (
        <motion.div
            initial={{
                x: `${randomX}vw`,
                y: `${randomY}vh`,
                opacity: 0
            }}
            animate={{
                y: [`${randomY}vh`, `${randomY - 20}vh`],
                opacity: [0, 0.5, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
            className="absolute rounded-full bg-white"
            style={{
                width: size,
                height: size,
                boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.5)`
            }}
        />
    )
}
