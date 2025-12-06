import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadingNText from "../components/HeadingNText";
import "../index.css";

const ScheduleTable = ({ activeTab, setActiveTab, schedule }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <HeadingNText title="Event Schedule">
        This is the detailed schedule for the two-day TechSurge 2k25 festival, outlining all planned activities, rounds, breaks, and celebrations.
      </HeadingNText>

      <div className="mt-10 mb-12 flex space-x-4 text-white">
        {["Day 1", "Day 2"].map((day, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-8 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
              activeTab === i
                ? "bg-white/15 border-white/25 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                : "bg-white/5 border-white/5 text-neutral-400"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="force-hide-mobile hidden sm:block relative inline-flex w-full max-w-4xl overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
          <div className="absolute -inset-[25%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_180deg_at_center,#4cdef5_0%,#1e3a8a_50%,#4cdef5_100%)] rounded-full blur-md opacity-70" />
          <div className="absolute inset-[1px] rounded-xl bg-[#0e0e0e]" />
        </div>
        <div className="relative z-10 w-[96%] p-6 mx-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-2 text-white">
            <thead>
              <tr className="text-center border-b border-white/20 bg-black rounded-full">
                <th className="px-6 py-3 font-semibold text-lg text-center first:rounded-l-full last:rounded-r-full text-neutral-100">From</th>
                <th className="px-6 py-3 font-semibold text-lg text-center first:rounded-l-full last:rounded-r-full text-neutral-100">To</th>
                <th className="px-6 py-3 font-semibold text-lg text-center first:rounded-l-full last:rounded-r-full text-neutral-100">Activity</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {(schedule[activeTab] || []).map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-4 py-4 text-center border-b border-white/20 text-neutral-200">{row.from}</td>
                    <td className="px-4 py-4 text-center border-b border-white/20 text-neutral-200">{row.to}</td>
                    <td className="px-4 py-4 text-center border-b border-white/20 text-neutral-200">{row.activity}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 sm:hidden mt-6">
        {(schedule[activeTab] || []).map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-[#0e0e0e] border border-white/10 shadow-md p-4 flex flex-col items-start"
          >
            <div className="flex gap-4 mb-2 w-full justify-between">
              <span className="text-xs font-semibold text-neutral-400">From</span>
              <span className="text-xs font-semibold text-neutral-400">To</span>
            </div>
            <div className="flex gap-4 mb-2 w-full justify-between">
              <span className="text-base font-bold text-[#4cdef5]">{row.from}</span>
              <span className="text-base font-bold text-[#4cdef5]">{row.to}</span>
            </div>
            <div className="mt-1 text-sm text-neutral-200 font-medium w-full text-left">
              {row.activity}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleTable;
