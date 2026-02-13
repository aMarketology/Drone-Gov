'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Operations', 'Technology', 'Certifications', 'Contracts', 'Partnerships', 'Leadership']

  const newsArticles = [
    {
      id: 15,
      title: 'Resolute Eagle integrates with Salvadoran Navy during FLEX 2025',
      category: 'Operations',
      date: 'May 2025',
      excerpt: 'U.S. Naval Forces Southern Command hosted the Hybrid Fleet Campaign FLEX Event in El Salvador, demonstrating combined integration of unmanned systems including the Resolute Eagle UAS.',
      image: '/IMG_1177 Kenneth Burger.JPG',
      slug: 'resolute-eagle-salvadoran-navy-flex-2025'
    },
    {
      id: 14,
      title: 'Resolute Eagle integrates pLEO SATCOM with Baxter Aerospace and Overwatch Aero',
      category: 'Technology',
      date: 'January 2026',
      excerpt: 'Resolute ISR and pLEO SATCOM SMEs Overwatch Aero and Baxter Aerospace have equipped the Resolute Eagle UAS with a Proliferated Low Earth Orbit SATCOM solution.',
      image: '/IMG_1198 Kenneth Burger.JPG',
      slug: 'resolute-eagle-integrates-pleo-satcom'
    },
    {
      id: 13,
      title: 'Resolute Eagle demonstrates LOI3 operations with KTAC2.0 from Kutta Technologies',
      category: 'Operations',
      date: 'January 2026',
      excerpt: 'Resolute ISR participated in a demonstration in Phoenix, Arizona showcasing LOI-3 operations using KTAC 2.0 with the Resolute Eagle UAS across a Silvus mesh with pLEO-enabled C2.',
      image: '/IMG_1173 Kenneth Burger.JPG',
      slug: 'resolute-eagle-demonstrates-loi3-operations-ktac'
    },
    {
      id: 12,
      title: 'Resolute Eagle Masters the Cold: Successful Integration of Arkeus Warden Payload',
      category: 'Technology',
      date: 'January 2026',
      excerpt: 'Resolute ISR integrated and flew The Warden payload by Arkeus on the Resolute Eagle UAS, demonstrating reliable target detection and classification in snow-covered terrain.',
      image: '/Resolute Eagle Kenneth Burger.png',
      slug: 'resolute-eagle-masters-cold-arkeus-warden-integration'
    },
    {
      id: 11,
      title: 'Arkeus and Resolute ISR to deliver disruptive ISR to U.S. Department of War',
      category: 'Contracts',
      date: 'January 2026',
      excerpt: 'Arkeus secures US contract to deploy Warden hyperspectral wide-area search sensors with the Resolute ISR, Resolute Eagle, in support of operations for U.S. Department of War.',
      image: '/Resolute Eagle Kenneth Burger.png',
      slug: 'arkeus-resolute-isr-deliver-disruptive-isr-us-department-war'
    },
    {
      id: 1,
      title: 'Helimax Aviation Works To Fight Wildfires in the US',
      category: 'Operations',
      date: 'August 2024',
      excerpt: 'Helimax Aviation, Inc. is continuing the fight against wildfires in the United States. Currently, they are operating four CH-47D Chinooks in California, Oregon, and other western states to combat devastating wildfires.',
      image: '/IMG_1207 Kenneth Burger.JPG',
      slug: 'helimax-aviation-works-to-fight-wildfires'
    },
    {
      id: 2,
      title: "PAE ISR's Resolute Eagle receives NAVAIR Interim Flight Clearance",
      category: 'Certifications',
      date: 'July 2024',
      excerpt: 'STERLING, Virginia – PAE ISR received a Group 3 Interim Flight Clearance for the Resolute Eagle, vertical takeoff and landing configuration, from the Naval Air Systems Command (NAVAIR), marking a significant milestone for the platform.',
      image: '/IMG_1173 Kenneth Burger.JPG',
      slug: 'pae-isrs-resolute-eagle-receives-navair-interim-flight-clearance'
    },
    {
      id: 3,
      title: "PAE ISR Selects Persistent Systems' MPU5 for Resolute Eagle",
      category: 'Technology',
      date: 'June 2024',
      excerpt: 'PAE ISR has selected Persistent Systems\' MPU5 networking technology for integration into the Resolute Eagle UAS platform, enhancing communications capabilities and mission effectiveness in challenging operational environments.',
      image: '/IMG_1198 Kenneth Burger.JPG',
      slug: 'pae-isr-selects-persistent-systems-mpu5-for-resolute-eagle'
    },
    {
      id: 4,
      title: 'PAE ISR Selects TASE400 Laser Designator for Resolute Eagle',
      category: 'Technology',
      date: 'May 2024',
      excerpt: 'PAE ISR has selected the TASE400 laser designator system for integration with the Resolute Eagle UAS, providing advanced targeting and designation capabilities for precision operations.',
      image: '/IMG_1199 Kenneth Burger.JPG',
      slug: 'pae-isr-selects-tase400-laser-designator-for-resolute-eagle'
    },
    {
      id: 5,
      title: "Beth Beach: PAE ISR's Unmanned Aircraft Platform Offers Runway Independence",
      category: 'Leadership',
      date: 'April 2024',
      excerpt: 'Beth Beach discusses how PAE ISR\'s unmanned aircraft platform offers unique runway independence capabilities, setting the Resolute Eagle apart from other UAS platforms in its class.',
      image: '/IMG_1207 Kenneth Burger.JPG',
      slug: 'beth-beach-pae-isrs-unmanned-aircraft-platform-offers-runway-independence'
    },
    {
      id: 6,
      title: 'PAE ISR to Provide UAS Platform for DHS Border Security Operations',
      category: 'Contracts',
      date: 'March 2024',
      excerpt: 'HATTIESBURG, Mississippi – PAE ISR has been selected to provide an unmanned aircraft system for a Department of Homeland Security program that seeks to enhance border security operations along the U.S. borders.',
      image: '/IMG_1173 Kenneth Burger.JPG',
      slug: 'pae-isr-to-provide-uas-platform-for-dhs-border-security-operations'
    },
    {
      id: 7,
      title: "General Atomics, PAE ISR, Bell Selected as NASA UAS Dev't & Demo Partners",
      category: 'Partnerships',
      date: 'February 2024',
      excerpt: 'NASA will collaborate with General Atomics\' aeronautical systems business, PAE ISR and Textron\'s Bell subsidiary on a two-year project to demonstrate unmanned aircraft systems integration into the National Airspace System.',
      image: '/IMG_1198 Kenneth Burger.JPG',
      slug: 'general-atomics-pae-isr-bell-selected-as-nasa-uas-development-demo-partners'
    },
    {
      id: 8,
      title: 'PAE ISR to participate in RASP-B programme',
      category: 'Contracts',
      date: 'January 2024',
      excerpt: 'PAE ISR has been selected to participate in the RASP-B (Rapid Acquisition of Small Platforms - Batch) programme, providing advanced UAS capabilities for critical mission requirements.',
      image: '/IMG_1199 Kenneth Burger.JPG',
      slug: 'pae-isr-to-participate-in-rasp-b-programme'
    },
    {
      id: 9,
      title: 'Drone maker, FAA, NASA Reach Agreement',
      category: 'Partnerships',
      date: 'December 2023',
      excerpt: 'Historic agreement reached between PAE ISR, the Federal Aviation Administration, and NASA to advance safe integration of unmanned aircraft systems into the national airspace.',
      image: '/IMG_1207 Kenneth Burger.JPG',
      slug: 'drone-maker-faa-nasa-reach-agreement'
    },
    {
      id: 10,
      title: 'Resolute Eagle Demonstrates Advanced ISR Capabilities',
      category: 'Operations',
      date: 'November 2023',
      excerpt: 'The Resolute Eagle UAS successfully demonstrated advanced intelligence, surveillance, and reconnaissance capabilities during recent field exercises, showcasing its runway independence and superior sensor integration.',
      image: '/IMG_1173 Kenneth Burger.JPG',
      slug: 'resolute-eagle-demonstrates-advanced-isr-capabilities'
    }
  ]

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

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
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest developments in UAS technology, ISR operations, and Resolute ISR innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#f2f2f2] sticky top-20 z-40 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#ee3124] text-white'
                    : 'bg-white text-[#414042] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#ee3124] text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                  <h3 className="text-xl font-bold text-[#414042] mb-3 line-clamp-2 hover:text-[#ee3124] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#ee3124] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-[#414042] mb-8">
              Subscribe to our newsletter for the latest news, updates, and insights from Resolute ISR
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[#ee3124] focus:outline-none text-[#414042]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#ee3124] text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
