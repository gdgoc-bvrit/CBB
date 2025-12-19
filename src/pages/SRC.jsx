import React from 'react';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BorderedButton from "../components/BorderedButton";
import HeadingNText from "../components/HeadingNText";
import { Spotlight } from "../components/Spotlight";

function SRC() {
  return (
    <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">
      <Spotlight />
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white">
        {/* Hero Section */}
        <section className="min-h-screen pt-16 md:pt-24 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-b from-[#c0f4ff] to-[#4cdef5] bg-clip-text text-transparent">
              SRC
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#4cdef5]">
            Student Research Cell
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-orange-300 font-medium max-w-3xl mx-auto">
            Transforming Curiosity into Research, Innovation, and Impact
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
            A Sub-Club under Coding Brigade BVRIT
          </p>
        </section>

        {/* About SRC Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="About SRC">
              <span className="text-center block">
                SRC (Student Research Cell) is a dedicated research-focused initiative under Coding Brigade BVRIT (CBB) that encourages students to engage in research, innovation, and advanced technical exploration. It provides a structured platform for students to transform ideas into meaningful research outcomes through guidance, mentorship, and academic collaboration.
              </span>
            </HeadingNText>
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                SRC is a student-driven community that nurtures curiosity, critical thinking, and research excellence among aspiring researchers. The club aims to bridge the gap between academic learning and real-world research by supporting patent development, research publications, and participation in national and international conferences.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                SRC operates under the vision of CBB, aligning technical innovation with academic rigor and research-driven impact.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center w-full pt-4 sm:pt-8">
            {/* Our Mission Heading */}
            <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <HeadingNText title="Our Mission">
                <span className="block max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                  SRC (Student Research Cell) aims to cultivate a strong research and innovation culture among students by encouraging curiosity, critical thinking, and problem-solving. The club supports students in transforming ideas into impactful research, publications, and innovations with academic and societal relevance.
                </span>
              </HeadingNText>
            </div>
            {/* What We Do & Our Values - Side by Side Cards */}
            <div className="w-full pt-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 gap-y-8">
              {/* What We Do Card */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 flex flex-col shadow-lg items-center w-full max-w-[90vw] sm:max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">What We Do</h3>
                <p className="text-neutral-300 text-center sm:text-left mb-4 text-base sm:text-lg">
                  SRC provides structured guidance and platforms for students interested in research, innovation, and advanced technical exploration.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-neutral-300 text-left w-full space-y-2">
                  <li>Encourage student-led research and innovation projects</li>
                  <li>Guide students in research paper writing and publications</li>
                  <li>Support patent ideation and filing processes</li>
                  <li>Prepare students for national and international conferences</li>
                  <li>Connect students with academic and research institutions</li>
                </ul>
              </div>
              {/* Our Values Card */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 flex flex-col shadow-lg items-center w-full max-w-[90vw] sm:max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-neutral-100">Our Values</h3>
                <div className="relative w-full flex min-h-[220px]">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-0 h-full w-1 border-l-2 border-neutral-700 opacity-50" />
                  {/* Points on the line */}
                  <div className="absolute left-[-6px] top-6 sm:top-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <div className="absolute left-[-6px] bottom-6 sm:bottom-2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow" />
                  <ul className="space-y-6 w-full pl-4 sm:pl-6">
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Research Excellence</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Promoting high-quality, ethical, and impactful research through proper methodology and academic rigor.</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Innovation & Inquiry</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Encouraging students to question, explore, and innovate beyond classroom learning.</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Collaboration</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Fostering collaboration with institutions, researchers, and professional bodies to enhance research exposure and learning.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Highlights Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="Achievements & Highlights">
              <span className="text-center block">
                Key Highlights
              </span>
            </HeadingNText>
            
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Patent ideation and filing support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Research paper publications in reputed journals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Guidance for IEEE and other international conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Project mentoring for advanced research work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Exposure to real-world research methodologies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Collaborations Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="Institutional & Professional Collaborations">
              <span className="text-center block">
                Collaborations & Associations
              </span>
            </HeadingNText>
            
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                SRC actively collaborates with reputed institutions and organizations to enhance research exposure and credibility.
              </p>
              
              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-[#4cdef5]">
                Notable Associations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">IEEE</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">ICRISAT</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">IIT Hyderabad (IIT-H)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">IIT Bombay (IIT-B)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">National Institute of Advanced Studies (NIAS)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">TiHAN – IIT Hyderabad</span>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 mt-8 leading-relaxed">
                These collaborations enable students to access expert mentorship, advanced research environments, and national-level platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="SRC Activities">
              <span className="text-center block">
                SRC Activities & Programs
              </span>
            </HeadingNText>
            
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Research methodology workshops</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Paper writing and publication guidance sessions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Patent awareness and drafting workshops</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Expert lectures from academia and industry researchers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Research-oriented hackathons and ideathons</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4cdef5] mr-2">•</span>
                  <span className="text-gray-200">Support for conference participation (national & international)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="min-h-screen py-12 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl w-full">
            <HeadingNText title="SRC Philosophy">
              <span className="text-center block">
                Why SRC Matters
              </span>
            </HeadingNText>
            
            <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 md:p-12 border border-[#4cdef5]/20 backdrop-blur-sm mt-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                SRC empowers students to move beyond learning existing knowledge and start creating new knowledge. It nurtures critical thinking, innovation, and academic rigor—preparing students for research careers, higher studies, and impactful roles in industry and academia.
              </p>
            </div>
          </div>
        </section>

        <Footer note="SRC operates as a specialized sub-club under Coding Brigade BVRIT (CBB), working towards technical excellence, innovation, inclusivity, and student leadership." />
      </div>
    </div>
  );
}

export default SRC;