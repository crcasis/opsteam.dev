import hero01 from '@/assets/img/landing/yoga-studio/hero/01.jpg'
import hero02 from '@/assets/img/landing/yoga-studio/hero/02.jpg'
import hero03 from '@/assets/img/landing/yoga-studio/hero/03.jpg'
import GlightBox from '@/components/GlightBox'
import { Col, Container, Row } from 'react-bootstrap'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
  return (
    <>
      <section className="position-relative min-vh-100 py-5" data-bs-theme="light">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={800}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          className="swiper-scale-effect position-absolute top-0 start-0 w-100 h-100"
        >
          <SwiperSlide>
            <div className="swiper-slide-cover bg-position-top-center" style={{ backgroundImage: `url(${hero01})` }} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-cover bg-position-top-center" style={{ backgroundImage: `url(${hero02})` }} />
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-cover bg-position-top-center" style={{ backgroundImage: `url(${hero03})` }} />
          </SwiperSlide>
          <div className="swiper-pagination mb-4" />
        </Swiper>

        <Container className="position-relative z-2 py-lg-3 py-xl-5 my-5">
          <Row className="pt-md-3 py-xxl-5 my-5">
            <Col className="py-5 mb-md-4 mb-lg-5">
              <h1 className="display-1 text-uppercase mb-4">Yoga Studio</h1>
              <p className="d-block text-body fs-xl pb-2 mb-4 mb-md-5" style={{ maxWidth: 500 }}>
                The best yoga and meditation practices, adapted at a high level to the needs of the modern pace of life.
              </p>
              <div className="position-relative d-inline-flex align-items-center">
                <GlightBox
                  className="glightbox btn btn-icon btn-lg btn-primary rounded-circle stretched-link"
                  href="https://www.youtube.com/watch?v=SZCxKjgReQ4"
                  data-bs-toggle="video"
                  aria-label="Play video"
                >
                  <i className="ai-play-filled" />
                </GlightBox>
                <span className="text-body fs-lg fw-semibold ms-3">Watch Video</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
