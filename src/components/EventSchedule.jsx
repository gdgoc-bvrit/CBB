import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionIntro from "./SectionIntro";
import Reveal from "./Reveal";
import { scheduleCategories } from "../data/techsurge";

const CATEGORY_COLOR = {
  Ceremony: "#fbbf24",
  Milestone: "#4cdef5",
  Judging: "#60a5fa",
  Mentorship: "#c084fc",
  Activity: "#f472b6",
  Break: "#34d399",
  Logistics: "#a3a3a3",
};

const colorFor = (category) => CATEGORY_COLOR[category] || "#a3a3a3";

function Legend() {
  return (
    <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      {scheduleCategories.map((category) => (
        <span key={category} className="flex items-center gap-1.5 text-xs text-neutral-400">
          <span className="h-2 w-2 rounded-full" style={{ background: colorFor(category) }} />
          {category}
        </span>
      ))}
    </Reveal>
  );
}

function ScheduleItem({ item }) {
  const color = colorFor(item.category);
  const isKey = item.category === "Milestone" || Boolean(item.tag);

  return (
    <li className="relative pl-[68px] sm:pl-[104px]">
      {/* time */}
      <span className="absolute left-0 top-1 w-[46px] text-right font-mono text-[11px] font-semibold leading-tight text-neutral-300 sm:w-[74px] sm:text-sm">
        {item.time}
      </span>
      {/* node on the rail */}
      <span
        className="absolute left-[52px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-black sm:left-[84px]"
        style={{ background: color, boxShadow: isKey ? `0 0 12px ${color}` : "none" }}
      />

      {/* card */}
      <div
        className="surface rounded-xl border border-white/10 p-4 sm:p-5"
        style={{
          borderLeftColor: color,
          borderLeftWidth: "3px",
          backgroundImage: isKey ? `linear-gradient(90deg, ${color}1f, transparent 55%)` : undefined,
        }}
      >
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-wide"
            style={{ color, background: `${color}1f`, border: `1px solid ${color}55` }}
          >
            {item.category}
          </span>
          {item.tag && (
            <span className="rounded-full bg-[#4cdef5]/15 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wide text-[#4cdef5]">
              {item.tag}
            </span>
          )}
          {item.duration && (
            <span className="font-mono text-[11px] text-neutral-500">{item.duration}</span>
          )}
        </div>
        <h4 className="font-display text-base font-bold text-white sm:text-lg">{item.title}</h4>
        {item.location && (
          <p className="mt-0.5 text-xs font-medium text-neutral-500">{item.location}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
      </div>
    </li>
  );
}

export default function EventSchedule({ schedule }) {
  const [activeDay, setActiveDay] = useState(0);
  const current = schedule[activeDay];

  return (
    <section
      id="techsurge-schedule"
      className="mx-auto w-full max-w-4xl scroll-mt-24 px-1 py-16 sm:py-24"
    >
      <SectionIntro eyebrow="Plan of Attack" title="The 28-Hour Schedule">
        From inauguration to closing ceremony — every round, break, and milestone, mapped to the minute.
      </SectionIntro>

      <Legend />

      {/* day tabs */}
      <Reveal className="mt-10 flex flex-col items-center gap-3">
        <div className="flex gap-3 sm:gap-4">
          {schedule.map((day, i) => {
            const active = activeDay === i;
            return (
              <button
                key={day.day}
                type="button"
                onClick={() => setActiveDay(i)}
                className={`surface rounded-xl border px-6 py-2.5 font-display text-sm font-bold transition-all sm:px-9 sm:text-base ${
                  active
                    ? "border-[#4cdef5]/50 text-[#4cdef5] shadow-[0_0_22px_-4px_rgba(76,222,245,0.45)]"
                    : "border-white/10 text-neutral-300 hover:border-white/20"
                }`}
              >
                {day.day}
              </button>
            );
          })}
        </div>
        <p className="text-xs font-medium text-neutral-500 sm:text-sm">{current.subtitle}</p>
      </Reveal>

      {/* timeline */}
      <div className="relative mt-10">
        <span className="absolute left-[52px] top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent sm:left-[84px]" />
        <AnimatePresence mode="wait">
          <motion.ul
            key={current.day}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {current.items.map((item, i) => (
              <ScheduleItem key={`${item.time}-${item.title}-${i}`} item={item} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
