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
                Contacts v.1
              </li>
            </ol>
          </nav>
          <h1 className="display-2">Contacts</h1>
          <p className="fs-lg pb-4 mb-2 mb-sm-3">Get in touch with us by completing the below form or call us now</p>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
            <Col>
              <Card className="border-0 h-100">
                <CardBody>
                  <h4 className="card-title mb-4">Address</h4>
                  <p className="fs-lg fw-medium pb-3 mb-3">514 Magnolia St. Orlando, FL 32806</p>
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
                      <span className="d-block fs-sm text-body-secondary mb-1">Main office</span>
                      <Link className="nav-link fs-lg p-0" to="tel:+178632256033">
                        +1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;33
                      </Link>
                    </li>
                    <li>
                      <span className="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                      <Link className="nav-link fs-lg p-0" to="tel:+178630056044">
                        +1&nbsp;(786)&nbsp;300&nbsp;560&nbsp;44
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
