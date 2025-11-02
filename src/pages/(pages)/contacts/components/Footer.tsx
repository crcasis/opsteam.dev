import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer py-5">
        <Container className="pt-md-2 pt-lg-3 pt-xl-4">
          <Row className="pb-5 pt-sm-2 mb-lg-2">
            <Col md={12} lg={3} className="pb-2 pb-lg-0 mb-4 mb-lg-0">
              <Link className="navbar-brand py-0 mb-3 mb-lg-4" to="/">
                <span className="text-primary flex-shrink-0 me-2">
                  <svg version="1.1" width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                    />
                  </svg>
                </span>
                <span className="text-nav">Opsteam</span>
              </Link>
              <p className="fs-sm pb-2 pb-lg-3 mb-3">Cloud architects and Infrastructure experts to design your platform</p>
              <div className="d-flex gap-3">
                <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle" to="" aria-label="Facabook">
                  <i className="ai-facebook" />
                </Link>
                <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle" to="" aria-label="Instagram">
                  <i className="ai-instagram" />
                </Link>
                <Link className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" to="" aria-label="LinkedIn">
                  <i className="ai-linkedin" />
                </Link>
              </div>
            </Col>
            <Col sm={3} lg={2} className="offset-xl-1 mb-4 mb-sm-0">
              <ul className="nav flex-column">
                <li>
                  <Link className="nav-link py-1 px-0" to="">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link py-1 px-0" to="">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link className="nav-link py-1 px-0" to="">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link className="nav-link py-1 px-0" to="">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={4} lg={2} className="mb-4 mb-sm-0">
              <ul className="nav flex-column">
                <li>
                  <Link className="nav-link py-1 px-0" to="mailto:contact@example.com">
                    contact@example.com
                  </Link>
                </li>
                <li>
                  <Link className="nav-link py-1 px-0" to="tel:+15262200459">
                    +1&nbsp;526&nbsp;220&nbsp;0459
                  </Link>
                </li>
                <li>
                  <Link className="nav-link py-1 px-0" to="tel:+15262200444">
                    +1&nbsp;526&nbsp;220&nbsp;0444
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={5} lg={4} xl={3} className="offset-lg-1">
              <h3 className="h6 mb-2">Stay up to date</h3>
              <p className="fs-sm">Subscribe to our news and case studies</p>
              <div className="input-group input-group-sm">
                <input className="form-control" type="text" placeholder="Your email" />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </Col>
          </Row>
          <p className="nav fs-sm mb-0">
            <span className="text-body-secondary">© All rights reserved. Made by</span>
            <Link className="nav-link d-inline fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
              Opsteam.dev
            </Link>
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
