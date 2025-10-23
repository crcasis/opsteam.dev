import wave from '@/assets/img/landing/opsteam/hero-wave.png'
import Jarallax from '@/components/Jarallax'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="container-fluid py-5 mt-4 px-sm-4 px-md-5">
        <div
          className="bg-dark rounded-5 position-relative overflow-hidden py-5 px-3 px-sm-4 px-xl-5 mt-2 mx-md-n3 mx-lg-auto"
          style={{ maxWidth: 1660 }}
          data-bs-theme="dark"
        >
          <div className="jarallax position-absolute top-0 start-0 w-100 h-100 mt-5" data-jarallax data-speed="0.6">
            <Jarallax className="jarallax-img position-absolute w-100 h-100" style={{ backgroundImage: `url(${wave})` }} />
          </div>
          <div className="bg-white position-absolute top-0 start-0 w-100 h-100" style={{ opacity: '2%' }} />
          <Container className="position-relative z-2 pt-xl-4 pt-xxl-5 pb-sm-2">
            <Row className="pt-md-3 pt-lg-5">
              <Col lg={5} xxl={6} className="pb-lg-5 mb-xl-5">
                <h1 className="display-3 text-center text-lg-start mb-xxl-5">
                  Innovative DevOps and <span className="text-primary">Kubernetes Consulting</span>
                </h1>
              </Col>
              <Col lg={5} xl={4} className="offset-lg-1 offset-xxl-2 d-flex flex-column pt-2 pt-md-4">
                <p className="text-body fs-xl text-center text-lg-start pb-2 pb-md-0 mb-4 mb-md-5">
                  Opsteam is the first choice for DevOps, Kubernetes, and cloud native consulting based in Madrid. With us, expertise and community engagement go hand in hand. We design tailor-made solutions to perfect your development processes and cloud infrastructure
                </p>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start pb-3 pb-sm-5">
                  <Link className="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto me-sm-3 me-xl-4 mb-2 mb-sm-0" to="/contacts/v1">
                    BOOK AN APPOINTMENT
                  </Link>
                  <Link className="btn btn-lg btn-link text-white w-100 w-sm-auto px-2" to="/portfolio/list-v2">
                    Case Studies
                    <i className="ai-arrow-right ms-2" />
                  </Link>
                </div>
                <ul className="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
                  <li className="d-inline-flex align-items-center text-body text-nowrap pt-1 me-4">
                    <i className="ai-check-alt text-primary fs-xl me-2" />
                    Kubernetes Partners
                  </li>
                  <li className="d-inline-flex align-items-center text-body text-nowrap pt-1">
                    <i className="ai-check-alt text-primary fs-xl me-2" />
                    Cloud Experts
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Hero
