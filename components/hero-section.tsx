'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '800T', label: 'Monthly Production' },
  { value: '500+', label: 'Projects Delivered' },
  { value: 'Pan India', label: 'Presence' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium WPC Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1c2f]/90 via-[#0e1c2f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
          >
            <span className="h-px w-12 bg-[#14a84b]" />
            <span className="text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase">
              Vardhman Composites India
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6 text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.85 }}
          >
            Building a{' '}
            <span className="italic text-[#14a84b]">Greener</span>
            <br />
            Tomorrow
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.0 }}
          >
            Premium WPC profiles and UPVC piping solutions crafted for architects,
            builders & contractors across India. Innovation meets durability.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.15 }}
          >
            <Link
              href="/products"
              className="flex items-center gap-2 bg-[#14a84b] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0f8a3c] transition-all hover:gap-3 group"
            >
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.3 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-white/50 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  )
}
