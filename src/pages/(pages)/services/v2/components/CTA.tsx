import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="position-relative mt-n5 mt-lg-0">
        <div className="bg-secondary position-absolute bottom-0 start-0 w-100" style={{ height: 'calc(100% - 3rem)' }} />
        <Container className="position-relative z-2">
          <Row>
            <Col lg={6} className="py-5 mb-sm-2 mb-md-3 mb-lg-5 mt-3 mt-sm-4 mt-md-5">
              <h2 className="h1 text-center text-lg-start pt-3 mt-3 mb-4">
                Become part <br className="d-none d-lg-inline" />
                of our team
              </h2>
              <div className="d-flex justify-content-between mx-auto mx-lg-0" style={{ maxWidth: 370 }}>
                <ul className="ps-4 me-3">
                  <li className="mt-2">Financial analyst</li>
                  <li className="mt-2">Business analyst</li>
                  <li className="mt-2">Software tester</li>
                </ul>
                <ul className="ps-4">
                  <li className="mt-2">Head of marketing</li>
                  <li className="mt-2">Strategy advisor</li>
                  <li className="mt-2">Lead UX designer</li>
                </ul>
              </div>
              <div className="text-center text-lg-start pt-4">
                <Link className="btn btn-outline-dark" to="">
                  Apply for a job
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-primary d-flex flex-column align-items-center justify-content-center position-relative h-100 rounded-5 rounded-bottom-0 p-5">
                <div className="position-relative z-2 py-sm-3 py-md-4" style={{ maxWidth: 360 }} data-bs-theme="dark">
                  <h2 className="h1">Ready to discuss your project?</h2>
                  <p className="text-body mb-0">We are a team that creates business strategies for B2B and B2C companies.</p>
                  <div className="d-flex flex-column flex-sm-row align-items-center pt-3 mt-3 mt-lg-4">
                    <Link className="btn btn-light w-100 w-sm-auto me-sm-4 mb-2 mb-sm-0" to="/contacts/v1">
                      Contact us
                    </Link>
                    <Link className="d-inline-block text-white fw-medium p-2" to="mailto:email@example.com">
                      email@example.com
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
