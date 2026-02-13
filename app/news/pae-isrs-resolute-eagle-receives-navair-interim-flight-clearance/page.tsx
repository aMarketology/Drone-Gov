'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function NAVAIRClearanceArticle() {
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
                Certifications
              </span>
              <span className="text-gray-300">July 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PAE ISR's Resolute Eagle receives NAVAIR Interim Flight Clearance
            </h1>
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
              src="/IMG_1173 Kenneth Burger.JPG"
              alt="Resolute Eagle NAVAIR Certification"
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
              <strong>STERLING, Virginia</strong> – PAE ISR received a Group 3 Interim Flight Clearance for the Resolute Eagle, vertical takeoff and landing configuration, from the Naval Air Systems Command (NAVAIR), marking a significant milestone for the platform.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              This certification validates the Resolute Eagle's design, safety, and operational capabilities for military applications. The NAVAIR clearance enables expanded operational deployment and demonstrates the platform's compliance with rigorous military aviation standards.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The Group 3 classification recognizes the Resolute Eagle's advanced capabilities while maintaining operational flexibility for diverse mission requirements across land and maritime environments.
            </p>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
