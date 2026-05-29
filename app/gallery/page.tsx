import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import GallerySection from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'Gallery | BVW — Vardhman Composites India',
  description:
    'Watch BVW’s premium WPC & UPVC craftsmanship in motion — from raw material to the finished product.',
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="See BVW in Action"
          subtitle="A closer look at our products and craftsmanship."
        />
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}
