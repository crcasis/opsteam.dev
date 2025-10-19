import tes01 from '@/assets/img/landing/mobile-app-showcase/testimonials/01.png'
import tes02 from '@/assets/img/landing/mobile-app-showcase/testimonials/02.png'
import tes03 from '@/assets/img/landing/mobile-app-showcase/testimonials/03.png'
import tes04 from '@/assets/img/landing/mobile-app-showcase/testimonials/04.png'
import { Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  name: string
  role: string
  text: string
  image: string
  bg: string
}

const testimonials: TestimonialType[] = [
  {
    name: 'Nick Williams',
    role: 'Student',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.`,
    image: tes01,
    bg: 'info',
  },
  {
    name: 'Lili Bocouse',
    role: 'Student',
    text: `Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.`,
    image: tes02,
    bg: 'warning',
  },
  {
    name: 'Esther Howard',
    role: 'Student',
    text: `Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.`,
    image: tes04,
    bg: 'primary',
  },
  {
    name: 'Jane Cooper',
    role: 'Student',
    text: `Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.`,
    image: tes03,
    bg: 'danger',
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="container py-5 mb-1 mb-sm-2 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="justify-content-center pt-2 pt-sm-4 pb-4 mb-2 mb-lg-3">
          <Col lg={8} xl={7} xxl={6} className="text-center pt-2">
            <h2 className="h1 mb-1">Testimonials from students who recommend Around</h2>
          </Col>
        </Row>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            800: { slidesPerView: 2 },
          }}
          className="pb-2 pb-sm-4 pt-5"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide className="h-auto" key={idx}>
              <Card className={`border-0 bg-${item.bg} bg-opacity-10 h-100 text-center`}>
                <div className={`polygon-avatar bg-${item.bg} mx-auto translate-middle-y`}>
                  <Image src={item.image} alt="Nick Williams" />
                </div>
                <CardBody className="pt-0 mt-n4">
                  <p className="card-text fs-xl">{item.text}</p>
                </CardBody>
                <CardFooter className="border-0 pt-0">
                  <div className="h4 mb-1">{item.name}</div>
                  <span>{item.role}</span>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 mt-lg-3 pt-4" />
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial
