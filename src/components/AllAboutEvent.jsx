import { useState } from "react";
import { motion } from "framer-motion";
import HeadingNText from "./HeadingNText";
import EventDetailsModal from "./EventDetailsModal";

/**
 * AllAboutEvent - Section showing sub-events of the featured event
 * @param {Object} featuredEvent - The main/featured event
 * @param {Array} subEvents - Array of sub-events related to the featured event
 */
export default function AllAboutEvent({ featuredEvent, subEvents }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (!featuredEvent || !subEvents || subEvents.length === 0) {
    return null;
  }

  const handlePosterClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16">
        {/* Heading */}
        <HeadingNText title={`All about ${featuredEvent.title}`}>
          <span className="text-center block max-w-4xl mx-auto">
            {featuredEvent.description || `${featuredEvent.title} consists of ${subEvents.length} main event${subEvents.length > 1 ? 's' : ''}`}
          </span>
        </HeadingNText>

        {/* Sub-Event Posters Grid */}
        <div className="mt-12 w-full max-w-5xl">
          <div className={`grid gap-8 sm:gap-10 ${
            subEvents.length === 1 
              ? "grid-cols-1 max-w-md mx-auto" 
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
          }`}>
            {subEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => handlePosterClick(event)}
              >
                {/* "Click Me" Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 z-10 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300">
                  Click Me
                </div>

                {/* Poster Card */}
                <div className="relative overflow-hidden rounded-xl border-2 border-white/10 group-hover:border-[#4cdef5]/50 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#4cdef5]/20">
                  {event.poster ? (
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        {event.theme && (
                          <p className="text-blue-300 text-sm">{event.theme}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg">Click to view details</p>
                      <div className="mt-2 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-[#4cdef5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-[#4cdef5] text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={closeModal}
      />
    </>
  );
}
