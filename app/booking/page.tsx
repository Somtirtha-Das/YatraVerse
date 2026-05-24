'use client';

import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">Unified</span>
            <span className="text-gradient">Booking Platform</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Book flights, trains, hotels, and activities in one place
          </p>
        </motion.div>

        {/* Booking Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-dark p-8 rounded-2xl border border-white/10 mb-12"
        >
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {['Flights', 'Trains', 'Hotels', 'Activities', 'Buses'].map((tab) => (
              <button
                key={tab}
                className="px-6 py-2 whitespace-nowrap bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all border border-white/10 hover:border-brand-gold/50"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-gray-300 text-sm block mb-2">From</label>
                <input
                  type="text"
                  placeholder="Departure city"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm block mb-2">To</label>
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm block mb-2">Dates</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg glow-gold flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-dark p-6 rounded-lg border border-white/10 hover:border-brand-gold/50 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">Delhi → Goa</p>
                    <p className="text-gray-400 text-sm">Flight • 3h 45m</p>
                  </div>
                  <p className="text-brand-gold font-bold">₹4,999</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
