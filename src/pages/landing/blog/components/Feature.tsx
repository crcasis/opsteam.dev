import blog01 from '@/assets/img/landing/blog/01.jpg'
import blog02 from '@/assets/img/landing/blog/02.jpg'
import blog03 from '@/assets/img/landing/blog/03.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ArticleType = {
  title: string
  description: string
  image: string
  link: string
  shares: number
  comments: number
  time: string
  category?: string
}

type SidebarArticleType = {
  title: string
  link: string
  shares: number
  comments: number
  time: string
}

const topics = ['Nature', 'Design', 'Books', 'Fashion', 'Inspiration', 'Psychology']

const mainArticles: ArticleType[] = [
  {
    title: 'The fashion for eco bags with vintage prints will still be relevant for more than one year',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit...',
    image: blog01,
    link: '/blog/single-v1',
    shares: 6,
    comments: 12,
    time: '12 hours ago',
    category: 'Fashion',
  },
  {
    title: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    description:
      'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra etiam non, vitae tristique eu in morbi felis...',
    image: blog02,
    link: '/blog/single-v1',
    shares: 13,
    comments: 8,
    time: '9 days ago',
    category: 'Inspiration',
  },
  {
    title: 'A session with a psychologist as a personal choice or a fashion trend in society',
    description:
      'Purus lectus odio lacus nibh habitant ac sapien malesuada sed convallis adipiscing eget convallis amet enim diam tellus sodales ornare vitae molestie nulla tincidunt ac non facilisis faucibus...',
    image: blog03,
    link: '/blog/single-v1',
    shares: 24,
    comments: 17,
    time: '2 weeks ago',
    category: 'Psychology',
  },
]

const sidebarArticles: SidebarArticleType[] = [
  {
    title: 'Instagram trends that will definitely work and bring results in the new 2022',
    link: '/blog/single-v1',
    shares: 4,
    comments: 6,
    time: '9 hours ago',
  },
  {
    title: 'A session with a psychologist as a personal choice or a fashion trend in society',
    link: '/blog/single-v2',
    shares: 7,
    comments: 12,
    time: '2 days ago',
  },
  {
    title: 'Travel destinations to inspire and restore resources',
    link: '/blog/single-v2',
    shares: 5,
    comments: 11,
    time: '3 days ago',
  },
  {
    title: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    link: '/blog/single-v3',
    shares: 18,
    comments: 26,
    time: 'July 13, 2022',
  },
  {
    title: 'The 15 best books every person should read',
    link: '/blog/single-v1',
    shares: 15,
    comments: 23,
    time: 'May 25, 2022',
  },
]

const Feature = () => {
  return (
    <>
      <section className="container mt-2 mt-md-0 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <Row className="align-items-center">
          <Col sm={8} lg={4} xl={3} className="offset-xl-1 order-sm-2 mb-3 mb-sm-0">
            <div className="position-relative mb-lg-2">
              <i className="ai-search fs-lg position-absolute top-50 start-0 translate-middle-y ms-3" />
              <input className="form-control rounded-pill ps-5" type="search" placeholder="Enter keywords.." />
            </div>
          </Col>
          <Col sm={4} lg={8} className="order-sm-1">
            <div className="d-none d-lg-flex flex-wrap align-items-center">
              <h3 className="h6 mb-2 me-4">Topics:</h3>
              {topics.map((topic, index) => (
                <Link key={index} className="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" to="">
                  {topic}
                </Link>
              ))}
            </div>
            <div className="dropdown d-lg-none">
              <button
                className="btn btn-outline-secondary dropdown-toggle rounded-pill w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Topics
              </button>
              <div className="dropdown-menu my-1">
                {topics.map((topic, index) => (
                  <Link key={index} className="dropdown-item" to="">
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-sm-2 mt-lg-0 pt-4 pt-lg-5 pb-md-4">
          <Col md={7} className="pb-2 pb-md-0 mb-4 mb-md-0">
            {mainArticles.map((article, idx) => (
              <article key={idx} className="pb-5 pt-sm-1 mb-lg-3 mb-xl-4">
                <Link to={article.link}>
                  <Image className="rounded-5" src={article.image} alt={article.title} width={800} height={450} />
                </Link>
                <h2 className="h3 pt-3 mt-2 mt-md-3">
                  <Link to={article.link}>{article.title}</Link>
                </h2>
                <p>{article.description}</p>
                <div className="d-flex flex-wrap align-items-center pt-1 mt-n2">
                  <Link className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" to="#">
                    {article.shares}
                    <i className="ai-share fs-lg ms-1" />
                  </Link>
                  <Link className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" to="#">
                    {article.comments}
                    <i className="ai-message fs-lg ms-1" />
                  </Link>
                  <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                  <span className="fs-sm text-body-secondary mt-2">{article.time}</span>
                  {article.category && (
                    <>
                      <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                      <Link className="badge text-nav fs-xs border mt-2" to="#">
                        {article.category}
                      </Link>
                    </>
                  )}
                </div>
              </article>
            ))}
            <Link className="btn btn-primary mt-n2 mt-sm-n1 mt-md-0" to="/blog/list-sidebar">
              Read all articles
            </Link>
          </Col>
          <aside className="col-md-5 col-xl-4 offset-xl-1" style={{ marginTop: '-115px' }}>
            <div className="position-sticky top-0 ps-md-4 ps-xl-0" style={{ paddingTop: 125 }}>
              <h2 className="h4">Relevant articles</h2>
              {sidebarArticles.map((article, idx) => (
                <article key={idx} className="my-1 my-lg-0 py-2 py-lg-3">
                  <h3 className="h6 mb-2 mb-lg-3">
                    <Link to={article.link}>{article.title}</Link>
                  </h3>
                  <div className="d-flex flex-wrap align-items-center mt-n2">
                    <Link className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" to="#">
                      {article.shares}
                      <i className="ai-share fs-lg ms-1" />
                    </Link>
                    <Link className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" to="#">
                      {article.comments}
                      <i className="ai-message fs-lg ms-1" />
                    </Link>
                    <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                    <span className="fs-sm text-body-secondary mt-2">{article.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </Row>
      </section>
    </>
  )
}

export default Feature
