"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = "/audio/Aaj Sajeya - Goldie Sohel 320 Kbps.mp3";
const TARGET_VOLUME = 0.35;
const FADE_STEPS = 20;
const FADE_INTERVAL = 80; // ms per step

export interface AmbientAudioHandle {
  /** Call this synchronously inside a user-gesture event handler. */
  triggerPlay(): void;
}

// ─── Internal helpers ────────────────────────────────────────────────────────

function clearFadeTimer(ref: React.MutableRefObject<ReturnType<typeof setInterval> | null>) {
  if (ref.current) {
    clearInterval(ref.current);
    ref.current = null;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export const AmbientAudio = forwardRef<AmbientAudioHandle>(
  function AmbientAudio(_props, ref) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const hasStartedRef = useRef(false);
    const [muted, setMuted] = useState(false);
    const [visible, setVisible] = useState(false);

    // Fade helpers
    const fadeIn = useCallback((audio: HTMLAudioElement) => {
      clearFadeTimer(fadeTimerRef);
      let step = 0;
      // Start from a non-zero volume so some mobile browsers don't suppress it
      audio.volume = Math.max(audio.volume, 0.01);
      fadeTimerRef.current = setInterval(() => {
        step++;
        const progress = step / FADE_STEPS;
        audio.volume = Math.min(TARGET_VOLUME, 0.01 + (TARGET_VOLUME - 0.01) * progress);
        if (step >= FADE_STEPS) {
          clearFadeTimer(fadeTimerRef);
          audio.volume = TARGET_VOLUME;
        }
      }, FADE_INTERVAL);
    }, []);

    const fadeOut = useCallback(
      (audio: HTMLAudioElement, onDone?: () => void) => {
        clearFadeTimer(fadeTimerRef);
        const startVol = audio.volume;
        let step = 0;
        fadeTimerRef.current = setInterval(() => {
          step++;
          const progress = step / FADE_STEPS;
          audio.volume = Math.max(0, startVol * (1 - progress));
          if (step >= FADE_STEPS) {
            clearFadeTimer(fadeTimerRef);
            audio.volume = 0;
            onDone?.();
          }
        }, FADE_INTERVAL / 2);
      },
      []
    );

    // ── Imperative handle exposed to parent ──────────────────────────────────
    // This must be called synchronously inside the user-gesture handler.
    // Mobile browsers (iOS Safari, Chrome on iOS/Android) require audio.play()
    // to be initiated within the same call stack as a user interaction.
    useImperativeHandle(
      ref,
      () => ({
        triggerPlay() {
          if (hasStartedRef.current) return;
          hasStartedRef.current = true;

          const audio = audioRef.current;
          if (!audio) return;

          audio.volume = 0.01;

          const doPlay = () => {
            const p = audio.play();
            if (p !== undefined) {
              p.then(() => {
                fadeIn(audio);
                setVisible(true);
              }).catch(() => {
                // Still blocked — show button so user can manually unmute
                setVisible(true);
              });
            } else {
              fadeIn(audio);
              setVisible(true);
            }
          };

          if (audio.readyState >= 2 /* HAVE_CURRENT_DATA */) {
            doPlay();
          } else {
            const onReady = () => {
              doPlay();
              audio.removeEventListener("canplay", onReady);
            };
            audio.addEventListener("canplay", onReady);
            // Ensure load is kicked off (may be a no-op if already loading)
            audio.load();
          }
        },
      }),
      [fadeIn]
    );

    // ── Mute / unmute ────────────────────────────────────────────────────────
    useEffect(() => {
      if (!visible) return;
      const audio = audioRef.current;
      if (!audio) return;

      if (muted) {
        fadeOut(audio, () => audio.pause());
      } else {
        const p = audio.play();
        if (p !== undefined) {
          p.then(() => fadeIn(audio)).catch(() => {});
        } else {
          fadeIn(audio);
        }
      }

      return () => clearFadeTimer(fadeTimerRef);
    }, [muted, visible, fadeIn, fadeOut]);

    // ── Cleanup on unmount ───────────────────────────────────────────────────
    useEffect(() => {
      return () => {
        clearFadeTimer(fadeTimerRef);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = "";
        }
      };
    }, []);

    const toggleMute = useCallback(() => setMuted((m) => !m), []);

    return (
      <>
        {/*
          Render the <audio> element ALWAYS in the DOM so the browser
          registers/buffers it ahead of the user gesture. On iOS Safari &
          Chrome for Android, having the element in the DOM from page-load
          dramatically improves play() reliability inside a gesture.
        */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          ref={audioRef}
          src={AUDIO_SRC}
          loop
          playsInline
          preload="auto"
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
);
