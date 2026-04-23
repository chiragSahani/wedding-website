"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";

export function StickyRSVP() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.05, 0.1, 0.95, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.05, 0.1], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:hidden"
    >
      <a
        href="#rsvp"
        className="flex items-center gap-2 rounded-full bg-gradient-to-br from-champagne-200 via-gold-foil to-gold-dark px-6 py-3 font-serif text-sm uppercase tracking-[0.25em] text-matte shadow-[0_15px_40px_rgba(212,175,55,0.5)]"
      >
        <Heart size={14} fill="currentColor" />
        RSVP
      </a>
    </motion.div>
  );
}
