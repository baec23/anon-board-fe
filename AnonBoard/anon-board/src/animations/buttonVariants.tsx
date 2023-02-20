export const buttonVariants = {
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
