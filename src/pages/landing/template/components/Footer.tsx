import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer py-4">
        <Container className="text-center py-3">
          <span className="text-body-secondary">
            © All rights reserved. Made with
            <span className="text-danger">❤</span> by
          </span>
          &nbsp;
          <Link className="nav-link d-inline fw-normal p-0" to="https://stackbros.in/" target="_blank" rel="noopener">
            Stackbros
          </Link>
        </Container>
      </footer>
    </>
  )
}

export default Footer
