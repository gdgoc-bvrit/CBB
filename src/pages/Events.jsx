import Footer from "../components/Footer";
import { TimelineDemo } from "../components/Timeline";
import HeadingNText from "../components/HeadingNText";
import FeaturedEventHero from "../components/FeaturedEventHero";
import EventCard from "../components/EventCard";
import AllAboutEvent from "../components/AllAboutEvent";
import { useState, useEffect } from "react";
import { fetchEventsFromSheet, classifyEvents, getSubEvents } from "../utils/fetchEvents";

function Events() {
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [otherUpcomingEvents, setOtherUpcomingEvents] = useState([]);
  const [subEvents, setSubEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedEvents = await fetchEventsFromSheet();
        console.log("📥 Fetched events from sheet:", fetchedEvents);
        
        setAllEvents(fetchedEvents);
        
        // Classify events
        const { featured, otherUpcoming } = classifyEvents(fetchedEvents);
        console.log("🔄 Classification result - Featured:", featured, "Other Upcoming:", otherUpcoming);
        setFeaturedEvent(featured);
        setOtherUpcomingEvents(otherUpcoming);
        
        // Get sub-events for featured event
        if (featured && featured.id) {
          const featuredSubEvents = getSubEvents(fetchedEvents, featured.id);
          console.log("🔗 Sub-events for featured event:", featuredSubEvents);
          setSubEvents(featuredSubEvents);
        }
      } catch (err) {
        console.error("Error loading events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center bg-black scrollbar-hide min-h-screen">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white scrollbar-hide">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 scrollbar-hide">

          {/* Floating Icons - Responsive positioning */}
          {/* <div className="absolute z-0 inset-0 pointer-events-none hidden lg:block">
            <HiOutlineComputerDesktop className="text-green-600/80 bg-green-700/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-left absolute top-[9%] left-[8%]" />
            <HiOutlineUsers className="text-purple-200/80 bg-purple-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-right absolute top-[2%] left-[75%]" />
            <HiOutlinePresentationChartBar className="text-orange-200/80 bg-orange-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-down absolute top-[10%] left-[74%]" />
            <HiOutlineGlobeAlt className="text-blue-300/80 bg-blue-500/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-up absolute top-[3%] left-[18%]" />
          </div> */}

          {/* Loading State */}
          {loading && (
            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl text-neutral-400 mb-4">Loading events...</div>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4cdef5] mx-auto"></div>
              </div>
            </section>
          )}

          {/* Error State */}
          {error && !loading && (
            <section className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl text-red-400 mb-4">{error}</div>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors"
                >
                  Retry
                </button>
              </div>
            </section>
          )}

          {/* Content when loaded */}
          {!loading && !error && (
            <>
              {/* SECTION 1: Featured Event (Hero) */}
              {featuredEvent && <FeaturedEventHero event={featuredEvent} />}

              {/* SECTION 1.5: All About {EventName} - Sub-Events */}
              {featuredEvent && subEvents.length > 0 && (
                <AllAboutEvent featuredEvent={featuredEvent} subEvents={subEvents} />
              )}

              {/* SECTION 2: Other Upcoming Events */}
              {otherUpcomingEvents.length > 0 && (
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
                  <HeadingNText title="Other Upcoming Events">
                    <span className="text-center block">
                      Don't miss out on these exciting events coming soon!
                    </span>
                  </HeadingNText>

                  <div className="mt-12 w-full max-w-6xl">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                      {otherUpcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* No Events Message */}
              {!featuredEvent && otherUpcomingEvents.length === 0 && (
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl text-neutral-400">
                      No upcoming events at the moment. Stay tuned for exciting announcements!
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION 3: Past Events */}
              <section className="min-h-screen flex items-start justify-center w-full py-8 sm:py-12">
                <TimelineDemo />
              </section>
            </>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Events;
