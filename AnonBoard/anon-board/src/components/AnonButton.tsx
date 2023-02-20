import { motion } from 'framer-motion';
import React from 'react';

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
    const buttonVariants = {
        disabled: {
            filter: 'grayscale(100%)',
            opacity: 0.5,
            transition: {
                duration: 0.1
            }
        },
        enabled: {
            filter: 'grayscale(0%)',
            opacity: 1,
            transition: {
                duration: 0.1
            }
        },
        clicked: {
            scale: 0.9
        },
        hover: {
            scale: 1.05
        }
    };

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
