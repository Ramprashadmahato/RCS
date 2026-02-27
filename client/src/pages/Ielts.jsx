import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiBookOpen, FiAward, FiStar } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Ielts = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Exam preparation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block">
              Test Preparation
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Master the <br />
              <span className="text-secondary italic text-cyan-400">IELTS</span> Exam.
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              Unlock global academic and professional success with our expert-led IELTS coaching. Achieve your target band score with precision training.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl border border-primary/20">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Session Duration</p>
                  <p className="font-bold">6 Weeks Intensive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center text-xl border border-secondary/20">
                  <FiStar />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Success Rate</p>
                  <p className="font-bold">95%+ Target Band</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10 shadow-3xl">
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl font-bold mb-2">IELTS Course Fee</h3>
                <p className="text-slate-400">Premium Training Package</p>
              </div>
              <div className="text-center mb-10">
                <span className="text-5xl font-black text-white">NRs. 8,000</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Complete 6 Weeks Training", "Daily Mock Tests", "Free Practice Materials", "Personalized Feedbacks"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FiCheckCircle className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Join Classes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
                  The Gold Standard of <span className="text-primary italic">English Proficiency.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  IELTS stands for International English Language Testing System. It is the world’s most popular English language proficiency test for higher education and global migration. Managed by the British Council and IDP, it is accepted by over 11,000 organizations worldwide.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiBookOpen className="text-3xl text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Academic Version</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Required for university enrollment and professional registration for medical professionals.</p>
                  </div>
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiGlobe className="text-3xl text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-3">General Training</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Ideal for migration cases, secondary education, or professional training in English-speaking nations.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Test Structure & Timing</h3>
                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg mb-16">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-6">Component</th>
                        <th className="p-6">Focus</th>
                        <th className="p-6">Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { module: "Listening", focus: "Interaction & Logic", time: "30 Min" },
                        { module: "Reading", focus: "Critical Comprehension", time: "60 Min" },
                        { module: "Writing", focus: "Analytical Responses", time: "60 Min" },
                        { module: "Speaking", focus: "Fluency & Coherence", time: "11-14 Min" }
                      ].map((item, i) => (
                        <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-6 font-bold text-slate-900">{item.module}</td>
                          <td className="p-6 text-slate-50 text-slate-500">{item.focus}</td>
                          <td className="p-6 font-medium text-primary">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Band Scale Reference</h3>
                <div className="grid gap-4">
                  {[
                    { band: "9", label: "Expert User", desc: "Fully operational command of language." },
                    { band: "8", label: "Very Good User", desc: "Occasional inaccuracies but excellent control." },
                    { band: "7", label: "Good User", desc: "Effective command with some slips." },
                    { band: "6", label: "Competent User", desc: "Partial command; can use complex language." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-secondary transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xl group-hover:bg-secondary transition-colors">
                        {item.band}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.label}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-28"
              >
                <InquiryForm
                  title="Book IELTS Now"
                  subtitle="Reserve your seat for the next intensive session starting soon."
                  defaultDestination="IELTS"
                />

                <div className="mt-8 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <FiAward className="text-secondary" /> Exam Fee in Nepal
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400 text-sm py-2 border-b border-white/10">
                      <span>IELTS Academic</span>
                      <span className="text-white font-bold">NPR 27,100</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-sm py-2 border-b border-white/10">
                      <span>IELTS General</span>
                      <span className="text-white font-bold">NPR 27,100</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-sm py-2">
                      <span>UKVI Support</span>
                      <span className="text-white font-bold">NPR 29,500</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Ielts;
