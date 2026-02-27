import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe, FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const BlogUSA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const universities = [
    { rank: 1, score: 93.3, name: "Harvard University" },
    { rank: 2, score: 88.9, name: "Stanford University" },
    { rank: 3, score: 85.6, name: "Massachusetts Institute of Technology (MIT)" },
    { rank: 4, score: 77.7, name: "University of California, Berkeley (UCB)" },
    { rank: 5, score: 77.5, name: "University of California, Los Angeles (UCLA)" },
    { rank: 6, score: 75.4, name: "Yale University" },
    { rank: 7, score: 75.1, name: "Columbia University" },
    { rank: 8, score: 74.1, name: "Princeton University" },
    { rank: 9, score: 73.3, name: "New York University (NYU)" },
    { rank: 10, score: 73.2, name: "University of Pennsylvania" },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="USA University Campus"
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
              USA University Rankings
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              The Ivy League <br />
              <span className="text-secondary italic text-cyan-400">& Beyond.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              Explore the most comprehensive guide to high-ranking universities in the United States, from world-famous public institutions to prestigious Ivy League icons.
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
                  <span className="text-primary text-secondary">Academic Excellence</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>March 2024 Final Rankings</span>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                  Leading the World: The US Academic Landscape
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  This year's QS USA Rankings features over 350 universities. New York leads the way as the most well-represented state, followed by California. Public institutions continue to excel, with two spots in the top five and seven in the top 30.
                </p>

                <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden mb-16">
                  <div className="bg-slate-900 p-8 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <FiStar className="text-secondary" /> Top 10 Universities in the USA 2024
                    </h3>
                  </div>
                  <div className="overflow-x-auto p-4 md:p-8">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Rank</th>
                          <th className="pb-6 text-sm font-bold uppercase tracking-wider text-slate-400">Score</th>
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
                            <td className="py-6 font-bold text-slate-900">#{uni.rank}</td>
                            <td className="py-6 font-bold text-primary">{uni.score}</td>
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
                    <h4 className="text-xl font-bold mb-4">Innovation Hubs</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">US universities are the world's leading centers for research, innovation, and entrepreneurial success.</p>
                  </div>
                  <div className="p-10 bg-primary/5 rounded-[40px] border border-primary/10">
                    <FiBookOpen className="text-3xl text-primary mb-6" />
                    <h4 className="text-xl font-bold mb-4">Diversity & Growth</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Experience a melting pot of cultures and professional networking opportunities unparalleled anywhere else.</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed italic border-l-4 border-primary pl-6 mb-12">
                  "Studying in the USA isn't just about the degree; it's about being at the epicenter of global innovation and building a professional network that spans the entire planet."
                </p>
              </motion.div>
            </div>

            {/* SIDEBAR FORMS & TOOLS */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-10">
                <InquiryForm
                  title="Ivy League Path"
                  subtitle="Get a personalized roadmap to the best American universities from our expert team."
                  buttonText="Start My Evaluation"
                  defaultDestination="USA"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                  <h4 className="text-xl font-bold mb-6">American Visa Support</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Navigate the F-1 visa process with ease. Our experts have a 98% success rate in helping students secure their US study permits.
                  </p>
                  <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all transform active:scale-95">
                    Consult Our Team
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

export default BlogUSA;
