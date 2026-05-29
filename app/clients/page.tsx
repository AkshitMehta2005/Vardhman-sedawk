import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ClientsSection from '@/components/clients-section'

export const metadata: Metadata = {
  title: 'Our Clients | BVW — Vardhman Composites India',
  description:
    'Trusted by leading real estate developers, builders and government projects across India. See the clients and partners who rely on BVW.',
}

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Clients"
          title="Our Clients & Partners"
          subtitle="The developers, builders and institutions who build with BVW."
        />
        <ClientsSection />
      </main>
      <Footer />
    </>
  )
}
