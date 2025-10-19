import Header from '@/components/layout/TopBar'
import Contact from './components/Contact'
import Detail from './components/Detail'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Header classname="bg-light" showRoundBuyNow />
      <Detail />
      <Contact />
      <Footer />
    </>
  )
}

export default page
