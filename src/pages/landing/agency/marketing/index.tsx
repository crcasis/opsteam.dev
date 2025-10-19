import Header from '@/components/layout/TopBar'
import About from './components/About'
import Benefit from './components/Benefit'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Studies from './components/Studies'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Tools from './components/Tools'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Services />
      <Tools />
      <Benefit />
      <About />
      <Testimonial />
      <Studies />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default page
