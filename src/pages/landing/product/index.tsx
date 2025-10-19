import Header from '@/components/layout/TopBar'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import ProductDetail from './components/ProductDetail'
import ProductTabs from './components/ProductTabs'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Feature />
      <ProductTabs />
      <CTA />
      <ProductDetail />
      <Gallery />
      <Footer />
    </>
  )
}

export default page
