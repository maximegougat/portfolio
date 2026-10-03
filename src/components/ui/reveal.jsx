import { motion, useReducedMotion } from "motion/react";

// Fait apparaître son contenu en douceur lorsqu'il entre dans l'écran
export const Reveal = ({ children, delay = 0, y = 24, className, ...props }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
