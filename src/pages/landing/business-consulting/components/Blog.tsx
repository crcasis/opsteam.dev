import case01 from '@/assets/img/landing/business-consulting/case-studies/01.png'
import case02 from '@/assets/img/landing/business-consulting/case-studies/02.png'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className="container pt-2 pt-sm-4 pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 text-center pb-3 pb-lg-4">Recent case studies</h2>
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card className="bg-primary border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
              <CardBody className="position-relative z-2 pb-0">
                <h3 className="h4 card-title text-light">Robotics &amp; artificial intelligence</h3>
                <p className="card-text text-light opacity-80 pb-sm3 pb-md-4 mb-2">
                  Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam
                  tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum.
                  Adipiscing dictumst nunc enim massa.
                </p>
                <Link className="btn btn-lg btn-link text-light px-0" to="">
                  Read case study
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </CardBody>
              <div className="d-flex justify-content-end mt-sm-n5 me-n4">
                <Image src={case01} width={347} alt="Image" />
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="bg-primary bg-opacity-10 border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
              <CardBody className="position-relative z-2 pb-0">
                <h3 className="h4 card-title text-primary">Toothbrush from natural eco materials</h3>
                <p className="card-text text-primary pb-sm3 pb-md-4 mb-2">
                  Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam
                  tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum.
                  Adipiscing dictumst nunc enim massa.
                </p>
                <Link className="btn btn-lg btn-link px-0" to="">
                  Read case study
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </CardBody>
              <div className="d-flex justify-content-end mt-n4 mt-sm-n5 me-n4">
                <Image src={case02} width={291} alt="Image" />
              </div>
            </Card>
          </Col>
        </Row>
        <div className="text-center my-2 mt-sm-3 mt-lg-0 pt-4 pb-1 pb-sm-3 pb-md-4 pt-lg-5">
          <Link className="btn btn-outline-primary" to="">
            Read all case studies
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog
