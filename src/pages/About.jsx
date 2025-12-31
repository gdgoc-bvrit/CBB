import React, { useEffect, useState } from "react";
import AboutVideo from "../assets/About-video.mp4";
import CardSwap, { Card } from "../components/CardSwap";
import Footer from "../components/Footer";
import "../index.css";
import HeadingNText from "../components/HeadingNText";


function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="relative w-full text-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Grid Background and Radial Mask */}
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-20">
        {/* Top Section: Mission, What We Do, Values */}
        <section className="flex flex-col items-center justify-center py-12 sm:min-h-screen sm:justify-center">
          <div className="flex flex-col justify-center items-center w-full pt-4 sm:pt-8">
            {/* Our Mission Heading */}
            <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              <HeadingNText title="Our Mission">
                <span className="block max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
                  CBB is a dynamic student-driven coding club at BVRIT College where passionate minds with diverse technical skills unite to build, learn, and inspire. We're not just another coding club – we're a community of innovators, problem-solvers, and future tech leaders who believe in the power of collaboration and continuous learning.
                </span>
              </HeadingNText>
            </div>
            {/* What We Do & Our Values - Side by Side Cards */}
            <div className="w-full pt-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 gap-y-8">
              {/* What We Do Card */}
              <div className="bg-[#0e0e0e] backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-8 flex flex-col shadow-lg items-center w-full max-w-[90vw] sm:max-w-md mx-auto">
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
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Student Leadership</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Empowering students to lead initiatives and drive change in the tech community.</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Knowledge Sharing</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Creating an open environment where everyone teaches and learns from each other.</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-100 text-center sm:text-left">Continuous Growth</span>
                        <span className="text-neutral-300 text-sm sm:text-base text-center sm:text-left">Providing a platform for ongoing development and skill enhancement.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Guiding Lights Section */}
      <section className="flex flex-col items-center justify-center py-8">
        <div className="w-full flex flex-col justify-center items-center text-center max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <HeadingNText title="Guiding Lights of CBB">
            <span className="block max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
              With their unwavering support and leadership Dr. Ch. Madhu Babu sir and Dr. L. Pallavi mam have been the backbone of our club's journey, inspiring us to dream, build and lead.
            </span>
          </HeadingNText>
        </div>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-30 px-0 sm:px-6 w-full">
          {/* Convenor Box + Name/Designation */}
          <div className="flex flex-col items-center max-w-[300px]">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/madhu_babu.jpg"
                alt="Dr. Ch. Madhu Babu"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Dr. Ch. Madhu Babu</div>
            <div className="text-sm text-blue-400 text-center">Chief Advisor · Coding Brigade BVRIT</div>
          </div>
          {/* Coordinator Box + Name/Designation */}
          <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/pallavi.jpg"
                alt="Dr. L. Pallavi"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Dr. L. Pallavi</div>
            <div className="text-sm text-blue-400 text-center">Strategic Advisor · Coding Brigade BVRIT</div>
          </div>
          {/* added  */}
          <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/jagadeesh.webp"
                alt="Dr. Jagadeesh"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Mr. Jagadeesh Dandu</div>
            <div className="text-sm text-blue-400 text-center">Technical Mentor · Coding Brigade BVRIT</div>
          </div>
          <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/sreedevi.webp"
                alt="Dr. Sreedevi"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Mrs. Ch. Sreedevi</div>
            <div className="text-sm text-blue-400 text-center">Community Mentor · Coding Brigade BVRIT</div>
          </div>
          <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/srinu.webp"
                alt="Mr. Srinuvasarao Sanapala"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Mr. Srinuvasarao Sanapala</div>
            <div className="text-sm text-blue-400 text-center">Web & UI Lead Mentor · Coding Brigade BVRIT</div>
          </div>
          <div className="flex flex-col items-center max-w-[300px] mt-10 sm:mt-0">
            <div
              className={`${
                isMobile ? 'h-[280px]' : 'h-[370px]'
              } w-full bg-[#0e0e0e] hover:bg-[#1a1a1a] transition-all duration-300 backdrop-blur-md rounded-xl border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center`}
            >
              <img
                src="/images/manzoor.webp"
                alt="Dr. Manzoor"
                className={`${isMobile ? 'w-[230px] h-[280px]' : 'w-[300px] h-[370px]'} object-cover`}
              />
            </div>

            <div className="mt-3 text-lg font-semibold text-white text-center">Mr. M. Manzoor Hussain</div>
            <div className="text-sm text-blue-400 text-center">Competitive Programming & DSA Mentor · Coding Brigade BVRIT</div>
          </div>
        </div>
      </section>

      {/* Our Journey - Full Screen Section */}
      <section className="flex flex-col justify-center items-center px-4 py-12 sm:min-h-screen sm:justify-center">
        <div className="w-full max-w-6xl border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center">
          <HeadingNText title="Our Journey" />
          <div className="flex justify-center w-full">
            <video
              className="w-full rounded-lg shadow-lg"
              muted
              playsInline
              preload="metadata"
              {...(!isMobile && { autoPlay: true, loop: true })}
              {...(isMobile && { controls: true })}
            >
              <source src={AboutVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>

        {/* Our Events & Activities - Full Screen Section */}
        <section className="flex flex-col justify-center items-center px-4 py-12 sm:min-h-screen sm:justify-center">
          <div className="w-full max-w-5xl border border-white/10 rounded-xl bg-[#0e0e0e] backdrop-blur-md p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center">
            <HeadingNText title="Our Events & Activities" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start w-full">
              {/* Left side - Content */}
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
              {/* Right side - CardSwap */}
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
                  {/* Hackathons */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/Hackathon.jpeg" alt="Hackathons" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Hackathons</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Intensive coding marathons where teams build innovative solutions to real-world problems.</p>
                      </div>
                    </div>
                  </Card>
                  {/* Coding Contests */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/codingcontest.jpeg" alt="Coding Contests" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Coding Contests</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Competitive programming events to sharpen problem-solving skills and algorithmic thinking.</p>
                      </div>
                    </div>
                  </Card>
                  {/* Ideathons */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/Ideathon.jpeg" alt="Ideathons" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Ideathons</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Brainstorming sessions where creativity meets technology to generate groundbreaking ideas.</p>
                      </div>
                    </div>
                  </Card>
                  {/* Career Development */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/careerdevelopment.jpeg" alt="Career Development" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Career Development</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Workshops, seminars, and mentorship programs to prepare students for their tech careers.</p>
                      </div>
                    </div>
                  </Card>
                  {/* Tech Awareness */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/techawareness.jpeg" alt="Tech Awareness" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Tech Awareness</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Events to explore emerging technologies and stay updated with industry trends.</p>
                      </div>
                    </div>
                  </Card>
                  {/* Collaboration */}
                  <Card>
                    <div className="relative w-full h-full flex flex-col justify-end items-start rounded-xl overflow-hidden">
                      <img src="/about-images/collabration.jpeg" alt="Collaboration" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <div className="relative z-20 p-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Collaboration</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">Team projects and collaborative initiatives that bring diverse skills together.</p>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

        {/* About Gallery Section */}
        <section className="flex flex-col items-center justify-center px-4 py-12 sm:min-h-screen sm:justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center w-full">
              <HeadingNText title="CBB Event Highlights" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/DL_Workshop/DL-1.jpg" alt="DL Workshop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">DL Workshop</h4>
                  <p className="text-xs text-neutral-200">Hands-on deep learning sessions for all levels.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/FutureStack/FutureStack-1.jpg" alt="FutureStack" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">FutureStack</h4>
                  <p className="text-xs text-neutral-200">Exploring the future of technology and innovation.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/Nandyala/Nandyala-2.jpeg" alt="Interaction with Young Entrepreneurs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">Interaction with Young Entrepreneurs</h4>
                  <p className="text-xs text-neutral-200">Inspiring sessions and networking with emerging business leaders.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/TechSurge24/TechSurge-1.JPG" alt="TechSurge24" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">TechSurge 24</h4>
                  <p className="text-xs text-neutral-200">Annual flagship event with coding, talks, and more.</p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/TechTussle/TechTussle-1.JPG" alt="TechTussle" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">TechTussle</h4>
                  <p className="text-xs text-neutral-200">Competitive programming and team challenges.</p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex items-end max-w-[75vw] mx-auto w-full">
                <img src="/images/TechTussle2/TechTussle2-1.jpg" alt="TechTussle2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-0 left-0 w-full bg-black/60 p-4">
                  <h4 className="text-lg font-bold text-white mb-1">TechTussle 2.0</h4>
                  <p className="text-xs text-neutral-200">The next level of tech battles and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default About;