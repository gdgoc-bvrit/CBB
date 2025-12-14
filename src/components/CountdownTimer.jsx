import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * CountdownTimer component - displays a countdown to a target date
 * @param {Date} targetDate - The date to countdown to
 * @param {string} label - Label to display above the countdown
 */
export default function CountdownTimer({ targetDate, label = "Event ends in" }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft("Event Ended!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center w-full flex flex-col items-center mt-6 sm:mt-8 md:mt-10">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-widest text-neutral-400 mb-3 sm:mb-4 md:mb-6 font-bold">
        {label}
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
    </div>
  );
}

