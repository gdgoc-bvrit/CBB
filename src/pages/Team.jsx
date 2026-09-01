import { useState } from "react";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import HeadingNText from "../components/HeadingNText";
import BorderedButton from "../components/BorderedButton";
import { usePageMeta } from "../hooks/usePageMeta";
import { coreTeam, coreTeamExtra, previousTeam } from "../data/team";

function MemberCard({ member, className = "" }) {
  return (
    <div className="flex justify-center">
      <ProfileCard
        name={member.name}
        title={member.role}
        handle={member.name.toLowerCase().replace(/\s+/g, "")}
        contactText="Contact"
        avatarUrl={member.image}
        showUserInfo
        className={`w-full max-w-[280px] sm:max-w-sm ${className}`.trim()}
        linkedin={member.linkedin}
        github={member.github}
        phone={member.phone}
        behindGradient
        innerGradient
        enableTilt
      />
    </div>
  );
}

function Team() {
  usePageMeta("Our Team · CBB", "Meet the student team behind Coding Brigade BVRIT.");
  const [showPreviousTeam, setShowPreviousTeam] = useState(false);
  const primaryMembers = showPreviousTeam ? previousTeam : coreTeam;

  return (
    <div className="relative flex w-full items-center justify-center bg-black min-h-screen">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white pointer-events-auto">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 lg:mb-12">
              <HeadingNText level={1} title={showPreviousTeam ? "CBB Batch 2026" : "CBB Batch 2027"}>
                {showPreviousTeam
                  ? "Our Previous Year Core Team"
                  : "One Team. One Vision. Infinite Possibilities."}
              </HeadingNText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center items-start min-h-[60vh]">
              {primaryMembers.map((member) => (
                <MemberCard
                  key={member.name}
                  member={member}
                  className={member.name === "Eshwari" ? "avatar-eshwari" : ""}
                />
              ))}
            </div>

            {!showPreviousTeam && (
              <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 justify-items-center mt-5">
                  {coreTeamExtra.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <BorderedButton onClick={() => setShowPreviousTeam((v) => !v)}>
                {showPreviousTeam ? "View current team" : "View Batch 2026 team"}
              </BorderedButton>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
