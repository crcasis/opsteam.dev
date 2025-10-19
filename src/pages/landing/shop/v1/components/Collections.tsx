import shopbg01 from '@/assets/img/landing/shop-1/collections/bg01.jpg'
import shopbg02 from '@/assets/img/landing/shop-1/collections/bg02.jpg'
import th01 from '@/assets/img/landing/shop-1/collections/th01.png'
import th02 from '@/assets/img/landing/shop-1/collections/th02.png'
import { useState } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Collections = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className="position-relative py-5">
      <div className="binded-content position-absolute top-0 start-0 w-100">
        <div
          className={`binded-item position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center  ${activeIndex ? 'active' : ''}`}
          id="bg-1"
          style={{
            background: `linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url(${shopbg01})`,
          }}
        />
        <div
          className={`binded-item position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center ${activeIndex ? 'active' : ''}`}
          id="bg-2"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) -0.47%, rgba(0,0,0,0) 100%), url(${shopbg02})`,
          }}
        />
      </div>

      <Container className="py-2 py-sm-4 py-lg-5 my-md-3 my-lg-0 my-xl-3 my-xxl-4 position-relative z-2">
        <Row className="align-items-center my-xxl-2">
          <Col md={6} className="mb-5 mb-md-0">
            <div style={{ maxWidth: 580 }}>
              <div className="d-flex pb-2 mb-3 mb-md-4 mb-xl-5">
                <button className="btn btn-icon btn-sm btn-outline-light rounded-circle me-3" type="button" aria-label="Prev" id="prev-collection">
                  <i className="ai-arrow-left" />
                </button>
                <button className="btn btn-icon btn-sm btn-outline-light rounded-circle" type="button" aria-label="Next" id="next-collection">
                  <i className="ai-arrow-right" />
                </button>
              </div>
              <Swiper
                spaceBetween={40}
                loop
                modules={[Navigation, EffectFade]}
                navigation={{
                  prevEl: '#prev-collection',
                  nextEl: '#next-collection',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
                <SwiperSlide>
                  <h2 className="display-5 text-white text-uppercase pb-2 mb-md-4 mb-xl-5">Meet the guests with a stunning set for a dinner party</h2>
                  <Link className="btn btn-outline-light" to="/shop/catalog">
                    Explore all sets
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="display-5 text-white text-uppercase pb-2 mb-md-4 mb-xl-5">Decor for the living room or bedrooms in wood style</h2>
                  <Link className="btn btn-outline-light" to="/shop/catalog">
                    Explore all sets
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>

          <Col md={6} lg={5} xl={4} className="offset-lg-1 offset-xl-2">
            <div className="ps-md-4 ps-lg-0">
              <Card className="border-0 rounded-1" style={{ maxWidth: 450 }}>
                <CardBody>
                  <Swiper loop spaceBetween={40} allowTouchMove={false}>
                    <SwiperSlide className={`${activeIndex ? 'active' : ''}`}>
                      <Link className="d-block pb-3 mb-2 mb-lg-3" to="/shop/single">
                        <Image src={th01} alt="Collection" />
                      </Link>
                      <div className="d-flex mb-1">
                        <h3 className="h6 mb-0">
                          <Link to="/shop/single">Set for a dinner party of 7 items</Link>
                        </h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">$116.00</span>
                        <div className="nav ms-auto" title="Add to cart">
                          <Link className="nav-link fs-lg py-2 px-1" to="" aria-label="Add to Cart">
                            <i className="ai-cart" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${activeIndex ? 'active' : ''}`}>
                      <Link className="d-block pb-3 mb-2 mb-lg-3" to="/shop/single">
                        <Image src={th02} alt="Collection" />
                      </Link>
                      <div className="d-flex mb-1">
                        <h3 className="h6 mb-0">
                          <Link to="/shop/single">A set of flowerpots for the living room</Link>
                        </h3>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2">$78.00</span>
                        <div className="nav ms-auto" title="Add to cart">
                          <Link className="nav-link fs-lg py-2 px-1" to="#" aria-label="Add to Cart">
                            <i className="ai-cart" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Collections
