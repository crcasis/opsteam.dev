import gallery01 from '@/assets/img/landing/shop-2/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/shop-2/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/shop-2/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/shop-2/gallery/04.jpg'
import gallery05 from '@/assets/img/landing/shop-2/gallery/05.jpg'
import gallery06 from '@/assets/img/landing/shop-2/gallery/06.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
          <Col sm={6} lg={4}>
            <h2 className="display-2">About us</h2>
            <p className="fs-xl mb-0">
              These unique macarons have their roots in a love for baking, creative craftsmanship, and a quest for perfection.
            </p>
          </Col>
          <Col sm={6} lg={4}>
            <Image className="rounded-5" src={gallery01} alt="Image" />
          </Col>
          <Col sm={6} lg={4}>
            <Image className="rounded-5" src={gallery02} alt="Image" />
          </Col>
          <Col sm={6} lg={4}>
            <Image className="rounded-5" src={gallery03} alt="Image" />
          </Col>
          <Col sm={6} lg={4} className="d-flex align-items-center">
            <p className="fs-xl text-center mb-0">
              In recent years, we've dedicated ourselves to perfecting macarons, creating surprising flavors. Our macarons are made with love to
              provide an exceptional experience.
            </p>
          </Col>
          <Col sm={6} lg={4}>
            <Image className="rounded-5" src={gallery04} alt="Image" />
          </Col>
          <Col sm={6} lg={4}>
            <Image className="rounded-5" src={gallery05} alt="Image" />
          </Col>
          <Col sm={6} lg={4} className="mb-2 mb-lg-0">
            <Image className="rounded-5" src={gallery06} alt="Image" />
          </Col>
          <Col lg={4} className="d-flex justify-content-center align-items-center">
            <div className="text-center px-xl-3 px-xxl-5">
              <h3 className="h2 mb-4">All of our Macarons are gluten-free.</h3>
              <Link className="btn btn-dark rounded-pill" to="">
                Explore our collection
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default About
