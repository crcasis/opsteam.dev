import list01 from '@/assets/img/portfolio/list/01.jpg'
import list02 from '@/assets/img/portfolio/list/02.jpg'
import list03 from '@/assets/img/portfolio/list/03.jpg'
import list04 from '@/assets/img/portfolio/list/04.jpg'
import list05 from '@/assets/img/portfolio/list/05.jpg'
import { Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
          <nav aria-label="breadcrumb">
            <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Portfolio list v.1
              </li>
            </ol>
          </nav>
          <h1 className="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">Case studies</h1>
          <article
            className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
          >
            <Col md={7} className="offset-xxl-1 mb-4 mb-md-0">
              <Link to="/portfolio/single-v1">
                <Image className="rounded-5" src={list01} width={700} alt="Image" />
              </Link>
            </Col>
            <Col md={5} xl={4} data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{ maxWidth: 330 }}>
                <div className="text-body-secondary mb-2">Branding, Strategy</div>
                <h2 className="mb-lg-4">
                  <Link to="/portfolio/single-v1">Design for eco bags and merch</Link>
                </h2>
                <p className="mb-0 mb-md-1 mb-lg-3">
                  Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit
                  commodo dignissim vel.
                </p>
                <Link className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" to="/portfolio/single-v1">
                  Read more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </article>
          <article
            className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
          >
            <Col md={7} className="order-md-2 mb-4 mb-md-0">
              <Link to="/portfolio/single-v1">
                <Image className="rounded-5" src={list02} width={700} alt="Image" />
              </Link>
            </Col>
            <Col
              md={5}
              xl={4}
              className="offset-xxl-1 order-md-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{ maxWidth: 330 }}>
                <div className="text-body-secondary mb-2">Branding</div>
                <h2 className="mb-lg-4">
                  <Link to="/portfolio/single-v1">Handmade tableware company</Link>
                </h2>
                <p className="mb-0 mb-md-1 mb-lg-3">
                  Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui
                  varius amet et quam massa auctor odio.
                </p>
                <Link className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" to="/portfolio/single-v1">
                  Read more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </article>
          <article
            className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
          >
            <Col md={7} className="offset-xxl-1 mb-4 mb-md-0">
              <Link to="/portfolio/single-v1">
                <Image className="rounded-5" src={list03} width={700} alt="Image" />
              </Link>
            </Col>
            <Col md={5} xl={4} data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{ maxWidth: 330 }}>
                <div className="text-body-secondary mb-2">Identity, Packaging</div>
                <h2 className="mb-lg-4">
                  <Link to="/portfolio/single-v1">Bottle for French perfume brand</Link>
                </h2>
                <p className="mb-0 mb-md-1 mb-lg-3">
                  Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed
                  maecenas lectus ut nec eu.
                </p>
                <Link className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" to="/portfolio/single-v1">
                  Read more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </article>
          <article
            className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
          >
            <Col md={7} className="order-md-2 mb-4 mb-md-0">
              <Link to="/portfolio/single-v1">
                <Image className="rounded-5" src={list04} width={700} alt="Image" />
              </Link>
            </Col>
            <Col
              md={5}
              xl={4}
              className="offset-xxl-1 order-md-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={180}
              data-disable-parallax-down="md"
            >
              <div className="me-md-4 me-lg-5 me-xxl-0" style={{ maxWidth: 330 }}>
                <div className="text-body-secondary mb-2">E-book, Branding</div>
                <h2 className="mb-lg-4">
                  <Link to="/portfolio/single-v1">Book cover design Twin Fish</Link>
                </h2>
                <p className="mb-0 mb-md-1 mb-lg-3">
                  Sed feugiat tristique enim aenean netus cum adipiscing est sem eget nulla leo vestibulum. Cras urna, proin ut ut dictum risus
                  porttitor nulla consequat et iaculis.
                </p>
                <Link className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" to="/portfolio/single-v1">
                  Read more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </article>
          <article
            className="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
          >
            <Col md={7} className="offset-xxl-1 mb-4 mb-md-0">
              <Link to="/portfolio/single-v1">
                <Image className="rounded-5" src={list05} width={700} alt="Image" />
              </Link>
            </Col>
            <Col md={5} xl={4} data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
              <div className="ms-md-4 ms-lg-5 ms-xxl-0" style={{ maxWidth: 330 }}>
                <div className="text-body-secondary mb-2">Branding, Strategy</div>
                <h2 className="mb-lg-4">
                  <Link to="/portfolio/single-v1">Business cards and identity for Sen Jonson</Link>
                </h2>
                <p className="mb-0 mb-md-1 mb-lg-3">
                  Lectus lacus, ac justo, ullamcorper egestas at felis arcu arcu venenatis praesent odio. Odio vulputate purus placerat ultrices
                  faucibus sem sed magna est elementum.
                </p>
                <Link className="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex" to="/portfolio/single-v1">
                  Read more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </article>
        </Container>
      </section>
    </>
  )
}

export default Detail
