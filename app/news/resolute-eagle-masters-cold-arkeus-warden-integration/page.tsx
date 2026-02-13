'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function WardenColdIntegration() {
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
              Resolute Eagle Masters the Cold: Successful Integration of Arkeus Warden Payload
            </h1>
            
            <p className="text-xl text-gray-300">
              Resolute ISR integrated and flew The Warden payload by Arkeus on the Resolute Eagle UAS, demonstrating reliable target detection and classification in snow-covered terrain.
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
              src="/Resolute Eagle Kenneth Burger.png"
              alt="Resolute Eagle in winter conditions"
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
              This week, Resolute ISR integrated and flew The Warden payload by Arkeus on the Resolute Eagle UAS. During flight operations, the system demonstrated reliable target detection and classification in snow-covered terrain—conditions that traditionally challenge conventional sensors.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              These capabilities directly translate to desert and maritime operating environments, providing consistent situational awareness across diverse terrain and background conditions.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              This integration represents another step toward expanding the Resolute Eagle's modular ISR payload ecosystem and delivering adaptable, mission-relevant capabilities to government and commercial customers.
            </p>

            <div className="bg-[#f2f2f2] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#414042] mb-3">Key Highlights</h3>
              <ul className="space-y-2 text-[#414042]">
                <li>✓ Successful integration of Arkeus Warden payload</li>
                <li>✓ Reliable performance in challenging snow-covered terrain</li>
                <li>✓ Capabilities applicable to desert and maritime environments</li>
                <li>✓ Enhanced modular ISR payload ecosystem</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
