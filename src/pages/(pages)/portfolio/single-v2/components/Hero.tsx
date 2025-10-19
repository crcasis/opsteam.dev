import v1 from '@/assets/img/portfolio/single/v2/01.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <section className="position-relative pt-5 mb-5">
        <div className="bg-secondary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" />
        <div className="bg-secondary position-absolute top-0 end-0 w-100 h-100 d-lg-none" />
        <Container className="position-relative z-2 py-5 pb-lg-0">
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-2 pb-1 breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/portfolio/grid-v2">Portfolio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Single project v.2
              </li>
            </ol>
          </nav>
          <div className="d-lg-flex align-items-center pt-3 pb-xxl-5">
            <Image className="d-block order-lg-2 me-auto me-lg-0 ms-auto" src={v1} width={480} alt="Image" />
            <div className="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
              <h1 className="display-2 text-uppercase pb-3 pb-lg-4">Perfect Instagram shots and stories</h1>
              <p className="fs-lg mx-auto mx-lg-0 mb-0" style={{ maxWidth: 530 }}>
                Ac facilisis erosers sem in faucibus aliquet venenatis amet mentum nisi mauris consectres sem malesuada viverra a non sapien odio id
                risus volutpat at massa tellus.
              </p>
            </div>
          </div>
          <ul className="nav justify-content-center justify-content-lg-start mx-n2 pt-lg-5 mb-0">
            <li className="nav-item me-3">
              <Link className="nav-link p-2" to="">
                instagram
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link p-2" to="">
                dribbble
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link p-2" to="">
                behance
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}

export default Hero
