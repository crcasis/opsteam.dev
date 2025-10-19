import heroBg from '@/assets/img/services/v3/hero-bg.jpg'
import iconcog from '@/assets/img/services/v3/icons/cog-white.svg'
import iconmonitor from '@/assets/img/services/v3/icons/monitor-white.svg'
import iconsize from '@/assets/img/services/v3/icons/size-white.svg'
import icontime from '@/assets/img/services/v3/icons/time-white.svg'
import Jarallax from '@/components/Jarallax'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type HeroType = {
  icon: string
  title: string
}

const hero: HeroType[] = [
  { icon: icontime, title: 'Individual approach' },
  { icon: iconcog, title: 'Integrated analytics' },
  { icon: iconmonitor, title: 'Step by step work' },
  { icon: iconsize, title: 'Full range of services' },
]

const Hero = () => {
  return (
    <>
      <section className="jarallax bg-dark py-5" data-jarallax data-speed="0.6" data-bs-theme="dark">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-60" />
        <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${heroBg})` }} />
        <Container className="position-relative z-2 pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-3 mb-0 breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services v.3
              </li>
            </ol>
          </nav>
          <div className="d-none d-xxl-block" style={{ height: 170 }} />
          <div className="d-none d-lg-block d-xxl-none" style={{ height: 120 }} />
          <div className="d-none d-md-block d-lg-none" style={{ height: 80 }} />
          <div className="d-md-none" style={{ height: 40 }} />
          <h1 className="display-2 mb-4">Our services</h1>
          <p className="text-body mb-0" style={{ maxWidth: 480 }}>
            Web studio Around is a team that creates effective websites and applications that will help you grow your business.
          </p>
          <div className="d-none d-xxl-block" style={{ height: 220 }} />
          <div className="d-none d-lg-block d-xxl-none" style={{ height: 160 }} />
          <div className="d-none d-md-block d-lg-none" style={{ height: 100 }} />
          <div className="d-md-none" style={{ height: 50 }} />
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-1 pb-md-3">
            {hero.map((item, idx) => (
              <Col key={idx}>
                <div className="d-flex align-items-center">
                  <div className="position-rlative flex-shrink-0 rounded-1 overflow-hidden p-2">
                    <div className="bg-white opacity-40 position-absolute top-0 start-0 w-100 h-100" />
                    <Image className="d-block m-1" src={item.icon} width={32} alt="Icon" />
                  </div>
                  <h3 className="h5 ps-3 mb-0">{item.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
