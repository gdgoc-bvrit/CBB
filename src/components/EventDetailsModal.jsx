import { motion, AnimatePresence } from "framer-motion";
import BorderedButton from "./BorderedButton";

/**
 * EventDetailsModal - Modal popup showing detailed event information
 * @param {Object} event - Sub-event object with detailed information
 * @param {boolean} isOpen - Whether modal is open
 * @param {Function} onClose - Function to close modal
 */
export default function EventDetailsModal({ event, isOpen, onClose }) {
  if (!event) return null;

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatTime = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-10 md:inset-20 z-[90] overflow-auto"
          >
            <div className="relative w-full max-w-6xl mx-auto bg-[#0e0e0e] rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-neutral-800/80 hover:bg-neutral-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-neutral-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Poster */}
                {event.poster && (
                  <div className="w-full md:w-2/5 bg-neutral-900 flex items-center justify-center p-6 md:p-8">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-auto max-w-md rounded-lg shadow-lg"
                    />
                  </div>
                )}

                {/* Right Side - Details */}
                <div className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh]">
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4cdef5] mb-3">
                    {event.title}
                  </h2>

                  {/* Theme */}
                  {event.theme && (
                    <p className="text-lg sm:text-xl text-blue-300 italic mb-6">
                      {event.theme}
                    </p>
                  )}

                  {/* Main Description */}
                  {event.detailedDescription && (
                    <div className="mb-6">
                      <p className="text-neutral-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                        {event.detailedDescription}
                      </p>
                    </div>
                  )}

                  {/* Event Details Grid */}
                  <div className="space-y-4 mb-6">
                    {event.startDate && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">📅 Date:</span>
                        <span className="text-neutral-200">{formatDate(event.startDate)}</span>
                      </div>
                    )}

                    {event.startDate && event.endDate && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">🕐 Time:</span>
                        <span className="text-neutral-200">
                          {formatTime(event.startDate)} - {formatTime(event.endDate)}
                        </span>
                      </div>
                    )}

                    {event.venue && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">📍 Venue:</span>
                        <span className="text-neutral-200">{event.venue}</span>
                      </div>
                    )}

                    {event.mode && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">🌐 Mode:</span>
                        <span className="text-neutral-200">{event.mode}</span>
                      </div>
                    )}

                    {event.prizeInfo && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">🏆 Prize:</span>
                        <span className="text-neutral-200">{event.prizeInfo}</span>
                      </div>
                    )}

                    {event.stages && (
                      <div className="flex items-start">
                        <span className="text-neutral-400 font-semibold min-w-[120px]">📊 Stages:</span>
                        <span className="text-neutral-200">{event.stages}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    {event.problemStatementLink && (
                      <a
                        href={event.problemStatementLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-neutral-200 rounded-full text-center font-semibold transition-all"
                      >
                        View Problem Statements
                      </a>
                    )}

                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BorderedButton>Register for {event.title}</BorderedButton>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
