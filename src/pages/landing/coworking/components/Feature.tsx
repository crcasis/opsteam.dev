import frature01 from '@/assets/img/landing/coworking-space/features/01.jpg'
import frature02 from '@/assets/img/landing/coworking-space/features/02.png'
import frature03 from '@/assets/img/landing/coworking-space/features/03.jpg'
import circledark from '@/assets/img/landing/coworking-space/features/circles-dark.png'
import circlelight from '@/assets/img/landing/coworking-space/features/circles-light.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <section className="bg-secondary py-5">
        <Container className="py-lg-3 py-xl-4 py-xxl-5">
          <h2 className="h1 text-center pt-1 pt-sm-3 pt-md-4 pb-3 pb-sm-4 pb-lg-5">Why choose Around as a coworking space</h2>
          <Row
            className="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={300}
            data-disable-parallax-down="md"
          >
            <Col md={6} className="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <Image className="d-block rounded-5 mx-auto" src={frature01} width={470} alt="Image" />
            </Col>
            <Col
              md={6}
              lg={5}
              xl={4}
              className="offset-lg-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={200}
              data-disable-parallax-down="md"
            >
              <div className="ps-md-4 ps-lg-0">
                <h3 className="h2 pb-md-2 pb-lg-3">Fixed workplace when buying a monthly pass</h3>
                <p className="mb-4 pb-md-2 pb-lg-0 mb-lg-5">
                  Morbi et massa fames ac scelerisque sit commodo dignissim aucibus vel quisque proin lectus laoreet adipiscing sollicitudin erat
                  massa tellus lorem.
                </p>
                <Link className="btn btn-sm btn-primary" to="">
                  Buy a monthly pass
                </Link>
              </div>
            </Col>
          </Row>
          <Row
            className="align-items-center pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={300}
            data-disable-parallax-down="md"
          >
            <Col md={6} className="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <div className="position-relative overflow-hidden mx-auto" style={{ maxWidth: 503 }}>
                <Image className="position-relative z-2" src={frature02} alt="Image" />
                <Image
                  className="position-absolute top-0 start-0 d-dark-mode-none"
                  src={circledark}
                  alt="Image"
                  style={{ animation: 'rotate-cw 60s linear infinite' }}
                />
                <Image
                  className="position-absolute top-0 start-0 d-none d-dark-mode-block"
                  src={circlelight}
                  alt="Image"
                  style={{ animation: 'rotate-cw 60s linear infinite' }}
                />
              </div>
            </Col>
            <Col
              md={6}
              lg={5}
              xl={4}
              className="offset-lg-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={200}
              data-disable-parallax-down="md"
            >
              <div className="ps-md-4 ps-lg-0">
                <h3 className="h2 pb-md-2 pb-lg-3">
                  Buy passes for a team of 5 or more members with a <span className="text-danger">20% discount</span>
                </h3>
                <p className="mb-0">
                  Scelerisque et massa fames ac morbi sit commodo dignissim aucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat
                  massa tellus lorem aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus.
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className="align-items-center pb-2 pb-sm-4 pb-lg-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={300}
            data-disable-parallax-down="md"
          >
            <Col md={6} className="pb-1 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <Image className="d-block rounded-5 mx-auto" src={frature03} width={470} alt="Image" />
            </Col>
            <Col
              md={6}
              lg={5}
              xl={4}
              className="offset-lg-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={200}
              data-disable-parallax-down="md"
            >
              <div className="ps-md-4 ps-lg-0">
                <h3 className="h2 pb-md-2 pb-lg-3">Private fully equipped halls for online meetings and conferences</h3>
                <ul className="list-unstyled fs-lg mb-0">
                  <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    Faucibus vel quisque lectus laoreet sem
                  </li>
                  <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    Egestas in porta netus semper at nunc
                  </li>
                  <li className="d-flex pt-1 mt-2 mx-2 mx-md-0">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                    Sed amet est at faucibus dolor sed
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Feature
