import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Subscription = () => {
  return (
    <>
      <section className="container mb-2 mb-md-3 mb-xl-4 pb-2" data-bs-theme="dark">
        <div className="position-relative bg-dark rounded-5 overflow-hidden p-md-5 p-4">
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, .03)' }} />
          <div className="position-relative p-xl-5 p-md-4 py-4 px-sm-3">
            <h2 className="h1 pb-md-4 pb-3 mt-n2">Stay up to date with important news!</h2>
            <Row className="gy-md-5 gy-4 gx-xl-5">
              <Col lg={7}>
                <Row className="row-cols-sm-3 row-cols-2 gy-lg-4 gy-3 gx-xl-4 gx-sm-3 gx-2">
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="advert-updates">
                        Advertising Updates
                      </label>
                      <input className="form-check-input" id="advert-updates" type="checkbox" defaultChecked />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="newsletter">
                        Daily Newsletter
                      </label>
                      <input className="form-check-input" id="newsletter" type="checkbox" />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="week-in-review">
                        Week in Review
                      </label>
                      <input className="form-check-input" id="week-in-review" type="checkbox" />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="inspiration">
                        Inspiration
                      </label>
                      <input className="form-check-input" id="inspiration" type="checkbox" />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="psychology">
                        Psychology
                      </label>
                      <input className="form-check-input" id="psychology" type="checkbox" />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check mb-0">
                      <label className="form-check-label fs-base fw-medium" htmlFor="design">
                        Design
                      </label>
                      <input className="form-check-input" id="design" type="checkbox" defaultChecked />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={5}>
                <div className="input-group rounded-pill">
                  <input className="form-control" type="text" placeholder="Your email" />
                  <button className="btn btn-primary rounded-pill" type="button">
                    Button
                  </button>
                </div>
                <div className="form-text mt-3 fs-sm">
                  * Yes, I agree to the <Link to="">terms</Link> and <Link to="">privacy policy</Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscription
