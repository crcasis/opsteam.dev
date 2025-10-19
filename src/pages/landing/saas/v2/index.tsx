import Header from '@/components/layout/TopBar'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Resources from './components/Resources'
import Testimonial from './components/Testimonial'
import Tools from './components/Tools'
import Works from './components/Works'

const page = () => {
  return (
    <>
      <Header theme="dark" buynow />
      <Hero />
      <Feature />
      <Works />
      <Testimonial />
      <Benefits />
      <Tools />
      <Resources />
      <CTA />
      <Footer />
    </>
  )
}

export default page
