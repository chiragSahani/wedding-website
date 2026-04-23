"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${mouseX - 200}px, ${mouseY - 200}px, 0)`;
      }
    };

    let rafId = 0;
    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX - 12}px, ${trailY - 12}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[400px] w-[400px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.08) 25%, transparent 60%)",
          filter: "blur(30px)",
        }}
      />
      <div
        ref={trailRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] h-6 w-6 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(245,231,179,0.9) 0%, rgba(212,175,55,0.5) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
