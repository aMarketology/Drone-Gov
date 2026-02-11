'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Safety() {
  const safetyPrograms = [
    {
      title: 'Safety Management System (SMS)',
      description: 'Comprehensive SMS platform that integrates all components of our safety program, tracking audits and incidents through our web-based system.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of operational risks through systematic analysis and continuous monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: 'Training & Compliance',
      description: 'Ongoing safety training programs ensuring all personnel maintain current certifications and adhere to regulatory requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Incident Reporting & Analysis',
      description: 'Comprehensive incident reporting system with thorough analysis to prevent recurrence and improve operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

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
              Safety
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to safety excellence through comprehensive management systems and continuous improvement
            </p>
          </motion.div>
        </div>
      </section>

      {/* SMS Platform Section */}
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
                Safety Management System
              </h2>
              <div className="space-y-4 text-lg text-[#414042] leading-relaxed">
                <p>
                  Our Safety Management System (SMS) integrates all components of the safety program, providing a comprehensive framework for identifying, assessing, and mitigating operational risks.
                </p>
                <p>
                  All audits are tracked and recorded on our web-based SMS system, ensuring transparency and accountability across all operations. Our parent company, Heligroup Holdings, utilizes a web-based platform that enables real-time monitoring and continuous improvement.
                </p>
                <p>
                  The SMS platform ensures compliance with FAA regulations, industry best practices, and our own rigorous internal standards, creating a culture of safety excellence throughout the organization.
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
                alt="Safety Management"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Programs Grid */}
      <section className="py-20 bg-[#f2f2f2]">
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
              Our Safety Programs
            </h2>
            <p className="text-lg text-[#414042] max-w-3xl mx-auto">
              Comprehensive safety initiatives designed to protect our personnel, equipment, and mission success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-[#ee3124] rounded-full flex items-center justify-center mb-6 text-white">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#414042] mb-4">
                  {program.title}
                </h3>
                <p className="text-[#414042] leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heligroup Holdings Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/IMG_1173 Kenneth Burger.JPG"
                alt="Heligroup Holdings"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-[#ee3124] mb-6"></div>
              <h2 className="text-4xl font-light text-[#414042] mb-6">
                Heligroup Holdings Safety Standards
              </h2>
              <div className="space-y-4 text-lg text-[#414042] leading-relaxed">
                <p>
                  As part of the Heligroup Holdings family, Resolute ISR benefits from decades of aviation safety expertise and integrated safety management systems across all subsidiary companies.
                </p>
                <p>
                  Our web-based SMS platform provides seamless integration with Helimax Aviation and Skyline Precision Corporation, enabling shared best practices, consolidated reporting, and unified safety protocols.
                </p>
                <p>
                  This collaborative approach ensures the highest safety standards are maintained across all operations, leveraging the collective experience of our parent organization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Culture */}
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
              Safety First Culture
            </h2>
            <p className="text-xl text-[#414042] leading-relaxed mb-8">
              At Resolute ISR, safety is not just a program—it's a fundamental value embedded in every aspect of our operations. Every team member is empowered to prioritize safety, report concerns, and contribute to continuous improvement.
            </p>
            <p className="text-lg text-[#414042] leading-relaxed">
              Our commitment extends beyond compliance to create an environment where safety excellence drives operational excellence, ensuring mission success while protecting our most valuable assets—our people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-[#414042] mb-6">
              Have Safety Questions?
            </h2>
            <p className="text-lg text-[#414042]">
              Contact our safety team for more information about our programs and procedures
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-red-700 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Safety Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
