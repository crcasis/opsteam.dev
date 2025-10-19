import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer py-5">
        <Container className="pt-lg-3 mt-xl-3">
          <div className="border-bottom text-center pb-4">
            <ul className="nav justify-content-center py-1 pb-sm-2">
              <li className="nav-item">
                <Link className="nav-link py-2 px-3 mx-1" to="">
                  Space
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 px-3 mx-1" to="">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 px-3 mx-1" to="">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 px-3 mx-1" to="">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 px-3 mx-1" to="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-sm-flex align-items-center justify-content-between pt-4 mt-2 mt-sm-0">
            <div className="d-flex justify-content-center order-sm-2 mb-4 mb-sm-0">
              <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" to="" aria-label="Instagram">
                <i className="ai-instagram" />
              </Link>
              <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" to="" aria-label="Facebook">
                <i className="ai-facebook" />
              </Link>
              <Link className="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle" to="" aria-label="YouTube">
                <i className="ai-youtube" />
              </Link>
            </div>
            <p className="nav fs-sm order-sm-1 text-center mb-0">
              <span className="text-body-secondary">© All rights reserved. Made by</span>
              <Link className="nav-link fw-normal p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
                Stackbros
              </Link>
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
