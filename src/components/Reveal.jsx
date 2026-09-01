import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Scroll-triggered fade / rise. Animates once when it enters the viewport. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  whileHover,
  className = "",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={whileHover}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
