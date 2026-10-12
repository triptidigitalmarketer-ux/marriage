import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 26, className = "", as = "div" }) {
    const reduce = useReducedMotion();
    const Comp = motion[as] || motion.div;
    if (reduce) return <Comp className={className}>{children}</Comp>;
    return (
        <Comp
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Comp>
    );
}
