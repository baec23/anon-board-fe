export const pageVariants = {
    hidden: {
        x: '150%',
        opacity: 0,
        transition: { type: 'tween' }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.1, type: 'tween' }
    },
    exit: {
        x: '-150%',
        opacity: 0,
        transition: { type: 'tween' }
    }
};
