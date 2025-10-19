import cta from '@/assets/img/landing/insurance/cta-bg.jpg'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="container pt-lg-4 pt-xl-5 mt-lg-2 mt-xxl-4">
        <div className="position-relative bg-size-cover bg-position-center rounded-3 py-5" style={{ backgroundImage: `url(${cta})` }}>
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3" />
          <Row className="position-relative z-2 py-md-4 py-lg-5 my-2">
            <Col xs={8} sm={6} md={5} lg={4} xxl={3} className="offset-1">
              <h2 className="h1 text-white pb-2 pb-sm-3">See how much you can save</h2>
              <Link className="btn btn-primary" to="">
                Get a quote now
              </Link>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default CTA
