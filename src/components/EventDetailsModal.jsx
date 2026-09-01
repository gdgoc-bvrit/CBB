import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import BorderedButton from "./BorderedButton";

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

const DETAIL_ROWS = [
  { key: "dateDisplay", label: "When" },
  { key: "venue", label: "Venue" },
  { key: "mode", label: "Mode" },
  { key: "teamSize", label: "Team size" },
  { key: "fee", label: "Fee" },
  { key: "prizeInfo", label: "Prize" },
  { key: "stages", label: "Stages" },
];

/**
 * EventDetailsModal - near-fullscreen panel: the poster stays fixed on the left
 * while the details column on the right scrolls independently.
 */
export default function EventDetailsModal({ event, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return undefined;

    const restoreFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      // Trap Tab within the dialog.
      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    // Move focus into the dialog once it's mounted.
    const raf = requestAnimationFrame(() => {
      dialogRef.current?.querySelector(FOCUSABLE)?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(raf);
      if (restoreFocus instanceof HTMLElement) restoreFocus.focus();
    };
  }, [isOpen]);

  if (!event) return null;
  const accent = event.accent || "#4cdef5";
  const rows = DETAIL_ROWS.filter((row) => event[row.key]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={event.title}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed inset-x-3 top-[2.5vh] bottom-[2.5vh] z-[210] mx-auto flex w-auto max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0b] shadow-2xl sm:inset-x-6 sm:top-[5vh] sm:bottom-[5vh] md:flex-row"
          >
            {/* close — always visible */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-neutral-200 backdrop-blur transition-colors hover:bg-black/80 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* LEFT — fixed poster */}
            {event.poster && (
              <div
                className="relative flex h-[28vh] flex-shrink-0 items-center justify-center overflow-hidden border-b border-white/10 bg-black p-4 md:h-auto md:w-[42%] md:border-b-0 md:border-r md:p-7"
              >
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 45%, ${accent}22, transparent 65%)` }}
                />
                <img
                  src={event.poster}
                  alt={`${event.title} poster`}
                  decoding="async"
                  className="relative max-h-full max-w-full rounded-lg object-contain"
                  style={{ boxShadow: `0 0 44px -10px ${accent}` }}
                />
              </div>
            )}

            {/* RIGHT — scrolls */}
            <div className="flex min-h-0 flex-1 flex-col">
              {/* header */}
              <div className="flex flex-wrap items-center gap-2.5 border-b border-white/10 px-5 py-4 pr-14 sm:px-7">
                <h2 className="font-display text-xl font-bold sm:text-2xl" style={{ color: accent }}>
                  {event.title}
                </h2>
                {event.category && (
                  <span
                    className="rounded-full px-2.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-wide"
                    style={{ color: accent, background: `${accent}1f`, border: `1px solid ${accent}55` }}
                  >
                    {event.category}
                  </span>
                )}
              </div>

              {/* scroll body */}
              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
                {event.theme && (
                  <p className="font-brush text-lg tracking-wide" style={{ color: accent }}>
                    {event.theme}
                  </p>
                )}

                {event.detailedDescription && (
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-neutral-300 sm:text-base">
                    {event.detailedDescription}
                  </p>
                )}

                {event.perks?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {event.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: accent }}
                        />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {rows.length > 0 && (
                  <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:grid-cols-2 sm:p-5">
                    {rows.map((row) => (
                      <div key={row.key}>
                        <dt className="font-display text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                          {row.label}
                        </dt>
                        <dd className="mt-0.5 text-sm text-neutral-200">{event[row.key]}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {event.steps?.length > 0 && (
                  <div className="mt-7">
                    <h3 className="font-display text-base font-bold text-white sm:text-lg">How to register</h3>
                    <ol className="mt-4 space-y-4">
                      {event.steps.map((step, i) => (
                        <li key={step.title} className="flex gap-3.5">
                          <span
                            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                            style={{ color: accent, background: `${accent}1a`, border: `1px solid ${accent}55` }}
                          >
                            {i + 1}
                          </span>
                          <div className="pt-0.5">
                            <p className="font-display text-sm font-semibold text-neutral-100">{step.title}</p>
                            {step.description && (
                              <p className="mt-1 text-sm text-neutral-400">{step.description}</p>
                            )}
                            {step.href && (
                              <a
                                href={step.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                                style={{ color: accent }}
                              >
                                {step.linkLabel || "Open link"} ↗
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* footer actions */}
              <div className="flex flex-col gap-3 border-t border-white/10 bg-[#0b0b0b] px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-7">
                {event.problemStatementLink && (
                  <a
                    href={event.problemStatementLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-center font-display text-sm font-semibold text-neutral-200 transition-colors hover:bg-white/10"
                  >
                    Problem Statement ↗
                  </a>
                )}
                {event.registrationLink && (
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    <BorderedButton>Register for {event.title}</BorderedButton>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
