import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark position-relative py-5" data-bs-theme="dark">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, .03)' }} />
        <Container className="position-relative z-2 pb-xl-2 pt-2 pt-sm-3 pt-xl-4 pt-xxl-5">
          <Row className="pb-5 pt-md-3 pt-lg-4 mb-md-3 mb-lg-4">
            <Col md={6} xxl={5} className="pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
              <div className="h1 pb-3">
                Support us on Kickstarter and get&nbsp;
                <span
                  style={{
                    background: 'linear-gradient(90.72deg, #cbfdb1 3.49%, #acbff1 50.67%, #efa7ec 100.79%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  20% discount&nbsp;
                </span>
                on headphones
              </div>
              <div className="d-flex flex-wrap pb-4 pb-xl-5 mb-md-2 mb-lg-3">
                <div className="d-flex pe-3 me-3 mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2" />
                  <span className="text-body">$4,200 pledget</span>
                </div>
                <div className="d-flex pe-3 me-3 mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2" />
                  <span className="text-body">45 funded</span>
                </div>
                <div className="d-flex mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2" />
                  <span className="text-body">12 days to go</span>
                </div>
              </div>
              <Link className="btn btn-outline-light" to="">
                Support us on Kickstarter
              </Link>
            </Col>
            <Col md={5} xl={4} className="offset-md-1 offset-xl-2 offset-xxl-3">
              <Row className="row-cols-2">
                <Col>
                  <ul className="nav flex-column pb-4 mb-2 pb-md-5 mb-lg-1">
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="">
                        Features
                      </Link>
                    </li>
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="">
                        Colors
                      </Link>
                    </li>
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="">
                        Product details
                      </Link>
                    </li>
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex">
                    <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" to="#" aria-label="Instagram">
                      <i className="ai-instagram" />
                    </Link>
                    <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" to="#" aria-label="Facebook">
                      <i className="ai-facebook" />
                    </Link>
                    <Link className="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle" to="#" aria-label="YouTube">
                      <i className="ai-youtube" />
                    </Link>
                  </div>
                </Col>
                <Col>
                  <ul className="nav flex-column">
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="mailto:email@example.com">
                        email@example.com
                      </Link>
                    </li>
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="tel:+15262200459">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0459
                      </Link>
                    </li>
                    <li className="nav-item mt-1">
                      <Link className="nav-link py-1 px-0" to="tel:+15262200444">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0444
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="nav fs-sm mb-0">
            <span className="text-body-secondary">© All rights reserved. Made by</span>
            <Link className="nav-link fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
              Stackbros
            </Link>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
