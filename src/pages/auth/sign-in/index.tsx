import cover from '@/assets/img/account/cover.jpg'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <div className="d-lg-flex position-relative h-100">
        <OverlayTrigger overlay={<Tooltip>Back to home</Tooltip>} placement="left">
          <Link
            to="/"
            className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 z-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4"
            data-bs-toggle="tooltip">
            <i className="ai-home" />
          </Link>
        </OverlayTrigger>
        <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5" style={{ marginTop: 110 }}>
          <div className="w-100 mt-auto" style={{ maxWidth: 526 }}>
            <h1>Sign in to Around</h1>
            <p className="pb-3 mb-3 mb-lg-4">
              Don't have an account yet?&nbsp;&nbsp;<Link to="/auth/sign-up">Register here!</Link>
            </p>
            <form className="needs-validation" noValidate>
              <div className="pb-3 mb-3">
                <div className="position-relative">
                  <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" required />
                </div>
              </div>
              <div className="mb-4">
                <div className="position-relative">
                  <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3" />
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
                <Link className="fs-sm fw-semibold text-decoration-none my-1" to="/auth/pass-recovery">
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-lg btn-primary w-100 mb-4" type="submit">
                Sign in
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

          <p className="nav w-100 fs-sm pt-5 mb-5" style={{ maxWidth: 526, marginTop: 116 }}>
            <span className="text-body-secondary">© All rights reserved. Made by</span>
            <Link className="nav-link d-inline-block p-0 ms-1" to="https://stackbros.in/" rel="noopener">
              Stackbros
            </Link>
          </p>
        </div>

        <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{ backgroundImage: `url(${cover})`, height: 960 }} />
      </div>
    </>
  )
}

export default page
