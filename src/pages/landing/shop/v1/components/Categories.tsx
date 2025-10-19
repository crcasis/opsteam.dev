import categories01 from '@/assets/img/shop/categories/01.jpg'
import categories02 from '@/assets/img/shop/categories/02.jpg'
import categories03 from '@/assets/img/shop/categories/03.jpg'
import categories04 from '@/assets/img/shop/categories/04.jpg'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <section className="container mt-n3 mt-sm-0 pb-5 mb-1 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 pb-3 mb-lg-4">Categories</h2>
        <Row className="g-4 pb-2 pb-md-4">
          <Col md={4}>
            <Card className="zoom-effect h-100 border-0 rounded-1 overflow-hidden" style={{ minHeight: 320 }}>
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
              <div className="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  className="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{ backgroundImage: `url(${categories01})` }}
                />
              </div>
              <Link
                className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                to="/shop/catalog"
              >
                <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the living room</span>
              </Link>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
              <div className="zoom-effect-wrapper rounded-1">
                <Image className="zoom-effect-img" src={categories02} alt="Category image" />
              </div>
              <Link
                className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                to="/shop/catalog"
              >
                <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the kitchen</span>
              </Link>
            </Card>
            <Row className="g-4 pt-4">
              <Col sm={6}>
                <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
                  <div className="zoom-effect-wrapper rounded-1">
                    <Image className="zoom-effect-img" src={categories03} alt="Category image" />
                  </div>
                  <Link
                    className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                    to="/shop/catalog"
                  >
                    <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bathroom</span>
                  </Link>
                </Card>
              </Col>
              <Col sm={6}>
                <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
                  <div className="zoom-effect-wrapper rounded-1">
                    <Image className="zoom-effect-img" src={categories04} alt="Category image" />
                  </div>
                  <Link
                    className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                    to="/shop/catalog"
                  >
                    <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bedroom</span>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Categories
