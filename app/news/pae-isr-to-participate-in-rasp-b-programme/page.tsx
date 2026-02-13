'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Article() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#414042] to-[#323232]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/news" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-[#ee3124] text-white text-sm font-semibold rounded-full">Contracts</span>
              <span className="text-gray-300">January 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">PAE ISR to participate in RASP-B programme</h1>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/IMG_1199 Kenneth Burger.JPG" alt="Article" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="prose prose-lg max-w-none">
            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              PAE ISR has been selected to participate in the RASP-B (Rapid Acquisition of Small Platforms - Batch) programme, providing advanced UAS capabilities for critical mission requirements.
            </p>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
