'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MapAnimationHTML from './components/MapAnimationHTML'
import DarkModeToggle from './components/DarkModeToggle'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <Navigation />
      
      {/* Hero Section - Unified Red & White Clean Design */}
      <section className="h-screen w-full relative overflow-hidden">
        
        {/* Unified Background - Clean White */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          </div>
        </div>

        {/* Content Container - Seamless Two Column Layout */}
        <div className="relative h-full flex">
          
          {/* Left Column - Branding (35%) */}
          <div className="w-[35%] h-full flex flex-col justify-center items-center px-8 relative z-20">
            {/* Red accent border on right */}
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-600/50 to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-red-600"
                style={{
                  textShadow: '0 2px 20px rgba(220, 38, 38, 0.15)',
                }}
              >
                48 STATES
              </motion.h1>
              
              {/* Clean red divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="h-1 w-64 mx-auto mb-6 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-800 tracking-[0.3em] font-bold mb-4"
              >
                NATIONWIDE
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-xl md:text-2xl text-gray-800 tracking-[0.3em] font-bold"
              >
                LOGISTICS SOLUTIONS
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-base md:text-lg text-gray-600 tracking-wide mt-6 max-w-md"
              >
                Your Trusted 3PL Partner Across America
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-8 animate-bounce text-red-600"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>

          {/* Right Column - Map Image (65%) */}
          <div className="w-[65%] h-full relative flex items-center justify-center">
            {/* Clean white background */}
            <div className="absolute inset-0 bg-white">
              {/* Subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
            </div>
            
            {/* US Map Image with Animation Overlay - Fixed aspect ratio to match calibration */}
            <div 
              className="relative z-10"
              style={{ 
                width: '90%',
                aspectRatio: '1200/692'
              }}
            >
              <Image
                src="/What-are-the-Lower-48-States-2.png"
                alt="United States Map"
                fill
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))'
                }}
                priority
                quality={100}
              />
              {/* HTML Animation Overlay - Uses absolute positioning for perfect alignment */}
              <MapAnimationHTML />
            </div>
          </div>
          
        </div>
        
      </section>

      {/* Section 2 - Coast to Coast Coverage */}
      <section className="relative bg-white dark:bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                COAST TO COAST<br />
                <span className="text-red-600">COVERAGE</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                48 States delivers comprehensive third-party logistics solutions across the continental 
                United States. Our extensive network ensures your freight moves efficiently, safely, 
                and on time—every time.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { number: '99.5%', label: 'On-Time Delivery', desc: 'Industry-leading reliability' },
              { number: '48', label: 'States Covered', desc: 'Nationwide reach' },
              { number: '24/7', label: 'Support', desc: 'Always available' },
              { number: '10K+', label: 'Shipments', desc: 'Monthly volume' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📍',
                title: 'Real-Time Tracking',
                desc: 'Monitor your shipments 24/7 with advanced GPS tracking and instant updates throughout the entire journey.'
              },
              {
                icon: '🚛',
                title: 'Nationwide Network',
                desc: 'Access to all 48 continental states with reliable carrier partners and optimized routing technology.'
              },
              {
                icon: '⚡',
                title: 'Flexible Solutions',
                desc: 'From FTL and LTL to expedited and specialized freight—we handle your unique logistics needs.'
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-600 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-gray-800"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Services */}
      <section className="relative bg-gray-50 dark:bg-gray-800 py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '📦',
                title: 'Full Truckload (FTL)',
                color: 'from-red-600 to-red-700',
                features: [
                  'Dedicated truck capacity for your shipment',
                  'Faster transit times with direct routing',
                  'Reduced handling and damage risk',
                  'Competitive rates for large shipments'
                ]
              },
              {
                icon: '⚡',
                title: 'Expedited Shipping',
                color: 'from-gray-800 to-gray-900',
                features: [
                  'Time-critical delivery solutions',
                  '24/7 operations and dispatch',
                  'Direct routes with priority handling',
                  'Real-time tracking and updates'
                ]
              },
              {
                icon: '📊',
                title: 'Less Than Truckload (LTL)',
                color: 'from-red-700 to-red-800',
                features: [
                  'Cost-effective for smaller shipments',
                  'Flexible scheduling options',
                  'Consolidated shipping efficiency',
                  'Reliable carrier network'
                ]
              },
              {
                icon: '🎯',
                title: 'Specialized Freight',
                color: 'from-gray-700 to-gray-800',
                features: [
                  'Temperature-controlled transport',
                  'Oversized and heavy haul',
                  'Hazmat certified carriers',
                  'White glove delivery service'
                ]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
                <div className="relative p-8 text-white">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-300 mt-1">▸</span>
                        <span className="text-gray-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <Link 
                      href="/services"
                      className="inline-flex items-center text-white font-semibold hover:text-red-200 transition-colors"
                    >
                      Learn More 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white dark:bg-gray-900 py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              READY TO <span className="text-red-600">SHIP</span>?
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Get a quote today and experience the reliability of America's premier 3PL provider.<br />
              <span className="text-gray-500 dark:text-gray-400">Fast, flexible, and always on time.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 text-lg tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                GET A QUOTE
                <span className="ml-2">→</span>
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 text-gray-900 dark:text-gray-100 hover:text-red-600 font-bold py-4 px-10 text-lg tracking-wide transition-all duration-300 rounded-lg hover:shadow-lg"
              >
                VIEW SERVICES
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">A+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Safety Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Customer Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">48</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">States Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">99.5%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">On-Time Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
