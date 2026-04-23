"use client";

import { motion } from "framer-motion";
import { BRAND_HASHTAG, BRAND_LOGO_ALT, BRAND_LOGO_SRC } from "@/lib/brand";
import { cn } from "@/lib/utils";

const LOGO_SIZES = {
  xs: "h-10 w-10",
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-28 w-28 md:h-32 md:w-32",
  xl: "h-36 w-36 md:h-44 md:w-44",
} as const;

type WeddingLogoSize = keyof typeof LOGO_SIZES;

interface WeddingLogoProps {
  size?: WeddingLogoSize;
  className?: string;
  priority?: boolean;
  animated?: boolean;
}

export function WeddingLogo({
  size = "md",
  className,
  priority,
  animated = true,
}: WeddingLogoProps) {
  const content = (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold-foil/70 bg-burgundy-deep shadow-[0_0_34px_rgba(212,175,55,0.32),inset_0_0_24px_rgba(212,175,55,0.14)]",
        LOGO_SIZES[size],
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-1 rounded-full border border-champagne-200/25"
      />
      <img
        src={BRAND_LOGO_SRC}
        alt={BRAND_LOGO_ALT}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.24),transparent_34%),linear-gradient(145deg,transparent_40%,rgba(212,175,55,0.18)_100%)]"
      />
    </span>
  );

  if (!animated) return content;

  return (
    <motion.span
      className="inline-flex"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {content}
    </motion.span>
  );
}

interface BrandHashtagProps {
  className?: string;
  compact?: boolean;
}

export function BrandHashtag({ className, compact = false }: BrandHashtagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-gold-foil/35 bg-matte-soft/50 font-serif text-gold-shimmer shadow-[0_0_24px_rgba(212,175,55,0.12)] backdrop-blur-md",
        compact
          ? "px-3 py-1 text-[0.62rem] tracking-[0.22em]"
          : "px-4 py-1.5 text-[0.68rem] tracking-[0.3em] md:px-5 md:text-xs",
        className,
      )}
    >
      {BRAND_HASHTAG}
    </span>
  );
}

interface SectionBrandMarkProps {
  className?: string;
}

export function SectionBrandMark({ className }: SectionBrandMarkProps) {
  return (
    <div className={cn("mb-5 flex justify-center", className)}>
      <div className="inline-flex items-center gap-3 rounded-full border border-gold-foil/15 bg-matte/35 px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md">
        <WeddingLogo size="xs" animated={false} />
        <BrandHashtag compact />
      </div>
    </div>
  );
}
