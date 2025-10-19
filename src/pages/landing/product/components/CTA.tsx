import cta01 from '@/assets/img/landing/product/cta/01.png'
import cta02 from '@/assets/img/landing/product/cta/02.png'
import { Col, Image, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <section className="container py-sm-2 py-md-3 py-lg-4 py-xl-5 mb-2 mb-sm-3 mb-md-4 mb-xxl-5">
        <Row className="align-items-center py-5">
          <Col md={6} lg={7} xxl={8} className="order-md-2 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <div className="position-relative ms-auto" style={{ maxWidth: 823 }}>
              <Image className="d-block" src={cta01} alt="Image" data-aos="fade-up" data-aos-duration={600} data-aos-offset={300} />
              <Image
                className="d-block position-absolute top-0 start-0"
                src={cta02}
                alt="Image"
                data-aos="fade-up"
                data-aos-duration={900}
                data-aos-offset={300}
              />
            </div>
          </Col>
          <Col md={6} lg={5} xxl={4} className="order-md-1">
            <h2 className="h1 pb-md-2 pb-xl-3">Headphones that fit your ears perfectly</h2>
            <p className="mb-4">
              Adipiscing posuere dui, amet, augue nisl dictum justo enim sed neque congue non quam ultrices interdum vitae vestibulum turpis nullam
              netus sed aliquam.
            </p>
            <div className="d-flex pb-2 pb-lg-0 mb-4 mb-lg-5">
              <div className="me-5">
                <h3 className="mb-1">60-200 Hz</h3>
                <p className="fs-sm mb-0">frequency range</p>
              </div>
              <div>
                <h3 className="mb-1">0.75 kg</h3>
                <p className="fs-sm mb-0">weight, kg</p>
              </div>
            </div>
            <a className="btn btn-dark" href="#">
              Support us on Kickstarter
            </a>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default CTA
