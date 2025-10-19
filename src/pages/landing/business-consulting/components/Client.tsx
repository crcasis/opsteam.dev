import clients01dark from '@/assets/img/landing/business-consulting/clients/01-dark.svg'
import clients01light from '@/assets/img/landing/business-consulting/clients/01-light.svg'
import clients02dark from '@/assets/img/landing/business-consulting/clients/02-dark.svg'
import clients02light from '@/assets/img/landing/business-consulting/clients/02-light.svg'
import clients03dark from '@/assets/img/landing/business-consulting/clients/03-dark.svg'
import clients03light from '@/assets/img/landing/business-consulting/clients/03-light.svg'
import clients04dark from '@/assets/img/landing/business-consulting/clients/04-dark.svg'
import clients04light from '@/assets/img/landing/business-consulting/clients/04-light.svg'
import clients05dark from '@/assets/img/landing/business-consulting/clients/05-dark.svg'
import clients05light from '@/assets/img/landing/business-consulting/clients/05-light.svg'
import clients06dark from '@/assets/img/landing/business-consulting/clients/06-dark.svg'
import clients06light from '@/assets/img/landing/business-consulting/clients/06-light.svg'
import { Container, Image } from 'react-bootstrap'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const clients = [
  { dark: clients01dark, light: clients01light },
  { dark: clients02dark, light: clients02light },
  { dark: clients03dark, light: clients03light },
  { dark: clients04dark, light: clients04light },
  { dark: clients05dark, light: clients05light },
  { dark: clients06dark, light: clients06light },
  { dark: clients03dark, light: clients03light },
  { dark: clients05dark, light: clients05light },
  { dark: clients02dark, light: clients02light },
]

const clients2 = [
  { dark: clients06dark, light: clients06light },
  { dark: clients05dark, light: clients05light },
  { dark: clients04dark, light: clients04light },
  { dark: clients02dark, light: clients02light },
  { dark: clients03dark, light: clients03light },
  { dark: clients01dark, light: clients01light },
  { dark: clients04dark, light: clients04light },
  { dark: clients02dark, light: clients02light },
  { dark: clients03dark, light: clients03light },
]

const Client = () => {
  return (
    <>
      <section className="pb-5 pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
        <Container className="pb-4 mb-2 mb-lg-3">
          <h2 className="h1 text-center">Our clients</h2>
          <p className="text-center mb-0">More than 2,000 clients using Around to analyze data</p>
        </Container>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          loop
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          centeredSlidesBounds={true}
          freeMode
          speed={10000}
          breakpoints={{
            0: { slidesPerView: 2 },
            400: { slidesPerView: 3 },
            600: { slidesPerView: 4 },
            800: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 7 },
            1600: { slidesPerView: 8 },
          }}
          className="pb-4"
          style={{ transitionTimingFunction: 'linear' }}
        >
          {clients.concat(clients).map((client, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray rounded-4">
                <Image className="d-block d-dark-mode-none mx-auto" src={client.dark} width={196} alt="Client logo" />
                <Image className="d-none d-dark-mode-block mx-auto" src={client.light} width={196} alt="Client logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          loop
          freeMode
          dir="rtl"
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={8500}
          slidesPerView={2}
          breakpoints={{
            400: { slidesPerView: 3 },
            600: { slidesPerView: 4 },
            800: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 7 },
            1600: { slidesPerView: 8 },
          }}
          style={{ transitionTimingFunction: 'linear' }}
        >
          {clients2.concat(clients).map((client, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray rounded-4">
                <Image className="d-block d-dark-mode-none mx-auto" src={client.dark} width={196} alt="Client logo" />
                <Image className="d-none d-dark-mode-block mx-auto" src={client.light} width={196} alt="Client logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Client
