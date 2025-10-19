import gallery01 from '@/assets/img/landing/conference/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/conference/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/conference/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/conference/gallery/04.jpg'
import th01 from '@/assets/img/landing/conference/gallery/th01.jpg'
import th02 from '@/assets/img/landing/conference/gallery/th02.jpg'
import th03 from '@/assets/img/landing/conference/gallery/th03.jpg'
import th04 from '@/assets/img/landing/conference/gallery/th04.jpg'
import th05 from '@/assets/img/landing/conference/gallery/th05.jpg'
import th06 from '@/assets/img/landing/conference/gallery/th06.jpg'
import GlightBox from '@/components/GlightBox'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <div className="py-2 py-sm-3 py-md-4 my-md-2 my-xxl-3">
          <h2 className="h1 text-center pt-xxl-1">See how the previous event unfolded</h2>
          <p className="fs-lg text-center pb-3 mb-lg-4">Get inspired with a selection of the keynotes about the Conference 2022</p>
          <div className="gallery row g-3 g-md-4" data-video="true">
            <Col sm={6}>
              <Row className="g-3 g-md-4">
                <Col xs={6}>
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href={gallery01}>
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th01} alt="Auditorium" />
                    </div>
                  </GlightBox>
                </Col>
                <Col xs={6}>
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href={gallery02}>
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th02} alt="Comfortable chairs" />
                    </div>
                  </GlightBox>
                </Col>
                <Col xs={12}>
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href="https://www.youtube.com/watch?v=5-A8_ocajCM">
                    <div className="btn btn-icon btn-lg btn-primary rounded-circle pe-none position-absolute top-50 start-50 translate-middle z-3">
                      <i className="ai-play-filled" />
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th05} alt="Conferece showreel" />
                    </div>
                  </GlightBox>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className="g-3 g-md-4">
                <Col xs={6} className="order-sm-2">
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href={gallery03}>
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th03} alt="Whiteboard" />
                    </div>
                  </GlightBox>
                </Col>
                <Col xs={6} className="order-sm-3">
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href={gallery04}>
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th04} alt="Coffee break" />
                    </div>
                  </GlightBox>
                </Col>
                <Col xs={12} className="order-sm-1">
                  <GlightBox className="gallery-item d-block card-hover zoom-effect" href="https://www.youtube.com/watch?v=Omr18ybhPKI">
                    <div className="btn btn-icon btn-lg btn-primary rounded-circle pe-none position-absolute top-50 start-50 translate-middle z-3">
                      <i className="ai-play-filled" />
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-2 opacity-0">
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-4">
                      <Image className="zoom-effect-img" src={th06} alt="Speaker on stage" />
                    </div>
                  </GlightBox>
                </Col>
              </Row>
            </Col>
          </div>
          <div className="text-center pb-lg-2 pb-xl-3 pb-xxl-3 pt-4 pt-md-5 mt-3 mt-md-0">
            <Link className="btn btn-lg btn-outline-primary" to="">
              See more
              <i className="ai-image ms-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
