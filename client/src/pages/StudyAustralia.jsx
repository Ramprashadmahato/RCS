import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGlobe,
  FiClock,
  FiFileText,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiZap,
  FiAward,
  FiTrendingUp
} from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const StudyAustralia = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
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
              <span className="text-secondary italic">Australia.</span>
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              Australia is ranked 3rd in top study abroad destinations, offering world-leading universities and widely recognized academic programs.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Post-Study Work</p>
                  <p className="text-slate-900 font-bold">2 - 6 Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Primary Intakes</p>
                  <p className="text-slate-900 font-bold">Feb, July, Oct</p>
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
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200"
              alt="Australia"
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/3] border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

     

      {/* ================= MAIN CONTENT + FORM ================= */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Why <span className="text-primary italic">Australia</span> is the perfect choice.
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  Australia is a modern, democratic country with world-class education, a vibrant multicultural society, and a career-focused academic environment. It's consistently ranked among the safest and most livable countries in the world.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    { title: "Work Freedom", icon: <FiBriefcase />, color: "text-secondary", desc: "Work up to 48 hours per fortnight during sessions and unlimited hours during breaks." },
                    { title: "Family Support", icon: <FiUsers />, color: "text-primary", desc: "Eligible dependents can join you and may have full or partial work rights." },
                    { title: "Global Recognition", icon: <FiAward />, color: "text-secondary", desc: "Degrees from Australian universities are highly valued by employers worldwide." },
                    { title: "High Living Standards", icon: <FiZap />, color: "text-primary", desc: "Consistently top-ranked cities for student safety and quality of life." }
                  ].map((benefit, i) => (
                    <div key={i} className="p-8 bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-secondary transition-colors">
                      <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl mb-6 ${benefit.color}`}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <FiFileText className="text-secondary" /> Visa Document Checklist
                  </h3>
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      "Letter of Offer & ECOE",
                      "Valid Passport & Digital ID",
                      "Simplified GTE Assessment",
                      "Academic Transcripts & Degrees",
                      "English Test (IELTS/PTE)",
                      "Financial Capacity Evidence",
                      "Overseas Student Health Cover",
                      "Relationship Evidence (if req.)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                        <FiCheckCircle className="text-secondary shrink-0" />
                        <span>{item}</span>
                      </div>
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
                  title="Secure Your Admission"
                  subtitle="Speak with our Australian certified counselors for a free visa roadmap."
                  buttonText="Start My Application"
                  defaultDestination="Australia"
                />

                <div className="mt-8 p-8 bg-white border border-slate-100 rounded-[32px] shadow-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FiTrendingUp className="text-primary" /> Key Statistics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                      <span className="text-slate-500 text-sm">QS Ranking Institutions</span>
                      <span className="font-bold text-slate-900">7 in Top 100</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                      <span className="text-slate-500 text-sm">Visa Success Rate</span>
                      <span className="font-bold text-primary">High (level 1)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                      <span className="text-slate-500 text-sm">Part-time Min Wage</span>
                      <span className="font-bold text-slate-900">~$23/hr</span>
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

export default StudyAustralia;
