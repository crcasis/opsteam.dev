import Header from '@/components/layout/TopBar'
import Blog from './components/Blog'
import Brand from './components/Brand'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Service from './components/Service'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Hero />
      <Service />
      <Brand />
      <Feature />
      <Industries />
      <Testimonial />
      <Team />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}

export default page
