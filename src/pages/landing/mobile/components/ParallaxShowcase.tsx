import awarddark from '@/assets/img/landing/mobile-app-showcase/awards/01-dark.png'
import awardlight from '@/assets/img/landing/mobile-app-showcase/awards/01-light.png'
import people01 from '@/assets/img/landing/mobile-app-showcase/people/01.png'
import people02 from '@/assets/img/landing/mobile-app-showcase/people/02.png'
import people03 from '@/assets/img/landing/mobile-app-showcase/people/03.png'
import people04 from '@/assets/img/landing/mobile-app-showcase/people/04.png'
import people05 from '@/assets/img/landing/mobile-app-showcase/people/05.png'
import people06 from '@/assets/img/landing/mobile-app-showcase/people/06.png'
import Parallax from '@/components/Parallax'
import { Col, Container, Image, Row } from 'react-bootstrap'

const ParallaxShowcase = () => {
  return (
    <>
      <section className="overflow-hidden pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Container className="pt-3 pt-sm-4 pt-lg-5 mt-md-3 mt-lg-0">
          <Row className="align-items-center">
            <Col md={7} xxl={6} className="offset-xl-1 offset-xxl-2 order-md-2 pb-2 pb-sm-0 mb-4 mb-sm-5 mb-md-0">
              <Parallax>
                <div className="parallax mx-auto" style={{ maxWidth: 560 }}>
                  <div className="parallax-layer" data-depth="0.1">
                    <Image src={people01} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.05">
                    <Image src={people02} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="0.2">
                    <Image src={people03} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="-0.15">
                    <Image src={people04} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="0.25">
                    <Image src={people05} alt="Layer" />
                  </div>
                  <div className="parallax-layer" data-depth="0.35">
                    <Image src={people06} alt="Layer" />
                  </div>
                </div>
              </Parallax>
            </Col>
            <Col md={5} xl={4} className="order-md-1">
              <h2 className="h1 text-center text-md-start mb-4">Online learning has already been chosen by 5 million people</h2>
              <ul className="d-table ps-4 pb-2 pb-sm-0 mx-auto mx-md-0 mb-4 mb-sm-5">
                <li className="mb-2">Amet minim mollit deserunt ullamco </li>
                <li className="mb-2">Velit officia consequat duis enim</li>
                <li>Exercitation veniam minim</li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start gap-4">
                <div>
                  <Image className="d-dark-mode-none" src={awarddark} width={188} alt="Award" />
                  <Image className="d-none d-dark-mode-block" src={awardlight} width={188} alt="Award" />
                </div>
                <div>
                  <Image className="d-dark-mode-none" src={awarddark} width={188} alt="Award" />
                  <Image className="d-none d-dark-mode-block" src={awardlight} width={188} alt="Award" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ParallaxShowcase
