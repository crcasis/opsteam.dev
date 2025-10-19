import blog04 from '@/assets/img/landing/blog/04.jpg'
import { CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Article = {
  title: string
  description: string
  link: string
  date: string
  category: string
}

const articles: Article[] = [
  {
    title: 'The 15 best books every person should read',
    description: 'Egestas neque sceleri semper sit at eu cursus faucibus velit cras aliquam sed dictum at at orci...',
    link: '/blog-single-v2',
    date: '12 hours ago',
    category: 'Books',
  },
  {
    title: 'Destinations to inspire and restore resources',
    description: 'Purus lectus odio lacus nibh habitant ac sapien malesuada sed convallis adipiscing eget convallis...',
    link: '/blog-single-v3',
    date: '3 days ago',
    category: 'Travel',
  },
  {
    title: 'The fashion for eco bags with vintage prints',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus...',
    link: '/blog-single-v1',
    date: '12 hours ago',
    category: 'Fashion',
  },
  {
    title: 'How to look for inspiration for new goals',
    description: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse dignissim...',
    link: '/blog-single-v2',
    date: '3 days ago',
    category: 'Psychology',
  },
]

const Post = () => {
  return (
    <>
      <section className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <h2 className="h1 pb-3 py-md-4">Latest posts</h2>
        <Row className="pb-md-4 pb-lg-5">
          <Col lg={6} className="pb-2 pb-lg-0 mb-4 mb-lg-0">
            <article
              className="card h-100 border-0 position-relative overflow-hidden bg-size-cover bg-position-center me-lg-4"
              style={{ backgroundImage: `url(${blog04})` }}
            >
              <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
              <CardBody className="d-flex flex-column position-relative z-2 mt-sm-5">
                <h3 className="pt-5 mt-4 mt-sm-5 mt-lg-auto">
                  <Link className="stretched-link text-light" to="/blog/single-v1">
                    Travel destinations to inspire and restore resources
                  </Link>
                </h3>
                <p className="card-text text-light opacity-70">
                  Morbi et massa scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet pharetra at condimentum...
                </p>
                <div className="d-flex align-items-center">
                  <span className="fs-sm text-light opacity-50">9 hours ago</span>
                  <span className="fs-xs text-light opacity-30 mx-3">|</span>
                  <Link className="badge text-ligh fs-xs border border-light" to="#">
                    Travel
                  </Link>
                </div>
              </CardBody>
            </article>
          </Col>
          <Col lg={6}>
            <Row className="row-cols-1 row-cols-sm-2 g-4">
              {articles.map((article, idx) => (
                <article key={idx} className="col py-1 py-xl-2">
                  <div className="border-bottom pb-4 ms-xl-3">
                    <h3 className="h4">
                      <Link to={article.link}>{article.title}</Link>
                    </h3>
                    <p>{article.description}</p>
                    <div className="d-flex align-items-center">
                      <span className="fs-sm text-body-secondary">{article.date}</span>
                      <span className="fs-xs opacity-20 mx-3">|</span>
                      <Link className="badge text-nav fs-xs border" to="#">
                        {article.category}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Post
