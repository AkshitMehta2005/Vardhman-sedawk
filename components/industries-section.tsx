'use client'

import { motion } from 'framer-motion'

const industries = [
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

// Duplicate for seamless loop
const doubled = [...industries, ...industries]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-[#f5f2ec] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
            <span className="h-px w-8 bg-[#14a84b]" />
            Industries We Serve
            <span className="h-px w-8 bg-[#14a84b]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance mb-4">
            Serving Diverse Sectors
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From residential homes to large-scale infrastructure projects, BVW products power
            construction across every major industry vertical.
          </p>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f5f2ec] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f5f2ec] to-transparent" />

        <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((ind, i) => (
            <div
              key={`${ind.name}-${i}`}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              {/* Round logo */}
              <div
                className="w-20 h-20 rounded-full flex flex-col items-center justify-center text-white font-bold text-sm shadow-lg transition-transform duration-300 group-hover:scale-110 shrink-0"
                style={{ background: `linear-gradient(135deg, ${ind.color}, #0e1c2f)` }}
              >
                <span className="text-xs tracking-wider font-bold">{ind.abbr}</span>
              </div>
              <span className="text-xs font-semibold text-foreground/70 tracking-wide whitespace-nowrap">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industry cards grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group bg-white rounded-2xl p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${ind.color}, #0e1c2f)` }}
              >
                {ind.abbr}
              </div>
              <p className="text-sm font-semibold text-foreground">{ind.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
