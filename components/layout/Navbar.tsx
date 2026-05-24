'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpertModal from '@/components/ui/ExpertModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpertOpen, setIsExpertOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/discover', label: 'Discover India' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/ai-planner', label: 'AI Planner' },
    { href: '/yatrago', label: 'YatraGo' },
    { href: '/packages', label: 'Packages' },
    { href: '/booking', label: 'Booking' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-saffron rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all">
                <Sparkles className="w-6 h-6 text-brand-dark" />
              </div>
              <span className="hidden sm:block text-xl font-bold text-gradient">YatraVerse</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors duration-200 hover:bg-white/5 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Expert Modal Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpertOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold"
              >
                Expert
              </motion.button>

              {/* Login/Signup */}
              <Link
                href="/login"
                className="px-4 py-2 text-brand-gold hover:text-brand-saffron transition-colors"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpertOpen(true)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
              >
                <Globe className="w-5 h-5 text-brand-gold" />
              </motion.button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden pb-4 space-y-2"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="block px-3 py-2 text-sm font-medium text-brand-gold hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Expert Modal */}
      <ExpertModal isOpen={isExpertOpen} onClose={() => setIsExpertOpen(false)} />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
