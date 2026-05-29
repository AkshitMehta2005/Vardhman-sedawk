'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[#0e1c2f] pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Ambient brand glows */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #14a84b, transparent)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #1a5dab, transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="transition-colors hover:text-[#3ddc84]">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-white/80">{eyebrow}</span>
        </nav>

        <span className="mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#3ddc84]">
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
        <h1 className="max-w-3xl text-balance font-serif text-4xl text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl leading-relaxed text-white/65">{subtitle}</p>
        )}
      </motion.div>
    </section>
  )
}
