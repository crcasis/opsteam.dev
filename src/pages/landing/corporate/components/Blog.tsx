import blog from '@/assets/img/landing/corporate/blog-img.jpg'
import { CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type BlogType = {
  title: string
  description: string
  date: string
  badge: string
}

const blogs: BlogType[] = [
  {
    title: 'Promotion from scratch to the first sales',
    description: 'Suscipit consectetur nam hac in enim, adipiscing aenean tortor ac commodo eu nibh a tempus sed...',
    date: 'August 13, 2022',
    badge: 'Strategy',
  },
  {
    title: 'New business strategies for 2022',
    description: 'Orci massa sapien varius odio et vel egestas ultricies commodo tristique ullamcorper sit vitae cursus...',
    date: 'August 2, 2022',
    badge: 'Business',
  },
  {
    title: 'Outgoing year results, the main news',
    description: 'Mauris suscipit in tempor, platea lobortis mollis rutrum aliquam pulvinar ultricies orci augue libero...',
    date: 'July 27, 2022',
    badge: 'Analytics',
  },
  {
    title: 'How to define goals and objectives',
    description: 'Sed convallis integer egestas sapien sapien purus enim massa porttitor vulputate metus purus in fringilla...',
    date: 'July 19, 2022',
    badge: 'Strategy',
  },
]

const Blog = () => {
  return (
    <>
      <section className="container py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5">
        <h2 className="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">Our blog</h2>
        <Row>
          <Col lg={6} className="pb-3 mb-2 mb-sm-3">
            <Link
              className="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center"
              to=""
              style={{ maxWidth: 600, minHeight: 300, backgroundImage: `url(${blog})` }}
            >
              <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50" />
              <CardBody className="d-flex flex-column justify-content-end h-100 position-relative z-2" data-bs-theme="dark">
                <h3>New business strategies for 2022</h3>
                <p className="text-body mb-0">
                  Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis
                  ultrices eu dignissim. Dapibus est ac risus maximus...
                </p>
              </CardBody>
            </Link>
          </Col>
          <Col lg={6}>
            <Row className="row-cols-1 row-cols-sm-2 g-4">
              {blogs.map((item, idx) => (
                <Col as={'article'} key={idx}>
                  <div className="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
                    <h3 className="h4">
                      <Link to="">{item.title}</Link>
                    </h3>
                    <p className="mb-4">{item.description}</p>
                    <div className="d-flex align-items-center">
                      <span className="fs-sm text-body-secondary">{item.date}</span>
                      <span className="fs-xs opacity-20 mx-3">|</span>
                      <Link className="badge text-nav fs-xs border" to="">
                        {item.badge}
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <div className="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4">
          <Link className="d-inline-flex align-items-center fw-semibold text-decoration-none" to="">
            All articles
            <i className="ai-arrow-right fs-4 ms-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog
