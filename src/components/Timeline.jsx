import { Timeline } from "./ui/timeline";
import SectionIntro from "./SectionIntro";
import { pastEvents } from "../data/pastEvents";

const IMAGE_SHADOW =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

const BADGE_STYLES = {
  "2027": "bg-purple-400/10 border-purple-300 text-purple-300",
  default: "bg-blue-400/10 border-blue-300 text-blue-300",
};

function TimelineEntry({ entry }) {
  const badge = BADGE_STYLES[entry.batch] || BADGE_STYLES.default;
  return (
    <div>
      <div className="mb-3">
        <span className={`inline-block rounded-full border px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wide ${badge}`}>
          Organized by CBB {entry.batch}
        </span>
      </div>
      <p className="mb-4 text-sm font-medium text-neutral-200 md:text-base">{entry.caption}</p>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {entry.images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className={`h-24 w-full rounded-lg object-cover sm:h-28 lg:h-32 ${IMAGE_SHADOW}`}
          />
        ))}
      </div>
    </div>
  );
}

export function TimelineDemo() {
  const data = pastEvents.map((entry) => ({
    title: entry.title,
    content: <TimelineEntry entry={entry} />,
  }));

  return (
    <div className="relative w-full overflow-clip px-1 py-16 sm:py-24">
      <div className="mx-auto max-w-screen-xl">
        <SectionIntro eyebrow="The Track Record" title="Previous Events">
          A glimpse into the events CBB has hosted over the past two years.
        </SectionIntro>
        <div className="mt-8">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
}
