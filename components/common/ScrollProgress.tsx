"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, transparent, #F5E7B3 20%, #D4AF37 50%, #F5E7B3 80%, transparent)",
        boxShadow: "0 0 10px rgba(212,175,55,0.6)",
      }}
    />
  );
}
