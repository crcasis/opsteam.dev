import grid10 from '@/assets/img/portfolio/grid/10.jpg'
import grid11 from '@/assets/img/portfolio/grid/11.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className="container pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 pb-3 pb-lg-4">Next projects</h2>
        <Row className="row-cols-1 row-cols-sm-2 align-items-end mb-2 pb-md-4">
          <Col>
            <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: 550 }}>
              <div className="zoom-effect-wrapper">
                <div className="zoom-effect-img">
                  <Image src={grid11} alt="Image" />
                </div>
              </div>
              <div className="pt-4 mt-lg-2">
                <h2 className="h4 mb-2">
                  <Link className="stretched-link" to="/portfolio/single-v2">
                    Doe design
                  </Link>
                </h2>
                <div className="d-flex justify-content-between fs-lg text-body-secondary">
                  <span>Branding, Stationery</span>
                  <span>2021</span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="zoom-effect position-relative border-bottom ms-auto pb-3" style={{ maxWidth: 605 }}>
              <div className="zoom-effect-wrapper">
                <div className="zoom-effect-img">
                  <Image src={grid10} alt="Image" />
                </div>
              </div>
              <div className="pt-4 mt-lg-2">
                <h2 className="h4 mb-2">
                  <Link className="stretched-link" to="/portfolio/single-v2">
                    D.G.Vent
                  </Link>
                </h2>
                <div className="d-flex justify-content-between fs-lg text-body-secondary">
                  <span>Stationery design</span>
                  <span>2021</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Blog
