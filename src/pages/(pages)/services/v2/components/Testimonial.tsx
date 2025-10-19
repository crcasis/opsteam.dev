import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  name: string
  role: string
  title: string
  descripion: string
}

const tes: TestimonialType[] = [
  {
    name: 'Lilia Bocouse',
    role: 'Head of Marketing',
    title: 'Thanks to your talented team for the banding we dreamed about!',
    descripion:
      'Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.',
  },
  {
    name: 'Robert Fox',
    role: 'Marketing Coordinator',
    title: 'Exceptional work, delivery and flexibility. An excellent result.',
    descripion:
      'Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.',
  },
  {
    name: 'Jenny Wilson',
    role: 'CEO, Co-Founder',
    title: 'Thanks to you, we have created a unique branding that is our pride!',
    descripion:
      'Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.',
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="container position-relative z-2 py-5 mt-n1 mt-sm-0 mb-1 my-md-3 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="py-md-4 py-lg-5">
          <Col md={9} lg={7} className="order-md-2">
            <Swiper
              spaceBetween={40}
              loop
              autoHeight
              modules={[Pagination, Navigation]}
              pagination={{
                el: '.testimonials-count',
                type: 'fraction',
              }}
              navigation={{
                prevEl: '#prev-testimonial',
                nextEl: '#next-testimonial',
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {tes.map((item, idx) => (
                <SwiperSlide data-swiper-binded="#testimonial-1" key={idx}>
                  <div className="d-flex d-md-none pt-3 mb-3">
                    <i className="ai-quotes d-md-none text-primary display-3 mt-n2" />
                    <div className="ps-3">
                      <h3 className="h5 mb-0">{item.name}</h3>
                      <p className="text-body-secondary mb-0">{item.role}</p>
                    </div>
                  </div>
                  <h2 className="mb-lg-4">{item.title}</h2>
                  <p className="lead mb-0">{item.descripion}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col md={3} className="offset-lg-1 order-md-1 mt-n3">
            <i className="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style={{ fontSize: 150 }} />
            <div className="binded-content h-auto d-none d-md-block">
              {tes.map((item, idx) => (
                <div className={`binded-item h-auto ${activeIndex === idx ? 'active' : ''}`} key={idx}>
                  <h3 className="h5 mb-1">{item.name}</h3>
                  <p className="text-body-secondary mb-0">{item.role}</p>
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center pt-4 mt-3">
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
                <i className="ai-arrow-left" />
              </button>
              <div className="testimonials-count fw-medium flex-shrink-0 text-center" style={{ width: '2.5rem' }} />
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial" aria-label="Next">
                <i className="ai-arrow-right" />
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Testimonial
