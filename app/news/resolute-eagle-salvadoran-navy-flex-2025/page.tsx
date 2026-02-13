'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function FLEX2025Article() {
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
              <span className="text-gray-300">May 27, 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hybrid Fleet Campaign Event - USNAVSOUTH and Salvadoran Navy integrate Robotic and Autonomous Systems during FLEX 2025
            </h1>
            
            <p className="text-xl text-gray-300">
              Cooperative Security Location Comalapa hosted the annual U.S. Naval Forces Southern Command Hybrid Fleet Campaign FLEX Event demonstrating combined integration of unmanned systems.
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
              src="/IMG_1177 Kenneth Burger.JPG"
              alt="FLEX 2025 Operations"
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
              <strong>SAN SALVADOR, El Salvador (May 27, 2025)</strong> — Cooperative Security Location (CSL) Comalapa, in coordination with the Salvadoran Navy, hosted the annual U.S. Naval Forces Southern Command / U.S. 4th Fleet Hybrid Fleet Campaign (HFC) Fleet Experimentation (FLEX) Event demonstrating combined/joint integration potential for unmanned systems during a showcase event in San Salvador, El Salvador.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              In its 25th year of operation, CSL Comalapa's mission to combat transnational organized crime created the perfect opportunity to transition FLEX from partner nation observation to partner nation participation. King Air manned aircraft teamed with Resolute Eagle unmanned aircraft systems (UAS), Tsunami unmanned surface vessel (USV), Minotaur data fusion, and Lema expeditionary solar power to operate with Salvadoran navy Task Force Tridente from April 1 to May 23.
            </p>

            <div className="bg-[#f2f2f2] border-l-4 border-[#ee3124] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#414042] italic">
                "Surface, aerial, and undersea autonomous systems stack together to give us highly effective maritime domain awareness. Part of what we've done here at Comalapa is advanced data fusion."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                — Cmdr. Jon Williams, USNAVSOUTH Technology and Innovation Director
              </p>
            </div>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              During FLEX, TF Tridente accomplished the interdiction and apprehension of narcotics smugglers with the assistance of this synchronized system. Practical tests showed the capability of single or combined systems to find, fix, track, assess, disrupt and pursue training targets from longer ranges with less exhaustion to manned interdiction crews.
            </p>

            <div className="bg-[#f2f2f2] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#414042] mb-3">Systems Integrated</h3>
              <ul className="space-y-2 text-[#414042]">
                <li>✓ Resolute Eagle UAS</li>
                <li>✓ King Air manned aircraft</li>
                <li>✓ Tsunami unmanned surface vessel</li>
                <li>✓ Minotaur data fusion</li>
                <li>✓ Lema expeditionary solar power</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
