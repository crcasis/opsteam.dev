import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="bg-primary py-4" data-bs-theme="dark">
          <Container className="fs-lg text-body text-center">
            Our dedicated team of nearly 2,300 staff members is prepared to assist you.&nbsp;
            <Link className="text-white" to="">
              Talk to our finance agent
            </Link>
          </Container>
        </div>
        <div className="bg-secondary py-5">
          <Container className="pt-sm-2 pt-md-3 pt-lg-4">
            <Row className="gy-md-5 gy-4 mb-md-5 mb-4 pb-lg-2">
              <Col lg={3}>
                <Link className="navbar-brand d-inline-flex align-items-center mt-0 mb-lg-4 mb-3" to="/">
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
                <p className="mb-4 pb-lg-3 fs-xs text-body-secondary" style={{ maxWidth: 306 }}>
                  Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat
                  massa tellus lorem enim aenean phasellus in hendrerit
                </p>
                <div className="mt-n3 ms-n3 d-flex gap-1">
                  <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" to="#" aria-label="Facebook">
                    <i className="ai-facebook" />
                  </Link>
                  <Link className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle mt-3 ms-3" to="#" aria-label="LinkedIn">
                    <i className="ai-linkedin" />
                  </Link>
                  <Link className="btn btn-secondary btn-icon btn-sm btn-x rounded-circle mt-3 ms-3" to="#" aria-label="X">
                    <i className="ai-x" />
                  </Link>
                </div>
              </Col>
              <Col xl={8} className="offset-xl-1 col-lg-9">
                <Row className="row-cols-sm-4 row-cols-1">
                  <Col>
                    <ul className="nav flex-column mb-0">
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          About us
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Our team
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Customer reviews
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Latest news
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="nav flex-column mb-0">
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Health insurance
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Car insurance
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Travel insurance
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="nav flex-column mb-0">
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Licensing
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Privacy policy
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="">
                          Terms of use
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="nav flex-column mb-0 ">
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="tel:+15262200444">
                          +&nbsp;1&nbsp;526&nbsp;220&nbsp;0444
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="tel:+15262200444">
                          +&nbsp;1&nbsp;526&nbsp;220&nbsp;0000
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link className="nav-link p-0" to="mailto:email@example.com">
                          email@example.com
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="fs-sm text-body-secondary">
              © All rights reserved. Made by
              <Link to="https://stackbros.in/" target="_blank" rel="noopener" className="text-dark text-decoration-none opacity-90">
                Stackbros
              </Link>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
