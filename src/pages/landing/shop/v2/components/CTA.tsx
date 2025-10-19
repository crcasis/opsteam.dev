import cta from '@/assets/img/landing/shop-2/cta-bg.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section className="py-5 bg-size-cover bg-position-center" style={{ backgroundImage: `url(${cta})` }}>
        <Container className="py-md-3 py-lg-5 my-xl-3 my-xxl-5">
          <Row className="pt-2 pb-3 py-sm-4 py-md-5">
            <Col xs={9} sm={8} md={6} lg={5} xl={4}>
              <h2 className="h1 mb-md-4" data-bs-theme="light">
                Craft Your Custom Macaron Collection
              </h2>
              <p className="fs-lg text-dark opacity-70 pb-3 pb-sm-4 mb-3" data-bs-theme="light">
                Indecisive about our delightful flavors? Craft your custom box with your favorites. Enjoy it alone or share with others—it's all up to
                you!
              </p>
              <Link className="btn btn-dark rounded-pill" to="" data-bs-theme="light">
                Create your own box
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
