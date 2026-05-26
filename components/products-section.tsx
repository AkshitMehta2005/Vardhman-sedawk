'use client'

import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'WPC Doors',
    desc: 'Premium quality WPC doors designed for durability, termite resistance, water resistance, and long-lasting performance.',
    image: '/images/product-wpc-door.jpg',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'WPC Cladding',
    desc: 'Stylish and weather-resistant WPC cladding solutions that enhance exterior aesthetics while ensuring long-term durability.',
    image: '/images/product-wpc-cladding.jpg',
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'WPC Flooring',
    desc: 'Elegant and durable flooring solutions designed for modern spaces with low maintenance and high resistance.',
    image: '/images/product-wpc-flooring.jpg',
    tag: 'New',
  },
  {
    id: 4,
    name: 'WPC Decking',
    desc: 'Premium outdoor decking solutions ideal for terraces, gardens, pool areas with anti-slip and weather-resistant properties.',
    image: '/images/product-wpc-decking.jpg',
    tag: 'Premium',
  },
  {
    id: 5,
    name: 'UPVC Windows',
    desc: 'Energy-efficient UPVC windows providing excellent insulation, noise reduction, and modern aesthetics.',
    image: '/images/product-upvc-window.jpg',
    tag: 'Featured',
  },
  {
    id: 6,
    name: 'Interior Flute Panels',
    desc: 'Modern decorative wall panels to enhance interior spaces with stylish textures, premium finish, and easy installation.',
    image: '/images/product-flute-panel.jpg',
    tag: 'Trending',
  },
  {
    id: 7,
    name: 'UPVC Pipes & Fittings',
    desc: 'High-quality UPVC pipes and fittings engineered for reliable water flow, durability, and corrosion resistance.',
    image: '/images/product-upvc-pipes.jpg',
    tag: 'Reliable',
  },
  {
    id: 8,
    name: 'WPC Boards',
    desc: 'High-performance WPC boards suitable for furniture, partitions, cabinets, and multiple interior applications.',
    image: '/images/product-wpc-boards.jpg',
    tag: 'Versatile',
  },
]

export default function ProductsSection() {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="products" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
              <span className="h-px w-8 bg-[#14a84b]" />
              Our Products
              <span className="h-px w-8 bg-[#14a84b]" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Engineered for Excellence
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-[#14a84b] hover:border-[#14a84b] hover:text-white transition-all text-foreground"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-[#14a84b] text-white flex items-center justify-center hover:bg-[#0f8a3c] transition-all"
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className="flex-none w-[80vw] sm:w-[48%] lg:w-[30%] xl:w-[23%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                    <button className="flex items-center gap-1.5 text-[#14a84b] text-sm font-semibold hover:gap-2.5 transition-all group/btn">
                      Learn More
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots hint */}
        <div className="flex justify-center mt-8">
          <p className="text-muted-foreground text-sm">Auto-advances every 4 seconds &middot; Swipe or use arrows to navigate</p>
        </div>
      </div>
    </section>
  )
}
