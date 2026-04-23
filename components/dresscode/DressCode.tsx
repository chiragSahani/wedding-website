"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";

interface DressCodePalette {
  id: string;
  event: string;
  title: string;
  description: string;
  colors: { hex: string; name: string }[];
  keywords: string[];
}

const PALETTES: DressCodePalette[] = [
  {
    id: "sangeet-dress",
    event: "Sangeet Night · Haldwani",
    title: "Indo-Western Glam",
    description:
      "Jewel tones, playful silhouettes, sequins and shimmer. Think emerald, sapphire, rose gold and champagne — designed to catch every beam of light.",
    colors: [
      { hex: "#0D5B3A", name: "Emerald" },
      { hex: "#5C0A1C", name: "Wine" },
      { hex: "#C89B7B", name: "Rose Gold" },
      { hex: "#D4AF37", name: "Champagne" },
      { hex: "#1E3A5F", name: "Sapphire" },
    ],
    keywords: ["Sequin Sarees", "Embellished Lehengas", "Tuxedos", "Bandhgalas", "Statement Jewels"],
  },
  {
    id: "barat-dress",
    event: "Barat Ceremony · Gadarpur",
    title: "Regal Royal Ethnic",
    description:
      "Traditional silhouettes, heritage-worthy embroidery, velvet, brocade and zardozi. Maroon, ivory and deep gold — rooted in regal heritage, crafted for kings and queens.",
    colors: [
      { hex: "#5C0A1C", name: "Burgundy" },
      { hex: "#8B1E3F", name: "Wine Rose" },
      { hex: "#FBF7F0", name: "Ivory" },
      { hex: "#D4AF37", name: "Royal Gold" },
      { hex: "#3F0712", name: "Deep Maroon" },
    ],
    keywords: ["Sherwani", "Lehenga", "Saree", "Velvet Dupattas", "Heirloom Jewels", "Pagdi"],
  },
];

export function DressCode() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="dresscode"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(200,155,123,0.15), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(13,91,58,0.1), transparent 55%)",
        }}
      />
      <motion.div
        style={{ y: parallax }}
        className="relative mx-auto max-w-7xl px-6"
      >
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">Attire · A Gentle Note</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            Dress To{" "}
            <span className="italic gold-text-shimmer">Shimmer</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Dust off your finest — and let tradition meet couture.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="flower" />
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {PALETTES.map((p, i) => (
            <PaletteCard key={p.id} palette={p} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PaletteCard({
  palette,
  index,
}: {
  palette: DressCodePalette;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-3xl ornate-border"
    >
      <div
        className="relative rounded-3xl p-8 md:p-10"
        style={{
          background:
            "linear-gradient(160deg, rgba(28,25,22,0.9), rgba(10,8,7,0.95))",
        }}
      >
        {/* Mood gradient header */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
          style={{
            background: `linear-gradient(90deg, ${palette.colors
              .map((c) => c.hex)
              .join(", ")})`,
            filter: "blur(40px)",
          }}
        />

        <p className="relative font-serif text-xs uppercase tracking-[0.4em] text-champagne-200/70">
          {palette.event}
        </p>
        <h3 className="relative mt-3 font-display text-4xl font-light md:text-5xl">
          <span className="gold-text-shimmer italic">{palette.title}</span>
        </h3>
        <p className="relative mt-5 font-serif text-base text-ivory/80 md:text-lg">
          {palette.description}
        </p>

        {/* Color swatches */}
        <div className="relative mt-8">
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/60">
            Palette
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {palette.colors.map((c) => (
              <motion.div
                key={c.hex}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className="relative h-14 w-14 rounded-full border border-gold-foil/30 shadow-luxury"
                  style={{
                    background: c.hex,
                    boxShadow: `0 0 30px ${c.hex}60, inset 0 2px 0 rgba(255,255,255,0.2)`,
                  }}
                />
                <span className="font-serif text-[0.68rem] uppercase tracking-[0.2em] text-ivory/70">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outfit moodboard */}
        <div className="relative mt-10">
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/60">
            Moodboard
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {palette.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-gold-foil/25 bg-matte-soft/50 px-4 py-1.5 font-serif text-xs tracking-wide text-ivory/80 transition hover:border-gold-foil/70 hover:text-gold-shimmer"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Silhouettes */}
        <div className="relative mt-10 flex items-end justify-center gap-6 opacity-85">
          <OutfitSilhouette kind="feminine" color={palette.colors[0].hex} />
          <OutfitSilhouette kind="masculine" color={palette.colors[3].hex} />
          <OutfitSilhouette kind="feminine" color={palette.colors[2].hex} />
        </div>
      </div>
    </motion.div>
  );
}

function OutfitSilhouette({
  kind,
  color,
}: {
  kind: "feminine" | "masculine";
  color: string;
}) {
  return (
    <svg viewBox="0 0 80 160" className="h-48 w-20">
      <defs>
        <linearGradient id={`g-${color}-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0A0807" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {kind === "feminine" ? (
        <g>
          <circle cx="40" cy="20" r="10" fill={color} opacity="0.85" />
          <path
            d="M30 32 Q 40 28 50 32 L55 60 Q 40 65 25 60 Z"
            fill={`url(#g-${color}-feminine)`}
          />
          <path
            d="M25 60 Q 10 130 20 160 L60 160 Q 70 130 55 60 Z"
            fill={`url(#g-${color}-feminine)`}
          />
          {/* Dupatta detail */}
          <path
            d="M25 60 Q 30 80 40 75 Q 50 80 55 60"
            stroke={color}
            strokeWidth="0.5"
            fill="none"
            opacity="0.4"
          />
        </g>
      ) : (
        <g>
          <circle cx="40" cy="20" r="10" fill={color} opacity="0.85" />
          <path
            d="M28 32 Q 40 28 52 32 L58 140 L22 140 Z"
            fill={`url(#g-${color}-masculine)`}
          />
          <line
            x1="40"
            y1="32"
            x2="40"
            y2="140"
            stroke={color}
            strokeOpacity="0.5"
          />
          {/* Pants */}
          <path d="M22 140 L28 160 L40 160 L42 140 Z" fill="#0A0807" />
          <path d="M40 140 L42 160 L54 160 L58 140 Z" fill="#0A0807" />
        </g>
      )}
    </svg>
  );
}
