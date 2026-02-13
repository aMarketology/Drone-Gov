'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function HelimaxWildfiresArticle() {
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
                Operations
              </span>
              <span className="text-gray-300">August 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Helimax Aviation Works To Fight Wildfires in the US
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
              src="/IMG_1207 Kenneth Burger.JPG"
              alt="Helimax Aviation Wildfire Operations"
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
              Helimax Aviation, Inc. is continuing the fight against wildfires in the United States. Currently, they are operating four CH-47D Chinooks in California, Oregon, and other western states to combat devastating wildfires.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The CH-47D Chinook helicopters provide critical aerial firefighting capabilities, delivering water and fire retardant to hard-to-reach areas. These heavy-lift aircraft are essential in protecting communities and natural resources from wildfire threats.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              As part of the Heligroup Holdings family, Helimax Aviation demonstrates the same commitment to operational excellence and mission success that defines Resolute ISR's approach to UAS operations.
            </p>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
