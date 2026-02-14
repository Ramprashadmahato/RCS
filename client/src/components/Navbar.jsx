
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navVariants = {
        hidden: { y: -50 },
        visible: { y: 0, transition: { duration: 0.5 } }
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, x: 100 },
        open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    };

    return (
        <motion.nav 
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto flex items-center justify-between px-4">

                {/* Logo + Name */}
                <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link to="/" className="flex items-center gap-3">

                        {/* Logo Image */}
                        <motion.img
                            src="/Logo.png"
                            alt="RCS Logo"
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#C6A667] p-1 shadow-lg"
                            whileHover={{ rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        <div className="text-left">
                            <h1 className="font-bold text-xl leading-tight">
                                <span className={`${scrolled ? 'text-gray-900' : 'text-red-300'}`}>Royal Consultancy</span>
                                <br />
                                <span className="text-[#C6A667]">Services</span>
                            </h1>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <motion.ul className="flex items-center gap-8 text-gray-700 font-medium">
                        <motion.li whileHover={{ y: -3 }}><Link to="/" className="hover:text-[#C6A667] transition-colors duration-300">Home</Link></motion.li>
                        <motion.li whileHover={{ y: -3 }}><Link to="/about" className="hover:text-[#C6A667] transition-colors duration-300">About</Link></motion.li>
                        <motion.li whileHover={{ y: -3 }}><Link to="/services" className="hover:text-[#C6A667] transition-colors duration-300">Services</Link></motion.li>
                        <motion.li whileHover={{ y: -3 }}><Link to="/portfolio" className="hover:text-[#C6A667] transition-colors duration-300">Portfolio</Link></motion.li>
                        {/* <motion.li whileHover={{ y: -3 }}><Link to="/contact" className="hover:text-[#C6A667] transition-colors duration-300">Contact</Link></motion.li> */}
                    </motion.ul>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 py-2 rounded-full font-medium hover:from-[#a88c4f] hover:to-[#8a7237] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <motion.button 
                        className="text-gray-800 text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div 
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
                    variants={mobileMenuVariants}
                    initial="closed"
                    animate="open"
                >
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        <motion.li whileHover={{ scale: 1.05 }}><Link to="/" className="block px-4 py-2 text-gray-700 hover:text-[#C6A667]" onClick={() => setMobileMenuOpen(false)}>Home</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.05 }}><Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-[#C6A667]" onClick={() => setMobileMenuOpen(false)}>About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.05 }}><Link to="/services" className="block px-4 py-2 text-gray-700 hover:text-[#C6A667]" onClick={() => setMobileMenuOpen(false)}>Services</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.05 }}><Link to="/portfolio" className="block px-4 py-2 text-gray-700 hover:text-[#C6A667]" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.05 }}><Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-[#C6A667]" onClick={() => setMobileMenuOpen(false)}>Contact</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.05 }}>
                            <Link
                                to="/contact"
                                className="block mx-4 bg-gradient-to-r from-[#C6A667] to-[#a88c4f] text-white px-6 py-2 rounded-full font-medium text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
