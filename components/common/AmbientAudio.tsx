"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/Aaj Sajeya - Goldie Sohel 320 Kbps.mp3";
const TARGET_VOLUME = 0.35;
const FADE_STEPS = 20;
const FADE_INTERVAL = 80;

interface AmbientAudioProps {
  /** Set to true once the user has tapped to open the invitation. */
  started: boolean;
}

export function AmbientAudio({ started }: AmbientAudioProps) {
  const audioRef    = useRef<HTMLAudioElement | null>(null);
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedRef  = useRef(false);
  const [muted,   setMuted]   = useState(false);
  const [visible, setVisible] = useState(false);

  // ── helpers ────────────────────────────────────────────────────────────────

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const fadeIn = useCallback((audio: HTMLAudioElement) => {
    clearTimer();
    if (audio.volume < 0.01) audio.volume = 0.01;
    const startVol = audio.volume;
    const diff = TARGET_VOLUME - startVol;
    let step = 0;
    timerRef.current = setInterval(() => {
      step++;
      audio.volume = Math.min(TARGET_VOLUME, startVol + diff * (step / FADE_STEPS));
      if (step >= FADE_STEPS) {
        clearTimer();
        audio.volume = TARGET_VOLUME;
      }
    }, FADE_INTERVAL);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fadeOut = useCallback((audio: HTMLAudioElement, onDone?: () => void) => {
    clearTimer();
    const startVol = audio.volume;
    let step = 0;
    timerRef.current = setInterval(() => {
      step++;
      audio.volume = Math.max(0, startVol * (1 - step / FADE_STEPS));
      if (step >= FADE_STEPS) {
        clearTimer();
        audio.volume = 0;
        onDone?.();
      }
    }, FADE_INTERVAL / 2);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── initial play (triggered once when started flips true) ─────────────────
  // We use a ref guard so React Strict Mode double-invoke doesn't replay this.
  useEffect(() => {
    if (!started || startedRef.current) return;
    startedRef.current = true;

    const audio = audioRef.current;
    if (!audio) return;

    // Ensure src is set (Strict Mode cleanup may have blanked it)
    if (!audio.src || audio.src === window.location.href) {
      audio.src = AUDIO_SRC;
    }

    audio.volume = 0.01;

    const doPlay = () => {
      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          fadeIn(audio);
          setVisible(true);
        }).catch((err) => {
          console.warn("[AmbientAudio] play() blocked:", err.message);
          // Still show the button so user can tap to manually start
          setVisible(true);
        });
      } else {
        fadeIn(audio);
        setVisible(true);
      }
    };

    if (audio.readyState >= 2) {
      doPlay();
    } else {
      const onCanPlay = () => {
        audio.removeEventListener("canplay", onCanPlay);
        doPlay();
      };
      audio.addEventListener("canplay", onCanPlay);
      // preload="none" means browser hasn't fetched anything yet — always load
      audio.load();
    }
  }, [started, fadeIn]);

  // ── mute toggle (only runs after audio has been started) ──────────────────
  useEffect(() => {
    if (!startedRef.current || !visible) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      fadeOut(audio, () => audio.pause());
    } else {
      audio.volume = 0.01;
      const p = audio.play();
      if (p !== undefined) {
        p.then(() => fadeIn(audio)).catch(() => {});
      } else {
        fadeIn(audio);
      }
    }

    return clearTimer;
  }, [muted]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── cleanup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      clearTimer();
      // Don't blank src here — Strict Mode calls this on the first mount
      // too, which would wipe the audio src before the user taps.
      if (audioRef.current && startedRef.current) {
        audioRef.current.pause();
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  return (
    <>
      {/* Always in DOM so the browser can buffer ahead of the user's tap */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        playsInline
        preload="none"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {visible && (
          <motion.button
            key="audio-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold-foil/40 bg-matte-soft/70 text-gold-foil backdrop-blur-md transition hover:scale-105 hover:border-gold-foil md:bottom-8 md:right-8"
            aria-label={muted ? "Unmute ambient music" : "Mute ambient music"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            <span className="absolute inset-0 rounded-full border border-gold-foil/20 animate-ping opacity-40" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
