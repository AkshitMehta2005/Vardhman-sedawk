'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Sun, Moon, ChevronDown } from 'lucide-react'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Our Team', href: '/team' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'WPC Range', href: '/products#wpc' },
      { label: 'UPVC Range', href: '/products#upvc' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
]

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll while the full-screen mobile drawer is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMobile = () => {
    setMenuOpen(false)
    setExpanded(null)
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden w-full bg-[#0e1c2f] py-2 text-xs text-white/70 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <span>Plot no 109-110, Sector 3, HSIIDC, Karnal - 132001, Haryana</span>
          <div className="flex items-center gap-6">
            <a href="tel:9896115358" className="flex items-center gap-1.5 transition-colors hover:text-[#14a84b]">
              <Phone size={12} />
              9896115358
            </a>
            <a href="mailto:info@zypher-code.com" className="flex items-center gap-1.5 transition-colors hover:text-[#14a84b]">
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
            ? 'bg-white/95 shadow-md backdrop-blur-md dark:bg-[#0a1322]/90 dark:shadow-black/40 dark:border-b dark:border-white/5'
            : 'bg-white/98 dark:bg-[#0a1322]/95'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
          <Link href="/" className="flex items-center" onClick={closeMobile}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png"
              alt="BVW — Vardhman Composites India"
              width={140}
              height={55}
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-[#14a84b]"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[210px] rounded-xl border border-border bg-card p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-[#14a84b]/10 hover:text-[#14a84b]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:9896115358"
              className="hidden items-center gap-2 rounded-full bg-[#14a84b] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f8a3c] lg:flex"
            >
              <Phone size={14} />
              Get a Quote
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-foreground lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#0e1c2f] px-8 pt-24 pb-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {item.children ? (
                  <div className="border-b border-white/10">
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-4 text-xl font-medium text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${expanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expanded === item.label && (
                        <motion.div
                          className="flex flex-col overflow-hidden pb-3 pl-4"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMobile}
                              className="py-2.5 text-base text-white/70 transition-colors hover:text-[#14a84b]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="block border-b border-white/10 py-4 text-xl font-medium text-white transition-colors hover:text-[#14a84b]"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}

            <div className="mt-8 flex flex-col gap-3 text-sm text-white/60">
              <a href="tel:9896115358" className="flex items-center gap-2">
                <Phone size={14} />
                9896115358
              </a>
              <a href="mailto:info@zypher-code.com" className="flex items-center gap-2">
                <Mail size={14} />
                info@zypher-code.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
