import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import grid01 from '@/assets/img/blog/grid/01.jpg'
import grid02 from '@/assets/img/blog/grid/02.jpg'
import grid03 from '@/assets/img/blog/grid/03.jpg'
import { initIsotope } from '@/helpers/init-isotope'
import { useEffect } from 'react'
import { Card, CardBody, CardFooter, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = () => {
  useEffect(() => {
    initIsotope()
  }, [])

  return (
    <>
      <div className="masonry-grid mb-2 mb-md-4 pb-lg-3" data-columns={3} data-isotope='{"layoutMode": "masonry"}'>
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
                <span className="fs-sm text-body-secondary">13 hours ago</span>
                <span className="fs-xs opacity-20 mx-3">|</span>
                <Link className="badge text-nav fs-xs border" to="">
                  Fashion
                </Link>
              </div>
              <h3 className="h4 card-title">
                <Link to="/blog/single-v3">The fashion for eco bags with vintage prints</Link>
              </h3>
              <p className="card-text">
                Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut
                orci molestie arcu, sapien sed felis...
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
            <CardBody className="pb-4">
              <div className="d-flex align-items-center mb-4 mt-n1">
                <span className="fs-sm text-body-secondary">July 16, 2022</span>
                <span className="fs-xs opacity-20 mx-3">|</span>
                <Link className="badge text-nav fs-xs border" to="">
                  Inspiration
                </Link>
              </div>
              <h3 className="h4 card-title">
                <Link to="/blog/single-v1">How to look for inspiration for new goals</Link>
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
                <span className="fs-sm text-body-secondary">May 12, 2022</span>
                <span className="fs-xs opacity-20 mx-3">|</span>
                <Link className="badge text-nav fs-xs border" to="">
                  Ecommerce
                </Link>
              </div>
              <h3 className="h4 card-title">
                <Link to="/blog/single-v2">Promotion of an online store from scratch, first sales</Link>
              </h3>
              <p className="card-text">
                Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra
                molestie fames...
              </p>
            </CardBody>
            <CardFooter className="pt-3">
              <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                <Image className="rounded-circle" src={avatar08} width={48} alt="Post author" />
                <h6 className="ps-3 mb-0">David Bocous</h6>
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
                  Inspiration
                </Link>
              </div>
              <h3 className="h4 card-title">
                <Link to="/blog/single-v3">Sales on social networks for the eco cosmetics</Link>
              </h3>
              <p className="card-text">
                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit commodo
                dignissim...
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
            <Link to="/blog/single-v1">
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
                <Link to="/blog/single-v1">Ways to travel in 2022</Link>
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
            <Link to="/blog/single-v2">
              <Image className="card-img-top" src={grid03} alt="Post image" />
            </Link>
            <CardBody className="pb-4">
              <div className="d-flex align-items-center mb-4 mt-n1">
                <span className="fs-sm text-body-secondary">October 10, 2022</span>
                <span className="fs-xs opacity-20 mx-3">|</span>
                <Link className="badge text-nav fs-xs border" to="">
                  Inspiration
                </Link>
              </div>
              <h3 className="h4 card-title">
                <Link to="/blog/single-v2">Inspiration in quarantine</Link>
              </h3>
              <p className="card-text">Nec in est vel ac et odio interdum risus maecenas pulvinar potenti gravida sed</p>
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
    </>
  )
}

export default Blog
