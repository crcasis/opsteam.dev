import auchan from '@/assets/img/brands/auchan.svg'
import championdark from '@/assets/img/brands/champion-dark.svg'
import championlight from '@/assets/img/brands/champion-light.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import philips from '@/assets/img/brands/philips.svg'
import starcraftdark from '@/assets/img/brands/starcraft-dark.svg'
import starcraftlight from '@/assets/img/brands/starcraft-light.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import fratues01 from '@/assets/img/landing/corporate/features/01.jpg'
import fratues02 from '@/assets/img/landing/corporate/features/02.jpg'
import fratues03 from '@/assets/img/landing/corporate/features/03.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <section className="container py-4 pt-sm-5 pb-md-5 my-2 my-lg-3 my-xxl-4">
        <Row className="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
          <Col md={6} lg={7} xl={6} className="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src={fratues01} alt="Image" />
          </Col>
          <Col md={6} lg={5} className="order-md-1">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">Let's do business together</h2>
              <p className="fs-xl">We partner with more than 60 brands. Clients who have become our friends for many years.</p>
              <div className="border-dashed mb-4 mt-5" />
              <Row className="row-cols-3 pt-2 g-4">
                <Col>
                  <Image className="d-block d-dark-mode-none mx-auto" src={starcraftdark} width={160} alt="Starcraft" />
                  <Image className="d-none d-dark-mode-block mx-auto" src={starcraftlight} width={160} alt="Starcraft" />
                </Col>
                <Col>
                  <Image className="d-block mx-auto" src={klinos} width={160} alt="Klinos" />
                </Col>
                <Col>
                  <Image className="d-block mx-auto" src={auchan} width={160} alt="Auchan" />
                </Col>
                <Col>
                  <Image className="d-block d-dark-mode-none mx-auto" src={championdark} width={160} alt="Champion" />
                  <Image className="d-none d-dark-mode-block mx-auto" src={championlight} width={160} alt="Champion" />
                </Col>
                <Col>
                  <Image className="d-block mx-auto" src={suzuki} width={160} alt="Suzuki" />
                </Col>
                <Col>
                  <Image className="d-block mx-auto" src={philips} width={160} alt="Philips" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
          <Col md={6} lg={7} xl={6} className="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src={fratues02} alt="Image" />
          </Col>
          <Col md={6} lg={5} className="order-md-1">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">Our professional approach to your business</h2>
              <Row className="row-cols-1 row-cols-sm-2 g-4">
                <Col>
                  <div className="text-body-secondary mb-2">01</div>
                  <h3 className="h5">Individual approach</h3>
                  <p className="mb-1">Hac erat leo proin odio est sed sit in felis facilisi integer sed congue neque turpis dictumst.</p>
                </Col>
                <Col>
                  <div className="text-body-secondary mb-2">02</div>
                  <h3 className="h5">Integrated analytics</h3>
                  <p className="mb-1">Find aute irure dolor in enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque.</p>
                </Col>
                <Col>
                  <div className="text-body-secondary mb-2">03</div>
                  <h3 className="h5">Step by step work</h3>
                  <p className="mb-1">More erat leo proin odio est sed sit felis facilisi integer sed sit congue neque turpis dictumst.</p>
                </Col>
                <Col>
                  <div className="text-body-secondary mb-2">04</div>
                  <h3 className="h5">Full range of services</h3>
                  <p className="mb-1">Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam.</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
          <Col md={6} lg={7} xl={6} className="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src={fratues03} alt="Image" />
          </Col>
          <Col md={6} lg={5} className="order-md-1">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">Full range of business and consulting services</h2>
              <p className="fs-xl mb-lg-4">
                Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euvert fugiat neque congue.
              </p>
              <ul className="list-unstyled pb-3 mb-3 mb-lg-4">
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Forecasting and recommendations
                </li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Identification of patterns, analysis
                </li>
                <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Segmentation by various methods
                </li>
              </ul>
              <Link className="btn btn-primary" to="">
                Book a free consultation
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Feature
