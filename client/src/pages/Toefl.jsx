import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiGlobe, FiClock, FiFileText, FiBookOpen, FiAward, FiStar, FiVolume2 } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Toefl = () => {
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Students collaborating"
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
              Unlock Global Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Master the <br />
              <span className="text-primary italic">TOEFL iBT.</span>
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              Empowering students with precise strategies and language skills to conquer the world's most trusted English proficiency test.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center text-xl border border-secondary/20">
                  <FiVolume2 />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Section Focus</p>
                  <p className="font-bold">Balanced Skills</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center text-xl border border-primary/20">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Duration</p>
                  <p className="font-bold">3 Hour Test</p>
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
                <h3 className="text-white text-2xl font-bold mb-2">TOEFL Prep Fee</h3>
                <p className="text-slate-400">Expert Coaching Session</p>
              </div>
              <div className="text-center mb-10">
                <span className="text-5xl font-black text-white">NRs. 6,500</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Official ETS Materials", "Simulated iBT Mock Tests", "Microphone-recorded Speaking Prep", "In-depth Writing Feedback"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <FiCheckCircle className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-secondary hover:bg-secondary/90 text-slate-900 py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Enroll for classes
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
                  Academic English <span className="text-secondary italic">Excellence.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  TOEFL (Test of English as a Foreign Language) is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. It is highly preferred by prestigious institutions in the US, Canada, and Australia.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiBookOpen className="text-3xl text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Academic Reading</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Learn to navigate complex academic texts and extract key information efficiently.</p>
                  </div>
                  <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
                    <FiAward className="text-3xl text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-3">Integrated Writing</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Master the art of combining reading, listening, and writing into cohesive essays.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8">iBT Section Breakdown</h3>
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
                        { section: "Reading", time: "54 - 72 Minutes" },
                        { section: "Listening", time: "41 - 57 Minutes" },
                        { section: "Speaking", time: "17 Minutes" },
                        { section: "Writing", time: "50 Minutes" }
                      ].map((item, i) => (
                        <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-6 font-bold text-slate-900">{item.section}</td>
                          <td className="p-6 font-medium text-secondary">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-10 bg-slate-900 text-white rounded-[40px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-6">Expert Methodology</h3>
                  <p className="text-slate-400 mb-8">Our TOEFL prep combines psychological boosting with traditional language instruction. We focus on 'integrated tasks' which are the most challenging part of the iBT format.</p>
                  <div className="flex flex-wrap gap-4">
                    {["Full Classroom Support", "Lab-based Mock Tests", "Score Diagnostics"].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/10">{tag}</span>
                    ))}
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
                  title="Enroll in TOEFL"
                  subtitle="Start your journey to academic success with our expert TOEFL trainers."
                  defaultDestination="TOEFL"
                />

                <div className="mt-8 bg-slate-100 rounded-[32px] p-8 relative overflow-hidden">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <FiGlobe className="text-primary" /> Official Test Hub
                  </h4>
                  <p className="text-slate-500 text-sm mb-4">You can register for the official ETS TOEFL exam through our office with ease.</p>
                  <div className="flex justify-between items-center py-4 border-t border-slate-200">
                    <span className="text-slate-600 font-medium">Official Exam Fee</span>
                    <span className="text-slate-900 font-black">NPR 23,500</span>
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

export default Toefl;
