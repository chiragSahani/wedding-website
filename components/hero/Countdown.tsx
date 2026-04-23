"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_DATE } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft(WEDDING_DATE));
    const id = setInterval(() => setTime(getTimeLeft(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
          className="relative flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-gold-foil/30 bg-matte-soft/60 backdrop-blur-md md:h-28 md:w-28"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 30px rgba(212,175,55,0.08), 0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <span className="absolute inset-0 rounded-xl ornate-border pointer-events-none" />
          <motion.span
            key={u.value}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-display text-2xl font-semibold tabular-nums gold-text md:text-4xl"
          >
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </motion.span>
          <span className="mt-1 font-serif text-[0.6rem] uppercase tracking-[0.25em] text-champagne-200/70 md:text-xs">
            {u.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
