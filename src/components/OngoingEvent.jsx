import CountdownTimer from "./CountdownTimer";

/**
 * OngoingEvent component - displays the currently ongoing event
 * @param {Object} event - Event object
 */
export default function OngoingEvent({ event }) {
  if (!event) return null;

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

  return (
    <section className="min-h-screen mt-8 sm:mt-12 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 sm:py-8">
      {/* Title Container */}
      <div className="relative w-full sm:w-fit mt-2 sm:mt-4">
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-green-200/10 text-green-300 backdrop-blur-sm px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
          Ongoing Event
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block relative mt-6 sm:mt-8">
          <span className="relative left-[-15%] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 pb-2 text-[6vw] leading-[1.2] font-[Revamped] text-transparent">
            {event.title}
          </span>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden relative mt-6">
          <div className="flex flex-col items-center">
            <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 pb-1 text-[10vw] leading-[1.1] font-[Revamped] text-transparent">
              {event.title}
            </span>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="mt-6 text-center">
        {event.venue && (
          <p className="text-base sm:text-lg text-neutral-400 mb-2">
            📍 {event.venue}
          </p>
        )}
        {event.mode && (
          <p className="text-base sm:text-lg text-neutral-400 mb-2">
            🌐 {event.mode}
          </p>
        )}
        {event.endDate && (
          <p className="text-sm sm:text-base text-neutral-500">
            Ends on {formatDate(event.endDate)}
          </p>
        )}
      </div>

      {/* Countdown Timer */}
      {event.endDate && (
        <CountdownTimer targetDate={event.endDate} label="Event ends in" />
      )}
    </section>
  );
}

