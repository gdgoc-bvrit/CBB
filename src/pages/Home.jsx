import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Spotlight } from "../components/Spotlight";
import BorderedButton from "../components/BorderedButton";
import HeadingNText from "../components/HeadingNText";
import { usePageMeta } from "../hooks/usePageMeta";

// WebGL gallery pulls in ogl — load it only when the Home page renders it.
const CircularGallery = lazy(() => import("../components/CircularGallery"));

const teamImage = "/images/Team.jpg";

const GALLERY_ITEMS = [
  { image: "/home-gallery/IMG-1.JPG" },
  { image: "/home-gallery/IMG-2.JPG" },
  { image: "/home-gallery/IMG-3.jpg" },
  { image: "/home-gallery/IMG-4.JPG" },
  { image: "/home-gallery/IMG-5.jpeg" },
  { image: "/home-gallery/IMG-6.jpeg" },
  { image: "/home-gallery/IMG-7.JPG" },
  { image: "/home-gallery/IMG-8.JPG" },
  { image: "/home-gallery/IMG-9.JPG" },
];

function Home() {
  usePageMeta(
    "Coding Brigade BVRIT (CBB)",
    "The student-driven coding club at BVR Institute of Technology, Narsapur — hackathons, workshops, contests and TechSurge."
  );
  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero Section */}
        <section className="min-h-screen pt-16 md:pt-24 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <img
            src="/logo.png"
            alt="CBB Logo"
            width={288}
            height={288}
            fetchPriority="high"
            className="w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 mb-6 sm:mb-8 pb-6 object-contain drop-shadow-[0_8px_16px_rgba(76,222,245,0.35)]"
          />
          <h1 className="text-4xl pb-1 sm:text-5xl md:text-7xl font-extrabold text-center leading-[1.45]">
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Coding </span>
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Brigade </span>
            <span className="bg-gradient-to-b from-[#81c7f5] to-[#1b7bb3] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">BVRIT</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-orange-300 animate-pulse font-medium tracking-wide">
            March Towards Success
          </p>
          <Link to="/about" className="inline-flex items-center mt-6 sm:mt-8 md:mt-10 lg:mt-14">
            <BorderedButton>Know More</BorderedButton>
          </Link>
        </section>

        {/* Meet the Team Glimpse */}
        <section className="min-h-[60vh] sm:min-h-screen py-4 sm:py-10 md:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-3xl md:max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <HeadingNText title="Meet the Team" />
            </div>
            <div className="flex justify-center mb-3 sm:mb-6 md:mb-8">
              <img
                src={teamImage}
                alt="The CBB team"
                width={1600}
                height={959}
                className="w-full h-auto max-w-4xl rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex justify-center">
              <Link to="/team" className="inline-flex items-center">
                <BorderedButton>View Full Team</BorderedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview (larger screens only) */}
        <div className="hidden sm:block">
          <section className="min-h-[60vh] sm:min-h-screen py-4 sm:py-10 md:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-3xl md:max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-center justify-center text-center w-full">
                <HeadingNText title="Gallery Preview" />
              </div>
              <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] relative overflow-hidden">
                <Suspense fallback={<div className="h-full w-full animate-pulse rounded-xl bg-white/5" />}>
                  <CircularGallery
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.02}
                    items={GALLERY_ITEMS}
                  />
                </Suspense>
              </div>
              <Link to="/events" className="inline-flex items-center mt-4 sm:mt-6 md:mt-10">
                <BorderedButton>View All</BorderedButton>
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
