'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Navigation />

      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase">
                Intelligence.
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase">
                Surveillance.
              </h2>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight uppercase">
                Reconnaissance.
              </h2>
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
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-3 border-white rounded-full font-semibold text-white hover:bg-white hover:text-[#ee3124] transition-all duration-300 uppercase tracking-wider text-sm"
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
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-3 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
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
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-3 border-[#414042] rounded-full font-semibold text-[#414042] hover:bg-[#414042] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
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

            
            {/* Service Card 1 - Wingspan */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-#ee3124/20 to-#d12b1f/10 border border-#ee3124/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-#ee3124" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">Wingspan</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                18.2 ft wingspan optimized for stability and endurance in various weather conditions.
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {['Aircraft Length: 9.5 ft', 'Engine Power: 33 Hp', 'Empty Weight: 215 lbs', 'MTOW: 300 lbs'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link href="/services" className="inline-flex items-center gap-2 text-#ee3124 font-medium hover:gap-3 transition-all">
                View Specifications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Service Card 2 - Payload Capacity */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-#ee3124/20 to-cyan-600/10 border border-#ee3124/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-#ee3124" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-slate-100 mb-4">Payload Capacity</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Superior payload capacity with 2,500 watts total power, 2,000 watts available for mission payloads.
              </p>

              <ul className="space-y-2 mb-6">
                {['Fuselage: 1,842 cubic in', 'Aft Radio: 192 cubic in', 'Wing Hard Points: 27 lbs', 'EO/IR/LRF/CRP Ready'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services" className="inline-flex items-center gap-2 text-#ee3124 font-medium hover:gap-3 transition-all">
                Payload Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Service Card 3 - VTOL */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-#ee3124/20 to-#ee3124/10 border border-#ee3124/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-#ee3124" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-slate-100 mb-4">Runway Independence</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Both standard fixed wing and VTOL (Vertical Takeoff and Landing) platforms are fully runway independent.
              </p>

              <ul className="space-y-2 mb-6">
                {['Land or Sea Operations', 'Fixed Wing Option', 'VTOL Capability', 'Rapid Deployment'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US SECTION === */}
      <section className="relative py-32 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Why Resolute ISR</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-slate-100">
                Original Equipment
                <br />
                <span className="bg-gradient-to-r from-#ee3124 to-#ee3124 bg-clip-text text-transparent">Manufacturer</span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                We are the original equipment manufacturer of the Resolute Eagle, a UAS platform in many ways superior to other Unmanned Aerial Systems in its class. The Resolute Eagle offers unique features and capabilities necessary for today's missions such as Runway Independence.
              </p>

              {/* Feature List with Icons */}
              <div className="space-y-4">
                {[
                  { title: 'Runway Independence', desc: 'Fixed wing and VTOL platforms' },
                  { title: 'Superior Payload', desc: 'Larger than industry average capacity' },
                  { title: 'Land or Sea', desc: 'Operational versatility for any mission' },
                  { title: 'Mission Essential Tech', desc: 'Latest technology and skilled expertise' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
                    <div className="w-10 h-10 rounded-lg bg-#ee3124/10 border border-#ee3124/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Placeholder / Stats */}
            <div className="space-y-6">
              {/* Large Feature Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-#ee3124/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-5xl font-bold text-#ee3124 mb-2">Design to</div>
                  <div className="text-4xl font-bold text-#ee3124 mb-4">Deployment</div>
                  <p className="text-slate-400">From design and development to building and manufacturing, the Resolute ISR team fosters the latest technology and skilled expertise needed to go the distance on any mission.</p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <div className="text-3xl font-bold text-#ee3124 mb-1">2,500W</div>
                  <div className="text-sm text-slate-400">Total Power</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <div className="text-3xl font-bold text-#ee3124 mb-1">27 lbs</div>
                  <div className="text-sm text-slate-400">Wing Payload</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE AREAS SECTION === */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm mb-6">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Corporate Headquarters</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-100 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-slate-400">
              4100 Lambert Drive, Howell, MI 48855
            </p>
          </div>

          {/* Cities Grid - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Intelligence', 'Surveillance', 'Reconnaissance', 'UAS Platform', 'Fixed Wing', 'VTOL Systems', 'ISR Solutions', 'Data Analysis', 'Real-Time Intel', 'Mission Tech'].map((city, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-300">{city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-32 bg-gradient-to-b from-black to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-slate-100 mb-6">
            Download Our
            <br />
            <span className="bg-gradient-to-r from-#ee3124 to-#ee3124 bg-clip-text text-transparent">Capabilities Briefing</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Learn more about the Resolute Eagle UAS platform and how our superior capabilities and advanced technology can support your mission objectives.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-#ee3124 to-cyan-600 rounded-lg font-semibold text-lg text-white hover:shadow-2xl hover:shadow-#d12b1f/40 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Capabilities Briefing
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900/50 border-2 border-slate-800 rounded-lg font-semibold text-lg text-slate-300 hover:bg-slate-800/50 hover:border-slate-700 backdrop-blur-sm transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-500 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-#ee3124" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 855-880-2233 | 4100 Lambert Drive, Howell, MI 48855
            </p>
          </div>
        </div>
      </section>

      {/* === SERVICE AREAS SECTION === */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-100 mb-4">
              Serving Tampa Bay & Surrounding Areas
            </h2>
            <p className="text-xl text-zinc-400">
              Tampa • St. Petersburg • Clearwater • Brandon • Largo & More
            </p>
          </div>

          {/* Cities Grid - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Largo', 'Palm Harbor', 'Riverview', 'Wesley Chapel', 'Plant City', 'Lutz'].map((city, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-300">{city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-32 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,140,0,0.1),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-light text-zinc-100 mb-6">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Your Garage?</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Take the first step in transforming your garage. Contact Tampa Bay Concrete Coatings today for a free consultation and quote.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(727) 743-7242"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg font-semibold text-lg text-white hover:shadow-2xl hover:shadow-orange-600/40 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (727) 743-7242
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900/50 border-2 border-zinc-800 rounded-lg font-semibold text-lg text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-700 backdrop-blur-sm transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Serving Tampa Bay & Surrounding Areas, Florida
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
