const teamImage = "/img/TEAM-1.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CircularGallery from "../components/CircularGallery";
import { Spotlight } from "../components/Spotlight";
import ComputersCanvas from "../components/ComputersCanvas";
import BorderedButton from "../components/BorderedButton";
import HeadingNText from "../components/HeadingNText";
const img1 = "/home-gallery/IMG-1.JPG";
const img2 = "/home-gallery/IMG-2.JPG";
const img3 = "/home-gallery/IMG-3.jpg";
const img4 = "/home-gallery/IMG-4.JPG";
const img5 = "/home-gallery/IMG-5.jpeg";
const img6 = "/home-gallery/IMG-6.jpeg";
const img7 = "/home-gallery/IMG-7.JPG";
const img8 = "/home-gallery/IMG-8.JPG";
const img9 = "/home-gallery/IMG-9.JPG";

import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleParticipateClick = () => {
    navigate('/events#what-is');
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero Section */}
        <section className="min-h-screen pt-16 md:pt-24 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <img src="/logo.png" alt="CBB Logo" className="w-63 h-63 sm:w-62 sm:h-62 md:w-76 md:h-76 mb-6 sm:mb-8 pb-6 object-contain drop-shadow-[0_8px_16px_rgba(76,222,245,0.35)]" />
          <h2 className="text-4xl pb-1 sm:text-5xl md:text-7xl font-extrabold text-center leading-[1.45]">
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Coding </span>
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Brigade </span>
            <span className="bg-gradient-to-b from-[#81c7f5] to-[#1b7bb3] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">BVRIT</span>
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-orange-300 animate-pulse font-medium tracking-wide">
            March Towards Success
          </p>
          <Link 
            to="/about"
            onClick={scrollToTop}
            className="inline-flex items-center mt-6 sm:mt-8 md:mt-10 lg:mt-14"
          >
            <BorderedButton>Know More</BorderedButton>
          </Link>
        </section>
        
        {/* Upcoming Events */}
        {/* <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-4 sm:py-6 md:py-8 flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <div className="max-w-5xl w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-10 md:p-16 border border-[#4cdef5]/20 [box-shadow:_0_0_25px_6px_rgba(76,222,245,0.15)] animate-[glowPulse_2s_ease-in-out_infinite]">
            <div className="mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-[-6px] md:mt-[-8px]">
              <div className="inline-block px-5 sm:px-6 py-2 sm:py-2 bg-[#4cdef5]/10 text-[#4cdef5] font-semibold rounded-full text-xs sm:text-sm tracking-wide shadow-inner mx-auto">
                CURRENT EVENT
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 py-2 sm:py-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#4cdef5] leading-[1.45]">
              TechSurge 2K25
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white/90 font-medium">
              <p className="text-[#4cdef5] font-semibold">Department of CSE, BVRIT presents</p>
              <p>A national-level techfest with hackathons, ideathons, and a prize pool of <span className="text-[#4cdef5] font-bold">1 Lakh</span>!</p>
              <p className="text-[#4cdef5] font-semibold">29th & 30th July, 2025</p>
              <p className="my-4 sm:my-6 md:my-8">Prize Pool: <span className="text-[#4cdef5] font-bold">1 Lakh</span></p>
              <p><span className="font-bold text-[#4cdef5]">29th July:</span> Vyoma Hackathon</p>
              <p><span className="font-bold text-[#4cdef5]">30th July:</span> Drishti Ideathon</p>
              <p className="py-2 sm:py-4 text-orange-300 font-semibold">Don't miss out! Open to all students.</p>
            </div>
            <div className="mt-2 sm:mt-10">
              <BorderedButton onClick={handleParticipateClick}>Participate Now!</BorderedButton>
            </div>
          </div>
        </section> */}

        {/* Meet the Team Glimpse */}
        <section className="min-h-[60vh] sm:min-h-screen py-4 sm:py-10 md:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-3xl md:max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <HeadingNText title="Meet the Team"/>
            </div>
            {/* Team Photo with Spinning Border */}
            <div className="flex justify-center mb-3 sm:mb-6 md:mb-8">
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img 
                  src={teamImage} 
                  alt="CBB Team" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Call to Action */}
            <div className="flex justify-center">
              <Link 
                to="/team"
                onClick={scrollToTop}
                className="inline-flex items-center"
              >
                <BorderedButton>View Full Team</BorderedButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview (website only) */}
        <div className="hidden sm:block">
          <section className="min-h-[60vh] sm:min-h-screen py-4 sm:py-10 md:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-3xl md:max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-center justify-center text-center w-full">
                <HeadingNText title="Gallery Preview"/>
              </div>
              <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] relative overflow-hidden">
                <CircularGallery
                  bend={3}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollEase={0.02}
                  items={[
                    { image: img1 },
                    { image: img2 },
                    { image: img3 },
                    { image: img4 },
                    { image: img5 },
                    { image: img6 },
                    { image: img7 },
                    { image: img8 },
                    { image: img9 },
                  ]}
                />
              </div>
              <Link 
                to="/events"
                className="inline-flex items-center mt-4 sm:mt-6 md:mt-10"
              >
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
