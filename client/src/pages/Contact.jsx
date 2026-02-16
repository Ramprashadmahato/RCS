import React, { useState } from "react";
import axios from "axios";
import { ChevronDown, Mail, Phone, MapPin, Send } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // First save to database
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contacts`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      // If saved successfully, send email via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        };

        try {
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Don't show error to user since database save was successful
        }
      }

      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="mt-20">

      {/* ================= TITLE ================= */}
      <section className="py-12 sm:py-16 text-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch with Royal Consultancy Service
        </motion.h1>
        <motion.p
          className="text-gray-700 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're here to help you turn your vision into reality.
        </motion.p>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl sm:max-w-3xl">
          <motion.h2
            className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Send Us a Message
          </motion.h2>

          <motion.div
            className="p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 bg-linear-to-br from-gray-50 to-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition text-sm sm:text-base"
                      required
                    />
                    <Mail className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Email *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition text-sm sm:text-base"
                      required
                    />
                    <Mail className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter subject"
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">Message *</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                    rows="5"
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                  <Send className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-linear-to-r from-[#C6A667] to-[#a88c4f] text-white py-3 sm:py-4 rounded-lg font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= LOCATION & CONTACT ================= */}
      <section className="py-12 sm:py-16 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">

            {/* GOOGLE MAP */}
            <motion.div
              className="rounded-2xl shadow-lg overflow-hidden h-64 sm:h-80 md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                title="Royal Consultancy Location"
                src="https://www.google.com/maps?q=Narephat-32,Kathmandu,Nepal&output=embed"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* CONTACT DETAILS */}
            <motion.div
              className="bg-linear-to-br from-[#111111] to-[#222222] text-white p-6 sm:p-8 rounded-2xl shadow-lg mt-6 sm:mt-8 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">
                Royal Consultancy Service
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#C6A667]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Narephat-32, Kathmandu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#C6A667]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+977 9741812381</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#C6A667]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">royalconsultancyservices24@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex gap-4 text-xl mt-8">
                <a href="https://www.facebook.com/share/1DwAMCHRMC/" className="text-gray-300 hover:text-[#C6A667] transition">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/royal_consultancy_.services?igsh=azRwaHBsOG9yNzQ3" className="text-gray-300 hover:text-[#C6A667] transition">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/royalconsultancyservices/" className="text-gray-300 hover:text-[#C6A667] transition">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-12 sm:py-16 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-xl sm:max-w-2xl">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of the most common questions we receive
          </motion.p>

          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              "What services do you offer?",
              "How fast do you respond?",
              "Do you work with existing systems?",
              "Which industries do you serve?",
              "How do you protect data?",
            ].map((question, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-bold text-gray-900">{question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${openFAQ === index ? "rotate-180 text-[#C6A667]" : "text-gray-500"
                      }`}
                  />
                </button>

                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">
                      We follow secure, transparent, and professional project practices.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-8 text-center bg-linear-to-r from-[#2c3e50] to-[#34495e] text-white w-[50%] mx-auto rounded-xl">

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
            Ready to Discuss Your Project?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or ready to start your project? Reach out to our team today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/services"
              className="bg-linear-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>

            <motion.a
              href="/about"
              className="border-2 border-[#C6A667] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-[#C6A667] hover:text-black transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
