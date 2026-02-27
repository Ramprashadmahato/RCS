import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiBookOpen,
  FiGlobe,
  FiFileText,
  FiAward,
  FiUsers,
  FiCpu,
  FiStar,
  FiSearch
} from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const CareerCounselling = () => {
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
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="Advisor talking to student"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block">
              Free Expert Guidance
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Navigate Your <br />
              <span className="text-secondary italic text-cyan-400">Career Path.</span>
            </h1>

            <p className="text-slate-300 text-xl mb-10 leading-relaxed max-w-lg">
              Planning a better future? Build it by studying abroad with OneStep Global Education. Our certified experts guide you toward your dream university, free of cost.
            </p>

            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/20">
                Book Free Session
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10 backdrop-blur-md">
                Our Success Stories
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10 shadow-3xl">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "Successful Visas", val: "10k+", color: "text-primary" },
                  { label: "Global Partners", val: "500+", color: "text-secondary" },
                  { label: "Average Score", val: "7.5+", color: "text-cyan-400" },
                  { label: "Years Experience", val: "15+", color: "text-white" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className={`text-3xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Where <span className="text-primary italic">Ambition</span> <br /> Meets Strategy.
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  Deciding on a course of study in a new country can be overwhelming. We simplify the complexity by providing a structured roadmap for students targeting Australia, UK, USA, New Zealand, Canada, and beyond.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                  {[
                    { icon: <FiUsers />, title: "One-on-One Counseling", desc: "Tailored sessions to understand your goals and constraints." },
                    { icon: <FiSearch />, title: "University Shortlisting", desc: "Data-driven selection of institutions that match your profile." },
                    { icon: <FiFileText />, title: "SOP & Documentation", desc: "Expert feedback to ensure your application stands out from the crowd." },
                    { icon: <FiCheckCircle />, title: "Visa Mastery", desc: "Comprehensive guidance on financial and academic documentation." }
                  ].map((item, i) => (
                    <div key={i} className="group p-8 bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-slate-200/50 hover:border-primary transition-all">
                      <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-3xl font-extrabold mb-6">Our 6-Step Excellence Procedure</h3>
                  <div className="space-y-6">
                    {[
                      "In-depth Student Profiling & Aptitude Check",
                      "Selection of Country & Course alignment",
                      "Step-by-step Application & SOP review",
                      "Scholarship & Financial Aid identification",
                      "Mock Visa Interviews & Documentation Check",
                      "Global Student Support & Pre-Departure Brief"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-300">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-xs shrink-0">
                          0{i + 1}
                        </div>
                        <p className="font-medium">{step}</p>
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
                  title="Talk to an Expert"
                  subtitle="Reserve your free 30-minute counseling session with our senior advisors today."
                  defaultDestination="Counselling"
                />

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-lg">
                    <FiPhone className="text-primary mb-3 text-xl" />
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Call Now</p>
                    <p className="text-slate-900 font-bold text-sm">980-0000000</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-lg">
                    <FiMapPin className="text-secondary mb-3 text-xl" />
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Visit Us</p>
                    <p className="text-slate-900 font-bold text-sm">Kathmandu Hub</p>
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

export default CareerCounselling;
