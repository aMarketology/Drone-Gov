'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Offerings() {
  const offerings = [
    {
      id: 1,
      title: 'UAS Platforms',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: 'Original manufacturer of the Resolute Eagle UAS with runway independence, VTOL capabilities, and superior payload capacity.',
      features: [
        'Fixed-wing and VTOL configurations',
        'Runway independent operations',
        'Group 4 performance',
        'Extended endurance capabilities',
        'Land and sea operations'
      ]
    },
    {
      id: 2,
      title: 'ISR Mission Support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: 'Comprehensive intelligence, surveillance, and reconnaissance mission planning and execution support.',
      features: [
        'Mission planning and coordination',
        'Real-time data collection',
        'Intelligence analysis support',
        'Surveillance operations',
        'Reconnaissance briefings'
      ]
    },
    {
      id: 3,
      title: 'Advanced Sensor Integration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: 'Integrated multi-sensor payloads, secure networking, and edge processing capabilities designed for distributed ISR operations.',
      features: [
        'pLEO SATCOM connectivity',
        'Warden Optical Radar integration',
        'Secure web-based payload viewing',
        'Silvus MANET networking nodes',
        'Onboard edge computing architecture'
      ]
    },
    {
      id: 4,
      title: 'Training & Certification',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Comprehensive operator training programs and certification courses for UAS operations.',
      features: [
        'FAA Part 107 certification support',
        'Platform-specific training',
        'Mission planning courses',
        'Maintenance training programs',
        'Safety management systems'
      ]
    },
    {
      id: 5,
      title: 'Data Analytics & Processing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Advanced data processing, analysis, and intelligence product generation services.',
      features: [
        'Real-time data processing',
        'Geospatial analysis',
        'Intelligence product generation',
        'Data management solutions',
        'Secure data transmission'
      ]
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Comprehensive maintenance, repair, and technical support services for UAS platforms.',
      features: [
        'Preventive maintenance programs',
        'Component repair and overhaul',
        '24/7 technical support',
        'Spare parts inventory',
        'Field service capabilities'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#414042] to-[#323232]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Offerings
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive UAS platforms, ISR solutions, and mission support services designed to keep the warfighter safe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f2f2f2] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#ee3124] rounded-full flex items-center justify-center mb-6 text-white">
                  {offering.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#414042] mb-4">
                  {offering.title}
                </h3>
                
                <p className="text-[#414042] mb-6 leading-relaxed">
                  {offering.description}
                </p>
                
                <ul className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#414042]">
                      <svg className="w-5 h-5 text-[#ee3124] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-6">
              On Target, Always
            </h2>
            <p className="text-lg text-[#414042] mb-8">
              We build a capability that keeps the war fighter safe and provide crucial information at critical times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Resolute Eagle Fixed Wing Specificatons.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-[#d12b1f] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Capabilities Briefing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-transparent border-2 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Headquarters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#f2f2f2] p-10 rounded-lg max-w-2xl mx-auto">
            <div className="w-16 h-1 bg-[#ee3124] mb-6"></div>
            <h2 className="text-3xl font-light text-[#414042] mb-8 uppercase tracking-wide">
              Corporate Headquarters
            </h2>
            
            <div className="space-y-3 text-[#414042] mb-8">
              <p className="text-xl font-semibold">4100 Lambert Drive</p>
              <p className="text-xl font-semibold">Howell, MI 48855</p>
              <p className="text-2xl font-bold text-[#ee3124] mt-4">
                <a href="tel:+18558802233" className="hover:text-[#d12b1f] transition">
                  855-880-2233
                </a>
              </p>
            </div>

            <div className="my-8 py-8 border-t border-b border-gray-300">
              <h3 className="text-xl font-semibold text-[#414042] mb-4">
                Part of the Heligroup Holdings Family
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-base">
                <a 
                  href="https://helimaxaviation.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                >
                  Helimax Aviation
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://chiaviation.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                >
                  CHI Aviation
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://xrdi.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                >
                  XRDI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
