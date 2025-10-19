import sidebar01 from '@/assets/img/blog/sidebar/01.jpg'
import sidebar02 from '@/assets/img/blog/sidebar/02.jpg'
import sidebar03 from '@/assets/img/blog/sidebar/03.jpg'
import banner from '@/assets/img/blog/sidebar/banner.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="position-relative mb-4 mb-lg-5">
        <i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3" />
        <input className="form-control ps-5" type="search" placeholder="Enter keyword" />
      </div>
      <h4 className="pt-1 pt-lg-0 mt-lg-n2">Categories:</h4>
      <ul className="nav flex-column mb-lg-5 mb-4">
        <li className="mb-2">
          <Link className="nav-link d-flex p-0 active" to="">
            All categories
            <span className="fs-sm text-body-secondary ms-2">(110)</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link className="nav-link d-flex p-0" to="">
            Inspiration
            <span className="fs-sm text-body-secondary ms-2">(34)</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link className="nav-link d-flex p-0" to="">
            Brand strategy
            <span className="fs-sm text-body-secondary ms-2">(8)</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link className="nav-link d-flex p-0" to="">
            Advertisement
            <span className="fs-sm text-body-secondary ms-2">(45)</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link className="nav-link d-flex p-0" to="">
            Ecommerce
            <span className="fs-sm text-body-secondary ms-2">(17)</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link d-flex p-0" to="">
            Travel &amp; Vacation
            <span className="fs-sm text-body-secondary ms-2">(6)</span>
          </Link>
        </li>
      </ul>
      <h4 className="pt-3 pt-lg-0 pb-1">Trending posts:</h4>
      <div className="mb-lg-5 mb-4">
        <article className="position-relative d-flex align-items-center mb-4">
          <Image className="rounded" src={sidebar01} width={92} alt="Post image" />
          <div className="ps-3">
            <h4 className="h6 mb-2">
              <Link className="stretched-link" to="/blog/single-v1">
                Instagram trends that will definitely work
              </Link>
            </h4>
            <span className="fs-sm text-body-secondary">13 hours ago</span>
          </div>
        </article>
        <article className="position-relative d-flex align-items-center mb-4">
          <Image className="rounded" src={sidebar02} width={92} alt="Post image" />
          <div className="ps-3">
            <h4 className="h6 mb-2">
              <Link className="stretched-link" to="/blog/single-v1">
                A session with a psychologist
              </Link>
            </h4>
            <span className="fs-sm text-body-secondary">May 12, 2022</span>
          </div>
        </article>
        <article className="position-relative d-flex align-items-center">
          <Image className="rounded" src={sidebar03} width={92} alt="Post image" />
          <div className="ps-3">
            <h4 className="h6 mb-2">
              <Link className="stretched-link" to="/blog/single-v1">
                How to look for inspiration for new goals
              </Link>
            </h4>
            <span className="fs-sm text-body-secondary">June 10, 2022</span>
          </div>
        </article>
      </div>
      <h4 className="pt-3 pt-lg-0 pb-1">Join us:</h4>
      <div className="d-flex mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
        <Link className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" to="" aria-label="Instagra">
          <i className="ai-instagram" />
        </Link>
        <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" to="" aria-label="Faceboo">
          <i className="ai-facebook" />
        </Link>
        <Link className="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle mt-3 ms-3" to="" aria-label="Telegra">
          <i className="ai-telegram" />
        </Link>
        <Link className="btn btn-secondary btn-icon btn-sm btn-x rounded-circle mt-3 ms-3" to="" aria-label="">
          <i className="ai-x" />
        </Link>
      </div>
      <div className="position-relative mb-3">
        <div
          className="position-absolute w-100 text-center top-0 start-50 translate-middle-x pt-4"
          style={{ maxWidth: '15rem' }}
          data-bs-theme="light"
        >
          <h3 className="h2 pt-3 mb-0">Your banner here!</h3>
        </div>
        <Image className="rounded-5" src={banner} alt="Banner" />
      </div>
    </>
  )
}

export default Sidebar
