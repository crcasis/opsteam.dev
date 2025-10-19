import cta from '@/assets/img/landing/yoga-studio/cta/bg.svg'
import img from '@/assets/img/landing/yoga-studio/cta/image.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="bg-primary rounded-5 overflow-hidden mt-2 mt-sm-4 mt-lg-5">
          <Image className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block" src={cta} width={186} alt="Background flower" />
          <Row className="position-relative z-2 align-items-center">
            <Col md={6} lg={5} className="offset-lg-1">
              <div className="text-center text-md-start py-5 px-4 px-sm-5 pe-md-0 ps-lg-4 ps-xl-5">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                  <span className="bg-white opacity-70 me-2 d-none d-md-block" style={{ width: 40, height: 1, marginTop: '-1px' }} />
                  <span className="fs-xs fw-semibold text-white opacity-70 text-uppercase">Special offer</span>
                </div>
                <h2 className="h1 text-white pb-2 pb-sm-3">Get 30% off when you buy an annual pass</h2>
                <Link className="btn btn-outline-light fs-base" to="">
                  Buy an annual pass
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <Image className="d-block mx-auto mx-md-0 mt-n4 mt-md-0" src={img} width={534} alt="Image" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default CTA
