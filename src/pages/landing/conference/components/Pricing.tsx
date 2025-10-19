import noise from '@/assets/img/landing/conference/noise.png'
import { Card, CardBody, CardFooter, Col, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <>
      <section className="container" id="tickets">
        <Row className="border border-light rounded-5 overflow-hidden g-0">
          <Col md={7} xl={8}>
            <Card className="h-100 bg-dark border-0 rounded-0 py-md-3 py-lg-4 py-xl-5 px-3 px-sm-4 px-lg-5" data-bs-theme="dark">
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light', opacity: '12%' }}
              />
              <CardBody className="position-relative z-2 py-5 px-2 mx-auto" style={{ maxWidth: 732 }}>
                <h2 className="h1">In-Person Experience</h2>
                <p className="pb-3 mb-lg-4">
                  Aenean sollicitudin sit convallis auctor egestas urna massa semper ultrices libero suspendisse venenatis urna ac in vitae pharetra
                  aliquam.
                </p>
                <div className="display-3 text-primary fw-bold pb-3 mb-1 mb-lg-3">$299</div>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Non egestas pretium iaculis venenatis ipsum cras enim et amet.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Et purus quis laoreet ipsum.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Suspendisse turpis vehicula id ornare ut ut sollicitudin tempus vel.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Justo, quam tortor leo sed varius arcu sit rhoncus.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Sed maecenas sit vestibulum id ornare habitasse sit scelerisque.
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="w-100 border-0 pt-0 pb-5 px-2 mx-0">
                <button className="btn btn-lg btn-primary" type="button">
                  Buy ticket
                </button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={5} xl={4} className="border-top border-md-0 border-start-md border-light">
            <Card className="h-100 bg-secondary border-0 rounded-0 py-md-3 py-lg-4 py-xl-5 px-3 px-sm-4 px-lg-5">
              <CardBody className="py-5 px-2">
                <h2 className="h1">Live Stream</h2>
                <p className="pb-3 mb-lg-4">Sit facilisis viverra ullamcorper vestibulum nunc tincidunt egestas.</p>
                <div className="display-3 text-primary fw-bold pb-3 mb-1 mb-lg-3">$89</div>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Integer lacinia quisque etiam quis morbi aliquam commodo.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Neque, ullamcorper elit sit natoque.
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-circle-check text-primary fs-xl mt-1 me-2" />
                    Sed orci, lacus, nunc vestibulum mi vel etiam pulvinar erat.
                  </li>
                </ul>
              </CardBody>
              <CardFooter className="w-100 border-0 pt-0 pb-5 px-2 mx-0">
                <button className="btn btn-lg btn-primary" type="button">
                  Buy ticket
                </button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Pricing
