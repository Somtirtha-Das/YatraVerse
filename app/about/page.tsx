'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">About</span>
            <span className="text-gradient">YatraVerse</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Reimagining Indian tourism with AI and human expertise
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'Make India tourism accessible, personalized, and unforgettable for every traveler',
            },
            {
              icon: Lightbulb,
              title: 'Our Vision',
              desc: 'Be the world\'s leading AI-powered travel platform connecting travelers with India',
            },
            {
              icon: Heart,
              title: 'Our Values',
              desc: 'Innovation, trust, and commitment to sustainable tourism practices',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-lg border border-white/10"
              >
                <Icon className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Story */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-dark p-8 rounded-lg border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              YatraVerse was founded with a simple vision: to revolutionize how people explore and experience India. We combine cutting-edge AI technology with human expertise to create personalized, unforgettable journeys.
            </p>
            <p>
              With our integrated platform, travelers can discover hidden gems, plan their perfect itinerary, and book all services seamlessly—all powered by advanced AI recommendations and verified by expert travel guides.
            </p>
            <p>
              Our commitment to sustainable tourism and community engagement ensures that travel benefits both visitors and local communities.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
