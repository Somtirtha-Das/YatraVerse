'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Hidden Gems of Himachal Pradesh',
    excerpt: 'Discover lesser-known destinations in the majestic mountains that will take your breath away.',
    author: 'Sarah Johnson',
    date: 'May 20, 2024',
    category: 'Destination Guide',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Complete Kerala Backwater Guide',
    excerpt: 'Everything you need to know about planning the perfect Kerala backwater vacation.',
    author: 'Raj Kumar',
    date: 'May 18, 2024',
    category: 'Travel Tips',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Budget Travel in Rajasthan',
    excerpt: 'Experience royal palaces and golden deserts without breaking the bank.',
    author: 'Emma Wilson',
    date: 'May 15, 2024',
    category: 'Budget Travel',
    readTime: '6 min read',
  },
];

export default function BlogPreview() {
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
        className="absolute top-20 left-0 w-72 h-72 bg-brand-saffron/5 rounded-full blur-3xl pointer-events-none"
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
            <span className="text-sm font-medium text-brand-saffron">Travel Stories</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="block text-white mb-2">Latest</span>
            <span className="text-gradient">Travel Inspirations</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Get inspired by real travel stories, insider tips, and destination guides from our community
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-dark rounded-2xl overflow-hidden border border-white/10 hover:border-brand-saffron/50 transition-all group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-dark flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-brand-saffron/20 text-brand-saffron rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div className="border-t border-white/10 pt-4 mb-4"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-gold to-brand-saffron rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-brand-dark" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-brand-gold" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-brand-saffron to-brand-gold text-brand-dark font-semibold rounded-lg hover:shadow-lg transition-all glow-gold flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Read All Stories</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
