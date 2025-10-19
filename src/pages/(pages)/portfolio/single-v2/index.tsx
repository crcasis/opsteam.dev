import Header from '@/components/layout/TopBar'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" showSqureBuyNow />
      <Hero />
      <About />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default page
