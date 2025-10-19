import v301 from '@/assets/img/services/v3/01.jpg'
import v302 from '@/assets/img/services/v3/02.jpg'
import v303 from '@/assets/img/services/v3/03.jpg'
import clouddark from '@/assets/img/services/v3/icons/cloud-dark.svg'
import cloudlight from '@/assets/img/services/v3/icons/cloud-light.svg'
import cogdark from '@/assets/img/services/v3/icons/cog-dark.svg'
import coglight from '@/assets/img/services/v3/icons/cog-light.svg'
import monitordark from '@/assets/img/services/v3/icons/monitor-dark.svg'
import monitorlight from '@/assets/img/services/v3/icons/monitor-light.svg'
import sizedark from '@/assets/img/services/v3/icons/size-dark.svg'
import sizelight from '@/assets/img/services/v3/icons/size-light.svg'
import timedark from '@/assets/img/services/v3/icons/time-dark.svg'
import timelight from '@/assets/img/services/v3/icons/time-light.svg'
import { Col, Image, Row } from 'react-bootstrap'

const Service = () => {
  return (
    <>
      <section className="container py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="align-items-center py-4 py-xl-5 my-2">
          <Col md={6} className="offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <Image className="rounded-5" src={v301} alt="Image" />
          </Col>
          <Col md={6} xl={5} className="order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="h1 pb-2 pb-lg-3">Web &amp; App development</h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean auctor cursus tortor non fermentum.
                Fusce ornare pulvinar nibh, sed facilisis eros congue pretium. Suspendisse et fermentum massa.
              </p>
              <Row className="row-cols-2">
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={monitordark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={monitorlight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">Custom websites</h3>
                  <p className="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
                </Col>
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={clouddark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={cloudlight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">Cloud computing</h3>
                  <p className="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center py-4 py-xl-5 my-2">
          <Col md={6} className="pb-2 mb-4 mb-md-0">
            <Image className="rounded-5" src={v302} alt="Image" />
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <div className="ps-md-4 pe-xl-0">
              <h2 className="h1 pb-2 pb-lg-3">Mobile app design</h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.
                Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam ultrices interdum vitae.
              </p>
              <Row className="row-cols-2">
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={cogdark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={coglight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">For iOS &amp; Android</h3>
                  <p className="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
                </Col>
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={timedark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={timelight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">Speed optimization</h3>
                  <p className="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center py-4 py-xl-5 my-2">
          <Col md={6} className="offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
            <Image className="rounded-5" src={v303} alt="Image" />
          </Col>
          <Col md={6} xl={5} className="order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="h1 pb-2 pb-lg-3">UI &amp; UX design</h2>
              <p className="pb-2 pb-lg-0 mb-4 mb-lg-5">
                Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do
                amet sint velit officia amet minim mollit non deserunt ullamco est sit aliqua dolor malesuada fames ac ante ipsum.
              </p>
              <Row className="row-cols-2">
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={monitordark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={monitorlight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">All business niches </h3>
                  <p className="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
                </Col>
                <Col>
                  <div className="d-table bg-secondary rounded-1 p-2 mb-3">
                    <Image className="d-block d-dark-mode-none m-1" src={sizedark} width={28} alt="Icon" />
                    <Image className="d-none d-dark-mode-block m-1" src={sizelight} width={28} alt="Icon" />
                  </div>
                  <h3 className="h5 mb-2">Customer focus</h3>
                  <p className="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Service
