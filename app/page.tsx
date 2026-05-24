'use client';

import HeroSection from '@/components/sections/HeroSection';
import FeaturedDestinations from '@/components/sections/FeaturedDestinations';
import AIIntegration from '@/components/sections/AIIntegration';
import YatraGoSection from '@/components/sections/YatraGoSection';
import BlogPreview from '@/components/sections/BlogPreview';

export default function Home() {
  return (
    <div className="bg-brand-dark overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* AI Integration Section */}
      <AIIntegration />

      {/* YatraGo Section */}
      <YatraGoSection />

      {/* Blog Preview */}
      <BlogPreview />
    </div>
  );
}
