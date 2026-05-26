'use client'

import { motion } from 'framer-motion'

// Placeholder esteemed clients (replace with real logos when provided)
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

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
            <span className="h-px w-8 bg-[#14a84b]" />
            Our Esteemed Clients
            <span className="h-px w-8 bg-[#14a84b]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From leading real estate developers to government projects, BVW is the preferred
            choice for those who demand quality and reliability.
          </p>
        </motion.div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="group flex flex-col items-center justify-center gap-3 bg-[#f5f2ec] rounded-2xl py-8 px-4 border border-transparent hover:border-[#14a84b]/30 hover:bg-white hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
              >
                {client.abbr}
              </div>
              <p className="text-sm font-semibold text-foreground/70 text-center leading-tight">{client.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="bg-[#f5f2ec] rounded-2xl p-6 border border-border relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Quote mark */}
                <span
                  className="absolute top-4 right-6 font-serif text-6xl leading-none select-none"
                  style={{ color: '#14a84b22' }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                  >
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
