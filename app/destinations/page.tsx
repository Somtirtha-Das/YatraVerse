'use client';

import { motion } from 'framer-motion';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">All</span>
            <span className="text-gradient">Destinations</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Explore 500+ curated destinations across India
          </p>

          {/* Featured Destinations with detailed cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all cursor-pointer group"
              >
                <div className="h-40 bg-gradient-to-br from-brand-navy to-brand-dark rounded-lg mb-4 group-hover:shadow-lg transition-all"></div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Destination {i}
                </h3>
                <p className="text-gray-400 text-sm">
                  Explore this amazing destination with AI recommendations
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
