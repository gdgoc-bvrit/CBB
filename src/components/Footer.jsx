import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaUsers, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaGithub,
  FaCode,
  FaLaptopCode
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-[#4cdef5]/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-y-6 items-center justify-center text-center md:flex-row md:items-center md:justify-between md:text-left md:gap-y-0">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center">
            <img src="/logo.png" alt="CBB Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-3xl font-bold logo-text" style={{ fontFamily: 'Revamped, sans-serif' }}>
              CBB
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base sm:text-base">
            <Link to="/" className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2">About</Link>
            <Link to="/team" className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2">Team</Link>
            <Link to="/events" className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2">Events</Link>
            <Link to="/contact-us" className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/coding-brigade-bvrit-402634229" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/coding_brigade" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/CBB_BVRIT" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <a href="tel:+917842070463" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors py-1 px-2">
              <FaPhone className="w-4 h-4" />
              +91 7842070463
            </a>
            <a href="mailto:cbb@bvrit.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-1 px-2">
              <FaEnvelope className="w-4 h-4" />
              cbb@bvrit.ac.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © {currentYear} Coding Brigade BVRIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
