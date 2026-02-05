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
      
      {/* Hero Section - Full Screen */}
      <section className="h-screen w-full relative">
        <div className="absolute inset-0">
          <Image
            src="/IMG_1207 Kenneth Burger.JPG"
            alt="Resolute ISR Drone"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-center mb-6 text-gray-900"
          >
            RESOLUTE ISR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 tracking-widest"
          >
            INTELLIGENCE. SURVEILLANCE. RECONNAISSANCE.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 animate-bounce text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* === CONTENT SECTION === */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#323232] mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#414042] mb-8">
              Known for its superior capabilities and advanced technology.
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-[#414042] leading-relaxed">
            <p>
              Intelligence Surveillance and Reconnaissance is more than simply the collection of data, it is also the art of analysis, the accuracy in data management and even critical real time decision making that leads to successful operations in the field and value to the end user. Resolute ISR is known for their superior capabilities and their use and integration of mission essential technologies that greatly expand the value and accuracy of data collected. From design and development to building and manufacturing, the Resolute ISR team fosters the latest technology and skilled expertise needed to go the distance on any mission.
            </p>
            <p>
              We are the original equipment manufacturer of the Resolute Eagle, a UAS platform in many ways superior to other Unmanned Aerial Systems in its class. The Resolute Eagle offers unique features and capabilities necessary for today's missions such as Runway Independence. Both Standard fixed wing and VTOL (Vertical takeoff and Landing) platforms are fully runway independent, this feature alone along with a larger than industry average payload capability offer the end user the soaring edge needed for successful missions on Land or at Sea.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* === IMAGE SECTION === */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/IMG_1198 Kenneth Burger.JPG"
          alt="Resolute Eagle in operation"
          fill
          className="object-cover"
        />
      </section>

      {/* === ON TARGET SECTION === */}
      <section className="relative py-20 bg-[#f2f2f2] text-center">
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

      {/* === SPECIFICATIONS SECTION === */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Specifications */}
            <div>
              <div className="w-16 h-1 bg-[#323232] mb-6"></div>
              <h2 className="text-4xl font-light text-[#414042] mb-8">
                An unmanned drone with unique features.
              </h2>
              
              <div className="space-y-3 text-[#414042]">
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
                  <span>215 lbs. (Includes EO/IR/LRF/CRP)</span>
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
                  <span>One (1) set of hard points, a total of 27 lbs. per wing for payloads</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-[600px]">
              <Image
                src="/IMG_1207 Kenneth Burger.JPG"
                alt="Resolute Eagle specifications"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
