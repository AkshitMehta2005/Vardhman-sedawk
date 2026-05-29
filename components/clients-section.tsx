'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import AuroraField, { GLASS, GlassCard, Coin } from './aurora-field'

// Placeholder esteemed clients (replace with real logos/names when provided) — shown as original monograms.
const clients = [
  { name: 'Sobha Developers', abbr: 'SD' },
  { name: 'DLF Limited', abbr: 'DLF' },
  { name: 'Tata Housing', abbr: 'TH' },
  { name: 'Godrej Properties', abbr: 'GP' },
  { name: 'L&T Realty', abbr: 'LT' },
  { name: 'Prestige Group', abbr: 'PG' },
  { name: 'Brigade Group', abbr: 'BG' },
  { name: 'Puravankara', abbr: 'PV' },
]

const testimonials = [
  {
    text: "BVW's WPC products have significantly elevated the quality and aesthetics of our projects. Their customization options and consistent delivery make them a preferred partner.",
    author: 'Rajesh Kumar',
    role: 'Senior Architect, Metro Architects',
  },
  {
    text: 'The UPVC pipes and fittings from Vardhman Composites have proven excellent in our residential complexes. Quality is top-notch and after-sales support is exceptional.',
    author: 'Priya Sharma',
    role: 'Project Manager, Greenfield Builders',
  },
  {
    text: "We've been using BVW's WPC cladding for our commercial facades for 3 years. The durability and weather resistance has exceeded our expectations completely.",
    author: 'Amit Verma',
    role: 'Director, Verma Construction Co.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '10', label: 'Sectors' },
  { value: 'Pan-India', label: 'Presence' },
]

function ClientCoin({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className={`flex w-40 shrink-0 flex-col items-center gap-3 ${GLASS} px-5 py-5`}>
      <Coin abbr={abbr} size={56} />
      <span className="text-center text-xs font-semibold leading-tight text-foreground/80">{name}</span>
    </div>
  )
}

function initialsOf(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

function Testimonial({ t, feature }: { t: (typeof testimonials)[number]; feature?: boolean }) {
  return (
    <GlassCard className="h-full p-7 md:p-8">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #14a84b, #1a5dab, transparent)' }} />
      <span
        aria-hidden
        className="pointer-events-none absolute right-5 top-1 select-none bg-gradient-to-br from-[#14a84b] to-[#1a5dab] bg-clip-text font-serif leading-none text-transparent opacity-30"
        style={{ fontSize: feature ? 96 : 72 }}
      >
        &ldquo;
      </span>
      <div className="mb-4 flex gap-1">
        {[0, 1, 2, 3, 4].map((k) => (
          <Star key={k} size={14} className="fill-[#c8a84b] text-[#c8a84b]" />
        ))}
      </div>
      <p className={`relative italic leading-relaxed text-foreground/80 ${feature ? 'text-xl font-light md:text-2xl' : 'text-sm'}`}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Coin abbr={initialsOf(t.author)} size={40} />
        <div>
          <p className="text-sm font-semibold text-foreground">{t.author}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </GlassCard>
  )
}

export default function ClientsSection() {
  const reduced = useReducedMotion()
  const marqueeItems = [...clients, ...clients]

  return (
    <section id="clients" className="relative overflow-hidden bg-background py-24 md:py-32">
      <AuroraField />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0e1c2f] to-transparent dark:from-[#0a1322]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
            <span className="h-px w-8 bg-current" />
            Our Esteemed Clients
            <span className="h-px w-8 bg-current" />
          </span>
          <h2 className="mb-4 text-balance font-serif text-4xl text-foreground md:text-5xl">
            Trusted by Industry{' '}
            <span className="relative inline-block">
              Leaders
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
                style={{ background: 'linear-gradient(90deg,#14a84b,#1a5dab)' }}
                initial={reduced ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
            From leading real estate developers to government projects, BVW is the preferred choice for
            those who demand quality and reliability.
          </p>
        </motion.div>

        {/* Monogram wall */}
        {reduced ? (
          <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clients.map((c) => (
              <ClientCoin key={c.name} name={c.name} abbr={c.abbr} />
            ))}
          </div>
        ) : (
          <div
            className="relative mb-20 w-full overflow-hidden py-2"
            style={{
              maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
            }}
          >
            <div className="flex w-max gap-5 animate-marquee">
              {marqueeItems.map((c, i) => (
                <ClientCoin key={`${c.name}-${i}`} name={c.name} abbr={c.abbr} />
              ))}
            </div>
          </div>
        )}

        {/* Divider + subhead */}
        <div className="mx-auto mb-10 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <h3 className="whitespace-nowrap font-serif text-2xl text-foreground md:text-3xl">What Clients Say</h3>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Testimonials bento */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-7">
            <Testimonial t={testimonials[0]} feature />
          </div>
          <div className="flex flex-col gap-6 md:col-span-5">
            <Testimonial t={testimonials[1]} />
            <Testimonial t={testimonials[2]} />
          </div>
        </motion.div>

        {/* Closing stat strip */}
        <motion.div
          className={`${GLASS} mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-8 py-5`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl tabular-nums text-foreground md:text-3xl">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
