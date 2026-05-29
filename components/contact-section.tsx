'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f5f2ec] dark:bg-[#0a1322]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 text-[#14a84b] dark:text-[#3ddc84] text-xs tracking-[0.3em] font-semibold uppercase mb-4">
            <span className="h-px w-8 bg-[#14a84b] dark:bg-[#3ddc84]" />
            Contact Us
            <span className="h-px w-8 bg-[#14a84b] dark:bg-[#3ddc84]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance mb-4">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Reach out to our team for product enquiries, custom orders, and partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#14a84b]/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#14a84b]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Our Address</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plot no 109-110, Sector 3, HSIIDC,<br />Karnal - 132001, Haryana, India
                </p>
                <a
                  href="https://maps.app.goo.gl/Z3hXDENSDSmmtbSS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[#14a84b] dark:text-[#3ddc84] text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#14a84b]/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#14a84b]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Phone & WhatsApp</p>
                <a href="tel:9896115358" className="text-muted-foreground text-sm hover:text-[#14a84b] transition-colors block">
                  +91 98961 15358
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#14a84b]/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#14a84b]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <a href="mailto:info@zypher-code.com" className="text-muted-foreground text-sm hover:text-[#14a84b] transition-colors block">
                  info@zypher-code.com
                </a>
                <a href="mailto:sales@bvwindia.com" className="text-muted-foreground text-sm hover:text-[#14a84b] transition-colors block">
                  sales@bvwindia.com
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#14a84b]/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#14a84b]" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Working Hours</p>
                <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-semibold text-xl text-foreground mb-6">Send an Enquiry</h3>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fname" className="text-sm font-medium text-foreground">Full Name</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Your name"
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14a84b]/40 bg-[#f5f2ec] dark:bg-[#16233a] text-foreground placeholder:text-muted-foreground transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14a84b]/40 bg-[#f5f2ec] dark:bg-[#16233a] text-foreground placeholder:text-muted-foreground transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14a84b]/40 bg-[#f5f2ec] dark:bg-[#16233a] text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="product" className="text-sm font-medium text-foreground">Product of Interest</label>
                <select
                  id="product"
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14a84b]/40 bg-[#f5f2ec] dark:bg-[#16233a] text-foreground placeholder:text-muted-foreground transition-all"
                >
                  <option value="">Select a product...</option>
                  <option>WPC Doors</option>
                  <option>WPC Frames</option>
                  <option>WPC Decking</option>
                  <option>WPC Cladding</option>
                  <option>WPC Boards</option>
                  <option>WPC Jali</option>
                  <option>WPC Sun Shade Facade Louvers</option>
                  <option>WPC Profiles</option>
                  <option>WPC Mouldings</option>
                  <option>UPVC Windows</option>
                  <option>UPVC Pipes & Fittings</option>
                  <option>Custom Solution</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#14a84b]/40 bg-[#f5f2ec] dark:bg-[#16233a] text-foreground placeholder:text-muted-foreground resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#14a84b] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#0f8a3c] transition-all hover:shadow-lg hover:shadow-[#14a84b]/20"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
