"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,

  Car,
  CloudSun,
  Plane,
  Train,
  Calendar,
  Clock,
} from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";

interface LocationCardData {
  id: string;
  event: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  tagline: string;

  parking: string;
  weather: string;
  airport: string;
  station: string;
  mapQuery: string;
  gradient: string;
  accent: string;
}

const LOCATIONS: LocationCardData[] = [
  {
    id: "sangeet-loc",
    event: "Ladies Sangeet",
    date: "Monday, 4th May, 2026",
    time: "6:00 PM",
    venue: "R.K. Banquet & Guest House",
    address: "Purvi Khera, Bypass Road, Gaulapar, Uttarakhand – 263139",
    city: "Gaulapar",
    state: "Uttarakhand",
    tagline: "An evening of melodies, mehndi and memories",

    parking: "On-site parking available",
    weather: "Pleasant · 28°C Evening",
    airport: "Pantnagar Airport · 38 km",
    station: "Kathgodam Railway · 6 km",
    mapQuery: "R.K. Banquet & Guest House, Purvi Khera, Bypass Road, Gaulapar, Uttarakhand",
    gradient:
      "linear-gradient(160deg, rgba(13,91,58,0.35), rgba(10,8,7,0.85) 60%, rgba(10,8,7,0.95))",
    accent: "#1A8859",
  },
  {
    id: "barat-loc",
    event: "Welcome of Barat",
    date: "Tuesday, 5th May, 2026",
    time: "8:00 PM",
    venue: "Shehnai Vatika",
    address: "Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand – 263152",
    city: "Gadarpur",
    state: "Uttarakhand",
    tagline: "A royal welcome where traditions come alive",

    parking: "Spacious venue ground · Easy access",
    weather: "Crisp · 26°C Evening",
    airport: "Pantnagar Airport · 58 km",
    station: "Rudrapur Station · 22 km",
    mapQuery: "Shehnai Vatika, Gadarpur-Gularbhoj Road, Awas Vikas Colony, Gadarpur, Uttarakhand",
    gradient:
      "linear-gradient(160deg, rgba(139,30,63,0.4), rgba(10,8,7,0.85) 60%, rgba(10,8,7,0.95))",
    accent: "#E8C4A8",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">Where To Be</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            The Royal{" "}
            <span className="italic gold-text-shimmer">Destinations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Two cities of Uttarakhand · Two nights of unforgettable
            celebration.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="diamond" />
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <LocationCard key={loc.id} data={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  data,
  index,
}: {
  data: LocationCardData;
  index: number;
}) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    data.mapQuery,
  )}&output=embed`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div
        className="relative rounded-3xl glass-card-dark p-1 ornate-border"
        style={{ background: data.gradient }}
      >
        {/* Map preview */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl rounded-b-none">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(10,8,7,0.3) 60%, rgba(10,8,7,0.95) 100%)",
            }}
          />
          <iframe
            title={`${data.city} map`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full opacity-80 grayscale contrast-125 transition duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            style={{ filter: "invert(0.85) hue-rotate(180deg)" }}
          />
          <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-gold-foil/40 bg-matte/70 px-4 py-1.5 backdrop-blur-md">
            <MapPin size={14} className="text-gold-foil" />
            <span className="font-serif text-xs uppercase tracking-[0.3em] text-ivory/90">
              {data.event}
            </span>
          </div>
          <motion.div
            aria-hidden
            className="absolute right-6 top-6 z-20 h-3 w-3 rounded-full"
            style={{
              background: data.accent,
              boxShadow: `0 0 20px ${data.accent}`,
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="relative p-8 md:p-10">
          {/* Date & Time badges */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-foil/30 bg-gold-foil/8 px-4 py-1.5 font-serif text-xs tracking-wide text-gold-shimmer">
              <Calendar size={13} />
              {data.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-foil/30 bg-gold-foil/8 px-4 py-1.5 font-serif text-xs tracking-wide text-gold-shimmer">
              <Clock size={13} />
              {data.time}
            </span>
          </div>

          {/* Venue name */}
          <h3 className="font-display text-3xl font-light md:text-4xl">
            <span className="gold-text-shimmer italic">{data.venue}</span>
          </h3>
          <p className="mt-2 font-serif text-sm text-ivory/60">
            {data.address}
          </p>
          <p className="mt-3 font-serif text-base italic text-ivory/75">
            {data.tagline}
          </p>

          <div className="mt-8 grid gap-4 font-serif text-sm md:grid-cols-2">

            <InfoItem icon={<Car size={14} />} label="Parking" value={data.parking} />
            <InfoItem icon={<CloudSun size={14} />} label="Weather" value={data.weather} />
            <InfoItem icon={<Plane size={14} />} label="Airport" value={data.airport} />
            <InfoItem icon={<Train size={14} />} label="Station" value={data.station} />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                data.mapQuery,
              )}`}
              target="_blank"
              rel="noreferrer noopener"
              className="group/btn flex items-center justify-between rounded-xl border border-gold-foil/40 bg-matte-soft/50 p-4 transition hover:border-gold-foil hover:bg-gold-foil/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-gold-foil">
                  <Navigation size={14} />
                </span>
                <div>
                  <p className="font-serif text-[0.65rem] uppercase tracking-[0.3em] text-champagne-200/60">
                    Get Directions
                  </p>
                  <p className="mt-0.5 text-ivory/90">Open Google Maps</p>
                </div>
              </div>
              <span className="text-gold-foil/70 transition group-hover/btn:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gold-foil/10 bg-matte-soft/40 p-4 transition hover:border-gold-foil/30">
      <span className="mt-1 text-gold-foil/80">{icon}</span>
      <div>
        <p className="font-serif text-[0.65rem] uppercase tracking-[0.3em] text-champagne-200/60">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ivory/85">{value}</p>
      </div>
    </div>
  );
}
