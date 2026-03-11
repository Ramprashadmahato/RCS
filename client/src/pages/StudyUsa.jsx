import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiMapPin, FiBriefcase, FiZap } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const StudyUSA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
              <FiGlobe className="text-secondary" /> Study Abroad Destination
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Study in <br />
              <span className="text-primary italic">USA.</span>
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              Unlock your gateway to global opportunities. The United States offers world-class education with degrees recognized across the globe.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">OPT Opportunity</p>
                  <p className="text-slate-900 font-bold">1 - 3 Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiZap />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Institution Type</p>
                  <p className="text-slate-900 font-bold">Public/Private</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="University Campus"
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/3] border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

    
      {/* MAIN CONTENT + FORM */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
                  The Land of <span className="text-secondary italic">Opportunities.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  From the Big Easy to the Big Apple, the United States is truly the land of opportunities. The US is home to the highest number of international students in the world, offering unmatched educational choices and career pathways.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <FiBriefcase className="text-secondary" /> Study & Living Cost
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      Living cost ranges from $10,000 – $15,000 per year. Undergraduate: $15k-$35k*, Postgraduate: $20k-$40k*.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <FiCheckCircle className="text-primary" /> Popular Courses
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      Engineering, Medicine, Business Management, Pharmaceutical Studies, and Science & Mathematics are top choices.
                    </p>
                  </div>
                </div>

                <div className="mt-16 bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <FiFileText className="text-primary" /> Admission Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-xs">Exams Required</h4>
                      <ul className="space-y-3">
                        {["IELTS / TOEFL / PTE", "SAT (Undergraduate)", "GRE / GMAT (Graduate)", "Duolingo English Test"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300">
                            <FiCheckCircle className="text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-4 uppercase tracking-widest text-xs">Essential Documents</h4>
                      <ul className="space-y-3">
                        {["Transcripts & Diplomas", "Financial Documents", "Letters of Recommendation", "Statement of Purpose"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300">
                            <FiCheckCircle className="text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  title="Study in USA"
                  subtitle="Get expert guidance for your US Student Visa (F-1)."
                  defaultDestination="USA"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default StudyUSA;
