import Header from '@/components/layout/TopBar'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Tools from './components/Tools'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <Pricing />
      <Testimonial />
      <Tools />
      <FAQ />
      <Footer />
    </>
  )
}

export default page
