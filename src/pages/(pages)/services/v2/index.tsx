import Header from '@/components/layout/TopBar'
import { Link } from 'react-router-dom'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <section className="container pt-5 pb-xxl-3 mt-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Services v.2
            </li>
          </ol>
        </nav>
        <Service />
      </section>
      <Feature />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}

export default page
