"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/Aaj Sajeya - Goldie Sohel 320 Kbps.mp3";
const FADE_DURATION = 2; // seconds
const TARGET_VOLUME = 0.35;

interface AmbientAudioProps {
  started: boolean;
}

export function AmbientAudio({ started }: AmbientAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [muted, setMuted] = useState(false);

  // Initialize audio context + element on first start
  useEffect(() => {
    if (!started) return;
    if (typeof window === "undefined") return;

    // Create audio element if not yet created
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.preload = "auto";
      audioRef.current = audio;
    }

    // Create Web Audio context for smooth fade control
    if (!ctxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      ctxRef.current = ctx;

      const source = ctx.createMediaElementSource(audioRef.current!);
      sourceRef.current = source;

      const gain = ctx.createGain();
      gain.gain.value = 0;
      gainRef.current = gain;

      source.connect(gain);
      gain.connect(ctx.destination);
    }

    const ctx = ctxRef.current!;
    const gain = gainRef.current!;
    const audio = audioRef.current!;

    // Resume context (needed after user gesture)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    if (!muted) {
      // Fade in
      audio.play().catch(() => {
        // Autoplay blocked — will retry on next user interaction
      });
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(
        TARGET_VOLUME,
        ctx.currentTime + FADE_DURATION
      );
    } else {
      // Fade out
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      setTimeout(() => {
        audio.pause();
      }, 600);
    }

    return () => {
      // Cleanup on unmount
      try {
        gain.gain.cancelScheduledValues(ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
        setTimeout(() => {
          audio.pause();
        }, 500);
      } catch {
        // ignore
      }
    };
  }, [started, muted]);

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
