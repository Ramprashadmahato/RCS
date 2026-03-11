import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Building2, Globe, Briefcase, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // for desktop hover & mobile click
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Desktop hover
  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout.current);
    setActiveDropdown(menu);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const menus = [
    {
      label: "Institution",
      key: "institution",
      icon: <Building2 size={18} />,
      links: [
        { name: "About OneStep Global Education", to: "/about" },
        { name: "Message From Chairman", to: "/chairman-message" },
        { name: "OneStep for Institutions", to: "/for-institutions" },
      ],
    },
    {
      label: "Study Abroad",
      key: "study",
      icon: <Globe size={18} />,
      links: [
        { name: "Study in Australia", to: "/study/australia", flag: "🇦🇺" },
        { name: "Study in USA", to: "/study/usa", flag: "🇺🇸" },
        { name: "Study in UK", to: "/study/uk", flag: "🇬🇧" },
        { name: "Study in Canada", to: "/study/canada", flag: "🇨🇦" },
        { name: "Other Countries", to: "/study/other", flag: "🌍" },
      ],
    },
    {
      label: "Services",
      key: "services",
      icon: <Briefcase size={18} />,
      links: [
        { name: "Career Counselling", to: "/services/career-counselling" },
        { name: "Visa Application Assistance", to: "/services/visa-assistance" },
        { name: "Pre & Post Departure Briefings", to: "/services/pre-post-departure" },
      ],
    },
    {
      label: "Test Preparation",
      key: "test",
      icon: <GraduationCap size={18} />,
      links: [
        { name: "IELTS", to: "/test/ielts" },
        { name: "PTE", to: "/test/pte" },
        { name: "TOEFL", to: "/test/toefl" },
        { name: "SAT", to: "/test/sat" },
        { name: "GRE/GMAT", to: "/test/gre-gmat" },
      ],
    },
  ];

  const isHeroPage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2 text-slate-800 border-b border-slate-200/50"
          : isHeroPage
          ? "bg-transparent py-6 text-white"
          : "bg-white/90 backdrop-blur-md shadow-sm py-4 text-slate-800"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-accent-pink via-accent-blue to-accent-pink z-[60]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group text-current shrink-0">
            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
                padding: isScrolled ? "2px" : "4px",
              }}
              className="w-12 h-12 min-w-[48px] min-h-[48px] flex-none rounded-full flex items-center justify-center bg-white shadow-xl shadow-slate-200 transition-all duration-500 overflow-hidden"
            >
              <img src="/Logo.png" alt="Logo" className="w-full h-full object-contain" />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-black tracking-tight leading-none transition-all duration-500 ${
                  isScrolled ? "text-slate-900" : ""
                }`}
              >
                OneStep Global
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-60 mt-1">
                Education
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7 font-medium">
            {menus.map((menu) => (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-2 transition-all cursor-pointer py-2 text-sm xl:text-base relative group">
                  <span className="group-hover:text-accent-pink transition-colors">{menu.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === menu.key ? "rotate-180 text-accent-pink" : "opacity-50"
                    }`}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-pink origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    layoutId={`underline-${menu.key}`}
                  />
                </button>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {activeDropdown === menu.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-white text-gray-800 rounded-xl shadow-2xl w-64 overflow-hidden border border-gray-100"
                    >
                      <div className="py-2">
                        {menu.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 hover:text-accent-pink transition-colors text-sm border-l-4 border-transparent hover:border-accent-pink group/item"
                          >
                            {link.flag && (
                              <span className="text-lg grayscale group-hover/item:grayscale-0 transition-all">{link.flag}</span>
                            )}
                            <span className="font-medium">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/scholarship" className="hover:text-accent-pink transition-colors text-sm xl:text-base">
              Scholarships
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link
                to="/events"
                className="px-6 py-2.5 rounded-full bg-accent-pink text-white text-sm font-semibold shadow-lg hover:bg-[#D81B60] hover:shadow-pink-500/20 transition-all active:scale-95"
              >
                Events
              </Link>
              <Link
                to="/our-offices"
                className="px-6 py-2.5 rounded-full bg-accent-blue text-white text-sm font-semibold shadow-lg hover:bg-[#039BE5] hover:shadow-cyan-500/20 transition-all active:scale-95"
              >
                Our Offices
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-black/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white text-gray-800 border-t border-gray-100 overflow-visible shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {menus.map((menu) => (
                <div key={menu.key} className="space-y-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === menu.key ? null : menu.key)
                    }
                    className="w-full flex justify-between items-center text-lg font-bold text-gray-800 hover:text-[#E91E63] transition-colors"
                  >
                    {menu.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${activeDropdown === menu.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === menu.key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col pl-4 border-l border-gray-200"
                      >
                        {menu.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="py-2 text-gray-700 hover:text-[#E91E63] font-medium"
                          >
                            {link.flag && <span className="mr-2">{link.flag}</span>}
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Other Links */}
              <Link
                to="/scholarship"
                className="block py-3 text-lg font-bold text-gray-800 hover:text-[#E91E63]"
              >
                Scholarships
              </Link>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <Link
                  to="/events"
                  className="text-center py-3 rounded-2xl bg-[#E91E63] text-white font-bold shadow-lg shadow-pink-500/20"
                >
                  Events
                </Link>
                <Link
                  to="/our-offices"
                  className="text-center py-3 rounded-2xl bg-[#03A9F4] text-white font-bold shadow-lg shadow-cyan-500/20"
                >
                  Our Offices
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;