import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiAward, FiBookOpen, FiMap } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const BlogCanada = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const universities = [
    { canadaRank: 1, globalRank: "=25", name: "University of Toronto" },
    { canadaRank: 2, globalRank: "=31", name: "McGill University" },
    { canadaRank: 3, globalRank: 45, name: "University of British Columbia" },
    { canadaRank: 4, globalRank: 118, name: "Universite de Montreal" },
    { canadaRank: 5, globalRank: 119, name: "University of Alberta" },
    { canadaRank: 6, globalRank: 144, name: "McMaster University" },
    { canadaRank: 7, globalRank: "=166", name: "University of Waterloo" },
    { canadaRank: 8, globalRank: "=203", name: "Western University" },
    { canadaRank: 9, globalRank: "=246", name: "Queen's University" },
    { canadaRank: 10, globalRank: "=246", name: "University of Calgary" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Canada University Campus"
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
              Canadian Higher Education
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              A Frontier of <br />
              <span className="text-secondary italic text-cyan-400">Knowledge & Nature.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Discover the highest-performing universities in Canada and why it remains the top choice for students seeking quality, safety, and post-study opportunities.
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
                  <span className="text-primary">Global Innovation</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>March 2024 Update</span>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                  Excellence in the Great White North: Canada Spotlight
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  The QS World University Rankings include 26 of Canada's best universities. Evaluated based on academic and employer reputations, research impact, and internationalization, Canadian institutions consistently punch above their weight on the global stage.
                </p>

                <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden mb-16">
                  <div className="bg-slate-900 p-8 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <FiTrendingUp className="text-secondary" /> Top 10 Universities in Canada 2024
                    </h3>
                  </div>
                  <div className="overflow-x-auto p-4 md:p-8">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Canada Rank</th>
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
                            <td className="py-6 font-bold text-slate-900">#{uni.canadaRank}</td>
                            <td className="py-6 font-bold text-primary">{uni.globalRank}</td>
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
                    <h4 className="text-xl font-bold mb-4">Post-Grad Work</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Canada's PGWP allows international graduates to gain valuable work experience, often leading to permanent residency.</p>
                  </div>
                  <div className="p-10 bg-primary/5 rounded-[40px] border border-primary/10">
                    <FiGlobe className="text-3xl text-primary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Global Hub</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Study in a country that officially embraces multiculturalism and welcomes world-class talent with open arms.</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6 mb-12">
                  "Canada offers a unique blend of high-quality education and a clear pathway for students to transition from academia to a professional career."
                </p>
              </motion.div>
            </div>

            {/* SIDEBAR FORMS & TOOLS */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-10">
                <InquiryForm
                  title="Canada Express"
                  subtitle="Get the latest updates on Canadian study permits and university admissions."
                  buttonText="Start My Evaluation"
                  defaultDestination="Canada"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                  <h4 className="text-xl font-bold mb-6">Need a Study Permit?</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Our ICCRC-aligned process ensures your Canadian visa application is handled with precision and care.
                  </p>
                  <button className="w-full bg-secondary text-slate-900 py-4 rounded-2xl font-bold hover:bg-white transition-all transform active:scale-95">
                    Connect With Us
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

export default BlogCanada;
