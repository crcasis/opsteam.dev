import Header from '@/components/layout/TopBar'
import Dscription from './components/Dscription'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import TrendingProduct from './components/TrendingProduct'

const page = () => {
  return (
    <>
      <Header classname="bg-light" searchbar userSignIn showCart />
      <Gallery />
      <Dscription />
      <hr className="d-md-none mb-5" />
      <TrendingProduct />
      <Feature />
      <Footer />
    </>
  )
}

export default page
