'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Home,
  Building2,
  Hotel,
  Stethoscope,
  GraduationCap,
  Landmark,
  Factory,
  Building,
  ShoppingBag,
  TrafficCone,
  ArrowRight,
} from 'lucide-react'
import AuroraField, { GLASS, GlassCard } from './aurora-field'

const industries = [
  { icon: Home, name: 'Residential', desc: 'WPC doors, flooring, wardrobes and modular interiors that withstand India’s humidity and monsoons — beautiful finishes that stay termite-free and maintenance-light for years.' },
  { icon: Building2, name: 'Commercial', desc: 'Durable cladding, partitions and flooring for offices and workspaces, combining a premium wood-look aesthetic with the resilience high-traffic environments demand.' },
  { icon: Hotel, name: 'Hospitality', desc: 'Premium wood-look cladding, decking and flute panels for hotels, resorts and restaurants — warm interiors and exteriors that shrug off weather and wear.' },
  { icon: Stethoscope, name: 'Healthcare', desc: 'Hygienic, moisture-proof and easy-to-clean WPC surfaces plus leak-proof UPVC plumbing — ideal for hospitals and clinics where durability and sanitation are critical.' },
  { icon: GraduationCap, name: 'Education', desc: 'Robust doors, boards and furniture-grade panels for schools and campuses — vandal-resistant, low-maintenance and safe for everyday institutional use.' },
  { icon: Landmark, name: 'Government', desc: 'Reliable, code-compliant WPC and UPVC solutions supplied at scale for public buildings, civic projects and government tenders across the country.' },
  { icon: Factory, name: 'Industrial', desc: 'Corrosion-free UPVC piping and tough composite profiles engineered to perform in demanding industrial settings with minimal downtime and upkeep.' },
  { icon: Building, name: 'Real Estate', desc: 'Consistent, project-grade supply of doors, frames, cladding and flooring that help developers deliver durable, attractive units on time and on budget.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'Eye-catching fluted panels, cladding and flooring that elevate showrooms, malls and stores while standing up to heavy footfall and constant use.' },
  { icon: TrafficCone, name: 'Infrastructure', desc: 'UPVC pipes and fittings for water supply, drainage and irrigation, plus WPC for public amenities — dependable materials for large-scale infrastructure.' },
]

const stats = [
  { value: '10', label: 'Sectors Served' },
  { value: '100%', label: 'Termite-Free' },
  { value: '25 yr+', label: 'Lifespan' },
  { value: 'Pan-India', label: 'Supply' },
]

function spanFor(i: number) {
  if (i === 0) return 'md:col-span-6 lg:col-span-6'
  if (i === 1 || i === 2) return 'md:col-span-3 lg:col-span-3'
  if (i === 9) return 'md:col-span-12 lg:col-span-12'
  return 'md:col-span-6 lg:col-span-4'
}

export default function IndustriesPageContent() {
  const reduced = useReducedMotion()
  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }
  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <AuroraField />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0e1c2f] to-transparent dark:from-[#0a1322]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
            <span className="h-px w-8 bg-current" />
            Industries We Serve
            <span className="h-px w-8 bg-current" />
          </span>
          <h2 className="mx-auto mb-4 max-w-2xl text-balance font-serif text-3xl text-foreground md:text-5xl">
            Built for Every{' '}
            <span className="relative inline-block">
              Sector
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
                style={{ background: 'linear-gradient(90deg,#14a84b,#1a5dab)' }}
                initial={reduced ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{' '}
            We Touch
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
            From individual homes to nationwide infrastructure, BVW&apos;s WPC and UPVC products power
            construction across every major industry vertical.
          </p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className={`${GLASS} mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-8 py-5`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl tabular-nums text-foreground md:text-3xl">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="mt-14 grid grid-cols-12 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {industries.map((ind, i) => {
            const wide = i === 0 || i === 9
            return (
              <motion.div key={ind.name} variants={item} className={`col-span-12 ${spanFor(i)}`}>
                <GlassCard className="h-full p-6 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-7">
                  <div className={wide ? 'flex items-start gap-5' : ''}>
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_8px_24px_-8px_rgba(20,168,75,0.5)] ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg,#14a84b,#1a5dab)', marginBottom: wide ? 0 : '1.25rem' }}
                    >
                      <ind.icon size={22} />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Sector {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{ind.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing CTA console */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard
            spotlight={false}
            className="mt-12 flex flex-col items-center justify-between gap-6 p-8 text-center md:flex-row md:p-10 md:text-left"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">Don&apos;t see your sector?</h3>
              <p className="mt-1 text-muted-foreground">We customize WPC &amp; UPVC solutions for every project.</p>
            </div>
            <Link
              href="/contact"
              className="group/btn relative inline-flex shrink-0 items-center overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#14a84b]/20"
              style={{ background: 'linear-gradient(135deg,#14a84b,#1a5dab)' }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Talk to Us
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
              </span>
              <span
                aria-hidden
                className="absolute inset-y-0 -left-1/3 z-0 w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 group-hover/btn:translate-x-[400%]"
              />
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
