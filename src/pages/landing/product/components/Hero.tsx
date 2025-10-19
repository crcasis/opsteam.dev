import hero from '@/assets/img/landing/product/hero-image.png'
import soundwave from '@/assets/img/landing/product/soundwave.svg'
import anim from '@/assets/json/animation-soundwave.json'
import { Player, Player as PlayerType } from '@lordicon/react'
import { useEffect, useRef } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Hero = () => {
  const lightRef = useRef<PlayerType | null>(null)
  useEffect(() => {
    lightRef.current?.playFromBeginning()
  }, [])
  return (
    <>
      <section className="position-relative pt-sm-3 pt-md-5 mb-xl-3 mb-xxl-5">
        <div className="position-absolute top-0 end-0 overflow-hidden mt-n5 mt-md-0">
          <svg
            className="d-block mt-n5 mt-md-0 me-md-n5 me-xxl-0"
            width={1207}
            height={894}
            viewBox="0 0 1207 894"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'var(--ar-gray-100)' }}
          >
            <circle cx={639} cy={255} r={639} />
          </svg>
          <div className="position-absolute top-0 end-0 opacity-20 mt-n5 mt-md-0 me-md-n5 me-xxl-n4" style={{ maxWidth: 560, height: 720 }}>
            <Player size={560} ref={lightRef} icon={anim} colors="transparent" onComplete={() => lightRef.current?.playFromBeginning()} />
          </div>
        </div>
        <Container className="pt-5 pb-lg-4 pb-xl-5 mt-5">
          <Row className="pt-xl-4">
            <Col md={5} lg={6} className="offset-xxl-1 order-md-2 position-relative mb-3 mb-md-0" style={{ marginTop: '-115px' }}>
              <div
                className="d-none d-md-block position-absolute bottom-0 end-0 text-uppercase fw-bold lh-1 pb-5 mb-4 pe-3"
                style={{ color: 'var(--ar-gray-100)', fontSize: 180, transform: 'translate3d(0,0,0)' }}
              >
                <div className="d-flex mb-lg-3" style={{ paddingLeft: 160 }}>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={150}>
                    A
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={200}>
                    r
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={250}>
                    o
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={300}>
                    u
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={350}>
                    n
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={400} data-aos-delay={400}>
                    d
                  </div>
                </div>
                <div className="d-flex">
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={300} data-aos-delay={150}>
                    M
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={300} data-aos-delay={200}>
                    u
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={300} data-aos-delay={250}>
                    s
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={300} data-aos-delay={300}>
                    i
                  </div>
                  <div data-aos="flip-right" data-aos-duration={700} data-aos-offset={300} data-aos-delay={350}>
                    c
                  </div>
                </div>
              </div>
              <div className="position-sticky z-3 top-0" style={{ paddingTop: 115 }}>
                <div className="px-5 px-md-0 ps-xl-5 ms-lg-3">
                  <Image className="d-block mx-auto mx-md-0" src={hero} width={465} alt="Headphones" />
                </div>
              </div>
            </Col>
            <Col md={7} lg={6} xxl={5} className="order-md-1 position-relative z-3 text-center text-md-start pb-sm-3 pb-md-5 pt-4 mb-md-5 mt-2">
              <h1 className="display-3 text-uppercase mb-sm-4">
                <span className="fw-medium">Choose only </span>
                <span className="text-info fw-bold">high quality sound</span>&nbsp;
                <Image className="d-none d-xl-inline-block align-middle ms-3" src={soundwave} width={200} alt="Sound wave" />
              </h1>
              <div className="mx-auto mx-md-0" style={{ maxWidth: 400 }}>
                <p className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                  Now you can fully hear every detail and experience superior sound with a wide soundstage with deep tight bass that will surprise
                  you.
                </p>
                <a className="btn btn-outline-dark" href="">
                  Support us on Kickstarter
                </a>
                <div className="d-flex justify-content-center justify-content-md-between pt-4 pt-sm-5 mt-2 mt-sm-0 mt-lg-4 mt-xl-5 ms-md-n3">
                  <div className="px-3">
                    <div className="h4 mb-1">60-200 Hz</div>
                    <div className="fs-sm">frequency range</div>
                  </div>
                  <div className="px-3">
                    <div className="h4 mb-1">0.75 kg</div>
                    <div className="fs-sm">weight, kg</div>
                  </div>
                  <div className="px-3">
                    <div className="h4 mb-1">60 h</div>
                    <div className="fs-sm">working hours</div>
                  </div>
                </div>
                <div className="d-none d-xxl-block" style={{ height: 290 }} />
                <div className="d-none d-md-block d-xxl-none" style={{ height: 240 }} />
                <div className="d-md-none" style={{ height: 50 }} />
                <div data-aos="fade-up" data-aos-duration={800} data-aos-offset={250} data-disable-parallax-down="md">
                  <h2 className="h1 pb-sm-2 pb-md-3">You can take the music anywhere in posuere the music</h2>
                  <p>
                    Turpis nullam netus sed aliquam consectetur at felis consequat tincidunt orci varius arcu urna neque eget maecenas consequat lacus
                    habitasse adipiscing in.
                  </p>
                  <a className="btn btn-link text-dark px-0" href="">
                    Read more
                    <i className="ai-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
