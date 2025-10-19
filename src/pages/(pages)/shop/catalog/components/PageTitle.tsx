import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageTitle = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="d-flex align-items-start justify-content-between mb-4">
        <div className="me-3">
          <div className="nav d-md-none">
            <Link
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="nav-link dropdown-toggle fs-sm p-0 mb-2"
              to="#activeFilters"
              data-bs-toggle="collapse"
            >
              Active filters
            </Link>
          </div>
          <Collapse className="d-md-block" in={open}>
            <div className="pt-2 pt-md-0">
              <Link className="d-inline-block border rounded-pill fs-xs fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2" to="">
                <span className="d-inline-flex align-items-center text-nowrap px-1">
                  Vases
                  <i className="ai-circle-x fs-base ms-1" />
                </span>
              </Link>
              <Link className="d-inline-block border rounded-pill fs-xs fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2" to="">
                <span className="d-inline-flex align-items-center text-nowrap px-1">
                  Clocks
                  <i className="ai-circle-x fs-base ms-1" />
                </span>
              </Link>
              <Link className="d-inline-block border rounded-pill fs-xs fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2" to="">
                <span className="d-inline-flex align-items-center text-nowrap px-1">
                  Tither Room
                  <i className="ai-circle-x fs-base ms-1" />
                </span>
              </Link>
              <Link className="d-inline-block border rounded-pill fs-xs fw-medium text-body text-decoration-none py-1 px-2 me-2 mb-2" to="">
                <span className="d-inline-flex align-items-center text-nowrap px-1">
                  $10 - $50
                  <i className="ai-circle-x fs-base ms-1" />
                </span>
              </Link>
              <button className="btn btn-sm btn-secondary rounded-pill fw-medium py-1 px-2" type="button">
                <span className="px-1">Remove all filters</span>
              </button>
            </div>
          </Collapse>
        </div>
        <div className="d-flex align-items-center flex-shrink-0 mb-2">
          <span className="text-body-secondary text-nowrap fs-sm">Sort by:</span>
          <select className="form-select form-select-flush py-0">
            <option value="popular">Most popular</option>
            <option value="low-high">Low-High price</option>
            <option value="high-low">High-Low price</option>
            <option value="rating">Average rating</option>
            <option value="az">A-Z order</option>
            <option value="za">Z-A order</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default PageTitle
