import mobiledark from '@/assets/img/landing/saas-3/mobile-app-dark.jpg'
import mobilelight from '@/assets/img/landing/saas-3/mobile-app-light.jpg'
import appstoredark from '@/assets/img/market/appstore-dark.svg'
import appstorelight from '@/assets/img/market/appstore-light.svg'
import googleplaydark from '@/assets/img/market/googleplay-dark.svg'
import googleplaylight from '@/assets/img/market/googleplay-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MobileApp = () => {
  return (
    <>
      <section
        className="container pb-5 mb-xl-3 mb-xxl-5"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-offset={280}
        data-disable-parallax-down="lg"
      >
        <Row className="align-items-center pb-3 pb-md-4 pb-lg-5">
          <Col md={6} lg={7} className="pb-3 pb-sm-4 pb-md-0">
            <Image className="d-dark-mode-none" src={mobilelight} width={636} alt="Mobile screens" />
            <Image className="d-none d-dark-mode-block" src={mobiledark} width={636} alt="Mobile screens" />
          </Col>
          <Col md={6} lg={5} data-aos="fade-up" data-aos-duration={850} data-aos-offset={150} data-disable-parallax-down="lg">
            <h2 className="h1 text-center text-md-start pb-4 pb-lg-5 mb-1 mb-md-2 mb-lg-0 mb-xxl-2">
              Download our app
              <br className="d-none d-md-inline" /> for any devices
            </h2>
            <div className="d-flex justify-content-between mx-auto mx-md-0" style={{ maxWidth: 450 }}>
              <div className="pe-3">
                <p className="text-body-secondary mb-2">App Store</p>
                <div className="d-flex mb-3">
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning" />
                </div>
                <h3 className="h4 mb-1">Editor's Choice</h3>
                <p className="pb-2 pb-sm-3 pb-md-4 pb-xl-5">rating 4.7, 187K+ reviews</p>
                <Link className="btn btn-dark btn-lg px-3 py-2" to="">
                  <Image className="d-dark-mode-none mx-1" src={appstorelight} width={136} alt="App Store" />
                  <Image className="d-none d-dark-mode-block mx-1" src={appstoredark} width={136} alt="App Store" />
                </Link>
              </div>
              <div className="border-end" />
              <div className="ps-3">
                <p className="text-body-secondary mb-2">Google Play</p>
                <div className="d-flex mb-3">
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning me-1" />
                  <i className="ai-star-filled text-warning" />
                </div>
                <h3 className="h4 mb-1">Editor's Choice</h3>
                <p className="pb-2 pb-sm-3 pb-md-4 pb-xl-5">rating 4.7, 187K+ reviews</p>
                <Link className="btn btn-dark btn-lg px-3 py-2" to="">
                  <Image className="d-dark-mode-none mx-1" src={googleplaylight} width={135} alt="Google Play" />
                  <Image className="d-none d-dark-mode-block mx-1" src={googleplaydark} width={135} alt="Google Play" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default MobileApp
