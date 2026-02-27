import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiAward, FiBookOpen } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const BlogAustralia = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const universities = [
    { ausRank: 1, globalRank: 31, name: "Australian National University (ANU)" },
    { ausRank: 2, globalRank: 40, name: "University of Sydney" },
    { ausRank: 3, globalRank: 41, name: "University of Melbourne" },
    { ausRank: 4, globalRank: 44, name: "University of New South Wales (UNSW)" },
    { ausRank: 5, globalRank: 46, name: "University of Queensland (UQ)" },
    { ausRank: 6, globalRank: 55, name: "Monash University" },
    { ausRank: 7, globalRank: 92, name: "University of Western Australia (UWA)" },
    { ausRank: 8, globalRank: 106, name: "University of Adelaide" },
    { ausRank: 9, globalRank: 133, name: "University of Technology Sydney (UTS)" },
    { ausRank: 10, globalRank: 196, name: "University of Wollongong" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Australian University Campus"
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
              University Rankings
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Top Ranked <br />
              <span className="text-secondary italic text-cyan-400">Australian Universities.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Discover why Australia remains a global powerhouse for higher education with our comprehensive look at the latest university performance and rankings.
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
                  <span className="text-primary">Global Insights</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>March 2024 Update</span>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                  QS World University Rankings: An Australian Overview
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Australia features 36 universities in the QS World University Rankings. For the current year, the majority of Australian institutions have maintained or significantly improved their global standing, proving the robustness of the Australian higher education sector.
                </p>

                <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden mb-16">
                  <div className="bg-slate-900 p-8 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <FiTrendingUp className="text-secondary" /> Top 10 Universities in Australia
                    </h3>
                  </div>
                  <div className="overflow-x-auto p-4 md:p-8">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Aus Rank</th>
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Global Rank</th>
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Institution</th>
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
                            <td className="py-6 font-bold text-slate-900">#{uni.ausRank}</td>
                            <td className="py-6 font-bold text-primary">#{uni.globalRank}</td>
                            <td className="py-6 font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{uni.name}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="p-10 bg-secondary/5 rounded-[40px] border border-secondary/10">
                    <FiAward className="text-3xl text-secondary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Elite Standards</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Rankings assess universities on academic and employer reputation, research impact, and faculty-to-student ratios.</p>
                  </div>
                  <div className="p-10 bg-primary/5 rounded-[40px] border border-primary/10">
                    <FiBookOpen className="text-3xl text-primary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Research Excellence</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Australian institutions are recognized globally for their high-impact research in medicine, tech, and engineering.</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6 mb-12">
                  "The consistent performance of Australian universities in global rankings reflects our commitment to maintaining world-class academic standards while providing students with a rich, multicultural experience."
                </p>
              </motion.div>
            </div>

            {/* SIDEBAR FORMS & TOOLS */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-10">
                <InquiryForm
                  title="Free Assessment"
                  subtitle="Find out which top Australian university is the right fit for your profile."
                  buttonText="Get Expert Advice"
                  defaultDestination="Australia"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                  <h4 className="text-xl font-bold mb-6">Need Recruitment Support?</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Our team provides end-to-end support for international student recruitment across Australia.
                  </p>
                  <button className="w-full bg-secondary text-slate-900 py-4 rounded-2xl font-bold hover:bg-white transition-all transform active:scale-95">
                    Contact Our Office
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

export default BlogAustralia;
