import cta from '@/assets/img/landing/influencer/cta.png'
import { Col, Container, Image, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <section className="position-relative overflow-hidden" data-bs-theme="light">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          data-aos="zoom-in"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <div
            className="container-start position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block"
            style={{
              transform: 'rotate(-180deg)',
              borderTopRightRadius: '7rem',
              borderBottomRightRadius: '7rem',
              background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)',
            }}
          />
          <div
            className="container-start position-absolute top-0 start-0 w-100 h-100 d-lg-block d-xxl-none"
            style={{
              transform: 'rotate(-180deg)',
              borderTopRightRadius: '4rem',
              borderBottomRightRadius: '4rem',
              background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)',
            }}
          />
          <div
            className="container-start position-absolute top-0 start-0 w-100 h-100 d-sm-block d-lg-none"
            style={{
              transform: 'rotate(-180deg)',
              borderTopRightRadius: '2.25rem',
              borderBottomRightRadius: '2.25rem',
              background: 'linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%)',
            }}
          />
        </div>
        <Container className="position-relative z-2 pt-5">
          <Row className="align-items-center justify-content-center pt-1 pt-sm-3 pt-md-4">
            <Col
              md={6}
              xl={5}
              className="offset-md-1 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="mx-auto" style={{ maxWidth: '25rem' }}>
                <h2 className="display-5 pb-5 mb-2">Jumpstart healthy change in your life today!</h2>
                <div className="d-flex">
                  <div className="pe-3 me-lg-3">
                    <button className="btn btn-lg btn-primary px-4" type="button">
                      <span className="text-light px-sm-2">
                        $14.<sup>99</sup> / month
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-lg bg-dark px-4" type="button">
                      <span className="text-light px-sm-2">
                        $89.<sup>99</sup> / year
                      </span>
                    </button>
                    <div className="d-flex align-items-center pt-2 mt-1">
                      <span className="badge bg-danger text-light rounded-pill me-2">Expires</span>
                      <span className="text-body fs-sm">01/12 8:00 pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={8}
              sm={6}
              md={5}
              xl={6}
              className="d-flex justify-content-end"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-offset={250}
              data-disable-parallax-down="md"
            >
              <Image src={cta} width={457} alt="Influencer" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
