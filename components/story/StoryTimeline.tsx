"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";
import { COUPLE_PHOTOS } from "@/lib/couplePhotos";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StoryChapter {
  chapter: string;
  title: string;
  year: string;
  caption: string;
  body: string;
  image: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
}

const CHAPTERS: StoryChapter[] = [
  {
    chapter: "I",
    title: "First Meeting",
    year: "Winter · 2019",
    caption: "A chance encounter that felt like destiny.",
    body:
      "A quiet evening, a shared smile, and a conversation that lingered long after midnight. The city hummed around them, but in that moment the world stood beautifully still.",
    image: "linear-gradient(135deg, #3F0712 0%, #5C0A1C 50%, #8B1E3F 100%)",
    imageSrc: COUPLE_PHOTOS[4].src,
    imageAlt: COUPLE_PHOTOS[4].alt,
    objectPosition: COUPLE_PHOTOS[4].objectPosition,
  },
  {
    chapter: "II",
    title: "Friendship",
    year: "Spring · 2020",
    caption: "Long walks, late nights, inside jokes.",
    body:
      "They grew in each other's orbit — confidants, adventurers, each other's quiet home. Coffee turned to dinners, dinners to dreams, and somewhere between, the laughter never stopped.",
    image: "linear-gradient(135deg, #0D5B3A 0%, #1A8859 50%, #08432B 100%)",
    imageSrc: COUPLE_PHOTOS[0].src,
    imageAlt: COUPLE_PHOTOS[0].alt,
    objectPosition: COUPLE_PHOTOS[0].objectPosition,
  },
  {
    chapter: "III",
    title: "Love Story",
    year: "Monsoon · 2022",
    caption: "The moment everything quietly changed.",
    body:
      "Under a canopy of rain and fairy lights, one look said everything. Love didn't announce itself — it arrived softly, like it had always been there, waiting to be recognised.",
    image: "linear-gradient(135deg, #8B6F1B 0%, #D4AF37 50%, #C5A028 100%)",
    imageSrc: COUPLE_PHOTOS[6].src,
    imageAlt: COUPLE_PHOTOS[6].alt,
    objectPosition: COUPLE_PHOTOS[6].objectPosition,
  },
  {
    chapter: "IV",
    title: "Family Blessings",
    year: "Winter · 2024",
    caption: "Two families, one joyous promise.",
    body:
      "Elders smiled, tears of joy fell, and sweets were shared. Two families became one — woven together by ceremony, love, and the golden threads of tradition.",
    image: "linear-gradient(135deg, #5C0A1C 0%, #7A1730 50%, #3F0712 100%)",
    imageSrc: COUPLE_PHOTOS[1].src,
    imageAlt: COUPLE_PHOTOS[1].alt,
    objectPosition: COUPLE_PHOTOS[1].objectPosition,
  },
  {
    chapter: "V",
    title: "Forever Begins",
    year: "May · 2026",
    caption: "The forever we'll cherish always.",
    body:
      "This May, under the soft glow of marigold lights and the gentle song of the shehnai, a new chapter begins — and you are invited to turn the first page with us.",
    image: "linear-gradient(135deg, #C89B7B 0%, #F4D8C3 50%, #8B1E3F 100%)",
    imageSrc: COUPLE_PHOTOS[5].src,
    imageAlt: COUPLE_PHOTOS[5].alt,
    objectPosition: COUPLE_PHOTOS[5].objectPosition,
  },
];

export function StoryTimeline() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 mandala-bg opacity-40"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="relative mx-auto max-w-7xl px-6"
      >
        <div className="text-center">
          <SectionBrandMark />
          <span className="section-eyebrow">Chapters of Us</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight text-ivory md:text-6xl">
            A <span className="italic gold-text-shimmer">Love Story</span>
            <br />
            Written in the Stars
          </h2>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="star" />
          </div>
        </div>

        {/* Timeline progress */}
        <div className="mx-auto mt-14 flex max-w-3xl items-center gap-3">
          {CHAPTERS.map((c, i) => (
            <button
              key={c.chapter}
              onClick={() => setIndex(i)}
              className="group flex flex-1 items-center gap-3 text-left"
            >
              <span
                className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition ${
                  i <= index
                    ? "border-gold-foil bg-gold-foil/20 text-gold-shimmer"
                    : "border-gold-foil/20 text-gold-foil/40"
                }`}
              >
                <span className="font-serif text-xs">{c.chapter}</span>
                {i === index && (
                  <motion.span
                    layoutId="story-pulse"
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: "0 0 25px rgba(212,175,55,0.6)",
                    }}
                  />
                )}
              </span>
              {i < CHAPTERS.length - 1 && (
                <span
                  className={`h-px flex-1 transition-colors ${
                    i < index ? "bg-gold-foil/70" : "bg-gold-foil/10"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="relative mt-14">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-[10%]"
          >
            {CHAPTERS.map((chapter, i) => (
              <ChapterCard
                key={chapter.chapter}
                chapter={chapter}
                active={i === index}
                onActivate={() => setIndex(i)}
              />
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label="Previous chapter"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gold-foil/40 bg-matte-soft/60 p-3 text-gold-foil backdrop-blur-md transition hover:border-gold-foil hover:text-gold-shimmer disabled:opacity-30 md:left-6"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(CHAPTERS.length - 1, i + 1))}
            disabled={index === CHAPTERS.length - 1}
            aria-label="Next chapter"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gold-foil/40 bg-matte-soft/60 p-3 text-gold-foil backdrop-blur-md transition hover:border-gold-foil hover:text-gold-shimmer disabled:opacity-30 md:right-6"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-2xl text-center"
          >
            <p className="font-script text-2xl text-rose-gold md:text-3xl">
              {CHAPTERS[index].caption}
            </p>
            <p className="mt-5 font-serif text-base text-ivory/75 md:text-lg">
              {CHAPTERS[index].body}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ChapterCard({
  chapter,
  active,
  onActivate,
}: {
  chapter: StoryChapter;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.button
      onClick={onActivate}
      className="group relative w-[80%] flex-shrink-0 snap-center md:w-[45%] lg:w-[32%]"
      animate={{ scale: active ? 1 : 0.92, opacity: active ? 1 : 0.55 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-2xl ornate-border shadow-luxury"
        style={{ background: chapter.image }}
      >
        <Image
          src={chapter.imageSrc}
          alt={chapter.imageAlt}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: chapter.objectPosition }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-matte/85 via-matte/15 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.35), transparent 50%)",
          }}
        />

        {/* Ornate pattern overlay */}
        <svg
          aria-hidden
          viewBox="0 0 200 240"
          className="absolute inset-0 h-full w-full text-gold-shimmer opacity-20 mix-blend-overlay"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <rect x="10" y="10" width="180" height="220" rx="8" />
          <rect x="20" y="20" width="160" height="200" rx="4" />
          {[40, 80, 120, 160, 200].map((y) => (
            <path
              key={y}
              d={`M20 ${y} Q 100 ${y - 15} 180 ${y}`}
              opacity="0.5"
            />
          ))}
        </svg>

        <div className="absolute left-6 top-6 font-serif text-xs uppercase tracking-[0.4em] text-ivory/80">
          Chapter {chapter.chapter}
        </div>
        <div className="absolute right-6 top-6 font-serif text-xs italic text-gold-shimmer">
          {chapter.year}
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <h3 className="font-display text-3xl font-light leading-tight text-ivory md:text-4xl">
            {chapter.title}
          </h3>
          <div className="mt-3 h-px w-12 bg-gold-foil" />
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow:
                  "inset 0 0 80px rgba(212,175,55,0.2), 0 30px 80px -20px rgba(212,175,55,0.3)",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
