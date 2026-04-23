"use client";

import type { ReactNode } from "react";

interface GoldFrameProps {
  children: ReactNode;
  className?: string;
}

export function GoldFrame({ children, className }: GoldFrameProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 text-gold-foil/80"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M2 16 V4 H14"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M6 10 Q 10 10 12 6"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="4" cy="4" r="1" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-2 -right-2 h-12 w-12 text-gold-foil/80"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M46 16 V4 H34"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M42 10 Q 38 10 36 6"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="44" cy="4" r="1" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -left-2 h-12 w-12 text-gold-foil/80"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M2 32 V44 H14"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M6 38 Q 10 38 12 42"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="4" cy="44" r="1" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 text-gold-foil/80"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M46 32 V44 H34"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M42 38 Q 38 38 36 42"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="44" cy="44" r="1" fill="currentColor" />
      </svg>
      {children}
    </div>
  );
}
