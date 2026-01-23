'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useEffect, useRef, useState, useCallback } from 'react'

interface Spark {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  color: string
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [sparks, setSparks] = useState<Spark[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInHero, setIsInHero] = useState(false)
  const [textGlowIntensity, setTextGlowIntensity] = useState(1)
  const sparkIdRef = useRef(0)
  const textRef = useRef<HTMLDivElement>(null)

  // Create sparks on mouse move
  const createSparks = useCallback((x: number, y: number) => {
    const newSparks: Spark[] = []
    const sparkCount = Math.floor(Math.random() * 4) + 2 // 2-5 sparks

    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 8 + 4
      const colors = ['#ee3124', '#ff6b35', '#ffa500', '#ffcc00', '#ffffff', '#ff4444']
      
      newSparks.push({
        id: sparkIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2, // slight upward bias
        life: 1,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    setSparks(prev => [...prev, ...newSparks].slice(-50)) // Keep max 50 sparks
  }, [])

  // Check if cursor is near text and intensify glow
  const checkTextProximity = useCallback((x: number, y: number) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      const maxDistance = 300
      
      if (distance < maxDistance) {
        const intensity = 1 + ((maxDistance - distance) / maxDistance) * 3
        setTextGlowIntensity(intensity)
        // Create extra sparks when near text
        if (distance < 150 && Math.random() > 0.7) {
          createSparks(x, y)
        }
      } else {
        setTextGlowIntensity(1)
      }
    }
  }, [createSparks])

  // Check if mouse is in hero section
  const checkIfInHero = useCallback((x: number, y: number) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const inHero = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      setIsInHero(inHero)
      return inHero
    }
    return false
  }, [])

  // Handle mouse movement
  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let frameCount = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })
      
      // Check if in hero section
      const inHero = checkIfInHero(clientX, clientY)
      
      if (inHero) {
        // Only create sparks every few pixels of movement
        const distance = Math.sqrt(Math.pow(clientX - lastX, 2) + Math.pow(clientY - lastY, 2))
        frameCount++
        
        if (distance > 20 && frameCount % 2 === 0) {
          createSparks(clientX, clientY)
          lastX = clientX
          lastY = clientY
        }
        
        checkTextProximity(clientX, clientY)
      } else {
        setTextGlowIntensity(1)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [createSparks, checkTextProximity])

  // Animate sparks
  useEffect(() => {
    const interval = setInterval(() => {
      setSparks(prev => 
        prev
          .map(spark => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            vy: spark.vy + 0.3, // gravity
            life: spark.life - 0.03,
            size: spark.size * 0.97
          }))
          .filter(spark => spark.life > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Play engine sound on mount
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3
        audioRef.current.play().catch(error => {
          console.log('Audio autoplay was prevented:', error)
        })
      }
    }

    // Try to play immediately
    playAudio()

    // Also play on first user interaction (click/touch) if autoplay was blocked
    const handleInteraction = () => {
      playAudio()
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('mousemove', handleInteraction)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)
    document.addEventListener('scroll', handleInteraction)
    document.addEventListener('mousemove', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('mousemove', handleInteraction)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Navigation />

      {/* Custom Spark Cursor - Only visible in hero section */}
      {isInHero && (
        <div 
          className="fixed pointer-events-none z-[100] mix-blend-screen"
          style={{ 
            left: mousePos.x - 12, 
            top: mousePos.y - 12,
          }}
        >
          {/* Main cursor glow */}
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 bg-gradient-radial from-white via-orange-400 to-transparent rounded-full animate-pulse" 
                 style={{
                   boxShadow: '0 0 20px #ee3124, 0 0 40px #ff6b35, 0 0 60px #ffa500'
                 }}
            />
            <div className="absolute inset-1 bg-white rounded-full opacity-80" />
          </div>
        </div>
      )}

      {/* Spark Particles - Only visible in hero section */}
      {isInHero && sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[99]"
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            backgroundColor: spark.color,
            borderRadius: '50%',
            opacity: spark.life,
            boxShadow: `0 0 ${spark.size * 2}px ${spark.color}, 0 0 ${spark.size * 4}px ${spark.color}`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Background Engine Sound */}
      <audio ref={audioRef} loop autoPlay playsInline>
        <source src="/plane-engine.wav" type="audio/wav" />
        <source src="/plane-engine.wav" type="audio/wave" />
      </audio>

      {/* === HERO SECTION === */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden cursor-none">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/IMG_1173 Kenneth Burger.JPG"
            alt="Resolute Eagle UAS"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Animated Drone Flying Around */}
        <motion.div
          animate={{ 
            x: ['-20vw', '120vw', '120vw', '-20vw', '-20vw'],
            y: ['-10vh', '10vh', '80vh', '70vh', '-10vh'],
            scale: [0.6, 1, 0.8, 0.7, 0.6],
            rotate: [10, -5, -15, 5, 10],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
          className="absolute top-0 left-0 pointer-events-none z-[5]"
        >
          <div className="relative w-[700px] h-[500px]">
            <Image
              src="/Resolute Eagle Kenneth Burger.png"
              alt="Flying Eagle"
              fill
              className="object-contain filter drop-shadow-2xl"
            />
          </div>
        </motion.div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Main Headline */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase relative"
                style={{
                  textShadow: `0 0 ${20 * textGlowIntensity}px rgba(238, 49, 36, ${0.5 * textGlowIntensity}), 0 0 ${40 * textGlowIntensity}px rgba(238, 49, 36, ${0.3 * textGlowIntensity}), 0 0 ${60 * textGlowIntensity}px rgba(238, 49, 36, ${0.2 * textGlowIntensity}), 0 0 ${80 * textGlowIntensity}px rgba(255, 107, 53, ${0.3 * textGlowIntensity})`
                }}
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Intelligence.
              </motion.h1>
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase relative"
                style={{
                  textShadow: `0 0 ${20 * textGlowIntensity}px rgba(238, 49, 36, ${0.5 * textGlowIntensity}), 0 0 ${40 * textGlowIntensity}px rgba(238, 49, 36, ${0.3 * textGlowIntensity}), 0 0 ${60 * textGlowIntensity}px rgba(238, 49, 36, ${0.2 * textGlowIntensity}), 0 0 ${80 * textGlowIntensity}px rgba(255, 107, 53, ${0.3 * textGlowIntensity})`
                }}
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                Surveillance.
              </motion.h2>
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase relative"
                style={{
                  textShadow: `0 0 ${20 * textGlowIntensity}px rgba(238, 49, 36, ${0.5 * textGlowIntensity}), 0 0 ${40 * textGlowIntensity}px rgba(238, 49, 36, ${0.3 * textGlowIntensity}), 0 0 ${60 * textGlowIntensity}px rgba(238, 49, 36, ${0.2 * textGlowIntensity}), 0 0 ${80 * textGlowIntensity}px rgba(255, 107, 53, ${0.3 * textGlowIntensity})`
                }}
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.6
                }}
              >
                Reconnaissance.
              </motion.h2>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-white rounded-full font-semibold text-white hover:bg-white hover:text-[#ee3124] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
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
          <source src="/Consolidated video Kenneth Burger.mp4" type="video/mp4" />
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
