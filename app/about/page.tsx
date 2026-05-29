import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import AboutPageContent from '@/components/about-page-content'
import MissionVisionSection from '@/components/mission-vision-section'

export const metadata: Metadata = {
  title: 'About Us | BVW — Vardhman Composites India',
  description:
    'Learn about Vardhman Composites India (BVW) — our story, journey, values and commitment to sustainable WPC & UPVC building solutions since 2010.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Building a Greener Tomorrow, Since 2010"
          subtitle="Premium WPC profiles and UPVC solutions crafted with strength, aesthetics and sustainability at their core — trusted across India and beyond."
        />
        <AboutPageContent />
        <MissionVisionSection />
      </main>
      <Footer />
    </>
  )
}
