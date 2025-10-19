import avatar04 from '@/assets/img/avatar/04.jpg'
import avatar07 from '@/assets/img/avatar/07.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import img from '@/assets/img/blog/single/image.jpg'
import { Card, CardBody, Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
      <Col lg={9} xl={8} className="pe-lg-4 pe-xl-0">
        <h1 className="pb-2 pb-lg-3">How to look for inspiration for new goals in life and remember to give yourself a break?</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom mb-4">
          <div className="d-flex align-items-center mb-4 me-4">
            <span className="fs-sm me-2">By:</span>
            <Link className="nav-link position-relative fw-semibold p-0" to="#author" data-scroll data-scroll-offset={80}>
              Darlene Robertson
              <span className="d-block position-absolute start-0 bottom-0 w-100" style={{ backgroundColor: 'currentColor', height: 1 }} />
            </Link>
          </div>
          <div className="d-flex align-items-center mb-4">
            <span className="fs-sm me-2">Share post:</span>
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

        <p className="fs-lg pt-2 pt-sm-3">
          Dolor laoreet fermentum lectus praesent aenean molestie mollis integer. Sem ullamcorper montes, lorem ullamcorper orci, pellentesque ipsum
          malesuada gravida. Donec imperdiet nulla suscipit in. Dignissim ornare ac lorem consectetur massa a. Pellentesque urna pharetra, quis
          maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque imperdiet montes. Mauris massa elit
          pretium elementum eget tortor quis. Semper interdum lectus odio diam.
        </p>
        <p className="fs-lg mb-3">
          Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam
          laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero id.
          Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis suspendisse
          enim blandit massa. Cursus augue dui mattis morbi velit.
        </p>
        <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Dolor laoreet fermentum lectus praesent aenean</h2>
        <p className="fs-lg pb-4 pb-xl-5">
          Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam
          laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero id.
          Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis suspendisse
          enim blandit massa. Cursus augue dui mattis morbi velit.
        </p>
        <figure className="figure">
          <Image className="figure-img rounded-5 mb-3" src={img} alt="Image" />
          <figcaption className="figure-caption">Image source tristique justo et pharetra</figcaption>
        </figure>
        <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Cursus augue dui mattis morbi velit</h2>
        <p className="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          Proin non congue sem, sed tristique ante. Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla, quis
          tempor sapien neque at nisl. Aliquam eu nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum elementum sit
          amet. Vivamus non ante nisl. Nunc faucibus velit at eros mollis semper. Curabitur aliquam eros tellus, nec facilisis nisl finibus sit amet.
          Ut et dolor nec lorem gravida elementum.
        </p>
        <Card className="border-0 bg-secondary mb-3">
          <CardBody>
            <figure>
              <blockquote className="blockquote">
                <p>
                  Ut pellentesque bibendum dignissim a molestie ultrices diam ut vel neque tincidunt eget sed ut quis sit semper nunc at etiam lacinia
                  quam laoreet eget id sapien a pharetra, ornare diam dignissim neque tincidunt.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">Darlene Robertson</figcaption>
            </figure>
          </CardBody>
        </Card>
        <h2 className="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Lorem ipsum dolor sit amet consectetur</h2>
        <p className="fs-lg">
          Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam
          laoreet eget id sapien a pharetra, ornare diam dignissim.
        </p>
        <ul>
          <li className="mb-1">Quam laoreet eget id sapien</li>
          <li className="mb-1">Morbi convallis suspendisse</li>
          <li className="mb-1">Vivamus non ante</li>
          <li className="mb-1">Praesent dignissim efficitur</li>
          <li className="mb-1">Gravida a mi neque</li>
        </ul>
        <p className="fs-lg">
          Donec diam neque, efficitur vitae ante a, eleifend placerat est. Phasellus dapibus scelerisque diam, eu rhoncus lorem vulputate lobortis.
          Praesent pulvinar venenatis mauris, eget fringilla sem.
        </p>

        <div className="d-flex flex-wrap pb-5 pt-3 pt-md-4 pt-xl-5 mt-xl-n2">
          <h3 className="h6 py-1 mb-0 me-4">Relevant tags:</h3>
          <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
            <span className="text-primary">#</span>Inspiration
          </Link>
          <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
            <span className="text-primary">#</span>Travel
          </Link>
          <Link className="nav-link fs-sm py-1 px-0 me-3" to="">
            <span className="text-primary">#</span>Books
          </Link>
        </div>

        <div className="border-top border-bottom py-4" id="author">
          <div className="d-flex align-items-start py-2">
            <Image className="d-block rounded-circle mb-3" src={avatar04} width={56} alt="Author image" />
            <div className="d-md-flex w-100 ps-4">
              <div style={{ maxWidth: '26rem' }}>
                <h3 className="h5 mb-2">Darlene Robertson</h3>
                <p className="fs-sm mb-0">
                  Porta nisl a ultrices ut libero id. Gravida mi neque, tristique justo, et pharetra laoreet nulla est nulla cras ac arcu sed mattis
                  tristique convallis suspen enim blandit massa cursus augue dui mattis morbi velit semper nunc at etiam lacinia.
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

        <div className="pt-4 pt-xl-5 mt-4" id="comments">
          <h2 className="h1 py-lg-1 py-xl-3">14 comments</h2>

          <div className="border-bottom py-4 mt-2 mb-4">
            <div className="d-flex align-items-center pb-1 mb-3">
              <Image className="rounded-circle" src={avatar08} width={48} alt="Comment author" />
              <div className="ps-3">
                <h6 className="mb-0">Albert Flores</h6>
                <span className="fs-sm text-body-secondary">5 hours ago</span>
              </div>
            </div>
            <p className="pb-2 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus lectus, tempus eu urna eu, imperdiet dignissim augue. Aliquam
              fermentum est a ligula bibendum, ac gravida ipsum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur suscipit quam ut velit condimentum, nec mollis risus semper. Curabitur quis mauris eget ligula tincidunt
              venenatis. Sed congue pulvinar hendrerit.
            </p>
            <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
              Reply
              <i className="ai-redo fs-xl ms-2" />
            </button>
          </div>
          <div className="border-bottom pt-2 pb-4">
            <div className="d-flex align-items-center pb-1 mb-3">
              <Image className="rounded-circle" src={avatar11} width={48} alt="Comment author" />
              <div className="ps-3">
                <h6 className="mb-0">Jenny Wilson</h6>
                <span className="fs-sm text-body-secondary">2 days ago at 9:20</span>
              </div>
            </div>
            <p className="pb-2 mb-0">
              Pellentesque urna pharetra, quis maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque
              imperdiet montes mauris massa elit pretium elementum eget tortor quis
            </p>
            <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
              Reply
              <i className="ai-redo fs-xl ms-2" />
            </button>
            <Card className="card-body border-0 bg-secondary mt-4">
              <div className="d-flex align-items-center pb-1 mb-3">
                <Image className="rounded-circle" src={avatar10} width={48} alt="Comment author" />
                <div className="ps-3">
                  <h6 className="mb-0">Ralph Edwards</h6>
                  <span className="fs-sm text-body-secondary">2 days ago at 11:45</span>
                </div>
              </div>
              <p className="mb-0">
                <Link className="fw-bold text-decoration-none" to="">
                  @Jenny Wilson
                </Link>
                Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non
                turpis nibh turpis ullamcorper est porttitor.
              </p>
            </Card>
          </div>
          <div className="border-bottom py-4 mt-2 mb-4">
            <div className="d-flex align-items-center pb-1 mb-3">
              <Image className="rounded-circle" src={avatar07} width={48} alt="Comment author" />
              <div className="ps-3">
                <h6 className="mb-0">Esther Howard</h6>
                <span className="fs-sm text-body-secondary">May 19, 2022</span>
              </div>
            </div>
            <p className="pb-2 mb-0">
              Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla, quis tempor sapien neque at nisl. Aliquam eu
              nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum elementum sit amet. Vivamus non ante nisl. Nunc
              faucibus velit at eros mollis semper.
            </p>
            <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
              Reply
              <i className="ai-redo fs-xl ms-2" />
            </button>
          </div>

          <div className="text-end pb-5 mb-lg-1 mb-xl-3">
            <Link className="btn btn-link px-0" to="">
              Show all comments
              <i className="ai-chevron-right fs-lg ms-1" />
            </Link>
          </div>

          <Card className="border-0 bg-secondary pt-2 p-md-2 p-xl-3 p-xxl-4 mt-n3 mt-md-0">
            <CardBody>
              <h2 className="pb-2 pb-lg-3 pb-xl-4">Leave a comment</h2>
              <form className="row needs-validation g-4" noValidate>
                <Col sm={6}>
                  <label className="form-label" htmlFor="c-name">
                    Name
                  </label>
                  <input className="form-control" type="text" placeholder="Your name" required id="c-name" />
                  <div className="invalid-feedback">Please enter your name!</div>
                </Col>
                <Col sm={6}>
                  <label className="form-label" htmlFor="c-email">
                    Email
                  </label>
                  <input className="form-control" type="email" placeholder="Your email" required id="c-email" />
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </Col>
                <Col xs={12}>
                  <label className="form-label" htmlFor="c-comment">
                    Comment
                  </label>
                  <textarea className="form-control" rows={4} placeholder="Type your comment here..." required id="c-comment" />
                  <div className="invalid-feedback">Please enter a comment message!</div>
                </Col>
                <Col xs={12}>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="c-save" />
                    <label className="form-check-label" htmlFor="c-save">
                      Save my name and email
                    </label>
                  </div>
                </Col>
                <Col xs={12}>
                  <button className="btn btn-primary" type="submit">
                    Post a comment
                  </button>
                </Col>
              </form>
            </CardBody>
          </Card>
        </div>
      </Col>
    </>
  )
}

export default Detail
