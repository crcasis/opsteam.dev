import Header from '@/components/layout/TopBar'
import Award from './components/Award'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Service from './components/Service'
import Skill from './components/Skill'

const page = () => {
  return (
    <>
      <Header classname="bg-light" showRoundBuyNow />
      <br />
      <Hero />
      <Award />
      <Service />
      <Faq />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default page
