import Footer from "../components/Footer";
import { Spotlight } from "../components/Spotlight";
import { TimelineDemo } from "../components/Timeline";
import { usePageMeta } from "../hooks/usePageMeta";
import SectionIntro from "../components/SectionIntro";
import FeaturedEventHero from "../components/FeaturedEventHero";
import EventOverview from "../components/EventOverview";
import AllAboutEvent from "../components/AllAboutEvent";
import EventSchedule from "../components/EventSchedule";
import EventCard from "../components/EventCard";
import {
  featuredEvent,
  headlineStats,
  quickFacts,
  subEvents,
  schedule,
  otherEvents,
} from "../data/techsurge";

function SectionDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

function Events() {
  usePageMeta(
    `${featuredEvent.title} · Events · CBB`,
    "TechSurge 2K26 — Kalachakra hackathon and Chitralekha promptathon at BVRIT, plus CBB's past events."
  );
  return (
    <div className="relative flex w-full items-center justify-center overflow-x-hidden bg-black">
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6">
          <FeaturedEventHero event={featuredEvent} />

          <SectionDivider />
          <EventOverview event={featuredEvent} headlineStats={headlineStats} quickFacts={quickFacts} />

          <SectionDivider />
          <AllAboutEvent subEvents={subEvents} />

          <SectionDivider />
          <EventSchedule schedule={schedule} />

          {otherEvents.length > 0 && (
            <>
              <SectionDivider />
              <section className="mx-auto w-full max-w-5xl px-1 py-16 sm:py-24">
                <SectionIntro eyebrow="Also Coming Up" title="Other Upcoming Events" />
                <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8">
                  {otherEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </section>
            </>
          )}

          <SectionDivider />
          <TimelineDemo />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Events;
