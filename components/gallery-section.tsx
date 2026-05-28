'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos: string[] = ['/videos/gallery-1.mp4', '/videos/gallery-2.mp4']

function VideoCard({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const play = () => {
    ref.current?.play()
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-black/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Brand accent edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-[#14a84b] to-[#1a5dab]" />

      <div className="relative overflow-hidden">
        <video
          ref={ref}
          // #t=0.1 nudges the browser to render a real first frame as the poster
          src={`${src}#t=0.1`}
          className="h-auto w-full bg-black"
          controls={started}
          preload="metadata"
          playsInline
          onPlay={() => setStarted(true)}
        />

        {!started && (
          <button
            onClick={play}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-colors duration-300 hover:from-black/50"
          >
            <span className="absolute h-20 w-20 rounded-full bg-[#14a84b]/40 animate-ping" />
            <span
              className="relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
            >
              <Play size={26} className="ml-1 fill-white" />
            </span>
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  return (
    <section id="gallery" className="overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#14a84b] dark:text-[#3ddc84]">
            <span className="h-px w-8 bg-current" />
            Gallery
            <span className="h-px w-8 bg-current" />
          </span>
          <h2 className="mb-4 text-balance font-serif text-4xl text-foreground md:text-5xl">
            Our Work{' '}
            <span className="bg-gradient-to-r from-[#14a84b] to-[#1a5dab] bg-clip-text text-transparent">
              in Motion
            </span>
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
            Watch our premium WPC &amp; UPVC craftsmanship come to life — from raw material
            to the finished product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {videos.map((src, i) => (
            <VideoCard key={src} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
