'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Navigation />

      {/* === HERO SECTION === */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#414042]">
        <div className="absolute inset-0">
          <Image
            src="/IMG_1198 Kenneth Burger.JPG"
            alt="Resolute ISR Services"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide uppercase">
              Services
            </h1>
            <div className="w-16 h-1 bg-[#ee3124] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* === MILITARY SERVICES SECTION === */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#323232] mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#414042] uppercase tracking-wide">
              Military Services
            </h2>
          </div>

          {/* Ground-Based ISR */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#414042] mb-6">Ground-Based ISR</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  The principal function of the intelligence, surveillance, and reconnaissance (ISR) component of command, control, communications, computers, intelligence, surveillance, and reconnaissance (C4ISR) is to find, fix, and track both friendly and hostile forces, as well as to assess damage to hostile targets in an area of interest. In addition to sensing (collection), the function includes the tasking of sensors and the integration, interpretation, and exploitation of sensed information.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px]">
                <Image
                  src="/IMG_1173 Kenneth Burger.JPG"
                  alt="Ground-Based ISR"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Force Protection */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px]">
                <Image
                  src="/IMG_1207 Kenneth Burger.JPG"
                  alt="Force Protection"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#414042] mb-6">Force Protection</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  Unmanned surveillance aircraft offer a significant value to current Force Protection measures particularly in areas of mountainous terrain and maritime environments where the enemy has ample opportunity for advancement on protected establishments. By extending the range of awareness Commanders in the field have the advantage of real time information and imagery that can dramatically change the outcome of any engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Anti-Piracy */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#414042] mb-6">Anti-Piracy</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  Contemporary maritime piracy reached its peak level in 2010, with around 445 reported incidents. The regions most likely to come under threat from pirate attacks include Indonesia, Malaysia, Nigeria and the Gulf of Aden. Strategic passages for oil transport such as Bab-el-Mandeb near Somalia, or the Strait of Malacca off the Indonesian coast have become notorious targets for maritime crime.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px]">
                <Image
                  src="/IMG_1199 Kenneth Burger.JPG"
                  alt="Anti-Piracy"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Border Protection */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px]">
                <Image
                  src="/IMG_9700.jpeg"
                  alt="Border Protection"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#414042] mb-6">Border Protection</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  Mass migration has become a recent threat to international security and individual sovereignty of nations. Border control requires a variety of tools and advanced technology in order to stem the flow of illegal migration, cross border narcotics trafficking, human trafficking and the growing threats of terrorism. Persistent surveillance with UAS platforms offer enhance vision through the night, coherent change detection of common routes and automated motion detection software to help maintain targets on the move.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern of Life Recognition */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#414042] mb-6">Pattern of Life Recognition</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  Activity-based intelligence (ABI) is an analysis methodology that rapidly integrates data from multiple sources such as FMV and HUMINT to discover relevant patterns, determine and identify change and characterize those patterns to drive collection and create decision advantage. Pattern-of-life is the specific set of behaviors and movements associated with a particular entity over a given period of time. The focus on an individual or group of individuals is the fundamental uniqueness behind pattern of life analysis and drives the need for a new set of techniques and approaches to intelligence collection.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px]">
                <Image
                  src="/Resolute Eagle.png"
                  alt="Pattern of Life Recognition"
                  fill
                  className="object-contain rounded-lg bg-white p-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === HUMANITARIAN SERVICES SECTION === */}
      <section className="relative py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-[#323232] mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#414042] uppercase tracking-wide">
              Humanitarian Services
            </h2>
          </div>

          {/* Search and Rescue */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px]">
                <Image
                  src="/IMG_1198 Kenneth Burger.JPG"
                  alt="Search and Rescue"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#414042] mb-6">Search and Rescue</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  Search and rescue efforts can be greatly enhanced with the use of UAS platforms equipped with Thermal imagery systems. Thermal imaging lets you see through wide swaths of wilderness and between dark or poorly illuminated spaces in a city. Time is critical on every mission and eyes in the sky can reduce search time and possibly deliver lifesaving supplies and communication equipment needed to achieve positive outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Firefighting */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-light text-[#414042] mb-6">Firefighting</h3>
                <p className="text-lg text-[#414042] leading-relaxed">
                  UAS technologies offer a tremendous leap forward in capabilities for the fire service. Not only do UAS give first responders the ability to have a bird's eye view of the scene, they also offer the potential for entirely new strategies and tactics that could change operations drastically. Examples of how UAS may be employed would include: Structural and Forestry firefighting, Disaster response, Emergency medical services and hot zone work in real time using high-resolution and thermal imaging.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px]">
                <Image
                  src="/IMG_1173 Kenneth Burger.JPG"
                  alt="Firefighting"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ON TARGET SECTION === */}
      <section className="relative py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="w-16 h-1 bg-[#323232] mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#414042] mb-6 uppercase tracking-wide">
            On Target, Always
          </h2>
          <p className="text-xl text-[#414042] mb-8 leading-relaxed">
            We build a capability that keeps the war fighter safe and provide crucial information at critical times.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-[#d12b1f] transition-all duration-300 uppercase tracking-wider text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Capabilities Briefing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
