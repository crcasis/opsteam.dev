import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer pt-lg-5 pt-4 pb-5">
        <Container className="pt-3 mt-md-2 mt-lg-3">
          <Row className="gy-md-5 gy-4 mb-md-5 mb-4 pb-lg-2">
            <Col lg={3}>
              <Link className="navbar-brand d-inline-flex align-items-center mb-lg-4 mb-3" to="/">
                <span className="text-primary flex-shrink-0 me-2">
                  <svg version="1.1" width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                    />
                  </svg>
                </span>
                <span className="text-nav">Around</span>
              </Link>
              <p className="mb-4 pb-lg-1 fs-xs text-body-secondary" style={{ maxWidth: 306 }}>
                The agency with extensive experience that creates marketing strategies for B2B and B2C companies.
              </p>
              <div className="d-flex mt-n3 ms-n3">
                <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" to="" aria-label="Facebook">
                  <i className="ai-facebook" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" to="" aria-label="Instagram">
                  <i className="ai-instagram" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle mt-3 ms-3" to="" aria-label="LinkedIn">
                  <i className="ai-linkedin" />
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={9} className="offset-xl-1">
              <Row className="row-cols-sm-4 row-cols-1">
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Industries
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Clients
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Reviews
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Case studies
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Contacts
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Help center
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        About
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Careers
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        News &amp; insights
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Industry forecasts
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="mailto:+15262200444">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0444
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="mailto:+15262200444">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0000
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="text-primary fw-semibold p-0" to="#">
                        example@gmail.com
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="nav fs-sm text-body-secondary">
            © All rights reserved. Made by
            <Link className="nav-link fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
              Stackbros
            </Link>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
