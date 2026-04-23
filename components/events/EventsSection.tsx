"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Shirt, Music, Crown } from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { EVENTS } from "@/lib/utils";

type EventItem = (typeof EVENTS)[number];

/* ── Pure-CSS decorative helpers (zero JS overhead) ─────────────────────── */

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.5"
      className={className} aria-hidden>
      <path d="M0 0 Q40 5 75 75" opacity={0.3} />
      <path d="M0 0 Q30 10 65 65" opacity={0.2} />
      <circle cx="70" cy="70" r="3" opacity={0.3} />
      <circle cx="60" cy="60" r="1.5" opacity={0.2} />
      <path d="M0 15 Q20 18 45 45" opacity={0.15} />
    </svg>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */

export function EventsSection() {
  return (
    <section id="events" className="relative overflow-hidden py-28 md:py-36">
      {/* Layered background */}
      <div aria-hidden className="absolute inset-0" style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(13,91,58,0.18), transparent 55%), " +
          "radial-gradient(ellipse at 80% 100%, rgba(92,10,28,0.28), transparent 55%), " +
          "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.06), transparent 60%)",
      }} />

      {/* Corner ornaments — pure SVG, no animation */}
      <CornerOrnament className="pointer-events-none absolute top-6 left-6 h-20 w-20 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute top-6 right-6 h-20 w-20 -scale-x-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 -scale-x-100 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />

      {/* Top / bottom gold border lines */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/35 to-transparent" />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionBrandMark />
          <span className="section-eyebrow">The Celebrations</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            Three Celebrations,{" "}
            <span className="gold-text-shimmer italic">One Royal Saga</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            A tapestry of music, tradition, and family — woven across two days of
            timeless elegance.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="flower" />
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const accent = event.accent;
  const isEmerald = accent === "emerald";
  const isHaldi   = accent === "haldi";

  const borderGradient = isHaldi
    ? "linear-gradient(135deg, rgba(192,120,0,0.55), rgba(240,190,30,0.6), rgba(192,120,0,0.55))"
    : isEmerald
    ? "linear-gradient(135deg, rgba(26,136,89,0.4), rgba(212,175,55,0.4), rgba(26,136,89,0.4))"
    : "linear-gradient(135deg, rgba(139,30,63,0.4), rgba(212,175,55,0.4), rgba(139,30,63,0.4))";

  const cardBg = isHaldi
    ? "linear-gradient(160deg, rgba(140,80,0,0.35) 0%, rgba(10,8,7,0.82) 50%, rgba(10,8,7,0.95) 100%)"
    : isEmerald
    ? "linear-gradient(160deg, rgba(13,91,58,0.3) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)"
    : "linear-gradient(160deg, rgba(92,10,28,0.45) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)";

  // Static glow (no animation) — same look, zero CPU cost
  const glowBg = isHaldi
    ? "radial-gradient(circle at 80% 0%, rgba(210,140,0,0.35), transparent 65%)"
    : isEmerald
    ? "radial-gradient(circle at 80% 0%, rgba(26,136,89,0.3), transparent 65%)"
    : "radial-gradient(circle at 80% 0%, rgba(139,30,63,0.4), transparent 65%)";

  const badgeBg   = isHaldi ? "bg-amber-900/40" : isEmerald ? "bg-emerald-royal/30" : "bg-burgundy/40";
  const badgeText = isHaldi ? "text-amber-300"  : isEmerald ? "text-emerald-glow"   : "text-rose-gold";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl"
    >
      {/* Glow border */}
      <div aria-hidden className="absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: borderGradient, padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor", maskComposite: "exclude",
        }} />

      <div className="relative overflow-hidden rounded-3xl glass-card-dark p-8 md:p-10"
        style={{ background: cardBg }}>
        {/* Static ambient glow — no infinite animation */}
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: glowBg }} />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${badgeBg} ${badgeText}`}>
                {isHaldi ? <span className="text-xl">🌼</span> : isEmerald ? <Music size={20} /> : <Crown size={20} />}
              </span>
              <span className="font-serif text-xs uppercase tracking-[0.4em] text-champagne-200/70">
                {event.tagline}
              </span>
            </div>
            <span className="font-script text-xl text-rose-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-7 font-display text-4xl font-light leading-tight md:text-5xl">
            <span className="gold-text-shimmer">{event.name}</span>
          </h3>

          <div className="mt-6 grid gap-4 font-serif text-sm text-ivory/85">
            <InfoRow icon={<Calendar size={16} />} label="Date"       value={event.date} />
            <InfoRow icon={<Clock size={16} />}    label="Time"       value={event.time} />
            <InfoRow icon={<MapPin size={16} />}   label="Venue"      value={`${event.venue} · ${event.location}`} />
            <InfoRow icon={<Shirt size={16} />}    label="Dress Code" value={event.dressCode} />
          </div>

          <div className="mt-8 divider-ornate" />

          <div className="mt-6">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70">Highlights</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.highlights.map((h) => (
                <span key={h}
                  className="rounded-full border border-gold-foil/25 bg-matte-soft/50 px-3 py-1.5 font-serif text-xs tracking-wide text-ivory/80 transition hover:border-gold-foil/60 hover:text-gold-shimmer">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Hover overlay sweep */}
          <div aria-hidden
            className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-gold-foil/10 via-transparent to-transparent transition-transform duration-700 group-hover:translate-y-0" />
        </div>
      </div>
    </motion.article>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold-foil/70">{icon}</span>
      <div>
        <p className="font-serif text-[0.68rem] uppercase tracking-[0.3em] text-champagne-200/60">{label}</p>
        <p className="mt-0.5 text-base text-ivory/90">{value}</p>
      </div>
    </div>
  );
}
