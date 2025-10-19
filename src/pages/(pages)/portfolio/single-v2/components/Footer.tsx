import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark position-relative py-4 py-md-5">
        <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255,255,255, .03)' }} />
        <Container className="position-relative z-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5" data-bs-theme="dark">
          <Row className="py-md-3 mb-4 mb-md-5">
            <Col md={7} lg={6} xxl={5} className="mb-sm-4 mb-md-0">
              <h2 className="display-4 mb-4 mb-md-5">Let's start building brand together</h2>
              <div className="d-sm-flex align-items-center">
                <Link className="btn btn-lg btn-primary rounded-0 me-sm-3 me-lg-4" to="">
                  Let's work together
                </Link>
                <p className="text-body fs-sm py-3 py-sm-0 ps-sm-2 mb-0">Managers will contact you to discuss the project and select the best team</p>
              </div>
            </Col>
            <Col md={5} className="offset-lg-1 offset-xxl-2 d-flex flex-column">
              <div className="nav mx-n2 mx-lg-n4 mb-2 mb-sm-3">
                <Link className="nav-link text-primary px-2 px-lg-4" to="mailto:example@email.com">
                  example@email.com
                </Link>
                <Link className="nav-link px-3 px-lg-4" to="">
                  Privay policy
                </Link>
              </div>
              <div className="nav flex-column mb-3 mb-sm-4">
                <Link className="nav-link py-1 px-0" to="tel:+15262200444">
                  +&nbsp;1&nbsp;526&nbsp;220&nbsp;0444
                </Link>
                <Link className="nav-link py-1 px-0" to="tel:+15262200000">
                  +&nbsp;1&nbsp;526&nbsp;220&nbsp;0000
                </Link>
              </div>
              <div className="nav mx-n2 mt-auto">
                <Link className="nav-link py-1 px-2 me-2" to="">
                  instagram
                </Link>
                <Link className="nav-link py-1 px-2 me-2" to="">
                  behance
                </Link>
                <Link className="nav-link py-1 px-2 me-2" to="">
                  medium
                </Link>
                <Link className="nav-link py-1 px-2" to="">
                  dribbble
                </Link>
              </div>
            </Col>
          </Row>
          <p className="nav fs-sm pt-3 pb-2 pb-lg-0 mb-0">
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
