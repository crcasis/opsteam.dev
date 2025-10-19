import graygray1 from '@/assets/img/landing/saas-2/tools/circle-gray-1.png'
import graygray2 from '@/assets/img/landing/saas-2/tools/circle-gray-2.png'
import grayight1 from '@/assets/img/landing/saas-2/tools/circle-light-1.png'
import grayight2 from '@/assets/img/landing/saas-2/tools/circle-light-2.png'
import icon1 from '@/assets/img/landing/saas-2/tools/icon-1.png'
import icon2 from '@/assets/img/landing/saas-2/tools/icon-2.png'
import icon3 from '@/assets/img/landing/saas-2/tools/icon-3.png'
import icon4 from '@/assets/img/landing/saas-2/tools/icon-4.png'
import icon5 from '@/assets/img/landing/saas-2/tools/icon-5.png'
import icon6 from '@/assets/img/landing/saas-2/tools/icon-6.png'
import icon7 from '@/assets/img/landing/saas-2/tools/icon-7.png'
import icon8 from '@/assets/img/landing/saas-2/tools/icon-8.png'
import icon9 from '@/assets/img/landing/saas-2/tools/icon-9.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tools = () => {
  return (
    <>
      <section className="container overflow-hidden pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
        <Row className="align-items-center mt-2 pt-2 pt-sm-4 pt-lg-5">
          <Col md={5} className="text-center text-md-start pe-md-5 pe-lg-0 pe-xxl-4 ps-xl-5 mb-5 mb-md-0">
            <h2 className="h1 pb-3 pb-xl-2 mb-lg-4 mb-xl-5">Join Around with your favorite tools that you use daily and keep things on track</h2>
            <Link className="btn btn-outline-primary rounded-pill" to="">
              See all integrations
            </Link>
          </Col>
          <Col md={7} lg={6} className="offset-lg-1">
            <div className="position-relative mx-auto" style={{ maxWidth: 510 }}>
              <Image className="d-block d-dark-mode-none" src={graygray1} style={{ animation: 'rotate-cw 100s linear infinite' }} alt="Circle" />
              <Image className="d-none d-dark-mode-block" src={grayight1} style={{ animation: 'rotate-cw 100s linear infinite' }} alt="Circle" />
              <Image
                className="d-block d-dark-mode-none position-absolute top-0 start-0"
                src={graygray2}
                style={{ animation: 'rotate-ccw 50s linear infinite' }}
                alt="Circle"
              />
              <Image
                className="d-none d-dark-mode-block position-absolute top-0 start-0"
                src={grayight2}
                style={{ animation: 'rotate-ccw 50s linear infinite' }}
                alt="Circle"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon1}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={1200}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon2}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={450}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon3}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={600}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon4}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={750}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon5}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={900}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon6}
                data-aos="fade"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={1050}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon7}
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon8}
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={150}
                alt="Icon"
              />
              <Image
                className="position-absolute top-0 start-0 z-2"
                src={icon9}
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
                data-aos-delay={300}
                alt="Icon"
              />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Tools
