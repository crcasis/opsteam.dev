import map from '@/assets/img/landing/saas-4/map.png'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Map = () => {
  return (
    <>
      <section className="bg-dark py-5" data-bs-theme="dark">
        <Container className="pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
          <Row className=" pt-md-2 pt-lg-3 pt-xl-4 pb-lg-2 pb-xl-3">
            <Col md={6}>
              <h2 className="h1 pe-xxl-5 me-xl-4 mb-md-0">
                Our <span className="text-warning">data centers</span> spread all over the world. Get access to the API from anywhere
              </h2>
            </Col>
            <Col md={6} xl={5} className="offset-xl-1">
              <p className="text-body fs-xl mb-0">
                Our data centers are a key component of our global infrastructure, providing reliable and scalable computing resources to customers
                around the world. We offer a highly distributed and resilient platform that can support the most demanding workloads.
              </p>
            </Col>
          </Row>
          <div className="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
            <Image src={map} alt="Map" />
          </div>
        </Container>
      </section>
    </>
  )
}

export default Map
