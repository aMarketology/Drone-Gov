'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const services = [
    'UAS Platforms',
    'ISR Mission Support',
    'Sensor Integration',
    'Training & Certification',
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Safety', href: '/safety' },
    { name: 'Contact', href: '/contact' },
  ]

  const capabilities = [
    'Intelligence', 'Surveillance', 'Reconnaissance', 'C4ISR', 'VTOL Systems'
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/resolute-logo.png"
                alt="Resolute ISR"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Superior intelligence, surveillance, and reconnaissance capabilities. Original manufacturer of the Resolute Eagle UAS platform.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/company/resolute-isr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gray-600 rounded-full flex items-center justify-center transition"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gray-200 transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gray-400 group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <p className="font-semibold text-white mb-1">Corporate Headquarters</p>
                <p>4100 Lambert Drive</p>
                <p>Howell, MI 48855</p>
              </li>
              <li>
                <a
                  href="tel:+18558802233"
                  className="text-[#ee3124] hover:text-red-600 transition font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  855-880-2233
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                  Email Support
                </Link>
              </li>
              <li className="text-gray-400 text-sm pt-2">
                <p className="text-white font-semibold mb-1">Part of Heligroup Holdings</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a href="https://helimaxaviation.com/" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:text-red-600">Helimax Aviation</a>
                  <span>•</span>
                  <a href="https://chiaviation.com/" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:text-red-600">CHI Aviation</a>
                  <span>•</span>
                  <a href="https://xrdi.com/" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:text-red-600">XRDI</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Capabilities Bar */}
        <div className="py-6 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm mb-3">Core Capabilities:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {capabilities.map((cap, index) => (
              <span key={index} className="text-gray-500">
                {cap}{index < capabilities.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Resolute ISR. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-200 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-200 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
