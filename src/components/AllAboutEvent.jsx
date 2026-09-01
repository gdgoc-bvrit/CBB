import { useState } from "react";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";
import EventDetailsModal from "./EventDetailsModal";

function FlagshipCard({ event, index, onOpen }) {
  const accent = event.accent || "#4cdef5";
  return (
    <Reveal
      as="button"
      type="button"
      onClick={onOpen}
      delay={index * 0.08}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className="surface group flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 text-left transition-colors duration-300 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]/50 md:flex-row"
    >
      {/* poster */}
      <div className="relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-black p-4 md:w-[38%] md:p-6 lg:w-1/3">
        <img
          src={event.poster}
          alt={`${event.title} poster`}
          loading="lazy"
          decoding="async"
          className="max-h-[300px] w-auto rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.03] md:max-h-[360px]"
        />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 70px -20px ${accent}` }}
        />
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <span
          className="w-fit rounded-full border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider"
          style={{ borderColor: `${accent}55`, color: accent, background: `${accent}14` }}
        >
          {event.category}
        </span>

        <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">{event.title}</h3>
        {event.theme && (
          <p className="mt-1 font-brush text-lg tracking-wide" style={{ color: accent }}>
            {event.theme}
          </p>
        )}

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-neutral-400 sm:text-base">
          {event.description}
        </p>

        {event.quickFacts?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {event.quickFacts.map((fact) => (
              <li
                key={fact.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-neutral-300"
              >
                <span className="text-neutral-500">{fact.label}: </span>
                {fact.value}
              </li>
            ))}
          </ul>
        )}

        <span
          className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
          style={{ color: accent }}
        >
          View details &amp; register
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Reveal>
  );
}

/**
 * AllAboutEvent - flagship sub-event cards; clicking a card opens its details modal.
 */
export default function AllAboutEvent({ subEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (!subEvents || subEvents.length === 0) return null;

  return (
    <>
      <section className="mx-auto w-full max-w-5xl px-1 py-16 sm:py-24">
        <SectionIntro eyebrow="The Line-up" title="Two Flagship Events, One Roof">
          Build with code or build with ideas — the stage is yours. Open a card for the full brief
          and step-by-step registration.
        </SectionIntro>

        <div className="mt-12 flex flex-col gap-6 sm:gap-8">
          {subEvents.map((event, index) => (
            <FlagshipCard
              key={event.id}
              event={event}
              index={index}
              onOpen={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </section>

      <EventDetailsModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}
