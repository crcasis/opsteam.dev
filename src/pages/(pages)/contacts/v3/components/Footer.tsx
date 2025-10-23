import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark pb-3 pt-sm-3 py-md-4 py-lg-5" data-bs-theme="dark">
        <Container className="pb-4 pt-5">
          <div className="d-md-flex align-items-center justify-content-between pb-1 pb-md-0 mb-4 mb-md-5">
            <nav className="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3">
              <Link className="nav-link py-1 px-0 mx-3" to="">
                Services
              </Link>
              <Link className="nav-link py-1 px-0 mx-3" to="">
                Reviews
              </Link>
              <Link className="nav-link py-1 px-0 mx-3" to="">
                Team
              </Link>
              <Link className="nav-link py-1 px-0 mx-3" to="">
                Blog
              </Link>
              <Link className="nav-link py-1 px-0 mx-3" to="">
                Contact
              </Link>
            </nav>
            <div className="d-flex justify-content-center justify-content-md-start me-md-n2">
              <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" to="" aria-label="Instagram">
                <i className="ai-instagram" />
              </Link>
              <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" to="" aria-label="Facebook">
                <i className="ai-facebook" />
              </Link>
              <Link className="btn btn-icon btn-sm btn-secondary btn-x rounded-circle mx-2" to="" aria-label="X">
                <i className="ai-x" />
              </Link>
              <Link className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" to="" aria-label="LinkedIn">
                <i className="ai-linkedin" />
              </Link>
            </div>
          </div>
          <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
            <Link className="nav-link d-inline-block text-body-secondary fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0" to="">
              Privacy policy
            </Link>
            <p className="nav fs-sm order-md-1 mb-0">
              <span className="text-body-secondary">© All rights reserved. Made by</span>
              <Link className="nav-link d-inline fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
                Opsteam.dev
              </Link>
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
