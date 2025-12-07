import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import HeadingNText from "../components/HeadingNText";

function Team() {
  const teamMembers = [
    // 1. President
    {
      name: "Nikhil Mamilla",
      role: "President",
      image: "/img/nikhil.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/nikhil-mamilla-823922289",
      github: "https://github.com/NikhilMamilla",
      phone: "7842070463"
    },

    // 2. Vice President
    {
      name: "Gadila Sowmya",
      role: "Vice President",
      image: "/img/sowmyab.png",
      email: "sowmya@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/sowmya-gadila",
      github: "https://github.com/GadilaSowmya",
      phone: "6305055156"
    },

    // 3. Director of Administration
    {
      name: "Enukonda Siri Chandana",
      role: "Director of Administration",
      image: "/img/siri.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/siri-chandana-enukonda-23b256293/",
      github: "https://github.com/Siri-1105",
      phone: "9063554337"
    },

    // 4. Head of Technical Development (Development)
    {
      name: "Dubasi Mukundh",
      role: "Head of Technical Department (Development)",
      image: "/img/mukundh.png",
      email: "mukundh@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/mukundh-dubasi-7a7158293",
      github: "https://github.com/Mukundh15",
      phone: "7386199296"
    },

    // 5. Head of Technical Development (Operations)
    {
      name: "Merige Eashwar Reddy",
      role: "Head of Technical Department (Operations)",
      image: "/img/eashwar.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/merige-eashwar-reddy-4963b0293/",
      github: "https://github.com/Eashwar-reddy",
      phone: "9392782641"
    },
    // 6. Head of Logistics
    {
      name: "Somepalli Gopi Sai Mahesh",
      role: "Head of Logistics",
      image: "/img/mahesh.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/somepalli-gopi-sai-mahesh-557167293",
      github: "https://github.com/mahesh1110",
      phone: "7032623679"
    },

    // 7. Technical Research and Funding Lead
    {
      name: "Boyeena Jatin Kumar",
      role: "Technical Research and Funding Lead",
      image: "/img/jathin.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/jatin-kumar-boyeena/",
      github: "https://github.com/BJatinKumar",
      phone: "7207191770"
    },

    // 8. Treasurer
    {
      name: "Chilupuri Vishwa Teja",
      role: "Treasurer",
      image: "/img/vishwa.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/vishwa-teja-chilupuri-410224302",
      github: "https://github.com/Vishwaa090804",
      phone: "9618052510"
    },

    // 9. Digital Head
    {
      name: "Poduri Sesha Sai Sathwik",
      role: "Digital Head",
      image: "/img/sathwik.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/sathwik180/",
      github: "https://github.com/Sai-Sathwik2718",
      phone: "8977176804"
    },
    // 10. Marketing Executive
    {
      name: "Ediga Sai Murari Goud",
      role: "Marketing Executive",
      image: "/img/murari.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/ediga-sai-murari-goud-a46499293",
      github: "https://github.com/Saimurarigoud",
      phone: "6300502920"
    },

    // 11. Social Media Manager
    {
      name: "Chanagari Nandini",
      role: "Social Media Manager",
      image: "/img/nandhini.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/chanagari-nandini-95a309304/",
      github: "https://github.com/23211A0552",
      phone: "7799008029"
    },

    // 12. Creative Head
    {
      name: "Kasani Hansika Goud",
      role: "Creative Head",
      image: "/img/hansika.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/kasani-hansika-3b0973289/",
      github: "https://github.com/Hansika65",
      phone: "9381867924"
    },

    // 13. Innovation & Outreach Lead
    {
      name: "Nallagutla Kiran Kumar Reddy",
      role: "Innovation and Outreach Lead",
      image: "/img/kiran.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/nallagutla-kiran-kumar-reddy-1aa3b6293/",
      github: "https://github.com/kirankumar2403",
      phone: "7816030968"
    },


    // 14. Event Manager
    {
      name: "Amara Shivateja",
      role: "Event Manager",
      image: "/img/amara.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/amarashivateja",
      github: "https://github.com/shivatejaamara",
      phone: "9515683604"
    },

    // 15. Event Manager
    {
      name: "Annabeemoju Varun",
      role: "Event Manager",
      image: "/img/varun.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/varun-annabeemoju-3378762a6",
      github: "https://github.com/Varunannabeemoju123",
      phone: "9063991205"
    },

    // 16. Feedback and Review Manager
    {
      name: "Beere Adbhutha",
      role: "Feedback and Review Manager",
      image: "/img/Adbutha.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/adbhutha",
      github: "https://github.com/Adbhutha10",
      phone: "9866796510"
    }];
    const teamMembers2 = [
    // 17. Hospitality Head
    {
      name: "Mogili Sowmya Reddy",
      role: "Hospitality Head",
      image: "/img/sowmyac.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/mogili-sowmya-reddy-779932293/",
      github: "https://github.com/SowmyaReddyMogili",
      phone: "8074957956"
    },

    // 18. Volunteer Program Manager
    {
      name: "Burugula Raghavendra",
      role: "Volunteer Program Manager",
      image: "/img/ragava.png",
      email: "",
      linkedin: "https://www.linkedin.com/in/burugula-raghavendra",
      github: "https://github.com/Burugula2006",
      phone: "9014353208"
    }
  ];

  const handleContactClick = (member) => {
    // Open email client with member's email
    window.open(`mailto:${member.email}`, '_blank');
  };

  return (
    <div className="relative flex w-full items-center justify-center bg-black min-h-screen">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 w-full text-white pointer-events-auto">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 pt-16 sm:pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 lg:mb-12">
              <HeadingNText title="CBB Batch 2026">
                One Team. One Vision. Infinite Possibilities.
              </HeadingNText>
            </div>

            {/* Team Grid with ProfileCards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center items-center min-h-[60vh]">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex justify-center">
                  <ProfileCard
                    name={member.name}
                    title={member.role}
                    handle={member.name.toLowerCase().replace(/\s+/g, '')}
                    contactText="Contact"
                    avatarUrl={member.image}
                    showUserInfo={true}
                    onContactClick={() => handleContactClick(member)}
                    className={`w-full max-w-[280px] sm:max-w-sm${member.name === 'Eshwari' ? ' avatar-eshwari' : ''}`}
                    linkedin={member.linkedin}
                    github={member.github}
                    phone={member.phone}
                    behindGradient={true}
                    innerGradient={true}
                    enableTilt={true}
                  />
                </div>
              ))}
            </div>
            {/* Team Members 2 — Centered */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 xs:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 justify-items-center mt-5">
                {teamMembers2.map((member, index) => (
                  <div key={index} className="flex justify-center">
                    <ProfileCard
                      name={member.name}
                      title={member.role}
                      handle={member.name.toLowerCase().replace(/\s+/g, '')}
                      contactText="Contact"
                      avatarUrl={member.image}
                      showUserInfo={true}
                      onContactClick={() => handleContactClick(member)}
                      className={`w-full max-w-[280px] sm:max-w-sm`}
                      linkedin={member.linkedin}
                      github={member.github}
                      phone={member.phone}
                      behindGradient={true}
                      innerGradient={true}
                      enableTilt={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Team;