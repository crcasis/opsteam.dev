import v202 from '@/assets/img/portfolio/single/v2/02.png'
import v203 from '@/assets/img/portfolio/single/v2/03.png'
import v204 from '@/assets/img/portfolio/single/v2/04.png'
import v205 from '@/assets/img/portfolio/single/v2/05.png'
import v206 from '@/assets/img/portfolio/single/v2/06.png'
import v207 from '@/assets/img/portfolio/single/v2/07.png'
import v208 from '@/assets/img/portfolio/single/v2/08.png'
import v209 from '@/assets/img/portfolio/single/v2/09.png'
import v210 from '@/assets/img/portfolio/single/v2/10.png'
import parallax from '@/assets/img/portfolio/single/v2/parallax.jpg'
import Jarallax from '@/components/Jarallax'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="container pt-lg-2 pt-xl-4 pt-xxl-5">
        <Row className="py-sm-3 py-md-4 py-lg-5">
          <Col md={3} lg={2} as={'aside'} style={{ marginTop: '-125px' }}>
            <div className="d-flex d-md-block flex-wrap position-sticky top-0" style={{ paddingTop: 130 }}>
              <div className="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
                <h2 className="fs-base fw-normal text-body-secondary mb-2">Company</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">Vintage</li>
                  <li className="d-block py-1">12-18 employees</li>
                  <li className="d-block py-1">Dublin, Ireland</li>
                  <li className="d-block py-1">
                    <Link className="text-dark" to="">
                      Visit website
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
                <h2 className="fs-base fw-normal text-body-secondary mb-2">Indusrty</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">E-commerce</li>
                </ul>
              </div>
              <div className="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
                <h2 className="fs-base fw-normal text-body-secondary mb-2">Services</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">Email marketing</li>
                  <li className="d-block py-1">Content marketing</li>
                  <li className="d-block py-1">Social networks</li>
                </ul>
              </div>
              <div className="pb-3 mb-2 mb-lg-4">
                <h2 className="fs-base fw-normal text-body-secondary mb-2">Time spent</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">2021, 3 months</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={9} className="offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              <div className="border-bottom pb-3 pb-sm-4 pb-lg-5 mb-4">
                <p className="text-dark lead mb-md-2 mb-lg-3 mb-xl-4">
                  Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat
                  massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et scelerisque
                  sit commodo.
                </p>
              </div>
              <h2 className="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">About the client</h2>
              <p className="fs-lg">
                Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur. Vel magna sit aliquet viverra morbi massa mattis urna,
                feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis dolor. Morbi et massa fames ac scelerisque sit commodo dignissim
                faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum
                lorem proin pretium dictum urna suspendisse quis risus et.
              </p>
              <h2 className="h1 pt-3 pt-sm-4 pt-xl-5 pb-2">The challenge</h2>
              <p className="fs-lg">
                Sit diam nunc, et pellentesque ornare elit, ut. Interdum feugiat id ut egestas tellus congue faucibus habitant semper nunc et etiam
                ultrices id nisi urna amet, odio mauris risus nam aliquam pharetra amet nunc, enim aliquet egestas purus penatibus ac, elit ultricies
                proin adipiscing suspendisse sit proin.
              </p>
              <h2 className="h1 pt-3 pt-sm-4 pt-xl-5 pb-2">The solution</h2>
              <p className="fs-lg mb-0">
                Est enim mollis morbi vulputate egestas commodo vitae quis sed sit ultrices nulla habitant sit faucibus orci. Eu etiam ipsum porttitor
                morbi urna eget aliquet aenean tristique amet tempus, vestibulum vel montes, pellentesque sit. Cursus nulla viverra elit accumsan,
                vitae. Phasellus sed hac at pharetra urna. Imperdiet egestas ac eget porttitor ultrices morbi ornare. Libero, lectus eget adipiscing
                odio ornare non maecenas non vitae libero, at feugiat urna, risus augue fringilla. Venenatis quam.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <Col sm={7} className="mb-4 mb-sm-0">
            <div className="position-relative mb-4">
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: '#2663f2' }}
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={250}
              />
              <Image className="position-relative z-2" src={v202} alt="Image" data-aos="zoom-in" data-aos-duration={400} data-aos-offset={250} />
            </div>
            <div className="position-relative">
              <div
                className="bg-black position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={250}
              />
              <Image className="position-relative z-2" src={v204} alt="Image" data-aos="zoom-in" data-aos-duration={400} data-aos-offset={250} />
            </div>
          </Col>
          <Col sm={5}>
            <div className="position-relative">
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ maxHeight: 588, backgroundColor: '#216d2a' }}
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={250}
              />
              <Image className="position-relative z-2" src={v203} alt="Image" data-aos="zoom-in" data-aos-duration={400} data-aos-offset={250} />
            </div>
          </Col>
        </Row>
        <Row className="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
          <Col md={7} xl={6} className="mb-4 mb-md-0">
            <p className="text-dark lead mb-0">
              Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa
              tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et scelerisque sit
              commodo.
            </p>
          </Col>
          <Col md={5} className="offset-xl-1">
            <Row className="row-cols-2 gx-3 gx-sm-4">
              <Col>
                <div className="h2 display-1 mb-0">30+</div>
                <p className="fs-sm mb-0">Different templates</p>
              </Col>
              <Col>
                <div className="h2 display-1 mb-0">150</div>
                <p className="fs-sm mb-0">Happy clients all over the world</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="position-relative w-100 mx-auto pb-1 pb-sm-3 pb-md-4" style={{ maxWidth: 1043 }}>
          <Image
            className="d-block position-relative z-5"
            src={v205}
            alt="Image"
            data-aos="fade-down-right"
            data-aos-duration={500}
            data-aos-offset={250}
          />
          <Image
            className="d-block position-absolute top-0 start-0 z-2"
            src={v206}
            alt="Image"
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-offset={250}
          />
          <Image
            className="d-block position-absolute top-0 start-0 z-1"
            src={v207}
            alt="Image"
            data-aos="fade-down"
            data-aos-duration={500}
            data-aos-offset={250}
          />
          <Image
            className="d-block position-absolute top-0 start-0"
            src={v208}
            alt="Image"
            data-aos="fade-left"
            data-aos-duration={500}
            data-aos-offset={250}
          />
        </div>
        <Row className="py-5 my-lg-3 my-xl-4 my-xxl-5">
          <Col sm={5} className="mb-4 mb-sm-0">
            <div className="position-relative">
              <div
                className="bg-secondary position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={250}
              />
              <Image className="position-relative z-2" src={v209} alt="Image" data-aos="zoom-in" data-aos-duration={400} data-aos-offset={250} />
            </div>
          </Col>
          <Col sm={7}>
            <div className="position-relative">
              <div
                className="bg-secondary position-absolute top-0 start-0 w-100 h-100"
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={250}
              />
              <Image className="position-relative z-2" src={v210} alt="Image" data-aos="zoom-in" data-aos-duration={400} data-aos-offset={250} />
            </div>
          </Col>
        </Row>
        <Row className="pt-1 pt-sm-3 pt-md-4 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
          <Col md={11} lg={9} xl={8} className="pb-1 pb-sm-3 pb-md-4">
            <h2 className="h1 pb-sm-2 pb-lg-3">Results</h2>
            <p className="fs-lg mb-0">
              Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa
              tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.
            </p>
            <Row className="row-cols-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 my-3">
              <Col>
                <div className="h2 display-1 mb-0">30+</div>
                <p className="fs-sm mb-0">Different templates</p>
              </Col>
              <Col>
                <div className="h2 display-1 mb-0">160%</div>
                <p className="fs-sm mb-0">Revenue increase</p>
              </Col>
              <Col>
                <div className="h2 display-1 mb-0">150</div>
                <p className="fs-sm mb-0">Happy clients all over the world</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className="jarallax" data-jarallax data-speed="0.6">
        <div className="ratio ratio-16x9" />
        <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${parallax})` }} />
      </section>
    </>
  )
}

export default About
