import feature from '@/assets/img/landing/corporate/features/01.jpg'
import feature02 from '@/assets/img/landing/corporate/features/02.jpg'
import feature03 from '@/assets/img/landing/corporate/features/03.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <section className="bg-secondary py-5">
        <Container className="py-md-2 py-lg-4 my-xl-2 my-xxl-3">
          <Row
            className="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
            data-disable-parallax-down="md"
          >
            <Col md={6} xxl={5} className="offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
              <div className="position-relative">
                <Image className="d-block rounded-1" src={feature} alt="Image" />
                <div className="d-none d-lg-block position-absolute top-0 end-0 translate-middle-y w-auto pe-1 me-4">
                  <div data-aos="fade-up" data-aos-duration={950} data-aos-offset={280}>
                    <svg className="text-info" width={107} height={107} viewBox="0 0 107 107" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M106.192 53.0468C106.225 63.5385 103.146 73.8042 97.3443 82.5459C91.5426 91.2875 83.279 98.1125 73.5985 102.158C63.918 106.203 53.2553 107.287 42.9589 105.272C32.6624 103.257 23.1946 98.2343 15.7528 90.8387C8.31094 83.4431 3.22928 74.0068 1.15039 63.7231C-0.92849 53.4394 0.0887821 42.7702 4.07357 33.0647C8.05836 23.3591 14.8317 15.0531 23.537 9.19711C32.2424 3.34107 42.4887 0.197979 52.9804 0.16529L53.1457 53.2121L106.192 53.0468Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              lg={5}
              xl={4}
              className="order-md-1"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-sm-2 pb-lg-3">Let's grow business together</h2>
                <p className="fs-xl pb-3 mb-1 mb-sm-2 mb-md-3 mb-lg-4">
                  Vitae tempor morbi tellus pulvinar ut iaculis sit tristique in turpis volutpat quam nec pretium eu nulla egestas ultrices donec in
                  pulvinar ut fermentum nun aliquam.
                </p>
                <Link className="d-inline-flex align-items-center fw-semibold text-decoration-none" to="">
                  Learn more
                  <i className="ai-arrow-right fs-4 ms-2" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row
            className="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
            data-disable-parallax-down="md"
          >
            <Col md={6} xxl={5} className="offset-xl-1 offset-xxl-2 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
              <div className="position-relative">
                <Image className="d-block rounded-1 position-relative z-2" src={feature02} alt="Image" />
                <div className="d-none d-lg-block position-absolute top-0 start-0 translate-middle-x w-auto pt-3 mt-5">
                  <div data-aos="fade-up" data-aos-duration={950} data-aos-offset={280}>
                    <svg
                      className="text-primary"
                      width={160}
                      height={160}
                      viewBox="0 0 160 160"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={80} cy={80} r={80} />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              xl={5}
              className="order-md-1"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">Our professional approach to your business</h2>
                <Row className="row-cols-1 row-cols-sm-2 g-4">
                  <Col>
                    <div className="text-body-secondary mb-2">01</div>
                    <h3 className="h5">Individual approach</h3>
                    <p className="mb-0">
                      Hac erat leo proin odio est sed sit in felis facilisi integer sed congue neque turpis dictumst sitsed volutpat aliquet tortor.
                    </p>
                  </Col>
                  <Col>
                    <div className="text-body-secondary mb-2">02</div>
                    <h3 className="h5">Integrated analytics</h3>
                    <p className="mb-0">
                      Find aute irure dolor in enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue neque turpis.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row
            className="align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
            data-disable-parallax-down="md"
          >
            <Col md={6} xxl={5} className="offset-lg-1 offset-xl-2 offset-xxl-3 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
              <div className="position-relative">
                <Image className="d-block rounded-1" src={feature03} alt="Image" />
                <div className="d-none d-lg-block position-absolute top-0 start-50 translate-middle w-auto ms-2">
                  <div data-aos="fade-up" data-aos-duration={950} data-aos-offset={280}>
                    <svg
                      className="text-danger"
                      width={108}
                      height={111}
                      viewBox="0 0 108 111"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M68.9244 1.23484C69.1072 0.713703 69.6783 0.438641 70.1961 0.630706C78.5792 3.74012 86.1086 8.79818 92.1601 15.3932C98.4371 22.2339 102.93 30.5171 105.241 39.5091C107.552 48.501 107.61 57.9241 105.41 66.9438C103.209 75.9634 98.8179 84.3011 92.6254 91.2184C86.4328 98.1356 78.6299 103.419 69.9078 106.6C61.1857 109.782 51.8136 110.763 42.6217 109.457C33.4298 108.151 24.7018 104.598 17.2109 99.1136C9.98911 93.8259 4.13195 86.8998 0.117483 78.9106C-0.130486 78.4171 0.079957 77.8191 0.577752 77.5799L21.7446 67.4094C22.2425 67.1702 22.8384 67.3807 23.0936 67.8705C25.2883 72.084 28.4252 75.7403 32.2656 78.5522C36.3752 81.5612 41.1634 83.5102 46.2062 84.2266C51.2489 84.943 56.3905 84.4048 61.1756 82.6595C65.9606 80.9142 70.2414 78.0157 73.6387 74.2208C77.0359 70.426 79.4449 65.8518 80.6522 60.9036C81.8594 55.9553 81.8277 50.7857 80.5598 45.8526C79.2919 40.9196 76.827 36.3753 73.3834 32.6224C70.1654 29.1154 66.1855 26.4006 61.7558 24.6837C61.2409 24.4841 60.9659 23.9149 61.1488 23.3938L68.9244 1.23484Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              lg={5}
              xl={4}
              className="order-md-1"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="pe-md-4 pe-lg-0">
                <h2 className="h1 pb-sm-2 pb-lg-3">Full spectrum of business services</h2>
                <p className="fs-xl mb-lg-4">Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
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
        </Container>
      </section>
    </>
  )
}

export default Feature
