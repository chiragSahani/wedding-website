"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { Quote } from "lucide-react";

interface Blessing { from: string; relation: string; message: string; }

const BLESSINGS: Blessing[] = [
  { from: "Papa & Maa", relation: "Parents of the Bride",
    message: "May your days be filled with sunshine and your nights with stars. We raised you to love, and today love has found you. Anukriti, our beti, you carry our blessings wherever you go." },
  { from: "Mummy & Daddy", relation: "Parents of the Groom",
    message: "Anmol, the day you said 'yes' to her was the day our family became whole. May this new chapter be kind, courageous, and full of the kind of love that grows quieter and deeper with time." },
  { from: "Badi Mummy & Papa", relation: "Parents of the bride",
    message: "Humari laadli, aaj tum dulhan ban rahi ho — aankhen bhar aayi hain khushi se. Jab se tum paida hui, yehi din ka intezaar tha. Sada suhagan raho, khush raho, aur ek doosre ka haath kabhi na chhodo. Humari duaayein hamesha tumhare saath hain." },
  { from: "Urja, Neha, Nisha & Ishu", relation: "Sisters",
    message: "From sharing secrets under blankets to standing beside you in lehengas — we've waited for this day just as much as you. Didi, you're not just getting married, you're taking a piece of all of us with you. Love you forever." },
  { from: "Bua & Fufa Ji", relation: "Aunty & Uncle",
    message: "Dil se aashirwaad. May your marriage be a home of gentle kindness, loud laughter, and the kind of quiet love that survives every storm." },
  { from: "Chirag, Mayank & Paras", relation: "Brothers",
    message: "A lifetime of teasing ends today. (Okay, maybe not.) But from this day forward, we share our love, our mischief and every family WhatsApp group with one more — welcome to the chaos." },
];

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.5" className={className} aria-hidden>
      <path d="M0 0 Q40 5 75 75" opacity={0.3} />
      <path d="M0 0 Q30 10 65 65" opacity={0.2} />
      <circle cx="70" cy="70" r="3" opacity={0.3} />
      <path d="M0 15 Q20 18 45 45" opacity={0.15} />
    </svg>
  );
}

export function BlessingsWall() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % BLESSINGS.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="blessings" className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden className="absolute inset-0" style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08), transparent 55%), " +
          "radial-gradient(ellipse at 15% 0%, rgba(92,10,28,0.2), transparent 50%), " +
          "linear-gradient(180deg, #0a0807, #1c1916)",
      }} />

      {/* Static mandala — no JS animation */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-50">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.4"
          className="h-[500px] w-[500px] text-gold-foil/10 md:h-[700px] md:w-[700px]">
          {[28, 42, 56, 72, 88].map((r) => <circle key={r} cx="100" cy="100" r={r} opacity={0.3} />)}
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${(i * 360) / 16} 100 100)`}>
              <ellipse cx="100" cy="52" rx="6" ry="18" opacity={0.2} />
            </g>
          ))}
        </svg>
      </div>

      <CornerOrnament className="pointer-events-none absolute top-6 left-6 h-20 w-20 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute top-6 right-6 h-20 w-20 -scale-x-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 -scale-x-100 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />

      <div aria-hidden className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/35 to-transparent" />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionBrandMark />
          <span className="section-eyebrow">Aashirwaad · Blessings</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            A Wall of <span className="italic gold-text-shimmer">Love Letters</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Whispers, blessings, and the sweetest words from those who love them most.
          </p>
          <div className="mx-auto mt-6 max-w-md"><OrnateDivider glyph="diamond" /></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-16 grid gap-8 md:gap-10 lg:grid-cols-[1fr_1.2fr]"
        >
          {/* Featured blessing */}
          <div className="relative min-h-[280px] md:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full rounded-2xl md:rounded-3xl ornate-border p-6 md:p-10"
                style={{
                  background: "linear-gradient(160deg, rgba(92,10,28,0.3) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)",
                  boxShadow: "0 0 60px rgba(139,30,63,0.12), inset 0 1px 0 rgba(212,175,55,0.1)",
                }}
              >
                <Quote className="hidden md:block absolute top-6 right-6 text-gold-foil/20" size={48} strokeWidth={1} />
                <p className="relative font-serif text-lg leading-relaxed text-ivory/90 md:text-2xl">
                  {BLESSINGS[index].message}
                </p>
                <div className="relative mt-8"><OrnateDivider glyph="star" /></div>
                <div className="relative mt-6">
                  <p className="font-script text-2xl md:text-3xl text-gold-shimmer">— {BLESSINGS[index].from}</p>
                  <p className="mt-2 font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70">{BLESSINGS[index].relation}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Wall grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {BLESSINGS.map((b, i) => (
              <button key={b.from} onClick={() => setIndex(i)}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl border p-4 md:p-5 text-left transition-all duration-500 ${
                  i === index
                    ? "border-gold-foil/70 bg-gold-foil/10 shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                    : "border-gold-foil/20 bg-matte-soft/40 hover:border-gold-foil/50 hover:bg-matte-soft/60"
                }`}>
                <span aria-hidden className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-gold-foil/8 via-transparent to-transparent transition-transform duration-700 group-hover:translate-y-0" />
                <p className="font-serif text-[0.65rem] uppercase tracking-[0.3em] text-champagne-200/60">{b.relation}</p>
                <p className="mt-2 font-script text-2xl text-gold-shimmer">{b.from}</p>
                <p className="mt-3 line-clamp-3 font-serif text-sm italic text-ivory/70">{b.message}</p>
                {i === index && (
                  <motion.span layoutId="blessing-active"
                    className="absolute inset-0 rounded-2xl ring-1 ring-gold-foil/60"
                    style={{ boxShadow: "0 0 30px rgba(212,175,55,0.2)" }} />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
