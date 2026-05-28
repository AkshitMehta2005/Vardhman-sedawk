'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react'

function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-[#14a84b] ${className}`}
    >
      {/* Render icon only after mount so server/client markup matches */}
      {mounted && (
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      )}
    </button>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Gallery', href: '/#gallery' },
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
            <a href="mailto:info@zypher-code.com" className="flex items-center gap-1.5 hover:text-[#14a84b] transition-colors">
              <Mail size={12} />
              info@zypher-code.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0a1322]/90 backdrop-blur-md shadow-md dark:shadow-black/40 dark:border-b dark:border-white/5'
            : 'bg-white/98 dark:bg-[#0a1322]/95'
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

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* CTA */}
            <a
              href="tel:9896115358"
              className="hidden lg:flex items-center gap-2 bg-[#14a84b] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0f8a3c] transition-colors"
            >
              <Phone size={14} />
              Get a Quote
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <a href="mailto:info@zypher-code.com" className="flex items-center gap-2"><Mail size={14} />info@zypher-code.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
