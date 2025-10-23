import { Card, CardBody, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
        <OverlayTrigger overlay={<Tooltip>Back to home</Tooltip>} placement="left">
          <Link
            to="/"
            className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 z-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4"
            data-bs-toggle="tooltip"
          >
            <i className="ai-home" />
          </Link>
        </OverlayTrigger>
      <div className="d-flex flex-column position-relative h-100 pt-5" style={{marginTop:70}}>
        <Container className="mt-auto">
          <Row className="align-items-center">
            <Col md={6} className="mb-5 mb-md-0">
              <Card className="border-0 bg-primary py-md-3 py-lg-4 px-lg-4 px-xl-5" data-bs-theme="dark">
                <CardBody>
                  <h1 className="py-2 pb-lg-3">Sign in to Around</h1>
                  <form>
                    <div className="pb-3 mb-3">
                      <div className="position-relative">
                        <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3" />
                        <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="position-relative">
                        <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3" />
                        <div className="password-toggle">
                          <input className="form-control form-control-lg ps-5" type="password" placeholder="Password" required />
                          <label className="password-toggle-btn" aria-label="Show/hide password">
                            <input className="password-toggle-check" type="checkbox" />
                            <span className="password-toggle-indicator" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
                      <div className="form-check my-1">
                        <input className="form-check-input" type="checkbox" id="keep-signedin" />
                        <label className="form-check-label ms-1" htmlFor="keep-signedin">
                          Keep me signed in
                        </label>
                      </div>
                      <Link className="text-light fs-sm fw-semibold text-decoration-none my-1" to="/auth/pass-recovery">
                        Forgot password?
                      </Link>
                    </div>
                    <button className="btn btn-lg btn-light w-100 mb-4" type="submit">
                      Sign in
                    </button>
                    <h2 className="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account</h2>
                    <Row className="row-cols-1 row-cols-sm-2 gy-3 pb-2">
                      <Col>
                        <Link className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" to="">
                          <i className="ai-google fs-xl me-2" />
                          Google
                        </Link>
                      </Col>
                      <Col>
                        <Link className="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" to="">
                          <i className="ai-facebook fs-xl me-2" />
                          Facebook
                        </Link>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xl={5} className="offset-xl-1">
              <div className="ps-md-3 ps-lg-5 ps-xl-0">
                <h2 className="h1 pb-2 pb-lg-3">No account? Sign up</h2>
                <form className="needs-validation" noValidate>
                  <Row className="row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                    <Col className="mb-4">
                      <input className="form-control form-control-lg" type="text" placeholder="Your name" required />
                    </Col>
                    <Col className="mb-4">
                      <input className="form-control form-control-lg" type="email" placeholder="Email address" required />
                    </Col>
                  </Row>
                  <div className="password-toggle mb-4">
                    <input className="form-control form-control-lg" type="password" placeholder="Password" required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator" />
                    </label>
                  </div>
                  <div className="password-toggle mb-4">
                    <input className="form-control form-control-lg" type="password" placeholder="Confirm password" required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" />
                      <span className="password-toggle-indicator" />
                    </label>
                  </div>
                  <div className="pb-4">
                    <div className="form-check my-2">
                      <input className="form-check-input" type="checkbox" id="terms" />
                      <label className="form-check-label ms-1" htmlFor="terms">
                        I agree to <Link to="">Terms &amp; Conditions</Link>
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-lg btn-primary w-100 mb-4" type="submit">
                    Sign up
                  </button>
                  <h2 className="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account</h2>
                  <Row className="row-cols-1 row-cols-sm-2 gy-3">
                    <Col>
                      <Link className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" to="">
                        <i className="ai-google fs-xl me-2" />
                        Google
                      </Link>
                    </Col>
                    <Col>
                      <Link className="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100" to="">
                        <i className="ai-facebook fs-xl me-2" />
                        Facebook
                      </Link>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="nav fs-sm pt-5 mb-5" style={{marginTop:70}}>
          <span className="text-body-secondary">© All rights reserved. Made by</span>
          <Link className="nav-link d-inline-block p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
            Opsteam.dev
          </Link>
        </Container>
      </div>
    </>
  )
}

export default page
