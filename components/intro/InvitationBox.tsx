"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandHashtag, WeddingLogo } from "@/components/common/WeddingBrand";

interface InvitationBoxProps {
  onOpen: () => void;
}

export function InvitationBox({ onOpen }: InvitationBoxProps) {
  const [opened, setOpened] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const t = setTimeout(() => setExiting(true), 2400);
    const t2 = setTimeout(() => onOpen(), 3400);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [opened, onOpen]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, #3F0712 0%, #1A0409 55%, #050203 100%)",
            }}
          />

          {/* Subtle mandala glow */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 mandala-bg opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 180, ease: "linear", repeat: Infinity }}
          />

          {/* Petals when opened */}
          <AnimatePresence>
            {opened &&
              Array.from({ length: 40 }).map((_, i) => {
                const angle = (i / 40) * Math.PI * 2;
                const radius = 200 + Math.random() * 600;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const colors = ["#C89B7B", "#E8C4A8", "#D4AF37", "#8B1E3F"];
                return (
                  <motion.span
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{
                      x,
                      y,
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0.6],
                      rotate: Math.random() * 720,
                    }}
                    transition={{
                      duration: 2.2,
                      delay: 0.2 + Math.random() * 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 block h-4 w-4 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colors[i % colors.length]} 0%, transparent 70%)`,
                      filter: "blur(0.5px)",
                    }}
                  />
                );
              })}
          </AnimatePresence>

          {/* Gold particles */}
          <AnimatePresence>
            {opened &&
              Array.from({ length: 60 }).map((_, i) => (
                <motion.span
                  key={`p-${i}`}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    x: (Math.random() - 0.5) * 1400,
                    y: (Math.random() - 0.5) * 900,
                    opacity: [0, 1, 0],
                    scale: [0, Math.random() * 1.5 + 0.4, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 1.5,
                    delay: 0.3 + Math.random() * 0.6,
                  }}
                  className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, #F5E7B3 0%, #D4AF37 50%, transparent 70%)",
                    boxShadow: "0 0 8px rgba(245,231,179,0.9)",
                  }}
                />
              ))}
          </AnimatePresence>

          <div className="relative perspective-1000">
            <motion.div
              className="relative preserve-3d"
              initial={{ rotateY: -20, rotateX: 10 }}
              animate={opened ? { rotateX: 0, scale: 1.25 } : { rotateY: [-12, 12, -12], rotateX: 6 }}
              transition={
                opened
                  ? { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
                  : { duration: 6, ease: "easeInOut", repeat: Infinity }
              }
            >
              <Box3D opened={opened} onOpen={() => setOpened(true)} />
            </motion.div>

            <AnimatePresence>
              {opened && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.9, ease: "easeOut" }}
                  className="pointer-events-none absolute left-1/2 top-1/2 w-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/2 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.35, duration: 0.7, ease: "easeOut" }}
                    className="mb-5 flex justify-center"
                  >
                    <WeddingLogo size="md" priority animated={false} />
                  </motion.div>
                  <motion.p
                    initial={{ letterSpacing: "0.1em", opacity: 0 }}
                    animate={{ letterSpacing: "0.4em", opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1.2 }}
                    className="font-serif text-xs uppercase text-champagne-200/80"
                  >
                    Together with the Sahani & families
                  </motion.p>
                  <h1 className="mt-3 font-script text-3xl text-transparent gold-text-shimmer sm:text-5xl md:text-7xl">
                    Anukriti <span className="font-serif italic">&</span> Anmol
                  </h1>
                  <div className="mt-5">
                    <BrandHashtag />
                  </div>
                  <div className="mt-4 divider-ornate">
                    <span className="font-serif text-xs italic tracking-[0.4em] text-gold-foil/80">
                      ✦ INVITE YOU ✦
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!opened && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
              transition={{
                opacity: { duration: 2.2, repeat: Infinity },
                y: { duration: 0.6, delay: 0.3 },
              }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 font-serif text-sm tracking-[0.5em] text-champagne-200/80"
            >
              ✦ TAP TO OPEN ✦
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Box3D({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      disabled={opened}
      className="group relative block cursor-pointer outline-none"
      aria-label="Open invitation"
    >
      <motion.div
        className="relative h-64 w-64 preserve-3d md:h-80 md:w-80"
        animate={opened ? { y: -40, scale: 1.05 } : { y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Base box */}
        <div className="absolute inset-0 preserve-3d">
          {/* Front face (decorative) */}
          <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-gold-foil/50 bg-gradient-to-br from-burgundy-deep via-burgundy to-burgundy-deep shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),inset_0_0_60px_rgba(212,175,55,0.15)]">
            <InvitationPattern />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                opened ? "opacity-100" : "opacity-0"
              }`}
            >
              <WeddingLogo
                size="lg"
                priority
                animated={false}
                className="shadow-[0_0_48px_rgba(212,175,55,0.45),inset_0_0_24px_rgba(212,175,55,0.16)]"
              />
            </div>
          </div>
        </div>

        {/* Lid with hinged opening */}
        <motion.div
          className="absolute left-0 right-0 top-0 origin-top preserve-3d"
          style={{ height: "50%" }}
          animate={
            opened
              ? { rotateX: -155, y: -4 }
              : { rotateX: 0, y: 0 }
          }
          transition={{
            duration: 1.1,
            ease: [0.34, 1.56, 0.64, 1],
            delay: opened ? 0.2 : 0,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-t-lg border border-gold-foil/60 bg-gradient-to-br from-burgundy to-burgundy-deep shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_50px_rgba(212,175,55,0.2)]">
            <LidPattern />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                opened ? "opacity-0" : "opacity-100"
              }`}
            >
              <WeddingLogo size="md" priority animated={false} />
            </div>
          </div>
          {/* Inside of lid */}
          <div
            className="absolute inset-0 rounded-t-lg"
            style={{
              transform: "rotateX(180deg) translateZ(1px)",
              background:
                "linear-gradient(180deg, #3F0712 0%, #1A0409 100%)",
              boxShadow: "inset 0 0 40px rgba(212,175,55,0.25)",
            }}
          />
        </motion.div>

        {/* Inside glow when open */}
        <motion.div
          className="absolute left-0 right-0 top-[50%] h-1/2 rounded-b-lg"
          animate={
            opened
              ? {
                  boxShadow:
                    "inset 0 0 90px rgba(245,231,179,0.6), 0 0 120px rgba(212,175,55,0.6)",
                }
              : {}
          }
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(245,231,179,0.3), transparent 70%)",
          }}
        />

        {/* Box shadow on floor */}
        <div
          aria-hidden
          className="absolute inset-x-8 -bottom-8 h-6 rounded-[50%]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {!opened && (
        <motion.div
          aria-hidden
          className="absolute -inset-4 rounded-xl"
          animate={{
            boxShadow: [
              "0 0 40px rgba(212,175,55,0.3)",
              "0 0 80px rgba(212,175,55,0.6)",
              "0 0 40px rgba(212,175,55,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </button>
  );
}

function LidPattern() {
  return (
    <svg
      viewBox="0 0 160 80"
      className="h-full w-full p-6 text-gold-shimmer"
      aria-hidden
    >
      <defs>
        <linearGradient id="goldLid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E7B3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6F1B" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="6"
        width="152"
        height="68"
        rx="4"
        fill="none"
        stroke="url(#goldLid)"
        strokeWidth="1"
        opacity="0.8"
      />
      <rect
        x="10"
        y="12"
        width="140"
        height="56"
        rx="2"
        fill="none"
        stroke="url(#goldLid)"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <g transform="translate(80 40)" fill="url(#goldLid)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-18"
            rx="2"
            ry="7"
            transform={`rotate(${deg})`}
            opacity="0.9"
          />
        ))}
        <circle cx="0" cy="0" r="4" fill="#F5E7B3" />
        <circle cx="0" cy="0" r="2" fill="#8B6F1B" />
      </g>
    </svg>
  );
}

function InvitationPattern() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full p-8 text-gold-shimmer"
      aria-hidden
    >
      <defs>
        <linearGradient id="goldInv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E7B3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6F1B" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="184"
        height="184"
        rx="6"
        fill="none"
        stroke="url(#goldInv)"
        strokeWidth="0.75"
        opacity="0.7"
      />
      <g stroke="url(#goldInv)" fill="none" strokeWidth="0.6">
        <path d="M100 30 Q 120 60 100 100 Q 80 60 100 30Z" opacity="0.7" />
        <path
          d="M100 100 Q 80 140 100 170 Q 120 140 100 100Z"
          opacity="0.7"
        />
        <path d="M30 100 Q 60 80 100 100 Q 60 120 30 100Z" opacity="0.7" />
        <path
          d="M100 100 Q 140 80 170 100 Q 140 120 100 100Z"
          opacity="0.7"
        />
      </g>
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontSize="28"
        fontFamily="serif"
        fontStyle="italic"
        fill="url(#goldInv)"
      >
        A & A
      </text>
    </svg>
  );
}
