import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white p-2">
                <img
                  src="/Logo.png"
                  alt="OneStep Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-none">OneStep Global</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mt-1">Education</p>
              </div>
            </Link>

            <p className="text-white/60 text-lg max-w-sm mb-10 leading-relaxed">
              Empowering students to achieve their dreams of international education with expert guidance and global opportunities.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaYoutube />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-1 after:bg-accent-pink">Explore</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-white hover:translate-x-2 transition-all inline-block">About Us</Link></li>
              <li><Link to="/chairman-message" className="hover:text-white hover:translate-x-2 transition-all inline-block">Chairman's Message</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-2 transition-all inline-block">Our Services</Link></li>
              <li><Link to="/scholarship" className="hover:text-white hover:translate-x-2 transition-all inline-block">Scholarships</Link></li>
              <li><Link to="/events" className="hover:text-white hover:translate-x-2 transition-all inline-block">Upcoming Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-1 after:bg-accent-blue">Destinations</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/study/australia" className="hover:text-white hover:translate-x-2 transition-all inline-block">Study in Australia</Link></li>
              <li><Link to="/study/usa" className="hover:text-white hover:translate-x-2 transition-all inline-block">Study in USA</Link></li>
              <li><Link to="/study/uk" className="hover:text-white hover:translate-x-2 transition-all inline-block">Study in UK</Link></li>
              <li><Link to="/study/canada" className="hover:text-white hover:translate-x-2 transition-all inline-block">Study in Canada</Link></li>
              <li><Link to="/study/other" className="hover:text-white hover:translate-x-2 transition-all inline-block">Other Countries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-1 after:bg-white">Support</h3>
            <ul className="space-y-4 text-white/60 mb-8">
              <li><Link to="/our-offices" className="hover:text-white hover:translate-x-2 transition-all inline-block">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white hover:translate-x-2 transition-all inline-block">Help & FAQ</Link></li>
            </ul>
            <Link
              to="/our-offices"
              className="bg-accent-pink px-6 py-3 rounded-xl font-bold text-sm block text-center shadow-lg shadow-pink-500/20 hover:scale-105 transition-all text-white"
            >
              Talk to Advisor
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2026 OneStep Global Education. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link to="/legal" className="hover:text-white">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
