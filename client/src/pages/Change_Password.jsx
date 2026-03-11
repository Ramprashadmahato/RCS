import React, { useState } from "react";
import apiClient from "../api/axiosConfig";
import { motion } from "framer-motion";
import { Key, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react";
import AdminLayout from "../components/AdminLayout";

function ChangePassword({ token, onLogout }) {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!formData.oldPassword) {
      setError("Current password is required");
      return false;
    }
    if (!formData.newPassword) {
      setError("New password is required");
      return false;
    }
    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return false;
    }
    if (formData.newPassword === formData.oldPassword) {
      setError("New password must be different from current password");
      return false;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await apiClient.post("/api/auth/change-password", {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword
      });

      setSuccess("Password changed successfully!");
      setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout currentPage="Change Password" onLogout={onLogout}>
      <div className="p-4 sm:p-12 bg-[#FBFDFF] min-h-screen">
        <div className="max-w-xl mx-auto">
          <motion.div
            className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-slate-200/50 p-6 sm:p-12 border border-slate-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-slate-900 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-900/10">
                <Key className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Security Credentials</h1>
              <p className="text-slate-500 font-medium mt-2">Protect your administrative access with a strong password.</p>
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

            {success && (
              <motion.div
                className="mb-8 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 text-emerald-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-sm tracking-wide">{success}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Current Password</label>
                <div className="relative">
                  <input
                    name="oldPassword"
                    type={showOldPassword ? "text" : "password"}
                    value={formData.oldPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full p-5 pr-14 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary focus:bg-white outline-none transition-all font-medium text-slate-900"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-300 hover:text-secondary transition-colors"
                  >
                    {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">New Secure Password</label>
                <div className="relative">
                  <input
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full p-5 pr-14 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary focus:bg-white outline-none transition-all font-medium text-slate-900"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-300 hover:text-secondary transition-colors"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Confirm New Password</label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full p-5 pr-14 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary focus:bg-white outline-none transition-all font-medium text-slate-900"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-300 hover:text-secondary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
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
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Updating Security...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Update Password
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-50">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Security Guidelines</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Minimum 6 characters",
                  "Include special characters",
                  "Unique from previous passwords"
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ChangePassword;
