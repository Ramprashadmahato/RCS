import React, { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";
import { motion } from "framer-motion";
import { Mail, Trash2, Reply, Calendar, User, Search, AlertCircle } from "lucide-react";
import AdminLayout from "../components/AdminLayout";

function ManageContacts({ token, onLogout }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [replyData, setReplyData] = useState({
    email: "",
    subject: "",
    message: "",
    isOpen: false
  });

  useEffect(() => {
    fetchContacts();
  }, [token]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/api/contacts");
      setContacts(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    try {
      await apiClient.delete(`/api/contacts/${id}`);
      setContacts(contacts.filter(c => c.id !== id));
      alert("Contact deleted successfully!");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to delete contact");
    }
  };

  const openReplyModal = (email) => {
    setReplyData({
      email,
      subject: `Re: Your Inquiry`,
      message: `Dear Customer,

Thank you for contacting us. We have received your inquiry and will get back to you shortly.

Best regards,
Royal Consultancy Services Team`,
      isOpen: true
    });
  };

  const closeReplyModal = () => {
    setReplyData({
      email: "",
      subject: "",
      message: "",
      isOpen: false
    });
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    
    try {
      await apiClient.post("/api/contacts/reply", {
        to: replyData.email,
        subject: replyData.subject,
        message: replyData.message
      });
      
      alert("Reply sent successfully!");
      closeReplyModal();
      // Refresh contacts after successful reply
      fetchContacts();
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || "Failed to send reply";
      console.error('Reply error:', errorMsg);
      alert(`Failed to send reply: ${errorMsg}`);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout currentPage="Manage Contacts" onLogout={onLogout}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#C6A667] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading contacts...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentPage="Manage Contacts" onLogout={onLogout}>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Contacts</h1>
                <p className="text-gray-600">View and respond to customer inquiries</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent w-full md:w-64"
                  />
                </div>
                <div className="bg-[#C6A667] text-white px-3 py-2 rounded-lg">
                  <span className="font-medium">{filteredContacts.length}</span> contacts
                </div>
              </div>
            </div>
          </motion.div>

          {error && (
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700">{error}</span>
              </div>
            </motion.div>
          )}

          {/* Contacts List */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredContacts.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
                <p className="text-gray-600">There are no customer inquiries at the moment.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredContacts.map((contact, index) => (
                  <motion.div 
                    key={contact.id}
                    className="p-6 hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-[#C6A667] p-2 rounded-lg flex-shrink-0">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{contact.name}</h3>
                            <div className="flex flex-wrap items-center gap-4 mt-1">
                              <div className="flex items-center gap-1 text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">{contact.email}</span>
                              </div>
                              {contact.subject && (
                                <div className="flex items-center gap-1 text-gray-600">
                                  <span className="text-sm">Subject: {contact.subject}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1 text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">
                                  {new Date(contact.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-11">
                          <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 md:flex-col md:items-end">
                        <motion.button
                          onClick={() => openReplyModal(contact.email)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Reply className="w-4 h-4" />
                          <span className="hidden md:inline">Reply</span>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => deleteContact(contact.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="hidden md:inline">Delete</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Reply Modal */}
      {replyData.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Reply to Customer</h2>
              <p className="text-gray-600 mt-1">To: {replyData.email}</p>
            </div>
            
            <form onSubmit={handleReplySubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                <input
                  type="text"
                  value={replyData.subject}
                  onChange={(e) => setReplyData({...replyData, subject: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                <textarea
                  value={replyData.message}
                  onChange={(e) => setReplyData({...replyData, message: e.target.value})}
                  rows="8"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A667] focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white py-3 rounded-lg font-bold hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Reply className="w-5 h-5" />
                  Send Reply
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={closeReplyModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ManageContacts;
