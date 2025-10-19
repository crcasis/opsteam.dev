import pattern from '@/assets/img/landing/saas-4/pricing-bg-pattern.png'
import Jarallax from '@/components/Jarallax'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <section
        className="position-relative bg-dark pt-2 pt-lg-4 pt-xl-5"
        style={{ background: 'linear-gradient(90deg, #121519 0%, #191C20 51.04%, #121519 100%)' }}
      >
        <div className="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax data-speed="0.4">
          <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${pattern})` }} />
        </div>
        <Container className="position-relative z-2 pt-5" data-bs-theme="dark">
          <h2 className="h1 text-center pt-2 pt-sm-3 pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-2">Around vs Custom development</h2>
          <div className="position-relative ms-n4 ms-md-0 d-none d-md-block">
            <div
              className="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-none d-lg-block"
              style={{ width: 342 }}
            />
            <div
              className="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-lg-none"
              style={{ width: 300 }}
            />
            <Row className="row-cols-3 align-items-center position-relative z-2 g-0">
              <Col>&nbsp;</Col>
              <Col className="py-2 py-md-3">
                <div className="text-center py-4 mx-auto" style={{ width: 264 }}>
                  <h3 className="h4 mb-sm-4">Around</h3>
                  <Link to="" className="btn btn-primary w-100 rounded-pill mb-2">
                    Get started - Free
                  </Link>
                  <p className="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
                </div>
              </Col>
              <Col className="text-center pe-lg-5">
                <h3 className="h4 pt-3 pt-md-4 mb-0 mx-auto" style={{ width: 264 }}>
                  Building In-House
                </h3>
              </Col>
              <div className="position-relative w-100 opacity-40">
                <span
                  className="position-absolute top-0 start-0 w-100"
                  style={{ height: 1, background: 'linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)' }}
                />
                <span className="d-block w-100 bg-primary" style={{ height: 1 }} />
              </div>
            </Row>
            <Row className="row-cols-3 align-items-center position-relative z-2 g-0">
              <Col className="py-3 py-md-4 ps-lg-5">
                <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style={{ width: 208 }}>
                  Data Models Infrastructure Cost
                </div>
              </Col>
              <Col className="py-3 py-md-4">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Included</div>
                  <div className="text-body fs-xs">Cloud hosted AI/ML capacities</div>
                </div>
              </Col>
              <Col className="py-3 py-md-4 pe-lg-5">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">From $10k to $50k</div>
                  <div className="text-body fs-xs">per month</div>
                </div>
              </Col>
              <div className="position-relative w-100 opacity-40">
                <span
                  className="position-absolute top-0 start-0 w-100 h-1"
                  style={{ height: 1, background: 'linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)' }}
                />
                <span className="d-block w-100 bg-primary" style={{ height: 1 }} />
              </div>
            </Row>

            <Row className="row-cols-3 align-items-center position-relative z-2 g-0">
              <Col className="py-3 py-md-4 ps-lg-5">
                <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style={{ width: 208 }}>
                  Engineering Cost
                </div>
              </Col>
              <Col className="py-3 py-md-4">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Included</div>
                  <div className="text-body fs-xs">with our premium plans</div>
                </div>
              </Col>
              <Col className="py-3 py-md-4 pe-lg-5">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">From $25k to $30k</div>
                  <div className="text-body fs-xs">per engineer per month</div>
                </div>
              </Col>
              <div className="position-relative w-100 opacity-40">
                <span
                  className="position-absolute top-0 start-0 w-100 h-1"
                  style={{ height: 1, background: 'linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)' }}
                />
                <span className="d-block w-100 bg-primary" style={{ height: 1 }} />
              </div>
            </Row>

            <Row className="row-cols-3 align-items-center position-relative z-2 g-0">
              <Col className="py-3 py-md-4 ps-lg-5">
                <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style={{ width: 208 }}>
                  Time to Implement
                </div>
              </Col>
              <Col className="py-4">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Get started in minutes</div>
                </div>
              </Col>
              <Col className="py-3 py-md-4 pe-lg-5">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Average 6-9 months</div>
                  <div className="text-body fs-xs">depends on team qualification</div>
                </div>
              </Col>
              <div className="position-relative w-100 opacity-40">
                <span
                  className="position-absolute top-0 start-0 w-100 h-1"
                  style={{ height: 1, background: 'linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)' }}
                />
                <span className="d-block w-100 bg-primary" style={{ height: 1 }} />
              </div>
            </Row>

            <Row className="row-cols-3 align-items-center position-relative z-2 g-0">
              <Col className="py-3 py-md-4 ps-lg-5">
                <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style={{ width: 208 }}>
                  Maintenance &amp; Operational Cost
                </div>
              </Col>
              <Col className="py-3 py-md-4">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Included</div>
                  <div className="text-body fs-xs">with our premium plans</div>
                </div>
              </Col>
              <Col className="py-3 py-md-4 pe-lg-5">
                <div className="text-center py-1 px-4 mx-auto" style={{ width: 264 }}>
                  <div className="text-white fs-lg fw-semibold">Average $20k</div>
                  <div className="text-body fs-xs">per engineer per month</div>
                </div>
              </Col>
              <div className="position-relative w-100 opacity-40">
                <span
                  className="position-absolute top-0 start-0 w-100 h-1"
                  style={{ height: 1, background: 'linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%)' }}
                />
                <span className="d-block w-100 bg-primary" style={{ height: 1 }} />
              </div>
            </Row>
          </div>
          <Table className="table-layout-fixed d-md-none">
            {/* <table className="table table-layout-fixed d-md-none" style={{-arTableBg: 'transparent'}}> */}
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  <div className="h5">Around</div>
                  <Link to="" className="btn btn-sm btn-primary w-100 rounded-pill mb-2">
                    Get started - Free
                  </Link>
                  <p className="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
                </th>
                <th scope="col" className="align-middle text-center">
                  <div className="h5 mb-0">Building In-House</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" colSpan={2} className="bg-secondary text-white text-center">
                  Data Models Infrastructure Cost
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="text-white fw-semibold">Included</div>
                  <div className="text-body fs-xs">Cloud hosted AI/ML capacities</div>
                </td>
                <td className="text-center">
                  <div className="text-white fw-semibold">From $10k to $50k</div>
                  <div className="text-body fs-xs">per month</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2} className="bg-secondary text-white text-center">
                  Engineering Cost
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="text-white fw-semibold">Included</div>
                  <div className="text-body fs-xs">with our premium plans</div>
                </td>
                <td className="text-center">
                  <div className="text-white fw-semibold">From $25k to $30k</div>
                  <div className="text-body fs-xs">per engineer per month</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2} className="bg-secondary text-white text-center">
                  Time to Implement
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="text-white fw-semibold">Get started in minutes</div>
                </td>
                <td className="text-center">
                  <div className="text-white fw-semibold">Average 6-9 months</div>
                  <div className="text-body fs-xs">depends on team qualification</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan={2} className="bg-secondary text-white text-center">
                  Maintenance &amp; Operational Cost
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="text-white fw-semibold">Included</div>
                  <div className="text-body fs-xs">with our premium plans</div>
                </td>
                <td className="text-center">
                  <div className="text-white fw-semibold">Average $20k</div>
                  <div className="text-body fs-xs">per engineer per month</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="d-none d-md-block" style={{ height: 300 }} />
        <div className="d-md-none" style={{ height: 260 }} />
        <div className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style={{ color: 'var(--ar-body-bg)' }}>
          <div className="position-relative start-50 translate-middle-x flex-shrink-0" style={{ width: 3774 }}>
            <svg width={3774} height={201} viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
