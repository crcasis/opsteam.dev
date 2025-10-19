import tes01 from '@/assets/img/landing/influencer/testimonials/01.png'
import tes02 from '@/assets/img/landing/influencer/testimonials/02.png'
import { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  id: string
  author: string
  text: string
  image: string
}

const testimonials: TestimonialType[] = [
  {
    id: 'image1',
    author: 'Wade Warren',
    text: 'Odio risus amet amet tincidunt. Turpis nibh ultricies morbi porta ipsum adipiscing. Morbi magnis nunc in facilisis gravida adipiscing in elementum aliquet nunc.',
    image: tes01,
  },
  {
    id: 'image2',
    author: 'Annete Smith',
    text: 'Blandit facilisi eget feugiat ultricies. Id habitant lectus imperdiet amet elementum lectus lacus sit laoreet. Quis nullam. Gravida pretium iaculis lorem sit in elementum.',
    image: tes02,
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="w-100 px-sm-4 mx-auto" style={{ maxWidth: 1680 }} data-bs-theme="dark">
        <div className="position-relative z-2 pt-2 pb-3 py-sm-3 py-md-4 py-lg-5">
          <div className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-sm-block" style={{ backgroundColor: '#171a1e' }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-sm-none" style={{ backgroundColor: '#171a1e' }} />
          <Container className="position-relative z-2 py-5 my-xl-3 my-xxl-5">
            <Row className="align-items-center justify-content-center">
              <Col xs={11} sm={9} md={8} lg={7} className="pb-3">
                <div className="binded-content">
                  {testimonials.map((item, idx) => (
                    <div key={idx} className={`binded-item  ${activeIndex === idx ? 'active' : ''}`} id={item.id}>
                      <Image src={item.image} alt={item.author} />
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs={11} sm={9} md={8} lg={5} xl={4} className="offset-xl-1">
                <div className="ps-lg-4 ps-xl-0 mt-lg-n4 mt-xl-n5">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    loop
                    pagination={{ el: '.testimonials-count', type: 'fraction', clickable: true }}
                    navigation={{ nextEl: '#next-testimonial', prevEl: '#prev-testimonial' }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  >
                    {testimonials.map((item) => (
                      <SwiperSlide key={item.id} data-swiper-binded={`#${item.id}`}>
                        <div className="ai-quotes text-primary display-3 mb-4" />
                        <p className="text-body lead pb-1 pb-sm-2">{item.text}</p>
                        <h3 className="h5 fw-bold mb-0">{item.author}</h3>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0 mt-xl-2">
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
                <i className="ai-arrow-left" />
              </button>
              <div className="testimonials-count text-body fw-medium flex-shrink-0 text-center" style={{ width: '2.5rem' }} />
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial" aria-label="Next">
                <i className="ai-arrow-right" />
              </button>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Testimonial
