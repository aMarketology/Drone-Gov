'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function KTACLOI3Demo() {
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
              <span className="text-gray-300">January 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resolute Eagle demonstrates LOI3 operations with KTAC2.0 from Kutta Technologies
            </h1>
            
            <p className="text-xl text-gray-300">
              Resolute ISR participated in a demonstration in Phoenix, Arizona showcasing LOI-3 operations using KTAC 2.0 with the Resolute Eagle UAS.
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
              src="/IMG_1173 Kenneth Burger.JPG"
              alt="Resolute Eagle KTAC demonstration"
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
              Resolute ISR recently participated in a demonstration hosted by Kutta Technologies, LLC in Phoenix, Arizona. The event showcased LOI-3 operations using KTAC 2.0 with the Resolute Eagle UAS, operating across a Silvus mesh with pLEO-enabled C2, and supported discussions on future capability development.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              Trading snowy Michigan for some Arizona sun was a welcome change, and the two-day demo was a great opportunity to showcase what's possible when the right systems come together. The team successfully demonstrated LOI-3 operations using KTAC 2.0 across a Silvus mesh (SC4200 → SC4400) through SATCOM on the pLEO-integrated Resolute Eagle, all in front of a live audience and their customer community.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The demonstration included discussions on future capabilities including VoIP, RoIP, and the delivery of secure, encrypted internet connectivity to the warfighter and remote users at distances of up to 3 km. Future paths being explored include RoIP through the KTAC board and delivering encrypted Wi-Fi out to ground users.
            </p>

            <div className="bg-[#f2f2f2] p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-[#414042] mb-3">Demonstration Highlights</h3>
              <ul className="space-y-2 text-[#414042]">
                <li>✓ LOI-3 operations with KTAC 2.0</li>
                <li>✓ Silvus mesh network integration (SC4200 → SC4400)</li>
                <li>✓ pLEO-enabled C2 through SATCOM</li>
                <li>✓ Future VoIP and RoIP capabilities</li>
                <li>✓ Encrypted internet connectivity up to 3 km</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
