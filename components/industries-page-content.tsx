'use client'

import { motion } from 'framer-motion'
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

const industries = [
  {
    icon: Home,
    name: 'Residential',
    desc: 'WPC doors, flooring, wardrobes and modular interiors that withstand India’s humidity and monsoons — beautiful finishes that stay termite-free and maintenance-light for years.',
  },
  {
    icon: Building2,
    name: 'Commercial',
    desc: 'Durable cladding, partitions and flooring for offices and workspaces, combining a premium wood-look aesthetic with the resilience high-traffic environments demand.',
  },
  {
    icon: Hotel,
    name: 'Hospitality',
    desc: 'Premium wood-look cladding, decking and flute panels for hotels, resorts and restaurants — warm, inviting interiors and exteriors that shrug off weather and wear.',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    desc: 'Hygienic, moisture-proof and easy-to-clean WPC surfaces plus leak-proof UPVC plumbing — ideal for hospitals and clinics where durability and sanitation are critical.',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    desc: 'Robust doors, boards and furniture-grade panels built for schools, colleges and campuses — vandal-resistant, low-maintenance and safe for everyday institutional use.',
  },
  {
    icon: Landmark,
    name: 'Government',
    desc: 'Reliable, code-compliant WPC and UPVC solutions supplied at scale for public buildings, civic projects and government tenders across the country.',
  },
  {
    icon: Factory,
    name: 'Industrial',
    desc: 'Corrosion-free UPVC piping and tough composite profiles engineered to perform in demanding industrial settings with minimal downtime and upkeep.',
  },
  {
    icon: Building,
    name: 'Real Estate',
    desc: 'Consistent, project-grade supply of doors, frames, cladding and flooring that help developers deliver durable, attractive units on time and on budget.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    desc: 'Eye-catching fluted panels, cladding and flooring that elevate showrooms, malls and stores while standing up to heavy footfall and constant use.',
  },
  {
    icon: TrafficCone,
    name: 'Infrastructure',
    desc: 'UPVC pipes and fittings for water supply, drainage and irrigation, plus WPC for public amenities — dependable materials for large-scale infrastructure.',
  },
]

export default function IndustriesPageContent() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
            <span className="h-px w-8 bg-current" />
            Industries We Serve
            <span className="h-px w-8 bg-current" />
          </span>
          <h2 className="mx-auto mb-4 max-w-2xl text-balance font-serif text-3xl text-foreground md:text-4xl">
            Built for Every Sector We Touch
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
            From individual homes to nationwide infrastructure, BVW&apos;s WPC and UPVC products power
            construction across every major industry vertical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
              >
                <ind.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 text-center md:flex-row md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-serif text-2xl text-foreground">Don&apos;t see your sector?</h3>
            <p className="mt-1 text-muted-foreground">We customize WPC &amp; UPVC solutions for every project.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#14a84b] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#0f8a3c]"
          >
            Talk to Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
