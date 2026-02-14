
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  Server,
  Cloud,
  Smartphone,
  MonitorCheck,
  Check,
  ChevronDown,
} from "lucide-react";

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="mt-20">

      {/* ================= PAGE HEADER ================= */}
      <section className="py-12 sm:py-16 bg-white text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Our Expertise, Your Success
        </h1>
        <p className="text-gray-600 mt-3 sm:mt-4 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto text-sm sm:text-base">
          Royal Consultancy Services delivers innovative digital solutions designed to empower
          your business with world‑class development, seamless automation, and cloud optimization —
          so you can focus on your growth.
        </p>
      </section>

      {/* ================= COMPREHENSIVE DIGITAL SERVICES ================= */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Comprehensive Digital Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">

            {/* Services Data */}
            {[
              {
                icon: "Code",
                title: "Web Development",
                desc: "High‑performance websites and apps tailored to your business needs.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "Palette",
                title: "UI/UX Design",
                desc: "User‑focused design that improves usability and builds brand trust.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "Server",
                title: "DevOps Solutions",
                desc: "Reliable CI/CD automation and cloud‑native infrastructure.",
                color: "from-gray-500 to-gray-700"
              },
              {
                icon: "Cloud",
                title: "Cloud Computing",
                desc: "Secure cloud migration, optimization, and maintenance services.",
                color: "from-sky-500 to-blue-500"
              },
              {
                icon: "Smartphone",
                title: "App Development",
                desc: "Modern mobile apps with seamless user experiences.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "Shield",
                title: "Cybersecurity",
                desc: "Protect your digital assets with enterprise‑grade security solutions.",
                color: "from-red-500 to-orange-500"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon === "Code" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {service.icon === "Palette" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {service.icon === "Server" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  )}
                  {service.icon === "Cloud" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )}
                  {service.icon === "Smartphone" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.icon === "Shield" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#C6A667] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <motion.button 
                  className="mt-6 text-[#C6A667] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Flexible Engagement Models
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">

            {/* Project Based */}
            <div className="p-6 sm:p-8 rounded-xl bg-white shadow hover:border-2 cursor-pointer text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Project‑Based</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Fixed timeline and outputs.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Clear deliverables.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Best for defined‑scope projects.
                </li>
              </ul>
              <button className="mt-4 sm:mt-6 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition text-sm">
                Get Project Estimate
              </button>
            </div>

            {/* Retainer Model */}
            <div className="p-6 sm:p-8 rounded-xl bg-white shadow hover:border-2 cursor-pointer text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Retainer Model</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Full‑time ongoing support.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Guaranteed resource availability.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Monthly or quarterly plans.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Best for long‑term expansion.
                </li>
              </ul>
              <button className="mt-4 sm:mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm">
                Discuss Retainer
              </button>
            </div>

            {/* Custom Solutions */}
            <div className="p-6 sm:p-8 rounded-xl bg-white shadow hover:border-2 cursor-pointer text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Custom Solutions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Tailored engagement models.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Specialized expertise allocation.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4" /> Scalable team structure.
                </li>
              </ul>
              <button className="mt-4 sm:mt-6 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition text-sm">
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Why Choose Royal Consultancy Service?
        </h2>

        <p className="text-gray-600 mt-3 sm:mt-4 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto text-sm sm:text-base">
          We combine expertise, strategy, and innovation to help businesses grow using
          scalable, modern, and secure digital solutions.
        </p>

        <a
          href="/about"
          className="mt-6 sm:mt-8 bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-gray-800 transition cursor-pointer inline-block text-sm sm:text-base"
        >
          Learn More About Us
        </a>

      </section>

      {/* ================= FAQ ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl sm:max-w-2xl">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">

            {[
              "How do you ensure project success and quality?",
              "What is your typical project timeline?",
              "Can you work with existing systems and technologies?",
              "What kind of support do you offer after project completion?",
              "How do you handle confidential data and security?",
            ].map((question, index) => (
              <div key={index} className="border rounded-xl p-4 shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span className="font-medium text-gray-900">{question}</span>
                  <ChevronDown
                    className={`transition-transform ${openFAQ === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openFAQ === index && (
                  <p className="text-gray-600 text-sm mt-3">
                    We follow a well‑structured agile methodology, clear communication,
                    and continuous quality checks to ensure smooth delivery.
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-[#16213e] to-[#2c3e50] text-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how our services can help achieve your business goals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>

            <motion.a
              href="/about"
              className="border-2 border-[#C6A667] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-[#C6A667] hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Our Team
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
