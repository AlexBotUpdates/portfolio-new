import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn = ({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1] as const,
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
