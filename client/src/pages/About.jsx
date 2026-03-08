import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaLinkedinIn,
  FaTwitter,
  FaGraduationCap,
  FaGlobeAmericas
} from "react-icons/fa";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-light text-slate-800 noise-bg">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Empowering <br />
              <span className="text-accent-pink italic">Global</span> Potential.
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              OneStep Global Education is more than a consulting firm. We are architects of global opportunity, bridging the gap between talent and success across borders.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-accent-pink text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-pink-500/20 hover:bg-accent-pink/90 hover:scale-105 transition-all text-lg"
              >
                Our Services
              </Link>
              <Link
                to="/our-offices"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Team"
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/3] border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Successful Visas", value: "20k+", icon: <FaGraduationCap /> },
            { label: "Partner Universities", value: "500+", icon: <FaGlobeAmericas /> },
            { label: "Years Excellence", value: "14+", icon: <FaAward /> },
            { label: "Expert Advisors", value: "50+", icon: <FaUsers /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-accent-blue text-2xl flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2">{stat.value}</h2>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="rounded-3xl shadow-xl mt-12" alt="Office" />
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" className="rounded-3xl shadow-xl -mt-12" alt="Meeting" />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="order-1 md:order-2">
            <span className="text-accent-pink font-bold uppercase tracking-widest text-sm mb-4 block">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              One Planet, Infinite Opportunities.
            </h2>

            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              We believe geography should never limit potential. Our mission is to democratize access to global education and professional growth through personalized guidance and a trusted global network.
            </p>

            <ul className="space-y-6">
              {[
                "Global network of certified consultants",
                "End-to-end admissions and visa assistance",
                "Exclusive access to international job fairs",
                "Holistic approach to career management"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <FaCheckCircle className="text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-white text-4xl md:text-5xl font-extrabold mb-20">Our Core Principles</motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Excellence", icon: <FaAward />, color: "text-blue-400", desc: "We strive for perfection in every consultation and success story." },
              { title: "Inclusion", icon: <FaUsers />, color: "text-pink-400", desc: "Diversity is our strength across cultures and backgrounds." },
              { title: "Innovation", icon: <FaLightbulb />, color: "text-yellow-400", desc: "Using technology to bridge global educational barriers." }
            ].map((value, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className={`${value.color} text-4xl mb-8 group-hover:scale-110 transition-transform flex justify-center`}>
                  {value.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span {...fadeInUp} className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Experts</motion.span>
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-20">Leadership Team</motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-[40px]">
                  <img
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 30}.jpg`}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Leader"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">Expert Name</h4>
                <p className="text-accent-blue font-bold text-sm uppercase tracking-wide mt-1">Senior Advisor</p>

                <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><FaLinkedinIn size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-secondary hover:text-white transition-all"><FaTwitter size={14} /></a>
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
    </div>
  );
};

export default About;
