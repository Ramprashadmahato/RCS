import React, { useState } from "react";
import { FiMail, FiPhone, FiChevronDown, FiUser, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "phone" && !/^\d*$/.test(value)) return;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your inquiry! Our team will contact you shortly.");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 text-slate-900"
        >
            <div className="bg-slate-900 p-8 text-white">
                <h2 className="text-2xl font-black mb-2 leading-tight">{title}</h2>
                <p className="text-slate-400 text-sm font-medium">{subtitle}</p>
            </div>

            <div className="p-8 bg-slate-50">
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
                                <div className="flex items-center px-4 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold shadow-sm">
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

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-pink-500/20 transform hover:-translate-y-1 transition-all"
                    >
                        {buttonText}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default InquiryForm;
