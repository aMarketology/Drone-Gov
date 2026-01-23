'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioStarted, setAudioStarted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1])
  
  const section2Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.35, 0.4], [0, 1, 1, 0])
  const section2Y = useTransform(scrollYProgress, [0.1, 0.2], [100, 0])
  
  const section3Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.65], [0, 1, 1, 0])
  const section3Y = useTransform(scrollYProgress, [0.35, 0.45], [100, 0])
  
  const section4Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.9], [0, 1, 1, 0])
  const section4Y = useTransform(scrollYProgress, [0.6, 0.7], [100, 0])
  
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1])

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
    <div ref={containerRef} className="bg-white text-gray-900">
      <audio ref={audioRef} loop>
        <source src="/plane-engine.wav" type="audio/wav" />
      </audio>
      
      <Navigation />
      
      {/* Hero Section - Full Screen */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen w-full fixed top-0 left-0 z-0"
      >
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
      </motion.section>

      {/* Spacer for fixed hero */}
      <div className="h-screen" />

      {/* Section 2 - Landing Video */}
      <motion.section 
        style={{ opacity: section2Opacity, y: section2Y }}
        className="min-h-screen flex items-center justify-center relative z-10 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              PRECISION<br />
              <span className="text-resolute-primary">LANDING</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our advanced autonomous landing systems ensure safe, accurate touchdowns in any conditions. 
              The Resolute Eagle features state-of-the-art navigation and stabilization technology, 
              enabling pinpoint precision even in challenging environments.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-resolute-primary rounded-full mt-2" />
                <div>
                  <div className="font-bold text-gray-900">Autonomous Landing</div>
                  <div className="text-sm text-gray-600">GPS-guided precision approach and landing</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-resolute-primary rounded-full mt-2" />
                <div>
                  <div className="font-bold text-gray-900">All-Weather Capability</div>
                  <div className="text-sm text-gray-600">Operates in adverse conditions with stability</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-resolute-primary rounded-full mt-2" />
                <div>
                  <div className="font-bold text-gray-900">Fail-Safe Systems</div>
                  <div className="text-sm text-gray-600">Multiple redundancies ensure mission success</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Consolidated video Kenneth Burger.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.section>

      {/* Section 3 - Specifications */}
      <motion.section 
        style={{ opacity: section3Opacity, y: section3Y }}
        className="min-h-screen flex items-center justify-center relative z-10 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
            RESOLUTE <span className="text-resolute-primary">EAGLE</span>
          </h2>
          
          <div className="relative h-[400px] mb-16">
            <Image
              src="/Resolute Eagle Kenneth Burger.png"
              alt="Resolute Eagle"
              fill
              className="object-contain"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border border-gray-200 bg-white p-8 text-center shadow-sm rounded-lg">
              <div className="text-sm text-gray-500 mb-2">WINGSPAN</div>
              <div className="text-3xl font-bold text-gray-900">4.5m</div>
            </div>
            <div className="border border-gray-200 bg-white p-8 text-center shadow-sm rounded-lg">
              <div className="text-sm text-gray-500 mb-2">MAX ALTITUDE</div>
              <div className="text-3xl font-bold text-gray-900">15,000ft</div>
            </div>
            <div className="border border-gray-200 bg-white p-8 text-center shadow-sm rounded-lg">
              <div className="text-sm text-gray-500 mb-2">ENDURANCE</div>
              <div className="text-3xl font-bold text-gray-900">12+ hrs</div>
            </div>
            <div className="border border-gray-200 bg-white p-8 text-center shadow-sm rounded-lg">
              <div className="text-sm text-gray-500 mb-2">PAYLOAD</div>
              <div className="text-3xl font-bold text-gray-900">25kg</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 - Services */}
      <motion.section 
        style={{ opacity: section4Opacity, y: section4Y }}
        className="min-h-screen flex items-center justify-center relative z-10 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
            OUR <span className="text-resolute-primary">SERVICES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/IMG_1173 Kenneth Burger.JPG"
                alt="Military Operations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">MILITARY</h3>
                <ul className="text-gray-200 space-y-2">
                  <li>• Ground-Based ISR</li>
                  <li>• Force Protection</li>
                  <li>• Border Security</li>
                  <li>• Anti-Piracy Operations</li>
                </ul>
              </div>
            </div>
            
            <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/IMG_1177 Kenneth Burger.JPG"
                alt="Humanitarian Operations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">HUMANITARIAN</h3>
                <ul className="text-gray-200 space-y-2">
                  <li>• Search and Rescue</li>
                  <li>• Firefighting Support</li>
                  <li>• Disaster Response</li>
                  <li>• Environmental Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        style={{ opacity: ctaOpacity }}
        className="min-h-screen flex items-center justify-center relative z-10 bg-gray-50"
      >
        <div className="text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            READY TO <span className="text-resolute-primary">DEPLOY</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Contact our team to discuss how Resolute ISR can support your mission requirements.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-resolute-primary hover:bg-red-700 text-white font-bold py-4 px-12 text-lg tracking-wider transition-colors rounded-lg shadow-lg"
          >
            CONTACT US
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
