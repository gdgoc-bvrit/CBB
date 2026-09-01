import { usePrefersReducedMotion, useMediaQuery } from "../hooks/useMediaQuery";

const GRADIENT_FIRST =
  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .20) 0, hsla(210, 100%, 55%, .09) 50%, hsla(210, 100%, 45%, 0) 80%)";
const GRADIENT_SECOND =
  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .16) 0, hsla(210, 100%, 55%, .07) 80%, transparent 100%)";
const GRADIENT_THIRD =
  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .11) 0, hsla(210, 100%, 45%, .05) 80%, transparent 100%)";

/**
 * Ambient "light rays" behind the hero. Pure CSS — the drift is a keyframe
 * animation, disabled on mobile and for reduced-motion.
 */
export const Spotlight = ({ translateY = -350, width = 560, height = 1380, smallWidth = 240 } = {}) => {
  const reduceMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const drift = !reduceMotion && isDesktop;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 h-full w-full animate-[spotlight-in_1.5s_ease_forwards]">
      <div className={`absolute inset-x-0 top-0 z-40 mx-auto h-screen w-full ${drift ? "animate-[drift-left_7s_ease-in-out_infinite_alternate]" : ""}`}>
        <div className="absolute top-0 left-0" style={{ transform: `translateY(${translateY}px) rotate(-45deg)`, background: GRADIENT_FIRST, width, height }} />
        <div className="absolute top-0 left-0 origin-top-left" style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: GRADIENT_SECOND, width: smallWidth, height }} />
        <div className="absolute top-0 left-0 origin-top-left" style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: GRADIENT_THIRD, width: smallWidth, height }} />
      </div>
      <div className={`absolute inset-x-0 top-0 z-40 mx-auto h-screen w-full ${drift ? "animate-[drift-right_7s_ease-in-out_infinite_alternate]" : ""}`}>
        <div className="absolute top-0 right-0" style={{ transform: `translateY(${translateY}px) rotate(45deg)`, background: GRADIENT_FIRST, width, height }} />
        <div className="absolute top-0 right-0 origin-top-right" style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: GRADIENT_SECOND, width: smallWidth, height }} />
        <div className="absolute top-0 right-0 origin-top-right" style={{ transform: "rotate(45deg) translate(180%, -70%)", background: GRADIENT_THIRD, width: smallWidth, height }} />
      </div>
    </div>
  );
};
