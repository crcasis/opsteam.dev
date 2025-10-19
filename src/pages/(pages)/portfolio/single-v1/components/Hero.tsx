import vintagedark from '@/assets/img/portfolio/brands/vintage-dark.svg'
import vintagelight from '@/assets/img/portfolio/brands/vintage-light.svg'
import v1 from '@/assets/img/portfolio/single/v1/01.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="pt-lg-2 pb-lg-3 pb-1 breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/portfolio/list-v1">Portfolio</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Single project v.1
          </li>
        </ol>
      </nav>
      <Row>
        <Col lg={11} xl={10}>
          <Image className="d-block d-dark-mode-none mb-2 mb-sm-3" src={vintagedark} alt="Vintage" />
          <Image className="d-none d-dark-mode-block mb-2 mb-sm-3" src={vintagelight} alt="Vintage" />
          <h1 className="display-2 pb-3 pb-md-4 pb-lg-5">Business strategy for a brand of vintage bags</h1>
        </Col>
      </Row>
      <Image className="d-block rounded-5 mb-3 mb-xl-4 mb-xxl-5" src={v1} alt="Image" />
      <div className="border-bottom py-4 py-lg-5">
        <Row>
          <Col lg={11} xl={10}>
            <p className="text-dark lead mb-2 mb-lg-3-0 mb-xl-4 mb-xxl-3">
              Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa
              tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.
            </p>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 g-sm-4 pt-4 pt-xxl-5 mb-2 mb-sm-3 pb-xxl-4">
              <Col>
                <h2 className="fs-base fw-normal text-body-secondary mb-2 mb-sm-3">Company</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">Vintage</li>
                  <li className="d-block py-1">12-18 employees</li>
                  <li className="d-block py-1">Dublin, Ireland</li>
                </ul>
              </Col>
              <Col>
                <h2 className="fs-base fw-normal text-body-secondary mb-2 mb-sm-3">Indusrty</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">E-commerce</li>
                </ul>
              </Col>
              <Col>
                <h2 className="fs-base fw-normal text-body-secondary mb-2 mb-sm-3">Services</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">Email marketing</li>
                  <li className="d-block py-1">Content marketing</li>
                  <li className="d-block py-1">Social networks</li>
                </ul>
              </Col>
              <Col>
                <h2 className="fs-base fw-normal text-body-secondary mb-2 mb-sm-3">Time spent</h2>
                <ul className="list-unstyled fs-lg fw-semibold text-dark mb-0">
                  <li className="d-block py-1">2021, 3 months</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="border-bottom py-md-2 py-lg-3 py-xl-4 py-xxl-5">
        <Row className="my-5">
          <Col md={10} lg={8} xl={7}>
            <h2 className="h1 pb-2">About the client</h2>
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
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Hero
