"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { BrandHashtag, WeddingLogo } from "@/components/common/WeddingBrand";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#sangeet", label: "Sangeet" },
  { href: "#location", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#blessings", label: "Blessings" },
  { href: "#rsvp", label: "RSVP" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-foil/15 bg-matte/80 backdrop-blur-xl py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <WeddingLogo
            size={scrolled ? "xs" : "sm"}
            priority
            animated={false}
            className="transition-[width,height] duration-500"
          />
          <span className="hidden h-5 w-px bg-gold-foil/30 md:block" />
          <span className="hidden flex-col items-start gap-1 md:flex">
            <BrandHashtag compact />
            <span className="font-serif text-[0.62rem] uppercase tracking-[0.35em] text-champagne-200/70">
              Wed 2026
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-serif text-sm text-ivory/70 transition hover:text-gold-shimmer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 bg-gold-foil transition-transform hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#rsvp"
          className="hidden items-center gap-2 rounded-full border border-gold-foil/60 bg-gold-foil/10 px-5 py-2 font-serif text-xs uppercase tracking-[0.25em] text-gold-shimmer transition hover:border-gold-foil hover:bg-gold-foil/20 md:inline-flex"
        >
          <Heart size={12} fill="currentColor" />
          RSVP
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-foil/40 text-gold-foil lg:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden"
          >
            <nav className="mx-6 mt-4 flex flex-col rounded-2xl border border-gold-foil/25 bg-matte-soft/90 p-2 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-serif text-sm text-ivory/80 transition hover:bg-gold-foil/10 hover:text-gold-shimmer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
