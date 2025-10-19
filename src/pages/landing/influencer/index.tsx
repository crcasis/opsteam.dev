import Header from '@/components/layout/TopBar'
import About from './components/About'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Guides from './components/Guides'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Results from './components/Results'
import Subscription from './components/Subscription'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Hero />
      <About />
      <Features />
      <Guides />
      <Results />
      <Testimonial />
      <Subscription />
      <CTA />
      <Instagram />
      <Footer />
    </>
  )
}

export default page
