import frature from '@/assets/img/about/product/features/01.png'
import feature02dark from '@/assets/img/about/product/features/02-dark.png'
import feature02light from '@/assets/img/about/product/features/02-light.png'
import feature03 from '@/assets/img/about/product/features/03.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>
      <section className="bg-dark position-relative overflow-hidden py-5">
        <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255,255,255, .03)' }} />
        <Container className="position-relative z-2 pt-3 pb-sm-3 pt-sm-4 py-md-5 my-lg-2 my-xl-3 my-xxl-4" data-bs-theme="dark">
          <Row
            className="align-items-center py-xxl-2"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={300}
            data-disable-parallax-down="md"
          >
            <Col md={6} className="pb-3 pb-md-0 mb-3 mb-md-0">
              <Image src={frature} width={620} alt="Image" />
            </Col>
            <Col
              md={6}
              lg={5}
              xxl={4}
              className="offset-lg-1"
              data-aos="fade-up"
              data-aos-duration={850}
              data-aos-offset={200}
              data-disable-parallax-down="md"
            >
              <div className="ps-md-4 ps-lg-0">
                <h2 className="mb-lg-4">Segment your audience using a variety of methods</h2>
                <p className="text-body pb-lg-2 mb-xl-4">
                  Segmentation allows you to divide users according to a given criterion, and then for each of the groups to develop an ads and
                  product. Bibendum velit mi, ac sed ac malesuada ultrices non lectus mi pellentesque vel at tempus cras sed a eleifend augue amet
                  mauris, leo ac amet erat malesuada ultrices.
                </p>
                <Link className="btn btn-lg btn-link px-0" to="">
                  Learn more
                  <i className="ai-arrow-right ms-2" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container pt-5 mt-lg-2 mt-xl-4 mt-xxl-5">
        <Row
          className="align-items-center pt-2 pt-sm-4 pt-md-5 mt-xl-2 mt-xxl-3"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={7} className="offset-xl-1 pb-3 pb-md-0 mb-3 mb-md-0 order-md-2">
            <Image className="d-dark-mode-none" src={feature02light} width={744} alt="Image" />
            <Image className="d-none d-dark-mode-block" src={feature02dark} width={744} alt="Image" />
          </Col>
          <Col md={5} xl={4} className="order-md-1" data-aos="fade-up" data-aos-duration={850} data-aos-offset={200} data-disable-parallax-down="md">
            <h2 className="mb-lg-4">Key performance indicators of audience</h2>
            <p className="pb-1 pb-md-2 mb-xl-4">
              You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and
              problems. Nec id eget suada urna at sed est adipiscing auctor massa id duis fames.
            </p>
            <Row className="row-cols-2">
              <Col>
                <div className="d-table bg-info text-white rounded-1 p-2 mb-3">
                  <i className="ai-time fs-3 m-1" />
                </div>
                <h3 className="h5 mb-2">Build in minutes</h3>
                <p className="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget commodo ornare et.</p>
              </Col>
              <Col>
                <div className="d-table bg-danger text-white rounded-1 p-2 mb-3">
                  <i className="ai-cloud-download fs-3 m-1" />
                </div>
                <h3 className="h5 mb-2">Download data</h3>
                <p className="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo consequat in ornare.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <section className="container pt-5 mt-lg-2 mt-xl-4 mt-xxl-5">
        <Row
          className="align-items-center pt-2 pt-sm-4 pt-md-5 mt-xl-2 mt-xxl-3"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} lg={5} className="pb-3 pb-md-0 mb-3 mb-md-0">
            <Image src={feature03} width={526} alt="Image" />
          </Col>
          <Col
            md={6}
            lg={5}
            xxl={4}
            className="offset-lg-1 offset-xxl-2"
            data-aos="fade-up"
            data-aos-duration={850}
            data-aos-offset={200}
            data-disable-parallax-down="md"
          >
            <div className="ps-md-4 ps-lg-0">
              <h2 className="mb-lg-4">Make visualization of data analysis results simple and clear way</h2>
              <p className="pb-2 pb-md-3 mb-xl-4">
                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat
                massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.
              </p>
              <Link className="btn btn-lg btn-outline-primary rounded-pill" to="">
                Start free 14-day trial
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Feature
