import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <>
      <Row className="gy-3 align-items-center pt-3 pt-sm-4 mt-md-2">
        <Col md={4} xs={6} className="order-md-1 order-1">
          <div className="d-flex align-items-center">
            <span className="text-body-secondary fs-sm">Show</span>
            <select className="form-select form-select-flush w-auto">
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
              <option value={30}>30</option>
            </select>
          </div>
        </Col>
        <Col md={4} xs={12} className="order-md-2 order-3 text-center">
          <button className="btn btn-primary w-md-auto w-100" type="button">
            Load more products
          </button>
        </Col>
        <Col md={4} xs={6} className="order-md-3 order-2">
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm justify-content-end">
              <li className="page-item active" aria-current="page">
                <span className="page-link">
                  1<span className="visually-hidden">(current)</span>
                </span>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  5
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </>
  )
}

export default Pagination
