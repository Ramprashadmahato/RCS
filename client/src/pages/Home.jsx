import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaStar, FaGlobe, FaGraduationCap, FaAward, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-light text-slate-800 noise-bg">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-screen overflow-hidden bg-slate-950 flex flex-col justify-center">

        {/* Absolute Background - No Borders/Gaps */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <img
              src="/Hero.png"
              alt="Background"
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
          {/* Flush Overlays */}
          <div className="absolute inset-0 bg-slate-950/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
        </div>

        {/* Content - Removed internal min-height gaps */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 items-center gap-12">

            <div className="flex flex-col items-start gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10"
              >
                <div className="w-2.5 h-2.5 bg-accent-blue rounded-full animate-pulse"></div>
                <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.2em]">Nepal's #1 Global Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tighter"
              >
                Your Global <br />
                <span className="text-accent-blue italic">Education</span> <br />
                Journey.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl text-white/70 font-medium max-w-xl leading-relaxed border-l-4 border-accent-blue/30 pl-8"
              >
                Unlock international opportunities with expert guidance and personalized application strategies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-4"
              >
                <Link
                  to="/services"
                  className="group relative bg-accent-pink text-white px-10 py-5 rounded-full font-bold shadow-2xl transition-all overflow-hidden text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Our Services <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/services/career-counselling"
                  className="px-10 py-5 rounded-full font-bold text-white border border-white/20 hover:bg-white/5 transition-all backdrop-blur-xl text-lg"
                >
                  Free Counselling
                </Link>
              </motion.div>
            </div>

            {/* Visual Element - More compact for Desktop Mode on mobile */}
            <div className="hidden lg:flex justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative w-64 h-64 xl:w-80 xl:h-80"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-20">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " />
                    </defs>
                    <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-white">
                      <textPath xlinkHref="#circlePath">
                        • Success • Global • Excellence • Quality •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-4 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-2xl"
                >
                  <FaAward className="text-accent-blue text-4xl mb-3" />
                  <span className="text-white text-3xl font-black">15+</span>
                  <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Years of Experience</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator - Positioned tighter to bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden sm:flex"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span {...fadeInUp} className="text-accent-pink font-bold uppercase tracking-widest text-sm">Empowering Your Future</motion.span>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900 leading-tight">
              Comprehensive Services for <br /> International Students
            </motion.h2>
          </div>
          <motion.p {...fadeInUp} className="text-slate-500 max-w-sm mb-2 text-lg">
            Guiding you through every step of your international academic journey with precision and care.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Career Counselling",
              desc: "Personalized guidance to help you choose the right course and university based on your aspirations.",
              link: "/services/career-counselling",
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Visa Assistance",
              desc: "Expert support for your visa application process to ensure a high success rate and hassle-free experience.",
              link: "/services/visa-assistance",
              color: "bg-pink-50 text-pink-600"
            },
            {
              title: "Pre-Departure Briefings",
              desc: "Get prepared for your life in a new country with our comprehensive pre and post-departure support.",
              link: "/services/pre-post-departure",
              color: "bg-cyan-50 text-cyan-600"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all group premium-card"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                {item.desc}
              </p>
              <Link
                to={item.link}
                className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-accent-pink transition-colors"
              >
                Learn More <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= COUNTRIES ================= */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 {...fadeInUp} className="text-white text-4xl md:text-5xl font-extrabold mb-6">Explore Study Destinations</motion.h2>
            <motion.p {...fadeInUp} className="text-slate-400 text-lg">
              Choose from the world's most prestigious education systems. We help you find the perfect environment for your growth.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { country: "Australia", desc: "Global leader in research and quality education.", link: "/blog/australia", imgId: "1523482580672-f109ba8cb9be" },
              { country: "USA", desc: "Boundless opportunities and world-renowned degrees.", link: "/blog/usa", imgId: "1485738422979-f5c462d49f74" },
              { country: "UK", desc: "Timeless academic excellence and prestige.", link: "/blog/uk", imgId: "1486325212027-ebad6a20d6ae" },
              { country: "Canada", desc: "Multicultural haven with top-tier universities.", link: "/blog/canada", imgId: "1557992298-22730304040a" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-slate-800"
              >
                <img
                  src={`https://images.unsplash.com/photo-${item.imgId}?auto=format&fit=crop&q=80&w=800`}
                  alt={item.country}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{item.country}</h3>
                  <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="text-white font-bold flex items-center gap-2 group-hover:text-accent-blue"
                  >
                    Explore <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PARTNERS & AFFILIATIONS ================= */}
      <section className="py-24 overflow-hidden bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
            <div className="max-w-xl text-center md:text-left">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent-pink font-bold uppercase tracking-[0.3em] text-xs block"
              >
                Global Affiliations
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4"
              >
                Our Trusted <span className="text-accent-blue italic">Partners</span>
              </motion.h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mt-6">
                We are proud to be affiliated with world-renowned institutions and regulatory bodies, ensuring the highest standards of international education.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/partners" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2 group">
                View All Partners <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Infinite Marquee logic */}
          <div className="relative mt-12 mb-4">
            {/* Soft Gradient Overlay for edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden group">
              <motion.div
                className="flex items-center space-x-20 pr-20"
                animate={{
                  x: [0, -1500]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* Dynamically iterating through actual logo files */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                  <div
                    key={`partner-${i}`}
                    className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                  >
                    <img
                      src={`/p${item}.png`}
                      alt={`Affiliation ${item}`}
                      className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                {/* Second loop for seamlessness */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                  <div
                    key={`partner-loop-${i}`}
                    className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                  >
                    <img
                      src={`/p${item}.png`}
                      alt={`Affiliation ${item}`}
                      className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span {...fadeInUp} className="text-[#E91E63] font-bold uppercase tracking-widest text-sm">Real Stories</motion.span>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 underline decoration-[#03A9F4] decoration-4 underline-offset-8">What Our Students Say</motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sabita KC", uni: "La Trobe University, Melbourne", text: "I would like to thank the team for their professional services. They always helped me solve my troubles and kept me positive." },
              { name: "Junu Shrestha", uni: "ICHM, Adelaide", text: "I'm thankful for their guidance. They showed me the correct path for my life and I recommend them to everyone." },
              { name: "Sadhana Basnet", uni: "UTS:INSEARCH, Sydney", text: "I got a great opportunity to study in Australia. I would have never got this without their support. Best consultants!" },
            ].map((testi, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-10 rounded-[40px] shadow-lg premium-card ${i === 1 ? 'bg-primary text-white' : 'bg-white text-slate-800'}`}
              >
                <div className="flex mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-lg italic leading-relaxed mb-8">"{testi.text}"</p>
                <div>
                  <h4 className="text-xl font-bold">{testi.name}</h4>
                  <p className={`${i === 1 ? 'text-white/70' : 'text-slate-400'} text-sm mt-1 uppercase tracking-wider`}>{testi.uni}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-premium-dark rounded-[50px] p-12 md:p-24 relative overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/70 text-xl mb-12 max-w-lg">
                Book a free session with our professional advisors and take the first step towards your global education.
              </p>
              <Link
                to="/our-offices"
                className="inline-block bg-white text-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-blue hover:text-white transition-all shadow-2xl shadow-black/30"
              >
                Talk to an Advisor
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl border border-white/20 mb-6">
                <img src="/Logo.png" alt="OneStep Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <span className="text-white/50 text-sm uppercase tracking-[0.3em]">Accredited & Trusted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div >
  );
};

export default Home;
