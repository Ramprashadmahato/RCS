import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiGlobe,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";

const Services = () => {
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
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Expert Guidance</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Navigate Your <br />
              <span className="text-secondary italic">Academic</span> Journey.
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              OneStep Global Education provides the expertise, support, and global network required to achieve your dreams of international education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Student Success"
                className="rounded-[40px] shadow-2xl w-full max-w-md object-cover aspect-[4/5] border-8 border-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Core Services</motion.h2>
            <motion.p {...fadeInUp} className="text-slate-500 text-lg">
              Comprehensive support from your initial inquiry to your first day on campus abroad.
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
                icon: <FiUsers />,
                color: "bg-blue-50 text-blue-600",
                desc: "Personalized guidance to match your profile with the best global academic programs.",
                features: ["Aptitude Assessment", "Course Selection", "Future Career Path"]
              },
              {
                title: "Visa Assistance",
                icon: <FiBriefcase />,
                color: "bg-pink-50 text-pink-600",
                desc: "Expert documentation and interview preparation for a high success rate.",
                features: ["Document Review", "Mock Interviews", "Status Tracking"]
              },
              {
                title: "Test Preparation",
                icon: <FiBookOpen />,
                color: "bg-cyan-50 text-cyan-600",
                desc: "Intensive training for IELTS, PTE, TOEFL, and SAT with certified instructors.",
                features: ["Expert Trainers", "Practice Materials", "Flexible Batches"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                      <FiCheckCircle className="text-secondary" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-primary transition-colors"
                >
                  Explore Service <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-slate-900 text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Successful Visas", value: "20,000+" },
            { label: "Partner Universities", value: "500+" },
            { label: "Direct Partners", value: "150+" },
            { label: "Years Excellence", value: "14+" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-5xl font-extrabold mb-3">{stat.value}</h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <motion.span {...fadeInUp} className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Process</motion.span>
              <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900">A Proven Path to Success</motion.h2>
            </div>
            <motion.p {...fadeInUp} className="text-slate-500 text-lg max-w-sm">
              We follow a rigorous, step-by-step approach to ensure your application stands out.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {["Initial Consultation", "Documentation Prep", "Visa Interview", "Pre-Departure"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded- [40px] p-10 text-center border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 font-extrabold text-xl shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all">
                    {`0${i + 1}`}
                  </div>
                  <h4 className="font-bold text-xl">{step}</h4>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center relative z-10">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FiUsers />, title: "Expert Faculty" },
              { icon: <FiGlobe />, title: "Global Reach" },
              { icon: <FiAward />, title: "Certified Guidance" },
              { icon: <FiMapPin />, title: "Local Presence" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="text-secondary text-2xl mb-4">{item.icon}</div>
                <h4 className="text-white font-bold">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.span {...fadeInUp} className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Why Partner With Us?</motion.span>
            <motion.h2 {...fadeInUp} className="text-white text-4xl md:text-5xl font-extrabold mb-8">
              Bridge to Your <span className="text-secondary">Future.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We don't just provide services, we build partnerships. Our success is measured by the tangible growth and success experience by our students.
            </p>
            <Link to="/about" className="bg-white text-slate-900 px-10 py-5 rounded-full font-extrabold text-lg hover:bg-secondary hover:text-white transition-all">
              Learn Our Success Stories
            </Link>
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

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
                className="inline-block bg-white text-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all shadow-2xl shadow-black/30"
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

    </div>
  );
};

export default Services;
