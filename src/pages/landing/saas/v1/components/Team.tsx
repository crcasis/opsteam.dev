import featuresdark from '@/assets/img/landing/saas-1/features/02-dark.png'
import featureslight from '@/assets/img/landing/saas-1/features/02-light.png'
import features3dark from '@/assets/img/landing/saas-1/features/03-dark.png'
import features3light from '@/assets/img/landing/saas-1/features/03-light.png'
import features4dark from '@/assets/img/landing/saas-1/features/04-dark.png'
import features4light from '@/assets/img/landing/saas-1/features/04-light.png'
import { Col, Image, Row } from 'react-bootstrap'

const Team = () => {
  return (
    <>
      <section className="container pt-5 pb-4 mb-2 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="justify-content-center pt-2 pt-sm-3 pt-md-4 mt-lg-2 pb-lg-2 pb-xl-0">
          <Col sm={11} md={9} lg={8} xl={7} xxl={6} className="text-center">
            <h2 className="h1 mb-0">Powerful and highly customizable data analysis tool</h2>
          </Col>
        </Row>
        <Row
          className="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} className="pt-xl-2 offset-xl-1 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
            <Image className="d-dark-mode-none" src={featureslight} width={636} alt="Image" />
            <Image className="d-none d-dark-mode-block" src={featuresdark} width={636} alt="Image" />
          </Col>
          <Col
            md={6}
            xl={5}
            className="order-md-1 pt-xl-2"
            data-aos="fade-up"
            data-aos-duration={850}
            data-aos-offset={200}
            data-disable-parallax-down="md"
          >
            <div className="pe-md-3 pe-xl-0">
              <span className="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Team activities</span>
              <h3 className="h2 mb-lg-4">Key performance indicators of marketing activities</h3>
              <p className="mb-0">
                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat
                massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          className="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} className="pt-xl-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
            <Image className="d-dark-mode-none" src={features3light} width={636} alt="Image" />
            <Image className="d-none d-dark-mode-block" src={features3dark} width={636} alt="Image" />
          </Col>
          <Col
            md={6}
            xl={5}
            className="offset-xl-1 pt-xl-2"
            data-aos="fade-up"
            data-aos-duration={850}
            data-aos-offset={200}
            data-disable-parallax-down="md"
          >
            <div className="ps-md-3 ps-xl-0">
              <span className="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Team activities</span>
              <h3 className="h2 mb-lg-4">Key performance indicators of marketing activities</h3>
              <ul className="list-unstyled mb-0">
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Segmenting the audience is easy and simple
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Functional dashboard for managing your data
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                  Key performance indicators of team interaction
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row
          className="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} className="offset-xl-1 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
            <Image className="d-dark-mode-none" src={features4light} width={636} alt="Image" />
            <Image className="d-none d-dark-mode-block" src={features4dark} width={636} alt="Image" />
          </Col>
          <Col md={6} xl={5} className="order-md-1" data-aos="fade-up" data-aos-duration={850} data-aos-offset={200} data-disable-parallax-down="md">
            <div className="pe-md-3 pe-xl-0">
              <span className="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Segmentation</span>
              <h3 className="h2 mb-lg-4">Segmentation of the audience using different methods</h3>
              <p className="mb-0">
                Facilisi eu neque amet, orci tellus nibh amet tincidunt nunc, feugiat arcu vulputate duis. Quis odio mauris, in sed pharetra velit
                egestas risus purus tincidunt. Nisl in enim, gravida risus enim risus non et in iaculis non facilisis eget blandit id vulputate.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Team
