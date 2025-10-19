import inner01dark from '@/assets/img/landing/intro/pages/01-dark.jpg'
import inner01light from '@/assets/img/landing/intro/pages/01-light.jpg'
import inner02dark from '@/assets/img/landing/intro/pages/02-dark.jpg'
import inner02light from '@/assets/img/landing/intro/pages/02-light.jpg'
import inner03dark from '@/assets/img/landing/intro/pages/03-dark.jpg'
import inner03light from '@/assets/img/landing/intro/pages/03-light.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'

const InnerPage = () => {
  return (
    <>
      <section className="overflow-hidden pt-2 pt-sm-3 pt-md-4 pt-lg-3 pb-1 pb-sm-3 pb-md-4 pb-lg-5">
        <Container className="position-relative py-5 my-lg-3 my-xl-4 my-xxl-5">
          <div
            className="position-absolute"
            style={{ marginLeft: '-12.7%' }}
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-offset={300}
            data-disable-parallax-down="lg"
          >
            <svg
              className="text-warning d-none d-lg-block"
              width={744}
              height={744}
              viewBox="0 0 744 744"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={372} cy={372} r={372} />
            </svg>
          </div>
          <div className="d-none d-xxl-block" style={{ height: 190 }} />
          <div className="d-none d-lg-block d-xxl-none" style={{ height: 150 }} />
          <Row className="justify-content-center justify-content-lg-start position-relative z-2">
            <Col
              sm={10}
              md={8}
              lg={5}
              xl={4}
              className="text-center text-lg-start"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={120}
              data-disable-parallax-down="lg"
            >
              <div className="d-none d-lg-block" data-bs-theme="light">
                <h2 className="display-5 mb-4">Inner pages for everything you may need</h2>
                <p className="fs-lg text-dark pb-3 pb-sm-4 mb-lg-0" data-bs-theme="light">
                  Big collection of thoroughly designed inner page templates from User Account/Dashboard to Specialty pages like 404 and Coming Soon.
                </p>
              </div>
              <div className="d-lg-none">
                <h2 className="display-5 mb-4">Inner pages for everything you may need</h2>
                <p className="fs-lg pb-3 pb-sm-4 mb-lg-0">
                  Big collection of thoroughly designed inner page templates from User Account/Dashboard to Specialty pages like 404 and Coming Soon.
                </p>
              </div>
            </Col>
          </Row>
          <div className="d-none d-xl-block" style={{ marginTop: '-240px' }} />
          <div className="d-none d-lg-block d-xl-none" style={{ marginTop: '-160px' }} />
          <div className="d-flex position-relative z-2 mb-3">
            <div
              className="flex-xxl-shrink-0 position-relative z-2"
              style={{ maxWidth: 540, marginTop: '26%', marginRight: '-9.6%' }}
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={400}
              data-disable-parallax-down="lg"
            >
              <Image
                className="rounded-3 mt-n5 mt-lg-0 d-block d-dark-mode-none"
                src={inner01light}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(65,81,98, .2)' }}
              />
              <Image
                className="border rounded-3 mt-n5 mt-lg-0 d-none d-dark-mode-block"
                src={inner01dark}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(0,0,0, .2)' }}
              />
            </div>
            <div
              className="flex-xxl-shrink-0 position-relative z-1"
              style={{ maxWidth: 481, marginTop: '17.6%', marginRight: '-8.5%' }}
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={200}
              data-disable-parallax-down="lg"
            >
              <Image
                className="rounded-3 mt-n5 mt-lg-0 d-block d-dark-mode-none"
                src={inner02light}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(65,81,98, .2)' }}
              />
              <Image
                className="border rounded-3 mt-n5 mt-lg-0 d-none d-dark-mode-block"
                src={inner02dark}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(0,0,0, .2)' }}
              />
            </div>
            <div
              className="flex-xxl-shrink-0"
              style={{ maxWidth: 510 }}
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-offset={250}
              data-disable-parallax-down="lg"
            >
              <Image
                className="rounded-3 d-block d-dark-mode-none"
                src={inner03light}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(65,81,98, .2)' }}
              />
              <Image
                className="border rounded-3 d-none d-dark-mode-block"
                src={inner03dark}
                alt="Page"
                style={{ boxShadow: '1.875rem .625rem 5rem rgba(0,0,0, .2)' }}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default InnerPage
