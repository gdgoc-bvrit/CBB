import { motion } from "framer-motion";
import BorderedButton from "./BorderedButton";
import { useCountdown } from "../hooks/useCountdown";

const EASE = [0.22, 1, 0.36, 1];

const SECONDARY_ACTION =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold font-display tracking-wide transition-colors";
const ACTION_CLASS = {
  outline: `${SECONDARY_ACTION} border border-[#4cdef5]/40 bg-[#4cdef5]/10 text-[#4cdef5] hover:bg-[#4cdef5]/20`,
  ghost: `${SECONDARY_ACTION} border border-white/15 bg-white/5 text-neutral-200 hover:bg-white/10`,
};

const isHash = (href) => href.startsWith("#");

function Unit({ value, label, live }) {
  return (
    <div className="flex flex-col items-center">
      <div className="surface relative w-[48px] overflow-hidden rounded-lg border border-white/10 py-2 sm:w-[76px] sm:py-3">
        <span
          key={live ? value : undefined}
          className={`block text-center font-mono text-2xl font-bold tabular-nums text-white sm:text-4xl ${
            live ? "animate-tick" : ""
          }`}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 font-display text-[9px] uppercase tracking-[0.18em] text-neutral-500 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function Sep({ live }) {
  return (
    <span
      className={`pt-2 font-mono text-xl sm:pt-3 sm:text-3xl ${live ? "text-[#4cdef5]/60" : "text-neutral-600"}`}
    >
      :
    </span>
  );
}

function Countdown({ target, label }) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(target);

  return (
    <div className="surface inline-flex max-w-[92vw] flex-col items-center rounded-2xl border border-white/10 px-3 py-4 sm:px-8 sm:py-5">
      <span className="eyebrow text-[10px] text-neutral-500 sm:text-[11px]">{label}</span>
      {isComplete ? (
        <p className="mt-3 font-display text-xl font-bold text-[#4cdef5] text-glow-cyan sm:text-3xl">
          The hackathon has begun
        </p>
      ) : (
        <div className="mt-3 flex items-start gap-1.5 sm:gap-3">
          <Unit value={days} label="Days" />
          <Sep />
          <Unit value={hours} label="Hrs" />
          <Sep />
          <Unit value={minutes} label="Min" />
          <Sep live />
          <Unit value={seconds} label="Sec" live />
        </div>
      )}
    </div>
  );
}

export default function FeaturedEventHero({ event }) {
  if (!event) return null;

  const year = event.title.match(/(20\d{2}|2[kK]\d{2})/)?.[0] || null;
  const title = year ? event.title.replace(/(20\d{2}|2[kK]\d{2})/gi, "").trim() : event.title;
  const actions = event.actions || [];
  const infoBits = [event.venue, event.mode, "₹100 / team · Round 1"].filter(Boolean);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-2 pb-24 pt-32 text-center sm:px-6 sm:pt-40">
      {/* soft cyan glow behind the title */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4cdef5]/10 blur-[110px] sm:h-[520px] sm:w-[520px]" />

      {event.presentedBy && (
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="eyebrow relative z-10 mb-6 text-[10px] text-neutral-400 sm:text-xs"
        >
          {event.presentedBy} · presents
        </motion.p>
      )}

      {/* title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-10 px-2"
      >
        <div className="hidden items-end justify-center gap-4 whitespace-nowrap md:flex lg:gap-6">
          <h1 className="font-brand bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent text-7xl leading-none lg:text-8xl xl:text-9xl">
            {title}
          </h1>
          {year && (
            <span className="font-brush flicker select-none text-[#4cdef5] text-glow-cyan -ml-3 origin-bottom-left rotate-[-4deg] text-[10vw] leading-none lg:-ml-5 lg:text-[8.5vw]">
              {year}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-1 md:hidden">
          <h1 className="font-brand bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent text-[13vw] leading-none">
            {title}
          </h1>
          {year && (
            <span className="font-brush flicker select-none text-[#4cdef5] text-glow-cyan text-[17vw] leading-none">
              {year}
            </span>
          )}
        </div>
      </motion.div>

      {/* tagline + sub */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        className="relative z-10 mt-6 flex flex-col items-center gap-3"
      >
        {event.tagline && (
          <p className="font-brush text-2xl tracking-wide text-neutral-200 sm:text-3xl md:text-4xl">
            {event.tagline}
          </p>
        )}
        {event.subtitle && (
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="h-px w-8 bg-white/20" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
              {event.subtitle}
            </span>
            <span className="h-px w-8 bg-white/20" />
          </div>
        )}
      </motion.div>

      {/* date pill */}
      {event.dateDisplay && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="relative z-10 mt-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-1.5 font-display text-sm font-semibold text-orange-200">
            <span aria-hidden>📅</span> {event.dateDisplay}
          </span>
        </motion.div>
      )}

      {/* countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
        className="relative z-10 mt-10"
      >
        <Countdown target={event.startDate} label={event.countdownLabel || "Starts in"} />
      </motion.div>

      {/* actions */}
      {actions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="relative z-10 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          {actions.map((action) => {
            const linkProps = isHash(action.href)
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" };
            return action.variant === "primary" ? (
              <a key={action.label} href={action.href} {...linkProps}>
                <BorderedButton>{action.label}</BorderedButton>
              </a>
            ) : (
              <a
                key={action.label}
                href={action.href}
                {...linkProps}
                className={ACTION_CLASS[action.variant] || ACTION_CLASS.ghost}
              >
                {action.label}
              </a>
            );
          })}
        </motion.div>
      )}

      {/* info strip */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-neutral-500"
      >
        {infoBits.map((bit, i) => (
          <span key={bit} className="flex items-center gap-3">
            {i > 0 && <span className="text-neutral-700">•</span>}
            {bit}
          </span>
        ))}
      </motion.p>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <svg className="animate-scroll-cue h-6 w-6 text-[#4cdef5]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
