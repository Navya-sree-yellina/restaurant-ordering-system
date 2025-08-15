import Hero from '@/components/home/Hero'
import FeaturedDishes from '@/components/home/FeaturedDishes'
import AboutSection from '@/components/home/AboutSection'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}