import airbnb from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import alpine from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import champion from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import foster from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import klinos from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import starcraft from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import hero01 from '@/assets/img/landing/saas-2/hero/01.png'
import hero02 from '@/assets/img/landing/saas-2/hero/02.png'
import hero03 from '@/assets/img/landing/saas-2/hero/03.png'
import hero04 from '@/assets/img/landing/saas-2/hero/04.png'
import hero05 from '@/assets/img/landing/saas-2/hero/05.png'
import Parallax from '@/components/Parallax'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="bg-dark d-flex min-vh-100 position-relative overflow-hidden py-5" data-bs-theme="dark">
        <Container className="d-flex flex-column justify-content-center position-relative z-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
          <Row className="flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
            <Col lg={7} className="order-lg-2 ms-lg-4 mb-2 mb-lg-0">
              <Parallax>
                <div className="parallax order-lg-2 mx-auto" style={{ maxWidth: 740 }}>
                  <div className="parallax-layer" data-depth="0.05">
                    <Image src={hero01} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.05">
                    <Image src={hero02} style={{ animation: 'rotate-cw 100s linear infinite' }} alt="Layer" />
                  </div>
                  <div className="parallax-layer z-2" data-depth="0.3">
                    <Image src={hero03} alt="Layer" />
                  </div>
                  <div className="parallax-layer z-2" data-depth="0.15">
                    <Image src={hero04} alt="Layer" />
                  </div>
                  <div className="parallax-layer z-2" data-depth="0.4">
                    <Image src={hero05} alt="Layer" />
                  </div>
                </div>
              </Parallax>
            </Col>
            <Col lg={5} className="order-lg-1 text-center text-lg-start me-xl-5">
              <span className="badge bg-warning bg-opacity-10 text-warning fs-sm">Take your data to the next level&nbsp; 🚀</span>
              <h1 className="display-4 py-3 my-2 mb-xl-3">The platform to manage business</h1>
              <ul className="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
                <li className="d-flex text-body pb-2 mb-1">
                  <i className="ai-check-alt text-primary lead me-2" />
                  Segmenting the audience is easy and simple
                </li>
                <li className="d-flex text-body pb-2 mb-1">
                  <i className="ai-check-alt text-primary lead me-2" />
                  Functional dashboard for managing your data
                </li>
                <li className="d-flex text-body pb-2 mb-1">
                  <i className="ai-check-alt text-primary lead me-2" />
                  Key performance indicators of team interaction
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-lg-start pt-4 pt-xl-5">
                <div className="text-center">
                  <Link className="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto" to="">
                    Start free 14-day trial
                  </Link>
                  <p className="text-body fs-sm pt-2 mt-sm-1 mb-0">100% free to get started!</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 justify-content-center align-items-center g-4 pt-lg-3 pt-xl-4">
            <Col>
              <Image className="d-block my-1 mx-auto" src={foster} width={145} alt="Foster" />
            </Col>
            <Col>
              <Image className="d-block my-1 mx-auto" src={klinos} width={140} alt="Klinos" />
            </Col>
            <Col>
              <Image className="d-block my-1 mx-auto" src={champion} width={160} alt="Champion" />
            </Col>
            <Col>
              <Image className="d-block my-1 mx-auto" src={airbnb} width={130} alt="Airbnb" />
            </Col>
            <Col>
              <Image className="d-block my-1 mx-auto" src={starcraft} width={160} alt="Starcraft" />
            </Col>
            <Col>
              <Image className="d-block my-1 mx-auto" src={alpine} width={150} alt="Alpine" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
