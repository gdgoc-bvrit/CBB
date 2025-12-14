import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BorderedButton from "./BorderedButton";

/**
 * EventCard component - displays an upcoming event card
 * @param {Object} event - Event object with title, category, startDate, endDate, venue, mode, description, registrationLink, poster
 */
export default function EventCard({ event }) {
  const [countdown, setCountdown] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    if (!event.startDate) return;

    const updateCountdown = () => {
      const now = new Date();
      const startDate = new Date(event.startDate);
      const difference = startDate - now;

      if (difference <= 0) {
        setCountdown("Event Started!");
        setShowCountdown(false);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      // Show countdown if within 7 days
      if (days <= 7) {
        setShowCountdown(true);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setShowCountdown(false);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [event.startDate]);
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatTimeRange = (startDate, endDate) => {
    try {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const startTime = start.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const endTime = end.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${startTime} - ${endTime}`;
    } catch {
      return "";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      workshop: "bg-blue-400/10 border-blue-300 text-blue-300",
      contest: "bg-purple-400/10 border-purple-300 text-purple-300",
      hackathon: "bg-orange-400/10 border-orange-300 text-orange-300",
    };
    return colors[category?.toLowerCase()] || "bg-neutral-400/10 border-neutral-300 text-neutral-300";
  };

  return (
    <div className="relative w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden h-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Side - Poster */}
        {event.poster && (
          <div className="w-full md:w-2/5 lg:w-1/2 h-64 md:h-auto overflow-hidden flex-shrink-0">
            <img
              src={event.poster}
              alt={event.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Right Side - Content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col items-center text-center">
          {/* Category Badge */}
          {event.category && (
            <div className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 ${getCategoryColor(event.category)}`}>
              {event.category.toUpperCase()}
            </div>
          )}
          
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            {event.title}
          </h3>
          
          {/* Countdown Timer - Show if within 7 days */}
          {showCountdown && countdown && (
            <div className="mb-6 p-4 sm:p-5 bg-blue-500/10 border border-blue-300/30 rounded-lg w-full">
              <p className="text-xs sm:text-sm text-blue-300 mb-3 font-semibold uppercase tracking-wider text-center">
                Starts in
              </p>
              <div className="flex gap-3 sm:gap-4 md:gap-5 text-center font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4cdef5] font-bold justify-center">
                {countdown.split(" ").map((unit, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]"
                  >
                    <span className="text-shadow-sm font-bold">
                      {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[0]}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base text-neutral-400 tracking-tight font-bold mt-1">
                      {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[1]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Date & Time */}
          <div className="mb-4 space-y-2 w-full">
            {event.startDate && (
              <div className="text-sm sm:text-base text-neutral-300">
                <span className="font-semibold text-neutral-200">📅 Date:</span>{" "}
                <span className="text-neutral-400">{formatDate(event.startDate)}</span>
              </div>
            )}
            
            {event.startDate && event.endDate && (
              <div className="text-sm sm:text-base text-neutral-300">
                <span className="font-semibold text-neutral-200">🕐 Time:</span>{" "}
                <span className="text-neutral-400">{formatTimeRange(event.startDate, event.endDate)}</span>
              </div>
            )}
          </div>
          
          {/* Venue & Mode */}
          <div className="mb-5 flex flex-wrap gap-3 sm:gap-4 justify-center">
            {event.venue && (
              <div className="text-sm sm:text-base text-neutral-300 bg-neutral-800/50 px-3 py-2 rounded-lg">
                <span className="font-semibold">📍</span> {event.venue}
              </div>
            )}
            {event.mode && (
              <div className="text-sm sm:text-base text-neutral-300 bg-neutral-800/50 px-3 py-2 rounded-lg">
                <span className="font-semibold">🌐</span> {event.mode}
              </div>
            )}
          </div>
          
          {/* Description */}
          {event.description && (
            <p className="text-sm sm:text-base text-neutral-300 mb-6 line-clamp-4 flex-grow">
              {event.description}
            </p>
          )}
          
          {/* Register Button */}
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-auto"
            >
              <BorderedButton>Register Now</BorderedButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

