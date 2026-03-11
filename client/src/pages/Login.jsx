import React, { useState } from "react";
import apiClient from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Key, LogIn, AlertCircle, ShieldCheck } from "lucide-react";

function Login({ setToken }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError("Username is required");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      const response = await apiClient.post("/api/auth/login", {
        username: formData.username,
        password: formData.password
      });

      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFDFF] flex items-start justify-center p-6 pt-[140px] pb-20 relative overflow-hidden font-sans">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-900/[0.02] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        className="w-full max-w-lg bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 p-12 border border-slate-100 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-center mb-10">
          <motion.div
            className="w-20 h-20 bg-slate-900 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-900/10"
            whileHover={{ rotate: 10, scale: 1.05 }}
          >
            <ShieldCheck className="w-10 h-10 text-secondary" />
          </motion.div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight italic">OneStep <span className="text-secondary">Portal</span></h1>
          <p className="text-slate-500 font-medium mt-3">Gateway to Global Education Management</p>
        </div>

        {error && (
          <motion.div
            className="mb-8 p-5 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-4 text-rose-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <span className="font-bold text-sm tracking-wide">{error}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Administrative Identity</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-secondary transition-colors" />
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Manager Token / Username"
                className="w-full p-5 pl-14 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary focus:bg-white outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Security Key</label>
            <div className="relative group">
              <Key className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-secondary transition-colors" />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full p-5 pl-14 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary focus:bg-white outline-none transition-all font-medium text-slate-900 placeholder:text-slate-300"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-slate-900/20 hover:bg-secondary transform transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Authenticating...
              </>
            ) : (
              <>
                <LogIn className="w-6 h-6" />
                Access Dashboard
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-slate-500 font-bold text-sm">
            Restricted Area. Need access?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-secondary hover:text-slate-900 underline underline-offset-4 transition-colors"
            >
              Request Credentials
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
