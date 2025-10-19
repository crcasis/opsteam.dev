import ScrollToTop from '@/components/BackToTop'
import Header from '@/components/layout/TopBar'
import CTA from './components/CTA'
import Customizer from './components/Customizer'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InnerPage from './components/InnerPage'
import LandingPage from './components/LandingPage'
import ThemeMode from './components/ThemeMode'

const page = () => {
  return (
    <>
      <Header theme="dark" buynow />
      <Hero />
      <LandingPage />
      <InnerPage />
      <ThemeMode />
      <Customizer />
      <Features />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default page
