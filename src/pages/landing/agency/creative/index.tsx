import Header from '@/components/layout/TopBar'
import About from './components/About'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header showSqureBuyNow />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Testimonial />
      <Team />
      <Footer />
    </>
  )
}

export default page
