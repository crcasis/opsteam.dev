import alpega from '@/assets/img/portfolio/brands/alpega.png'
import who from '@/assets/img/portfolio/brands/who.png'
import capturelogo from '@/assets/img/portfolio/brands/capture-logo.png'
import deloittedark from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloittelight from '@/assets/img/portfolio/brands/deloitte-light.svg'
import vuejsdark from '@/assets/img/portfolio/brands/vuejs-dark.svg'    
import vuejslight from '@/assets/img/portfolio/brands/vuejs-light.svg'
import list07 from '@/assets/img/portfolio/list/07.png'
// import list08 from '@/assets/img/portfolio/list/08.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import tendereasy from '@/assets/img/portfolio/list/tendereasy.png'
import herams from '@/assets/img/portfolio/list/herams.webp'

const Portfolio = () => {
  return (
    <>
      <section className="container pt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <h2 className="h1 text-center">Recent case studies</h2>
        <p className="pb-4 mb-md-2 mb-lg-3 text-center">Below you'll find handpicked recent projects we are most proud of</p>
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
                className="d-block position-relative z-2 ms-auto"
                src={tendereasy}
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
              <Image className="d-block d-dark-mode-none mb-2 mb-lg-3" src={alpega} alt="Alpega" />
              <Image className="d-none d-dark-mode-block mb-2 mb-lg-3" src={alpega} alt="Alpega" />
              <h2 className="h4">Development of an application for a logistic company</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">
              Multi-cloud platform between AWS and Azure, running both EKS and Openshift clusters using Terraform and CI/CD for pipeline automation.
              </p>
              <Link className="btn btn-sm btn-outline-dark rounded-pill" to="/portfolio/single-v1">
                Read the full story
              </Link>
              <div className="d-flex align-items-center pt-2 pt-lg-3 mt-3">
                <h6 className="text-body mb-0 me-3">Awards:</h6>
                <Image className="d-block d-dark-mode-none me-4" src={vuejsdark} width={90} alt="Vue.js" />
                <Image className="d-none d-dark-mode-block me-4" src={vuejslight} width={90} alt="Vue.js" />
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
              <Image className="d-block mb-2 mb-lg-3" src={capturelogo} alt="capturelogo" />
              <h2 className="h4">Design and Architecture of HA E-commerce platform</h2>
              <p className="fs-sm pb-3 pb-lg-4 mb-3">
              Design the Cloud Architecture of Openshift Clusters ROSA and ARO with Pipelines, Scalability, Security and Monitoring of the platform.
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
                src={herams}
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
              <Image className="d-block mb-2 mb-lg-3" src={who} alt="who" />
              <h2 className="h4 mb-lg-4">Infrastructure for Herams platform</h2>
              <ul className="list-unstyled pb-1 pb-lg-2 mb-3">
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  AWS EKS - Cloudfront Distributioh
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  AWS RDS, S3, ACM and Load Balancing
                </li>
                <li className="d-flex pb-1 mb-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  CI/CD with GitHub  / Grafana & ELK Stack
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

export default Portfolio
