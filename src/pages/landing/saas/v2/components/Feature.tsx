import featuresdark from '@/assets/img/landing/saas-2/features/01-dark.png'
import featureslight from '@/assets/img/landing/saas-2/features/01-light.png'
import features2 from '@/assets/img/landing/saas-2/features/02.png'
import features3dark from '@/assets/img/landing/saas-2/features/03-dark.png'
import features3light from '@/assets/img/landing/saas-2/features/03-light.png'
import feature4dark from '@/assets/img/landing/saas-2/features/04-dark.png'
import feature4light from '@/assets/img/landing/saas-2/features/04-light.png'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <section className="bg-secondary py-5">
        <Container className="mt-1 py-md-2 py-lg-4 py-xxl-5">
          <h2 className="h1 text-center pt-1 pt-sm-4">Take your data to the next level</h2>
          <p className="text-center mx-auto pb-3 mb-3 mb-lg-4" style={{ maxWidth: 480 }}>
            Using basic data skills you can analysis and improve your business indicators with Around
          </p>
          <Row className="g-4 pb-2 pb-sm-4 mb-sm-2">
            <Col md={5}>
              <Card className="border-0 h-100">
                <CardBody>
                  <Link to="">
                    <Image className="d-dark-mode-none" src={featureslight} alt="Image" />
                    <Image className="d-none d-dark-mode-block" src={featuresdark} alt="Image" />
                  </Link>
                  <div className="pt-3 mt-2 mt-lg-3">
                    <h3>Simple control panel</h3>
                    <p className="mb-0">Dashboard is to present analytical data in a compact form on one page for easy to interpret.</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={7}>
              <Card className="border-0 h-100">
                <CardBody className="overflow-hidden">
                  <div className="d-sm-flex align-items-center">
                    <Link className="d-block order-sm-2 flex-shrink-0 mt-n4 mb-n2" to="">
                      <Image src={features2} width={308} alt="Image" />
                    </Link>
                    <div className="order-sm-1 pe-sm-3 me-xl-4">
                      <h3>Segmentation by various methods</h3>
                      <p className="pb-3 mb-1 mb-xl-3">
                        Segmentation allows you to divide users according to a given criterion, and then for each of the groups to develop an
                        advertisement and product.
                      </p>
                      <Link className="btn btn-link p-0" to="">
                        Learn more
                        <i className="ai-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={7}>
              <Card className="border-0 h-100">
                <CardBody className="overflow-hidden">
                  <div className="d-sm-flex align-items-center">
                    <Link className="d-block order-sm-2 flex-shrink-0 mt-n4 mb-n2" to="#">
                      <Image className="d-dark-mode-none" src={features3light} width={308} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src={features3dark} width={308} alt="Image" />
                    </Link>
                    <div className="order-sm-1 pe-sm-3 me-xl-4">
                      <h3>Key performance indicators</h3>
                      <p className="pb-3 mb-1 mb-xl-3">
                        You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties
                        and problems.
                      </p>
                      <Link className="btn btn-link p-0" to="">
                        Learn more
                        <i className="ai-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="border-0 h-100">
                <CardBody>
                  <Link to="">
                    <Image className="d-dark-mode-none" src={feature4light} alt="Image" />
                    <Image className="d-none d-dark-mode-block" src={feature4dark} alt="Image" />
                  </Link>
                  <div className="pt-3 mt-2 mt-lg-3">
                    <h3>Forecasting efficiency</h3>
                    <p className="mb-0">Before launching any marketing activity, you need to assess how successful and effective it can be.</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Feature
