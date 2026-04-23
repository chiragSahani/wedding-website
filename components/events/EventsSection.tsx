"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Shirt, Music, Crown } from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { EVENTS } from "@/lib/utils";

type EventItem = (typeof EVENTS)[number];

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(13,91,58,0.15), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(92,10,28,0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">The Celebrations</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            Two Nights,{" "}
            <span className="gold-text-shimmer italic">One Royal Saga</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            A symphony of music, fire, and family — where tradition meets
            timeless elegance.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="flower" />
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {EVENTS.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const isEmerald = event.accent === "emerald";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl"
    >
      {/* Glow border */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: isEmerald
            ? "linear-gradient(135deg, rgba(26,136,89,0.4), rgba(212,175,55,0.4), rgba(26,136,89,0.4))"
            : "linear-gradient(135deg, rgba(139,30,63,0.4), rgba(212,175,55,0.4), rgba(139,30,63,0.4))",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div
        className="relative overflow-hidden rounded-3xl glass-card-dark p-8 transition-transform duration-700 md:p-10"
        style={{
          background: isEmerald
            ? "linear-gradient(160deg, rgba(13,91,58,0.3) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)"
            : "linear-gradient(160deg, rgba(92,10,28,0.45) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)",
        }}
      >
        {/* Ambient glow */}
        <motion.div
          aria-hidden
          className="absolute -top-32 -right-16 h-64 w-64 rounded-full"
          style={{
            background: isEmerald
              ? "radial-gradient(circle, rgba(26,136,89,0.4), transparent 70%)"
              : "radial-gradient(circle, rgba(139,30,63,0.5), transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pattern */}
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute -bottom-16 -left-16 h-60 w-60 text-gold-foil/10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {[40, 60, 80, 100, 120, 140, 160].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 160 * Math.cos((i * Math.PI) / 6)}
              y2={100 + 160 * Math.sin((i * Math.PI) / 6)}
            />
          ))}
        </svg>

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  isEmerald
                    ? "bg-emerald-royal/30 text-emerald-glow"
                    : "bg-burgundy/40 text-rose-gold"
                }`}
              >
                {isEmerald ? <Music size={20} /> : <Crown size={20} />}
              </span>
              <span className="font-serif text-xs uppercase tracking-[0.4em] text-champagne-200/70">
                {event.tagline}
              </span>
            </div>
            <span className="font-script text-xl text-rose-gold">
              0{index + 1}
            </span>
          </div>

          <h3 className="mt-7 font-display text-4xl font-light leading-tight md:text-5xl">
            <span className="gold-text-shimmer">{event.name}</span>
          </h3>

          <div className="mt-6 grid gap-4 font-serif text-sm text-ivory/85">
            <InfoRow icon={<Calendar size={16} />} label="Date" value={event.date} />
            <InfoRow icon={<Clock size={16} />} label="Time" value={event.time} />
            <InfoRow
              icon={<MapPin size={16} />}
              label="Venue"
              value={`${event.venue} · ${event.location}`}
            />
            <InfoRow icon={<Shirt size={16} />} label="Dress Code" value={event.dressCode} />
          </div>

          <div className="mt-8 divider-ornate" />

          <div className="mt-6">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70">
              Highlights
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-gold-foil/25 bg-matte-soft/50 px-3 py-1.5 font-serif text-xs tracking-wide text-ivory/80 transition hover:border-gold-foil/60 hover:text-gold-shimmer"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Hover overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-gold-foil/10 via-transparent to-transparent transition-transform duration-700 group-hover:translate-y-0"
          />
        </div>
      </div>
    </motion.article>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold-foil/70">{icon}</span>
      <div>
        <p className="font-serif text-[0.68rem] uppercase tracking-[0.3em] text-champagne-200/60">
          {label}
        </p>
        <p className="mt-0.5 text-base text-ivory/90">{value}</p>
      </div>
    </div>
  );
}
