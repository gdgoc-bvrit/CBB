import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BorderedButton from "../components/BorderedButton";
import HeadingNText from "../components/HeadingNText";
import { Spotlight } from "../components/Spotlight";

function FIT() {
  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      {/* Background + spotlight */}
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero */}
        <section className="min-h-screen pt-16 md:pt-24 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <img
            src="/FIT.png"
            alt="FIT Logo"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-6 sm:mb-8 pb-6 object-contain drop-shadow-[0_8px_16px_rgba(76,222,245,0.35)]"
          />

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center leading-[1.3] pb-1">
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
                  <li>Enable participation in women-centric scholarships and fellowships</li>
                  <li>Provide mentorship for technical and career development</li>
                  <li>Organize workshops, talks, and awareness sessions</li>
                  <li>Connect students with industry programs and real opportunities</li>
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
                          scholarships, and platforms designed for women in tech.
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
                          long-term career development in a rapidly evolving tech
                          landscape.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & Opportunities */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="Scholarships & Opportunities">
              <span className="text-center block">Scholarships &amp; Fellowships</span>
            </HeadingNText>

            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mb-8 mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                FIT actively promotes and guides students toward prestigious
                national and global opportunities designed exclusively for women
                in technology.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-[#4cdef5]">
                Highlighted Programs:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Grace Hopper Celebration Scholarships
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Amazon Future Engineer (FFE)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Deloitte Women in Technology Programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Virtusa Engineering Empowerment Programs
                  </span>
                </li>
              </ul>

              <p className="text-base sm:text-lg text-gray-200 mt-8 leading-relaxed">
                Students receive guidance on eligibility, application strategy,
                resume building, and interview preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Exposure */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="Industry Exposure">
              <span className="text-center block">
                Industry &amp; Corporate Programs
              </span>
            </HeadingNText>

            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                FIT collaborates with leading organizations to provide
                real-world exposure and career pathways.
              </p>

              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-[#4cdef5]">
                Industry Engagement Includes:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Amazon WOW</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Flipkart Girls Wanna Code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">
                    Walmart Global Tech Initiatives
                  </span>
                </li>
              </ul>

              <p className="text-base sm:text-lg text-gray-200 mt-8 leading-relaxed">
                These programs help students understand industry expectations,
                professional culture, and emerging technologies.
              </p>
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
      </div>
    </div>
  );
}

export default FIT;
