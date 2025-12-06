import BorderedButton from "../components/BorderedButton";
import Footer from "../components/Footer";
import { TimelineDemo } from "../components/Timeline";
import ScheduleTable from "../components/ScheduleTable";
import HeadingNText from "../components/HeadingNText";
import {
  HiOutlineComputerDesktop,
  HiOutlineUsers,
  HiOutlinePresentationChartBar,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PillNavbar from "../components/PillNavbar";
import { IoClose } from "react-icons/io5";

function Events() {
  const [activeModal, setActiveModal] = useState(null);
  const whatIsRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  
  // Original schedule format for ScheduleTable component
  const schedule = [
    // Day 1
    [
      { from: "09:30 AM", to: "10:00 AM", activity: "Assembly" },
      { from: "10:00 AM", to: "10:30 AM", activity: "Inauguration" },
      { from: "10:30 AM", to: "12:30 PM", activity: "Round 1: Srishti" },
      { from: "12:30 PM", to: "01:00 PM", activity: "Round 1 Review" },
      { from: "01:00 PM", to: "02:00 PM", activity: "Lunch" },
      { from: "02:00 PM", to: "04:00 PM", activity: "Round 2: Sankalp" },
      { from: "04:00 PM", to: "04:15 PM", activity: "Break" },
      { from: "04:15 PM", to: "07:30 PM", activity: "Round 2 (Continued)" },
      { from: "07:30 PM", to: "08:30 PM", activity: "Dinner" },
      { from: "08:30 PM", to: "09:00 PM", activity: "Round 2 Review" },
      { from: "09:00 PM", to: "12:00 AM", activity: "Round 3: Samarth" },
    ],

    // Day 2
    [
      { from: "12:00 AM", to: "02:00 AM", activity: "Activities + Refreshments" },
      { from: "02:00 AM", to: "07:00 AM", activity: "Round 3 (Continued)" },
      { from: "07:00 AM", to: "09:00 AM", activity: "Morning Break" },
      { from: "09:00 AM", to: "09:30 AM", activity: "Round 3 (Continued)" },
      { from: "09:30 AM", to: "11:15 AM", activity: "Final Review & Announcement of winners" },
      { from: "11:15 AM", to: "11:30 AM", activity: "Closing Ceremony & Vote of Thanks" },
      { from: "11:30 AM", to: "12:00 PM", activity: "Assemble for Drishti" },
      { from: "12:00 PM", to: "03:00 PM", activity: "Participants pitch their ideas" },
      { from: "03:00 PM", to: "03:30 PM", activity: "Announcement of winners & Vote of Thanks" }
    ]
  ];
  
  // Timer schedule data based on the provided images
  const timerSchedule = [
    // Day 1 (29-07-2025)
    { round: "Round-1 Srishti", start: "2025-07-29T11:00:00", end: "2025-07-29T16:00:00" },
    { round: "Round 1 Review", start: "2025-07-29T14:00:00", end: "2025-07-29T16:00:00" },
    { round: "Round-2 Sankalp", start: "2025-07-29T16:40:00", end: "2025-07-29T21:30:00" },
    { round: "Round 2 Review", start: "2025-07-29T20:30:00", end: "2025-07-29T21:30:00" },
    { round: "Round-3 Samarth", start: "2025-07-29T22:30:00", end: "2025-07-30T10:00:00" },
    // Day 2 (30-07-2025)
    { round: "Round 3 Review", start: "2025-07-30T09:00:00", end: "2025-07-30T10:00:00" },
    { round: "Finalizing teams", start: "2025-07-30T10:00:00", end: "2025-07-30T10:30:00" },
    { round: "Prize Distribution", start: "2025-07-30T11:00:00", end: "2025-07-30T12:00:00" }
  ];

  const eventDate = new Date("2025-07-30T12:00:00"); // Hackathon ends at 30-07-25 12:00 PM (Prize Distribution)
  
  const [timeLeft, setTimeLeft] = useState("");
  const [currentRound, setCurrentRound] = useState("");
  const [nextRound, setNextRound] = useState("");
  const [nextRoundTime, setNextRoundTime] = useState("");

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [activeModal]);

  useEffect(() => {
    if (location.hash === "#about" && whatIsRef.current) {
      setTimeout(() => {
        whatIsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === '#what-is' && whatIsRef.current) {
      whatIsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hackathonEnd = eventDate - now;
      
      // Update main countdown (Hackathon end)
      if (hackathonEnd <= 0) {
        setTimeLeft("Hackathon Ended!");
        setCurrentRound("Event Completed");
        setNextRound("");
        setNextRoundTime("");
        clearInterval(interval);
      } else {
        const days = Math.floor(hackathonEnd / (1000 * 60 * 60 * 24));
        const hours = Math.floor((hackathonEnd / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((hackathonEnd / (1000 * 60)) % 60);
        const seconds = Math.floor((hackathonEnd / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        
        // Find current and next round
        let currentRoundFound = false;
        let nextRoundFound = false;
        
        // First pass: Check for reviews/evaluations (they have priority)
        for (let i = 0; i < timerSchedule.length; i++) {
          const round = timerSchedule[i];
          const roundStart = new Date(round.start);
          const roundEnd = new Date(round.end);
          
          // Check if we're in this round
          if (now >= roundStart && now <= roundEnd) {
            // Prioritize reviews/evaluations over main rounds
            if (round.round.includes("Review") || round.round.includes("Evaluation")) {
              setCurrentRound(round.round);
              currentRoundFound = true;
              
              // Find next round
              if (i + 1 < timerSchedule.length) {
                const nextRoundData = timerSchedule[i + 1];
                setNextRound(nextRoundData.round);
                const nextStart = new Date(nextRoundData.start);
                const timeToNext = nextStart - now;
                const hours = Math.floor((timeToNext / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeToNext / (1000 * 60)) % 60);
                const seconds = Math.floor((timeToNext / 1000) % 60);
                setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                nextRoundFound = true;
              } else {
                // If this is the last round, show event end
                setNextRound("Event Ends");
                const timeToEnd = eventDate - now;
                const hours = Math.floor((timeToEnd / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeToEnd / (1000 * 60)) % 60);
                const seconds = Math.floor((timeToEnd / 1000) % 60);
                setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                nextRoundFound = true;
              }
              break;
            }
          }
        }
        
        // Second pass: If no review/evaluation found, check for main rounds
        if (!currentRoundFound) {
          for (let i = 0; i < timerSchedule.length; i++) {
            const round = timerSchedule[i];
            const roundStart = new Date(round.start);
            const roundEnd = new Date(round.end);
            
            // Check if we're in this round
            if (now >= roundStart && now <= roundEnd) {
              setCurrentRound(round.round);
              currentRoundFound = true;
              
              // Find next round
              if (i + 1 < timerSchedule.length) {
                const nextRoundData = timerSchedule[i + 1];
                setNextRound(nextRoundData.round);
                const nextStart = new Date(nextRoundData.start);
                const timeToNext = nextStart - now;
                const hours = Math.floor((timeToNext / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeToNext / (1000 * 60)) % 60);
                const seconds = Math.floor((timeToNext / 1000) % 60);
                setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                nextRoundFound = true;
              } else {
                // If this is the last round, show event end
                setNextRound("Event Ends");
                const timeToEnd = eventDate - now;
                const hours = Math.floor((timeToEnd / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeToEnd / (1000 * 60)) % 60);
                const seconds = Math.floor((timeToEnd / 1000) % 60);
                setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                nextRoundFound = true;
              }
              break;
            }
            
            // Check if this round is next
            if (!currentRoundFound && now < roundStart) {
              if (!nextRoundFound) {
                setNextRound(round.round);
                const timeToNext = roundStart - now;
                const hours = Math.floor((timeToNext / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeToNext / (1000 * 60)) % 60);
                const seconds = Math.floor((timeToNext / 1000) % 60);
                setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                nextRoundFound = true;
              }
            }
          }
        }
        
        // If no current round found, check if event hasn't started or has ended
        if (!currentRoundFound) {
          const firstRound = timerSchedule[0];
          const lastRound = timerSchedule[timerSchedule.length - 1];
          const firstStart = new Date(firstRound.start);
          const lastEnd = new Date(lastRound.end);
          
          if (now < firstStart) {
            setCurrentRound("Event Not Started");
            if (!nextRoundFound) {
              setNextRound(firstRound.round);
              const timeToFirst = firstStart - now;
              const hours = Math.floor((timeToFirst / (1000 * 60 * 60)) % 24);
              const minutes = Math.floor((timeToFirst / (1000 * 60)) % 60);
              const seconds = Math.floor((timeToFirst / 1000) % 60);
              setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
            }
          } else if (now > lastEnd) {
            setCurrentRound("Event Completed");
            setNextRound("");
            setNextRoundTime("");
          } else {
            // Find the most recent round that has ended
            for (let i = timerSchedule.length - 1; i >= 0; i--) {
              const round = timerSchedule[i];
              const roundEnd = new Date(round.end);
              if (now > roundEnd) {
                setCurrentRound(round.round);
                // Find next round
                if (i + 1 < timerSchedule.length) {
                  const nextRoundData = timerSchedule[i + 1];
                  setNextRound(nextRoundData.round);
                  const nextStart = new Date(nextRoundData.start);
                  const timeToNext = nextStart - now;
                  const hours = Math.floor((timeToNext / (1000 * 60 * 60)) % 24);
                  const minutes = Math.floor((timeToNext / (1000 * 60)) % 60);
                  const seconds = Math.floor((timeToNext / 1000) % 60);
                  setNextRoundTime(`${hours}h ${minutes}m ${seconds}s`);
                }
                break;
              }
            }
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-hidden scrollbar-hide h-screen">
      <PillNavbar />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white scrollbar-hide h-full overflow-hidden">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 scrollbar-hide h-full overflow-hidden">

        {/* Floating Icons - Responsive positioning */}
        <div className="absolute z-0 inset-0 pointer-events-none hidden lg:block">
          <HiOutlineComputerDesktop className="text-green-600/80 bg-green-700/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-left absolute top-[9%] left-[8%]" />
          <HiOutlineUsers className="text-purple-200/80 bg-purple-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-right absolute top-[2%] left-[75%]" />
          <HiOutlinePresentationChartBar className="text-orange-200/80 bg-orange-400/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-down absolute top-[10%] left-[74%]" />
          <HiOutlineGlobeAlt className="text-blue-300/80 bg-blue-500/10 backdrop-blur-md rounded-xl p-3 lg:p-4 text-4xl lg:text-6xl animate-float-up absolute top-[3%] left-[18%]" />
        </div>



<section className="min-h-screen mt-8 sm:mt-12 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 sm:py-8">
  {/* Title Container */}
  <div className="relative w-full sm:w-fit mt-2 sm:mt-4">
    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-blue-200/10 text-blue-300 backdrop-blur-sm px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
      Upcoming Event
    </div>

    {/* Desktop Layout */}
    <div className="hidden sm:block relative mt-6 sm:mt-8">
      <span className="relative left-[-15%] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 pb-2 text-[6vw] leading-[1.2] font-[Revamped] text-transparent">
        TechSurge
      </span>
      <span className="tracking-tighter flicker absolute top-[45%] -translate-y-1/2 left-[75%] text-[8vw] text-[#4cdef5d7] px-8 font-[CyberBrush]">
        2k25
      </span>
    </div>

    {/* Mobile Layout */}
    <div className="block sm:hidden relative mt-6">
      <div className="flex flex-col items-center">
        <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 pb-1 text-[10vw] leading-[1.1] font-[Revamped] text-transparent">
          TechSurge
        </span>
        <span className="tracking-tighter flicker text-[12vw] text-[#4cdef5d7] font-[CyberBrush] -mt-2">
          2k25
        </span>
      </div>
    </div>
  </div>

  {/* Countdown Timer */}
  <div className="text-center w-full flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-widest text-neutral-400 mb-3 sm:mb-4 md:mb-6 font-bold">
      Hackathon ends in
    </p>
    <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-center font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#4cdef5] font-bold">
      {timeLeft.split(" ").map((unit, i) => (
        <motion.div
          key={i}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <span className="text-shadow-sm font-bold">
            {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[0]}
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-neutral-400 tracking-tight font-bold">
            {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[1]}
          </span>
        </motion.div>
      ))}
    </div>
    
    {/* Next Round Timer */}
    <div className="mt-4 sm:mt-6 md:mt-8 w-full flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-widest text-neutral-400 font-bold">
        {nextRound.includes("Review") ? "Samarth Review starts in:" : nextRound.includes("Evaluation") ? "Evaluation starts in:" : "Next Round starts in:"}
      </p>
      <div className="flex gap-2 sm:gap-3 md:gap-4 text-center font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-orange-400 font-bold">
        {nextRoundTime.split(" ").map((unit, i) => (
          <motion.div
            key={i}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <span className="text-shadow-sm font-bold">
              {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[0]}
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-neutral-400 tracking-tight font-bold">
              {unit.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/)[1]}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* About Section - Responsive */}
        <section id="what-is" ref={whatIsRef} className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
          <HeadingNText title="All about TechSurge 2k25">
            <span className="text-center sm:text-left block">
              TechSurge is an annual techfest conducted at BVRIT Narsapur by the
              Department of Computer Science and Engineering, hosted by the CBB
              club. Spanning over two exciting days, the event brings together
              innovation, creativity, and collaboration through a variety of
              technical and cultural activities.
            </span>
          </HeadingNText>
          
          {/* Badge - Responsive */}
          <div className="mt-8 sm:mt-12 bg-blue-400/20 text-blue-300 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-md font-medium backdrop-blur-sm shadow-md text-center">
            TechSurge consists of 2 main events
          </div>
          
          {/* Event Cards - Responsive grid */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6">
            {[
              { title: "Vyoma", image: "/event-posters/Vyoma.PNG", glow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" },
              { title: "Drishti", image: "/event-posters/Drishti.PNG", glow: "hover:shadow-[0_0_15px_rgba(93,188,252,0.4)]" }
            ].map(({ title, image, glow }, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Click Me Pill - Sticker Style */}
                <div className="mb-[-14px] z-10">
                  <div className="inline-block bg-orange-400/20 text-orange-300 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-md font-medium backdrop-blur-xs shadow-md text-center rotate-[-20deg]">
                    Click Me
                  </div>
                </div>

                {/* Poster Card */}
                <div
                  onClick={() => setActiveModal(title)}
                  className={`relative cursor-pointer w-[85vw] sm:w-full max-w-[220px] sm:max-w-[300px] bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden ${glow}`}
                >
                  <img
                    src={image}
                    alt={`${title} Poster`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Table - Already responsive */}
        <ScheduleTable activeTab={activeTab} setActiveTab={setActiveTab} schedule={schedule} />

        {/* Timeline Section - Responsive */}
        <section className="min-h-screen flex items-start justify-center w-full px-4 sm:px-6 py-8 sm:py-12">
          <TimelineDemo />
        </section>

        {/* Modal - Responsive */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveModal(null)}
            >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-900 rounded-2xl sm:rounded-xl border border-white/10 px-3 sm:px-6 py-3 sm:py-3 w-[85vw] sm:w-full max-w-full sm:max-w-[98%] md:max-w-6xl lg:max-w-7xl h-auto sm:min-h-[70vh] text-white shadow-xl max-h-[75vh] sm:max-h-[95vh] overflow-y-auto sm:overflow-y-visible flex items-center justify-center"
            >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                >
                  <IoClose className="text-xl" />
                </button>
                {activeModal === "Vyoma" ? (
                  <div className="w-full h-full flex flex-col items-center justify-center pt-60 sm:pt-0">
                    {/* Title and tagline at top center (hidden on mobile) */}
                    <div className="w-full text-center mb-8 sm:mb-10 pt-2 sm:pt-0">
                      <h2 className="hidden sm:block text-4xl sm:text-3xl lg:text-5xl p-2 sm:p-3 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-[#4cdef5] bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal mt-0 sm:mt-0 [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">
                        Vyoma – 24-Hour Hackathon
                      </h2>
                      <p className="hidden sm:block italic text-blue-400 text-base sm:text-lg mt-1 mb-2">Theme: Smart Tech, Smarter World</p>
                    </div>
                    {/* Main content: image and text */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6">
                      {/* Left: Image */}
                      <div className="w-full sm:w-1/3">
                        <img
                          src="/event-posters/Vyoma.PNG"
                          alt="Vyoma Hackathon Poster"
                          className="hidden sm:block w-full max-w-[220px] sm:max-w-[260px] object-contain rounded-lg mx-auto"
                        />
                      </div>
                      {/* Right: Text */}
                      <div className="w-full sm:w-2/3 flex flex-col items-center justify-center text-center px-2 sm:px-6">
                        <div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4 text-center sm:text-left">
                            Vyoma is the centerpiece of <strong>TechSurge 2K25</strong> – a high-intensity, 24-hour national-level hackathon that challenges participants to push the boundaries of innovation and build tech-driven solutions for a smarter, more connected world.
                          </p>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5 mt-4 mb-6">
                            <p className="text-neutral-300 text-sm sm:text-base mb-4 text-center sm:text-left">
                              This two-stage competition is designed to identify and empower the most creative minds across the country:
                            </p>
                            <ul className="text-left sm:text-left text-sm text-neutral-300 mb-4 space-y-2">
                              <li><strong>1) Online PPT Submission:</strong> Teams submit a structured idea presentation outlining the problem, solution, tech stack, and impact.</li>
                              <li><strong>2) Offline 24-Hour Hackathon:</strong> Shortlisted teams build prototypes across three progressive rounds:</li>
                              <ul className="pl-4 list-disc">
                                <li><em>Srishti (Creation):</em> Idea clarity, understanding, and innovation</li>
                                <li><em>Sankalp (Commitment):</em> Execution and collaboration</li>
                                <li><em>Samarth (Capability):</em> Functionality and real-world impact</li>
                              </ul>
                            </ul>                          
                          </div>
                          {/* Fee pills inserted here */}
                          <div className="flex flex-wrap gap-2 justify-center mt-4">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹100 – Round 1
                            </div>
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹400 – Round 2
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Buttons at bottom center */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 mt-6 sm:mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                          onClick={() => window.open("https://docs.google.com/spreadsheets/d/18u1uKEjQNXe3LyQH_j_hK6dC0hw3F2Hr", "_blank")}
                          className="cursor-pointer px-8 h-12 rounded-full text-md font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition duration-200"
                        >
                          View Problem Statements
                        </button>
                        <a href="https://unstop.com/p/vyoma-code-the-change-you-want-to-see-bv-raju-institute-of-technology-narsapur-bvrit-n-1513999" target="_blank" rel="noopener noreferrer">
                          <BorderedButton>
                            Register for Vyoma
                          </BorderedButton>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : activeModal === "Drishti" ? (
                  <div className="w-full h-full flex flex-col items-center justify-center pt-30 sm:pt-0">
                    {/* Title and tagline at top center */}
                    <div className="w-full text-center mb-8 sm:mb-10 pt-2 sm:pt-0">
                      <h2 className="hidden sm:block text-4xl sm:text-3xl lg:text-5xl p-2 sm:p-3 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-[#4cdef5] bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal mt-0 sm:mt-0 [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]">
                        Drishti – Idea Pitching Event
                      </h2>
                      <p className="hidden sm:block italic text-blue-400 text-base sm:text-lg mt-1 mb-2">Pitch. Persuade. Propel.</p>
                    </div>
                    {/* Main content: image and text */}
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6">
                      {/* Left: Image */}
                      <div className="w-full sm:w-1/3">
                        <img
                          src="/event-posters/Drishti.PNG"
                          alt="Drishti"
                          className="hidden sm:block w-full max-w-[220px] sm:max-w-[260px] object-contain rounded-lg mx-auto"
                        />
                      </div>
                      {/* Right: Text */}
                      <div className="w-full sm:w-2/3 flex flex-col items-center justify-center text-center px-2 sm:px-6">
                        <div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4 text-center sm:text-left">
                            Drishti is <strong>TechSurge 2K25’s</strong> signature pitching competition inspired by <em>Shark Tank</em>, where innovators present their game-changing ideas to a panel of industry experts, mentors, and potential investors.
                          </p>
                          <p className="text-neutral-300 text-sm sm:text-base mb-4 text-center sm:text-left">
                            Participants focus on innovation, feasibility, and market potential. The expert panel offers feedback, evaluates for collaboration, and supports standout ideas.
                          </p>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-5 mt-4 mb-6">
                            <p className="text-neutral-300 text-sm sm:text-base mb-4 font-semibold text-center sm:text-left">Why Participate?</p>
                            <ul className="text-left sm:text-left text-sm text-neutral-300 mb-6 space-y-1 list-disc pl-4">
                              <li>Showcase your entrepreneurial vision on a national platform</li>
                              <li>Gain expert insights and validation</li>
                              <li>Network with mentors, founders, and investors</li>
                              <li>Win cash prizes and incubation support</li>
                            </ul>
                          </div>
                          <p className="text-neutral-300 text-sm sm:text-base mb-6 italic text-center sm:text-left">
                            Think big. Pitch smart. Build the future.
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center mt-4">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-sm font-medium">
                              ₹200 Registration Fee
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Buttons at bottom center */}
                    <div className="w-full flex flex-col items-center justify-center gap-4 mt-6 sm:mt-8">
                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="https://forms.gle/gLswHWz9p4rqDSUEA" target="_blank" rel="noopener noreferrer">
                          <BorderedButton>
                            Register for Drishti
                          </BorderedButton>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-10 md:mb-16 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent leading-[1.45]">
                      {activeModal}
                    </h3>
                    <p className="text-neutral-300 text-sm sm:text-base">
                      More information about {activeModal} will be available soon.
                      Stay tuned!
                    </p>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Events;