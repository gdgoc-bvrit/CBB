import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import HeadingNText from "../components/HeadingNText";

function Team() {
  const teamMembers = [
    {
      name: "Karthik",
      role: "President",
      image: "/img/karthik.png",
      email: "karthik@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/karthiksabareeshboddeti21052004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/KarthikSbrshB",
      phone: "9989907703"
    },
    {
      name: "Sowmya",
      role: "Vice President",
      image: "/img/sowmya.png",
      email: "sowmya@bvrit.ac.in",
      linkedin: "www.linkedin.com/in/sowmyagopisetti",
      github: "https://github.com/SowmyaGopisetti",
      phone: "9398773971"
    },
    {
      name: "Rashmitha Sai",
      role: "Director of Administration",
      image: "/img/rashmitha sai.png",
      email: "rashmitha@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/rashmitha-sai-chidirala-7a3aa6258",
      github: "https://github.com/Chidirala-12",
      phone: "6305160329"
    },
    {
      name: "Eshwari",
      role: "Marketing Executive",
      image: "/img/eshwari.png",
      email: "eshwari@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/eshwarikalamatha/",
      github: "https://github.com/Kalamatha-Eshwari",
      phone: "6304567483"
    },
    {
      name: "Santhosh",
      role: "Social Media Manager",
      image: "/img/santhosh.png",
      email: "santhosh@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/vemula-santhosh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Santhosh00001",
      phone: "6304912971"
    },
    {
      name: "Ajay Kumar",
      role: "Head of Technical Department",
      image: "/img/ajay kumar.png",
      email: "ajay@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/ajay-kumar-potuganti",
      github: "https://github.com/ajay0120",
      phone: "9573282765"
    },
    {
      name: "Thrinath",
      role: "Event Manager",
      image: "/img/thrinath.png",
      email: "thrinath@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/kasarlathrinathreddy",
      github: "https://github.com/ThrinathReddyKasarla",
      phone: "7993172793"
    },
    {
      name: "Pavan Chandra",
      role: "Event Manager",
      image: "/img/pavan chandra.png",
      email: "pavan@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/pavan-chnadra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Pavanchandra4000",
      phone: "7989240927"
    },
    {
      name: "Reshmi",
      role: "Hospitality Head",
      image: "/img/reshmi.png",
      email: "reshmi@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/reshmi-bodepudi",
      github: "https://github.com/reshmibodepudi",
      phone: "9293947141"
    },
    {
      name: "Aniket",
      role: "Digital Head",
      image: "/img/aniket.png",
      email: "aniket@bvrit.ac.in",
      linkedin: "https://linkedin.com/in/aniket-cbb",
      github: "https://github.com/aniket-cbb",
      phone: ""
    },
    {
      name: "Sai Charan",
      role: "Feedback & Review Manager",
      image: "/img/sai charan.png",
      email: "saicharan@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/a-sai-charan-166573259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/aduganisaicharan",
      phone: "8074242996"
    },
    {
      name: "Sriya",
      role: "Innovation & Outreach Lead",
      image: "/img/sriya.png",
      email: "sriya@bvrit.ac.in",
      linkedin: "http://linkedin.com/in/sriya-lanka-065253259",
      github: "https://github.com/sl-1718",
      phone: "7997016612"
    },
    {
      name: "Vasanth",
      role: "Head of Logistics",
      image: "/img/vasanth.png",
      email: "vasanth@bvrit.ac.in",
      linkedin: "http://www.linkedin.com/in/vasanth-kumar-musku-1b9335259/",
      github: "https://github.com/MuskuVasanthKumar",
      phone: "9949132441"
    },
    {
      name: "Vishal",
      role: "Treasurer",
      image: "/img/vishal.png",
      email: "vishal@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/vishal-reddy-086583259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/GurramVishalReddy",
      phone: "6301721315"
    },
    {
      name: "Abhigna",
      role: "Creative Head",
      image: "/img/abhigna.png",
      email: "abhigna@bvrit.ac.in",
      linkedin: "https://linkedin.com//in/arsam-abhigna-740395259",
      github: "https://github.com/Abhigna-arsam",
      phone: "8897004240"
    },
    {
      name: "Anjan Kumar",
      role: "Volunteer Program Manager",
      image: "/img/anjan kumar.png",
      email: "anjan@bvrit.ac.in",
      linkedin: "https://www.linkedin.com/in/anjan-kumar-kamalapur-8b1398259",
      github: "https://github.com/AnjanKumarKamalapur",
      phone: "9441817172"
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
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Team;