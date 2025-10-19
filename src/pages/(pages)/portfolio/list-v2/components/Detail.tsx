import boost from '@/assets/img/portfolio/brands/boost.svg'
import championdark from '@/assets/img/portfolio/brands/champion-blue-dark.svg'
import championlight from '@/assets/img/portfolio/brands/champion-blue-light.svg'
import purpledark from '@/assets/img/portfolio/brands/champion-purple-dark.svg'
import purplelight from '@/assets/img/portfolio/brands/champion-purple-light.svg'
import clutchdark from '@/assets/img/portfolio/brands/clutch-dark.svg'
import clutchlight from '@/assets/img/portfolio/brands/clutch-light.svg'
import deloittedark from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloittelight from '@/assets/img/portfolio/brands/deloitte-light.svg'
import green from '@/assets/img/portfolio/brands/foster-green.svg'
import yellow from '@/assets/img/portfolio/brands/foster-yellow.svg'
import vuedark from '@/assets/img/portfolio/brands/vuejs-dark.svg'
import vuelight from '@/assets/img/portfolio/brands/vuejs-light.svg'
import list06 from '@/assets/img/portfolio/list/06.png'
import list07 from '@/assets/img/portfolio/list/07.png'
import list08 from '@/assets/img/portfolio/list/08.png'
import list09 from '@/assets/img/portfolio/list/09.png'
import list10 from '@/assets/img/portfolio/list/10.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
      <section className="container pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Portfolio list v.2
            </li>
          </ol>
        </nav>
        <h1 className="pb-3">Our case studies</h1>
        <Row className="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <Col md={7} lg={6} className="mb-4 mb-md-0">
            <Link className="d-block position-relative" to="/portfolio/single-v1">
              <div
                className="bg-info rounded-5 position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
              />
              <Image
                className="d-block position-relative z-2 mx-auto"
                src={list06}
                width={636}
                alt="Image"
                data-aos="fade-in"
                data-aos-duration={400}
                data-aos-offset={250}
              />
            </Link>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1" data-aos="fade-up" data-aos-duration={400} data-aos-offset={170}>
            <div className="ps-md-3 ps-lg-0">
              <Image className="d-block d-dark-mode-none mb-2 mb-lg-3" src={championdark} alt="Champion" />
              <Image className="d-none d-dark-mode-block mb-2 mb-lg-3" src={championlight} alt="Champion" />
              <h2 className="h4">Development of an application for a national bank</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">
                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit
                commodo dignissim.
              </p>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
              <div className="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <h6 className="text-body mb-0 me-3">Awards:</h6>
                <Image className="d-block d-dark-mode-none me-4" src={vuedark} width={90} alt="Vue.js" />
                <Image className="d-none d-dark-mode-block me-4" src={vuelight} width={90} alt="Vue.js" />
                <Image className="d-block d-dark-mode-none" src={deloittedark} width={95} alt="Deloitte" />
                <Image className="d-none d-dark-mode-block" src={deloittelight} width={95} alt="Deloitte" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <Col md={7} lg={6} className="mb-4 mb-md-0">
            <Link className="d-block position-relative" to="/portfolio/single-v1">
              <div
                className="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
              />
              <Image
                className="d-block position-relative z-2 mx-auto"
                src={list07}
                width={636}
                alt="Image"
                data-aos="fade-in"
                data-aos-duration={400}
                data-aos-offset={250}
              />
            </Link>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1" data-aos="fade-up" data-aos-duration={400} data-aos-offset={170}>
            <div className="ps-md-3 ps-lg-0">
              <Image className="d-block mb-2 mb-lg-3" src={green} alt="Foster" />
              <h2 className="h4">Design and development of a dashboard for data management</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">
                Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui
                varius amet et quam massa auctor.
              </p>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <Col md={7} lg={6} className="mb-4 mb-md-0">
            <Link className="d-block position-relative" to="/portfolio/single-v1">
              <div
                className="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
              />
              <Image
                className="d-block position-relative z-2 ms-auto"
                src={list08}
                width={636}
                alt="Image"
                data-aos="fade-in"
                data-aos-duration={400}
                data-aos-offset={250}
              />
            </Link>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1" data-aos="fade-up" data-aos-duration={400} data-aos-offset={170}>
            <div className="ps-md-3 ps-lg-0">
              <Image className="d-block mb-2 mb-lg-3" src={boost} alt="Boost" />
              <h2 className="h4 mb-lg-4">Landing page for a marketing agency Boost</h2>
              <ul className="list-unstyled pb-1 pb-lg-2 mb-3">
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Faucibus sit est dui id gravida
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Lectus in sem eu facilisis ornare
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Massa maecenas cras vivamus
                </li>
              </ul>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <Col md={7} lg={6} className="mb-4 mb-md-0">
            <Link className="d-block position-relative" to="/portfolio/single-v1">
              <div
                className="rounded-5 position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: '#d7e4f4' }}
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
              />
              <Image
                className="d-block position-relative z-2 mx-auto"
                src={list09}
                width={636}
                alt="Image"
                data-aos="fade-in"
                data-aos-duration={400}
                data-aos-offset={250}
              />
            </Link>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1" data-aos="fade-up" data-aos-duration={400} data-aos-offset={170}>
            <div className="ps-md-3 ps-lg-0">
              <Image className="d-block d-dark-mode-none mb-2 mb-lg-3" src={purpledark} alt="Champion" />
              <Image className="d-none d-dark-mode-block mb-2 mb-lg-3" src={purplelight} alt="Champion" />
              <h2 className="h4">Development of an application for a task tracker</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">
                Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed
                maecenas lectus ut nec.
              </p>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
              <div className="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <h6 className="text-body mb-0 me-3">Awards:</h6>
                <Image className="d-block d-dark-mode-none me-4" src={clutchdark} width={92} alt="Clutch" />
                <Image className="d-none d-dark-mode-block me-4" src={clutchlight} width={92} alt="Clutch" />
                <Image className="d-block d-dark-mode-none" src={deloittedark} width={95} alt="Deloitte" />
                <Image className="d-none d-dark-mode-block" src={deloittelight} width={95} alt="Deloitte" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <Col md={7} lg={6} className="mb-4 mb-md-0">
            <Link className="d-block position-relative" to="/portfolio/single-v1">
              <div
                className="bg-warning rounded-5 position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={600}
                data-aos-offset={250}
              />
              <Image
                className="d-block position-relative z-2 ms-auto"
                src={list10}
                width={636}
                alt="Image"
                data-aos="fade-in"
                data-aos-duration={400}
                data-aos-offset={250}
              />
            </Link>
          </Col>
          <Col md={5} xl={4} className="offset-lg-1" data-aos="fade-up" data-aos-duration={400} data-aos-offset={170}>
            <div className="ps-md-3 ps-lg-0">
              <Image className="d-block mb-2 mb-lg-3" src={yellow} alt="Foster" />
              <h2 className="h4 mb-lg-4">Landing page for company for audience analysis </h2>
              <ul className="list-unstyled pb-1 pb-lg-2 mb-3">
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Faucibus sit est dui id gravida
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Lectus in sem eu facilisis ornare
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Massa maecenas cras vivamus
                </li>
              </ul>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Detail
