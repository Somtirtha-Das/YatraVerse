'use client';

import { motion } from 'framer-motion';
import { Car, MapPin, Users, Shield } from 'lucide-react';

const SERVICES = [
  {
    icon: MapPin,
    title: 'Airport Pickup',
    description: 'Premium pickup and drop-off services from airports with professional drivers.',
  },
  {
    icon: Car,
    title: 'Local Sightseeing',
    description: 'Comfortable journeys to tourist spots with knowledgeable, multilingual guides.',
  },
  {
    icon: Users,
    title: 'Chauffeur Services',
    description: 'Luxury transportation for special occasions and corporate events.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Verified drivers, GPS tracking, and 24/7 customer support.',
  },
];

export default function YatraGoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-brand-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 glow"
            >
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              <span className="text-sm font-medium text-brand-gold">Premium Mobility</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="block text-white mb-2">Meet</span>
              <span className="text-gradient">YatraGo</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8"
            >
              Experience premium mobility services designed for modern travelers. From airport pickups to guided city tours, YatraGo ensures every journey is comfortable, safe, and memorable.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-4 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-all group"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold"
            >
              Book Your Ride
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Car Illustration Placeholder */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-64 h-40 bg-gradient-to-br from-brand-gold/20 to-brand-saffron/20 rounded-2xl border border-brand-gold/30 flex items-center justify-center"
              >
                <Car className="w-20 h-20 text-brand-gold opacity-50" />
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-8 glass p-4 rounded-lg border border-white/10 w-32"
              >
                <p className="text-xs text-brand-gold font-semibold mb-1">
                  Premium Fleet
                </p>
                <p className="text-xs text-gray-300">
                  Luxury vehicles available
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-8 glass p-4 rounded-lg border border-white/10 w-32"
              >
                <p className="text-xs text-brand-gold font-semibold mb-1">
                  24/7 Support
                </p>
                <p className="text-xs text-gray-300">
                  Always there for you
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
