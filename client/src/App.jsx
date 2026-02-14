import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChangePassword from "./pages/Change_Password";
import ManageContacts from "./pages/ManageContact";
import AdminDashboard from "./pages/AdminDashboard";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Check if user is authenticated
  const isAuthenticated = !!token;

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <ScrollToTop />

        {/* Navigation for public site (only show when not authenticated) */}
        {!isAuthenticated && <Navbar />}

        {/* Page Content */}
        <main className="grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />

              {/* Auth Routes */}
              <Route 
                path="/login" 
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <Login setToken={setToken} />
                  )
                } 
              />
              <Route 
                path="/register" 
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <Register />
                  )
                } 
              />
              
              {/* Protected Admin Routes */}
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? (
                    <AdminDashboard onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                } 
              />
              <Route 
                path="/change-password" 
                element={
                  isAuthenticated ? (
                    <ChangePassword token={token} onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                } 
              />
              <Route 
                path="/manage-contacts" 
                element={
                  isAuthenticated ? (
                    <ManageContacts token={token} onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                } 
              />
              
              {/* Redirect unknown routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer for public site (only show when not authenticated) */}
        {!isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
