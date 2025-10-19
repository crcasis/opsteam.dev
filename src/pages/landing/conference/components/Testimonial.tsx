import avatar22 from '@/assets/img/avatar/22.jpg'
import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'
import { Card, CardBody, Image } from 'react-bootstrap'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  name: string
  avatar: string
  rating: number
  text: string
}

const testimonialsRow1: TestimonialType[] = [
  {
    name: 'Wade Warren',
    avatar: avatar23,
    rating: 4,
    text: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus.',
  },
  {
    name: 'Jenny Wilson',
    avatar: avatar26,
    rating: 5,
    text: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Bessie Cooper',
    avatar: avatar27,
    rating: 4.5,
    text: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Ralph Edwards',
    avatar: avatar32,
    rating: 4,
    text: 'Odio viverra tristique id adipiscing varius. Leo vel tincidunt amet arcu. Auctor ipsum fames lacus vestibulum. Ultricies cras et at sed sed turpis.',
  },
  {
    name: 'Cameron Williamson',
    avatar: avatar28,
    rating: 4.5,
    text: 'Mauris fermentum vitae volutpat orci mattis dolor malesuada porta id. Enim, dis nisi eget tincidunt bibendum leo pulvinar in. At justo hacsit diam.',
  },
  {
    name: 'Annette Black',
    avatar: avatar24,
    rating: 5,
    text: 'Nisi et venenatis vitae, purus arcu. Integer lacus maecenas rhoncus nibh aliquam, enim sollicitudin interdum hendrerit. Proin venenatis varius.',
  },
]

const testimonialsRow2: TestimonialType[] = [
  {
    name: 'Guy Hawkins',
    avatar: avatar23,
    rating: 4,
    text: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus.',
  },
  {
    name: 'Esther Howard',
    avatar: avatar22,
    rating: 5,
    text: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Anneta Nikson',
    avatar: avatar27,
    rating: 4.5,
    text: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Darrell Steward',
    avatar: avatar32,
    rating: 4,
    text: 'Odio viverra tristique id adipiscing varius. Leo vel tincidunt amet arcu. Auctor ipsum fames lacus vestibulum. Ultricies cras et at sed sed turpis.',
  },
  {
    name: 'Martha Stewart',
    avatar: avatar28,
    rating: 4.5,
    text: 'Mauris fermentum vitae volutpat orci mattis dolor malesuada porta id. Enim, dis nisi eget tincidunt bibendum leo pulvinar in. At justo hacsit diam.',
  },
  {
    name: 'Kathryn Murphy',
    avatar: avatar24,
    rating: 5,
    text: 'Nisi et venenatis vitae, purus arcu. Integer lacus maecenas rhoncus nibh aliquam, enim sollicitudin interdum hendrerit. Proin venenatis varius.',
  },
]
const Testimonial = () => {
  return (
    <>
      <section className="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 contaier text-center pt-2 pt-sm-3 pt-md-4 pb-3 mt-md-2 mt-xxl-3 mb-lg-4">What attendees say</h2>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          loop={true}
          grabCursor={false}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          speed={10000}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
            1600: { slidesPerView: 5 },
          }}
          className="pb-4"
          style={{ transitionTimingFunction: 'linear !important' }}
        >
          <div className="swiper-wrapper">
            {testimonialsRow1.map((item, idx) => (
              <SwiperSlide className="h-auto" key={idx}>
                <Card className="h-100 border-0 bg-secondary rounded-4">
                  <CardBody>
                    <div className="d-flex align-items-center mb-4">
                      <Image className="rounded-circle" src={item.avatar} width={60} alt="Avatar" />
                      <div className="ps-3">
                        <div className="h5 mb-0">{item.name}</div>
                        <div className="text-nowrap">
                          <i className="ai-star-filled text-warning me-1" />
                          <i className="ai-star-filled text-warning me-1" />
                          <i className="ai-star-filled text-warning me-1" />
                          <i className="ai-star-filled text-warning me-1" />
                          <i className="ai-star text-body-secondary opacity-70" />
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">"{item.text}"</p>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          loop={true}
          grabCursor={false}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          speed={10000}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
            1600: { slidesPerView: 5 },
          }}
          className="pb-4"
          dir="rtl"
          style={{ transitionTimingFunction: 'linear !important' }}
        >
          {testimonialsRow2.map((item, idx) => (
            <SwiperSlide className="h-auto" key={idx} dir="ltr">
              <Card className="h-100 border-0 bg-secondary rounded-4">
                <CardBody>
                  <div className="d-flex align-items-center mb-4">
                    <Image className="rounded-circle" src={item.avatar} width={60} alt="Avatar" />
                    <div className="ps-3">
                      <div className="h5 mb-0">{item.name}</div>
                      <div className="text-nowrap">
                        <i className="ai-star-filled text-warning me-1" />
                        <i className="ai-star-filled text-warning me-1" />
                        <i className="ai-star-filled text-warning me-1" />
                        <i className="ai-star-filled text-warning me-1" />
                        <i className="ai-star text-body-secondary opacity-70" />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0">"{item.text}"</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial
