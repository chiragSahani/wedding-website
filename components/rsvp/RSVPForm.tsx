"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Heart, User, Users, UtensilsCrossed } from "lucide-react";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BrandHashtag, SectionBrandMark, WeddingLogo } from "@/components/common/WeddingBrand";

interface FormState {
  name: string;
  guests: string;
  attendingSangeet: "yes" | "no" | "maybe";
  attendingBarat: "yes" | "no" | "maybe";
  food: "veg" | "non-veg" | "jain";
  message: string;
}

const initial: FormState = {
  name: "",
  guests: "2",
  attendingSangeet: "yes",
  attendingBarat: "yes",
  food: "veg",
  message: "",
};

/* ── Decorative helpers ──────────────────────────────────────────────────── */

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="0.5"
      className={className} aria-hidden>
      <path d="M0 0 Q40 5 75 75" opacity={0.3} />
      <path d="M0 0 Q30 10 65 65" opacity={0.2} />
      <circle cx="70" cy="70" r="3" opacity={0.3} />
      <path d="M0 15 Q20 18 45 45" opacity={0.15} />
    </svg>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */

export function RSVPForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden py-28 md:py-36">
      {/* Rich layered background */}
      <div aria-hidden className="absolute inset-0" style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(139,30,63,0.35), transparent 60%), " +
          "radial-gradient(ellipse at 10% 10%, rgba(212,175,55,0.08), transparent 50%), " +
          "linear-gradient(180deg, #0a0807 0%, #1A0409 100%)",
      }} />

      {/* Static mandala background — no JS animation */}
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

      {/* Corner ornaments */}
      <CornerOrnament className="pointer-events-none absolute top-6 left-6 h-20 w-20 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute top-6 right-6 h-20 w-20 -scale-x-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />
      <CornerOrnament className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 -scale-x-100 -scale-y-100 text-gold-foil/20 md:h-28 md:w-28" />

      {/* Top / bottom gold lines */}
      <div aria-hidden className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/35 to-transparent" />
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-gold-foil/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionBrandMark />
          <span className="section-eyebrow">Kindly Respond</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            Your Presence is Our{" "}
            <span className="italic gold-text-shimmer">Privilege</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-ivory/70">
            A graceful yes, a regret, or a blessing — we&apos;d love to hear from you.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="flower" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="relative rounded-3xl glass-card-dark ornate-border p-8 md:p-12"
                style={{
                  background: "linear-gradient(160deg, rgba(92,10,28,0.25) 0%, rgba(10,8,7,0.85) 50%, rgba(10,8,7,0.95) 100%)",
                  boxShadow: "0 0 80px rgba(139,30,63,0.12), inset 0 1px 0 rgba(212,175,55,0.1)",
                }}
              >

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Guest Name" icon={<User size={14} />} required>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your graceful name" className="input" />
                  </Field>
                  <Field label="Number of Guests" icon={<Users size={14} />}>
                    <input type="number" min={1} max={12} value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="input" />
                  </Field>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <SelectGroup label="Attending Sangeet?"
                    value={form.attendingSangeet}
                    onChange={(v) => setForm({ ...form, attendingSangeet: v as "yes" | "no" | "maybe" })}
                    options={[
                      { value: "yes",   label: "Joyfully Yes" },
                      { value: "maybe", label: "Maybe" },
                      { value: "no",    label: "Regretfully No" },
                    ]} />
                  <SelectGroup label="Attending Barat?"
                    value={form.attendingBarat}
                    onChange={(v) => setForm({ ...form, attendingBarat: v as "yes" | "no" | "maybe" })}
                    options={[
                      { value: "yes",   label: "Joyfully Yes" },
                      { value: "maybe", label: "Maybe" },
                      { value: "no",    label: "Regretfully No" },
                    ]} />
                </div>

                <div className="mt-6">
                  <Field label="Food Preference" icon={<UtensilsCrossed size={14} />}>
                    <div className="mt-2 flex flex-wrap gap-3">
                      {(["veg", "non-veg", "jain"] as const).map((opt) => (
                        <button key={opt} type="button"
                          onClick={() => setForm({ ...form, food: opt })}
                          className={`rounded-full border px-5 py-2 font-serif text-sm capitalize tracking-wide transition ${
                            form.food === opt
                              ? "border-gold-foil bg-gold-foil/15 text-gold-shimmer shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                              : "border-gold-foil/25 text-ivory/70 hover:border-gold-foil/60"
                          }`}>
                          {opt === "non-veg" ? "Non-Veg" : opt}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                <div className="mt-6">
                  <Field label="Message for the Couple" icon={<Heart size={14} />}>
                    <textarea value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="A blessing, a memory, a wish..."
                      rows={4} className="input resize-none" />
                  </Field>
                </div>

                <div className="mt-10 flex flex-col items-center gap-4">
                  <MagneticButton type="submit">
                    <Sparkles size={14} />
                    Send With Love
                  </MagneticButton>
                  <p className="font-serif text-xs italic text-champagne-200/60">
                    Your response helps us plan the perfect celebration.
                  </p>
                </div>
              </motion.form>
            ) : (
              <SuccessCard key="success" name={form.name} onReset={() => {
                setForm(initial);
                setSubmitted(false);
              }} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(10, 8, 7, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: #FBF7F0;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          font-family: var(--font-cormorant), serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .input::placeholder {
          color: rgba(251, 247, 240, 0.35);
          font-style: italic;
        }
        .input:focus {
          border-color: rgba(212, 175, 55, 0.7);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.12), 0 0 30px rgba(212, 175, 55, 0.15);
          background: rgba(20, 17, 16, 0.8);
        }
      `}</style>
    </section>
  );
}

function Field({ label, icon, children, required }: {
  label: string; icon: React.ReactNode; children: React.ReactNode; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70">
        <span className="text-gold-foil/70">{icon}</span>
        {label}
        {required && <span className="text-burgundy-light">*</span>}
      </span>
      {children}
    </label>
  );
}

function SelectGroup({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <span className="mb-2 block font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button key={o.value} type="button" onClick={() => onChange(o.value)}
            className={`flex-1 rounded-xl border px-3 py-2.5 font-serif text-sm tracking-wide transition ${
              value === o.value
                ? "border-gold-foil bg-gold-foil/15 text-gold-shimmer shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                : "border-gold-foil/20 text-ivory/70 hover:border-gold-foil/50"
            }`}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SuccessCard({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", damping: 22 }}
      className="relative overflow-hidden rounded-3xl glass-card-dark ornate-border p-12 text-center md:p-16"
    >
      {/* Fireworks */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const r = 150 + Math.random() * 250;
        return (
          <motion.span key={i} className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
            style={{
              background: ["#F5E7B3","#D4AF37","#C89B7B","#8B1E3F"][i % 4],
              boxShadow: `0 0 14px ${["#F5E7B3","#D4AF37","#C89B7B","#8B1E3F"][i % 4]}`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: [0,1,0], scale: [0,1.4,0.4] }}
            transition={{ duration: 2, delay: 0.2 + (i % 6) * 0.1, repeat: Infinity, repeatDelay: 2 }} />
        );
      })}

      <div className="relative mb-8 flex flex-col items-center gap-4">
        <WeddingLogo size="lg" animated={false} />
        <BrandHashtag />
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 16, delay: 0.1 }}
        className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold-foil/50 bg-gold-foil/15"
      >
        <Check className="text-gold-shimmer" size={34} strokeWidth={1.5} />
        <motion.span className="absolute inset-0 rounded-full"
          animate={{ boxShadow: ["0 0 0 0 rgba(212,175,55,0.6)", "0 0 0 40px rgba(212,175,55,0)"] }}
          transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>

      <h3 className="relative mt-8 font-display text-4xl font-light leading-tight md:text-5xl">
        <span className="gold-text-shimmer italic">Thank you</span>
        {name ? <>, <span className="text-ivory">{name}</span></> : null}
      </h3>
      <p className="relative mx-auto mt-5 max-w-xl font-serif text-lg italic text-ivory/80">
        Your response has been safely received. Our hearts are already dancing in anticipation. See you under the marigolds.
      </p>
      <div className="relative mx-auto mt-6 max-w-xs">
        <OrnateDivider glyph="star" />
      </div>
      <p className="relative mt-6 font-script text-3xl text-rose-gold">— Anukriti &amp; Anmol</p>
      <button onClick={onReset}
        className="relative mt-10 font-serif text-xs uppercase tracking-[0.3em] text-champagne-200/70 transition hover:text-gold-shimmer">
        ← Submit another response
      </button>
    </motion.div>
  );
}
