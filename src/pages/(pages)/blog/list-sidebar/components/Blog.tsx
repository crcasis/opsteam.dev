import list01 from '@/assets/img/blog/list/01.jpg'
import list02 from '@/assets/img/blog/list/02.jpg'
import list03 from '@/assets/img/blog/list/03.jpg'
import list04 from '@/assets/img/blog/list/04.jpg'
import list05 from '@/assets/img/blog/list/05.jpg'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type BlogPostType = {
  title: string
  link: string
  image: string
  excerpt: string
  shares: number
  comments: number
  date: string
  category: string
}

const posts: BlogPostType[] = [
  {
    title: 'Business strategy for a brand of vintage bags',
    link: '/blog/single-v1',
    image: list01,
    excerpt:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque fames velit diam sit...',
    shares: 6,
    comments: 12,
    date: '8 hours ago',
    category: 'Business',
  },
  {
    title: 'Top books for inspiration',
    link: '/blog/single-v2',
    image: list02,
    excerpt:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra viverra molestie fames...',
    shares: 10,
    comments: 4,
    date: '12 hours ago',
    category: 'Books',
  },
  {
    title: 'Destinations to inspire and restore resources',
    link: '/blog/single-v3',
    image: list03,
    excerpt:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames...',
    shares: 8,
    comments: 5,
    date: 'April 25, 2022',
    category: 'Travel',
  },
  {
    title: 'Promotion of an online store from scratch, first sales',
    link: '/blog/single-v1',
    image: list04,
    excerpt:
      'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit...',
    shares: 11,
    comments: 3,
    date: 'May 12, 2022',
    category: 'Marketing',
  },
  {
    title: 'New series from Netflix',
    link: '/blog/single-v2',
    image: list05,
    excerpt:
      'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra etiam non, vitae tristique eu in morbi felis morbi nulla fermentum diam natoque...',
    shares: 19,
    comments: 7,
    date: 'December 15, 2022',
    category: 'TV shows',
  },
]

const Blog = () => {
  return (
    <>
      <Col lg={9} className="pe-lg-4 pe-xl-5">
        <h1 className="pb-3 pb-lg-4">Blog list with sidebar</h1>
        {posts.map((post, idx) => (
          <article key={idx} className="row g-0 border-0 mb-4">
            <Link
              className="col-sm-5 bg-repeat-0 bg-size-cover bg-position-center rounded-5"
              to={post.link}
              style={{ backgroundImage: `url(${post.image})`, minHeight: '14rem' }}
              aria-label="Post image"
            />
            <Col sm={7}>
              <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                <h3>
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <p className="d-sm-none d-md-block">{post.excerpt}</p>
                <div className="d-flex flex-wrap align-items-center mt-n2">
                  <Link className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" to="">
                    {post.shares}
                    <i className="ai-share fs-lg ms-1" />
                  </Link>
                  <Link className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" to="">
                    {post.comments}
                    <i className="ai-message fs-lg ms-1" />
                  </Link>
                  <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                  <span className="fs-sm text-body-secondary mt-2">{post.date}</span>
                  <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                  <Link className="badge text-nav fs-xs border mt-2" to="">
                    {post.category}
                  </Link>
                </div>
              </div>
            </Col>
          </article>
        ))}
        <Row className="gy-3 align-items-center mt-lg-5 pt-2 pt-md-4 pt-lg-0">
          <Col md={4} xs={6} className="order-md-1 order-1">
            <div className="d-flex align-items-center">
              <span className="text-body-secondary fs-sm">Show</span>
              <select className="form-select form-select-flush w-auto">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={25}>25</option>
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
