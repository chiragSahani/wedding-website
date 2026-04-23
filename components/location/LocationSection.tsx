"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, CloudSun, Plane, Train, Calendar, Clock } from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";

interface LocationCardData {
  id: string; event: string; date: string; time: string;
  venue: string; address: string; city: string; state: string; tagline: string;
  parking: string; weather: string; airport: string; station: string;
  mapQuery: string; gradient: string; accent: string;
}

const LOCATIONS: LocationCardData[] = [
  {
    id: "sangeet-loc", event: "Sangeet Night",
    date: "Monday, 4th May, 2026", time: "6:00 PM",
    venue: "R.K. Banquet & Guest House",
    address: "Purvi Khera, Bypass Road, Gaulapar, Uttarakhand – 263139",
    city: "Gaulapar", state: "Uttarakhand",
    tagline: "An evening of melodies, mehndi and memories",
    parking: "On-site parking available", weather: "Pleasant · 28°C Evening",
    airport: "Pantnagar Airport · 38 km", station: "Kathgodam Railway · 6 km",
    mapQuery: "R.K. Banquet & Guest House, Purvi Khera, Bypass Road, Gaulapar, Uttarakhand",
    gradient: "linear-gradient(160deg, rgba(13,91,58,0.35), rgba(10,8,7,0.85) 60%, rgba(10,8,7,0.95))",
    accent: "#1A8859",
  },
  {
    id: "haldi-loc", event: "Haldi & Chooda",
    date: "Tuesday, 5th May, 2026", time: "11:00 AM",
    venue: "Shehnai Vatika",
    address: "Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand – 263152",
    city: "Gadarpur", state: "Uttarakhand",
    tagline: "A golden morning of joy, blessings & turmeric",
    parking: "Spacious venue ground · Easy access", weather: "Sunny · 30°C Morning",
    airport: "Pantnagar Airport · 58 km", station: "Rudrapur Station · 22 km",
    mapQuery: "Shehnai Vatika, Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand",
    gradient: "linear-gradient(160deg, rgba(140,80,0,0.35), rgba(10,8,7,0.85) 60%, rgba(10,8,7,0.95))",
    accent: "#D4A017",
  },
  {
    id: "barat-loc", event: "Welcome of Barat",
    date: "Tuesday, 5th May, 2026", time: "8:00 PM",
    venue: "Shehnai Vatika",
    address: "Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand – 263152",
    city: "Gadarpur", state: "Uttarakhand",
    tagline: "A royal welcome where traditions come alive",
    parking: "Spacious venue ground · Easy access", weather: "Crisp · 26°C Evening",
    airport: "Pantnagar Airport · 58 km", station: "Rudrapur Station · 22 km",
    mapQuery: "Shehnai Vatika, Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand",
    gradient: "linear-gradient(160deg, rgba(139,30,63,0.4), rgba(10,8,7,0.85) 60%, rgba(10,8,7,0.95))",
    accent: "#E8C4A8",
  },
];

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.5" className={className} aria-hidden>
      <path d="M0 0 Q40 5 75 75" opacity={0.3} />
      <path d="M0 0 Q30 10 65 65" opacity={0.2} />
      <circle cx="70" cy="70" r="3" opacity={0.3} />
      <circle cx="60" cy="60" r="1.5" opacity={0.2} />
      <path d="M0 15 Q20 18 45 45" opacity={0.15} />
    </svg>
  );
}

export function LocationSection() {
  return (
    <section id="location" className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden className="absolute inset-0" style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12), transparent 50%), " +
          "radial-gradient(ellipse at 20% 100%, rgba(13,91,58,0.15), transparent 55%), " +
          "radial-gradient(ellipse at 80% 100%, rgba(92,10,28,0.18), transparent 55%)",
      }} />
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

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionBrandMark />
          <span className="section-eyebrow">Where To Be</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            The Royal <span className="italic gold-text-shimmer">Destinations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Cities of Uttarakhand — three moments of unforgettable celebration.
          </p>
          <div className="mx-auto mt-6 max-w-md"><OrnateDivider glyph="diamond" /></div>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => <LocationCard key={loc.id} data={loc} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function LocationCard({ data, index }: { data: LocationCardData; index: number }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative rounded-3xl glass-card-dark ornate-border" style={{ background: data.gradient }}>
        {/* Map */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-10" style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(10,8,7,0.3) 60%, rgba(10,8,7,0.95) 100%)",
          }} />
          <iframe title={`${data.city} map`} src={mapSrc} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full opacity-80 transition duration-700 group-hover:opacity-100"
            style={{ filter: "invert(0.85) hue-rotate(180deg) grayscale(0.3) contrast(1.1)" }}
          />
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-gold-foil/40 bg-matte/70 px-3 py-1.5 backdrop-blur-md">
            <MapPin size={12} className="text-gold-foil" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-ivory/90">{data.event}</span>
          </div>
          {/* Static accent dot — no animation */}
          <div aria-hidden className="absolute right-4 top-4 z-20 h-3 w-3 rounded-full"
            style={{ background: data.accent, boxShadow: `0 0 12px ${data.accent}` }} />
        </div>

        <div className="relative p-7 md:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-foil/30 bg-gold-foil/8 px-3 py-1.5 font-serif text-xs tracking-wide text-gold-shimmer">
              <Calendar size={12} />{data.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-foil/30 bg-gold-foil/8 px-3 py-1.5 font-serif text-xs tracking-wide text-gold-shimmer">
              <Clock size={12} />{data.time}
            </span>
          </div>
          <h3 className="font-display text-2xl font-light md:text-3xl">
            <span className="gold-text-shimmer italic">{data.venue}</span>
          </h3>
          <p className="mt-2 font-serif text-xs text-ivory/55">{data.address}</p>
          <p className="mt-3 font-serif text-sm italic text-ivory/75">{data.tagline}</p>
          <div className="mt-7 grid gap-3 font-serif text-sm sm:grid-cols-2">
            <InfoItem icon={<Car size={13} />}     label="Parking" value={data.parking} />
            <InfoItem icon={<CloudSun size={13} />} label="Weather" value={data.weather} />
            <InfoItem icon={<Plane size={13} />}    label="Airport" value={data.airport} />
            <InfoItem icon={<Train size={13} />}    label="Station" value={data.station} />
          </div>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.mapQuery)}`}
            target="_blank" rel="noreferrer noopener"
            className="group/btn mt-5 flex items-center justify-between rounded-xl border border-gold-foil/30 bg-matte-soft/50 p-4 transition hover:border-gold-foil hover:bg-gold-foil/10">
            <div className="flex items-center gap-3">
              <span className="text-gold-foil"><Navigation size={14} /></span>
              <div>
                <p className="font-serif text-[0.6rem] uppercase tracking-[0.3em] text-champagne-200/60">Get Directions</p>
                <p className="mt-0.5 text-sm text-ivory/90">Open Google Maps</p>
              </div>
            </div>
            <span className="text-gold-foil/70 transition group-hover/btn:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gold-foil/10 bg-matte-soft/40 p-3 transition hover:border-gold-foil/30">
      <span className="mt-0.5 text-gold-foil/80">{icon}</span>
      <div>
        <p className="font-serif text-[0.6rem] uppercase tracking-[0.3em] text-champagne-200/60">{label}</p>
        <p className="mt-0.5 text-xs text-ivory/85">{value}</p>
      </div>
    </div>
  );
}
