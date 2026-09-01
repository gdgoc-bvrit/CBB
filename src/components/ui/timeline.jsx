import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto font-sans antialiased"
    >
      {data.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="flex justify-start pt-8 md:gap-10 md:pt-12"
        >
          <div className="sticky top-28 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
            <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black">
              <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
            </div>
            <h3 className="hidden font-display text-xl font-bold text-neutral-500 md:block md:pl-16 md:text-4xl">
              {item.title}
            </h3>
          </div>

          <div className="relative w-full pl-16 pr-1 md:pl-4">
            <h3 className="mb-4 block text-left font-display text-2xl font-bold text-neutral-500 md:hidden">
              {item.title}
            </h3>
            {item.content}
          </div>
        </div>
      ))}

      <div
        style={{ height: height + "px", maxHeight: "100%" }}
        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#4cdef5] via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      </div>
    </div>
  );
};

