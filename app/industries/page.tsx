import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import IndustriesPageContent from '@/components/industries-page-content'

export const metadata: Metadata = {
  title: 'Industries We Serve | BVW — Vardhman Composites India',
  description:
    'From residential and commercial to healthcare, hospitality, government and infrastructure — discover how BVW’s WPC & UPVC products serve every sector.',
}

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Serving Diverse Sectors"
          subtitle="BVW products power construction across every major industry vertical — engineered for the demands of each space we serve."
        />
        <IndustriesPageContent />
      </main>
      <Footer />
    </>
  )
}
