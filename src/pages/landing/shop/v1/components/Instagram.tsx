import img01 from '@/assets/img/landing/shop-1/instagram/01.jpg'
import img02 from '@/assets/img/landing/shop-1/instagram/02.jpg'
import img03 from '@/assets/img/landing/shop-1/instagram/03.jpg'
import img04 from '@/assets/img/landing/shop-1/instagram/04.jpg'
import img05 from '@/assets/img/landing/shop-1/instagram/05.jpg'
import img06 from '@/assets/img/landing/shop-1/instagram/06.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Instagram = () => {
  return (
    <>
      <section className="position-relative">
        <Container className="position-relative z-2">
          <Row className="align-items-center g-3 g-lg-4 mb-3 mb-lg-4">
            <Col sm={6} className="text-center order-sm-2">
              <div className="ai-instagram fs-2 text-primary mb-2 mb-md-3 mb-lg-4" />
              <h2 className="h1 mb-2 mb-sm-0">
                Follow us
                <br />
                <Link to="" className="text-primary text-decoration-none">
                  #aroundecor
                </Link>
              </h2>
            </Col>
            <Col sm={3} xs={6} className="order-sm-1">
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img01} alt="Instagram image" />
                </div>
              </Link>
            </Col>
            <Col xs={6} sm={3} className="order-sm-3">
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img02} alt="Instagram image" />
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="g-3 g-lg-4">
            <Col xs={6} sm={3}>
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img03} alt="Instagram image" />
                </div>
              </Link>
            </Col>
            <Col xs={6} sm={3}>
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img04} alt="Instagram image" />
                </div>
              </Link>
            </Col>
            <Col xs={6} sm={3}>
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img05} alt="Instagram image" />
                </div>
              </Link>
            </Col>
            <Col xs={6} sm={3}>
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                </div>
                <div className="zoom-effect-wrapper rounded-1">
                  <Image className="zoom-effect-img" src={img06} alt="Instagram image" />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
        <div className="d-none d-lg-block bg-dark position-absolute start-0 bottom-0 w-100" style={{ height: 155 }}>
          <div
            className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(255,255,255, .03)' }}
          ></div>
        </div>
        <div className="d-lg-none bg-dark position-absolute start-0 bottom-0 w-100" style={{ height: 80 }}>
          <div
            className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: 'rgba(255,255,255, .03)' }}
          />
        </div>
      </section>
    </>
  )
}

export default Instagram
