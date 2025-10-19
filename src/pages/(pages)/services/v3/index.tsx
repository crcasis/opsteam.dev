import Header from '@/components/layout/TopBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Service from './components/Service'
import Skill from './components/Skill'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Hero />
      <Service />
      <Partner />
      <Skill />
      <Footer />
    </>
  )
}

export default page
