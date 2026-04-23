"use client";

import { motion } from "framer-motion";

export function FloralRing() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 160, ease: "linear", repeat: Infinity }}
      style={{ willChange: "transform" }}
    >
      <svg
        viewBox="0 0 500 500"
        className="h-[90vmin] w-[90vmin] max-h-[800px] max-w-[800px] opacity-60"
      >
        <defs>
          <radialGradient id="petalGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F5E7B3" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B6F1B" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E7B3" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B6F1B" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <circle
          cx="250"
          cy="250"
          r="220"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.6"
        />
        <circle
          cx="250"
          cy="250"
          r="240"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {Array.from({ length: 24 }).map((_, i) => {
          const deg = (i / 24) * 360;
          return (
            <g key={i} transform={`rotate(${deg} 250 250)`}>
              <g transform="translate(250 30)">
                {[0, 60, 120, 180, 240, 300].map((petal, pi) => (
                  <ellipse
                    key={pi}
                    cx="0"
                    cy="-10"
                    rx="3"
                    ry="10"
                    transform={`rotate(${petal})`}
                    fill="url(#petalGrad)"
                    opacity={i % 2 === 0 ? 0.9 : 0.5}
                  />
                ))}
                <circle cx="0" cy="0" r="3" fill="#F5E7B3" />
              </g>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
