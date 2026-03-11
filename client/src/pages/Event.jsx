import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiBell,
  FiMapPin,
  FiFilter,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const EventsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/event.png"
            className="w-full h-full object-cover opacity-30"
            alt="Events Header"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/20 text-secondary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-secondary/30"
          >
            Stay Informed
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight"
          >
            Ignite Your <span className="text-blue-600 italic">Global</span> Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-slate-400 text-xl"
          >
            Join university summits, meet-and-greet sessions, and career workshops designed to launch your international academic path.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ================= UPDATED NOTIFICATION CARD ================= */}
        <motion.div
          {...fadeInUp}
          className="relative mb-24 overflow-hidden rounded-[40px] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 p-12 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
              <FiBell className="text-secondary text-2xl" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
              Get Event Alerts
            </h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Be the first to hear about new university sessions and exclusive workshops in your city.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-4 gap-16">

          {/* SIDEBAR FILTER */}
          <aside className="lg:col-span-1 space-y-10">
            <div {...fadeInUp}>
              <div className="flex items-center gap-2 mb-6 text-slate-900">
                <FiFilter className="text-primary" />
                <h3 className="font-bold uppercase tracking-wider text-sm">Refine Events</h3>
              </div>
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search sessions..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                />
              </div>
            </div>

            <div {...fadeInUp} className="p-8 bg-slate-900 rounded-[30px] text-white">
              <h4 className="font-bold mb-4">Need Help?</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Not sure which session is right for you? Talk to our expert counselors today.</p>
              <Link to="/our-offices" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Contact Us <FiArrowRight />
              </Link>
            </div>
          </aside>

          {/* EVENT CARDS GRID */}
          <div className="lg:col-span-3">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">All Sessions</h2>
              <span className="text-slate-400 text-sm font-medium">Last updated: Today</span>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10"
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-[40px] group overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                      <FiCalendar className="text-primary" />
                      {event.date}
                    </div>
                  </div>

                  <div className="p-8 pb-10">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-secondary mb-4 bg-secondary/10 px-3 py-1 rounded-md">
                      {event.category}
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-900 mb-4 line-clamp-2 leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-8">
                      <FiMapPin className="text-primary" />
                      {event.location}
                    </div>
                    <Link
                      to={`/event/${index}`}
                      className="inline-flex items-center gap-2 font-extrabold text-slate-900 group-hover:text-primary transition-all underline decoration-slate-200 underline-offset-8"
                    >
                      View Event Details <FiArrowRight className="group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

const events = [
 {
  title: "Australia Information Session – La Trobe University Summit",
  category: "Australia",
  location: "Kathmandu Main Office",
  date: "April 06, 2024",
  image: "/austrilia.png",
},
  {
    title: "Global Recruitment Fair: Charles Darwin University",
    category: "Recruitment",
    location: "Lalitpur Branch",
    date: "March 06, 2024",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
  {
    title: "James Cook University Insights & Scholarship Briefing",
    category: "Scholarships",
    location: "Pokhara Branch",
    date: "May 05, 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    title: "UK Special Academic Session – Swansea University",
    category: "United Kingdom",
    location: "Itahari Branch Office",
    date: "March 04, 2024",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
  },
];

export default EventsPage;
