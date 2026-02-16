import React, { useState } from "react";
import apiClient from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Username *</label>
            <input 
              name="username" 
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password *</label>
            <input 
              name="password" 
              type="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent transition"
              required
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white py-3 rounded-lg font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing in...
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate("/register")}
              className="text-[#C6A667] font-medium hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
