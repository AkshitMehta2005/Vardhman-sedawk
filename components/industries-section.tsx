'use client'

import type { CSSProperties, MouseEvent } from 'react'
import { motion } from 'framer-motion'

type Industry = { name: string; abbr: string; color: string }

const industries: Industry[] = [
  { name: 'Residential', abbr: 'RES', color: '#14a84b' },
  { name: 'Commercial', abbr: 'COM', color: '#1a5dab' },
  { name: 'Hospitality', abbr: 'HOS', color: '#0f8a3c' },
  { name: 'Healthcare', abbr: 'HLT', color: '#1565a8' },
  { name: 'Education', abbr: 'EDU', color: '#14a84b' },
  { name: 'Government', abbr: 'GOV', color: '#1a5dab' },
  { name: 'Industrial', abbr: 'IND', color: '#0f8a3c' },
  { name: 'Real Estate', abbr: 'RE', color: '#1565a8' },
  { name: 'Retail', abbr: 'RET', color: '#14a84b' },
  { name: 'Infrastructure', abbr: 'INF', color: '#1a5dab' },
]

// Duplicate for seamless marquee loop
const doubled = [...industries, ...industries]

function iconBackground(color: string) {
  return `linear-gradient(145deg, ${color} 0%, ${color}cc 55%, ${color}80 100%)`
}

function IndustryCard({ ind, index }: { ind: Industry; index: number }) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{ '--mx': '50%', '--my': '50%' } as CSSProperties}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cursor-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at var(--mx) var(--my), ${ind.color}26, transparent 65%)`,
        }}
      />
      {/* Top inner highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Glow halo behind the icon, revealed on hover */}
      <div
        className="pointer-events-none absolute left-1/2 top-9 h-20 w-20 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: ind.color }}
      />

      <div className="relative">
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xs font-bold tracking-wider text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: iconBackground(ind.color),
            boxShadow: `0 10px 30px -8px ${ind.color}, inset 0 1px 2px rgba(255,255,255,0.35), inset 0 -6px 12px rgba(0,0,0,0.25)`,
          }}
        >
          {ind.abbr}
        </div>
        <p className="text-sm font-semibold text-slate-100">{ind.name}</p>
      </div>
    </motion.div>
  )
}

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          'linear-gradient(180deg, #0b1626 0%, #0a1322 45%, #0b1626 100%)',
      }}
    >
      {/* Top & bottom brand accent edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14a84b]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1a5dab]/60 to-transparent" />

      {/* Dotted grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 78%)',
        }}
      />

      {/* Ambient brand orbs */}
      <motion.div
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, #14a84b40, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, #1a5dab45, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-16 max-w-7xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#3ddc84]">
            <span className="h-px w-8 bg-[#3ddc84]" />
            Industries We Serve
            <span className="h-px w-8 bg-[#3ddc84]" />
          </span>
          <h2 className="mb-4 text-balance font-serif text-4xl text-white md:text-5xl">
            Serving{' '}
            <span className="bg-gradient-to-r from-[#3ddc84] via-[#4aa3e0] to-[#1a5dab] bg-clip-text text-transparent">
              Diverse Sectors
            </span>
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-slate-300/80">
            From residential homes to large-scale infrastructure projects, BVW products power
            construction across every major industry vertical.
          </p>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative z-10 w-full overflow-hidden py-4">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#0b1626] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#0b1626] to-transparent" />

        <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((ind, i) => (
            <div
              key={`${ind.name}-${i}`}
              className="group flex shrink-0 cursor-default flex-col items-center gap-3"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: ind.color }}
                />
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full text-xs font-bold tracking-wider text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: iconBackground(ind.color),
                    boxShadow: `0 12px 34px -10px ${ind.color}, inset 0 1px 2px rgba(255,255,255,0.35), inset 0 -8px 16px rgba(0,0,0,0.3)`,
                  }}
                >
                  {ind.abbr}
                </div>
              </div>
              <span className="whitespace-nowrap text-xs font-semibold tracking-wide text-slate-300 transition-colors group-hover:text-white">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Industry cards grid */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
