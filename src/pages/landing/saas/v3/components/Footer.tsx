import appstoredark from '@/assets/img/market/appstore-dark.svg'
import appstorelight from '@/assets/img/market/appstore-light.svg'
import googleplaydark from '@/assets/img/market/googleplay-dark.svg'
import googleplaylight from '@/assets/img/market/googleplay-light.svg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container className="py-5 my-sm-2 my-md-3 my-lg-4 my-xl-5">
          <Row className="align-items-start text-center text-lg-start py-xxl-3">
            <Col lg={6} className="pb-1 pb-sm-2 pb-lg-0 mb-4 mb-lg-0">
              <h4 className="fw-bold pb-lg-1 mb-2 mb-sm-3">If you have questions email us at</h4>
              <Link className="h1 text-primary" to="mailto:email@example.com">
                email@example.com
              </Link>
            </Col>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-end">
              <Link className="btn btn-dark btn-lg px-3 py-2" to="#">
                <Image className="d-dark-mode-none mx-1" src={appstorelight} width={136} alt="App Store" />
                <Image className="d-none d-dark-mode-block mx-1" src={appstoredark} width={136} alt="App Store" />
              </Link>
              <Link className="btn btn-dark btn-lg px-3 py-2 ms-3 ms-md-4" to="#">
                <Image className="d-dark-mode-none mx-1" src={googleplaylight} width={135} alt="Google Play" />
                <Image className="d-none d-dark-mode-block mx-1" src={googleplaydark} width={135} alt="Google Play" />
              </Link>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="py-4">
          <Row className="align-items-center py-2 py-sm-3">
            <Col md={4} className="order-md-2 mb-4 mb-md-0">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle" to="" aria-label="Facebook">
                  <i className="ai-facebook" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle" to="" aria-label="LinkedIn">
                  <i className="ai-linkedin" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle" to="" aria-label="Telegram">
                  <i className="ai-telegram" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-youtube rounded-circle" to="" aria-label="YouTube">
                  <i className="ai-youtube" />
                </Link>
              </div>
            </Col>
            <Col md={8} className="order-md-1">
              <div className="d-sm-flex text-nowrap justify-content-center justify-content-md-start">
                <div className="nav flex-nowrap justify-content-center justify-content-sm-start order-sm-2 mb-3 mb-sm-0">
                  <Link className="nav-link fw-normal py-0 px-3" to="">
                    Terms &amp; Conditions
                  </Link>
                  <Link className="nav-link fw-normal py-0 px-3" to="">
                    Privacy Policy
                  </Link>
                </div>
                <p className="text-body-secondary order-sm-1 text-center pe-3 mb-0">© All rights reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
