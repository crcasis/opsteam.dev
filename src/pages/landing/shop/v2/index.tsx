import Header from '@/components/layout/TopBar'
import About from './components/About'
import Award from './components/Award'
import Benefit from './components/Benefit'
import Collection from './components/Collection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Slider from './components/Slider'

const page = () => {
  return (
    <>
      <Header userSignIn showCartEmpty />
      <Hero />
      <Slider />
      <About />
      <Award />
      <CTA />
      <Benefit />
      <Collection />
      <Instagram />
      <Footer />
    </>
  )
}

export default page
