"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { COUPLE_PHOTOS, type CouplePhoto } from "@/lib/couplePhotos";
import { X } from "lucide-react";

const ITEMS = COUPLE_PHOTOS;
const MARQUEE_DURATION_ROW1 = "40s";
const MARQUEE_DURATION_ROW2 = "45s";

/* Duplicate items enough to fill the marquee seamlessly */
const row1 = [...ITEMS, ...ITEMS];
const row2Shuffled = [...ITEMS.slice(4), ...ITEMS.slice(0, 4)];
const row2 = [...row2Shuffled, ...row2Shuffled];

export function Gallery() {
  const [active, setActive] = useState<CouplePhoto | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Inline keyframe styles for the marquee */}
      <style jsx global>{`
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-row-right {
          animation: marquee-right var(--marquee-duration, 40s) linear infinite;
        }
        .marquee-row-left {
          animation: marquee-left var(--marquee-duration, 45s) linear infinite;
        }
        .marquee-row-right:hover,
        .marquee-row-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">The Archive</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            A Gallery of{" "}
            <span className="italic gold-text-shimmer">Golden Moments</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Frozen frames from a love that keeps unfolding.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="star" />
          </div>
        </div>
      </div>

      <div className="relative mt-14 space-y-6 mask-fade-x overflow-hidden">
        {/* Row 1 — continuous scroll RIGHT */}
        <div className="overflow-hidden">
          <div
            className="marquee-row-right flex gap-6 w-max"
            style={{ "--marquee-duration": MARQUEE_DURATION_ROW1 } as React.CSSProperties}
          >
            {row1.map((item, i) => (
              <GalleryCard
                key={`r1-${i}`}
                item={item}
                onOpen={() => setActive(item)}
              />
            ))}
          </div>
        </div>
        {/* Row 2 — continuous scroll LEFT */}
        <div className="overflow-hidden">
          <div
            className="marquee-row-left flex gap-6 w-max"
            style={{ "--marquee-duration": MARQUEE_DURATION_ROW2 } as React.CSSProperties}
          >
            {row2.map((item, i) => (
              <GalleryCard
                key={`r2-${i}`}
                item={item}
                onOpen={() => setActive(item)}
                variant="alt"
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <Lightbox item={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({
  item,
  onOpen,
  variant,
}: {
  item: CouplePhoto;
  onOpen: () => void;
  variant?: "alt";
}) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative flex-shrink-0"
    >
      <div
        className={`relative aspect-[3/4] overflow-hidden rounded-2xl ornate-border shadow-luxury ${
          variant === "alt" ? "w-60 md:w-72" : "w-56 md:w-64"
        }`}
        style={{ background: item.gradient }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={variant === "alt" ? "(min-width: 768px) 18rem, 15rem" : "(min-width: 768px) 16rem, 14rem"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: item.objectPosition }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-matte/75 via-matte/10 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px)",
          }}
        />

        {/* Pattern overlay */}
        <svg
          viewBox="0 0 100 140"
          className="absolute inset-0 h-full w-full text-gold-foil/20 mix-blend-overlay"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          aria-hidden
        >
          <rect x="5" y="5" width="90" height="130" rx="4" />
          <rect x="10" y="10" width="80" height="120" rx="2" />
          <circle cx="50" cy="50" r="22" />
          <circle cx="50" cy="50" r="18" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="28"
              x2="50"
              y2="24"
              transform={`rotate(${i * 30} 50 50)`}
              strokeWidth="0.6"
            />
          ))}
        </svg>

        {/* Glass overlay */}
        <div
          aria-hidden
          className="absolute inset-0 translate-y-full bg-gradient-to-t from-matte via-matte/45 to-transparent backdrop-blur-[2px] transition-transform duration-700 group-hover:translate-y-0"
        />

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 translate-y-6 px-4 pb-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-serif text-[0.65rem] uppercase tracking-[0.3em] text-gold-shimmer">
            {item.title}
          </p>
          <p className="mt-1 font-script text-xl text-ivory">{item.caption}</p>
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: CouplePhoto;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-matte/90 p-6 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl"
      >
        <div
          className="relative aspect-[3/4] max-h-[86vh] overflow-hidden rounded-3xl ornate-border bg-matte shadow-luxury"
          style={{ background: item.gradient }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 48rem, 90vw"
            className="object-contain"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-matte via-matte/45 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-shimmer">
              {item.title}
            </p>
            <p className="mt-2 font-script text-3xl text-ivory">
              {item.caption}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-foil/60 bg-matte text-gold-foil transition hover:border-gold-foil hover:text-gold-shimmer"
        >
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}
