'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export function Section({ children, className, id, delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            className={cn("py-20 md:py-32 relative container mx-auto px-4 sm:px-6 lg:px-8", className)}
        >
            {children}
        </motion.section>
    );
}
