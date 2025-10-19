import avatar from '@/assets/img/landing/marketing-agency/hero/avatar.jpg'
import shape01 from '@/assets/img/landing/marketing-agency/hero/shape01.svg'
import shape02 from '@/assets/img/landing/marketing-agency/hero/shape02.svg'
import shape03 from '@/assets/img/landing/marketing-agency/hero/shape03.svg'
import shape04 from '@/assets/img/landing/marketing-agency/hero/shape04.svg'
import Parallax from '@/components/Parallax'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import video from '@/assets/img/landing/marketing-agency/hero/video.mp4'

const Hero = () => {
  return (
    <>
      <section className="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5">
        <Parallax>
          <Container className="d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
            <Row className="align-items-center pt-5 mt-4 mt-xxl-0">
              <Col lg={6} className="mb-4 mb-lg-0 pb-3 pb-lg-0">
                <div className="parallax mx-auto mx-lg-0" style={{ maxWidth: 582 }}>
                  <div className="parallax-layer z-3" data-depth="0.1">
                    <div
                      className="position-relative bg-dark mx-auto"
                      style={{ maxWidth: '61%', padding: '.3125rem', marginBottom: '9.9%', borderRadius: 'calc(var(--ar-border-radius) * 2.125)' }}
                    >
                      <div className="position-absolute start-50 translate-middle-x" style={{ top: '4.4%', width: '85%' }}>
                        <Row className="row-cols-4 gx-2 mb-3">
                          <Col>
                            <div className="border-white border opacity-80" />
                          </Col>
                          <Col>
                            <div className="border-white border opacity-80" />
                          </Col>
                          <Col>
                            <div className="border-white border opacity-80" />
                          </Col>
                          <Col className="position-relative">
                            <div className="position-absolute top-0 start-0 w-100 border-white border opacity-30" />
                            <div className="position-absolute top-0 start-0 w-50 border-white border opacity-80" />
                          </Col>
                        </Row>
                        <div className="d-flex align-items-center">
                          <Image className="rounded-circle" src={avatar} width={35} alt="Avatar" />
                          <div className="fs-xs ps-2" data-bs-theme="light">
                            <span className="text-nav fw-bold me-1">Lonoi@1</span>
                            <span className="text-body-secondary">12 min</span>
                          </div>
                        </div>
                      </div>
                      <video className="d-block w-100" autoPlay loop muted style={{ borderRadius: 'calc(var(--ar-border-radius) * 1.875)' }}>
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="parallax-layer" data-depth="0.3">
                    <Image src={shape01} alt="Background shape" />
                  </div>
                  <div className="parallax-layer z-2" data-depth="-0.1">
                    <Image src={shape02} alt="Background shape" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.15">
                    <Image src={shape03} alt="Background shape" />
                  </div>
                  <div className="parallax-layer z-2" data-depth="-0.25">
                    <Image src={shape04} alt="Background shape" />
                  </div>
                </div>
              </Col>
              <Col lg={6} className="text-center text-lg-start">
                <h1 className="display-2 pb-3 mb-4">
                  <span className="fw-normal">Full servises</span> marketing agency
                </h1>
                <Row className="row-cols-3">
                  <Col>
                    <i className="ai-bulb-alt d-block fs-1 text-dark mb-2 pb-1" />
                    <p className="mb-0">Individual approach to the brand</p>
                  </Col>
                  <Col>
                    <i className="ai-rocket d-block fs-2 text-dark mb-3" />
                    <p className="mb-0">We guarantee the result after a month</p>
                  </Col>
                  <Col>
                    <i className="ai-circle-check-filled d-block fs-3 text-dark mb-3" />
                    <p className="mb-0">Completing tasks exactly on time</p>
                  </Col>
                </Row>
                <div className="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
                  <Link className="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" to="">
                    Get in touch
                  </Link>
                  <Link className="btn btn-lg btn-link" to="">
                    Our case studies
                    <i className="ai-arrow-right ms-2" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </section>
    </>
  )
}

export default Hero
