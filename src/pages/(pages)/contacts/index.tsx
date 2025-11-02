import Header from '@/components/layout/TopBar'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Form from './components/Form'

const page = () => {
  return (
    <>
      <Header buynow />
      <section className="bg-secondary py-5">
        <Container className="pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <h3 className="display-2">Have we awakened your interest?</h3>
          <p className="fs-lg pb-4 mb-2 mb-sm-3">You think we can support you with your challenges and would like to get an offer? Get in touch Opsteam!</p>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
            <Col>
              <Card className="border-0 h-100">
                <CardBody>
                  <h4 className="card-title mb-4">Address</h4>
                  <p className="fs-lg fw-medium pb-3 mb-3">Madrid, Spain</p>
                  <Link className="btn btn-sm btn-outline-primary" to="">
                    <i className="ai-map-pin me-1" />
                    Get directions
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="border-0 h-100">
                <CardBody>
                  <h4 className="card-title mb-4">Phone</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">Office</span>
                      <Link className="nav-link fs-lg p-0" to="tel:+34629785212">
                        +34 629 785 212
                      </Link>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="border-0 h-100">
                <CardBody>
                  <h4 className="card-title mb-4">Schedule</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">Mon - Thu</span>
                      <div className="d-flex align-items-center">
                        <span className="text-nav fs-lg fw-medium">10:00</span>
                        <span className="border-top mx-4" style={{ width: 36, height: 1 }} />
                        <span className="text-nav fs-lg fw-medium">22:00</span>
                      </div>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">Fri - Sat</span>
                      <div className="d-flex align-items-center">
                        <span className="text-nav fs-lg fw-medium">10:00</span>
                        <span className="border-top mx-4" style={{ width: 36, height: 1 }} />
                        <span className="text-nav fs-lg fw-medium">20:00</span>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="border-0 h-100">
                <CardBody>
                  <h4 className="card-title mb-4">Email</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="pb-1 mb-2">
                      <span className="d-block fs-sm text-body-secondary mb-1">Main office</span>
                      <Link className="nav-link fs-lg p-0" to="mailto:office@example.com">
                        office@example.com
                      </Link>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                      <Link className="nav-link fs-lg p-0" to="mailto:reception@example.com">
                        reception@example.com
                      </Link>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <div style={{ height: 250 }} />
      </section>
      <Form />
      <Footer />
    </>
  )
}

export default page
