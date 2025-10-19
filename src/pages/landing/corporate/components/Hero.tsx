import hero from '@/assets/img/landing/corporate/hero-bg.jpg'
import Jarallax from '@/components/Jarallax'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" data-jarallax data-speed="0.65">
        <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${hero})` }} />
        <Container fluid className="position-relative z-2 py-5 my-md-3 my-lg-5">
          <Row className="pb-3 pt-4 pt-sm-5">
            <Col md={9} lg={7} xl={6} xxl={5} className="offset-lg-1 pt-5">
              <Card className="border-0 bg-primary rounded-1 py-2 py-sm-3 py-md-4" data-bs-theme="dark">
                <CardBody>
                  <div className="mx-auto pt-2" style={{ maxWidth: 535 }}>
                    <h1 className="display-5 mb-4">The effective solutions for your business</h1>
                    <p className="fs-lg pb-4 pb-lg-5 mb-2" style={{ maxWidth: 410 }}>
                      We are a team that creates business strategies for B2B and B2C companies.
                    </p>
                    <div className="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                      <Link className="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" to="">
                        Book a free consultation
                      </Link>
                      <Link className="d-flex align-items-center fw-semibold text-white text-decoration-none px-3 py-2" to="tel:+15262200459">
                        <i className="ai-phone fs-xl me-2" />
                        +1&nbsp;526&nbsp;220&nbsp;0459
                      </Link>
                    </div>
                    <ul className="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                      <li className="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3">
                        <i className="ai-check-alt text-white fs-4 mt-n1 me-2" />
                        Full spectrum of services
                      </li>
                      <li className="d-flex">
                        <i className="ai-check-alt text-white fs-4 mt-n1 me-2" />
                        Flexible work terms
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
