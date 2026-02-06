'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
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
              About Resolute ISR
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Superior Intelligence, Surveillance, and Reconnaissance Capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is UAS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-[#ee3124] mb-6"></div>
              <h2 className="text-4xl font-light text-[#414042] mb-6">
                What is a UAS?
              </h2>
              <div className="space-y-4 text-lg text-[#414042] leading-relaxed">
                <p>
                  The technical name is <strong>Unmanned Air System, or UAS</strong>. This includes the unmanned aircraft that flies without a pilot on board and the operation is from the ground. Generally, only the media refers to this technology as a Drone. The user may refer to it as Remotely Piloted Aircraft System, or RPAS. The term UAS is more accurate and appropriate.
                </p>
                <p>
                  UAS technology represents a revolutionary approach to aerial intelligence gathering, surveillance operations, and reconnaissance missions. These sophisticated systems combine cutting-edge aviation technology with advanced sensor packages and real-time data transmission capabilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/IMG_1207 Kenneth Burger.JPG"
                alt="Resolute Eagle UAS"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-[#414042] leading-relaxed mb-8">
              Resolute ISR is dedicated to delivering superior Intelligence, Surveillance, and Reconnaissance capabilities through innovative UAS platforms and mission-critical technology solutions. We keep the warfighter safe and provide crucial information at critical times.
            </p>
            <p className="text-lg text-[#414042] leading-relaxed">
              As the original equipment manufacturer of the Resolute Eagle, we combine decades of aviation expertise with cutting-edge technology to create UAS platforms that are runway independent, mission adaptable, and superior in their class.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISR Capabilities Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-6">
              Understanding ISR
            </h2>
            <p className="text-lg text-[#414042] max-w-3xl mx-auto">
              The principal function of Intelligence, Surveillance, and Reconnaissance (ISR) is critical to modern defense operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f2f2f2] p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-[#ee3124] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">Intelligence</h3>
              <p className="text-[#414042] leading-relaxed">
                The collection, processing, and analysis of data to provide actionable information for decision-making and mission success.
              </p>
            </motion.div>

            {/* Surveillance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f2f2f2] p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-[#ee3124] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">Surveillance</h3>
              <p className="text-[#414042] leading-relaxed">
                Continuous monitoring and observation of areas, activities, or targets to gather real-time situational awareness.
              </p>
            </motion.div>

            {/* Reconnaissance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#f2f2f2] p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-[#ee3124] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">Reconnaissance</h3>
              <p className="text-[#414042] leading-relaxed">
                Preliminary surveying and exploration to obtain information about terrain, enemy positions, and operational conditions.
              </p>
            </motion.div>

            {/* C4ISR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#f2f2f2] p-8 rounded-lg"
            >
              <div className="w-12 h-12 bg-[#ee3124] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">C4ISR</h3>
              <p className="text-[#414042] leading-relaxed">
                Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance - integrated systems for comprehensive mission control.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-20 bg-[#414042]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-[#ee3124] mb-6"></div>
              <h2 className="text-4xl font-light text-white mb-6">
                Innovation & Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Intelligence Surveillance and Reconnaissance is more than simply the collection of data—it is the art of analysis, accuracy in data management, and critical real-time decision making that leads to successful operations in the field and value to the end user.
                </p>
                <p>
                  Resolute ISR is known for superior capabilities and the use and integration of mission-essential technologies that greatly expand the value and accuracy of data collected. From design and development to building and manufacturing, the Resolute ISR team fosters the latest technology and skilled expertise needed to go the distance on any mission.
                </p>
                <p>
                  The Resolute Eagle offers unique features and capabilities necessary for today's missions, including runway independence. Both standard fixed-wing and VTOL (Vertical Takeoff and Landing) platforms are fully runway independent, offering the soaring edge needed for successful missions on land or at sea.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/IMG_1173 Kenneth Burger.JPG"
                alt="Resolute ISR Technology"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-6">
              Part of the Heligroup Holdings Family
            </h2>
            <p className="text-lg text-[#414042] max-w-3xl mx-auto mb-12">
              Resolute ISR is proud to be part of Heligroup Holdings, a diversified aerospace and defense company with a portfolio of industry-leading brands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f2f2f2] p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#414042] mb-4">Resolute ISR</h3>
                <p className="text-[#414042]">UAS Platforms & ISR Solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#f2f2f2] p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#414042] mb-4">
                  <a href="https://helimaxaviation.net/" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:text-red-700 transition">
                    Helimax Aviation
                  </a>
                </h3>
                <p className="text-[#414042]">Helicopter Operations & Services</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#f2f2f2] p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-[#414042] mb-4">
                  <a href="https://skylineprecisioncorp.com/" target="_blank" rel="noopener noreferrer" className="text-[#ee3124] hover:text-red-700 transition">
                    Skyline Precision
                  </a>
                </h3>
                <p className="text-[#414042]">Precision Manufacturing</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#414042] mb-8">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-[#414042] mb-12">
              Discover how Resolute ISR can support your mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-red-700 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/offerings"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
              >
                View Offerings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
