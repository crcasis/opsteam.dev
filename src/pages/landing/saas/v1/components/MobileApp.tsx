import ctadark from '@/assets/img/landing/saas-1/cta/device-dark.png'
import ctalight from '@/assets/img/landing/saas-1/cta/device-light.png'
import appstorelight from '@/assets/img/market/appstore-light.svg'
import googleplaylight from '@/assets/img/market/googleplay-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MobileApp = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <Row
          className="align-items-center justify-content-center py-2 py-sm-3 py-md-4 my-xl-2"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col xs={6} sm={5} md={4} className="offset-md-1 order-sm-2 pb-4 pb-sm-0 mb-2 mb-sm-0">
            <Image className="d-dark-mode-none" src={ctalight} width={414} alt="Mobile screen" />
            <Image className="d-none d-dark-mode-block" src={ctadark} width={414} alt="Mobile screen" />
          </Col>
          <Col
            sm={7}
            md={6}
            xl={5}
            className="offset-xl-1 order-sm-1"
            data-aos="fade-up"
            data-aos-duration={850}
            data-aos-offset={200}
            data-disable-parallax-down="md"
          >
            <div className="pe-sm-3 pe-md-0">
              <h2 className="h1 pb-1 pb-sm-2 pb-lg-3">Download Around app for any devices</h2>
              <p className="mb-0">
                Now there is a mobile application so that you can always quickly and conveniently track your data morbi et massa fames ac scelerisque
                sit commodo dignissim.
              </p>
              <div className="d-flex justify-content-between pt-4 pt-lg-5 mt-sm-2" style={{ maxWidth: 450 }}>
                <div className="pe-2">
                  <h3 className="h4 mb-2">Editor's choice</h3>
                  <p className="mb-sm-4">rating 4.7, 187K+ reviews</p>
                  <Link className="btn btn-primary btn-lg px-3 py-2" to="">
                    <Image className="mx-1" src={appstorelight} width={136} alt="App Store" />
                  </Link>
                </div>
                <div className="ps-2">
                  <h3 className="h4 mb-2">App of the day</h3>
                  <p className="mb-sm-4">rating 4.8, 30K+ reviews</p>
                  <Link className="btn btn-primary btn-lg px-3 py-2" to="">
                    <Image className="mx-1" src={googleplaylight} width={135} alt="Google Play" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default MobileApp
