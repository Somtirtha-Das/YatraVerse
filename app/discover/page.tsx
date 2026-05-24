'use client';

import { motion } from 'framer-motion';
import { Filter, MapPin, Star } from 'lucide-react';
import DestinationCard from '@/components/ui/DestinationCard';
import { useState } from 'react';

const ALL_DESTINATIONS = [
  {
    id: '1',
    title: 'Himalayas - Manali & Shimla',
    state: 'Himachal Pradesh',
    description: 'Experience the majestic peaks, pristine valleys, and adventure sports.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Adventure', 'Trekking', 'Scenic Beauty'],
    season: 'Oct - Nov, Mar - May',
    aiScore: 98,
  },
  // Add more destinations...
];

export default function DiscoverPage() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedGeography, setSelectedGeography] = useState<string | null>(null);

  const experiences = [
    'Heritage & Architecture',
    'Wildlife & Safari',
    'Spiritual & Wellness',
    'Adventure & Adrenaline',
    'Cultural & Culinary',
  ];

  const geographies = [
    'Mountains',
    'Beaches',
    'Deserts',
    'Forests',
    'Rivers & Backwaters',
  ];

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
            <span className="block text-white mb-2">Discover</span>
            <span className="text-gradient">India</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Filter destinations by your interests, geography, travel vibe, and season
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 glass-dark p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-brand-gold" />
            <h3 className="text-lg font-semibold text-white">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Filter */}
            <div>
              <h4 className="text-white font-semibold mb-3">By Experience</h4>
              <div className="space-y-2">
                {experiences.map((exp) => (
                  <button
                    key={exp}
                    onClick={() => setSelectedExperience(exp)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedExperience === exp
                        ? 'bg-brand-gold text-brand-dark font-semibold'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Geography Filter */}
            <div>
              <h4 className="text-white font-semibold mb-3">By Geography</h4>
              <div className="space-y-2">
                {geographies.map((geo) => (
                  <button
                    key={geo}
                    onClick={() => setSelectedGeography(geo)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedGeography === geo
                        ? 'bg-brand-gold text-brand-dark font-semibold'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {geo}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ALL_DESTINATIONS.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              index={index}
              {...destination}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
