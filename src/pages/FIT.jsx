import React, { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BorderedButton from "../components/BorderedButton";
import HeadingNText from "../components/HeadingNText";
import { Spotlight } from "../components/Spotlight";

function FIT() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth; // Scroll full width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        if (current.scrollLeft >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        scroll('right');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      {/* Background + spotlight */}
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero */}
        <section className="min-h-screen pt-12 md:pt-20 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <img
            src="/FIT.png"
            alt="FIT Logo"
            className="
              w-72 h-72
              sm:w-80 sm:h-80
              md:w-96 md:h-96
              lg:w-[26rem] lg:h-[26rem]
              mb-1 sm:mb-2 pb-2
              object-contain
              drop-shadow-[0_8px_16px_rgba(76,222,245,0.35)]
              -translate-x-2 sm:-translate-x-3 md:-translate-x-4
            "
          />


          <h2
            className="
              -mt-8 sm:-mt-10 md:-mt-14
              text-3xl sm:text-5xl md:text-7xl
              font-extrabold text-center
              leading-[1.3] pb-1
            "
          >
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">
              Female{" "}
            </span>
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">
              in{" "}
            </span>
            <span className="bg-gradient-to-b from-[#81c7f5] to-[#1b7bb3] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">
              Technology
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-orange-300 animate-pulse font-medium tracking-wide max-w-3xl">
            Women. Technology. Leadership.
          </p>

          <Link
            to="/fit-events"
            className="inline-flex items-center mt-6 sm:mt-8 md:mt-10 lg:mt-14"
          >
            <BorderedButton>Know More</BorderedButton>
          </Link>
        </section>

        {/* About FIT */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="About FIT">
              <span className="block">
                FIT (Female in Technology) is a dedicated initiative under
                Coding Brigade BVRIT (CBB) that empowers female students through
                equal access to opportunities, mentorship, technical exposure,
                and leadership development in technology.
              </span>
            </HeadingNText>

            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                FIT is a student-driven community that nurtures confidence,
                competence, and career readiness among women in technology. The
                club bridges the gender gap in tech by creating a supportive
                ecosystem where students learn, grow, and excel through
                real-world exposure, scholarships, industry programs, and
                collaborative learning.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                FIT operates under the vision of Coding Brigade BVRIT, aligning
                technical excellence with inclusivity and empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission + Values */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="w-full max-w-5xl">
            <div className="text-center">
              <HeadingNText title="Our Mission">
                <span className="block max-w-4xl mx-auto">
                  FIT aims to empower female students by creating equal
                  opportunities in technology through mentorship, skill
                  development, and industry exposure, building confidence,
                  competence, and long-term career readiness.
                </span>
              </HeadingNText>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What We Do */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col shadow-lg items-center w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">
                  What We Do
                </h3>
                <p className="text-neutral-300 text-center md:text-left mb-4 text-base sm:text-lg">
                  FIT supports women in technology by guiding them toward
                  academic excellence and professional growth through focused
                  programs and collaborations.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-neutral-300 text-left w-full space-y-2 text-sm sm:text-base">
                  <li>
                    Enable participation in women-centric scholarships and
                    fellowships
                  </li>
                  <li>
                    Provide mentorship for technical and career development
                  </li>
                  <li>Organize workshops, talks, and awareness sessions</li>
                  <li>
                    Connect students with industry programs and real
                    opportunities
                  </li>
                </ul>
              </div>

              {/* Our Values */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col shadow-lg items-center w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">
                  Our Values
                </h3>

                <div className="relative w-full flex min-h-[220px]">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-0 h-full w-1 border-l-2 border-neutral-700 opacity-50" />
                  {/* Points */}
                  <div className="absolute left-[-6px] top-6 sm:top-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] bottom-6 sm:bottom-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />

                  <ul className="space-y-6 w-full pl-4 sm:pl-6 text-sm sm:text-base">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-left">
                          Empowerment
                        </span>
                        <span className="text-neutral-300">
                          Encouraging women to believe in their abilities, take
                          initiative, and confidently pursue opportunities in
                          technology.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-left">
                          Opportunity &amp; Access
                        </span>
                        <span className="text-neutral-300">
                          Ensuring awareness and access to exclusive programs,
                          scholarships, and platforms designed for women in
                          tech.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-left">
                          Growth Mindset
                        </span>
                        <span className="text-neutral-300">
                          Promoting continuous learning, adaptability, and
                          long-term career development in a rapidly evolving
                          tech landscape.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & Corporate Programs */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl w-full relative">
            <HeadingNText title="Programs & Opportunities">
              <span className="text-center block max-w-3xl mx-auto">
                We guide and mentor students through prestigious national and global programs designed for women in technology.
              </span>
            </HeadingNText>

            <div
              className="mt-16 group relative px-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide gap-6 snap-x snap-mandatory pb-8 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {(() => {
                  const fitPrograms = [
                    {
                      code: "GHC",
                      fullName: "Grace Hopper Celebration",
                      image: "https://ghc.anitab.org/wp-content/uploads/2023/05/AnitaB.org-GHC-23-Logo-1.png",
                      description: "The world's largest gathering of women technologists, offering scholarships and career development.",
                      link: "https://ghc.anitab.org/"
                    },
                    {
                      code: "FFE",
                      fullName: "Amazon Future Engineer",
                      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                      description: "Scholarships and support for female students pursuing computer science and engineering.",
                      link: "https://www.amazonfutureengineer.com/"
                    },
                    {
                      code: "WIT",
                      fullName: "Deloitte Women in Tech",
                      image: "https://cdn.simpleicons.org/deloitte/86BC25",
                      description: "Industry mentorship and professional training programs for women in technology roles.",
                      link: "https://www2.deloitte.com/us/en/pages/about-deloitte/articles/women-in-technology.html"
                    },
                    {
                      code: "EE",
                      fullName: "Virtusa Empowerment",
                      image: "https://cdn.simpleicons.org/virtusa/0072C6",
                      description: "Engineering empowerment initiatives focused on skill-building and technical excellence.",
                      link: "https://www.virtusa.com/"
                    },
                    {
                      code: "WOW",
                      fullName: "Amazon WOW",
                      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                      description: "A networking platform for women to connect with Amazon's tech community and opportunities.",
                      link: "https://www.amazon.jobs/en/teams/amazon-wow"
                    },
                    {
                      code: "FGWC",
                      fullName: "Flipkart Girls Wanna Code",
                      image: "https://cdn.simpleicons.org/flipkart/2874F0",
                      description: "A program to encourage and mentor women engineering students in building impactful tech.",
                      link: "https://www.flipkartgrip.com/"
                    },
                    {
                      code: "WGT",
                      fullName: "Walmart Global Tech",
                      image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
                      description: "Initiatives to support women in tech through mentorship, internships, and career growth.",
                      link: "https://tech.walmart.com/"
                    }
                  ];

                  return fitPrograms.map((program, index) => (
                    <div key={index} className="flex-none w-full sm:w-1/2 lg:w-[calc(25%-1.125rem)] snap-start">
                      <div className="group relative bg-[#0f0f0f] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden hover:shadow-[0_20px_50px_rgba(76,222,245,0.2)] transition-all duration-300 transform hover:-translate-y-2 h-full border border-[#4cdef5]/20">
                        <div className="relative h-48 overflow-hidden bg-white/5 p-8 flex items-center justify-center">
                          <img
                            src={program.image}
                            alt={program.code}
                            className="h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>

                          <div className="absolute bottom-4 left-6 right-6 text-left">
                            <h3 className="text-xl font-bold text-white mb-0">{program.code}</h3>
                            <p className="text-xs text-[#4cdef5] font-semibold">{program.fullName}</p>
                          </div>
                        </div>

                        <div className="p-6 bg-[#0f0f0f]">
                          <p className="text-gray-400 text-sm leading-relaxed h-20 overflow-hidden text-left">{program.description}</p>

                          <a
                            href={program.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full bg-gradient-to-r from-[#81c7f5] to-[#1b7bb3] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center text-sm"
                          >
                            Visit Program
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => scroll('left')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => scroll('right')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Activities & Events */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="Activities & Events">
              <span className="text-center block">FIT Events &amp; Activities</span>
            </HeadingNText>

            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-4xl mx-auto text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Women-centric technical workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Mentorship sessions with industry professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Scholarship awareness and application bootcamps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Leadership talks and panel discussions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Career guidance sessions for higher studies and placements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="FIT Philosophy">
              <span className="text-center block">Why FIT Matters</span>
            </HeadingNText>

            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                FIT is not just a club—it is a movement to ensure that talent,
                ambition, and innovation are never limited by gender. Through
                collaboration, mentorship, and opportunity, FIT enables women to
                rise, lead, and shape the future of technology.
              </p>
            </div>
          </div>
        </section>

        <Footer note="FIT operates as a specialized sub-club under Coding Brigade BVRIT (CBB), working towards technical excellence, innovation, inclusivity, and student leadership." />
      </div >
    </div >
  );
}

export default FIT;
