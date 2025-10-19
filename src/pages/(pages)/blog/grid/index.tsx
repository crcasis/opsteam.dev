import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blog from './components/Blog'

const page = () => {
  return (
    <>
      <Container className="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog grid no sidebar
            </li>
          </ol>
        </nav>
        <Row className="align-items-center gy-2 mb-4 pb-1 pb-sm-2 pb-lg-3">
          <Col lg={5}>
            <h1 className="mb-lg-0">Blog grid</h1>
          </Col>
          <Col xl={2} className="offset-xl-1 col-lg-3 col-sm-5">
            <select className="form-select">
              <option>All categories</option>
              <option>Inspiration</option>
              <option>Brand strategy</option>
              <option>Advertisement</option>
              <option>Ecommerce</option>
              <option>Travel &amp; Vacation</option>
            </select>
          </Col>
          <Col lg={4} sm={7}>
            <div className="position-relative">
              <i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3" />
              <input className="form-control ps-5" type="search" placeholder="Enter keyword" />
            </div>
          </Col>
        </Row>
        <Blog />
      </Container>
    </>
  )
}

export default page
