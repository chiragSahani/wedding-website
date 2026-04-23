"use client";

interface OrnateDividerProps {
  className?: string;
  glyph?: "diamond" | "flower" | "star" | "om";
}

export function OrnateDivider({ className, glyph = "diamond" }: OrnateDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 w-full ${className ?? ""}`}
    >
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-foil/60 to-gold-foil/20" />
      <Glyph glyph={glyph} />
      <span className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-foil/60 to-gold-foil/20" />
    </div>
  );
}

function Glyph({ glyph }: { glyph: OrnateDividerProps["glyph"] }) {
  const common = "text-gold-foil/80";
  if (glyph === "flower") {
    return (
      <svg
        viewBox="0 0 40 40"
        width="36"
        height="36"
        className={common}
        fill="currentColor"
        aria-hidden
      >
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="20"
              cy="10"
              rx="3"
              ry="8"
              transform={`rotate(${deg} 20 20)`}
              opacity="0.85"
            />
          ))}
          <circle cx="20" cy="20" r="3.5" fill="#F5E7B3" />
        </g>
      </svg>
    );
  }
  if (glyph === "star") {
    return (
      <svg
        viewBox="0 0 40 40"
        width="30"
        height="30"
        className={common}
        fill="currentColor"
        aria-hidden
      >
        <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 40 20"
      width="60"
      height="28"
      className={common}
      aria-hidden
    >
      <path
        d="M2 10 Q 10 2 20 10 Q 30 18 38 10"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M20 4 L23 10 L20 16 L17 10 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="20" cy="10" r="1.5" fill="#F5E7B3" />
    </svg>
  );
}
