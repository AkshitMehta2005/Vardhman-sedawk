import BookAnimation from '@/components/book-animation'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import WhyChooseSection from '@/components/why-choose-section'
import ProductsSection from '@/components/products-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <BookAnimation />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ProductsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
