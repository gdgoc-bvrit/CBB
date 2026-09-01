import Reveal from "./Reveal";

/**
 * Consistent section header for the Events page: tracked eyebrow, display title,
 * accent rule, and optional lead paragraph.
 */
export default function SectionIntro({ eyebrow, title, children, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <Reveal className={`flex w-full flex-col ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow text-xs sm:text-sm text-[#4cdef5]/80">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-transparent sm:text-4xl lg:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text">
        {title}
      </h2>
      <span
        className={`mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#4cdef5] to-transparent ${
          align === "left" ? "" : "mx-auto"
        }`}
      />
      {children && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {children}
        </p>
      )}
    </Reveal>
  );
}
