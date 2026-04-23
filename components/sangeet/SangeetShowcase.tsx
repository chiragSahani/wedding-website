"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { ChevronLeft, ChevronRight, Music2, Disc3, Sparkles } from "lucide-react";

const PERFORMANCES = [
  {
    title: "Bride Squad Entry",
    subtitle: "Glamour in motion",
    hue: "#E8C4A8",
    description:
      "A fierce procession of sisters and best friends setting the stage ablaze with glitter, grace, and grand entrances.",
  },
  {
    title: "Badi Mummy & Papa Dance",
    subtitle: "Blessings in rhythm",
    hue: "#D4AF37",
    description:
      "A heartfelt performance by Badi Mummy and Papa — their love story still dancing strong after all these years. Pure grace, pure emotion.",
  },
  {
    title: "Mummy & Papa Dance",
    subtitle: "Where it all began",
    hue: "#8B1E3F",
    description:
      "The ones who taught us love take the stage — Mummy and Papa dancing together, reminding us that true love never fades.",
  },
  {
    title: "Sister Dance",
    subtitle: "Bonds beyond words",
    hue: "#C89B7B",
    description:
      "Urja, Neha, Nisha & Ishu take over the stage with a performance full of inside jokes, emotional moments, and moves that prove sisters do it best.",
  },
  {
    title: "Brother Dance",
    subtitle: "Brothers unite",
    hue: "#0D5B3A",
    description:
      "Chirag, Mayank & Paras bring the house down — a power-packed performance full of energy, swag, and brotherly love.",
  },
  {
    title: "Family Surprise Dance",
    subtitle: "Tears & laughter",
    hue: "#9B59B6",
    description:
      "Cousins, nieces, aunts and uncles serve a choreography no one saw coming. Hold on to your hearts.",
  },
  {
    title: "The Bride Dance",
    subtitle: "✦ Highlight of the Night ✦",
    hue: "#FF2D78",
    description:
      "The moment everyone has been waiting for — Anukriti takes the stage solo, owning every beat, every spotlight, and every breath in the room. This is her night.",
  },
  {
    title: "Open Dance Floor",
    subtitle: "Until sunrise",
    hue: "#E67E22",
    description:
      "The LED floor opens, the DJ takes over, and every guest becomes a star. The ceiling lights won't know what hit them.",
  },
];

export function SangeetShowcase() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PERFORMANCES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sangeet"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(139,30,63,0.3), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(13,91,58,0.25), transparent 55%), linear-gradient(180deg, #08030a 0%, #1a0620 50%, #0a0807 100%)",
          }}
        />
      </motion.div>

      {/* Spotlights */}
      <Spotlights />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">Sangeet · Special Showcase</span>
          <h2 className="mt-5 font-display text-5xl font-light leading-tight md:text-7xl">
            <span className="gold-text-shimmer italic">Dance.</span>{" "}
            <span className="text-ivory">Celebrate.</span>{" "}
            <span className="gold-text-shimmer italic">Repeat.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/75">
            A night where the beats of the dhol meet glittering jewel tones and
            the dance floor becomes a kingdom of joy.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="star" />
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Stage visual */}
          <div className="relative lg:col-span-3">
            <Stage hue={PERFORMANCES[index].hue} />
          </div>

          {/* Performance info */}
          <div className="lg:col-span-2">
            <div className="relative h-full rounded-2xl glass-card-dark p-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs uppercase tracking-[0.4em] text-champagne-200/70">
                  Now Performing
                </span>
                <span className="font-script text-2xl text-gold-shimmer">
                  {String(index + 1).padStart(2, "0")}/
                  {String(PERFORMANCES.length).padStart(2, "0")}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="mt-8"
                >
                  <p
                    className="font-serif text-xs uppercase tracking-[0.35em]"
                    style={{ color: PERFORMANCES[index].hue }}
                  >
                    {PERFORMANCES[index].subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-light text-ivory md:text-5xl">
                    <span className="gold-text-shimmer">
                      {PERFORMANCES[index].title}
                    </span>
                  </h3>
                  <p className="mt-6 font-serif text-base text-ivory/80 md:text-lg">
                    {PERFORMANCES[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setIndex(
                        (i) => (i - 1 + PERFORMANCES.length) % PERFORMANCES.length,
                      )
                    }
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-foil/40 text-gold-foil transition hover:border-gold-foil hover:bg-gold-foil/10"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setIndex((i) => (i + 1) % PERFORMANCES.length)}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-foil/40 text-gold-foil transition hover:border-gold-foil hover:bg-gold-foil/10"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="flex gap-1.5">
                  {PERFORMANCES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to ${i + 1}`}
                      className={`h-1 rounded-full transition-all ${
                        i === index
                          ? "w-8 bg-gold-foil"
                          : "w-4 bg-gold-foil/20 hover:bg-gold-foil/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({ hue }: { hue: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ornate-border">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.2), transparent 60%), linear-gradient(180deg, #08030a 0%, #1a0620 60%, #0a0410 100%)",
        }}
      />

      {/* Moving lights */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute top-0 h-[140%] w-32 origin-top"
          style={{
            left: `${20 + i * 15}%`,
            background: `linear-gradient(180deg, ${hue}30, transparent 70%)`,
            filter: "blur(20px)",
          }}
          animate={{
            rotate: [-15, 15, -15],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Spotlight beam */}
      <motion.div
        aria-hidden
        className="absolute top-0 left-1/2 h-full w-[60%] -translate-x-1/2 origin-top"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, transparent 80%, ${hue}50 90%, ${hue}20 95%, transparent 100%)`,
          filter: "blur(8px)",
        }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stage floor */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${hue}15 30%, ${hue}40 100%)`,
          boxShadow: `inset 0 30px 60px ${hue}30`,
        }}
      />

      {/* Equalizer */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1.5 px-10 pb-12">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-t"
            style={{
              background: `linear-gradient(180deg, ${hue}, #D4AF37 70%, #F5E7B3)`,
              boxShadow: `0 0 10px ${hue}`,
            }}
            animate={{
              height: [
                `${10 + Math.random() * 20}%`,
                `${30 + Math.random() * 60}%`,
                `${10 + Math.random() * 20}%`,
              ],
            }}
            transition={{
              duration: 0.6 + Math.random() * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.03,
            }}
          />
        ))}
      </div>

      {/* Confetti bursts */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={`c-${i}`}
          aria-hidden
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-5%",
            background:
              i % 3 === 0 ? "#F5E7B3" : i % 3 === 1 ? hue : "#D4AF37",
          }}
          animate={{
            y: ["0vh", "80vh"],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* DJ booth silhouette */}
      <div
        aria-hidden
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-6 opacity-85"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border-2"
          style={{ borderColor: hue }}
        >
          <Disc3 size={28} style={{ color: hue }} />
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <Music2 size={24} className="text-gold-foil" />
          <Sparkles size={16} className="text-gold-shimmer" />
        </div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border-2"
          style={{ borderColor: hue }}
        >
          <Disc3 size={28} style={{ color: hue }} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

function Spotlights() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-0 h-[130%] w-[30vmin] origin-top"
          style={{
            background:
              i % 2 === 0
                ? "linear-gradient(180deg, rgba(139,30,63,0.25), transparent 70%)"
                : "linear-gradient(180deg, rgba(13,91,58,0.2), transparent 70%)",
            transform: `translateX(-50%) rotate(${(i - 1) * 15}deg)`,
            filter: "blur(20px)",
          }}
          animate={{ rotate: [(i - 1) * 15 - 10, (i - 1) * 15 + 10, (i - 1) * 15 - 10] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
