import React, { useState } from "react";
import { FiMail, FiPhone, FiChevronDown, FiUser, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";

const InquiryForm = ({
    title = "Register Now",
    subtitle = "Fill the form and our expert will contact you.",
    defaultDestination = "",
    buttonText = "Register Now"
}) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        preferredBranch: "",
        studyDestination: defaultDestination,
        terms: false,
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) return;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });

        const apiData = {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            preferredBranch: formData.preferredBranch,
            studyDestination: formData.studyDestination,
            subject: `New Inquiry from ${formData.fullName}`,
            message: `Student interested in ${formData.studyDestination}. Location: ${formData.country}, Branch: ${formData.preferredBranch}, Phone: ${formData.phone}`
        };

        try {
            // 1. Send to Backend
            const baseUrl = import.meta.env.VITE_API_BASE_URL?.endsWith('/')
                ? import.meta.env.VITE_API_BASE_URL
                : `${import.meta.env.VITE_API_BASE_URL}/`;
            const endpoint = "api/contacts";
            await axios.post(`${baseUrl}${endpoint}`, apiData);

            // 2. Send via EmailJS
            const emailTemplateParams = {
                name: formData.fullName,
                email: formData.email,
                from_name: formData.fullName,
                from_email: formData.email,
                phone: formData.phone,
                country: formData.country,
                branch: formData.preferredBranch,
                destination: formData.studyDestination,
                subject: `New Inquiry - ${formData.studyDestination}`,
                message: `You have a new student inquiry. \n\nDetails: \nDestination: ${formData.studyDestination} \nLocation: ${formData.country} \nBranch: ${formData.preferredBranch} \nPhone: ${formData.phone}`,
                to_name: "RCS Admin",
            };

            // Log for debugging (Remove after testing)
            console.log("EmailJS Params:", emailTemplateParams);
            console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ont43of",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fgvx0yl",
                emailTemplateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "LGjBn8uwuBDOCaNP2"
            ).then((res) => {
                console.log("EmailJS Success:", res.status, res.text);
            }).catch((err) => {
                console.error("EmailJS Failed:", err);
                console.error("IDs used:", {
                    service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    public: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                });
            });

            setStatus({
                type: "success",
                message: "Thank you for your inquiry! Our team will contact you shortly."
            });
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                country: "",
                preferredBranch: "",
                studyDestination: "",
                terms: false,
            });
        } catch (error) {
            console.error("Submission error:", error);
            const errorMessage = error.response?.data?.error || "Something went wrong. Please try again later.";
            setStatus({
                type: "error",
                message: errorMessage
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 text-slate-900"
        >
            <div className="bg-slate-900 p-6 sm:p-8 text-white">
                <h2 className="text-2xl font-black mb-2 leading-tight">{title}</h2>
                <p className="text-slate-400 text-sm font-medium">{subtitle}</p>
            </div>

            <div className="p-5 sm:p-8 bg-slate-50">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                            <div className="relative mt-2">
                                <FiUser className="absolute left-4 top-4 text-slate-400" />
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all shadow-sm text-slate-900 placeholder:text-slate-300 hover:border-slate-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative mt-2">
                                <FiMail className="absolute left-4 top-4 text-slate-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all shadow-sm text-slate-900 placeholder:text-slate-300 hover:border-slate-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                            <div className="flex mt-2 gap-3">
                                <div className="flex items-center px-4 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold shadow-sm text-sm sm:text-base">
                                    +977
                                </div>
                                <div className="relative flex-1">
                                    <FiPhone className="absolute left-4 top-4 text-slate-400" />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="98XXXXXXXX"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        maxLength="10"
                                        className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all shadow-sm text-slate-900 placeholder:text-slate-300 hover:border-slate-300"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Country Select */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Location</label>
                                <div className="relative mt-2">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-200 rounded-2xl pl-4 pr-10 py-4 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer shadow-sm text-slate-900 hover:border-slate-300 transition-all"
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="India">India</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <FiChevronDown className="absolute right-4 top-5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Preferred Office</label>
                                <div className="relative mt-2">
                                    <select
                                        name="preferredBranch"
                                        value={formData.preferredBranch}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-slate-200 rounded-2xl pl-4 pr-10 py-4 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer shadow-sm text-slate-900 hover:border-slate-300 transition-all"
                                        required
                                    >
                                        <option value="">Select Branch</option>
                                        <option value="Kathmandu">Kathmandu</option>
                                        <option value="Chitwan">Chitwan</option>
                                        <option value="Butwal">Butwal</option>
                                        <option value="Pokhara">Pokhara</option>
                                    </select>
                                    <FiChevronDown className="absolute right-4 top-5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Study Destination */}
                        <div>
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Dream Destination</label>
                            <div className="relative mt-2">
                                <FiGlobe className="absolute left-4 top-4 text-slate-400" />
                                <select
                                    name="studyDestination"
                                    value={formData.studyDestination}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-10 py-4 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none cursor-pointer shadow-sm text-slate-900 hover:border-slate-300 transition-all"
                                    required
                                >
                                    <option value="">Select Destination</option>
                                    <option value="Australia">Australia</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Canada">Canada</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Others">Others</option>
                                </select>
                                <FiChevronDown className="absolute right-4 top-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-500">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary cursor-pointer"
                            required
                        />
                        <span>I agree to the <a href="#" className="underline hover:text-primary transition-colors">Terms and Conditions</a></span>
                    </div>

                    {status.message && (
                        <div className={`p-4 rounded-2xl text-sm font-bold ${status.type === "success" ? "bg-green-50 text-green-600 border border-green-100" : "bg-red-50 text-red-600 border border-red-100"}`}>
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-pink-500/20 transform hover:-translate-y-1 transition-all ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-primary hover:bg-primary/90 text-white"}`}
                    >
                        {loading ? "Sending..." : buttonText}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default InquiryForm;
