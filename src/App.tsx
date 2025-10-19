import Aos from 'aos'
import { Suspense, useEffect } from 'react'
import ScrollToTop from './components/BackToTop'
import Loader from './components/Loader'
import { CartProvider } from './context/CartContext'
import AppRouter from './routes/router'

import '@/assets/icons/around-icons.min.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'leaflet/dist/leaflet.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'swiper/swiper-bundle.css'

import '@/assets/scss/theme.scss'

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <CartProvider>
          <main className="page-wrapper">
            <AppRouter />
          </main>
          <ScrollToTop />
        </CartProvider>
      </Suspense>
    </>
  )
}

export default App
