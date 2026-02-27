import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiBookOpen, FiAward, FiStar, FiCpu } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Pte = () => {
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
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="PTE Exam preparation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-secondary/20 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/30 mb-8 inline-block">
              AI-Powered Testing
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Succeed in <br />
              <span className="text-primary italic">PTE Academic.</span>
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              The world's leading computer-based English test. Get fast results and global recognition with our expert PTE coaching program.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center text-xl border border-secondary/20">
                  <FiCpu />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Computer Based</p>
                  <p className="font-bold">Fast Scoring</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl border border-primary/20">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Flexible Timing</p>
                  <p className="font-bold">Daily Test Slots</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10 shadow-3xl">
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl font-bold mb-2">PTE Course Fee</h3>
                <p className="text-slate-400">6 Weeks Coaching Program</p>
              </div>
              <div className="text-center mb-10">
                <span className="text-5xl font-black text-white">NRs. 10,000</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Pearson Official Materials", "AI-Scored Mock Tests", "Modern Lab Facilities", "One-on-One Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FiCheckCircle className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-secondary hover:bg-secondary/90 text-slate-900 py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Book My Slot
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
                  Why Choice <span className="text-secondary italic">PTE?</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  PTE Academic is the English test you can take to prove your English proficiency for university and visa applications. It is the most fair and consistent test, where you are scored by an AI, not by a person, ensuring objective results.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiAward className="text-3xl text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Fast Results</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Get your scores typically within 48 hours. Perfect for tight deadlines.</p>
                  </div>
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiStar className="text-3xl text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Global Acceptance</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Accepted by 3000+ institutions and for PR in Australia & New Zealand.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Comprehensive Test Structure</h3>
                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg mb-16">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-6">Section</th>
                        <th className="p-6">Time Limit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { section: "Speaking & Writing", time: "54 - 67 Minutes" },
                        { section: "Reading", time: "29 - 30 Minutes" },
                        { section: "Listening", time: "30 - 43 Minutes" }
                      ].map((item, i) => (
                        <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-6 font-bold text-slate-900">{item.section}</td>
                          <td className="p-6 font-medium text-secondary">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Score Comparison (PTE vs IELTS)</h3>
                <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg mb-16">
                  <table className="w-full text-center">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="p-4 border-b">PTE</th>
                        <th className="p-4 border-b">IELTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { pte: "85-90", ielts: "9.0" },
                        { pte: "76-84", ielts: "8.0-8.5" },
                        { pte: "66-75", ielts: "7.0-7.5" },
                        { pte: "56-65", ielts: "6.5" },
                        { pte: "46-55", ielts: "6.0" }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-slate-100">
                          <td className="p-4 font-black text-primary">{row.pte}</td>
                          <td className="p-4 font-bold text-slate-700">{row.ielts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  title="Enroll in PTE"
                  subtitle="Start your 6-week journey to a high PTE score with our expert faculty."
                  defaultDestination="PTE"
                />

                <div className="mt-8 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <FiGlobe className="text-primary" /> Exam Cost in Nepal
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400 text-sm py-2 border-b border-white/10">
                      <span>PTE Academic</span>
                      <span className="text-white font-bold">NPR 23,500</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-sm py-2">
                      <span>PTE Home</span>
                      <span className="text-white font-bold">NPR 23,500</span>
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

export default Pte;
