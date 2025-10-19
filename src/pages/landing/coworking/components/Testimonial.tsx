import avatar30 from '@/assets/img/avatar/30.jpg'
import avatar31 from '@/assets/img/avatar/31.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  quote: string
  name: string
  role: string
  image: string
}

const testimonials: TestimonialType[] = [
  {
    quote:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, a vulputate dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus molestie massa sit amet dapibus. Cras pulvinar lacinia sollicitudin malesuada vestibulum."',
    name: 'Jenny Wilson',
    role: 'Head of Marketing',
    image: avatar30,
  },
  {
    quote:
      '"Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa."',
    name: 'Esther Howard',
    role: 'CEO, Co-Founder',
    image: avatar31,
  },
  {
    quote:
      '"Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris."',
    name: 'Nick Wenirten',
    role: 'Web Developer',
    image: avatar32,
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="container pt-5 mt-1 mt-sm-2 mt-lg-4 mt-xxl-5">
        <Row className="align-items-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-xxl-2">
          <Col md={5} xl={4} className="offset-lg-1 mt-0 mt-md-n5 mb-5 mb-md-0">
            <div className="pe-md-4">
              <h2 className="h1 text-center text-md-start mb-4">More than 2,000 clients use Around as a work space</h2>
              <ul className="list-unstyled d-flex d-md-block flex-wrap justify-content-center pb-2 pb-lg-0 mb-4 mb-lg-5">
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  24/7 access to the workplace
                </li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Private fully equipped halls
                </li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Fixed workplace
                </li>
              </ul>
              <div className="text-center text-md-start">
                <Link className="btn btn-lg btn-primary" to="">
                  Start free 14-day trial
                </Link>
              </div>
            </div>
          </Col>
          <Col md={7} lg={6}>
            <Card className="border-0 bg-secondary py-1 p-lg-4">
              <CardBody>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  loop={true}
                  navigation={{
                    prevEl: '#prev-testimonial',
                    nextEl: '#next-testimonial',
                  }}
                >
                  {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                      <p className="lead text-dark pb-3 mb-3">{t.quote}</p>
                      <div className="d-flex align-items-center">
                        <Image className="rounded-circle" src={t.image} width={60} alt={t.name} />
                        <div className="ps-3">
                          <h3 className="h4 mb-0">{t.name}</h3>
                          <div className="fs-lg text-body-secondary">{t.role}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </CardBody>
            </Card>

            <div className="d-flex justify-content-center justify-content-md-start pt-4">
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
                <i className="ai-arrow-left" />
              </button>
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial" aria-label="Next">
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
