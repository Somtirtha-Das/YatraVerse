'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20 flex items-center justify-center">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-dark p-8 rounded-2xl border border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-saffron rounded-lg mb-4">
              <Sparkles className="w-6 h-6 text-brand-dark" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">YatraVerse</h1>
            <p className="text-gray-400">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
              />
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
              />
            </div>

            {!isSignup && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-brand-gold"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-brand-gold hover:text-brand-saffron">
                  Forgot?
                </a>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg glow-gold"
            >
              {isSignup ? 'Create Account' : 'Sign In'}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center space-x-2">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Social Buttons */}
          <button className="w-full px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all mb-3">
            Continue with Google
          </button>

          {/* Toggle Sign In/Sign Up */}
          <p className="text-center text-gray-400 text-sm">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-brand-gold hover:text-brand-saffron font-semibold transition-colors"
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Link to Home */}
        <p className="text-center text-gray-400 text-sm mt-6">
          <Link href="/" className="text-brand-gold hover:text-brand-saffron">
            ← Back to Home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
