import Header from '@/components/layout/TopBar'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Hero from './components/Hero'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <section className="container py-5 mt-5 mb-2 mb-sm-3 mb-lg-4 mb-xxl-5">
        <Hero />
        <About />
        <Blog />
      </section>
      <Footer />
    </>
  )
}

export default page
