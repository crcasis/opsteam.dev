import Header from '@/components/layout/TopBar'
import Benefit from './components/Benefit'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Services from './components/Services'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Partner />
      <Benefit />
      <Services />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

export default page
