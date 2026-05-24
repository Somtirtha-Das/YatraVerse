'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, Lightbulb } from 'lucide-react';

const FEATURES = [
  {
    icon: Brain,
    title: 'Smart AI Recommendations',
    description: 'Our advanced AI analyzes your preferences, budget, and travel style to suggest perfect destinations.',
  },
  {
    icon: Zap,
    title: 'Instant Itineraries',
    description: 'Get personalized day-by-day itineraries optimized for time, budget, and experience preferences.',
  },
  {
    icon: BarChart3,
    title: 'Travel Intelligence',
    description: 'Real-time data on weather, crowds, pricing, and local events for informed decision-making.',
  },
  {
    icon: Lightbulb,
    title: 'Hidden Gems Discovery',
    description: 'Discover off-the-beaten-path destinations and experiences that match your interests.',
  },
];

export default function AIIntegration() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 bg-brand-dark relative">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-20 w-72 h-72 bg-brand-saffron/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 glow"
          >
            <span className="w-2 h-2 bg-brand-saffron rounded-full"></span>
            <span className="text-sm font-medium text-brand-saffron">AI Technology</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white mb-2 block">AI + Human Expertise</span>
            <span className="text-gradient">The Future of Travel Planning</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Experience the perfect blend of artificial intelligence and human expertise for unforgettable journeys
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-saffron rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all glow-gold">
                  <Icon className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-brand-saffron to-brand-gold text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold mb-4"
          >
            Try AI Trip Planner
          </motion.button>
          <p className="text-gray-400 text-sm">
            Get started with personalized travel recommendations in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
