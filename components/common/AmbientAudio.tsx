"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/Aaj Sajeya - Goldie Sohel 320 Kbps.mp3";
const TARGET_VOLUME = 0.35;
const FADE_STEPS = 20;
const FADE_INTERVAL = 80; // ms per step

interface AmbientAudioProps {
  started: boolean;
}

export function AmbientAudio({ started }: AmbientAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  // Create audio element once
  useEffect(() => {
    if (!started || typeof window === "undefined") return;

    if (!audioRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0;
      audio.setAttribute("playsinline", "true");
      audio.src = AUDIO_SRC;
      audioRef.current = audio;

      // Mark ready once we can play
      const onCanPlay = () => setReady(true);
      audio.addEventListener("canplaythrough", onCanPlay, { once: true });
      audio.load();
    }
  }, [started]);

  // Handle play/pause with fade
  useEffect(() => {
    if (!started || !ready) return;
    const audio = audioRef.current;
    if (!audio) return;

    // Clear any ongoing fade
    if (fadeTimerRef.current) {
      clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }

    if (!muted) {
      // Play and fade in
      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Autoplay blocked — user will tap the button to unmute
        });
      }

      const startVol = audio.volume;
      const diff = TARGET_VOLUME - startVol;
      let step = 0;

      fadeTimerRef.current = setInterval(() => {
        step++;
        const progress = step / FADE_STEPS;
        audio.volume = Math.min(
          TARGET_VOLUME,
          startVol + diff * progress
        );
        if (step >= FADE_STEPS) {
          clearInterval(fadeTimerRef.current!);
          fadeTimerRef.current = null;
          audio.volume = TARGET_VOLUME;
        }
      }, FADE_INTERVAL);
    } else {
      // Fade out then pause
      const startVol = audio.volume;
      let step = 0;

      fadeTimerRef.current = setInterval(() => {
        step++;
        const progress = step / FADE_STEPS;
        audio.volume = Math.max(0, startVol * (1 - progress));
        if (step >= FADE_STEPS) {
          clearInterval(fadeTimerRef.current!);
          fadeTimerRef.current = null;
          audio.volume = 0;
          audio.pause();
        }
      }, FADE_INTERVAL / 2); // Fade out faster
    }

    return () => {
      if (fadeTimerRef.current) {
        clearInterval(fadeTimerRef.current);
        fadeTimerRef.current = null;
      }
    };
  }, [started, muted, ready]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  if (!started) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold-foil/40 bg-matte-soft/70 text-gold-foil backdrop-blur-md transition hover:scale-105 hover:border-gold-foil md:bottom-8 md:right-8"
        aria-label={muted ? "Unmute ambient music" : "Mute ambient music"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        <span className="absolute inset-0 rounded-full border border-gold-foil/20 animate-ping opacity-40" />
      </motion.button>
    </AnimatePresence>
  );
}
