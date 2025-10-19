import avatar03 from '@/assets/img/avatar/03.jpg'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blog from '../../../../layout/BlogLayout/components/Blog'
import Comment from './components/Comment'
import Detail from './components/Detail'

const page = () => {
  return (
    <>
      <section className="container py-5 mt-5 mb-md-2 mb-lg-3 mb-xl-4">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/blog/grid-sidebar">Blog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single post v.1
            </li>
          </ol>
        </nav>
        <Row>
          <Col lg={8} className="pb-2 pb-lg-0 mb-4 mb-lg-0">
            <h1 className="display-4 pb-2 pb-lg-3">How to look for inspiration for new goals in life and remember to give yourself a break?</h1>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <span className="text-body-secondary fs-sm fw-normal p-0 mt-2 me-3">
                12
                <i className="ai-share fs-lg ms-1" />
              </span>
              <Link
                className="nav-link position-relative text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2"
                to="#comments"
                data-scroll
                data-scroll-offset={60}
              >
                <span className="position-absolute w-100 h-100 top-0 start-0" data-bs-toggle="collapse" data-bs-target="#commentsCollapse" />
                4
                <i className="ai-message fs-lg ms-1" />
              </Link>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-body-secondary mt-2">16 hours ago</span>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <Link className="badge text-nav fs-xs border mt-2" to="">
                Inspiration
              </Link>
            </div>
          </Col>
          <Col lg={4} xl={3} className="offset-xl-1">
            <Card className="border-0 bg-secondary">
              <CardBody className="text-center">
                <Image className="d-block rounded-circle mx-auto mb-3" src={avatar03} width={80} alt="Author image" />
                <h3 className="h5 mb-2 pb-1">Darlene Robertson</h3>
                <p className="fs-sm mb-4">Duis consectetur quis enim iaculis eu sagittis posuere imperdiet</p>
                <Link className="btn btn-outline-primary btn-sm" to="">
                  Follow the author
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
      <Detail />
      <Comment />
      <Blog />
    </>
  )
}

export default page
