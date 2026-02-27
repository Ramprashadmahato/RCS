import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaGraduationCap, FaCheckCircle, FaAward } from "react-icons/fa";

const Message = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
            className="w-full h-full object-cover"
            alt="Office background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.3em] border border-primary/30"
          >
            Leadership Vision
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight"
          >
            Message From Our <span className="text-secondary italic">Chairman</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-slate-400 text-xl font-medium"
          >
            "Empowering the next generation of global leaders through accessible, world-class education."
          </motion.p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT: CHAIRMAN PROFILE CARD */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5"
            >
              <div className="sticky top-32">
                <div className="bg-white rounded-[40px] shadow-2xl p-2 border border-slate-100 overflow-hidden group">
                  <div className="relative overflow-hidden rounded-[38px]">
                    <img
                      src="/team1.png" // Using existing team1.png as chairman
                      alt="Mr. Nayan Lammichhane"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                      <h3 className="text-3xl font-bold mb-2">Mr. Nayan Lammichhane</h3>
                      <p className="text-secondary font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                        <FaAward /> Executive Chairman
                      </p>
                    </div>
                  </div>
                </div>

                {/* QUALIFICATIONS BOX */}
                <div className="mt-8 grid grid-cols-1 gap-4">
                  {[
                    "MBA - University of Technology Sydney, Australia",
                    "MBA - Sikkim Manipal University, India",
                    "BBS - Tribhuvan University, Nepal",
                    "ICEF-ITAC-0342 | QEAC-I 301 Certified"
                  ].map((qual, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-all"
                    >
                      <FaCheckCircle className="text-secondary shrink-0" />
                      <span className="text-slate-600 font-medium text-sm">{qual}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT: THE MESSAGE */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="relative p-12 bg-white rounded-[50px] shadow-2xl shadow-slate-200/50 border border-slate-50">
                <FaQuoteLeft className="text-5xl text-secondary/20 absolute top-10 left-10" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                    Greetings from OneStep Global Education!
                  </h2>

                  <div className="space-y-8 text-slate-600 leading-relaxed text-lg text-justify">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
                      OneStep Global Education is a specialized educational consultancy dedicated to
                      providing students with boundless opportunities across the globe.
                      Our success is due to the enormous effort exerted by a panel of
                      passionate, skillful, and knowledgeable workforce. Indeed, we have
                      passed a decade with fabulous stories of success.
                    </p>

                    <p>
                      The selection of educational institutions is not only
                      based on financial and academic status but also in consideration of
                      an accelerated academic learning atmosphere, cultural sensation,
                      and widespread awareness. Thus, it is not surprising when we
                      successfully place our students in prestigious universities and
                      colleges abroad incessantly every year.
                    </p>

                    <p>
                      We are a team of well-versed, committed, and senior education
                      counselors who comprehend the deep-seated needs of students and their families.
                      Our student-centered approach provides abundant information on all
                      available options to help students make prudent, life-changing decisions.
                    </p>

                    <p className="font-bold text-slate-900 border-l-4 border-primary pl-6 py-2 bg-slate-50 rounded-r-xl">
                      "We are and will remain a connection across cultures and
                      consistently support the academic pursuits of the younger
                      generation in the days ahead."
                    </p>
                  </div>

                  {/* SIGNATURE SECTION */}
                  <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Warm Regards,</p>
                      <p className="font-serif text-4xl text-slate-900 mb-2 italic">Nayan Lammichhane</p>
                      <p className="text-primary font-extrabold">Executive Chairman</p>
                    </div>
                    <div className="hidden sm:block">
                      <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border-2 border-dashed border-slate-200">
                        <FaGraduationCap className="text-3xl text-slate-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUCCESS HIGHLIGHT */}
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[30px] text-white">
                  <h4 className="text-3xl font-bold text-secondary mb-2">10+</h4>
                  <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">Years of Success</p>
                </div>
                <div className="p-8 bg-white rounded-[30px] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h4 className="text-3xl font-bold text-primary mb-2">5000+</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">Students Placed</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Message;
