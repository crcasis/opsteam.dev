import banner1 from '@/assets/img/landing/shop-1/banner-1.png'
import banner2 from '@/assets/img/landing/shop-1/banner-2.png'
import useCountdown from '@/hook/useCountdown'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CTA = () => {
  const { days, hours, minutes } = useCountdown('2026-01-01T12:00:00')
  return (
    <>
      <section className="container pb-5 mb-lg-4 mb-xl-5">
        <Row className="pb-2 pb-sm-3 pb-md-4 mb-xlx-1">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Row className="pb-2 pb-sm-3 pb-lg-0 pb-xxl-2 mb-4 mb-lg-5">
              <Col md={11} xl={10}>
                <h2 className="h1 mb-lg-4">Discount and sales</h2>
                <p className="mb-0">
                  Find aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint
                  ovar velit officia reprehenderit in voluptate pariatur.
                </p>
              </Col>
            </Row>
            <div className="position-relative pt-5 pb-2 py-sm-5 px-4 ps-sm-5 pe-sm-0">
              <div
                className="bg-primary position-absolute top-0 start-0 h-100 rounded-1 opacity-30 d-none d-sm-block"
                style={{ width: 'calc(100% - 38px)' }}
              />
              <div className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-1 opacity-30 d-sm-none" />
              <div className="d-sm-flex align-items-center position-relative z-2 py-xl-3 px-2 px-sm-0 ps-xl-3">
                <div className="text-center text-sm-start me-sm-n4 me-md-3 me-lg-n2">
                  <div className="fs-xs text-uppercase pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-3">Best selling</div>
                  <h2 className="pb-3 mb-md-4">Wall clocks with a discount of up to 40%</h2>
                  <div
                    className="countdown d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-sm-start pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-3"
                    data-countdown-date="01/01/2026 12:00:00"
                  >
                    <div className="text-center mb-2">
                      <div className="bg-light rounded-1 p-2">
                        <div className="h2 fw-normal mb-0 mx-1">{days}</div>
                      </div>
                      <span className="text-dark fs-sm">days</span>
                    </div>
                    <span className="text-white fs-2 mx-2">:</span>
                    <div className="text-center mb-2">
                      <div className="bg-light rounded-1 p-2">
                        <div className="h2 fw-normal mb-0 mx-1">{hours}</div>
                      </div>
                      <span className="text-dark fs-sm">hours</span>
                    </div>
                    <span className="text-white fs-2 mx-2">:</span>
                    <div className="text-center mb-2">
                      <div className="bg-light rounded-1 p-2">
                        <div className="h2 fw-normal mb-0 mx-1">{minutes}</div>
                      </div>
                      <span className="text-dark fs-sm">mins</span>
                    </div>
                  </div>
                  <Link className="btn btn-outline-dark mb-lg-3" to="/shop/catalog">
                    Explore the catalog
                  </Link>
                </div>
                <div className="flex-xl-shrink-0 mx-auto ms-lg-0 me-lg-n4" style={{ maxWidth: 362 }}>
                  <Image className="d-block ms-n2 ms-sm-0" src={banner2} alt="Image" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-column flex-md-row flex-lg-column h-100 ps-lg-4 me-md-4 me-lg-0 ms-lg-2">
              <div className="bg-secondary d-flex rounded-1 ps-4 ps-lg-5 py-2 py-md-3 py-lg-4 mb-4 mb-md-0 mb-lg-4 me-md-4 me-lg-0">
                <div className="d-flex flex-column ps-0 ps-sm-3 ps-md-0 ps-xl-3 py-4 me-n5 me-sm-0">
                  <div className="fs-sm text-uppercase">Sale</div>
                  <div className="my-auto me-md-n5">
                    <div className="h3 display-2 mb-0">10%</div>
                    <div className="h2 mb-2">off the first order</div>
                    <div className="fs-sm">When ordering from $120 in one payment</div>
                  </div>
                </div>
                <Image className="d-block my-2" src={banner1} width={235} alt="Image" />
              </div>
              <div className="d-flex align-items-center border rounded-1 p-4 p-lg-5 mt-lg-auto">
                <div className="pt-3 pb-2 px-sm-3 px-md-2 px-lg-0 px-xl-3">
                  <h3 className="h2 mb-2">Subscribe to the newsletter</h3>
                  <p className="fs-sm pb-3 mb-3">Receive information about discounts and new arrivals</p>
                  <div className="input-group input-group-sm" style={{ maxWidth: 360 }}>
                    <input className="form-control" type="email" placeholder="Your email" />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default CTA
