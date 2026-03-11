import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiAward, FiBookOpen, FiAward as FiMedal } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const BlogUK = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const universities = [
    { ukRank: 1, globalRank: 5, name: "University of Oxford" },
    { ukRank: 2, globalRank: 7, name: "University of Cambridge" },
    { ukRank: 3, globalRank: 8, name: "Imperial College London" },
    { ukRank: 4, globalRank: 10, name: "UCL (University College London)" },
    { ukRank: 5, globalRank: 20, name: "University of Edinburgh" },
    { ukRank: 6, globalRank: 27, name: "The University of Manchester" },
    { ukRank: 7, globalRank: 31, name: "King's College London (KCL)" },
    { ukRank: 8, globalRank: 49, name: "London School of Economics and Political Science (LSE)" },
    { ukRank: 9, globalRank: 58, name: "University of Bristol" },
    { ukRank: 10, globalRank: 72, name: "The University of Warwick" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/bloguk.png"
            className="w-full h-full object-cover opacity-20"
            alt="UK University"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block">
              UK Education Insights
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Centuries of <br />
              <span className="text-secondary italic text-cyan-400">Academic Prestige.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Uncover the latest rankings and performance metrics for the United Kingdom's world-leading universities, from historical giants to modern innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG CONTENT AREA ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* MAIN ARTICLE CONTENT */}
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp} className="prose prose-slate max-w-none">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-12 font-bold uppercase tracking-widest">
                  <span className="text-secondary">Heritage & Excellence</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>March 2024 Final Rankings</span>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                  Leading the Globe: The UK University Spotlight
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  In the QS World University Rankings, the UK has 90 universities, four of which are in the top ten globally. The University of Oxford continues to be the top-ranked institution in the UK, while Cambridge, Imperial, and UCL are also among the global leaders.
                </p>

                <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden mb-16">
                  <div className="bg-slate-900 p-8 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <FiMedal className="text-secondary" /> Top 10 Universities in the UK 2024
                    </h3>
                  </div>
                  <div className="overflow-x-auto p-4 md:p-8">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">UK Rank</th>
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Global Rank</th>
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">University</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {universities.map((uni, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group hover:bg-slate-50 transition-colors"
                          >
                            <td className="py-6 font-bold text-slate-900">#{uni.ukRank}</td>
                            <td className="py-6 font-bold text-primary">#{uni.globalRank}</td>
                            <td className="py-6 font-bold text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-tight text-sm">{uni.name}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="p-10 bg-secondary/5 rounded-[40px] border border-secondary/10">
                    <FiAward className="text-3xl text-secondary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Timeless Quality</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">British degrees are recognized and respected globally, opening doors to top-tier career opportunities worldwide.</p>
                  </div>
                  <div className="p-10 bg-primary/5 rounded-[40px] border border-primary/10">
                    <FiBookOpen className="text-3xl text-primary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Diverse Culture</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Join a vibrant international community in one of the world's most multicultural academic environments.</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6 mb-12">
                  "A UK degree is more than just an academic qualification; it's a mark of prestige that signals critical thinking and excellence to employers globally."
                </p>
              </motion.div>
            </div>

            {/* SIDEBAR FORMS & TOOLS */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-10">
                <InquiryForm
                  title="Study in the UK"
                  subtitle="Start your journey to a world-class British education with our expert guidance."
                  buttonText="Apply For Assessment"
                  defaultDestination="UK"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                  <h4 className="text-xl font-bold mb-6">Tier-4 Visa Experts</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Our certified consultants specialize in UK student visas with a proven track record of near-flawless success.
                  </p>
                  <button className="w-full bg-secondary text-slate-900 py-4 rounded-2xl font-bold hover:bg-white transition-all transform active:scale-95">
                    Speak With Experts
                  </button>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogUK;
