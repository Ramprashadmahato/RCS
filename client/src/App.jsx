import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CareerCounselling from "./pages/CareerCounselling";
import Event from "./pages/Event";
import OurOffice from "./pages/OurOffice";
import Scholarship from "./pages/Scholarship";
import VisaApplication from "./pages/VisaApplication";
import Department from "./pages/Department";
import Message from "./pages/Message";
import Partners from "./pages/Partners";
import Ielts from "./pages/Ielts";
import Pte from "./pages/Pte";
import Toefl from "./pages/Toefl";
import Sat from "./pages/Sat";
import Gre from "./pages/Gre";
import DirectPatner from "./pages/DirectPatner";
import StudyAustralia from "./pages/StudyAustralia";
import StudyUsa from "./pages/StudyUsa";
import StudyUk from "./pages/StudyUk";
import StudyCanada from "./pages/StudyCanada";
import OtherCountry from "./pages/OtherCountry";
import BlogAustralia from "./pages/BlogAustralia";
import BlogUsa from "./pages/BlogUsa";
import BlogUk from "./pages/BlogUk";
import BlogCanada from "./pages/BlogCanada";

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
              <Route path="/services/career-counselling" element={<CareerCounselling />} />
              <Route path="/events" element={<Event />} />
              <Route path="/our-offices" element={<OurOffice />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/services/visa-assistance" element={<VisaApplication />} />
              <Route path="/services/pre-post-departure" element={<Department />} />
              <Route path="/chairman-message" element={<Message />} />
              <Route path="/for-institutions" element={<Partners />} />
              <Route path="/test/ielts" element={<Ielts />} />
              <Route path="/test/pte" element={<Pte />} />
              <Route path="/test/toefl" element={<Toefl />} />
              <Route path="/test/sat" element={<Sat />} />
              <Route path="/test/gre-gmat" element={<Gre />} />
              <Route path="/partners" element={<DirectPatner />} />
              <Route path="/study/australia" element={<StudyAustralia />} />
              <Route path="/study/usa" element={<StudyUsa />} />
              <Route path="/study/uk" element={<StudyUk />} />
              <Route path="/study/canada" element={<StudyCanada />} />
              <Route path="/study/other" element={<OtherCountry />} />
              <Route path="/blog/australia" element={<BlogAustralia />} />
              <Route path="/blog/usa" element={<BlogUsa />} />
              <Route path="/blog/uk" element={<BlogUk />} />
              <Route path="/blog/canada" element={<BlogCanada />} />


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
