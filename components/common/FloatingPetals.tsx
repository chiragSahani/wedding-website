"use client";

import { useMemo } from "react";

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  hue: string;
  drift: number;
}

const PETAL_COLORS = [
  "#C89B7B",
  "#E8C4A8",
  "#D4AF37",
  "#F4D8C3",
  "#8B1E3F",
  "#F5E7B3",
];

function PetalSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 2px 6px ${color}55)` }}
    >
      <path
        d="M12 2C8 6 6 10 6 14c0 4 2.7 7 6 7s6-3 6-7c0-4-2-8-6-12z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M12 4c-2 3-3 6-3 9 0 2 1 4 3 4s3-2 3-4c0-3-1-6-3-9z"
        fill="#fff"
        opacity="0.18"
      />
    </svg>
  );
}

export function FloatingPetals({ count = 14, className }: FloatingPetalsProps) {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 14 + Math.random() * 14,
      delay: Math.random() * -20,
      size: 14 + Math.random() * 22,
      hue: PETAL_COLORS[i % PETAL_COLORS.length],
      drift: Math.random() * 200 - 100,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[5] overflow-hidden ${className ?? ""}`}
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute -top-10 will-change-transform"
          style={{
            left: `${p.left}%`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
            // @ts-expect-error CSS custom property
            "--drift": `${p.drift}px`,
          }}
        >
          <span
            className="block"
            style={{
              animation: `petalSpin ${p.duration / 2}s ease-in-out ${p.delay}s infinite`,
            }}
          >
            <PetalSVG color={p.hue} size={p.size} />
          </span>
        </span>
      ))}
      <style jsx>{`
        @keyframes petalSpin {
          0%,
          100% {
            transform: rotate(0deg) translateX(0);
          }
          25% {
            transform: rotate(90deg) translateX(30px);
          }
          50% {
            transform: rotate(180deg) translateX(-20px);
          }
          75% {
            transform: rotate(270deg) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}
