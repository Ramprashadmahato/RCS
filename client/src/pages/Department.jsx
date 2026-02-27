import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiUsers,
  FiGlobe,
  FiBookOpen,
  FiHeart,
  FiBriefcase,
  FiHome,
  FiDollarSign,
  FiShield,
  FiMapPin,
  FiArrowRight
} from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const Department = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: FiUsers, title: "Cultural Integration", desc: "Orientation sessions focused on personal and cultural growth abroad." },
    { icon: FiGlobe, title: "Local Insight", desc: "Understanding customs and traditions before you land." },
    { icon: FiBookOpen, title: "Academic Prep", desc: "Adjust to new learning styles and classroom expectations." },
    { icon: FiHeart, title: "Emotional Support", desc: "Expert guidance through stages of culture shock and adjustment." },
    { icon: FiShield, title: "Well-being & Safety", desc: "Comprehensive briefing on local laws, safety, and health services." },
    { icon: FiDollarSign, title: "Banking & FX", desc: "Assistance with international banking and currency exchange." },
    { icon: FiBriefcase, title: "Part-time Work", desc: "Guidance on visa work rules and finding local opportunities." },
    { icon: FiHome, title: "Settling In", desc: "Practical strategies for finding accommodation and dealing with homesickness." },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="Study abroad travel"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block">
              Transition Support
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Pre & Post <br />
              <span className="text-secondary italic text-cyan-400">Departure Briefings.</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              We ensure you feel at home even when you're thousands of miles away. Complete transition support for your global journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Your <span className="text-primary italic">Comfort</span> is Our Priority.
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  Moving to a new country is a massive milestone. We're committed to making sure you feel supported, informed, and confident at every step of your study overseas journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  {services.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group p-8 bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-slate-200/50 hover:border-secondary transition-all"
                    >
                      <div className="w-14 h-14 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                        <item.icon />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="text-3xl font-extrabold mb-4">Join Our Next Session</h3>
                      <p className="text-slate-400 mb-0">We host weekly orientation webinars for students heading to USA, UK, Canada, and Australia.</p>
                    </div>
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all whitespace-nowrap">
                      View Schedule
                    </button>
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
                  title="Reserve Your Spot"
                  subtitle="Fill the form to register for our next group briefing or request a one-on-one session."
                  defaultDestination="Briefing"
                />

                <div className="mt-8 p-8 bg-white border border-slate-100 rounded-[32px] shadow-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Why Attend?</h4>
                  <ul className="space-y-4">
                    {[
                      "Connect with other students going to your same city.",
                      "Direct Q&A with alumni and senior advisors.",
                      "Essential checklists for luggage and documents.",
                      "Free International SIM card guidance."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                        <FiCheckCircle className="text-primary mt-1 shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Department;
