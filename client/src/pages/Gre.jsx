import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiBookOpen, FiAward, FiStar, FiDatabase } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Gre = () => {
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
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="University campus"
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
              Advanced Graduate Prep
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Master GRE <br />
              <span className="text-primary italic">& GMAT.</span>
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              The ultimate bridge to world-class graduate and business schools. Tailored coaching for the quantitative and analytical rigor you need.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl border border-primary/20">
                  <FiBookOpen />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Verbal</p>
                  <p className="font-bold">Critical Reasoning</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center text-xl border border-secondary/20">
                  <FiDatabase />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Quantitative</p>
                  <p className="font-bold">Data Insights</p>
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
                <h3 className="text-white text-2xl font-bold mb-2">Preparation Fee</h3>
                <p className="text-slate-400">Custom Batch or Individual</p>
              </div>
              <div className="text-center mb-10">
                <span className="text-5xl font-black text-white italic">On Demand</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Adaptive Learning Path", "Advanced Quant Strategies", "AWA Essay Evaluation", "Real Exam Simulations"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FiCheckCircle className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-secondary hover:bg-secondary/90 text-slate-900 py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Inquire Now
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
                {/* GRE SECTION */}
                <div className="mb-24">
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                    The <span className="text-primary italic">GRE</span> General Test.
                  </h2>
                  <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                    The GRE (Graduate Record Examination) is the most widely accepted graduate-level admissions test worldwide. It measures verbal reasoning, quantitative reasoning, critical thinking, and analytical writing skills—skills that have been developed over a long period of time and are not related to a specific field of study.
                  </p>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg mb-12">
                    <table className="w-full text-left">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-6">Section</th>
                          <th className="p-6">Score Range</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {[
                          { section: "Verbal Reasoning", range: "130 - 170" },
                          { section: "Quantitative Reasoning", range: "130 - 170" },
                          { section: "Analytical Writing", range: "0.0 - 6.0" }
                        ].map((item, i) => (
                          <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="p-6 font-bold text-slate-900">{item.section}</td>
                            <td className="p-6 font-bold text-primary">{item.range}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* GMAT SECTION */}
                <div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                    The <span className="text-secondary italic">GMAT</span> Focus Edition.
                  </h2>
                  <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                    The GMAT (Graduate Management Admission Test) is specifically designed for business school admissions. It assesses the candidate's data literacy and critical thinking skills, essential for the modern business world.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                      <FiStar className="text-3xl text-secondary mb-6" />
                      <h3 className="text-xl font-bold mb-3">Data Insights</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">New section measuring the ability to analyze and interpret data to solve problems.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                      <FiGlobe className="text-3xl text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-3">Global MBA Gateway</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Required for MBAs and specialized Master's programs across the globe.</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
                    <table className="w-full text-left">
                      <thead className="bg-[#1e2746] text-white">
                        <tr>
                          <th className="p-6">GMAT Section</th>
                          <th className="p-6">Focus Area</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {[
                          { section: "Quantitative", focus: "Problem Solving" },
                          { section: "Verbal", focus: "Critical Reasoning & Reading" },
                          { section: "Data Insights", focus: "Data Sufficiency, Multi-Source" }
                        ].map((item, i) => (
                          <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="p-6 font-bold text-slate-900">{item.section}</td>
                            <td className="p-6 font-medium text-slate-500">{item.focus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                  title="Prepare for Success"
                  subtitle="Get a personalized roadmap for your GRE or GMAT preparation."
                  defaultDestination="GRE/GMAT"
                />

                <div className="mt-8 bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-primary">
                    <FiClock /> Fast Facts
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex justify-between"><span>GRE Validity</span> <span className="text-white font-bold">5 Years</span></li>
                    <li className="flex justify-between"><span>GMAT Validity</span> <span className="text-white font-bold">5 Years</span></li>
                    <li className="flex justify-between"><span>Test Center</span> <span className="text-white font-bold">Kathmandu hub</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Gre;
