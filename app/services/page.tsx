'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Services() {
  const services = [
    {
      icon: '📦',
      title: 'Full Truckload (FTL)',
      description: 'Dedicated truck capacity for your shipment with direct routing from origin to destination. Perfect for large shipments that fill an entire trailer.',
      features: [
        'Direct point-to-point delivery with no stops',
        'Reduced risk of damage from less handling',
        'Cost-effective for large shipments (10,000+ lbs)',
        'Flexible scheduling to meet your timeline',
        'Priority handling and faster transit times',
        'Ideal for time-sensitive freight'
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: '📊',
      title: 'Less Than Truckload (LTL)',
      description: 'Cost-effective solution for smaller shipments that don\'t require a full trailer. Share trailer space and pay only for what you use.',
      features: [
        'Pay only for the space your freight occupies',
        'Ideal for shipments from 150 to 15,000 pounds',
        'Environmentally friendly shared transportation',
        'Access to nationwide LTL carrier network',
        'Consolidated shipping for efficiency',
        'Reliable delivery standards maintained'
      ],
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: '⚡',
      title: 'Expedited Shipping',
      description: 'Time-critical delivery solutions with 24/7 operations. When every minute counts, our expedited service ensures your freight arrives on time.',
      features: [
        'Guaranteed delivery windows',
        'Direct routes with priority handling',
        '24/7 dispatch and customer support',
        'Real-time GPS tracking and updates',
        'Team drivers for faster cross-country runs',
        'Emergency and rush order capabilities'
      ],
      color: 'from-red-700 to-red-800'
    },
    {
      icon: '❄️',
      title: 'Temperature Controlled',
      description: 'Refrigerated and climate-controlled transportation for sensitive cargo. Maintain product integrity from pickup to delivery.',
      features: [
        'Reefer trailers with precise temperature control',
        'Frozen, chilled, and ambient options',
        'Continuous temperature monitoring',
        'Food-grade and pharmaceutical certified',
        'Compliance with FDA regulations',
        'Backup systems for reliability'
      ],
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: '⚠️',
      title: 'Hazmat Transport',
      description: 'Certified hazardous materials transportation with fully trained drivers and compliant equipment. Safety is our top priority.',
      features: [
        'DOT and HAZMAT certified carriers',
        'Specialized equipment and containers',
        'Trained and licensed drivers',
        'Complete documentation and permits',
        'Insurance coverage for hazmat loads',
        'Emergency response protocols'
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: '🏗️',
      title: 'Heavy Haul & Oversized',
      description: 'Specialized equipment and expertise for oversized loads, heavy machinery, and equipment transport. We handle what others can\'t.',
      features: [
        'Flatbed, step deck, and RGN trailers',
        'Over-dimensional load permits',
        'Route surveys and pilot cars',
        'Heavy equipment and machinery transport',
        'Construction and industrial freight',
        'Expert project management'
      ],
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: '🎯',
      title: 'White Glove Service',
      description: 'Premium handling for high-value and delicate items. Inside delivery, assembly, and installation services available.',
      features: [
        'Inside delivery and room placement',
        'Furniture assembly and installation',
        'Debris removal and packaging disposal',
        'Special handling for fragile items',
        'Appointment scheduling coordination',
        'Premium insurance coverage'
      ],
      color: 'from-red-700 to-red-800'
    },
    {
      icon: '🚢',
      title: 'Intermodal Services',
      description: 'Seamless multi-modal transportation combining truck, rail, and ocean freight for cost-effective long-distance shipping.',
      features: [
        'Rail and ocean freight integration',
        'Cost savings on long-haul routes',
        'Reduced carbon footprint',
        'Container tracking and management',
        'Drayage and terminal services',
        'Import/export coordination'
      ],
      color: 'from-gray-700 to-gray-800'
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              OUR <span className="text-red-600">SERVICES</span>
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your unique transportation needs across all 48 continental states.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}></div>
                <div className="relative p-8 text-white">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-300 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              NEED A <span className="text-red-600">CUSTOM SOLUTION</span>?
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Every business has unique logistics needs. Our team will work with you to create<br />
              a customized transportation solution that fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 text-lg tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                GET A QUOTE
                <span className="ml-2">→</span>
              </Link>
              <a 
                href="tel:1-800-555-0123"
                className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 text-gray-900 dark:text-gray-100 hover:text-red-600 font-bold py-4 px-10 text-lg tracking-wide transition-all duration-300 rounded-lg hover:shadow-lg"
              >
                📞 CALL US
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
