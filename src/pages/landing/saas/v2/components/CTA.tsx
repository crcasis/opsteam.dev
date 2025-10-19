import saasdark from '@/assets/img/landing/saas-2/dash-dark.png'
import saaslight from '@/assets/img/landing/saas-2/dash-light.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="pt-2 pt-md-0">
        <div className="position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
          <div
            className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-5 d-md-none"
            data-aos="zoom-in"
            data-aos-duration={700}
            data-aos-offset={300}
          />
          <div
            className="bg-primary position-absolute top-0 start-0 w-100 h-100 d-none d-md-block"
            style={{ borderRadius: '5rem 5rem 0 0' }}
            data-aos="zoom-in"
            data-aos-duration={700}
            data-aos-offset={300}
          />
          <Container className="px-4 px-sm-5 px-md-0 position-relative z-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5" data-bs-theme="dark">
            <Row className="justify-content-center" data-aos="fade-up" data-aos-duration={500} data-aos-offset={300}>
              <Col md={10} lg={8} xl={7} xxl={6} className="text-center py-5">
                <h2 className="display-1 mb-4">New life for data begins today</h2>
                <p className="text-body fs-xl pb-3 mb-3 mb-lg-4">
                  Using basic data skills you can analysis and improve your business indicators with Around.
                </p>
                <div className="d-sm-flex justify-content-center">
                  <Link className="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0" to="">
                    Start free 14-day trial
                  </Link>
                  <Link className="btn btn-lg btn-outline-warning rounded-pill w-100 w-sm-auto" to="">
                    Request a demo
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="position-relative z-2 px-md-5">
            <Image className="d-block d-dark-mode-none mx-auto" src={saaslight} width={1076} alt="Image" />
            <Image className="d-none d-dark-mode-block mx-auto" src={saasdark} width={1076} alt="Image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
