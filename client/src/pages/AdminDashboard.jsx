import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Key, Home } from "lucide-react";
import AdminLayout from "../components/AdminLayout";

function AdminDashboard({ onLogout }) {
  return (
    <AdminLayout currentPage="Admin Dashboard" onLogout={onLogout}>
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-slate-900 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 text-white shadow-2xl shadow-slate-900/20">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/10">
                <User className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">Administrative Control</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">Welcome Back, <span className="text-secondary italic">Admin.</span></h2>
            <p className="text-slate-400 text-sm sm:text-lg max-w-xl font-medium leading-relaxed">
              Manage your global education consultancy with precision. Review inquiries, secure your access, and drive student success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Manage Contacts Card */}
          <motion.div
            className="bg-white p-8 rounded-[32px] sm:rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-secondary transition-all duration-500"
            whileHover={{ y: -10 }}
          >
            <div className="bg-slate-50 w-16 h-16 rounded-[22px] flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-secondary/10 transition-colors">
              <span className="text-slate-900 group-hover:text-secondary transition-colors">
                <Mail className="w-8 h-8" />
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">Inquiry Management</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">
              Centralized hub for all student leads. Track, respond, and organize global consultancy requests from the website.
            </p>
            <Link
              to="/manage-contacts"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-secondary transition-all duration-300 shadow-lg shadow-slate-900/10"
            >
              Go to Contacts <Home className="w-4 h-4 text-secondary" />
            </Link>
          </motion.div>

          {/* Change Password Card */}
          <motion.div
            className="bg-white p-8 rounded-[32px] sm:rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-rose-400 transition-all duration-500"
            whileHover={{ y: -10 }}
          >
            <div className="bg-slate-50 w-16 h-16 rounded-[22px] flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-rose-50 transition-colors">
              <span className="text-slate-900 group-hover:text-rose-500 transition-colors">
                <Key className="w-8 h-8" />
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">Account Security</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium">
              Maintain the integrity of your admin access. Update your credentials regularly to ensure top-tier platform security.
            </p>
            <Link
              to="/change-password"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-rose-500 transition-all duration-300 shadow-lg shadow-slate-900/10"
            >
              Secure Account <Key className="w-4 h-4 text-rose-400" />
            </Link>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
