import grid07 from '@/assets/img/portfolio/grid/07.jpg'
import grid08 from '@/assets/img/portfolio/grid/08.jpg'
import grid09 from '@/assets/img/portfolio/grid/09.jpg'
import grid10 from '@/assets/img/portfolio/grid/10.jpg'
import grid11 from '@/assets/img/portfolio/grid/11.jpg'
import grid12 from '@/assets/img/portfolio/grid/12.jpg'
import { initIsotope } from '@/helpers/init-isotope'
import { useEffect } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Category = {
  title: string
  name: string
}

type Project = {
  title: string
  year: string
  categories: string[]
  image: string
  maxWidth: number
  name: string
}

const categoriesData: Category[] = [
  { title: 'All', name: '*' },
  { title: 'Branding', name: '.branding' },
  { title: 'Stationery', name: '.stationery' },
  { title: 'Web', name: '.web' },
]

const projectsData: Project[] = [
  { name: 'Branding, Packaging ', title: 'Healthy Yellow', year: '2022', categories: ['branding'], image: grid07, maxWidth: 512 },
  { name: 'Stationery design ', title: 'Sen Jonson', year: '2022', categories: ['stationery'], image: grid08, maxWidth: 704 },
  { name: 'Branding, Packaging ', title: 'Gradient', year: '2022', categories: ['branding'], image: grid09, maxWidth: 467 },
  { name: 'Stationery design ', title: 'D.G.Vent', year: '2021', categories: ['stationery'], image: grid10, maxWidth: 605 },
  { name: 'Branding, Stationery ', title: 'Doe design', year: '2021', categories: ['stationery'], image: grid11, maxWidth: 550 },
  { name: 'Web design ', title: 'The Studio', year: '2020', categories: ['web'], image: grid12, maxWidth: 470 },
]

const Detail = () => {
  useEffect(() => {
    initIsotope()
  }, [])
  return (
    <>
      <section className="container overflow-hidden py-5 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Portfolio grid v.2
            </li>
          </ol>
        </nav>
        <div className="masonry-filterable">
          <Row className="pb-lg-4 mb-2 mb-sm-3">
            <Col xxl={3} lg={4} className="text-center text-lg-start">
              <h1>Our Projects</h1>
              <p className="mb-4 mb-lg-0">We will put our industry expertise for creativity to work for your project</p>
            </Col>
            <Col xxl={9} lg={8} className="d-flex">
              <ul
                className="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto me-lg-0 pb-3"
                style={{ maxWidth: 456 }}
              >
                {categoriesData.map((category, idx) => (
                  <li key={idx} className="nav-item mb-0">
                    <Link to="" className={`nav-link border ${idx === 0 ? 'active' : ''}`} data-filter={category.name}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <div className="masonry-grid" data-columns={2} data-isotope='{"layoutMode": "masonry"}'>
            {projectsData.map((item, idx) => (
              <article className={`masonry-grid-item ${item.categories.join(' ')} pb-5 mb-md-2 mb-lg-4 mb-xl-5`} key={idx}>
                <div className="zoom-effect position-relative border-bottom pb-3" style={{ maxWidth: item.maxWidth }}>
                  <div className="zoom-effect-wrapper">
                    <div className="zoom-effect-img">
                      <Image src={item.image} alt="Image" />
                    </div>
                  </div>
                  <div className="pt-4 mt-lg-2">
                    <h2 className="h4 mb-2">
                      <Link className="stretched-link" to="/portfolio/single-v2">
                        {item.title}
                      </Link>
                    </h2>
                    <div className="d-flex justify-content-between fs-lg text-body-secondary">
                      <span>{item.name}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center pb-sm-2 pb-md-4 mt-n1 mt-lg-n2">
            <Link className="btn btn-lg btn-outline-dark rounded-0" to="">
              Let's work together
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Detail
