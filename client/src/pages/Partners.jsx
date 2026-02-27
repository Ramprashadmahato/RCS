import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaHandshake,
  FaUsers,
  FaFileAlt,
  FaBell,
  FaSearch,
  FaMoneyBillWave,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Partners = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            className="w-full h-full object-cover opacity-30"
            alt="Partnership background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/20 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/30 mb-8 inline-block"
          >
            Partner Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            The Ultimate Platform <br />
            <span className="text-primary italic">For Institutional Growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-slate-300 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            OneStep Global Education provides specialized tools and a global network
            designed to simplify the recruitment process, allowing you to focus on student success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Link to="/our-offices" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all inline-block hover:scale-105">
              Become a Partner
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY PARTNER WITH US ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Why Partner With <span className="text-primary">OneStep?</span></motion.h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">A global ecosystem built to handle your business needs efficiently.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Competitive Commissions",
                icon: <FaMoneyBillWave />,
                desc: "We offer industry-leading commission structures with transparent tracking and timely automated payouts.",
                color: "text-green-500 bg-green-50"
              },
              {
                title: "Dedicated Support",
                icon: <FaHeadset />,
                desc: "Get 24/7 access to our recruitment experts who assist you through every step of the student lifecycle.",
                color: "text-blue-500 bg-blue-50"
              },
              {
                title: "Accelerated Processing",
                icon: <FaCheckCircle />,
                desc: "Centralized document management and AI-driven screening for faster university offer letters.",
                color: "text-primary bg-pink-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#f8fafc] p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ALL-IN-ONE TOOLS SECTION ================= */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Unified Infrastructure</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-10 leading-tight">
                Everything You Need, <span className="text-secondary">In One Place.</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed mb-12">
                We've crafted a sophisticated suite of modern features designed to save you time and make managing global education a breeze.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Student CRM", icon: <FaUsers />, desc: "Complete academic and studying preferences view." },
                  { title: "Course Search", icon: <FaSearch />, desc: "Filter through 50,000+ global academic programs." },
                  { title: "App Tracker", icon: <FaFileAlt />, desc: "Real-time updates on every submitted application." },
                  { title: "Smart Alerts", icon: <FaBell />, desc: "Instant notifications on status changes." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-primary mt-1 text-xl"><FaCheckCircle /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-500 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-20"></div>
              <div className="bg-white p-4 rounded-[50px] shadow-2xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Dashboard Preview"
                  className="rounded-[40px] shadow-inner"
                />
              </div>
              {/* Floating Stat Chip */}
              <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-8 rounded-[30px] shadow-2xl border border-white/10 hidden md:block">
                <p className="text-secondary font-black text-3xl mb-1">98%</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Compliance Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          {...fadeInUp}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="mb-12 flex justify-center">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-primary text-3xl">
              <FaHandshake />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 italic italic">Ready to Scale Your Recruitment Business?</h2>
          <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto">
            Join the 1,000+ recruitment agencies worldwide that use OneStep Global Education to power their study abroad services.
          </p>
          <Link to="/our-offices" className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary transition-all shadow-2xl active:scale-95 inline-block">
            Apply Now
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Partners;
