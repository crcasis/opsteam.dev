import Header from '@/components/layout/TopBar'
import Blog from './components/Blog'
import Client from './components/Client'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industrie from './components/Industrie'
import Process from './components/Process'
import Service from './components/Service'
import Stat from './components/Stat'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Stat />
      <Service />
      <Industrie />
      <Client />
      <Process />
      <Testimonial />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}

export default page
