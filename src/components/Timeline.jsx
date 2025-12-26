import React from "react";
import { Timeline } from "./ui/timeline";

// Optimized Image Component for better performance
const OptimizedImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  );
};

export function TimelineDemo() {
  const data = [
    // CBB 2027 Batch Events
    {
      title: "October 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-300 text-purple-300 text-xs font-medium">
              Organized by CBB 2027
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            DSA & Beyond: A Session with Striver - 14th October 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder for images - will be added later */}
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 1</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 2</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 3</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 4</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "October 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-300 text-purple-300 text-xs font-medium">
              Organized by CBB 2027
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Alumna Talk with Priyanka Bose - 13th October 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder for images - will be added later */}
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 1</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 2</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 3</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 4</span>
            </div>
          </div>
        </div>
      ),
    },
    // CBB 2026 Batch Events
    {
      title: "July 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Techsurge 2k25: 29th & 30th July 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder for 4 images - will be added later */}
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 1</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 2</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 3</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center md:h-44 lg:h-60">
              <span className="text-neutral-500 text-xs">Image 4</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "April 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            TechTussle 2.0: 20th & 29th April 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/TechTussle2/TechTussle2-1.jpg"
              alt="TechTussle 2.0 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle2/TechTussle2-2.jpg"
              alt="TechTussle 2.0 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle2/TechTussle2-3.JPG"
              alt="TechTussle 2.0 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle2/TechTussle2-4.JPG"
              alt="TechTussle 2.0 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Deep Learning workshop: 21st - 26th April 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/DL_Workshop/DL-1.jpg"
              alt="Deep Learning workshop"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/DL_Workshop/DL-2.jpg"
              alt="Deep Learning workshop"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/DL_Workshop/DL-3.jpg"
              alt="Deep Learning workshop"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/DL_Workshop/DL-4.jpg"
              alt="Deep Learning workshop"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "February 2025",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Future Stack: 13th & 20th February 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/FutureStack/FutureStack-1.jpg"
              alt="Future Stack event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/FutureStack/FutureStack-2.jpg"
              alt="Future Stack event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/FutureStack/FutureStack-3.JPG"
              alt="Future Stack event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/FutureStack/FutureStack-4.jpg"
              alt="Future Stack event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2024",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Interaction with Young Entrepreneurs: 11th September 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/Nandyala/Nandyala-1.gif"
              alt="Interaction with Young Entrepreneurs"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/Nandyala/Nandyala-2.jpeg"
              alt="Interaction with Young Entrepreneurs"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/Nandyala/Nandyala-3.jpeg"
              alt="Interaction with Young Entrepreneurs"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/Nandyala/Nandyala-4.jpeg"
              alt="Interaction with Young Entrepreneurs"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            TechTussle – Clash of Coders: 8th & 20th August 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/TechTussle/TechTussle-1.JPG"
              alt="TechTussle event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle/TechTussle-2.JPG"
              alt="TechTussle event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle/TechTussle-3.JPG"
              alt="TechTussle event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechTussle/TechTussle-4.JPG"
              alt="TechTussle event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-400/10 border border-blue-300 text-blue-300 text-xs font-medium">
              Organized by CBB 2026
            </span>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            TechSurge 2k24: 22nd – 24th April 2024
          </p>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src="/images/TechSurge24/TechSurge-1.JPG"
              alt="TechSurge 2k24 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechSurge24/TechSurge-2.JPG"
              alt="TechSurge 2k24 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechSurge24/TechSurge-3.JPG"
              alt="TechSurge 2k24 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <OptimizedImage
              src="/images/TechSurge24/TechSurge-4.JPG"
              alt="TechSurge 2k24 event"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-20 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl p-2 sm:p-4 m-6 sm:m-10 font-bold tracking-wide bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Previous Events
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A glimpse into the impactful events hosted by CBB over the past year.
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}
