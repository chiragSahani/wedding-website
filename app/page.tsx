"use client";

import { useState, lazy, Suspense } from "react";
import { InvitationBox } from "@/components/intro/InvitationBox";
import { Hero } from "@/components/hero/Hero";
import { AmbientAudio } from "@/components/common/AmbientAudio";
import { TopNav } from "@/components/nav/TopNav";
import { StickyRSVP } from "@/components/nav/StickyRSVP";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CursorGlow } from "@/components/common/CursorGlow";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { FloatingPetals } from "@/components/common/FloatingPetals";

// Lazy-load every below-fold section so they don't block the initial paint
const EventsSection  = lazy(() => import("@/components/events/EventsSection").then(m => ({ default: m.EventsSection })));
const LocationSection = lazy(() => import("@/components/location/LocationSection").then(m => ({ default: m.LocationSection })));
const Gallery        = lazy(() => import("@/components/gallery/Gallery").then(m => ({ default: m.Gallery })));
const RSVPForm       = lazy(() => import("@/components/rsvp/RSVPForm").then(m => ({ default: m.RSVPForm })));
const BlessingsWall  = lazy(() => import("@/components/blessings/BlessingsWall").then(m => ({ default: m.BlessingsWall })));
const Footer         = lazy(() => import("@/components/footer/Footer").then(m => ({ default: m.Footer })));

// Thin placeholder shown while a section loads
function SectionFallback() {
  return <div className="py-28 md:py-36" aria-hidden />;
}

export default function Home() {
  const [siteOpened, setSiteOpened] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  return (
    <>
      {!siteOpened && (
        <InvitationBox
          onOpen={() => setSiteOpened(true)}
          onTap={() => setAudioStarted(true)}
        />
      )}

      <SmoothScroll>
        <ScrollProgress />
        <CursorGlow />
        <FloatingPetals count={5} />
        {/* AmbientAudio renders its <audio> element immediately so the
            browser can pre-buffer the file before the user taps.
            `started` flips to true on the tap gesture itself. */}
        <AmbientAudio started={audioStarted} />
        <TopNav />
        <StickyRSVP />

        <main className="relative">
          {/* Hero is above-fold — load eagerly */}
          <Hero />

          {/* All remaining sections are below-fold — lazy load */}
          <Suspense fallback={<SectionFallback />}>
            <EventsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <LocationSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Gallery />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <RSVPForm />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <BlessingsWall />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        </main>
      </SmoothScroll>
    </>
  );
}
