import Header from '@/components/layout/TopBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'
import Statistics from './components/Statistics'
import Target from './components/Target'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header theme="dark" buynow />
      <Hero />
      <Statistics />
      <Target />
      <Speakers />
      <Sponsors />
      <Schedule />
      <Pricing />
      <Testimonial />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default page
