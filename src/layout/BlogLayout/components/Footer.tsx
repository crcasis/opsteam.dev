import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer pt-lg-5 pt-4 pb-5">
        <Container>
          <Row className="gy-md-5 gy-4 mb-md-5 mb-4 pb-lg-2">
            <Col lg={3}>
              <Link className="navbar-brand d-inline-flex align-items-center mb-lg-4 mb-3" to="">
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
              <div className="d-flex mt-n3 ms-n3">
                <Link className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" to="" aria-label="Instagram">
                  <i className="ai-instagram" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" to="" aria-label="Facebook">
                  <i className="ai-facebook" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle mt-3 ms-3" to="" aria-label="LnkedIn">
                  <i className="ai-linkedin" />
                </Link>
              </div>
            </Col>
            <Col xl={8} className="offset-xl-1 col-lg-9">
              <Row className="row-cols-sm-4 row-cols-1">
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Relevant blogs
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Top author
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
                        Business
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Marketing
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Design
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Psychology
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Books
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Inspiration
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Analytics
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Ecommerce
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Brand strategy
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Travels
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0 text-primary" to="">
                        example@gmail.com
                      </Link>
                    </li>
                    <li className="nav-item mb-2">
                      <Link className="nav-link p-0" to="">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <p className="nav fs-sm mb-0">
            <span className="text-body-secondary">© All rights reserved. Made by</span>
            <Link className="nav-link d-inline fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
              Stackbros
            </Link>
          </p>
          <div className="pt-4 pt-lg-0" />
        </Container>
      </footer>
    </>
  )
}

export default Footer
