import list01 from '@/assets/img/blog/list/01.jpg'
import list06 from '@/assets/img/blog/list/06.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <div className="position-relative mb-4 mb-lg-5">
        <i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3" />
        <input className="form-control ps-5" type="search" placeholder="Enter keyword" />
      </div>

      <h4 className="pt-1 pt-lg-0 mt-lg-n2">Most popular:</h4>
      <div className="mb-lg-5 mb-4">
        <article className="position-relative pb-2 mb-3 mb-lg-4">
          <Image className="rounded-5" src={list01} alt="Post image" />
          <h5 className="h6 mt-3 mb-0">
            <Link className="stretched-link" to="/blog/single-v1">
              The fashion for eco bags with vintage prints will still be relevant for more than one year
            </Link>
          </h5>
        </article>
        <article className="position-relative">
          <Image className="rounded-5" src={list06} alt="Post image" />
          <h5 className="h6 mt-3 mb-0">
            <Link className="stretched-link" to="/blog/single-v2">
              A session with a psychologist as a personal choice or a fashion trend
            </Link>
          </h5>
        </article>
      </div>

      <h4 className="pt-3 pt-lg-1 mb-4">Recent posts:</h4>
      <ul className="list-unstyled mb-lg-5 mb-4">
        <li className="border-bottom pb-3 mb-3">
          <span className="h6 mb-0">
            <Link to="/blog/single-v1">Instagram trends that will definitely work and bring results in the new 2022</Link>
          </span>
        </li>
        <li className="border-bottom pb-3 mb-3">
          <span className="h6 mb-0">
            <Link to="/blog/single-v2">A session with a psychologist as a personal choice</Link>
          </span>
        </li>
        <li className="border-bottom pb-3 mb-3">
          <span className="h6 mb-0">
            <Link to="/blog/single-v1">Travel destinations to inspire and restore resources</Link>
          </span>
        </li>
        <li className="border-bottom pb-3">
          <span className="h6 mb-0">
            <Link to="/blog/single-v2">How to look for inspiration for new goals in life?</Link>
          </span>
        </li>
      </ul>

      <h4 className="pt-3 pt-lg-1 mb-4">Relevant topics:</h4>
      <div className="d-flex flex-wrap mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
        <Link className="btn btn-outline-secondary rounded-pill mt-3 ms-3" to="">
          Reading
        </Link>
        <Link className="btn btn-outline-secondary rounded-pill mt-3 ms-3" to="">
          Inspiration
        </Link>
        <Link className="btn btn-outline-secondary rounded-pill mt-3 ms-3" to="">
          Travel
        </Link>
        <Link className="btn btn-outline-secondary rounded-pill mt-3 ms-3" to="">
          Psychology
        </Link>
      </div>
    </>
  )
}

export default SideBar
