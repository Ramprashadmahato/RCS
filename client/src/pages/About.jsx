
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Guiding Principles
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">

            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-16 h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="text-[#C6A667] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We embrace creativity to deliver impactful digital products.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-16 h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#C6A667] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600">
                We work collaboratively with transparency and empathy.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-16 h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-[#C6A667] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
              <p className="text-gray-600">
                We follow ethical practices in every solution and service.
              </p>
            </motion.div>

            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="w-16 h-16 bg-[#C6A667]/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-[#C6A667] w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey & Milestones
          </motion.h2>

          <div className="mt-8 sm:mt-12 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#C6A667] to-[#a88c4f] hidden md:block"></div>
            {[

              { year: "2016", text: "Foundation & Vision — Royal Consultancy Services was founded to empower businesses with modern digital solutions." },
              { year: "2018", text: "Major Milestones — Expanded our global reach and delivered multiple enterprise‑level software projects." },
              { year: "2020", text: "Technological Expansion — Adopted cloud, AI automation, and scalable architecture models." },
              { year: "2022", text: "Strategic Partnerships — Formed collaborations with major tech companies for digital innovation." },
              { year: "2024", text: "Innovation Recognition — Recognized as a top emerging digital solutions provider." },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-[#C6A667] rounded-full z-10 relative"></div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#C6A667]/10 animate-ping"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1 max-w-md">
                  <div className="text-[#C6A667] font-bold text-lg mb-2">{item.year}</div>
                  <p className="text-gray-700">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}

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