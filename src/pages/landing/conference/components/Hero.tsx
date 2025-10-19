import img1 from '@/assets/img/landing/conference/hero/01.jpg'
import img2 from '@/assets/img/landing/conference/hero/02.jpg'
import img3 from '@/assets/img/landing/conference/hero/03.jpg'
import th1 from '@/assets/img/landing/conference/hero/th01.jpg'
import th2 from '@/assets/img/landing/conference/hero/th02.jpg'
import th3 from '@/assets/img/landing/conference/hero/th03.jpg'
import noise from '@/assets/img/landing/conference/noise.png'
import { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Autoplay, EffectCreative, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Speaker = {
  name: string
  role: string
  image: string
  thumb: string
}

const speakers: Speaker[] = [
  { name: 'Esther Howard', role: 'VP of Strategy, Stretto Inc.', image: img1, thumb: th1 },
  { name: 'Albert Flores', role: 'Product Manager, Google', image: img2, thumb: th2 },
  { name: 'Kathryn Murphy', role: 'VP of Marketing, Glassdoor', image: img3, thumb: th3 },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="bg-dark position-relative py-5" data-bs-theme="dark">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light', opacity: '12%' }}
        />
        <Container className="position-relative z-2 py-md-3 py-lg-4 py-xl-5">
          <Row className="align-items-center justify-content-center pt-5 pb-2 pb-sm-3 mt-sm-4">
            <Col xs={10} sm={8} md={6} xl={5} className="offset-lg-1 offset-xl-2 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
              <Swiper
                modules={[Autoplay, EffectCreative, Thumbs]}
                effect="creative"
                loop
                allowTouchMove={false}
                speed={450}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                creativeEffect={{
                  prev: { shadow: true, translate: ['-20%', 0, -1] },
                  next: { translate: ['100%', 0, 0] },
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                style={{
                  borderRadius: '50%',
                  borderBottomRightRadius: 0,
                }}
              >
                {speakers.map((speaker, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="position-relative overflow-hidden"
                      style={{
                        borderBottomLeftRadius: '50%',
                        borderTopLeftRadius: '50%',
                      }}
                    >
                      <Image src={speaker.image} alt={speaker.name} />
                      <div
                        className="d-flex align-items-end justify-content-end position-absolute start-0 bottom-0 w-100"
                        style={{
                          height: 215,
                          background: 'linear-gradient(0deg, rgba(15,17,21,0.8) 0%, rgba(16,20,24,0) 100%)',
                        }}
                      >
                        <div className="text-end pe-4 pb-4">
                          <h3 className="h5 mb-1">{speaker.name}</h3>
                          <p className="text-body fs-sm mb-0">{speaker.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-thumbnails swiper-thumbnails-circle flex-nowrap justify-content-end pt-4" id="thumbnails">
                {speakers.map((speaker, idx) => (
                  <Image
                    className={`rounded-circle ms-2 swiper-thumbnail swiper-pagination-bullet ${activeIndex === idx ? 'border border-3 border-primary' : ''}`}
                    key={idx}
                    src={speaker.thumb}
                    alt={`${speaker.name} thumbnail`}
                    width={64}
                    height={64}
                  />
                ))}
              </div>
            </Col>
            <Col sm={10} md={6} lg={5} className="order-md-1">
              <div className="d-flex align-items-center lead pb-3 pb-sm-4 pb-lg-5 mb-2 mb-md-3 mb-lg-0 mb-xl-2">
                <div className="text-light">Nov 15-16, '23</div>
                <div className="text-warning mx-3 mx-sm-4">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z" />
                  </svg>
                </div>
                <div className="text-light">Berlin, GE</div>
              </div>
              <h1 className="display-3 text-uppercase d-none d-lg-block pb-3 mb-4">The biggest international conference</h1>
              <h1 className="display-5 text-uppercase d-lg-none pb-1 pb-sm-2">The biggest international conference</h1>
              <p className="text-body fs-lg pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-xl-2">
                Mattis aliquet faucibus senectus feugiat sapien mi diam nibh velit nunc purus elementum faucibus lectuset mauris.
              </p>
              <div className="d-sm-flex">
                <Link
                  className="btn btn-lg btn-primary w-100 w-md-auto mb-3 mb-sm-0 me-sm-3 me-lg-4"
                  to="#tickets"
                  data-scroll
                  data-scroll-offset={120}
                >
                  Buy access pass
                  <i className="ai-arrow-down ms-2 me-n2" />
                </Link>
                <Link className="btn btn-lg btn-outline-light w-100 w-md-auto" to="">
                  <i className="ai-calendar me-2 ms-n2" />
                  Add to calendar
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
