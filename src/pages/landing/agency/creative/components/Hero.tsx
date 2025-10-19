import clutchdark from '@/assets/img/brands/clutch-rating-dark.svg'
import clutchlight from '@/assets/img/brands/clutch-rating-light.svg'
import services01 from '@/assets/img/landing/creative-agency/services/01.jpg'
import services02 from '@/assets/img/landing/creative-agency/services/02.jpg'
import services03 from '@/assets/img/landing/creative-agency/services/03.jpg'
import services04 from '@/assets/img/landing/creative-agency/services/04.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="container py-5 mt-5 mb-xl-3 mb-xxl-5">
        <Row className="pt-2">
          <Col lg={6} className="d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
            <h1 className="display-1 text-uppercase fw-bold mt-auto mb-2">
              Creative <span className="fw-normal">solutions</span> studio
              <span className="d-none d-md-inline-block align-middle ms-4" style={{ width: 120, height: 2, backgroundColor: 'currentColor' }} />
            </h1>
            <div className="d-flex align-items-center py-4 py-lg-5">
              <Link className="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" to="">
                Let's work together
              </Link>
              <div className="flex-shrink-sm-0">
                <Image className="d-dark-mode-none" src={clutchdark} width={155} alt="Clutch" />
                <Image className="d-none d-dark-mode-block" src={clutchlight} width={155} alt="Clutch" />
              </div>
            </div>
            <ul className="nav mt-auto mx-n2 pt-sm-3 pt-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link p-2" to="">
                  instagram
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link p-2" to="">
                  dribbble
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-2" to="">
                  behance
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <Row className="row-cols-1 row-cols-sm-2 g-1">
              <Col>
                <Link className="card-flip" to="">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: `url(${services01})` }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Strategy</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Strategy</h3>
                        <p className="text-body mb-3">
                          Leo vitae sem eget eget at in vivamus placerat in sodales tristique a risusiis senectusic vitae sem eget eget at in vivamus
                          placerat in sodales.
                        </p>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col>
                <Link className="card-flip" to="">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: `url(${services02})` }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Social</h3>
                        <ul className="text-body ps-4 mb-3">
                          <li className="mb-2">Social media posts</li>
                          <li className="mb-2">Content plan</li>
                          <li className="mb-2">Advertising launch</li>
                          <li className="mb-2">Photo and video content</li>
                          <li className="mb-1">Cases and portfolio</li>
                        </ul>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col className="order-sm-2">
                <Link className="card-flip" to="">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: `url(${services04})` }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Web design</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Web design</h3>
                        <p className="text-body mb-3">
                          Pharetra in morbi quis is massa maecenas arcu vulputate in pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu
                          eget libero.
                        </p>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col className="order-sm-1">
                <Link className="card-flip" to="">
                  <div className="card-flip-inner">
                    <div className="card-flip-front" style={{ backgroundImage: `url(${services03})` }}>
                      <div className="d-flex flex-column h-100" data-bs-theme="light">
                        <h2 className="fs-lg fw-normal mb-0 mt-auto">Branding</h2>
                      </div>
                    </div>
                    <div className="card-flip-back bg-secondary">
                      <div className="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                        <h3 className="h4">Branding</h3>
                        <ul className="text-body ps-4 mb-3">
                          <li className="mb-2">Identity design</li>
                          <li className="mb-2">Brand book creation</li>
                          <li className="mb-2">Colors and fonts</li>
                          <li className="mb-2">Banners and covers</li>
                          <li className="mb-1">Visual style</li>
                        </ul>
                        <div className="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                          <div className="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                            <i className="ai-arrow-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Hero
