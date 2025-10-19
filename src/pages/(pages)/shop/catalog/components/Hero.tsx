import banner from '@/assets/img/shop/banner.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="pt-lg-3 pb-2 breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Shop catalog
          </li>
        </ol>
      </nav>

      <section className="rounded-1 overflow-hidden mb-5" style={{ backgroundColor: '#e3e5e9' }} data-bs-theme="light">
        <Row className="align-items-center g-0">
          <Col md={6} className="offset-xl-1 text-center text-md-start">
            <div className="py-4 px-4 px-sm-5 pe-md-0 ps-xl-4">
              <p className="text-body fs-xs text-uppercase pt-3 pt-md-0 mb-3 mb-lg-4">Best selling</p>
              <h2 className="h1 pb-2 pb-xl-3">
                Cozy corner for the living room at a <span className="text-primary">discount up to 40%</span>
              </h2>
              <Link className="btn btn-sm btn-outline-dark" to="" data-bs-theme="light">
                Explore
              </Link>
            </div>
          </Col>
          <Col md={6} xl={5} className="d-flex justify-content-end">
            <Image src={banner} width={491} alt="Banner" />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Hero
