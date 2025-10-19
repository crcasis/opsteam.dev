import instagram01 from '@/assets/img/landing/yoga-studio/instagram/01.jpg'
import instagram02 from '@/assets/img/landing/yoga-studio/instagram/02.jpg'
import instagram03 from '@/assets/img/landing/yoga-studio/instagram/03.jpg'
import instagram04 from '@/assets/img/landing/yoga-studio/instagram/04.jpg'
import instagram05 from '@/assets/img/landing/yoga-studio/instagram/05.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Instagram = () => {
  return (
    <>
      <section className="position-relative pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="bg-secondary position-absolute start-0 bottom-0 w-100 d-none d-sm-block" style={{ height: 110 }} />
        <div className="bg-secondary position-absolute start-0 bottom-0 w-100 d-sm-none" style={{ height: 80 }} />
        <Container className="position-relative z-2 pt-2 pt-sm-4 pt-lg-5 mt-md-2 mt-lg-0">
          <h2 className="h1 text-center pb-3 mb-3 mb-lg-4">
            See more photos on&nbsp;
            <Link to="" className="text-primary text-decoration-none">
              Instagram
            </Link>
          </h2>
          <Row className="g-4">
            <Col md={8}>
              <Row className="g-3 g-sm-4">
                <Col xs={5}>
                  <Link className="d-block card-hover zoom-effect" to="">
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                      <i className="ai-instagram lead text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-5">
                      <Image className="zoom-effect-img" src={instagram01} alt="Instagram image" />
                    </div>
                  </Link>
                </Col>
                <Col xs={7}>
                  <Link className="d-block card-hover zoom-effect" to="">
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                      <i className="ai-instagram lead text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-5">
                      <Image className="zoom-effect-img" src={instagram02} alt="Instagram image" />
                    </div>
                  </Link>
                </Col>
                <Col xs={7}>
                  <Link className="d-block card-hover zoom-effect" to="">
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                      <i className="ai-instagram lead text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-5">
                      <Image className="zoom-effect-img" src={instagram04} alt="Instagram image" />
                    </div>
                  </Link>
                </Col>
                <Col xs={5}>
                  <Link className="d-block card-hover zoom-effect" to="">
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                      <i className="ai-instagram lead text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-5">
                      <Image className="zoom-effect-img" src={instagram05} alt="Instagram image" />
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="d-none d-md-block">
              <Link className="d-block card-hover zoom-effect" to="">
                <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                  <i className="ai-instagram lead text-white position-relative z-2" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
                </div>
                <div className="zoom-effect-wrapper rounded-5">
                  <Image className="zoom-effect-img" src={instagram03} alt="Instagram image" />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Instagram
