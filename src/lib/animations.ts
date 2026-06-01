import { type Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay },
    }),
  };

export const fadeIn: Variants = {
    hidden:  { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const staggerContainer: Variants = {
    hidden:  {},
    visible: {
        transition: { staggerChildren: 0.15 }
    }
};

export const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 96 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: "easeOut" as const },
    },
};

