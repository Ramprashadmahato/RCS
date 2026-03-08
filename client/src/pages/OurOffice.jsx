import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiExternalLink,
  FiChevronDown,
  FiGlobe
} from "react-icons/fi";

const OurOffice = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const faqs = [
    {
      question: "How can I book an appointment at your office?",
      answer:
        "You can contact the regional office directly via phone or email to schedule an appointment with one of our education consultants.",
    },
    {
      question: "Do I need to pay for counselling services?",
      answer:
        "Initial counselling sessions are free of charge. Additional services may depend on your selected program and country.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes, our experienced visa advisors provide complete support throughout your visa application process.",
    },
    {
      question: "Can I attend events without visiting an office?",
      answer:
        "Yes, we regularly host online webinars and virtual events that you can attend from anywhere in the world.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            className="w-full h-full object-cover opacity-40"
            alt="Office"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/30"
          >
            Global Presence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight"
          >
            Our Global <span className="text-secondary italic">Network</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-slate-400 text-xl"
          >
            With offices strategically located across major international hubs, we connect students with world-class educational opportunities.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-24">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-16">

          {/* Global HQ */}
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <FiGlobe className="text-primary" /> Global Headquarters
            </h2>

            <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 p-10 space-y-8 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shrink-0"><FiMapPin /></div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">UK Office</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Level 23, 27 Old Gloucester St, London, WC1N 3AX, UK
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl shrink-0"><FiPhone /></div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Contact Numbers</h4>
                  <p className="text-slate-500">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl shrink-0"><FiMail /></div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Official Email</h4>
                  <p className="text-slate-500">info@onestepglobaleducation.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
              Expert Advice
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    {faq.question}
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${activeFAQ === index ? "rotate-180 bg-primary text-white" : ""}`}>
                      <FiChevronDown />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 text-slate-500 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Regional Offices */}
        <div className="lg:col-span-3">
          <motion.h2 {...fadeInUp} className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
            <FiMapPin className="text-secondary" /> Regional Hubs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: "Dubai, UAE",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
                address: "Office 1204, Aspect Tower, Business Bay, Dubai, UAE",
                phone: "+971 4 123 4567",
                email: "dubai@onestepglobaleducation.com",
                hours: "Sun - Thu: 9AM - 6PM",
                color: "text-blue-500 bg-blue-50"
              },
              {
                city: "Kathmandu, Nepal",
                image: "https://images.unsplash.com/photo-1544376374-106555cc1cb4",
                address: "Putalisadak, Kathmandu, Nepal (Opposite to Kumari Bank)",
                phone: "+977 1 443 2567",
                email: "ktm@onestepglobaleducation.com",
                hours: "Sun - Fri: 10AM - 6PM",
                color: "text-pink-500 bg-pink-50"
              },
              {
                city: "Hanoi, Vietnam",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
                address: "Level 10, Charmvit Tower, 117 Tran Duy Hung, Hanoi",
                phone: "+84 24 9876 5432",
                email: "vietnam@onestepglobaleducation.com",
                hours: "Mon - Fri: 8:30AM - 5:30PM",
                color: "text-cyan-500 bg-cyan-50"
              },
              {
                city: "Colombo, Sri Lanka",
                image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
                address: "No. 45, Alfred House Gardens, Colombo 03, Sri Lanka",
                phone: "+94 11 234 5678",
                email: "srilanka@onestepglobaleducation.com",
                hours: "Mon - Sat: 9AM - 5PM",
                color: "text-indigo-500 bg-indigo-50"
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 border border-white/20">
                    {office.city}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{office.city}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-400 font-bold uppercase tracking-wider">
                        <FiClock className="text-secondary" />
                        {office.hours}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-slate-500">
                      <FiMapPin className="mt-1 text-slate-400 shrink-0" />
                      <p className="text-sm leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500">
                      <FiPhone className="text-slate-400 shrink-0" />
                      <p className="text-sm font-bold">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500">
                      <FiMail className="text-slate-400 shrink-0" />
                      <p className="text-sm text-secondary font-bold">{office.email}</p>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-slate-50 py-4 rounded-2xl font-bold text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <FiExternalLink /> View on Map
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default OurOffice;
