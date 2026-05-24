'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Globe } from 'lucide-react';

interface ExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LANGUAGES = [
  'English',
  'Hindi',
  'Bengali',
  'Tamil',
  'French',
  'Spanish',
  'German',
  'Japanese',
  'Mandarin',
  'Russian',
];

export default function ExpertModal({ isOpen, onClose }: ExpertModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConnectExpert = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setSelectedLanguage('English');
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 w-96 z-50"
          >
            {!showSuccess ? (
              <div className="glass-dark rounded-2xl p-6 shadow-premium-lg border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-brand-gold" />
                    <h3 className="text-lg font-semibold text-white">
                      Connect with Expert
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-sm text-gray-300 mb-4">
                  Select your preferred language for expert consultation
                </p>

                {/* Language Dropdown */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Select Language
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all appearance-none cursor-pointer"
                    >
                      {LANGUAGES.map((lang) => (
                        <option key={lang} value={lang} className="bg-brand-dark">
                          {lang}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-brand-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConnectExpert}
                  className="w-full px-4 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold mb-3"
                >
                  Connect with Expert
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  Our expert will reach out to you shortly
                </p>
              </div>
            ) : (
              /* Success Notification */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass-dark rounded-2xl p-6 shadow-premium-lg border border-brand-gold/30 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-saffron rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-6 h-6 text-brand-dark" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Success!</h3>
                <p className="text-sm text-gray-300">
                  Soon our expert will connect with you in {selectedLanguage}.
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
