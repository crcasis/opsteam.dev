import Header from '@/components/layout/TopBar'
import About from './components/About'
import Blog from './components/Blog'
import Categories from './components/Categories'
import Collections from './components/Collections'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import TrendingProduct from './components/TrendingProduct'

const page = () => {
  return (
    <>
      <Header classname="bg-light" searchbar userSignIn showCart />
      <Hero />
      <About />
      <Categories />
      <TrendingProduct />
      <Collections />
      <Feature />
      <Gallery />
      <CTA />
      <Blog />
      <Instagram />
      <Footer />
    </>
  )
}

export default page
