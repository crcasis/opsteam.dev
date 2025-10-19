import Header from '@/components/layout/TopBar'
import About from './components/About'
import Approach from './components/Approach'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Service from './components/Service'
import Steps from './components/Steps'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header theme="dark" buynow />
      <Hero />
      <About />
      <Approach />
      <Steps />
      <Team />
      <Testimonial />
      <Gallery />
      <Service />
      <Footer />
    </>
  )
}

export default page
