import SectionIntro from "./SectionIntro";
import Reveal from "./Reveal";

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#4cdef5]" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * EventOverview - poster, highlights, headline stats and quick facts for the featured event.
 */
export default function EventOverview({ event, headlineStats = [], quickFacts = [] }) {
  return (
    <section
      id="techsurge-events"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-1 py-16 sm:py-24"
    >
      <SectionIntro eyebrow="The Event" title={`All about ${event.title}`}>
        {event.description}
      </SectionIntro>

      <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
        {/* poster */}
        <Reveal className="group mx-auto w-full max-w-[320px]">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#4cdef5]/50 via-white/10 to-transparent p-px shadow-[0_0_50px_-12px_rgba(76,222,245,0.35)] transition-transform duration-500 group-hover:-rotate-1">
            <img
              src={event.poster}
              alt={`${event.title} poster`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        {/* highlights */}
        <Reveal delay={0.1} className="text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#4cdef5]">
            {event.subtitle}
          </p>
          <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
            What to expect
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {(event.highlights || []).map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-neutral-200">
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* headline stats */}
      {headlineStats.length > 0 && (
        <Reveal delay={0.05} className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div
              key={stat.label}
              className="surface rounded-2xl border border-white/10 p-5 text-center transition-colors hover:border-[#4cdef5]/30"
            >
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-display text-xs font-semibold uppercase tracking-wider text-[#4cdef5]/90">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{stat.note}</p>
            </div>
          ))}
        </Reveal>
      )}

      {/* quick facts */}
      {quickFacts.length > 0 && (
        <Reveal as="dl" delay={0.1} className="surface mt-6 grid grid-cols-1 gap-x-10 gap-y-4 rounded-2xl border border-white/10 p-6 sm:grid-cols-2 sm:p-8">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col border-b border-white/5 pb-3 last:border-0 sm:border-0 sm:pb-0">
              <dt className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-neutral-200 sm:text-base">{fact.value}</dd>
            </div>
          ))}
        </Reveal>
      )}
    </section>
  );
}
