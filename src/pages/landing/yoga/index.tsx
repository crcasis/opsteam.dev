import Classes from './components/Classes'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Classes />
      <Trainers />
      <Schedule />
      <CTA />
      <Pricing />
      <Instagram />
      <Footer />
    </>
  )
}

export default page
