'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Users, DollarSign } from 'lucide-react';

const PACKAGES = [
  { id: 1, title: 'Luxury India Tours', duration: '14 days', price: '₹2,99,999', group: '2-8' },
  { id: 2, title: 'Spiritual Circuits', duration: '7 days', price: '₹99,999', group: '1-6' },
  { id: 3, title: 'Wildlife Expeditions', duration: '10 days', price: '₹1,99,999', group: '4-10' },
  { id: 4, title: 'Adventure Tours', duration: '8 days', price: '₹1,49,999', group: '2-8' },
  { id: 5, title: 'Honeymoon Packages', duration: '7 days', price: '₹2,49,999', group: '2' },
  { id: 6, title: 'Northeast Explorer', duration: '9 days', price: '₹1,79,999', group: '2-6' },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">Curated</span>
            <span className="text-gradient">Tour Packages</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Choose from our collection of expertly designed travel packages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-brand-navy to-brand-dark rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-3">{pkg.title}</h3>

              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-brand-gold" />
                  <span>Group: {pkg.group}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-brand-gold" />
                  <span className="font-bold text-white">{pkg.price}</span>
                </div>
                <button className="px-4 py-2 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                  Book
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
