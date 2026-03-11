import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiGlobe, FiUsers, FiBook } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Scholarship = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            className="w-full h-full object-cover opacity-40"
            alt="Scholarship"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/20 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/30"
          >
            Financial Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight"
          >
            Scholarship <span className="text-blue-600 italic">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-slate-400 text-xl"
          >
            Access the best scholarships from world-class universities around the globe. We help you secure the funding you deserve.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-20">

        {/* ================= LEFT: FORM ================= */}
        <div className="lg:col-span-3">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
              Unlock Your <span className="text-secondary italic">Potential.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              At OneStep Global Education, we believe that financial barriers should never stand in the way of a brilliant education. Our dedicated scholarship advisors work tirelessly to match students with funding opportunities that fit their academic profile and goals.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "Merit-Based", icon: <FiAward />, desc: "Scholarships awarded for academic excellence and outstanding achievements." },
                { title: "Need-Based", icon: <FiUsers />, desc: "Financial aid designed to support students based on their financial circumstances." },
                { title: "Research Grants", icon: <FiBook />, desc: "Specific funding for graduate students pursuing innovative research projects." },
                { title: "Global Reach", icon: <FiGlobe />, desc: "Access to international scholarship networks across UK, USA, and Australia." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="text-primary text-2xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-secondary" /> How to Apply?
              </h3>
              <ul className="space-y-4">
                {[
                  "Schedule a free consultation with our scholarship expert.",
                  "Review your academic profile and eligibility for various programs.",
                  "Prepare necessary documentation (Transcripts, SOP, LOR).",
                  "Submit applications through our streamlined partnership portal."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-secondary shrink-0 mt-1">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE FORM ================= */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-28"
          >
            <InquiryForm
              title="Scholarship Inquiry"
              subtitle="Let's find the best scholarship for your academic profile."
            />
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default Scholarship;
