import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const StudyUk = () => {
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
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
              <FiGlobe className="text-primary" /> Study Abroad Destination
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Study in <br />
              <span className="text-secondary italic">United Kingdom.</span>
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              Experience timeless academic excellence and prestige. The UK offers world-class education with degrees that are respected and recognized globally.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Post-Study Work</p>
                  <p className="text-slate-900 font-bold">2 Years (Graduate Route)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiAward />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Degree Value</p>
                  <p className="text-slate-900 font-bold">Globally Respected</p>
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
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1513151239018-d45a86399344" // Oxford/Classic UK Campus
              alt="UK University"
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/3] border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* TOP UK UNIVERSITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-serif">Prestigious Institutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore some of the world's most ancient and high-ranking universities in the UK.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "University of Oxford", location: "Oxford, UK", img: "1606216794152-de394ae08442" },
              { name: "University of Cambridge", location: "Cambridge, UK", img: "1559863345-0cd6251ef05b" },
              { name: "Imperial College London", location: "London, UK", img: "1533105079780-92b9be482077" }
            ].map((uni, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[32px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${uni.img}?auto=format&fit=crop&q=80&w=800`}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{uni.name}</h3>
                  <p className="text-slate-500 flex items-center gap-2 text-sm">
                    <FiMapPin className="text-secondary" /> {uni.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + FORM */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Why Study in the <span className="text-primary italic">United Kingdom?</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  The UK is home to 4 of the world's top 10 universities and offers over 150 higher education institutions across England, Scotland, Wales, and Northern Ireland. With a culture steeped in history and a future-focused academic approach, it's a prime destination for global students.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 text-primary">
                      <FiBriefcase /> Graduate Route
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      International students can stay and work in the UK for 2 years (3 years for PhD) after completing their studies through the Graduate Route.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 text-secondary">
                      <FiCheckCircle /> Accelerated Degrees
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      Many UK undergraduate courses take 3 years to complete, and Masters take only 1 year, saving you time and living costs.
                    </p>
                  </div>
                </div>

                <div className="mt-16 bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-secondary">
                    <FiFileText /> Essential Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Academic & Language</h4>
                      <ul className="space-y-3">
                        {["IELTS / PTE / TOEFL", "Academic Transcripts", "Standardized Exams (if req.)", "English Waiver (Conditions apply)"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                            <FiCheckCircle className="text-secondary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Visa Documents</h4>
                      <ul className="space-y-3">
                        {["CAS (Confirmation of Acceptance)", "Financial Proof", "TB Reference (if req.)", "Valid Passport"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                            <FiCheckCircle className="text-secondary shrink-0" /> {item}
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
                  title="Study in UK"
                  subtitle="Get expert guidance for your UK Student Visa and Tier-4 application."
                  defaultDestination="UK"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default StudyUk;
