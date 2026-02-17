
import React from "react";
import { Lightbulb, Users, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mt-20">

      {/* ================= Mission & Vision ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center max-w-2xl sm:max-w-3xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission & Vision
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our mission is to empower businesses with transformational digital solutions,
            leveraging cutting‑edge technologies, user‑centric design, and modern cloud
            architecture. We help businesses enhance efficiency, strengthen their
            digital presence, and accelerate growth.
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We envision a future where technology unlocks maximum potential for businesses,
            enabling innovation, security, automation, and seamless customer experiences.
            Our vision is to become a trusted global partner for modern digital
            transformation solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= Expert Team ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Expert Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">

            {[

              {
                name: "Himani Verma",
                position: "Lead UI/UX Designer",
                img: "/team1.png",
              },
              {
                name: "Mandeep Chau",
                position: "Senior Frontend Developer",
                img: "/team2.png",
              },
              {
                name: "Sophia Rami",
                position: "Brand Strategist",
                img: "/team3.png",
              },
              {
                name: "David Kim",
                position: "Backend Developer",
                img: "/team4.png",
              },
              {
                name: "Jessica Lee",
                position: "Digital Marketer",
                img: "/team5.png",
              },
              {
                name: "Mukul Verma",
                position: "Cybersecurity Specialist",
                img: "/team6.png",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#C6A667]/10 rounded-full transform rotate-6"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#C6A667]"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#C6A667] font-medium">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Guiding Principles ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Guiding Principles
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">

            <motion.div
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Lightbulb className="text-[#C6A667] w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We embrace creativity to deliver impactful digital products.
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Users className="text-[#C6A667] w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We work collaboratively with transparency and empathy.
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <ShieldCheck className="text-[#C6A667] w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We follow ethical practices in every solution and service.
              </p>
            </motion.div>

            <motion.div
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Star className="text-[#C6A667] w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We ensure top‑quality, performance, and reliability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ================= Journey & Milestones ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl sm:max-w-3xl">

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey & Milestones
          </motion.h2>

          <div className="relative mt-10">

            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C6A667] to-[#a88c4f] hidden md:block"></div>

            {[
              {
                year: "2016",
                text: "Foundation & Vision — Royal Consultancy Services was founded to empower businesses.",
              },
              {
                year: "2018",
                text: "Major Milestones — Expanded global reach and delivered enterprise software projects.",
              },
              {
                year: "2020",
                text: "Technological Expansion — Adopted cloud and AI automation.",
              },
              {
                year: "2022",
                text: "Strategic Partnerships — Collaborations with major tech companies.",
              },
              {
                year: "2024",
                text: "Innovation Recognition — Top emerging digital solutions provider.",
              },
            ].map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:items-start justify-between mb-12"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >

                  {/* LEFT SIDE */}
                  <div className={`hidden md:block md:w-5/12 ${isLeft ? "text-right pr-10" : ""}`}>
                    {isLeft && (
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="text-[#C6A667] font-bold text-lg mb-2">{item.year}</div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#C6A667] rounded-full"></div>
                    <div className="absolute w-12 h-12 bg-[#C6A667]/10 rounded-full animate-ping"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={`md:w-5/12 ${!isLeft ? "pl-10" : ""}`}>

                    {/* Mobile Always Visible */}
                    <div className="md:hidden bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left">
                      <div className="text-[#C6A667] font-bold text-lg mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>

                    {/* Desktop Right */}
                    {!isLeft && (
                      <div className="hidden md:block bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left">
                        <div className="text-[#C6A667] font-bold text-lg mb-2">{item.year}</div>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    )}

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>



      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-[#2c3e50] to-[#1a2530] text-white">
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
            Whether you need a powerful digital strategy, modern software, or secure cloud solutions,
            our team is here to help you grow and succeed.
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
              Get a Free Consultation
            </motion.a>

            <motion.a
              href="/services"
              className="border-2 border-[#C6A667] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-[#C6A667] hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}