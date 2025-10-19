import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer py-5">
        <Container className="d-flex flex-column flex-lg-row justify-content-between align-items-center pt-1 py-sm-2 py-lg-4 py-xl-5">
          <div className="d-flex gap-3 mb-3 mb-sm-4 mb-lg-0">
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-instagram" to="" aria-label="Instagram">
              <i className="ai-instagram" />
            </Link>
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-facebook" to="" aria-label="Facebook">
              <i className="ai-facebook" />
            </Link>
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-youtube" to="" aria-label="YouTube">
              <i className="ai-youtube" />
            </Link>
          </div>
          <div className="nav flex-sm-nowrap justify-content-center mb-3 mb-sm-4 mb-lg-0">
            <Link className="nav-link fw-normal border-end-lg px-2 px-sm-3 px-lg-4 py-1 py-sm-0 mx-1 mx-sm-0 mx-xl-2" to="">
              Support
            </Link>
            <Link className="nav-link fw-normal border-end-lg px-2 px-sm-3 px-lg-4 py-1 py-sm-0 mx-1 mx-sm-0 mx-xl-2" to="">
              Privacy Policy
            </Link>
            <Link className="nav-link fw-normal px-2 px-sm-3 px-lg-4 py-1 py-sm-0 mx-1 mx-sm-0 mx-xl-2" to="">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="text-body-secondary mb-0">© All rights reserved</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
