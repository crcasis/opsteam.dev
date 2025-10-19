import cta from '@/assets/img/landing/shop-2/hero-cta.jpg'
import img from '@/assets/img/landing/shop-2/hero-img.png'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="position-relative mt-5">
        <div
          className="position-absolute w-100 h-100 top-0 start-0 bg-size-cover bg-position-center mt-4"
          style={{ backgroundImage: `url(${cta})` }}
        />
        <Container className="position-relative z-2 text-center pt-2 pt-sm-4 pt-lg-5">
          <h1 className="display-1 text-white pt-5 mt-3">
            All you need is&nbsp;
            <span className="d-inline-flex align-items-center">
              macar
              <Image className="mx-1" src={img} width={85} alt="Macaron" />n
            </span>
          </h1>
          <p className="text-white fs-xl opacity-90 mx-auto pb-3 pb-md-0 mb-4 mb-md-5" style={{ maxWidth: 640 }}>
            Every macaron is a little delight waiting to brighten your day. Dive into macarons world and let your taste buds dance with delight.
          </p>
          <Link className="btn btn-light rounded-pill" to="">
            Go to Shop
          </Link>
        </Container>
        <div className="d-none d-lg-block" style={{ height: 360 }} />
        <div className="d-none d-md-block d-lg-none" style={{ height: 260 }} />
        <div className="d-md-none" style={{ height: 160 }} />
      </section>
    </>
  )
}

export default Hero
