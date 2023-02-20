import { motion } from 'framer-motion';
import React from 'react';
import { buttonVariants } from '../animations/buttonVariants';

type AnonButtonProps = {
    className?: string;
    text: string;
    isEnabled?: boolean;
    onClick: () => void;
};
export const AnonButton = ({
    className = '',
    text,
    isEnabled = true,
    onClick
}: AnonButtonProps) => {
    return (
        <motion.div
            className={`${className} anon-button`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isEnabled) onClick();
            }}
            variants={buttonVariants}
            initial={false}
            animate={isEnabled ? 'enabled' : 'disabled'}
            whileHover={isEnabled ? 'hover' : ''}
            whileTap={isEnabled ? 'clicked' : ''}
        >
            {text}
        </motion.div>
    );
};
