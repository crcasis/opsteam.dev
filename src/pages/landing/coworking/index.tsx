import Header from '@/components/layout/TopBar'
import About from './components/About'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Map from './components/Map'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Video from './components/Video'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <About />
      <Gallery />
      <Feature />
      <Video />
      <Testimonial />
      <Pricing />
      <Map />
      <Footer />
    </>
  )
}

export default page
