'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin, ArrowRight } from 'lucide-react'

type Product = {
  name: string
  desc: string
  image: string
  features: string[]
  applications: string
}

const wpcProducts: Product[] = [
  {
    name: 'WPC Doors',
    desc: 'Engineered Wood Plastic Composite doors that deliver the warmth of natural timber without any of its drawbacks. Built to stay perfectly intact in damp, humid and high-traffic environments where conventional wooden doors fail.',
    image: '/images/product-wpc-door.jpg',
    features: [
      '100% termite-proof and borer-proof',
      'Fully waterproof — ideal for bathrooms and wet areas',
      'Natural wood-like grain finish, ready for paint or laminate',
      'Fire-retardant grades available on request',
      'Lightweight yet dimensionally stable, easy to install',
    ],
    applications: 'Residential interiors, bathrooms, kitchens, hospitals, hotels, schools and commercial spaces.',
  },
  {
    name: 'WPC Frames',
    desc: 'A precision-extruded replacement for traditional wooden chowkhats, our WPC frames pair perfectly with WPC doors for a complete, rot-free assembly. They will not warp, crack or absorb moisture over years of service.',
    image: '/images/product-wpc-door.jpg',
    features: [
      'Immune to termites, fungus and moisture swelling',
      'No seasoning, splitting or warping over time',
      'Holds screws and hinges firmly like seasoned hardwood',
      'Consistent dimensions for a flush, gap-free fit',
      'Recyclable and eco-friendly — saves natural timber',
    ],
    applications: 'Door and window framing for homes, apartments, washrooms and institutional buildings.',
  },
  {
    name: 'WPC Decking',
    desc: 'Premium outdoor decking built to thrive in the harshest open-air conditions. Delivers the timeless appeal of timber decking with none of the splintering, cracking or annual upkeep.',
    image: '/images/product-wpc-decking.jpg',
    features: [
      'Weatherproof and UV resistant for outdoor use',
      'Anti-slip, splinter-free surface — barefoot friendly',
      '100% waterproof and termite-proof',
      'Stays cooler and retains colour over years',
      'Eco-friendly, recyclable and low maintenance',
    ],
    applications: 'Terraces, balconies, poolside areas, gardens, rooftops and landscaped decks.',
  },
  {
    name: 'WPC Cladding',
    desc: 'Weather-resistant exterior and interior cladding that transforms facades with the look of real wood. Engineered to endure rain, sun and temperature swings while keeping its colour and form year after year.',
    image: '/images/product-wpc-cladding.jpg',
    features: [
      'Excellent weather and UV resistance — fade resistant',
      '100% waterproof, will not rot or attract termites',
      'Authentic wood-grain texture in multiple shades',
      'Low maintenance — no painting or sealing required',
      'Quick concealed-fix installation system',
    ],
    applications: 'Building facades, feature walls, porticos, elevations and accent interior walls.',
  },
  {
    name: 'WPC Boards',
    desc: 'High-density multi-purpose WPC boards that serve as a durable, waterproof substitute for plywood and MDF. A versatile panel that machines, cuts and finishes like wood while resisting water and pests entirely.',
    image: '/images/product-wpc-boards.jpg',
    features: [
      'Waterproof and moisture resistant — no swelling',
      'Termite-proof and rot-proof for long service life',
      'Accepts laminate, veneer, paint and CNC routing',
      'Stable, uniform density with smooth surface finish',
      'Low maintenance and fully recyclable',
    ],
    applications: 'Modular kitchens, wardrobes, cabinets, partitions, furniture and wall paneling.',
  },
  {
    name: 'WPC Jali',
    desc: 'Decorative WPC jali (lattice) screens that add privacy, ventilation and architectural character to any space. A maintenance-free alternative to carved wooden screens that withstands sun and rain effortlessly.',
    image: '/images/product-flute-panel.jpg',
    features: [
      'Intricate patterns without the upkeep of carved wood',
      'Weather, UV and water resistant for outdoor use',
      'Termite-proof and rot-proof for lasting beauty',
      'Lightweight and simple to mount or partition',
      'Recyclable and environmentally responsible',
    ],
    applications: 'Privacy screens, partitions, balcony railings, facades, ceilings and garden dividers.',
  },
  {
    name: 'WPC Sun Shade Facade Louvers',
    desc: 'Architectural WPC louvers that shade facades, balconies and windows — cutting heat and glare while adding bold, linear character to elevations. Built to perform outdoors for years with zero upkeep.',
    image: '/images/product-wpc-cladding.jpg',
    features: [
      'Reduces solar heat gain, glare and energy costs',
      'Weatherproof, UV-stable and fade resistant',
      'Termite-proof and 100% waterproof',
      'Clean wood-look finish in multiple profiles',
      'Engineered for secure, concealed facade fixing',
    ],
    applications: 'Building facades, balconies, pergolas, sunscreens, ventilated elevations and entrances.',
  },
  {
    name: 'WPC Profiles',
    desc: 'Versatile WPC profiles and sections engineered as a durable, waterproof alternative to timber battens, rafters and framing — for both interiors and exteriors. Stable, strong and effortless to work with.',
    image: '/images/product-wpc-flooring.jpg',
    features: [
      'Waterproof, termite-proof and rot-proof',
      'Dimensionally stable — no warping or cracking',
      'Available in multiple sizes and sections',
      'Easy to cut, drill and fix just like wood',
      'Recyclable, eco-friendly and low maintenance',
    ],
    applications: 'Battens, rafters, framing, ceiling sections, pergolas and structural detailing.',
  },
  {
    name: 'WPC Mouldings',
    desc: 'Decorative WPC mouldings, beadings and trims that deliver the finish of carved wood without warping, cracking or termite damage — the perfect finishing touch for premium interiors.',
    image: '/images/product-flute-panel.jpg',
    features: [
      'Crisp, detailed profiles that hold their shape',
      'Moisture-proof and termite-proof for a lasting finish',
      'Paint- and laminate-ready surface',
      'Lightweight with quick, clean installation',
      'Durable, low-maintenance and recyclable',
    ],
    applications: 'Skirting, cornices, panel trims, door and window casings and decorative detailing.',
  },
]

const upvcProducts: Product[] = [
  {
    name: 'UPVC Windows',
    desc: 'Energy-efficient UPVC windows that combine sleek modern aesthetics with superior performance. Their multi-chambered profiles keep interiors comfortable and quiet while standing up to weather without corroding or fading.',
    image: '/images/product-upvc-window.jpg',
    features: [
      'Excellent thermal insulation for energy savings',
      'Significant noise reduction for peaceful interiors',
      'Corrosion-free, rust-free and weatherproof',
      'Leak-proof, dust-proof multi-point sealing',
      'Low maintenance with a long service life',
    ],
    applications: 'Residential homes, apartments, villas, offices, hotels and commercial buildings.',
  },
  {
    name: 'UPVC Pipes & Fittings',
    desc: 'High-quality UPVC pipes and fittings engineered for reliable, leak-free fluid handling. A smooth interior bore keeps flow efficient while the corrosion-free material guarantees decades of dependable service.',
    image: '/images/product-upvc-pipes.jpg',
    features: [
      'Corrosion-free and chemical resistant',
      'Leak-proof, precision-engineered joints',
      'Smooth interior bore for unrestricted flow',
      'Lightweight and quick to install',
      'Long service life with minimal maintenance',
    ],
    applications: 'Plumbing, water supply, drainage, irrigation and industrial fluid systems.',
  },
]

function ProductCard({ product, i }: { product: Product; i: number }) {
  return (
    <motion.div
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.desc}</p>

        <ul className="space-y-2 mb-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check size={16} className="text-[#14a84b] dark:text-[#3ddc84] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-start gap-2">
            <MapPin size={15} className="text-[#1a5dab] shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground/70">Applications: </span>
              {product.applications}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsPageContent() {
  return (
    <>
      {/* Page intro */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[#14a84b] dark:text-[#3ddc84] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
              <span className="h-px w-8 bg-current" />
              Our Product Range
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-5">
              Sustainable WPC &amp; UPVC Building Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BVW manufactures a complete range of Wood Plastic Composite and UPVC products engineered
              to outperform conventional wood and metal. Every product is termite-proof, waterproof and
              built for a lifetime of low-maintenance performance — beautiful, durable and kind to the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WPC Range */}
      <section id="wpc" className="scroll-mt-24 py-16 md:py-20 bg-[#f5f2ec] dark:bg-[#0a1322]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[#14a84b] dark:text-[#3ddc84] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
              <span className="h-px w-8 bg-current" />
              Wood Plastic Composite
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-4">
              WPC Range
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              WPC blends reclaimed wood fibre with polymers to create products that look like timber but
              never rot, warp or invite termites. Recyclable and tree-saving, our WPC range is the smart,
              sustainable choice for interiors and exteriors alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wpcProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* UPVC Range */}
      <section id="upvc" className="scroll-mt-24 py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[#14a84b] dark:text-[#3ddc84] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
              <span className="h-px w-8 bg-current" />
              Unplasticised PVC
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance mb-4">
              UPVC Range
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Our UPVC windows are corrosion-free, energy-efficient and engineered to last — insulating
              profiles that cut energy bills and noise while delivering reliable, maintenance-light
              performance for modern buildings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upvcProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="py-20 bg-[#0e1c2f] text-center">
        <motion.div
          className="max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Need a custom solution?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            From bespoke sizes and finishes to bulk project supply, our team will help you choose the
            right WPC or UPVC products for your requirements. Let&apos;s build something that lasts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#14a84b] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0f8a3c] transition-all"
          >
            Contact Our Team
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
