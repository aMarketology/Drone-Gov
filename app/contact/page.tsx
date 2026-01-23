'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    companyAddress: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send form data to server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ 
      inquiryType: '',
      companyName: '',
      companyAddress: '',
      name: '', 
      email: '', 
      phone: '', 
      message: '' 
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Navigation />

      {/* === HERO SECTION === */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#414042]">
        <div className="absolute inset-0">
          <Image
            src="/IMG_1207 Kenneth Burger.JPG"
            alt="Contact Resolute ISR"
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
              Contact Us
            </h1>
            <div className="w-16 h-1 bg-[#ee3124] mx-auto"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              If you have any questions or concerns, please reach out to us by filling out the form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === CONTACT FORM & INFO SECTION === */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-[#414042] mb-8">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#414042] mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-[#414042] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Company Address */}
                <div>
                  <label htmlFor="companyAddress" className="block text-sm font-semibold text-[#414042] mb-2">
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Name (Required) */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#414042] mb-2">
                    Name <span className="text-[#ee3124]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Email (Required) */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#414042] mb-2">
                    Email <span className="text-[#ee3124]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#414042] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition"
                  />
                </div>

                {/* Message (Required) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#414042] mb-2">
                    Your Message <span className="text-[#ee3124]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee3124] focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-10 py-4 bg-[#ee3124] rounded-full font-semibold text-white hover:bg-[#d12b1f] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Send Message
                  </button>
                </div>

                <p className="text-sm text-gray-500 italic">
                  * Required fields for submittal
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-[#414042] mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                {/* Corporate Headquarters */}
                <div>
                  <h3 className="text-xl font-semibold text-[#414042] mb-4 uppercase tracking-wide">
                    Corporate Headquarters
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#ee3124] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-lg text-[#414042]">4100 Lambert Drive</p>
                        <p className="text-lg text-[#414042]">Howell, MI 48855</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-[#ee3124] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:855-880-2233" className="text-lg text-[#414042] hover:text-[#ee3124] transition">
                        855-880-2233
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/IMG_1173 Kenneth Burger.JPG"
                    alt="Resolute Eagle"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-xl font-semibold text-[#414042] mb-4 uppercase tracking-wide">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link href="/services" className="block text-lg text-[#414042] hover:text-[#ee3124] transition">
                      → Offerings
                    </Link>
                    <Link href="/services" className="block text-lg text-[#414042] hover:text-[#ee3124] transition">
                      → Services
                    </Link>
                    <Link href="/gallery" className="block text-lg text-[#414042] hover:text-[#ee3124] transition">
                      → Gallery
                    </Link>
                    <Link href="/about" className="block text-lg text-[#414042] hover:text-[#ee3124] transition">
                      → About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MAP OR IMAGE SECTION === */}
      <section className="relative h-[400px]">
        <Image
          src="/IMG_1198 Kenneth Burger.JPG"
          alt="Resolute ISR Operations"
          fill
          className="object-cover"
        />
      </section>

      <Footer />
    </div>
  )
}
