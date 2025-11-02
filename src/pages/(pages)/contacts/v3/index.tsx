import Header from '@/components/layout/TopBar'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Map from './components/Map'

const page = () => {
  return (
    <>
      <Header buynow />
      <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contacts v.3
            </li>
          </ol>
        </nav>
        <h1 className="display-2 pb-2 mb-sm-4 mb-lg-5">Contacts</h1>

        <div className="border-top pb-sm-3 pt-4">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-2">
            <Col className="pb-2">
              <h4 className="mb-lg-4">Address</h4>
              <p className="fs-lg fw-medium pb-3 mb-3">514 Magnolia St. Orlando, FL 32806</p>
              <Link className="btn btn-primary" to="#">
                <i className="ai-map-pin me-1" />
                Get directions
              </Link>
            </Col>
            <Col className="pb-2">
              <h4 className="mb-lg-4">Phone</h4>
              <ul className="list-unstyled mb-0">
                <li className="pb-1 mb-2">
                  <span className="d-block fs-sm text-body-secondary mb-1">Main office</span>
                  <Link className="nav-link fs-lg p-0" to="tel:+34629785212">
                    +34 629 785 212
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className="pb-2">
              <h4 className="mb-lg-4">Schedule</h4>
              <ul className="list-unstyled mb-0">
                <li className="pb-1 mb-2">
                  <span className="d-block fs-sm text-body-secondary mb-1">Mon - Thu</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">10:00</span>
                    <span className="border-top mx-4" style={{ width: 36, height: 1 }} />
                    <span className="text-nav fs-lg fw-medium">22:00</span>
                  </div>
                </li>
                <li className="pb-1 mb-2">
                  <span className="d-block fs-sm text-body-secondary mb-1">Fri - Sat</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">10:00</span>
                    <span className="border-top mx-4" style={{ width: 36, height: 1 }} />
                    <span className="text-nav fs-lg fw-medium">20:00</span>
                  </div>
                </li>
                <li>
                  <span className="d-block fs-sm text-body-secondary mb-1">Sun</span>
                  <div className="d-flex align-items-center">
                    <span className="text-nav fs-lg fw-medium">12:00</span>
                    <span className="border-top mx-4" style={{ width: 36, height: 1 }} />
                    <span className="text-nav fs-lg fw-medium">16:00</span>
                  </div>
                </li>
              </ul>
            </Col>
            <Col className="pb-2">
              <h4 className="mb-lg-4">Email</h4>
              <Link className="nav-link fs-lg p-0" to="mailto:contact@opsteam.com">
                contact@opsteam.com
              </Link>
            </Col>
          </Row>
        </div>
      </section>

      <Map />
      <Footer />
    </>
  )
}

export default page
