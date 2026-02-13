'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function PLEOSATCOMIntegration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#414042] to-[#323232]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/news" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-[#ee3124] text-white text-sm font-semibold rounded-full">
                Technology
              </span>
              <span className="text-gray-300">January 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resolute Eagle integrates pLEO SATCOM with Baxter Aerospace and Overwatch Aero
            </h1>
            
            <p className="text-xl text-gray-300">
              Resolute ISR and pLEO SATCOM SMEs Overwatch Aero and Baxter Aerospace have equipped the Resolute Eagle UAS with a Proliferated Low Earth Orbit SATCOM solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="/IMG_1198 Kenneth Burger.JPG"
              alt="Resolute Eagle with pLEO SATCOM"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              Resolute ISR and pLEO SATCOM SMEs Overwatch Aero, LLC and Baxter Aerospace have equipped the Resolute Eagle UAS with a Proliferated Low Earth Orbit SATCOM solution (TRL9). This advanced integration represents a significant milestone in extending the operational capabilities of the Resolute Eagle platform.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The pLEO SATCOM equipped Resolute Eagle UAS recently deployed overseas for a U.S. DoD customer, demonstrating the system's operational readiness and mission effectiveness. The Resolute Eagle UAS utilizes an Applied Navigation LLC Quattro autopilot and has an operational range of +600 NM.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              This collaboration between Resolute ISR, Overwatch Aero, and Baxter Aerospace showcases the power of integrating cutting-edge SATCOM technology with proven UAS platforms to deliver enhanced communication capabilities for critical defense operations.
            </p>

            <div className="bg-[#f2f2f2] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#414042] mb-3">System Capabilities</h3>
              <ul className="space-y-2 text-[#414042]">
                <li>✓ Proliferated Low Earth Orbit SATCOM (TRL9)</li>
                <li>✓ Applied Navigation Quattro autopilot</li>
                <li>✓ Operational range of +600 NM</li>
                <li>✓ Deployed for U.S. DoD operations</li>
                <li>✓ Enhanced communication capabilities</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
