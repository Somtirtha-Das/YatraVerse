'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface DestinationCardProps {
  id: string;
  title: string;
  image: string;
  state: string;
  description: string;
  tags: string[];
  season: string;
  aiScore: number;
  index?: number;
}

export default function DestinationCard({
  id,
  title,
  image,
  state,
  description,
  tags,
  season,
  aiScore,
  index = 0,
}: DestinationCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden glass-dark border border-white/10 hover:border-brand-gold/50 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-dark">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* AI Score Badge */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-bold rounded-full text-sm glow-gold"
        >
          AI {aiScore}%
        </motion.div>

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isSaved
                ? 'fill-brand-saffron text-brand-saffron'
                : 'text-gray-300 hover:text-brand-gold'
            }`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* State Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="w-4 h-4 text-brand-gold" />
          <span className="text-xs font-medium text-brand-gold">{state}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-brand-gold/50 transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">
              +{tags.length - 2} more
            </span>
          )}
        </div>

        {/* Best Season */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <span className="text-xs text-gray-400">Best Season:</span>
          <span className="text-xs font-medium text-brand-saffron">{season}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
          >
            Explore
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 glass text-white font-semibold rounded-lg hover:bg-white/15 transition-all text-sm border border-white/20"
          >
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
