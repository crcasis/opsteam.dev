import wawe from '@/assets/img/landing/opsteam/footer-wave.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-secondary pt-4 pb-2 pb-md-5 pt-sm-5">
        <Container fluid className="pb-1 pb-md-0 px-md-5">
          <div
            className="bg-dark rounded-5 position-relative overflow-hidden w-100 py-5 px-3 px-sm-4 px-xl-5 mx-auto"
            style={{ maxWidth: 1660 }}
            data-bs-theme="dark"
          >
            <div className="position-absolute top-50 start-50 translate-middle" style={{ width: 1664 }}>
              <Image src={wawe} alt="Wave" />
            </div>
            <Container className="position-relative z-2 pt-md-3 pt-lg-4 pt-xl-5 pb-2">
              <Row className="pb-2">
                <Col lg={4} xxl={3} className="pb-2 pb-lg-0 mb-4 mb-lg-0">
                  <div className="navbar-brand text-light py-0 me-0 pb-1 mb-3">
                    <span className="text-primary flex-shrink-0 me-2">
                      <svg version="1.1" width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="currentColor"
                          d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                        />
                      </svg>
                    </span>
                    <span className="text-white opacity-90">Opsteam</span>
                  </div>
                  <p className="text-body fs-sm mb-4">Expert DevOps and Kubernetes consulting services based in Madrid</p>
                  <div className="input-group input-group-sm rounded-pill">
                    <input className="form-control" type="text" placeholder="Email address" />
                    <button className="btn btn-primary rounded-pill" type="button">
                      Subscribe
                    </button>
                  </div>
                </Col>
                <Col sm={4} lg={2} className="offset-lg-1 offset-xl-2 offset-xxl-3 mb-4 mb-sm-0">
                  <h6 className="fw-bold">Company</h6>
                  <ul className="nav flex-column fs-sm">
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col sm={4} lg={2} className="mb-4 mb-sm-0">
                  <h6 className="fw-bold">Support</h6>
                  <ul className="nav flex-column fs-sm">
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Help center
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Terms of service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Legal
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col sm={4} lg={3} xl={2}>
                  <h6 className="fw-bold">Contact us</h6>
                  <ul className="nav flex-column fs-sm">
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="mailto:email@example.com">
                        email@example.com
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="tel:+15262200459">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0459
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fw-normal px-0 py-1" to="tel:+15262200444">
                        +&nbsp;1&nbsp;526&nbsp;220&nbsp;0444
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
              <div className="d-sm-flex align-items-center justify-content-between pt-4 pt-md-5 mt-2 mt-md-0 mt-lg-2 mt-xl-4">
                <div className="d-flex justify-content-center order-sm-2 me-md-n2">
                  <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" to="#" aria-label="Instagram">
                    <i className="ai-instagram" />
                  </Link>
                  <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" to="#" aria-label="Facebook">
                    <i className="ai-facebook" />
                  </Link>
                  <Link className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" to="#" aria-label="LinkedIn">
                    <i className="ai-linkedin" />
                  </Link>
                </div>
                <p className="nav fs-sm order-sm-1 text-center text-sm-start pt-4 pt-sm-0 mb-0 me-4">
                  <span className="text-body-secondary">© All rights reserved. Made by</span>
                  <Link className="nav-link fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
                    Stackbros
                  </Link>
                </p>
              </div>
            </Container>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
