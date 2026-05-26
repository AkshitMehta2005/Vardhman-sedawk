'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  { year: '2010', text: 'Founded by Navneet Jain in Karnal, Haryana' },
  { year: '2015', text: 'Expanded WPC product line with advanced manufacturing' },
  { year: '2019', text: 'Launched UPVC pipes & fittings division under BVW' },
  { year: '2024', text: 'Pan India presence with 800+ ton monthly capacity' },
]

const values = [
  'Integrity & Honesty',
  'Quality Excellence',
  'Innovation',
  'Customer Commitment',
  'Sustainability',
  'Continuous Growth',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
            <span className="h-px w-8 bg-[#14a84b]" />
            About Us
            <span className="h-px w-8 bg-[#14a84b]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Where Innovation Meets Durability
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-bg.jpg"
                alt="Vardhman Composites Manufacturing Facility"
                fill
                className="object-cover"
              />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-[#0e1c2f]/90 backdrop-blur-sm rounded-xl px-6 py-4">
                <p className="text-white text-3xl font-bold leading-none">15+</p>
                <p className="text-white/60 text-xs mt-1">Years of Excellence</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ background: 'linear-gradient(135deg, #14a84b33, #1a5dab33)' }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              A Trusted Name in <span className="text-[#14a84b]">WPC & UPVC</span> Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Vardhman Composites India is a trusted manufacturer of premium WPC profiles and UPVC pipes
              & fittings under the BVW brand. Founded in 2010 by Navneet Jain, we are committed to
              delivering innovative, durable, and high-quality solutions for modern infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              With advanced in-house manufacturing, we serve architects, builders, contractors, dealers,
              and government projects across India and international markets — combining strength,
              aesthetics, and long-lasting performance.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {values.map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#14a84b] shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{v}</span>
                </div>
              ))}
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#0e1c2f] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#14a84b] transition-colors"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>

        {/* Timeline */}
        {/* <motion.div
          className="bg-[#0e1c2f] rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-serif text-2xl text-white mb-10 text-center">Our Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                >
                  {m.year}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
