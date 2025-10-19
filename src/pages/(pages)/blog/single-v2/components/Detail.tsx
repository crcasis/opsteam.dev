import avatar04 from '@/assets/img/avatar/04.jpg'
import cover from '@/assets/img/blog/single/cover.jpg'
import img from '@/assets/img/blog/single/image.jpg'
import Jarallax from '@/components/Jarallax'
import { Card, CardBody, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
      <section className="jarallax" data-jarallax data-speed=".65">
        <Jarallax className="jarallax-img bg-position-center-y" style={{ backgroundImage: `url(${cover})` }} />
        <div className="d-none d-xxl-block" style={{ height: 760 }} />
        <div className="d-none d-xl-block d-xxl-none" style={{ height: 650 }} />
        <div className="d-none d-lg-block d-xl-none" style={{ height: 500 }} />
        <div className="d-none d-md-block d-lg-none" style={{ height: 400 }} />
        <div className="d-md-none" style={{ height: 300 }} />
      </section>

      <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4">
        <Row className="justify-content-center pt-xxl-2">
          <Col lg={9} xl={8}>
            <p className="fs-lg">
              Dolor laoreet fermentum lectus praesent aenean molestie mollis integer. Sem ullamcorper montes, lorem ullamcorper orci, pellentesque
              ipsum malesuada gravida. Donec imperdiet nulla suscipit in. Dignissim ornare ac lorem consectetur massa a. Pellentesque urna pharetra,
              quis maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque imperdiet montes. Mauris massa
              elit pretium elementum eget tortor quis. Semper interdum lectus odio diam.
            </p>
            <p className="fs-lg mb-3">
              Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia.
              Quam laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero
              id. Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis
              suspendisse enim blandit massa. Cursus augue dui mattis morbi velit.
            </p>
            <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Dolor laoreet fermentum lectus praesent aenean</h2>
            <p className="fs-lg pb-4 pb-xl-5">
              Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia.
              Quam laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero
              id. Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis
              suspendisse enim blandit massa. Cursus augue dui mattis morbi velit.
            </p>
            <figure className="figure">
              <Image className="figure-img rounded-5 mb-3" src={img} alt="Image" />
              <figcaption className="figure-caption">Image source tristique justo et pharetra</figcaption>
            </figure>
            <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Cursus augue dui mattis morbi velit</h2>
            <p className="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
              Proin non congue sem, sed tristique ante. Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla,
              quis tempor sapien neque at nisl. Aliquam eu nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum
              elementum sit amet. Vivamus non ante nisl. Nunc faucibus velit at eros mollis semper. Curabitur aliquam eros tellus, nec facilisis nisl
              finibus sit amet. Ut et dolor nec lorem gravida elementum.
            </p>
            <Card className="border-0 bg-secondary mb-3">
              <CardBody>
                <figure>
                  <blockquote className="blockquote">
                    <p>
                      Ut pellentesque bibendum dignissim a molestie ultrices diam ut vel neque tincidunt eget sed ut quis sit semper nunc at etiam
                      lacinia quam laoreet eget id sapien a pharetra, ornare diam dignissim neque tincidunt.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">Darlene Robertson</figcaption>
                </figure>
              </CardBody>
            </Card>
            <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="fs-lg">
              Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia.
              Quam laoreet eget id sapien a pharetra, ornare diam dignissim.
            </p>
            <ul>
              <li className="mb-1">Quam laoreet eget id sapien</li>
              <li className="mb-1">Morbi convallis suspendisse</li>
              <li className="mb-1">Vivamus non ante</li>
              <li className="mb-1">Praesent dignissim efficitur</li>
              <li className="mb-1">Gravida a mi neque</li>
            </ul>
            <p className="fs-lg">
              Donec diam neque, efficitur vitae ante a, eleifend placerat est. Phasellus dapibus scelerisque diam, eu rhoncus lorem vulputate
              lobortis. Praesent pulvinar venenatis mauris, eget fringilla sem.
            </p>
            <div className="d-flex flex-wrap pb-5 pt-3 pt-md-4 pt-xl-5 mt-xl-n2">
              <h3 className="h6 py-1 mb-0 me-4">Relevant tags:</h3>
              <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
                <span className="text-primary">#</span>Nature
              </Link>
              <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
                <span className="text-primary">#</span>Books
              </Link>
              <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
                <span className="text-primary">#</span>Travel
              </Link>
            </div>

            <div className="border-top py-4">
              <div className="d-flex align-items-start py-2">
                <Image className="d-block rounded-circle mb-3" src={avatar04} width={56} alt="Author image" />
                <div className="d-md-flex w-100 ps-4">
                  <div style={{ maxWidth: '26rem' }}>
                    <h3 className="h5 mb-2">Darlene Robertson</h3>
                    <p className="fs-sm mb-0">
                      Porta nisl a ultrices ut libero id. Gravida mi neque, tristique justo, et pharetra laoreet nulla est nulla cras ac arcu sed
                      mattis tristique convallis suspen enim blandit massa cursus augue dui mattis morbi velit semper nunc at etiam lacinia.
                    </p>
                  </div>
                  <div className="pt-4 pt-md-0 ps-md-4 ms-md-auto">
                    <h3 className="h5">Share post:</h3>
                    <div className="d-flex">
                      <OverlayTrigger overlay={<Tooltip>Instagram</Tooltip>} placement="bottom">
                        <Link to="" className="nav-link p-2 me-2" data-bs-toggle="tooltip">
                          <i className="ai-instagram" />
                        </Link>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={<Tooltip>Facebook</Tooltip>} placement="bottom">
                        <Link to="" className="nav-link p-2 me-2" data-bs-toggle="tooltip">
                          <i className="ai-facebook" />
                        </Link>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={<Tooltip>Telegram</Tooltip>} placement="bottom">
                        <Link to="" className="nav-link p-2 me-2" data-bs-toggle="tooltip">
                          <i className="ai-telegram fs-sm" />
                        </Link>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={<Tooltip>X</Tooltip>} placement="bottom">
                        <Link to="" className="nav-link p-2" data-bs-toggle="tooltip">
                          <i className="ai-x" />
                        </Link>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Detail
