"use client";


import { useState } from "react";
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
import { AmbientAudio } from "@/components/common/AmbientAudio";
import { TopNav } from "@/components/nav/TopNav";
import { StickyRSVP } from "@/components/nav/StickyRSVP";



export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <InvitationBox onOpen={() => setOpened(true)} />}

      <SmoothScroll>
        <ScrollProgress />
        <CursorGlow />
        <FloatingPetals count={12} />
        <AmbientAudio started={opened} />
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
