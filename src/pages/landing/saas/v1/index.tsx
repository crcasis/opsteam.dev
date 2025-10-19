import Header from '@/components/layout/TopBar'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import MobileApp from './components/MobileApp'
import Pricing from './components/Pricing'
import Review from './components/Review'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Hero />
      <Review />
      <Feature />
      <Team />
      <Industries />
      <Pricing />
      <Testimonial />
      <MobileApp />
      <CTA />
      <Footer />
    </>
  )
}

export default page
