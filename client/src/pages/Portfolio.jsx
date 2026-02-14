
import React from "react";
import { Code, Smartphone, PenTool, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  
  const filters = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"];
  
  const projects = [
    {
      title: "Enterprise CRM Dashboard",
      category: "Web Development",
      img: "/p1.png",
      desc: "Designed and developed a CRM platform enhancing client management and analytics for a large enterprise.",
    },
    {
      title: "Intuitive Productivity App",
      category: "Mobile Apps",
      img: "/p2.png",
      desc: "A modern productivity tool built with secure authentication and seamless integrations for organizations.",
    },
    {
      title: "Ecommerce UX Redesign",
      category: "UI/UX Design",
      img: "/p3.png",
      desc: "Complete overhaul of UX workflows and interface for a leading ecommerce brand to improve conversions.",
    },
    {
      title: "Scalable Cloud Infrastructure",
      category: "Cloud Solutions",
      img: "/p4.png",
      desc: "Deployed a cloud-based server architecture ensuring scalability, security, and optimized load handling.",
    },
    {
      title: "Real-time Analytics Platform",
      category: "Web Development",
      img: "/p5.png",
      desc: "Developed a real-time data analytics platform for finance and enterprise reporting.",
    },
    {
      title: "Personalized Fitness Tracker",
      category: "Mobile Apps",
      img: "/p6.png",
      desc: "A custom mobile application offering AI-driven personalized plans and progress tracking.",
    },
    {
      title: "Brand Identity & Design System",
      category: "UI/UX Design",
      img: "/p7.png",
      desc: "Designed a complete brand identity system and UI components for a fintech startup.",
    },
    {
      title: "Automated CI/CD Pipeline",
      category: "Cloud Solutions",
      img: "/p8.png",
      desc: "Created a fully automated CI/CD deployment workflow for streamlined DevOps operations.",
    },
    {
      title: "Insurance Corporate Website",
      category: "Web Development",
      img: "/p9.png",
      desc: "Designed and built a high-performance corporate website with modern UI and security features.",
    },
  ];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <div className="mt-20">

      {/* ================= TITLE ================= */}
      <section className="py-12 sm:py-16 text-center bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio: Pioneering Digital Solutions
        </motion.h1>
        <motion.p 
          className="text-gray-700 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore a selection of our innovative projects, showcasing our expertise in web
          development, mobile applications, and comprehensive digital strategies.
          Each case study reflects our commitment to excellence and client success.
        </motion.p>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter 
                ? 'bg-[#C6A667] text-white shadow-lg' 
                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#C6A667] px-6 py-2 rounded-full font-semibold transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#C6A667]/10 text-[#C6A667] text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.desc}
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white py-2 rounded-lg font-medium hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300">
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* ================= CTA ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-[#34495e] to-[#2c3e50] text-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Interested in Our Work?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your own project? Contact us today to discuss how we can bring your vision to life.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="/services"
              className="border-2 border-[#C6A667] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-[#C6A667] hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
