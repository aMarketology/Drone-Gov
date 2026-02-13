'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function ArkeusResoluteISRArticle() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
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
                Contracts
              </span>
              <span className="text-gray-300">January 13, 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Arkeus and Resolute ISR to deliver disruptive ISR to U.S. Department of War
            </h1>
            
            <p className="text-xl text-gray-300">
              Arkeus secures US contract to deploy Warden hyperspectral wide-area search sensors with the Resolute ISR, Resolute Eagle, in support of operations for U.S. Department of War.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
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
              alt="Resolute Eagle UAS"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              <strong>Virginia, United States — 13 January 2026</strong> — Arkeus, a provider of AI-powered wide area, real time, hyperspectral sensing systems, today announced it has secured a contract for the expedited delivery of Warden Hyperspectral Optical Radar (HSOR) sensors, to be deployed with the Resolute ISR, Resolute Eagle UAS, in support of complex, multi-environment, operations for the U.S. DOW.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The order follows recent accelerated integration activities conducted with the Resolute Eagle, enabling the rapid fielding of the Warden sensor to tackle the growing need for rapid real time intelligence – even in degraded visual environments. In line with recent Executive Orders from the Trump Administration, Arkeus has invested in additional production capacity to support accelerated deliveries to Resolute ISR to support an urgent operational need.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              Optimized for UAS, the Warden uses a wide-area, hyperspectral sensing array to deliver radar like range, with the image quality of optics –delivering an immediate situational understanding of the area of operation –vastly accelerating the location, identification and track of any target of interest. Warden's compact form factor and operational performance provide Group 4 UAS performance within the Group 3 Resolute Eagle.
            </p>

            <div className="bg-[#f2f2f2] border-l-4 border-[#ee3124] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#414042] italic">
                "Following recent orders, Arkeus continues to increase capacity of Warden sensor to prioritize the warfighter."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                — Simon Olsen, President of Arkeus Inc.
              </p>
            </div>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              "The multi-mission Warden sensor is a tremendous partner to the Resolute Eagle, supporting a wide range of missions such as law enforcement, homeland security, firefighting, search and rescue, humanitarian and commercial security services, without needing to change the payload," said Olsen.
            </p>

            <h2 className="text-3xl font-bold text-[#414042] mt-12 mb-6">
              Proven Performance in Extreme Conditions
            </h2>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              Arkeus's Warden Hyperspectral Optical Radar (HSOR) was successfully integrated and flown on the Resolute Eagle through the challenging adverse winter conditions of Michigan in December of 2025. Operating autonomously through snowstorms, low visibility and harsh weather, the system validated its ruggedness, reliability and repeatability by delivering consistent mission outcomes in environments that traditionally challenge conventional sensors. The sensors uses its hyperspectral array to cut through the toughest visual environments – even when not visible to a human operator.
            </p>

            <div className="bg-[#f2f2f2] border-l-4 border-[#ee3124] p-6 my-8 rounded-r-lg">
              <p className="text-lg text-[#414042] italic">
                "Successful integration and flight testing of Warden on the Resolute Eagle UAS is a game-changing advanced technology insertion that comes at a critical time in a nation's history."
              </p>
              <p className="text-sm text-gray-600 mt-2">
                — Jake Jacobs, Executive Vice President, Resolute ISR, Inc.
              </p>
            </div>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              "The addition of Warden to our payload portfolio provides our customers with increased Unmanned Aerial System capability that is crucial for responding to the challenges of Maritime Domain Awareness requirements. Our current solution provides persistent, long-range, long-endurance, cost effective surveillance capability that can operate over vast ocean areas, enabling early detection of high-interest threats," he said. "We are extremely pleased with our partnership with Arkeus."
            </p>

            <h2 className="text-3xl font-bold text-[#414042] mt-12 mb-6">
              Advanced Capabilities
            </h2>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              When deployed on the Resolute Eagle, the Warden will autonomously detect, identify, locate and track all targets over land, sea and littoral –and both day and night. As all data is processed and exploited on the sensor –decision makers can have access to critical intelligence in seconds – from anywhere on earth.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              The Resolute Eagle is a Group 3 UAS that delivers persistent, resilient, and rapidly deployable ISR capabilities. It combines high payload capacity, a true multi-fuel engine that reduces logistical constraints, and resilient LOS and pLEO SATCOM connectivity—enabling distributed mesh communications that extend voice, data, and internet access to ground users. Runway-independent with minimal support equipment enable a small operational footprint for austere maritime and expeditionary environments.
            </p>

            <p className="text-lg text-[#414042] leading-relaxed mb-6">
              This most recent contract for Warden HSOR follows recent contracts from the US Department of War and from the Australian Army.
            </p>

            <div className="border-t-2 border-gray-200 mt-12 pt-8">
              <h3 className="text-2xl font-bold text-[#414042] mb-4">About Resolute ISR</h3>
              <p className="text-base text-[#414042] leading-relaxed mb-6">
                Resolute ISR is a US-based intelligence, surveillance and reconnaissance solutions provider focused on delivering integrated airborne and maritime sensing capabilities to defense and security customers. The company specializes in rapid integration of advanced sensor payloads onto operational platforms, supporting border security, counter-UAS and maritime domain awareness mission sets.
              </p>
              <p className="text-base text-[#414042]">
                For more information about Resolute ISR, visit{' '}
                <a href="https://www.resoluteisr.com" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:underline">
                  www.resoluteisr.com
                </a>
              </p>
            </div>

            <div className="border-t-2 border-gray-200 mt-8 pt-8">
              <h3 className="text-2xl font-bold text-[#414042] mb-4">About Arkeus</h3>
              <p className="text-base text-[#414042] leading-relaxed mb-4">
                Arkeus accelerates decision making through the fusion of optics and autonomy. Arkeus specializes in rapid design, innovation and fabrication of autonomous optical capabilities – designed to deliver transformative effects for Search, Intelligence, Surveillance and Reconnaissance (SISR).
              </p>
              <p className="text-base text-[#414042] leading-relaxed">
                Arkeus wide area autonomous optical search and surveillance systems are optimized for a range of missions including ISR, border protection, city size surveillance, force protection, counter terrorism, illegal activity monitoring or search and rescue – across land, sea and space –specializing in extracting critical intelligence and surveillance information and disseminating that data in challenging or contested environments.
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#414042] mb-12 text-center">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/news/pae-isrs-resolute-eagle-receives-navair-interim-flight-clearance" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/IMG_1173 Kenneth Burger.JPG"
                    alt="NAVAIR Certification"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#ee3124] font-semibold">Certifications</span>
                  <h3 className="text-lg font-bold text-[#414042] mt-2 group-hover:text-[#ee3124] transition-colors">
                    PAE ISR's Resolute Eagle receives NAVAIR Interim Flight Clearance
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/news/pae-isr-selects-persistent-systems-mpu5-for-resolute-eagle" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/IMG_1198 Kenneth Burger.JPG"
                    alt="MPU5 Integration"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#ee3124] font-semibold">Technology</span>
                  <h3 className="text-lg font-bold text-[#414042] mt-2 group-hover:text-[#ee3124] transition-colors">
                    PAE ISR Selects Persistent Systems' MPU5 for Resolute Eagle
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/news/pae-isr-to-provide-uas-platform-for-dhs-border-security-operations" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/IMG_1173 Kenneth Burger.JPG"
                    alt="DHS Border Security"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#ee3124] font-semibold">Contracts</span>
                  <h3 className="text-lg font-bold text-[#414042] mt-2 group-hover:text-[#ee3124] transition-colors">
                    PAE ISR to Provide UAS Platform for DHS Border Security Operations
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
