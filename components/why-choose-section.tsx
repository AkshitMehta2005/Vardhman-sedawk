'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Leaf,
  Link as LinkIcon,
  Shield,
  Wrench,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
  },
  {
    icon: LinkIcon,
    title: 'Durable & Strong',
  },
  {
    icon: Shield,
    title: 'Termite & Weather Resistant',
  },
  {
    icon: Wrench,
    title: 'Low Maintenance',
  },
  {
    icon: Zap,
    title: 'Cost Effective',
  },
]

export default function WhyChooseSection() {
  const duplicatedFeatures = [...features, ...features]

  return (
    <section className="relative overflow-hidden bg-[#f6f4ef] dark:bg-[#0a1322] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Small Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#14a84b]" />

            <span className="text-[#14a84b] uppercase tracking-[0.3em] text-xs font-semibold">
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-[#14a84b]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#233244] dark:text-white mb-5">
            Why Choose BVW?
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-[#5f6b7a] dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Discover what makes Vardhman Composites India the trusted
            choice for premium WPC and UPVC solutions — designed for
            durability, sustainability, and long-term performance.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#14532d]/20 dark:border-[#3ddc84]/30 bg-white dark:bg-white/5 shadow-sm">
            <Leaf
              size={26}
              strokeWidth={1.8}
              className="text-[#14532d] dark:text-[#3ddc84]"
            />
          </div>

          <h3 className="text-lg md:text-2xl font-medium text-[#233244] dark:text-white leading-snug">
            Crafting sustainable spaces with innovation.
          </h3>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="relative overflow-hidden rounded-[30px] border border-black/5 dark:border-white/10 bg-[#f6f4ef] dark:bg-[#0f1d31]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Divider */}
          <div className="border-t border-black/10 dark:border-white/10" />

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#f6f4ef] dark:from-[#0f1d31] to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#f6f4ef] dark:from-[#0f1d31] to-transparent pointer-events-none" />

          {/* Slider */}
          <div className="group overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {duplicatedFeatures.map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="relative flex h-[180px] w-[220px] md:w-[260px] flex-shrink-0 flex-col items-center justify-center border-r border-black/10 dark:border-white/10 px-8 text-center"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="mb-5"
                  >
                    <feature.icon
                      size={44}
                      strokeWidth={1.8}
                      className="text-[#14532d] dark:text-[#3ddc84]"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="max-w-[170px] text-[14px] md:text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1f2937] dark:text-slate-100 leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}