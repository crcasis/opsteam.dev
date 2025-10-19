import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Office = {
  city: string
  phone: string
  email: string
  address: string
}

const offices: Office[] = [
  { city: 'Orlando', phone: '+1 (786) 322 560 40', email: 'orlando@example.com', address: '514 S. Magnolia St. Orlando, FL 32806' },
  { city: 'Chicago', phone: '+1 (786) 322 560 40', email: 'chicago@example.com', address: '76, Industrial Dr, West Chicago, 60185' },
  { city: 'New York', phone: '+1 (786) 322 560 40', email: 'newyork@example.com', address: '396 Lillian Blvd, Holbrook, NY 11741' },
]

const Blog = () => {
  return (
    <>
      <section className="bg-secondary py-5">
        <Container className="py-lg-3 py-xl-4 py-xxl-5">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-sm-2 py-md-3 py-lg-4">
            {offices.map((office, index) => (
              <Col key={index}>
                <h2 className="h4 mb-4">{office.city}</h2>
                <ul className="list-unstyled mb-0">
                  <li className="nav flex-nowrap mb-3">
                    <i className="ai-phone lead text-primary me-2" />
                    <Link className="nav-link fw-normal p-0 mt-n1" to={`tel:${office.phone.replace(/[^+\d]/g, '')}`}>
                      {office.phone}
                    </Link>
                  </li>
                  <li className="nav flex-nowrap mb-3">
                    <i className="ai-mail lead text-primary me-2" />
                    <Link className="nav-link fw-normal p-0 mt-n1" to={`mailto:${office.email}`}>
                      {office.email}
                    </Link>
                  </li>
                  <li className="nav flex-nowrap mb-3">
                    <i className="ai-map-pin lead text-primary me-2" />
                    <span className="nav-link fw-normal p-0 mt-n1">{office.address}</span>
                  </li>
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Blog
