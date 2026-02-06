'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/20 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <div className="relative group">
              <Image
                src="/resolute-logo.png"
                alt="Resolute ISR Logo"
                width={240}
                height={80}
                className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
              {/* Red overlay sweep animation */}
              <div className="absolute inset-0 bg-resolute-primary overflow-hidden">
                <div className="absolute inset-0 bg-resolute-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" 
                     style={{ mixBlendMode: 'screen' }} />
              </div>
            </div>
          </Link>

          {/* Desktop Menu - Only visible when scrolled */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex gap-6 items-center"
              >
                {['Home', 'Services', 'Offerings', 'Gallery', 'News', 'Safety'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="font-medium transition-colors relative group text-white hover:text-resolute-primary text-sm"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-resolute-primary transition-all group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  className="font-semibold px-5 py-2 rounded-lg transition-all bg-resolute-primary text-white hover:bg-red-700 text-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg mt-4 shadow-xl max-h-[70vh] overflow-y-auto">
                {['Home', 'About', 'Services', 'Offerings', 'Gallery', 'News', 'Safety', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-resolute-primary transition font-medium rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-2">
                  <Link
                    href="/contact"
                    className="block w-full bg-resolute-primary hover:bg-red-700 text-white text-center font-semibold px-6 py-3 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
