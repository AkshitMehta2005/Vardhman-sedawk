import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ProductsPageContent from '@/components/products-page-content'

export const metadata: Metadata = {
  title: 'Products | BVW — WPC & UPVC Building Solutions',
  description:
    'Explore BVW’s complete range of WPC doors, frames, decking, cladding, boards, jali, sun-shade facade louvers, profiles, mouldings and energy-efficient UPVC windows.',
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Products"
          title="Engineered for Excellence"
          subtitle="A complete range of WPC and UPVC products — termite-proof, waterproof and built for a lifetime of low-maintenance performance."
        />
        <ProductsPageContent />
      </main>
      <Footer />
    </>
  )
}
