import Header from '@/components/layout/TopBar'
import Benefits from './components/Benefits'
import Client from './components/Client'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Step from './components/Step'
import Tool from './components/Tool'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Hero />
      <Client />
      <Step />
      <Feature />
      <Benefits />
      <Tool />
      <CTA />
      <Footer />
    </>
  )
}

export default page
