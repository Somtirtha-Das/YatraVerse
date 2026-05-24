'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">YatraVerse</h3>
            <p className="text-gray-400 text-sm mb-4">
              Discover the Soul of India with AI-powered travel planning and human expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'Packages', href: '/packages' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'AI Trip Planner', href: '/ai-planner' },
                { label: 'YatraGo Transport', href: '/yatrago' },
                { label: 'Expert Connect', href: '#' },
                { label: 'Booking', href: '/booking' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <a href="mailto:hello@yatraverse.com" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                  hello@yatraverse.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-brand-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} YatraVerse. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-center text-sm text-gray-500 italic">
            "Discover the Soul of India"
          </p>
        </div>
      </div>
    </footer>
  );
}
