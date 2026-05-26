'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

const teamMembers = [
  {
    name: 'Navneet Jain',
    designation: 'Founder & COO',
    role: 'Strategic leadership, business development, and operational excellence. Founded Vardhman Composites in 2010 with a vision to deliver sustainable WPC & UPVC solutions.',
    phone: '7988881355',
    email: 'coo@bvwindia.com',
    image: '/images/founder.jpg',
    highlight: true,
  },
  {
    name: 'Nidhi Tandon',
    designation: 'Chief Marketing Officer',
    role: 'Brand strategy, digital marketing, and market expansion. Drives BVW\'s presence across India and international markets.',
    phone: '9319628811',
    email: 'cmo@bvwindia.com',
    image: '/images/team-cmo.jpg',
  },
  {
    name: 'Ritu Kashyap',
    designation: 'Key Account Manager',
    role: 'Managing key client relationships, project coordination, and ensuring seamless delivery and customer satisfaction across major accounts.',
    phone: '9896115358',
    email: 'contact@bvwindia.com',
    image: '/images/team-kam.jpg',
  },
  {
    name: 'Sumit Dayal',
    designation: 'Accounts Manager',
    role: 'Financial planning, accounts management, and ensuring smooth financial operations to support business growth.',
    phone: '8053456166',
    email: 'accounts@bvwindia.com',
    image: '/images/team-accounts.jpg',
  },
  {
    name: 'Radha Raman',
    designation: 'Manager — Production',
    role: 'Overseeing manufacturing operations, quality control, and ensuring 800–1000 ton monthly production capacity with highest standards.',
    phone: '8433469413',
    email: 'info@bvwindia.com',
    image: '/images/team-production.jpg',
  },
]

const values = [
  { title: 'Customer First', desc: 'Every decision is made with the customer\'s best interest in mind.' },
  { title: 'Innovation', desc: 'Continuously adopting advanced technologies for better solutions.' },
  { title: 'Integrity', desc: 'Transparent business practices and ethical operations.' },
  { title: 'Teamwork', desc: 'Collaborative culture that drives collective success.' },
]

export default function TeamPageContent() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-[#0e1c2f] py-28 md:py-36 overflow-hidden">
        {/* Abstract decoration */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #14a84b, transparent)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1a5dab, transparent)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 text-[#14a84b] text-xs tracking-[0.3em] font-semibold uppercase mb-5">
              <span className="h-px w-8 bg-[#14a84b]" />
              Our People
              <span className="h-px w-8 bg-[#14a84b]" />
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 text-balance">
              The Team Behind <span className="italic text-[#14a84b]">BVW</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              A dedicated group of professionals committed to delivering excellence, innovation,
              and sustainable solutions that build a stronger India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Meet Our Leaders</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
              Each member brings expertise, passion, and a shared commitment to building
              something extraordinary.
            </p>
          </motion.div>

          {/* Featured founder */}
          {teamMembers.filter((m) => m.highlight).map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-[#0e1c2f] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex justify-center md:justify-start">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden ring-4 ring-[#14a84b]/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-4"
                  style={{ background: 'linear-gradient(135deg, #14a84b, #1a5dab)' }}
                >
                  Founder
                </span>
                <h3 className="font-serif text-3xl text-white mb-1">{member.name}</h3>
                <p className="text-[#14a84b] font-semibold text-sm mb-4">{member.designation}</p>
                <p className="text-white/60 leading-relaxed mb-6">{member.role}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-[#14a84b] transition-colors"
                  >
                    <Phone size={14} />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-[#14a84b] transition-colors"
                  >
                    <Mail size={14} />
                    {member.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Rest of team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.filter((m) => !m.highlight).map((member, i) => (
              <motion.div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f2ec]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Hover contact links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#14a84b] text-white py-2 rounded-lg text-xs font-semibold"
                      aria-label={`Call ${member.name}`}
                    >
                      <Phone size={12} />
                      Call
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#1a5dab] text-white py-2 rounded-lg text-xs font-semibold"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={12} />
                      Email
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-base">{member.name}</h3>
                  <p className="text-[#14a84b] text-xs font-semibold mt-0.5 mb-3">{member.designation}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="py-24 bg-[#f5f2ec]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              What Unites Us
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              The shared values that define how we work, collaborate, and serve our customers every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4"
                  style={{ background: 'linear-gradient(135deg, #14a84b33, #1a5dab33)' }}
                />
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[#0e1c2f] text-center">
        <motion.div
          className="max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            We are always looking for passionate individuals who believe in building a
            greener and stronger future. If you share our values, we would love to hear from you.
          </p>
          <a
            href="mailto:admin@bvwindia.com"
            className="inline-flex items-center gap-2 bg-[#14a84b] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0f8a3c] transition-all"
          >
            <Mail size={16} />
            Send Your Resume
          </a>
        </motion.div>
      </section>
    </>
  )
}
