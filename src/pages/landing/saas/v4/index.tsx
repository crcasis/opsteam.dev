import Header from '@/components/layout/TopBar'
import About from './components/About'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Map from './components/Map'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Video from './components/Video'

const page = () => {
  return (
    <>
      <Header theme="dark" showRoundBuyNow />
      <Hero />
      <Categories />
      <About />
      <Map />
      <Video />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  )
}

export default page
