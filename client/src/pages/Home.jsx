import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <div className="w-full bg-linear-to-br from-gray-50 to-gray-100 mt-7">

      {/* ================= HERO SECTION ================= */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 min-h-screen">

        {/* Left Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Elements - Hidden on mobile */}
          <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 bg-[#C6A667]/10 rounded-full blur-xl"></div>
          <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#a88c4f]/10 rounded-full blur-xl"></div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4"
            variants={itemVariants}
          >
            <span className="text-[#111111]">Royal </span>
            <br />
            <span className="text-[#C6A667]">Consultancy</span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 sm:mt-3"
            variants={itemVariants}
          >
            <span className="text-gray-700">Transform </span>
            <span className="text-[#C6A667]">Your Business </span>
            <span className="text-gray-700">Today.</span>
          </motion.h2>

          <motion.p 
            className="mt-4 sm:mt-6 leading-relaxed text-gray-600 text-base sm:text-lg max-w-md sm:max-w-lg mx-auto md:mx-0"
            variants={itemVariants}
          >
            Royal Consultancy Service is a premier digital consultancy delivering innovative,
            scalable, and secure web solutions. We help businesses accelerate growth through
            cutting-edge technology, cloud transformation, and user‑centric design.
          </motion.p>

          <motion.div 
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="/contact" 
              className="bg-linear-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a 
              href="/about" 
              className="border-2 border-[#C6A667] text-[#C6A667] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#C6A667] hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

        </motion.div>
        
        {/* Right Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute inset-0 bg-[#C6A667] rounded-2xl transform rotate-6 opacity-20"></div>
            <img
              src="/Hero.png"
              alt="Royal Consultancy Service Team"
              className="relative rounded-2xl shadow-2xl w-full z-10"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Services
          </motion.h2>

          <motion.p 
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We provide end-to-end digital solutions tailored to meet modern
            business challenges.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 text-left">

            {[

              {
                title: "Web Application Development",
                desc: "Modern, responsive, and scalable web applications using React, Node.js, and cloud technologies.",
                icon: "Code",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "UI / UX Design",
                desc: "User-centric, intuitive, and visually appealing interfaces aligned with your brand identity.",
                icon: "Palette",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Cloud & DevOps Solutions",
                desc: "Cloud migration, CI/CD pipelines, and scalable infrastructure using industry best practices.",
                icon: "Cloud",
                color: "from-sky-500 to-blue-500"
              },
              {
                title: "Cybersecurity Consulting",
                desc: "Secure authentication, data protection, and compliance-focused security solutions.",
                icon: "Shield",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "AI & Data Analytics",
                desc: "Data-driven insights, dashboards, automation, and intelligent business solutions.",
                icon: "Brain",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Digital Marketing",
                desc: "SEO, performance optimization, and digital strategies to enhance online visibility.",
                icon: "BarChart3",
                color: "from-green-500 to-emerald-500"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon === "Code" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {item.icon === "Palette" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {item.icon === "Cloud" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )}
                  {item.icon === "Shield" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {item.icon === "Brain" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                  {item.icon === "BarChart3" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#C6A667] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Projects
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">

            {[

              { img: "/Project1.png", title: "Enterprise CRM System" },
              { img: "/Project2.png", title: "E-Commerce Web Platform" },
              { img: "/Project3.png", title: "Banking & Finance Application" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#C6A667] px-6 py-2 rounded-full font-semibold transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600">
                    View Project →
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 text-left">

            {[

              {
                quote:
                  "Royal Consultancy Service delivered a high-quality solution on time with excellent communication.",
                name: "John Doe",
              },
              {
                quote:
                  "Their expertise in web and cloud technologies helped modernize our business systems.",
                name: "Sarah Williams",
              },
              {
                quote:
                  "Professional team with strong technical knowledge and project management skills.",
                name: "Alice Johnson",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg relative border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#C6A667] text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <p className="italic text-gray-700 text-lg mb-6 pl-2">
                  “{item.quote}”
                </p>
                <p className="font-semibold text-gray-900">{item.name}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Achievements
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-12">

            {/* Box 1 */}
            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="text-5xl font-bold text-[#C6A667] mb-2">300+</div>
              <p className="text-gray-700 font-medium">Projects Delivered</p>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="text-5xl font-bold text-[#C6A667] mb-2">150+</div>
              <p className="text-gray-700 font-medium">Satisfied Clients</p>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="text-5xl font-bold text-[#C6A667] mb-2">10+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </motion.div>

            {/* Box 4 */}
            <motion.div 
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="text-5xl font-bold text-[#C6A667] mb-2">98%</div>
              <p className="text-gray-700 font-medium">Client Retention</p>
            </motion.div>

          </div>
        </div>
      </section>
      

    </div>
  );
}
