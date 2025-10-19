import hero01 from '@/assets/img/landing/business-consulting/hero/01.png'
import hero02 from '@/assets/img/landing/business-consulting/hero/02.png'
import hero03 from '@/assets/img/landing/business-consulting/hero/03.png'
import Parallax from '@/components/Parallax'
import { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('bg-secondary')

    return () => {
      document.body.classList.remove('bg-secondary')
    }
  }, [])
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
          <Row className="align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
            <Col lg={7} className="order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
              <Parallax>
                <div className="parallax me-lg-n4 me-xl-n5" style={{ maxWidth: 667 }}>
                  <div className="parallax-layer" data-depth="0.1">
                    <Image src={hero01} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.2">
                    <Image src={hero02} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="0.25">
                    <Image src={hero03} alt="Layer" />
                  </div>
                </div>
              </Parallax>
            </Col>
            <Col lg={5} className="order-lg-1">
              <h1 className="display-3 text-center text-lg-start pb-sm-2 pb-md-3">The effective solutions for your business</h1>
              <p className="fs-lg text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style={{ maxWidth: 420 }}>
                We are a team who creates marketing strategies for B2B and B2C companies.
              </p>
              <div className="input-group mx-auto mx-lg-0" style={{ maxWidth: 420 }}>
                <span className="input-group-text text-body-secondary">
                  <i className="ai-mail" />
                </span>
                <input className="form-control" type="email" placeholder="Enter your email" />
                <button className="btn btn-primary" type="button">
                  Book a call
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
