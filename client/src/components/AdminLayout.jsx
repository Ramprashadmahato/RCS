import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Key, LogOut, Menu, X, Home } from "lucide-react";

function AdminLayout({ children, currentPage, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Admin Dashboard",
      icon: <Home className="w-5 h-5" />,
      path: "/dashboard"
    },
    {
      name: "Manage Contacts",
      icon: <Mail className="w-5 h-5" />,
      path: "/manage-contacts"
    },
    {
      name: "Change Password",
      icon: <Key className="w-5 h-5" />,
      path: "/change-password"
    }
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      onLogout();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="bg-secondary p-2.5 rounded-2xl shadow-lg shadow-secondary/20">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-white italic">OneStep <span className="text-secondary">Admin</span></h2>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Global Education Consultancy</p>
            </div>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${currentPage === item.name
                  ? "bg-secondary text-white shadow-xl shadow-secondary/30"
                  : "hover:bg-white/5 text-slate-400 hover:text-white"
                  }`}
              >
                <div className={`${currentPage === item.name ? "text-white" : "group-hover:text-secondary"} transition-colors`}>
                  {item.icon}
                </div>
                <span className="font-bold text-sm tracking-wide">{item.name}</span>
              </a>
            </motion.div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <motion.button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-slate-800 text-slate-400 rounded-2xl hover:bg-rose-500 hover:text-white transition-all duration-300 font-bold text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout Account</span>
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-100 px-4 sm:px-8 py-4 sm:py-5 sticky top-0 z-30 transition-all duration-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
              <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                <h1 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">{currentPage}</h1>
                <p className="text-xs font-medium text-slate-400 mt-1">
                  {currentPage === "Manage Contacts"
                    ? "Monitor and engage with your recent global inquiries"
                    : "Secure your administrative credentials"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-black text-slate-900 leading-none">OneStep Administrator</span>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter mt-1">Super Admin Access</span>
              </div>
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/10 group cursor-pointer hover:bg-secondary transition-all duration-300">
                <User className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#FBFDFF] p-4 sm:p-8 custom-scrollbar">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;