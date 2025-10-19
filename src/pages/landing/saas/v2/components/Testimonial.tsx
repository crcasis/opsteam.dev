import avatar30 from '@/assets/img/avatar/30.jpg'
import avatar31 from '@/assets/img/avatar/31.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialData = {
  avatar: string
  name: string
  role: string
  text: string
}

const testimonials: TestimonialData[] = [
  {
    avatar: avatar30,
    name: 'Jenny Wilson',
    role: 'Head of Marketing',
    text: `Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze data quickly, efficiently.`,
  },
  {
    avatar: avatar31,
    name: 'Esther Howard',
    role: 'CEO, Co-Founder',
    text: `Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa.`,
  },
  {
    avatar: avatar32,
    name: 'Nick Wenirten',
    role: 'Web Developer',
    text: `Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris.`,
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="container pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
        <Row className="align-items-center mt-2 pt-2 pt-sm-4 pt-lg-5">
          <Col md={7} lg={6}>
            <Card className="border-0 bg-secondary py-1 p-lg-4">
              <CardBody>
                <Swiper
                  modules={[Navigation]}
                  loop
                  spaceBetween={30}
                  navigation={{
                    prevEl: '#prev-testimonial',
                    nextEl: '#next-testimonial',
                  }}
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <p className="lead text-dark pb-3 mb-3">"{item.text}"</p>
                      <div className="d-flex align-items-center">
                        <Image className="rounded-circle" src={item.avatar} width={60} alt="Jenny Wilson" />
                        <div className="ps-3">
                          <h3 className="h4 mb-0">{item.name}</h3>
                          <div className="fs-lg text-body-secondary">{item.role}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </CardBody>
            </Card>
            <div className="d-flex justify-content-center justify-content-md-end pt-4">
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Prev">
                <i className="ai-arrow-left" />
              </button>
              <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial" aria-label="Next">
                <i className="ai-arrow-right" />
              </button>
            </div>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1 pt-2 pt-md-0 mt-5 mt-md-n5">
            <div className="ps-md-4 ps-lg-0">
              <h2 className="h1 mb-4">More than 2,000 clients use Around for data analysis</h2>
              <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  24/7 customer support
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Lifetime update
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Forecasting and recommendations
                </li>
              </ul>
              <Link className="btn btn-lg btn-primary rounded-pill" to="">
                Start free 14-day trial
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Testimonial
