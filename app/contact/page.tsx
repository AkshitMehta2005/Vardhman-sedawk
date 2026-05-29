import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us | BVW — Vardhman Composites India',
  description:
    'Get in touch with BVW for product enquiries, custom orders, bulk supply and partnership opportunities. Call, email or send us a message.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="We’d love to hear about your project. Reach us by phone, email or the form below."
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
