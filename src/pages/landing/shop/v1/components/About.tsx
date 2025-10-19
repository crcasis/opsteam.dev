import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="pt-2 py-md-4">
          <Col lg={10} xl={9}>
            <p className="lead text-dark pb-md-2 pb-lg-3 mb-2">
              We do not believe that one style suits everyone. That is why we choose three design directions for the new season. Get inspired by new
              trends and create an atmosphere of coziness and comfort in your own home. On the site you will find all the wonderful decor items from
              photo frames to tablecloths for the dining table.
            </p>
            <Link className="btn btn-lg btn-link px-0" to="">
              About us
              <i className="ai-arrow-right ms-2" />
            </Link>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default About
