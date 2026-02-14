import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Key, LogOut, Menu, X } from "lucide-react";

function AdminLayout({ children, currentPage, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
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
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-[#C6A667] p-2 rounded-lg">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Admin Panel</h2>
              <p className="text-sm text-gray-400">Royal Consultancy</p>
            </div>
          </div>
          <button 
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  currentPage === item.name 
                    ? "bg-gray-800 text-white" 
                    : "hover:bg-gray-800 text-gray-300"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </a>
            </motion.div>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <motion.button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{currentPage}</h1>
                <p className="text-sm text-gray-600">
                  {currentPage === "Manage Contacts" 
                    ? "View and respond to customer inquiries" 
                    : "Update your account password"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-gray-600">
                {currentPage === "Manage Contacts" ? (
                  <>
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Contacts</span>
                  </>
                ) : (
                  <>
                    <Key className="w-4 h-4" />
                    <span className="text-sm">Security</span>
                  </>
                )}
              </div>
              <div className="w-8 h-8 bg-[#C6A667] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;