import avatar from '@/assets/img/landing/intro/avatar.png'
import hero1 from '@/assets/img/landing/intro/hero/01.png'
import hero2 from '@/assets/img/landing/intro/hero/02.png'
import hero3 from '@/assets/img/landing/intro/hero/03.png'
import hero4 from '@/assets/img/landing/intro/hero/04.png'
import Parallax from '@/components/Parallax'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="bg-dark position-relative min-vh-100 overflow-hidden pt-5" data-bs-theme="dark">
        <svg
          className="position-absolute top-0"
          width={262}
          height={160}
          viewBox="0 0 262 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ left: '6%' }}
        >
          <ellipse cx={131} cy="30.5" rx={131} ry="129.5" fill="white" fillOpacity=".03" />
        </svg>
        <Container className="position-relative z-5 text-center pt-5 mt-lg-4 mt-xl-5">
          <h1 className="display-1 pt-4 mt-sm-3">
            <span className="text-white fw-normal">Have a look </span>
            <span className="d-inline-flex align-items-center">
              <span className="text-white">Ar</span>
              <Image className="flex-shrink-0 mt-2" src={avatar} width={51} alt="Image" />
              <span className="text-white">und!</span>
            </span>
          </h1>
          <p className="text-body fs-xl mb-5">And you will find everything you need to build a great looking website</p>
          <Link className="scroll-down-btn" to="#landings" data-scroll data-scroll-offset={20}>
            <div className="mouse" />
            <p>Landings</p>
          </Link>
        </Container>
        <div className="d-none d-lg-block" style={{ marginTop: '-80px' }} />
        <div className="d-none d-sm-block d-lg-none" style={{ marginTop: '-40px' }} />
        <Parallax>
          <div className="parallax mx-auto mb-n5" style={{ maxWidth: 1606 }}>
            <div className="parallax-layer" data-depth="-0.1">
              <Image src={hero1} alt="Background shapes" />
            </div>
            <div className="parallax-layer z-2" data-depth="0.12">
              <Image src={hero2} alt="Foreground shape" />
            </div>
            <div className="parallax-layer z-2" data-depth="0.35">
              <Image src={hero3} alt="Foreground shape" />
            </div>
            <div className="parallax-layer z-2" data-depth="0.23">
              <Image src={hero4} alt="Foreground shape" />
            </div>
          </div>
        </Parallax>
      </section>
    </>
  )
}

export default Hero
