import { Link } from 'react-router-dom'
import Comment from './components/Comment'
import Detail from './components/Detail'
import Blog from '@/layout/BlogLayout/components/Blog'

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
              <Link to="/blog/grid">Blog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single post v.2
            </li>
          </ol>
        </nav>

        <h1 className="display-4 text-center pb-2 pb-lg-3">
          How to look for inspiration for new goals in life and remember to give yourself a break?
        </h1>
        <div className="d-flex flex-wrap align-items-center justify-content-center mt-n2">
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
      </section>
      <Detail />
      <Comment />
      <Blog />
    </>
  )
}

export default page
