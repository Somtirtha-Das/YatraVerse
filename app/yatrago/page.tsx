'use client';

import { motion } from 'framer-motion';
import { Car, MapPin, Users, Star, Clock, Shield } from 'lucide-react';

const VEHICLES = [
  { id: 1, name: 'Economy', price: '₹500/km', capacity: 4, features: ['AC', 'WiFi', 'Water'] },
  { id: 2, name: 'Premium', price: '₹800/km', capacity: 4, features: ['AC', 'WiFi', 'Premium Interior'] },
  { id: 3, name: 'Luxury', price: '₹1200/km', capacity: 4, features: ['AC', 'WiFi', 'Entertainment System'] },
];

export default function YatraGoPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">Premium Mobility</span>
            <span className="text-gradient">YatraGo</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Travel in comfort with verified drivers and 24/7 support
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-dark p-8 rounded-2xl border border-white/10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
            />
            <input
              type="text"
              placeholder="Drop Location"
              className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
            />
            <input
              type="date"
              className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg glow-gold">
              Book Now
            </button>
          </div>
        </motion.div>

        {/* Vehicle Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Available Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VEHICLES.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all"
              >
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-brand-gold font-semibold mb-4">{vehicle.price}</p>
                <div className="flex items-center space-x-2 mb-4 text-gray-300 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{vehicle.capacity} passengers</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="text-gray-300 text-sm">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all">
                  Select
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose YatraGo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Star, title: 'Verified Drivers', desc: 'All drivers verified & background checked' },
            { icon: Shield, title: 'Safe & Secure', desc: 'GPS tracking & emergency support' },
            { icon: Clock, title: 'On-time Guarantee', desc: '24/7 customer support' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 glass-dark rounded-lg"
              >
                <Icon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
