'use client';

import { motion } from 'framer-motion';
import DestinationCard from '@/components/ui/DestinationCard';

const FEATURED_DESTINATIONS = [
  {
    id: '1',
    title: 'Himalayas - Manali & Shimla',
    state: 'Himachal Pradesh',
    description: 'Experience the majestic peaks, pristine valleys, and adventure sports in the enchanting Himalayas.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Adventure', 'Trekking', 'Scenic Beauty'],
    season: 'Oct - Nov, Mar - May',
    aiScore: 98,
  },
  {
    id: '2',
    title: 'Kerala Backwaters',
    state: 'Kerala',
    description: 'Serene backwater cruises, houseboat stays, and tropical landscapes awaiting your discovery.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Relaxation', 'Backwaters', 'Nature'],
    season: 'Sep - Feb',
    aiScore: 95,
  },
  {
    id: '3',
    title: 'Rajasthan Deserts',
    state: 'Rajasthan',
    description: 'Golden sand dunes, majestic forts, and vibrant culture in the land of maharajas.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Cultural', 'Heritage', 'Desert Safari'],
    season: 'Oct - Mar',
    aiScore: 96,
  },
  {
    id: '4',
    title: 'Goa Beaches',
    state: 'Goa',
    description: 'Pristine beaches, water sports, Portuguese heritage, and vibrant nightlife.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Beach', 'Nightlife', 'Water Sports'],
    season: 'Nov - Mar',
    aiScore: 92,
  },
  {
    id: '5',
    title: 'Varanasi Spiritual',
    state: 'Uttar Pradesh',
    description: 'The spiritual heart of India with sacred ghats, ancient temples, and divine rituals.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Spiritual', 'Cultural', 'Religious'],
    season: 'Oct - Mar',
    aiScore: 97,
  },
  {
    id: '6',
    title: 'Northeast Explorer',
    state: 'Assam & Meghalaya',
    description: 'Misty hills, waterfalls, and tribal cultures in India\'s unexplored northeast.',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Adventure', 'Nature', 'Culture'],
    season: 'Oct - Apr',
    aiScore: 94,
  },
];

export default function FeaturedDestinations() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={titleVariants} className="inline-flex items-center space-x-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 glow">
            <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
            <span className="text-sm font-medium text-brand-gold">Featured Destinations</span>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="block text-white mb-2">Explore India's</span>
            <span className="text-gradient">Most Captivating Destinations</span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Curated travel experiences powered by AI recommendations and verified by expert travel guides
          </motion.p>
        </motion.div>

        {/* Destination Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_DESTINATIONS.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              index={index}
              {...destination}
            />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-brand-gold to-brand-saffron text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold"
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
