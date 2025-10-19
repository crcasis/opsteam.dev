import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import grid01 from '@/assets/img/blog/grid/01.jpg'
import grid02 from '@/assets/img/blog/grid/02.jpg'
import { initIsotope } from '@/helpers/init-isotope'
import { useEffect } from 'react'
import { Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = () => {
  useEffect(() => {
    initIsotope()
  }, [])
  return (
    <>
      <Col lg={9} xl={8} className="pe-lg-4 pe-xl-0">
        <h1 className="pb-3 pb-lg-4">Blog grid with sidebar</h1>
        <div className="masonry-grid mb-2 mb-md-4 pb-lg-3" data-columns={2} data-isotope='{"layoutMode": "masonry"}'>
          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">9 hours ago</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Brand strategy
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v1">Business strategy for a brand of vintage bags</Link>
                </h3>
                <p className="card-text">
                  Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero
                  pulvinar elit vulputate...
                </p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar05} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Darlene Robertson</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>

          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <Link to="/blog/single-v2">
                <Image className="card-img-top" src={grid01} alt="Post image" />
              </Link>
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">12 hours ago</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Books
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v2">Top books for inspiration</Link>
                </h3>
                <p className="card-text">Vulputate auctor lacus imperdiet facilisi tristique nisl pulvinar porta diam duis odio</p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar06} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Jenny Wilson</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>

          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">July 16, 2022</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Inspiration
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v3">How to look for inspiration for new goals</Link>
                </h3>
                <p className="card-text">
                  Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero
                  pulvinar elit vulputate...
                </p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar12} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Guy Hawkins</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>

          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">June 10, 2022</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Ecommerce
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v1">Sales on social networks for the eco cosmetics</Link>
                </h3>
                <p className="card-text">
                  Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit
                  commodo dignissim...
                </p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar11} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Lillia Black</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>

          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <Link to="/blog/single-v2">
                <Image className="card-img-top" src={grid02} alt="Post image" />
              </Link>
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">January 9, 2022</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Travel
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v2">Ways to travel in 2022</Link>
                </h3>
                <p className="card-text">Duis consectetur quis enim iaculis eu sagittis posuere imperdiet scelerisque</p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar05} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Darlene Robertson</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>

          <article className="masonry-grid-item">
            <Card className="border-0 bg-secondary">
              <CardBody className="pb-4">
                <div className="d-flex align-items-center mb-4 mt-n1">
                  <span className="fs-sm text-body-secondary">December 15, 2022</span>
                  <span className="fs-xs opacity-20 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border" to="">
                    Inspiration
                  </Link>
                </div>
                <h3 className="h4 card-title">
                  <Link to="/blog/single-v3">Destinations to inspire and restore resources</Link>
                </h3>
                <p className="card-text">
                  Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut
                  orci molestie arcu, sapien sed felis...
                </p>
              </CardBody>
              <CardFooter className="pt-3">
                <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                  <Image className="rounded-circle" src={avatar06} width={48} alt="Post author" />
                  <h6 className="ps-3 mb-0">Jenny Wilson</h6>
                </Link>
              </CardFooter>
            </Card>
          </article>
        </div>
        <Row className="gy-3 align-items-center">
          <Col md={4} xs={6} className="order-md-1 order-1">
            <div className="d-flex align-items-center">
              <span className="text-body-secondary fs-sm">Show</span>
              <select className="form-select form-select-flush w-auto">
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
              </select>
            </div>
          </Col>
          <Col md={4} xs={12} className="order-md-2 order-3 text-center">
            <button className="btn btn-primary w-md-auto w-100" type="button">
              Load more posts
            </button>
          </Col>
          <Col md={4} xs={6} className="order-md-3 order-2">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item active" aria-current="page">
                  <span className="page-link">
                    1<span className="visually-hidden">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    5
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Blog
