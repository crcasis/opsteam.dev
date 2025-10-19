import appstoredark from '@/assets/img/market/appstore-dark.svg'
import appstorelight from '@/assets/img/market/appstore-light.svg'
import googleplaydark from '@/assets/img/market/googleplay-dark.svg'
import googleplaylight from '@/assets/img/market/googleplay-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-xxl-2 mt-md-3 mt-lg-0">
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="h1 text-center text-lg-start pb-md-2 pb-xl-0 mb-4 mb-xl-5">
              Improve your skills and gain knowledge in one application. Become the best version of yourself
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link className="btn btn-dark btn-lg px-3 py-2 me-3" to="">
                <Image className="d-dark-mode-none mx-1" src={appstorelight} width={136} alt="App Store" />
                <Image className="d-none d-dark-mode-block mx-1" src={appstoredark} width={136} alt="App Store" />
              </Link>
              <Link className="btn btn-dark btn-lg px-3 py-2" to="">
                <Image className="d-dark-mode-none mx-1" src={googleplaylight} width={135} alt="Google Play" />
                <Image className="d-none d-dark-mode-block mx-1" src={googleplaydark} width={135} alt="Google Play" />
              </Link>
            </div>
          </Col>
          <Col lg={7} xl={6} className="offset-xl-1">
            <Row className="row-cols-1 row-cols-sm-2 g-3 g-md-4">
              <Col>
                <div className="d-flex flex-column h-100 bg-primary bg-opacity-10 rounded-3 text-center p-4">
                  <div className="h3 display-5 mt-1 mb-0">1,000+</div>
                  <div className="fs-lg mb-1">Downloads per day</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column h-100 bg-info bg-opacity-10 rounded-3 text-center p-4">
                  <div className="h3 display-5 mt-1 mb-0">1 Million</div>
                  <div className="fs-lg mb-1">Users per month</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column h-100 bg-warning bg-opacity-10 rounded-3 text-center p-4">
                  <div className="h3 display-5 mt-1 mb-0">300+</div>
                  <div className="fs-lg mb-1">Courses</div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column h-100 bg-danger bg-opacity-10 rounded-3 text-center p-4">
                  <div className="h3 display-5 mt-1 mb-0">134</div>
                  <div className="fs-lg mb-1">Countries</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Stats
