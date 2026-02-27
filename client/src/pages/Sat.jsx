import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiBookOpen, FiAward, FiStar, FiEdit3 } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Sat = () => {
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
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Students studying"
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
              Undergraduate Gatekeeper
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Excel in the <br />
              <span className="text-secondary italic text-cyan-400">Digital SAT.</span>
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              Unlock prestigious scholarship opportunities and admissions to top-tier universities in the US and beyond with our elite SAT coaching.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl border border-primary/20">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Preparation</p>
                  <p className="font-bold">6 Weeks Session</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center text-xl border border-secondary/20">
                  <FiAward />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Scholarships</p>
                  <p className="font-bold">High Success Rate</p>
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
                <h3 className="text-white text-2xl font-bold mb-2">SAT Course Fee</h3>
                <p className="text-slate-400">Comprehensive Prep Package</p>
              </div>
              <div className="text-center mb-10">
                <span className="text-5xl font-black text-white">NRs. 20,000</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Official College Board Modules", "Unlimited Practice Tests", "One-on-One Math Support", "Reading Strategy Guide"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FiCheckCircle className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Join Coaching
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
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Your Path to <span className="text-primary italic">Global Education.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  The SAT is a standardized test widely used for college admissions in the United States and many other global institutions. It measures the reading, writing, and mathematical skills that are critical for success in college.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiBookOpen className="text-3xl text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Critical Reading</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Master evidence-based reading and vocabulary analysis for top scores.</p>
                  </div>
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiEdit3 className="text-3xl text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Math Proficiency</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Comprehensive coverage of Algebra, Geometry, and Advanced Math.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Test Format & Timing</h3>
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
                        { section: "Reading", time: "65 Minutes" },
                        { section: "Writing and Language", time: "35 Minutes" },
                        { section: "Math (No Calculator)", time: "25 Minutes" },
                        { section: "Math (With Calculator)", time: "55 Minutes" }
                      ].map((item, i) => (
                        <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-6 font-bold text-slate-900">{item.section}</td>
                          <td className="p-6 font-medium text-primary">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">Target Score Benchmarks</h3>
                <div className="grid gap-4">
                  {[
                    { range: "1400 - 1600", label: "IVY LEAGUE BANDS", desc: "Top competitive scores for elite world universities." },
                    { range: "1200 - 1400", label: "HIGH COMPETITIVE", desc: "Strong candidacy for major state and private universities." },
                    { range: "1000 - 1200", label: "ABOVE AVERAGE", desc: "Good eligibility for most scholarship programs." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-secondary transition-all group">
                      <div className="w-24 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm group-hover:bg-secondary transition-colors shrink-0">
                        {item.range}
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
                  title="Book SAT Course"
                  subtitle="Join our next elite batch and boost your SAT score significantly."
                  defaultDestination="SAT"
                />

                <div className="mt-8 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <FiGlobe className="text-secondary" /> SAT info in Nepal
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-slate-400 text-sm py-2">
                      <span>Official SAT Test</span>
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

export default Sat;
