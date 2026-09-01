import { useState } from "react";
import CardSwap, { Card } from "../components/CardSwap";
import Footer from "../components/Footer";
import HeadingNText from "../components/HeadingNText";
import { useIsMobile } from "../hooks/useMediaQuery";
import { usePageMeta } from "../hooks/usePageMeta";
import { guidingLights, activityCards, eventHighlights, values } from "../data/about";

const ABOUT_VIDEO = "/About-video.mp4";

/** Loads and plays the journey video only once it scrolls into view. */
function JourneyVideo({ isMobile }) {
  const [active, setActive] = useState(false);

  const observe = (el) => {
    if (!el || active) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
  };

  return (
    <video
      ref={observe}
      className="w-full rounded-lg shadow-lg"
      muted
      playsInline
      preload="none"
      poster="/images/Team.jpg"
      {...(active && !isMobile && { autoPlay: true, loop: true })}
      {...(isMobile && { controls: true })}
    >
      {active && <source src={ABOUT_VIDEO} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}

function GuidingLight({ image, name, role, isMobile }) {
  return (
    <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0 first:mt-0">
      <div
        className={`${isMobile ? "h-[280px]" : "h-[370px]"} w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className={`${isMobile ? "w-[230px] h-[280px]" : "w-[300px] h-[370px]"} object-cover`}
        />
      </div>
      <div className="mt-3 text-lg font-semibold text-white text-center">{name}</div>
      <div className="text-sm text-blue-400 text-center">{role}</div>
    </div>
  );
}

function About() {
  usePageMeta("About · CBB", "What Coding Brigade BVRIT is, what we do, and the mentors behind it.");
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20">
        {/* Mission / What We Do / Values */}
        <section className="flex flex-col items-center justify-center py-12 sm:min-h-screen sm:justify-center">
          <div className="flex flex-col justify-center items-center w-full pt-4 sm:pt-8">
            <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <HeadingNText level={1} title="Our Mission">
                <span className="block max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                  CBB is a dynamic student-driven coding club at BVRIT College where passionate minds with diverse technical skills unite to build, learn, and inspire. We're not just another coding club – we're a community of innovators, problem-solvers, and future tech leaders who believe in the power of collaboration and continuous learning.
                </span>
              </HeadingNText>
            </div>

            <div className="w-full pt-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-8">
              {/* What We Do */}
              <div className="bg-[#0e0e0e] border border-white/10 rounded-xl p-4 sm:p-8 flex flex-col shadow-lg items-center w-full max-w-[90vw] sm:max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">What We Do</h3>
                <p className="text-neutral-300 text-center sm:text-left mb-4 text-base sm:text-lg">
                  At CBB, we cultivate a culture of peer-to-peer learning, innovation, and collaboration. Our mission is to bridge the gap between academic knowledge and real-world application through hands-on experience and teamwork.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-neutral-300 text-left w-full space-y-2">
                  <li>Promote collaborative learning</li>
                  <li>Foster innovation and creativity</li>
                  <li>Build practical tech skills</li>
                  <li>Prepare for future careers</li>
                </ul>
              </div>

              {/* Our Values */}
              <div className="bg-[#0e0e0e] border border-white/10 rounded-xl p-4 sm:p-8 flex flex-col shadow-lg items-center w-full max-w-[90vw] sm:max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">Our Values</h3>
                <div className="relative w-full flex min-h-[220px]">
                  <div className="absolute left-0 top-0 h-full w-1 border-l-2 border-neutral-700 opacity-50" />
                  <div className="absolute left-[-6px] top-6 sm:top-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] bottom-6 sm:bottom-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <ul className="space-y-6 w-full pl-4 sm:pl-6">
                    {values.map((value) => (
                      <li key={value.title}>
                        <div className="flex flex-col">
                          <span className="font-bold text-neutral-100 text-center sm:text-left">{value.title}</span>
                          <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">{value.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Lights */}
        <section className="flex flex-col items-center justify-center py-8">
          <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <HeadingNText title="Guiding Lights of CBB">
              <span className="block max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                With their unwavering support and leadership Dr. Ch. Madhu Babu sir and Dr. L. Pallavi mam have been the backbone of our club's journey, inspiring us to dream, build and lead.
              </span>
            </HeadingNText>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-28 px-0 sm:px-6 w-full">
            {guidingLights.map((person) => (
              <GuidingLight key={person.name} {...person} isMobile={isMobile} />
            ))}
          </div>
        </section>

        {/* Our Journey */}
        <section className="flex flex-col justify-center items-center px-4 py-12 sm:min-h-screen sm:justify-center">
          <div className="w-full max-w-6xl border border-white/10 rounded-xl bg-[#0e0e0e] p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center">
            <HeadingNText title="Our Journey" />
            <div className="flex justify-center w-full">
              <JourneyVideo isMobile={isMobile} />
            </div>
          </div>
        </section>

        {/* Events & Activities */}
        <section className="flex flex-col justify-center items-center px-4 py-12 sm:min-h-screen sm:justify-center">
          <div className="w-full max-w-5xl border border-white/10 rounded-xl bg-[#0e0e0e] p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center">
            <HeadingNText title="Our Events & Activities" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start w-full">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  CBB hosts a wide range of events designed to promote innovation, collaboration, and skill development. From hands-on hackathons to expert-led workshops, our activities empower students to grow both technically and professionally.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-lg sm:text-2xl font-semibold text-white mb-2 sm:mb-4">Key Highlights:</h4>
                  <ul className="list-disc pl-5 text-neutral-300 text-sm sm:text-base space-y-2">
                    <li>Hands-on coding challenges and projects</li>
                    <li>Interactions with industry professionals</li>
                    <li>Real-world tech workshops and ideathons</li>
                    <li>Peer learning and team-based competitions</li>
                    <li>Career guidance and skill-building sessions</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center items-center mt-16 md:mt-[200px] md:justify-start md:ml-[20px] md:pl-0 overflow-visible">
                <CardSwap
                  width={320}
                  height={220}
                  cardDistance={40}
                  verticalDistance={50}
                  delay={2500}
                  pauseOnHover={false}
                  easing="power1.inOut"
                >
                  {activityCards.map((card) => (
                    <Card key={card.title}>
                      <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        <div className="relative z-20 p-4">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{card.title}</h4>
                          <p className="text-xs sm:text-sm text-neutral-200">{card.text}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

        {/* Event Highlights gallery */}
        <section className="flex flex-col items-center justify-center px-4 py-12 sm:min-h-screen sm:justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <HeadingNText title="CBB Event Highlights" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {eventHighlights.map((item) => (
                <div key={item.title} className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-200">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default About;
