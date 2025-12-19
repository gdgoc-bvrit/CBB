import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Team", "Events", "FIT", "SRC", "Contact Us"];

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const isAtTop = currentScrollY < 10;
      const isAtBottom = currentScrollY >= maxScrollY - 10;
      
      // Don't hide navbar when mobile menu is open
      if (mobileMenuOpen) {
        setShowNavbar(true);
        return;
      }
      
      if (isAtTop) {
        setShowNavbar(true);
      } else if (isAtBottom) {
        setShowNavbar(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    let mouseTimer;
    const handleMouseMove = () => {
      // Don't auto-hide navbar when mobile menu is open
      if (mobileMenuOpen) return;
      
      setShowNavbar(true);
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Ensure navbar stays visible when menu is opened
    if (!mobileMenuOpen) {
      setShowNavbar(true);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[70] transition-all duration-300 rounded-full overflow-hidden \
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} backdrop-blur hidden md:block`}
      >
        <SlideTabs />
      </div>
      
      {/* Hamburger for mobile */}
      <div className={`fixed top-5 left-5 z-[70] md:hidden transition-all duration-300 ${
        showNavbar || mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}>
        <HamburgerButton open={mobileMenuOpen} setOpen={toggleMobileMenu} />
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zinc-950/90 backdrop-blur flex flex-col items-center justify-center md:hidden"
          >
            <nav>
              <ul className="space-y-8 text-2xl text-zinc-100 font-light text-center">
                {navItems.map((label) => {
                  const path =
                    label.toLowerCase() === "home"
                      ? "/"
                      : `/${label.toLowerCase().replace(/\s+/g, "-")}`;
                  return (
                    <li key={label}>
                      <Link
                        to={path}
                        className="hover:text-cyan-400 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HamburgerButton = ({ open, setOpen }) => (
  <button
    aria-label={open ? "Close menu" : "Open menu"}
    className="w-12 h-12 flex flex-col items-center justify-center relative group"
    onClick={setOpen}
  >
    <span
      className={`block w-8 h-1 rounded-full bg-zinc-200 transition-all duration-300 origin-center
        ${open ? "rotate-45 translate-y-2" : ""}`}
    ></span>
    <span
      className={`block w-8 h-1 rounded-full bg-zinc-200 transition-all duration-300 my-1
        ${open ? "opacity-0" : ""}`}
    ></span>
    <span
      className={`block w-8 h-1 rounded-full bg-zinc-200 transition-all duration-300 origin-center
        ${open ? "-rotate-45 -translate-y-2" : ""}`}
    ></span>
  </button>
);

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const location = useLocation();
  const pathname = location.pathname;
  const tabRefs = useRef([]);
  const getLabelFromPath = (path) => {
    if (path === "/") return "Home";
    const match = navItems.find(
      (label) =>
        `/${label.toLowerCase().replace(/\s+/g, "-")}` === path
    );
    return match || null;
  };
  const activeLabel = getLabelFromPath(pathname);
  useEffect(() => {
    const updatePillPosition = () => {
      const activeIndex = navItems.findIndex((label) => label === activeLabel);
      const activeRef = tabRefs.current[activeIndex];
      if (activeRef) {
        const { offsetLeft, offsetWidth } = activeRef;
        setPosition({ left: offsetLeft, width: offsetWidth, opacity: 1 });
      }
    };
    const timeout = setTimeout(() => {
      requestAnimationFrame(updatePillPosition);
    }, 10);
    return () => clearTimeout(timeout);
  }, [pathname, activeLabel]);
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 1,
        }));
      }}
      className="relative flex w-fit rounded-full bg-zinc-900/70 backdrop-blur px-2 py-2 space-x-1 text-sm overflow-hidden"
    >
      {navItems.map((label, index) => {
        const path =
          label.toLowerCase() === "home"
            ? "/"
            : `/${label.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <Tab
            key={label}
            label={label}
            to={path}
            setPosition={setPosition}
            activeLabel={activeLabel}
            tabRef={(el) => (tabRefs.current[index] = el)}
          />
        );
      })}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ label, to, activeLabel, tabRef }) => {
  const ref = React.useRef(null);
  const isActive = activeLabel === label;
  return (
    <li
      ref={(el) => {
        ref.current = el;
        tabRef(el);
      }}
      className={`relative z-10 cursor-pointer px-5 uppercase font-light flex items-center justify-center h-10 ${
        isActive ? "text-zinc-100 font-medium" : "text-zinc-400"
      }`}
    >
      <Link
        to={to}
        className="w-full h-full flex items-center justify-center"
      >
        {label}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-10 rounded-full bg-zinc-600/70"
    />
  );
};

export default PillNavbar;