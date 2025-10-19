import client01dark from '@/assets/img/landing/business-consulting/clients/01-dark.svg'
import client01light from '@/assets/img/landing/business-consulting/clients/01-light.svg'
import client02dark from '@/assets/img/landing/business-consulting/clients/02-dark.svg'
import client02light from '@/assets/img/landing/business-consulting/clients/02-light.svg'
import client03dark from '@/assets/img/landing/business-consulting/clients/03-dark.svg'
import client03light from '@/assets/img/landing/business-consulting/clients/03-light.svg'
import client04dark from '@/assets/img/landing/business-consulting/clients/04-dark.svg'
import client04light from '@/assets/img/landing/business-consulting/clients/04-light.svg'
import client05dark from '@/assets/img/landing/business-consulting/clients/05-dark.svg'
import client05light from '@/assets/img/landing/business-consulting/clients/05-light.svg'
import client06dark from '@/assets/img/landing/business-consulting/clients/06-dark.svg'
import client06light from '@/assets/img/landing/business-consulting/clients/06-light.svg'
import { Image } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type swipeType = {
  imagedark: string
  imglight: string
}

const slider: swipeType[] = [
  { imagedark: client04dark, imglight: client04light },
  { imagedark: client01dark, imglight: client01light },
  { imagedark: client02dark, imglight: client02light },
  { imagedark: client03dark, imglight: client03light },
  { imagedark: client05dark, imglight: client05light },
  { imagedark: client06dark, imglight: client06light },
  { imagedark: client02dark, imglight: client02light },
]

const Logo = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            500: { slidesPerView: 3 },
            750: { slidesPerView: 4 },
            1000: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="pt-2 pt-sm-4"
        >
          {slider.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="border rounded-4">
                <Image className="d-block d-dark-mode-none mx-auto" src={item.imagedark} width={196} alt="Logo" />
                <Image className="d-none d-dark-mode-block mx-auto" src={item.imglight} width={196} alt="Logo" />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-xl-none" />
        </Swiper>
      </section>
    </>
  )
}

export default Logo
