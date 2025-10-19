import Header from '@/components/layout/TopBar'
import Detail from './components/Detail'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Header classname="bg-light" showSqureBuyNow />
      <Detail />
      <Footer />
    </>
  )
}

export default page
