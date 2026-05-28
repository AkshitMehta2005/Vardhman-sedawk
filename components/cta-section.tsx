'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CtaSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Sustainable Architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0e1c2f]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-6">
            <span className="h-px w-8 bg-[#14a84b]" />
            Get In Touch
            <span className="h-px w-8 bg-[#14a84b]" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6 text-balance">
            Ready to Build Something
            <span className="italic text-[#14a84b]"> Extraordinary?</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with Vardhman Composites India for premium WPC and UPVC solutions. 
            Our team of experts is ready to customize solutions for your project requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9896115358"
              className="flex items-center gap-2 bg-[#14a84b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0f8a3c] transition-all hover:shadow-lg hover:shadow-[#14a84b]/30"
            >
              Call Us: +91 98961 15358
            </a>
            <a
              href="mailto:info@zypher-code.com"
              className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
