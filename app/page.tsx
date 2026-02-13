'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioStarted, setAudioStarted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hero background images
  const heroImages = [
    '/IMG_1207 Kenneth Burger.JPG',
    '/IMG_1173 Kenneth Burger.JPG',
    '/IMG_1198 Kenneth Burger.JPG',
    '/IMG_1199 Kenneth Burger.JPG'
  ]

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current.volume = 0.15
        audioRef.current.play().catch(() => {})
        setAudioStarted(true)
      }
    }
    
    window.addEventListener('click', startAudio, { once: true })
    window.addEventListener('scroll', startAudio, { once: true })
    
    return () => {
      window.removeEventListener('click', startAudio)
      window.removeEventListener('scroll', startAudio)
    }
  }, [audioStarted])

  return (
    <div className="bg-white text-gray-900">
      <audio ref={audioRef} loop>
        <source src="/plane-engine.wav" type="audio/wav" />
      </audio>
      
      <Navigation />
      
      {/* Hero Section - Full Screen with Image Slider */}
      <section className="h-screen w-full relative overflow-hidden">
        {/* Background Images - Slider */}
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <Image
              src={image}
              alt={`Resolute ISR Drone ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </motion.div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-24">
          <div className="relative group cursor-default">
            {/* Red sweep animation covering only h1 and h2 */}
            <div className="absolute inset-0 bg-[#ee3124] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none" 
                 style={{ mixBlendMode: 'multiply' }} />
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-center mb-6 text-white drop-shadow-2xl relative z-10 px-4"
            >
              RESOLUTE EAGLE
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-10 text-white drop-shadow-2xl relative z-10 px-4"
            >
              SUPERIOR ISR CAPABILITIES
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-white tracking-widest drop-shadow-lg text-center px-4"
          >
            INTELLIGENCE. SURVEILLANCE. RECONNAISSANCE.
          </motion.p>
          
          {/* Slider indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex gap-2 mt-8"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 animate-bounce text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* === COMBINED CONTENT SECTION - 2 COLUMNS === */}
      <section className="relative py-8 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Superior Capabilities - Hidden on Mobile */}
            <div className="hidden lg:block">
              <div className="w-16 h-1 bg-[#323232] mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-light text-[#414042] mb-8">
                Known for its superior capabilities and advanced technology.
              </h2>
              
              <div className="space-y-6 text-lg text-[#414042] leading-relaxed">
                <p>
                  As the original equipment manufacturer of the Resolute Eagle, Resolute ISR delivers a runway-independent Unmanned Aircraft System engineered for expeditionary land and maritime operations. The platform provides Group 4 performance, modular mission architecture, and integrated multi-sensor and SATCOM capabilities. Purpose-built for distributed operations in infrastructure-limited environments, the Resolute Eagle delivers persistent, decision-quality intelligence at the tactical edge.
                </p>
                <p>
                  Resolute ISR delivers mission-focused Intelligence, Surveillance, and Reconnaissance capabilities engineered for operational reliability in austere and expeditionary environments. As the original manufacturer of the Resolute Eagle VTOL fixed-wing UAS, we provide battle-tested solutions optimized for land and shipboard operations where precision, endurance, and rapid deployment define mission success.
                </p>
              </div>
            </div>

            {/* Right Column - On Target + Image */}
            <div className="space-y-8 lg:col-start-2">
              {/* Image - Hidden on Mobile */}
              <div className="hidden lg:block relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/IMG_1198 Kenneth Burger.JPG"
                  alt="Resolute Eagle in operation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* On Target Section */}
              <div className="bg-[#f2f2f2] p-10 rounded-lg text-center">
                <div className="w-16 h-1 bg-[#323232] mx-auto mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-light text-[#414042] mb-6 uppercase tracking-wide">
                  On Target, Always
                </h3>
                <p className="text-lg text-[#414042] mb-8 leading-relaxed">
                  We build a capability that keeps the war fighter safe and provide crucial information at critical times.
                </p>
                <Link
                  href="/Resolute Eagle Fixed Wing Specificatons.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-[#d12b1f] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Capabilities Briefing
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === VIDEO SECTION === */}
      <section className="relative h-[60vh] min-h-[500px] bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://github.com/aMarketology/Drone-Gov/releases/download/1.00/Consolidated.video.Kenneth.Burger.mp4" type="video/mp4" />
        </video>
      </section>

      {/* === COMBINED SPECIFICATIONS & CORPORATE HEADQUARTERS SECTION === */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Specifications */}
            <div>
              <div className="w-16 h-1 bg-[#323232] mb-6"></div>
              <h2 className="text-4xl font-light text-[#414042] mb-8">
                An unmanned drone with unique features.
              </h2>
              
              <div className="space-y-3 text-[#414042] mb-8">
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Wingspan:</span>
                  <span>18.2 ft.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Aircraft Length:</span>
                  <span>9.5 ft.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Engine Power:</span>
                  <span>33 Hp.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Empty Weight:</span>
                  <span>215 lbs.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Max. Take-Off Weight (MTOW):</span>
                  <span>300 lbs.</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Max. Payload Power:</span>
                  <span>2,500 watts total power, 2,000 watts available for payloads</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Fuselage Capacity:</span>
                  <span>1,842 cubic in</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Aft of Radio Stack:</span>
                  <span>192 cubic in</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-semibold min-w-[200px]">Wing Hard Points:</span>
                  <span>Four hard points, 2 under each wing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/offerings"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap"
                >
                  Explore Offerings
                </Link>
                <a
                  href="/OV-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#ee3124] rounded-full font-semibold text-[#ee3124] hover:bg-[#ee3124] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap"
                >
                  View OV-1
                </a>
              </div>
            </div>

            {/* Right Column - Corporate Headquarters */}
            <div className="bg-[#f2f2f2] p-10 rounded-lg">
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
                    href="https://helimaxaviation.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                  >
                    Helimax Aviation
                  </a>
                  <span className="text-gray-400">•</span>
                  <a 
                    href="https://chiaviation.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                  >
                    CHI Aviation
                  </a>
                  <span className="text-gray-400">•</span>
                  <a 
                    href="https://xrdi.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ee3124] hover:text-[#d12b1f] transition font-medium"
                  >
                    XRDI
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg font-semibold text-[#414042] mb-2">
                  Serving ISR Missions Globally
                </p>
                <p className="text-base text-gray-600">
                  From our Michigan headquarters to operations worldwide
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-[#d12b1f] transition-all duration-300 uppercase tracking-wider text-sm shadow-lg hover:shadow-xl w-full"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
