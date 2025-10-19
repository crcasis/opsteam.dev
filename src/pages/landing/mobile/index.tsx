import Header from '@/components/layout/TopBar'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Logo from './components/Logo'
import ParallaxShowcase from './components/ParallaxShowcase'
import Stats from './components/Stats'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Stats />
      <Feature />
      <ParallaxShowcase />
      <Logo />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default page
