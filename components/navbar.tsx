'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block w-full bg-[#0e1c2f] text-white/70 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span>Plot no 109-110, Sector 3, HSIIDC, Karnal - 132001, Haryana</span>
          <div className="flex items-center gap-6">
            <a href="tel:9896115358" className="flex items-center gap-1.5 hover:text-[#14a84b] transition-colors">
              <Phone size={12} />
              9896115358
            </a>
            <a href="mailto:contact@bvwindia.com" className="flex items-center gap-1.5 hover:text-[#14a84b] transition-colors">
              <Mail size={12} />
              contact@bvwindia.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white/98'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png"
              alt="BVW — Vardhman Composites India"
              width={140}
              height={55}
              className="object-contain h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[#14a84b] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#14a84b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:9896115358"
            className="hidden lg:flex items-center gap-2 bg-[#14a84b] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0f8a3c] transition-colors"
          >
            <Phone size={14} />
            Get a Quote
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0e1c2f] flex flex-col pt-24 px-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 border-b border-white/10 text-white text-xl font-medium hover:text-[#14a84b] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex flex-col gap-3 text-white/60 text-sm">
              <a href="tel:9896115358" className="flex items-center gap-2"><Phone size={14} />9896115358</a>
              <a href="mailto:contact@bvwindia.com" className="flex items-center gap-2"><Mail size={14} />contact@bvwindia.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
