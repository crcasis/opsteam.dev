import Header from '@/components/layout/TopBar'
import CTA from './components/CTA'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Integrations from './components/Integrations'
import MobileApp from './components/MobileApp'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import ThemeMode from './components/ThemeMode'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <div className="d-flex w-100 justify-content-center overflow-hidden" style={{ color: 'var(--ar-gray-100)' }}>
        <svg className="flex-shrink-0" width={3000} height={18} xmlns="http://www.w3.org/2000/svg">
          <polygon
            fill="currentColor"
            points="3000,0 3000,12.3 2751,7.2 2460,18 2239,7.2 2017,10.7 1911.5,7.2 1368,18 831,7.2 540,18 319,7.2 97,10.7 0,7.5 0,0 "
          />
        </svg>
      </div>
      <Feature />
      <ThemeMode />
      <Testimonial />
      <MobileApp />
      <Pricing />
      <Integrations />
      <CTA />
      <div className="d-flex w-100 justify-content-center overflow-hidden text-primary">
        <svg className="flex-shrink-0" width={3000} height={18} xmlns="http://www.w3.org/2000/svg">
          <polygon
            fill="currentColor"
            points="3000,0 3000,12.3 2751,7.2 2460,18 2239,7.2 2017,10.7 1911.5,7.2 1368,18 831,7.2 540,18 319,7.2 97,10.7 0,7.5 0,0 "
          />
        </svg>
      </div>
      <Footer />
    </>
  )
}

export default page
