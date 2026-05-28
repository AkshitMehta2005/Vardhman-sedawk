import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

const products = [
  'WPC Doors', 'WPC Door Frames', 'WPC Jali', 'WPC Boards',
  'WPC Cladding', 'WPC Flooring', 'WPC Decking', 'UPVC Windows',
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0e1c2f] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bvw%20logo%20png-1jce7kt517XIU42ieBYqpsYj9BWk56.png"
              alt="BVW Logo"
              width={140}
              height={55}
              className="object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Vardhman Composites India manufactures premium WPC profiles and UPVC pipes & fittings,
              delivering innovation and durability for modern infrastructure.
            </p>
            <p className="text-[#14a84b] text-xs font-semibold tracking-widest uppercase">
              Save Green · Live Green
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/bvwindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#14a84b] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-sm hover:text-[#14a84b] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14a84b] inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Our Products</h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a5dab] inline-block" />
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#14a84b] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Plot no 109-110, Sector 3, HSIIDC,<br />Karnal - 132001, Haryana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#14a84b] shrink-0" />
                <a href="tel:9896115358" className="text-white/70 text-sm hover:text-[#14a84b] transition-colors">
                  +91 98961 15358
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#14a84b] shrink-0" />
                <a href="mailto:info@zypher-code.com" className="text-white/70 text-sm hover:text-[#14a84b] transition-colors">
                  info@zypher-code.com
                </a>
              </li>
              <li className="text-white/60 text-sm">Mon–Sat: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Vardhman Composites India Pvt. Ltd. All rights reserved.</p>
          <p>GST: 06AARFV0977C1ZW &nbsp;|&nbsp; Designed by Webelio</p>
        </div>
      </div>
    </footer>
  )
}
