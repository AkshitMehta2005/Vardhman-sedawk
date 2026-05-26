'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVisionSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0e1c2f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
            <span className="h-px w-8 bg-[#14a84b]" />
            What Drives Us
            <span className="h-px w-8 bg-[#14a84b]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance">
            Our Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            className="relative rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(20,168,75,0.12), rgba(14,28,47,0.8))' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #14a84b, #0f8a3c)' }}
            >
              <Target size={24} className="text-white" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-white/65 leading-relaxed">
              To deliver innovative, durable, and sustainable WPC and UPVC solutions that enhance
              modern infrastructure and living spaces. We are committed to maintaining the highest
              standards of quality, technology, and customer satisfaction while building long-term
              relationships based on trust and reliability.
            </p>
            {/* Decorative circle */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #14a84b, transparent)' }}
            />
          </motion.div>

          {/* Vision */}
          <motion.div
            className="relative rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(26,93,171,0.12), rgba(14,28,47,0.8))' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #1a5dab, #1565a8)' }}
            >
              <Eye size={24} className="text-white" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-white/65 leading-relaxed">
              To become a globally recognized leader in innovative WPC and UPVC solutions by setting
              new benchmarks in quality, sustainability, and design. We aspire to transform modern
              construction and infrastructure through advanced manufacturing, continuous innovation,
              and environmentally responsible practices.
            </p>
            {/* Decorative circle */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #1a5dab, transparent)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
