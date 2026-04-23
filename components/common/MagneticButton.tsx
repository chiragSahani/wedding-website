"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type NativeButtonProps = Omit<
  HTMLMotionProps<"button">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;

interface MagneticButtonProps extends NativeButtonProps {
  children: ReactNode;
  strength?: number;
  variant?: "gold" | "ghost";
}

export function MagneticButton({
  children,
  strength = 0.35,
  variant = "gold",
  className,
  ...rest
}: MagneticButtonProps) {
  const localRef = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 250, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = localRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * strength);
    my.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      ref={localRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn(variant === "gold" ? "btn-gold" : "btn-ghost", className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
