'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'ISR Systems', 'Training', 'Missions']

  // Flight footage served straight from /public/new. Kept small so it can live
  // in the repo as ordinary Git objects (no LFS) — larger footage is hosted
  // externally and linked separately.
  const videos = [
    { title: 'Resolute Eagle Launch', src: '/new/RE BR Launch.mp4' },
    { title: 'Resolute Eagle Landing', src: '/new/RE BR Landing.mp4' },
    { title: 'Resolute Eagle Item Drop', src: '/new/RE Item Drop.mp4' },
    { title: 'Forward Look Camera Drop', src: '/new/FWD Look Cam Drop.mp4' },
    { title: 'Trillium GCS Drop', src: '/new/Trillium GCS Drop.MP4' }
  ]

  const galleryImages = [
    {
      id: 2,
      src: '/IMG_1173 Kenneth Burger.JPG',
      alt: 'ISR mission operations',
      category: 'Missions',
      title: 'ISR Mission Operations'
    },
    {
      id: 3,
      src: '/IMG_1198 Kenneth Burger.JPG',
      alt: 'UAS platform specifications',
      category: 'ISR Systems',
      title: 'Advanced Sensor Integration'
    },
    {
      id: 4,
      src: '/IMG_1199 Kenneth Burger.JPG',
      alt: 'Training operations',
      category: 'Training',
      title: 'Operator Training'
    },
    {
      id: 6,
      src: '/IMG_1173 Kenneth Burger.JPG',
      alt: 'VTOL capabilities',
      category: 'ISR Systems',
      title: 'VTOL Platform'
    },
    {
      id: 7,
      src: '/IMG_1198 Kenneth Burger.JPG',
      alt: 'Field operations',
      category: 'Missions',
      title: 'Field Deployment'
    },
    {
      id: 8,
      src: '/IMG_1199 Kenneth Burger.JPG',
      alt: 'System maintenance',
      category: 'Training',
      title: 'Maintenance Training'
    }
  ]

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

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
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our UAS platforms, ISR operations, and mission capabilities through images
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-14 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-6"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-4">
              Flight Footage
            </h2>
            <p className="text-lg text-[#414042] max-w-3xl mx-auto">
              Recent launch, landing, and mission demonstrations from Resolute Eagle operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-[#d8d8d8] overflow-hidden hover:border-[#ee3124] transition-colors duration-300"
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-video bg-black object-contain"
                />
                <div className="px-4 py-3 border-t border-[#e5e5e5]">
                  <h3 className="text-base font-semibold text-[#414042] tracking-wide uppercase">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-5 bg-[#f2f2f2] sticky top-20 z-40 border-y border-[#d8d8d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#ee3124] text-white'
                    : 'bg-white text-[#414042] hover:bg-[#e5e5e5]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/3] overflow-hidden border border-[#d8d8d8] hover:border-[#ee3124] transition-colors duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-semibold text-lg mb-2 uppercase tracking-wide">{image.title}</h3>
                    <span className="inline-block px-3 py-1 bg-[#ee3124] text-white text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-14">
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-[#f2f2f2]">
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
              On Target, Always
            </h2>
            <p className="text-lg text-[#414042] mb-8">
              We build a capability that keeps the war fighter safe and provide crucial information at critical times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Resolute_Eagle_Capabilities_Sheet-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#ee3124] font-semibold text-white hover:bg-[#d12b1f] transition-colors duration-300 uppercase tracking-wider text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Capabilities Briefing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-transparent border-2 border-[#414042] font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Headquarters */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#f2f2f2] border-l-4 border-[#ee3124] p-10 max-w-2xl mx-auto">
            <div className="w-16 h-1 bg-[#ee3124] mb-6"></div>
            <h2 className="text-3xl font-light text-[#414042] mb-8 uppercase tracking-wide">
              Corporate Headquarters
            </h2>
            
            <div className="space-y-3 text-[#414042] mb-8">
              <p className="text-xl font-semibold">4100 Lambert Drive</p>
              <p className="text-xl font-semibold">Howell, MI 48855</p>
              <p className="text-2xl font-bold text-[#ee3124] mt-4">
                <a href="tel:+18558802233" className="hover:text-[#d12b1f] transition">
                  855-880-2233
                </a>
              </p>
            </div>

            <div className="my-8 py-8 border-t border-b border-gray-300">
              <h3 className="text-xl font-semibold text-[#414042] mb-4">
                Part of the Heligroup Holdings Family
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-base">
                <a 
                  href="https://helimaxaviation.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                >
                  Helimax Aviation
                </a>
                <span className="text-gray-400">•</span>
                <a 
                  href="https://skylineprecisioncorp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                >
                  Skyline Precision Corporation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
