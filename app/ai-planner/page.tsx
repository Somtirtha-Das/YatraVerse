'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function AIPlannerPage() {
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = ['Adventure', 'Culture', 'Wellness', 'Food', 'Wildlife', 'Heritage'];

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleGenerateItinerary = () => {
    console.log({ budget, duration, interests });
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      {/* Animated Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 glow">
            <Brain className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-brand-gold">
              Powered by Advanced AI
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">AI Trip</span>
            <span className="text-gradient">Planner</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get personalized travel itineraries powered by artificial intelligence
          </p>
        </motion.div>

        {/* Planner Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-dark p-8 rounded-2xl border border-white/10"
        >
          <div className="space-y-6">
            {/* Budget */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Travel Budget
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget in INR"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Trip Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
              >
                <option value="">Select duration</option>
                <option value="1-3">1-3 days</option>
                <option value="4-7">4-7 days</option>
                <option value="8-14">8-14 days</option>
                <option value="15+">15+ days</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Your Interests
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestOptions.map((interest) => (
                  <motion.button
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      interests.includes(interest)
                        ? 'bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark glow-gold'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                    }`}
                  >
                    {interest}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* AI Recommendations Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-white/5 border border-brand-gold/30 rounded-lg"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <h3 className="text-white font-semibold">
                  AI Recommendations Preview
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Based on your preferences, the AI will suggest:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>✓ Personalized itinerary optimized for your budget</li>
                <li>✓ Best season and weather recommendations</li>
                <li>✓ Transportation and accommodation suggestions</li>
                <li>✓ Hidden gems matching your interests</li>
              </ul>
            </motion.div>

            {/* Generate Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerateItinerary}
              className="w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-bold rounded-lg hover:shadow-lg transition-all glow-gold text-lg"
            >
              Generate My Itinerary
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
