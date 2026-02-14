import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#111111] to-[#222222] text-white  py-16 px-4">
      <div className="container mx-auto grid gap-16 sm:gap-20 md:gap-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

        {/* ================= LOGO & ABOUT ================= */}
        <motion.div
          className="lg:col-span-1 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              {/* <div className="absolute inset-0 bg-[#C6A667]/20 rounded-full transform rotate-6"></div> */}
              <img
                src="/Logo.png"
                alt="Royal Consultancy Service Logo"
                className="relative w-12 sm:w-12 h-12 sm:h-16 rounded-full border-2 border-[#C6A667] object-cover z-10"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl sm:text-2xl leading-tight">
                Royal <span className="text-[#C6A667]">Consultancy</span> <br />
                <span className="text-[#C6A667]">Services</span>
              </h2>
            </div>
          </div>

          <p className="text-gray-400 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
            A premier digital consultancy delivering modern web solutions,
            cloud transformation, and innovative digital services.
          </p>
        </motion.div>

        {/* ================= QUICK LINKS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C6A667]">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
            {["Home","About Us","Services","Portfolio","Contact"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g,'')}`}
                  className="hover:text-[#C6A667] transition duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-[#C6A667] rounded-full"></span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= OUR SERVICES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C6A667]">
            Our Services
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
            {["Web Development","UI / UX Design","Cloud Solutions","AI & Automation","Digital Marketing"].map((service, idx) => (
              <li key={idx} className="hover:text-[#C6A667] transition duration-300 flex items-center gap-2 cursor-pointer">
                <span className="w-1 h-1 bg-[#C6A667] rounded-full"></span> {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= CONTACT DETAILS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-[#C6A667]">Contact Us</h3>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-3 sm:gap-4 text-gray-400 text-sm">
              <FaMapMarkerAlt className="mt-1 text-[#C6A667] shrink-0" />
              <span>Narephat-32, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-gray-400 text-sm">
              <FaPhoneAlt className="text-[#C6A667] shrink-0" />
              <a href="tel:+9779741812381" className="hover:text-[#C6A667] transition">
                +977 9741812381
              </a>
            </li>
            <li className="flex items-start gap-3 sm:gap-4 text-gray-400 w-200 text-sm">
              <FaEnvelope className="mt-1 text-[#C6A667] shrink-0" />
              <a
                href="mailto:royalconsultancyservices24@gmail.com"
                className="hover:text-[#C6A667] transition break-all"
              >
                royalconsultancyservices24@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="container mx-auto mt-12 pt-6 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Royal Consultancy Services. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.facebook.com/share/1DwAMCHRMC/" className="text-gray-400 hover:text-[#C6A667] transition">
              <FaFacebook className="text-lg sm:text-xl" />
            </a>
            <a href="https://www.instagram.com/royal_consultancy_.services?igsh=azRwaHBsOG9yNzQ3" className="text-gray-400 hover:text-[#C6A667] transition">
              <FaInstagram className="text-lg sm:text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/royalconsultancyservices/" className="text-gray-400 hover:text-[#C6A667] transition">
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
