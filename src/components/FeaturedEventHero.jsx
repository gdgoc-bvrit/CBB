import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BorderedButton from "./BorderedButton";

export default function FeaturedEventHero({ event }) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (!event?.startDate) return;

    const updateCountdown = () => {
      const now = new Date();
      const start = new Date(event.startDate);
      const diff = start - now;

      if (diff <= 0) {
        setCountdown("Event Started!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [event?.startDate]);

  if (!event) return null;

  const extractYear = (title) =>
    title.match(/(20\d{2}|2[kK]\d{2})/)?.[0] || null;

  const cleanTitle = (title) =>
    title.replace(/(20\d{2}|2[kK]\d{2})/gi, "").trim();

  const year = extractYear(event.title);
  const title = year ? cleanTitle(event.title) : event.title;

  const hasValidLogo =
    event.logo &&
    event.logo.trim() !== "" &&
    event.logo !== "undefined" &&
    event.logo !== "null";

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center
                 px-4 sm:px-6 pt-36 sm:pt-40 md:pt-44 pb-20 text-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0 [background-size:40px_40px]
          [background-image:linear-gradient(to_right,#404040_1px,transparent_1px),
          linear-gradient(to_bottom,#404040_1px,transparent_1px)]"
        />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mb-6"
      >
        <span className="px-6 py-2 rounded-full text-sm sm:text-base font-semibold
          uppercase tracking-wider border border-blue-300/30
          bg-blue-500/10 text-blue-300 backdrop-blur-sm">
          Upcoming Event
        </span>
      </motion.div>

      {/* Title / Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10 px-4"
      >
        {hasValidLogo ? (
          <img
            src={event.logo}
            alt={event.title}
            className="max-h-[280px] max-w-[90vw] mx-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ) : (
          <>
            {/* 🖥️ DESKTOP — single line */}
            <div className="hidden md:inline-flex items-end gap-4 lg:gap-6 whitespace-nowrap">
              <h1
                className="font-[Revamped] leading-tight
                           bg-gradient-to-b from-neutral-200 to-neutral-500
                           bg-clip-text text-transparent
                           text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {title}
              </h1>

              {year && (
                <span
                  className="
                    tracking-tighter flicker
                    text-[#4cdef5d7] font-[CyberBrush]
                    leading-none select-none

                    text-[14vw] md:text-[11vw] lg:text-[9vw]
                    rotate-[-4deg] origin-bottom-left
                    -ml-4 md:-ml-6 lg:-ml-8
                  "
                >
                  {year}
                </span>
              )}
            </div>

            {/* 📱 MOBILE — stacked */}
            <div className="md:hidden flex flex-col items-center gap-4">
              <h1
                className="text-5xl sm:text-6xl font-[Revamped]
                           bg-gradient-to-b from-neutral-200 to-neutral-500
                           bg-clip-text text-transparent
                           leading-tight text-center"
              >
                {title}
              </h1>

              {year && (
                <span
                  className="
                    tracking-tighter flicker
                    text-[#4cdef5d7] font-[CyberBrush]
                    leading-none select-none
                    text-[20vw]
                  "
                >
                  {year}
                </span>
              )}
            </div>
          </>
        )}
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-10"
      >
        <p className="mb-2 text-sm sm:text-base uppercase tracking-wider text-neutral-400">
          Starts In
        </p>
        <div className="font-mono font-bold text-[#4cdef5]
                        text-4xl sm:text-5xl md:text-6xl">
          {countdown || "Loading..."}
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4"
      >
        {event.brochureLink && (
          <a
            href={event.brochureLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-neutral-600
                       bg-neutral-800/50 hover:bg-neutral-700/50
                       text-neutral-200 font-semibold transition"
          >
            Download Brochure
          </a>
        )}

        {event.registrationLink && (
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            <BorderedButton>Register Now</BorderedButton>
          </a>
        )}
      </motion.div>

      {/* Location & Mode */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-14 flex flex-col sm:flex-row gap-6"
      >
        {event.venue && (
          <div className="px-6 py-3 rounded-xl border border-white/10
                          bg-neutral-900/40 backdrop-blur
                          text-lg sm:text-xl font-semibold
                          text-[#4cdef5] shadow-[0_0_20px_#4cdef533]">
            📍 {event.venue}
          </div>
        )}

        {event.mode && (
          <div className="px-6 py-3 rounded-xl border border-white/10
                          bg-neutral-900/40 backdrop-blur
                          text-lg sm:text-xl font-semibold
                          text-[#4cdef5] shadow-[0_0_20px_#4cdef533]">
            🌐 {event.mode}
          </div>
        )}
      </motion.div>

      {/* Description */}
      {/* {event.description && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10 mt-20 max-w-5xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl
                         font-bold text-neutral-200 mb-6">
            All about {title}
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      )} */}
    </section>
  );
}
