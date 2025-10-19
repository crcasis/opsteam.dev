import pattern from '@/assets/img/landing/saas-4/hero-bg-pattern.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="position-relative bg-dark pt-lg-4 pt-xl-5">
        <div className="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax data-speed="0.4">
          <div className="jarallax-img" style={{ backgroundImage: `url(${pattern})` }} />
        </div>
        <Container className="position-relative z-2 pt-2 pt-sm-4 pt-md-5">
          <Row className="justify-content-center pt-5">
            <Col lg={9} xl={8} className="text-center pt-5 mt-1">
              <Link
                to=""
                className="d-inline-flex align-items-center fs-sm fw-semibold text-decoration-none bg-warning bg-opacity-10 text-warning rounded-pill py-2 px-3"
              >
                <span className="fw-semibold lh-sm">New Around v2.0</span>
                <i className="ai-arrow-right fs-lg ms-2 me-n1" />
              </Link>
              <h1 className="display-4 text-white pt-3 mt-3 mb-4">Powerful AI models to serve your business needs</h1>
              <p className="text-white opacity-70 fs-xl">
                Our robust platform is designed to handle large volumes of data and processing power, making it perfect for businesses of all sizes.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="d-none d-lg-block" style={{ height: 480 }} />
        <div className="d-lg-none" style={{ height: 400 }} />
        <div className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style={{ color: 'var(--ar-body-bg)' }}>
          <div className="position-relative start-50 translate-middle-x flex-shrink-0" style={{ width: 3774 }}>
            <svg width={3774} height={201} viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
