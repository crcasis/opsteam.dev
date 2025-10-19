import { Col, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section className="container py-md-4 py-lg-5 mb-xl-3 mb-xxl-5">
        <Row className="pt-sm-2">
          <Col xl={10}>
            <p className="fs-2 text-dark pb-md-2 mb-lg-5">
              From the first stages of developing a project plan idea, we pay special attention
              <span className="fw-semibold">to design solutions to existing problems,</span> create brands that become part of history, and create a
              digital skill that harnesses the power of <span className="fw-semibold">creativity and humanity.</span>
            </p>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col sm={4} lg={3} className="mb-3">
            <h3 className="display-1 mb-0 mb-sm-1">16</h3>
            <span className="fs-sm">Awards in various industries</span>
          </Col>
          <Col sm={4} lg={3} className="mb-3">
            <h3 className="display-1 mb-0 mb-sm-1">22</h3>
            <span className="fs-sm">Full time specialists</span>
          </Col>
          <Col sm={4} lg={3} className="mb-2 mb-sm-3">
            <h3 className="display-1 mb-0 mb-sm-1">205</h3>
            <span className="fs-sm">Happy clients all over the world</span>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default About
