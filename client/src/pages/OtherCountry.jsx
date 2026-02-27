import React from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiAward, FiShield, FiBriefcase, FiMapPin, FiNavigation, FiZap, FiCheckCircle } from "react-icons/fi";
import InquiryForm from "../components/InquiryForm";

const OtherCountry = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
              <FiNavigation className="text-primary animate-pulse" /> Frontier Destinations
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Explore <br />
              <span className="text-primary italic">Global Borders.</span>
            </h1>

            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-lg">
              Beyond the traditional hubs, we open doors to world-class education in Europe, Asia, and more. Qualitative, reliable, and expert-led consultancy for the modern student.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm font-medium">Joined by <span className="text-slate-900 font-bold">500+ students</span> this year</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200"
                alt="European Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white font-bold flex items-center gap-2"><FiGlobe className="text-secondary" /> Europe & Beyond</p>
                <p className="text-white/80 text-xs mt-1 tracking-wide">Germany, France, Japan, South Korea & more.</p>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-secondary text-slate-900 p-6 rounded-3xl shadow-xl rotate-12 hidden lg:block">
              <FiZap className="text-2xl mb-1" />
              <p className="font-black text-xl leading-none">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter">Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-3 space-y-20">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-extrabold mb-8 leading-tight">
                  Diverse <span className="text-secondary italic">Academic Landscape.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <FiAward className="text-3xl text-primary mb-6" />
                    <h3 className="text-xl font-bold mb-4">Elite Scholarships</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Access over 100,000 government-funded and private scholarship programs across Europe and Asia.</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <FiBriefcase className="text-3xl text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-4">Post-Study Rights</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Stay and build your career globally with flexible temporary residence and work permits.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <FiCheckCircle className="text-primary" /> Emerging Hubs
                </h3>
                <div className="space-y-4">
                  {[
                    { country: "Germany", focus: "Engineering & Innovation", desc: "The industrial heart of Europe with tuition-free public universities." },
                    { country: "Japan/South Korea", focus: "Technology & Culture", desc: "Cutting-edge research hubs with specialized scholarship paths." },
                    { country: "Nordic Countries", focus: "Happiness & Research", desc: "Top-ranked living standards and world-class research facilities." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-secondary text-xl font-bold group-hover:bg-secondary group-hover:text-slate-900 transition-colors shrink-0">
                        {item.country[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.country} – <span className="text-slate-500 font-medium">{item.focus}</span></h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="p-10 bg-primary/10 rounded-[40px] border border-primary/20 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-4">Erasmus+ Benefits</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Under the Erasmus+ scheme, students studying in one of Europe’s 33 Erasmus countries may be exempt from tuition fees and receive bursaries for travel and living costs.</p>
                <div className="flex flex-wrap gap-4">
                  {["Tuition Waiver", "Living Stipend", "Cultural Exchange"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-28"
              >
                <InquiryForm
                  title="Start Your Journey"
                  subtitle="Fill the details below to receive a personalized roadmap for your dream destination."
                  buttonText="Get Free Assessment"
                  defaultDestination="Others"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default OtherCountry;
