"use client";

import { motion } from "framer-motion";
import { Phone, Heart, Sparkles } from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { BrandHashtag, WeddingLogo } from "@/components/common/WeddingBrand";

/* ---------- Decorative SVGs ---------- */

function MandalaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.4"
      className={className}
      aria-hidden
    >
      {/* Concentric circles */}
      {[28, 42, 56, 72, 88].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} opacity={0.3} />
      ))}
      {/* Petal arcs */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <ellipse cx="100" cy="52" rx="6" ry="18" opacity={0.25} />
            <line x1="100" y1="12" x2="100" y2="30" opacity={0.2} strokeWidth="0.3" />
          </g>
        );
      })}
      {/* Inner star */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <line
            key={`s-${i}`}
            x1="100"
            y1="72"
            x2="100"
            y2="78"
            transform={`rotate(${angle} 100 100)`}
            opacity={0.35}
            strokeWidth="0.5"
          />
        );
      })}
      <circle cx="100" cy="100" r="4" fill="currentColor" opacity={0.15} stroke="none" />
    </svg>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      className={className}
      aria-hidden
    >
      <path d="M0 0 Q40 5 75 75" opacity={0.3} />
      <path d="M0 0 Q30 10 65 65" opacity={0.2} />
      <circle cx="70" cy="70" r="3" opacity={0.3} />
      <circle cx="60" cy="60" r="1.5" opacity={0.2} />
      <path d="M0 15 Q20 18 45 45" opacity={0.15} />
      <circle cx="38" cy="38" r="1" fill="currentColor" opacity={0.2} stroke="none" />
    </svg>
  );
}


/* ---------- Main Footer ---------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-28 md:py-36">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,30,63,0.4), transparent 55%), linear-gradient(180deg, #0A0807, #3F0712 90%, #1A0409)",
        }}
      />

      {/* Decorative peacock glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 20% 100%, rgba(13,91,58,0.5), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(139,30,63,0.5), transparent 60%)",
        }}
      />

      {/* Large mandala background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <MandalaSVG className="h-[600px] w-[600px] text-gold-foil/15 md:h-[800px] md:w-[800px]" />
      </div>

      {/* Corner ornaments */}
      <CornerOrnament className="pointer-events-none absolute top-6 left-6 h-20 w-20 text-gold-foil/25 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute top-6 right-6 h-20 w-20 -scale-x-100 text-gold-foil/25 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 -scale-y-100 text-gold-foil/25 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 -scale-x-100 -scale-y-100 text-gold-foil/25 md:h-28 md:w-28" />

      {/* Decorative top border line */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <WeddingLogo size="lg" animated={false} />
          </div>

          {/* Sparkle accent */}
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={14} className="text-gold-foil/50" />
            <p className="font-serif text-[0.65rem] uppercase tracking-[0.5em] text-champagne-200/70">
              With Love
            </p>
            <Sparkles size={14} className="text-gold-foil/50" />
          </div>

          {/* Names */}
          <h3 className="mt-5 font-script text-5xl text-ivory md:text-6xl lg:text-7xl">
            Anukriti <span className="text-gold-shimmer">&</span> Anmol
          </h3>

          {/* Hashtag */}
          <div className="mt-4">
            <BrandHashtag />
          </div>

          <p className="mt-3 font-serif text-base italic text-ivory/60 md:text-lg">
            & Our Beloved Families
          </p>

          {/* Ornate divider */}
          <div className="mx-auto mt-8 max-w-sm">
            <OrnateDivider glyph="flower" />
          </div>

          {/* Message */}
          <p className="mx-auto mt-8 max-w-lg font-serif text-lg italic leading-relaxed text-ivory/80 md:text-xl">
            We await your graceful presence — to laugh with us, to dance with
            us, and to bless the beginning of our forever.
          </p>

          {/* Decorative divider dots */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-foil/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold-foil/50" />
            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-gold-foil/50 to-gold-foil/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold-foil/50" />
            <span className="h-1 w-1 rounded-full bg-gold-foil/40" />
          </div>

          {/* Contact — single clean card */}
          <div className="mx-auto mt-10 max-w-xs">
            <a
              href="tel:+919897930968"
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-2xl border border-gold-foil/25 bg-matte-soft/50 px-8 py-5 backdrop-blur-sm transition-all duration-500 hover:border-gold-foil/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-foil/30 bg-gold-foil/10 transition group-hover:border-gold-foil/60 group-hover:bg-gold-foil/20">
                <Phone size={16} className="text-gold-foil" />
              </span>
              <div className="text-left">
                <p className="font-serif text-[0.6rem] uppercase tracking-[0.3em] text-champagne-200/60">
                  Reach Out
                </p>
                <p className="mt-0.5 font-serif text-sm tracking-wide text-ivory/90">
                  +91 98979 30968
                </p>
              </div>
              {/* Hover sweep */}
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-gold-foil/8 to-transparent transition-transform duration-700 group-hover:translate-y-0" />
            </a>
          </div>

          {/* Date badge */}
          <div className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full border border-gold-foil/20 bg-matte-soft/30 px-6 py-3 backdrop-blur-sm">
            <Heart size={12} className="text-burgundy-light" fill="currentColor" />
            <span className="font-serif text-xs uppercase tracking-[0.35em] text-champagne-200/60">
              5 · May · 2026
            </span>
            <Heart size={12} className="text-burgundy-light" fill="currentColor" />
          </div>

          {/* Bottom ornate divider */}
          <div className="mx-auto mt-10 max-w-xs">
            <OrnateDivider glyph="diamond" />
          </div>

          {/* Tagline */}
          <p className="mt-8 font-serif text-[0.6rem] uppercase tracking-[0.4em] text-champagne-200/35">
            An invitation crafted with devotion
          </p>

          {/* Tiny decorative mandala at bottom */}
          <div className="mt-6 flex justify-center">
            <MandalaSVG className="h-16 w-16 text-gold-foil/10" />
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border line */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/30 to-transparent" />
      </div>
    </footer>
  );
}
