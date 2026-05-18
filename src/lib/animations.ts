export const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export const fadeIn = {
    hidden:  { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const staggerContainer = {
    hidden:  {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

export const slideFromRight = {
    hidden: { opacity: 0, x: 96 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: "easeOut" as const },
    },
};

