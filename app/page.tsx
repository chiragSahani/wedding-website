"use client";

import { useRef, useState } from "react";
import { InvitationBox } from "@/components/intro/InvitationBox";
import { Hero } from "@/components/hero/Hero";
import { EventsSection } from "@/components/events/EventsSection";
import { SangeetShowcase } from "@/components/sangeet/SangeetShowcase";
import { LocationSection } from "@/components/location/LocationSection";
import { Gallery } from "@/components/gallery/Gallery";
import { RSVPForm } from "@/components/rsvp/RSVPForm";
import { BlessingsWall } from "@/components/blessings/BlessingsWall";
import { Footer } from "@/components/footer/Footer";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CursorGlow } from "@/components/common/CursorGlow";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { FloatingPetals } from "@/components/common/FloatingPetals";
import { AmbientAudio, type AmbientAudioHandle } from "@/components/common/AmbientAudio";
import { TopNav } from "@/components/nav/TopNav";
import { StickyRSVP } from "@/components/nav/StickyRSVP";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const audioHandle = useRef<AmbientAudioHandle>(null);

  return (
    <>
      {!opened && (
        <InvitationBox
          onOpen={() => setOpened(true)}
          /**
           * onTap fires synchronously inside the user-tap event handler,
           * before the 3 400 ms exit animation. This keeps audio.play()
           * inside the browser's "user gesture" window — required by iOS
           * Safari and Chrome on Android to allow audio without muting.
           */
          onTap={() => audioHandle.current?.triggerPlay()}
        />
      )}

      <SmoothScroll>
        <ScrollProgress />
        <CursorGlow />
        <FloatingPetals count={12} />
        {/* AmbientAudio renders its <audio> element immediately so the
            browser can pre-buffer the file before the user taps. */}
        <AmbientAudio ref={audioHandle} />
        <TopNav />
        <StickyRSVP />

        <main className="relative">
          <Hero />
          <EventsSection />

          <SangeetShowcase />
          <LocationSection />
          <Gallery />
          <RSVPForm />
          <BlessingsWall />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
