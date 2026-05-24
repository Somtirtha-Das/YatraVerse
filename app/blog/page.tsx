'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Search } from 'lucide-react';

const BLOG_POSTS = [
  { id: 1, title: 'Hidden Gems of North India', author: 'Sarah', date: 'May 20', category: 'Guide' },
  { id: 2, title: 'Budget Travel Tips', author: 'Raj', date: 'May 18', category: 'Tips' },
  { id: 3, title: 'Festival Travel Guide', author: 'Emma', date: 'May 15', category: 'Culture' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="block text-white mb-2">Travel</span>
            <span className="text-gradient">Stories & Guides</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Insights, tips, and inspiration from our community
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold"
            />
          </div>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark p-6 rounded-lg border border-white/10 hover:border-brand-gold/50 cursor-pointer transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-3 group-hover:text-gradient transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mt-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
