import Header from '@/components/layout/TopBar'
import { Link } from 'react-router-dom'
import Benefit from './components/Benefit'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header classname="bg-light" buynow />
      <section className="container py-5 mt-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Services v.1
            </li>
          </ol>
        </nav>
        <Service />
      </section>
      <Benefit />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}

export default page
