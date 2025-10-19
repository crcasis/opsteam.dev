import { Col, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <section className="container pt-5 pb-4 pb-lg-0 my-md-2 my-lg-5">
        <Row className="pt-5 pb-4 pb-lg-5 mb-2 mt-1 mt-sm-2 my-xl-3">
          <Col md={7}>
            <h1 className="display-3 fw-medium text-uppercase mb-0">Blog about life, work and business</h1>
          </Col>
          <Col md={5} lg={4} className="offset-lg-1 pt-3 pt-md-2">
            <p className="mb-0">
              A lot of useful information about health, beauty, travel and life in our blog. Simple and accessible about all important aspects of
              life.
            </p>
          </Col>
        </Row>
        <hr />
      </section>
    </>
  )
}

export default Hero
