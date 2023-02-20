import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { scaleInOutVariants } from '../animations/scaleInVariants';

export type AnimatedVisibilityProps = {
    className?: string;
    children?: React.ReactNode;
    isVisible: boolean;
    variants?: {};
};
export const AnimatedVisibility = ({
    className,
    children,
    isVisible,
    variants = scaleInOutVariants
}: AnimatedVisibilityProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`${className}`}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
