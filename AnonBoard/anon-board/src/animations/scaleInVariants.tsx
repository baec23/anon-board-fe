export const scaleInOutVariants = {
    hidden: {
        padding: 1,
        height: 0
    },
    visible: {
        overflow: 'hidden',
        padding: 1,
        height: 'auto',
        transition: {
            duration: 0.25
        }
    },
    exit: {
        padding: 1,
        height: 0,
        transition: {
            duration: 0.15
        }
    }
};
