import airbnb from '@/assets/img/brands/airbnb.svg'
import alpine from '@/assets/img/brands/alpine.svg'
import auchan from '@/assets/img/brands/auchan.svg'
import careem from '@/assets/img/brands/careem.svg'
import championdark from '@/assets/img/brands/champion-dark.svg'
import championlight from '@/assets/img/brands/champion-light.svg'
import foster from '@/assets/img/brands/foster.svg'
import heineken from '@/assets/img/brands/heineken.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import philips from '@/assets/img/brands/philips.svg'
import pumadark from '@/assets/img/brands/puma-dark.svg'
import pumalight from '@/assets/img/brands/puma-light.svg'
import starcraftdark from '@/assets/img/brands/starcraft-dark.svg'
import starcraftlight from '@/assets/img/brands/starcraft-light.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import { Container, Image } from 'react-bootstrap'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Brand = {
  name: string
  light: string
  dark?: string
}

const brands: Brand[] = [
  { name: 'Starcraft', light: starcraftdark, dark: starcraftlight },
  { name: 'Auchan', light: auchan },
  { name: 'Klinos', light: klinos },
  { name: 'Suzuki', light: suzuki },
  { name: 'Airbnb', light: airbnb },
  { name: 'Philips', light: philips },
  { name: 'Careem', light: careem },
  { name: 'Puma', light: pumadark, dark: pumalight },
  { name: 'Alpine', light: alpine },
]

const brands2: Brand[] = [
  { name: 'Heineken', light: heineken },
  { name: 'Champion', light: championdark, dark: championlight },
  { name: 'Auchan', light: auchan },
  { name: 'Philips', light: philips },
  { name: 'Airbnb', light: airbnb },
  { name: 'Alpine', light: alpine },
  { name: 'Puma', light: pumadark, dark: pumalight },
  { name: 'Foster', light: foster },
  { name: 'Starcraft', light: starcraftdark, dark: starcraftlight },
]

const Clients = () => {
  return (
    <>
      <section className="pt-sm-1 pt-lg-3 pt-xl-4">
        <Container className="text-center">
          <h2 className="h1">We partner with more than 60 brands</h2>
          <p className="pb-1 pb-sm-2 pb-md-3 pb-lg-4 mb-3">Clients who have become our friends for many years</p>
        </Container>
        <Swiper
          loop={true}
          modules={[Autoplay, FreeMode]}
          grabCursor={false}
          centeredSlides={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={{ enabled: true, momentum: false }}
          speed={10000}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
            1600: { slidesPerView: 7 },
          }}
          className="pb-3 pb-sm-4 mb-xl-2"
          style={{ transitionTimingFunction: 'linear' }}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <Image className={`d-block ${brand.dark ? 'd-dark-mode-none' : ''} mx-auto`} src={brand.light} width={196} alt={brand.name} />
              {brand.dark && <Image className="d-none d-dark-mode-block mx-auto" src={brand.dark} width={196} alt={brand.name} />}
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          grabCursor={false}
          centeredSlides={true}
          modules={[Autoplay, FreeMode]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={true}
          speed={8500}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
            1600: { slidesPerView: 7 },
          }}
          dir="rtl"
          style={{ transitionTimingFunction: 'linear !important' }}
        >
          {brands2.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <Image className={`d-block ${brand.dark ? 'd-dark-mode-none' : ''} mx-auto`} src={brand.light} width={196} alt={brand.name} />
              {brand.dark && <Image className="d-none d-dark-mode-block mx-auto" src={brand.dark} width={196} alt={brand.name} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Clients
