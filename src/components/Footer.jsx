import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const NAV = [
  ["Home", "/"],
  ["About", "/about"],
  ["Team", "/team"],
  ["Events", "/events"],
  ["Contact", "/contact-us"],
];

const SOCIALS = [
  { label: "CBB on LinkedIn", href: "https://www.linkedin.com/in/coding-brigade-bvrit-402634229", Icon: FaLinkedin, hover: "hover:text-blue-400" },
  { label: "CBB on Instagram", href: "https://www.instagram.com/coding_brigade", Icon: FaInstagram, hover: "hover:text-pink-400" },
  { label: "CBB on X (Twitter)", href: "https://x.com/CBB_BVRIT", Icon: FaTwitter, hover: "hover:text-sky-400" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-[#4cdef5]/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-y-6 items-center justify-center text-center md:flex-row md:items-center md:justify-between md:text-left md:gap-y-0">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center">
            <img src="/logo.png" alt="" width={48} height={48} className="w-12 h-12 object-contain" />
            <span className="text-3xl font-bold logo-text" style={{ fontFamily: "Revamped, sans-serif" }}>
              CBB
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base">
            {NAV.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-gray-300 hover:text-[#4cdef5] transition-colors py-1 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {SOCIALS.map(({ label, href, Icon, hover }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-300 transition-colors ${hover} rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <a href="tel:+917842070463" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors py-1 px-2">
              <FaPhone className="w-4 h-4" aria-hidden="true" />
              +91 7842070463
            </a>
            <a href="mailto:cbb@bvrit.ac.in" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-1 px-2">
              <FaEnvelope className="w-4 h-4" aria-hidden="true" />
              cbb@bvrit.ac.in
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © {currentYear} Coding Brigade BVRIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
