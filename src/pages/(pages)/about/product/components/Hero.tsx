import hero01dark from '@/assets/img/about/product/hero/01-dark.png'
import hero01light from '@/assets/img/about/product/hero/01-light.png'
import hero02dark from '@/assets/img/about/product/hero/02-dark.png'
import hero02light from '@/assets/img/about/product/hero/02-light.png'
import hero03dark from '@/assets/img/about/product/hero/03-dark.png'
import hero03light from '@/assets/img/about/product/hero/03-light.png'
import hero04dark from '@/assets/img/about/product/hero/04-dark.png'
import hero04light from '@/assets/img/about/product/hero/04-light.png'
import hero05dark from '@/assets/img/about/product/hero/05-dark.png'
import hero05light from '@/assets/img/about/product/hero/05-light.png'
import Parallax from '@/components/Parallax'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <section className="position-relative overflow-hidden pt-5">
        <Container className="position-relative z-2 pt-4 pt-sm-5 mt-2 mt-sm-0 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
          <Row className="justify-content-center py-4">
            <Col lg={11} xl={10} className=" text-center pb-2 pb-sm-3 mb-lg-2 mb-xl-3">
              <h1 className="display-2 fw-normal mb-0">
                <span className="fw-bold">Segment your audience</span> using a variety of methods
              </h1>
            </Col>
          </Row>
          <Parallax>
            <div className="parallax">
              <div className="parallax-layer" data-depth="-0.05">
                <Image className="d-dark-mode-none" src={hero01light} alt="Layer" />
                <Image className="d-none d-dark-mode-block" src={hero01dark} alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="0.1">
                <Image className="d-dark-mode-none" src={hero02light} alt="Layer" />
                <Image className="d-none d-dark-mode-block" src={hero02dark} alt="Layer" />
              </div>
              <div className="parallax-layer z-2" data-depth="0.2">
                <Image className="d-dark-mode-none" src={hero03light} alt="Layer" />
                <Image className="d-none d-dark-mode-block" src={hero03dark} alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="-0.2">
                <Image className="d-dark-mode-none" src={hero04light} alt="Layer" />
                <Image className="d-none d-dark-mode-block" src={hero04dark} alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="-0.25">
                <Image className="d-dark-mode-none" src={hero05light} alt="Layer" />
                <Image className="d-none d-dark-mode-block" src={hero05dark} alt="Layer" />
              </div>
            </div>
          </Parallax>
        </Container>
      </section>
    </>
  )
}

export default Hero
