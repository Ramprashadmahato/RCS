import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiFileText,
  FiClock,
  FiShield,
  FiGlobe,
  FiBriefcase,
  FiSearch
} from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const VisaApplication = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const steps = [
    { title: "Documentation Review", icon: <FiSearch />, desc: "Thorough verification of your academic, financial, and personal documents." },
    { title: "Form Assistance", icon: <FiFileText />, desc: "Expert help in filling out complex visa application forms without errors." },
    { title: "Financial Guidance", icon: <FiShield />, desc: "Guidance on proof of funds, sponsorship, and liquid assets verification." },
    { title: "Interview Prep", icon: <FiCheckCircle />, desc: "Mock interviews to build confidence for your embassy appearance." }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
              <FiShield className="text-secondary" /> Secure Your Future
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Expert <br />
              <span className="text-primary italic">Visa Mastery.</span>
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              Navigating immigration protocols can be daunting. We provide a seamless, stress-free visa application experience with a 98% success rate.
            </p>

            <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-50 text-primary rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiCheckCircle />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Success Rate</p>
                  <p className="text-slate-900 font-bold">98% Approved</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 text-secondary rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  <FiGlobe />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Global reach</p>
                  <p className="text-slate-900 font-bold">15+ Countries</p>
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
              src="https://images.unsplash.com/photo-1544725176-722e035ac84d?auto=format&fit=crop&q=80&w=1200"
              alt="Visa and Passport"
              className="rounded-[40px] shadow-2xl w-full object-cover aspect-[4/3] border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STEPS SECTION ================= */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4">Our Processing Strategy</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">We follow a rigorous internal protocol to ensure every application is submission-ready.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 rounded-[32px] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT + FORM ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Seamless Visa <span className="text-primary italic">Assistance.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  A student visa is your pathway to international education. It indicates that you are allowed to enter the country and stay for the duration of your studies. At OneStep Global Education, we don't just fill forms; we architect your success story.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="w-12 h-12 bg-pink-100 text-primary rounded-full flex items-center justify-center shrink-0">
                      <FiClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">When should you apply?</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">As soon as you receive your Letter of Acceptance. Visa processing times vary by destination, so starting early is the key to avoiding last-minute stress.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 text-secondary rounded-full flex items-center justify-center shrink-0">
                      <FiBriefcase className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Essential Checklist</h4>
                      <ul className="grid grid-cols-2 gap-3 mt-4">
                        {["Valid Passport", "Financial Proofs", "Admission Letter", "IELTS/PTE Scored", "Health Insurance", "Police Clearance"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                            <FiCheckCircle className="text-primary shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-10 bg-slate-100 rounded-[40px] border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Expert Review Protocol</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">Every file at OneStep Global Education undergoes a triple-check process by our senior visa specialists to ensure zero errors before embassy submission.</p>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                    Download Visa Guide
                  </button>
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
                  title="Start Visa Process"
                  subtitle="Register today for a free documentation assessment with our experts."
                  defaultDestination="Visa"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default VisaApplication;
