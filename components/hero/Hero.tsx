"use client";

import { motion } from "framer-motion";
import { Countdown } from "./Countdown";
import { HeroParticles } from "./HeroParticles";
import { FloralRing } from "./FloralRing";
import { MagneticButton } from "@/components/common/MagneticButton";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { BrandHashtag, WeddingLogo } from "@/components/common/WeddingBrand";
import { ArrowDown, Heart, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, #8B6F1B22 0%, transparent 55%), linear-gradient(180deg, #0A0807 0%, #1A0409 35%, #3F0712 70%, #5C0A1C 100%)",
        }}
      />

      {/* Palace silhouette */}
      <PalaceSilhouette />

      {/* Diyas */}
      <Diyas />

      {/* Gold ribbons */}
      <GoldRibbons />

      {/* Floral ring */}
      <FloralRing />

      {/* Particles */}
      <HeroParticles />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.6) 95%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-24 pb-20 text-center sm:px-6 md:pt-32 md:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-devanagari text-base tracking-wider text-champagne-200 md:text-xl"
        >
          || श्री गणेशाय नमः ||
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <WeddingLogo size="xl" priority />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 font-serif text-xs uppercase tracking-[0.45em] text-champagne-200/80 md:text-sm"
        >
          Together with the Sahani & families
        </motion.p>

        <div className="my-8 flex items-center gap-4 md:gap-8">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-light leading-none sm:text-5xl md:text-7xl lg:text-[6.5rem]"
          >
            <span className="gold-text-shimmer">Anukriti</span>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <Heart
              className="text-burgundy-light drop-shadow-[0_0_20px_rgba(139,30,63,0.7)] md:h-10 md:w-10"
              fill="currentColor"
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 -z-10"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              <Heart
                className="text-burgundy-light md:h-10 md:w-10"
                fill="currentColor"
              />
            </motion.span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl font-light leading-none sm:text-5xl md:text-7xl lg:text-[6.5rem]"
          >
            <span className="gold-text-shimmer">Anmol</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full max-w-md"
        >
          <OrnateDivider glyph="flower" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-5 max-w-xl font-serif text-base italic text-ivory/80 md:text-lg"
        >
          invite you to celebrate their graceful union — a love written in the
          stars, blessed by family, and cherished forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 font-script text-2xl text-rose-gold md:text-3xl"
        >
          5<sup className="font-serif text-sm">th</sup> May 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-5"
        >
          <BrandHashtag />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() =>
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Sparkles size={16} />
            Explore Events
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() =>
              document
                .getElementById("rsvp")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            RSVP Now
          </MagneticButton>

        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mt-14 flex flex-col items-center gap-5"
        >
          <p className="section-eyebrow">A Royal Countdown</p>
          <Countdown />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-champagne-200/60"
      >
        <span className="font-serif text-[0.65rem] uppercase tracking-[0.4em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}

function PalaceSilhouette() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 600"
      preserveAspectRatio="xMidYEnd slice"
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[55%] w-full opacity-80"
    >
      <defs>
        <linearGradient id="mountainGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#2A0810" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#05040a" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="palaceGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#1A0409" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>

      {/* Mountains */}
      <path
        d="M0 400 L200 200 L360 320 L520 160 L700 300 L880 180 L1060 310 L1240 200 L1400 340 L1600 220 L1600 600 L0 600 Z"
        fill="url(#mountainGrad)"
        opacity="0.55"
      />
      <path
        d="M0 460 L180 320 L340 400 L500 290 L680 380 L880 300 L1060 400 L1260 320 L1440 420 L1600 340 L1600 600 L0 600 Z"
        fill="url(#mountainGrad)"
        opacity="0.85"
      />

      {/* Palace */}
      <g transform="translate(700 220)" fill="url(#palaceGrad)">
        <rect x="0" y="160" width="200" height="220" />
        <rect x="20" y="120" width="30" height="40" />
        <rect x="150" y="120" width="30" height="40" />
        <rect x="80" y="80" width="40" height="80" />

        {/* domes */}
        <path d="M85 80 Q 100 30 115 80 Z" />
        <circle cx="100" cy="30" r="4" />
        <rect x="97" y="0" width="6" height="30" />

        <path d="M10 120 Q 35 85 60 120 Z" opacity="0.95" />
        <path d="M140 120 Q 165 85 190 120 Z" opacity="0.95" />

        {/* Archways */}
        <rect x="40" y="220" width="30" height="60" fill="#0A0807" />
        <path
          d="M40 220 Q 55 200 70 220"
          fill="none"
          stroke="#D4AF37"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <rect x="85" y="220" width="30" height="60" fill="#0A0807" />
        <path
          d="M85 220 Q 100 200 115 220"
          fill="none"
          stroke="#D4AF37"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <rect x="130" y="220" width="30" height="60" fill="#0A0807" />
        <path
          d="M130 220 Q 145 200 160 220"
          fill="none"
          stroke="#D4AF37"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      </g>

      {/* Flanking smaller palaces */}
      <g transform="translate(400 300)" fill="url(#palaceGrad)" opacity="0.85">
        <rect x="0" y="60" width="120" height="140" />
        <path d="M30 60 Q 60 10 90 60 Z" />
        <rect x="57" y="0" width="6" height="20" />
      </g>
      <g transform="translate(1080 300)" fill="url(#palaceGrad)" opacity="0.85">
        <rect x="0" y="60" width="120" height="140" />
        <path d="M30 60 Q 60 10 90 60 Z" />
        <rect x="57" y="0" width="6" height="20" />
      </g>
    </svg>
  );
}

function Diyas() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
      {[
        { left: "8%", bottom: "22%", delay: 0 },
        { left: "18%", bottom: "14%", delay: 0.4 },
        { left: "86%", bottom: "20%", delay: 0.2 },
        { left: "92%", bottom: "30%", delay: 0.6 },
        { left: "5%", bottom: "38%", delay: 0.8 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: d.left, bottom: d.bottom }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 6 + i,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #FFD97D 0%, #F5A742 50%, transparent 80%)",
                filter: "blur(1px)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <div
              className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 -translate-y-[90%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,190,90,0.5) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <svg viewBox="0 0 40 20" width="36" height="18">
              <path
                d="M2 4 Q 20 20 38 4 Q 30 14 20 14 Q 10 14 2 4 Z"
                fill="url(#diyaGold)"
              />
              <defs>
                <linearGradient id="diyaGold" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F5E7B3" />
                  <stop offset="100%" stopColor="#8B6F1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function GoldRibbons() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1600 900"
    >
      <defs>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6F1B" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5E7B3" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M-50 200 Q 400 50 800 220 T 1650 180"
        stroke="url(#ribbonGrad)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 3, delay: 0.5 }}
      />
      <motion.path
        d="M-50 350 Q 500 500 900 320 T 1650 420"
        stroke="url(#ribbonGrad)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 3.5, delay: 1 }}
      />
    </svg>
  );
}
