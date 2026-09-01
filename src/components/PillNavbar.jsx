import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = ["Home", "About", "Team", "Events", "Contact Us"];
const pathFor = (label) =>
  label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(false);
  menuOpenRef.current = mobileMenuOpen;

  // Show / hide on scroll direction, rAF-throttled.
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const maxY = document.documentElement.scrollHeight - window.innerHeight;
        if (menuOpenRef.current || y < 10) setShowNavbar(true);
        else if (y >= maxY - 10 || y > lastScrollY.current) setShowNavbar(false);
        else if (y < lastScrollY.current) setShowNavbar(true);
        lastScrollY.current = y;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal on mouse movement, auto-hide after 2s of stillness.
  useEffect(() => {
    let mouseTimer;
    const handleMouseMove = () => {
      if (menuOpenRef.current) return;
      setShowNavbar(true);
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => setShowNavbar(false), 2000);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => {
      if (!open) setShowNavbar(true);
      return !open;
    });
  };

  const hiddenCls = "opacity-0 -translate-y-full pointer-events-none";

  return (
    <>
      {/* Desktop */}
      <nav
        aria-label="Primary"
        className={`fixed top-5 left-1/2 z-[70] hidden -translate-x-1/2 overflow-hidden rounded-full backdrop-blur transition-all duration-300 md:block ${
          showNavbar ? "translate-y-0 opacity-100" : hiddenCls
        }`}
      >
        <SlideTabs />
      </nav>

      {/* Hamburger */}
      <div
        className={`fixed top-5 left-5 z-[70] transition-all duration-300 md:hidden ${
          showNavbar || mobileMenuOpen ? "translate-y-0 opacity-100" : hiddenCls
        }`}
      >
        <HamburgerButton open={mobileMenuOpen} setOpen={toggleMobileMenu} />
      </div>

      {/* Mobile menu overlay (CSS fade — no animation library) */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur transition-opacity duration-200 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-8 text-center text-2xl font-light text-zinc-100">
            {navItems.map((label) => (
              <li key={label}>
                <Link
                  to={pathFor(label)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className="rounded transition-colors duration-200 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

const HamburgerButton = ({ open, setOpen }) => (
  <button
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    className="relative flex h-12 w-12 flex-col items-center justify-center rounded-full bg-zinc-900/60 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]"
    onClick={setOpen}
  >
    <span className={`block h-1 w-8 origin-center rounded-full bg-zinc-200 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
    <span className={`my-1 block h-1 w-8 rounded-full bg-zinc-200 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
    <span className={`block h-1 w-8 origin-center rounded-full bg-zinc-200 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
  </button>
);

const SlideTabs = () => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const { pathname } = useLocation();
  const tabRefs = useRef([]);
  const listRef = useRef(null);

  const activeLabel =
    pathname === "/" ? "Home" : navItems.find((l) => pathFor(l) === pathname) || null;

  useEffect(() => {
    const update = () => {
      const el = tabRefs.current[navItems.indexOf(activeLabel)];
      if (el) setPosition({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
      else setPosition((p) => ({ ...p, opacity: 0 }));
    };
    update();
    // Re-measure after the display font swaps in (tab widths change) and on resize.
    document.fonts?.ready?.then(update);
    const ro = new ResizeObserver(update);
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, [activeLabel]);

  return (
    <ul
      ref={listRef}
      onMouseLeave={() => setPosition((p) => ({ ...p, opacity: 1 }))}
      className="relative flex w-fit space-x-1 overflow-hidden rounded-full bg-zinc-900/70 px-2 py-2 text-sm backdrop-blur"
    >
      {navItems.map((label, index) => (
        <Tab
          key={label}
          label={label}
          to={pathFor(label)}
          active={activeLabel === label}
          tabRef={(el) => (tabRefs.current[index] = el)}
        />
      ))}
      <li
        aria-hidden="true"
        className="absolute left-0 z-0 h-10 rounded-full bg-zinc-600/70 transition-[transform,width,opacity] duration-300 ease-out"
        style={{
          transform: `translateX(${position.left}px)`,
          width: position.width,
          opacity: position.opacity,
        }}
      />
    </ul>
  );
};

const Tab = ({ label, to, active, tabRef }) => (
  <li
    ref={tabRef}
    className={`relative z-10 flex h-10 items-center justify-center px-5 font-light uppercase ${
      active ? "font-medium text-zinc-100" : "text-zinc-400"
    }`}
  >
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className="flex h-full w-full items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cdef5]"
    >
      {label}
    </Link>
  </li>
);

export default PillNavbar;
