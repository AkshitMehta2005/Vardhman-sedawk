'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ShieldCheck,
  Droplets,
  Sun,
  Sparkles,
  Leaf,
  Hammer,
} from 'lucide-react'

const journey = [
  { year: '2010', text: 'Founded by Navneet Jain in Karnal, Haryana, with a vision for sustainable building materials.' },
  { year: '2015', text: 'Expanded the WPC product line with advanced, in-house manufacturing capabilities.' },
  { year: '2019', text: 'Launched the UPVC pipes & fittings division under the BVW brand.' },
  { year: '2024', text: 'Grew to a pan-India presence with 800+ tonnes of monthly production capacity.' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Termite & Borer Proof', desc: 'Never attracts termites, borers or fungus — unlike natural timber.' },
  { icon: Droplets, title: '100% Waterproof', desc: 'Fully water and moisture resistant; perfect for baths, kitchens and exteriors.' },
  { icon: Sun, title: 'Weather & UV Resistant', desc: 'Withstands rain, heat and sun without warping, fading or cracking.' },
  { icon: Sparkles, title: 'Low Maintenance', desc: 'No polishing, painting or sealing — just wipe clean and it lasts for years.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Recyclable, tree-saving composites that cut waste — Save Green, Live Green.' },
  { icon: Hammer, title: 'Durable & Long-Lasting', desc: 'High-density material built for strength, stability and a long service life.' },
]

const team = [
  { name: 'Navneet Jain', role: 'Founder & COO' },
  { name: 'Nidhi Tandon', role: 'Chief Marketing Officer' },
  { name: 'Ritu Kashyap', role: 'Key Account Manager' },
  { name: 'Sumit Dayal', role: 'Accounts Manager' },
  { name: 'Radha Raman', role: 'Manager — Production' },
]

export default function AboutPageContent() {
  return (
    <>
      {/* Company story */}
      <section className="overflow-hidden bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/about-bg.jpg" alt="Vardhman Composites manufacturing" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 rounded-xl bg-[#0e1c2f]/90 px-6 py-4 backdrop-blur-sm">
                <p className="text-3xl font-bold leading-none text-white">15+</p>
                <p className="mt-1 text-xs text-white/60">Years of Excellence</p>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #14a84b33, #1a5dab33)' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
              <span className="h-px w-8 bg-current" />
              Who We Are
            </span>
            <h2 className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
              A Trusted Name in <span className="text-[#14a84b] dark:text-[#3ddc84]">WPC &amp; UPVC</span> Solutions
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Vardhman Composites India Pvt. Ltd. is a leading manufacturer of premium Wood Plastic
              Composite (WPC) profiles and UPVC pipes &amp; fittings, marketed under the trusted{' '}
              <span className="font-semibold text-foreground">BVW</span> brand. Founded in 2010 by
              Navneet Jain in Karnal, Haryana, the company was built on a simple belief — that modern
              construction deserves materials that are stronger, smarter and kinder to the environment.
            </p>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              With advanced in-house manufacturing and a capacity of over 800 tonnes per month, we serve
              architects, builders, contractors, dealers and government projects across India and
              international markets. Every product we make is engineered to deliver the warmth and beauty
              of natural wood — without the rot, termites or constant upkeep.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Guided by our promise of <span className="font-semibold text-foreground">“Save Green, Live Green”</span>,
              we combine strength, aesthetics and sustainability to build a greener tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="bg-[#f5f2ec] py-20 dark:bg-[#0a1322] md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
              <span className="h-px w-8 bg-current" />
              Our Journey
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Milestones That Define Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((m, i) => (
              <motion.div
                key={m.year}
                className="rounded-2xl border border-border bg-card p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                >
                  {m.year}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
              <span className="h-px w-8 bg-current" />
              Product Quality &amp; Benefits
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Built to Outperform</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((v, i) => (
              <motion.div
                key={v.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                >
                  <v.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our team (brief) */}
      <section id="team" className="scroll-mt-24 bg-[#f5f2ec] py-20 dark:bg-[#0a1322] md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
              <span className="h-px w-8 bg-current" />
              Our People
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">The Team Behind BVW</h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
              BVW is powered by a close-knit team of professionals led by founder Navneet Jain. From advanced
              manufacturing and quality control to marketing, key accounts and customer support, every member
              shares one commitment — delivering durable, sustainable solutions and dependable service.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="rounded-xl border border-border bg-card px-4 py-5 text-center"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <p className="text-sm font-semibold text-foreground">{m.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability commitment */}
      <section className="relative overflow-hidden bg-[#0e1c2f] py-20 md:py-24">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #14a84b, transparent)' }}
        />
        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Leaf size={40} strokeWidth={1.6} className="mx-auto mb-6 text-[#3ddc84]" />
          <h2 className="mb-5 font-serif text-3xl text-white md:text-4xl">Save Green, Live Green</h2>
          <p className="leading-relaxed text-white/70">
            Sustainability isn&apos;t a slogan for us — it&apos;s engineered into every product. By replacing
            natural timber with durable, recyclable composites, BVW helps conserve forests, reduce waste and
            lower the lifetime cost of building. Choosing BVW means choosing materials that protect both your
            project and the planet.
          </p>
        </motion.div>
      </section>
    </>
  )
}
