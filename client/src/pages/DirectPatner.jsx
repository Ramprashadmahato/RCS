import React from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiAward, FiCheckCircle, FiSearch } from "react-icons/fi";

const DirectPartner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.05 } }
  };

  const australianUniversities = [
    { name: "University Technology Sydney", cricos: "00099F" },
    { name: "University of Wollongong", cricos: "00102E" },
    { name: "La Trobe University", cricos: "00115M" },
    { name: "Western Sydney University", cricos: "00917K" },
    { name: "Central Queensland University", cricos: "00219C" },
    { name: "Federation University", cricos: "00103D" },
    { name: "James Cook University", cricos: "00117J" },
    { name: "UTS College", cricos: "00859D" },
    { name: "University of Newcastle", cricos: "00109J" },
    { name: "Torrens University", cricos: "03389E" },
    { name: "Australian Catholic University", cricos: "00004G" },
    { name: "Bond University", cricos: "00017B" },
    { name: "Victoria University", cricos: "02475D" },
    { name: "International College of Hotel Management", cricos: "02914G" },
    { name: "Murdoch Institute of Technology", cricos: "03127E" },
    { name: "TAFE SA", cricos: "00092B" },
    { name: "Excelsia College Sydney", cricos: "02664K" },
    { name: "Melbourne Institute of Technology", cricos: "01545C, 03245K (NSW)" },
    { name: "Education Center of Australia", cricos: "02644C" },
    { name: "Curtin College", cricos: "02042G" },
    { name: "Le Cordon Bleu Australia", cricos: "00099F" },
    { name: "Kent Institute Australia", cricos: "00161E" },
    { name: "Victorian Institute of Technology", cricos: "02044E" },
    { name: "Navitas", cricos: "03312D" },
    { name: "Think Education", cricos: "00246M" },
    { name: "Macleay College", cricos: "00899G" },
    { name: "Australian Institute of Higher Education", cricos: "03147A" },
    { name: "King's Own Institute", cricos: "03171A" },
  ];

  const newZealandInstitutions = [
    "UC International College",
    "The University of Auckland",
    "Taylor's College",
    "The University of Waikato",
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050335392-938511794244?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20"
            alt="University campus"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30 mb-8 inline-block">
              Global Partnerships
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Our <span className="text-secondary italic text-cyan-400">Direct Partners.</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
              We are proud to represent these world-class institutions, providing students with direct access to premier educational opportunities globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* AUSTRALIA SECTION */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-extrabold text-slate-900 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                Australian Universities
              </h2>
              <p className="text-slate-500 mt-4 text-lg">Leading research and academic institutions across Australia.</p>
            </motion.div>
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter institutions..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
              />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {australianUniversities.map((uni, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 text-primary rounded-2xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all">
                    <FiAward />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-md">
                    CRICOS: {uni.cricos}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  {uni.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* NEW ZEALAND SECTION */}
        <section className="mb-32">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 flex items-center gap-4">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              New Zealand
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newZealandInstitutions.map((inst, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-8 rounded-[32px] text-white hover:bg-primary transition-all shadow-2xl group"
              >
                <FiGlobe className="text-secondary text-2xl mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold leading-tight">
                  {inst}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-100 p-12 rounded-[40px] border border-dashed border-slate-300 text-center">
              <h3 className="text-2xl font-bold text-slate-400 mb-2">USA & Canada</h3>
              <p className="text-slate-400 font-medium">New institution partnerships coming soon.</p>
            </div>
            <div className="bg-slate-100 p-12 rounded-[40px] border border-dashed border-slate-300 text-center">
              <h3 className="text-2xl font-bold text-slate-400 mb-2">United Kingdom</h3>
              <p className="text-slate-400 font-medium">Expanding our direct representations in UK.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DirectPartner;
