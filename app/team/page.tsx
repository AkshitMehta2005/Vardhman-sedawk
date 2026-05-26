import Navbar from '@/components/navbar'
import TeamPageContent from '@/components/team-page-content'
import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | BVW — Vardhman Composites India',
  description: 'Meet the dedicated team behind Vardhman Composites India — the people driving innovation, quality, and customer satisfaction.',
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamPageContent />
      </main>
      <Footer />
    </>
  )
}
