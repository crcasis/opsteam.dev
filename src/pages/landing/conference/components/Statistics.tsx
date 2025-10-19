import { Col, Container, Row } from 'react-bootstrap'

const Statistics = () => {
  return (
    <>
      <section className="bg-secondary position-relative py-4 py-md-5">
        <Container className="position-relative z-2">
          <Row className="row-cols-2 row-cols-md-4">
            <Col>
              <div className="py-3 my-lg-2 my-xl-3">
                <div className="text-dark display-4 mb-1">16</div>
                <p className="fs-xl mb-0">Speakers</p>
              </div>
            </Col>
            <Col>
              <div className="py-3 ps-xl-4 my-lg-2 my-xl-3">
                <div className="text-dark display-4 mb-1">12+</div>
                <p className="fs-xl mb-0">Hours on stage</p>
              </div>
            </Col>
            <Col className="d-flex justify-content-md-center">
              <div className="py-3 my-lg-2 my-xl-3">
                <div className="text-dark display-4 mb-1">1,5k</div>
                <p className="fs-xl mb-0">Offline attendees</p>
              </div>
            </Col>
            <Col className="d-flex justify-content-md-end">
              <div className="py-3 pe-xl-4 my-lg-2 my-xl-3">
                <div className="text-dark display-4 mb-1">100%</div>
                <p className="fs-xl mb-0">Good times</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Statistics
