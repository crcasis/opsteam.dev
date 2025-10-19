import grid01 from '@/assets/img/portfolio/grid/01.jpg'
import grid02 from '@/assets/img/portfolio/grid/02.jpg'
import grid03 from '@/assets/img/portfolio/grid/03.jpg'
import grid04 from '@/assets/img/portfolio/grid/04.jpg'
import grid05 from '@/assets/img/portfolio/grid/05.jpg'
import grid06 from '@/assets/img/portfolio/grid/06.jpg'
import { initIsotope } from '@/helpers/init-isotope'
import { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface PortfolioItem {
  title: string
  name: string[]
  image: string
  category: string
}

type Category = {
  title: string
  name: string
}

const categoriesData: Category[] = [
  { title: 'All', name: '*' },
  { title: 'Branding', name: '.branding' },
  { title: 'E-books', name: '.ebook' },
  { title: 'Identity', name: '.identity' },
  { title: 'Product', name: '.product' },
]

const portfolioItems: PortfolioItem[] = [
  { title: 'Strategy and design for a handmade tableware company', category: 'Branding, Strategy', name: ['branding'], image: grid01 },
  { title: 'Design for eco bags and merch', category: 'Roduct design', name: [' product'], image: grid02 },
  { title: 'Bottle for French perfume brand', category: 'Packaging design', name: [' branding'], image: grid04 },
  { title: 'Book cover design Twin Fish', category: 'Cover design', name: [' ebook'], image: grid03 },
  { title: 'Business cards and identity for Sen Jonson', category: 'Identity design', name: ['identity '], image: grid06 },
  { title: 'Toothbrushes made from eco materials', category: 'Product design', name: ['product '], image: grid05 },
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
              Portfolio grid v.1
            </li>
          </ol>
        </nav>
        <h1 className="text-center pb-2 pb-md-3 pb-lg-4">Portfolio</h1>
        <div className="masonry-filterable">
          <ul
            className="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-4 mb-2 mb-sm-3"
            style={{ maxWidth: 590 }}
          >
            {categoriesData.map((category, idx) => (
              <li key={idx} className="nav-item mb-0">
                <Link to="" className={`nav-link border ${idx === 0 ? 'active' : ''}`} data-filter={category.name}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="masonry-grid shuffle" data-columns={2} data-isotope='{"layoutMode": "masonry"}'>
            {portfolioItems.map((item, idx) => (
              <article key={idx} className={`masonry-grid-item ${item.name.join(' ')} pb-lg-5 mb-3 mb-lg-0 mb-xl-2`}>
                <div className="card-hover zoom-effect mx-auto" style={{ maxWidth: 620 }}>
                  <div className="zoom-effect-wrapper rounded-5">
                    <div className="zoom-effect-img">
                      <Image src={item.image} alt="Image" />
                    </div>
                  </div>
                  <div className="pt-4 mt-lg-2">
                    <h2 className="h5 mb-2">
                      <Link className="stretched-link text-nav" to="/portfolio/single-v1">
                        {item.title}
                      </Link>
                    </h2>
                    <span className="fs-sm text-body-secondary opacity-0 d-none d-sm-block">{item.category}</span>
                    <span className="fs-sm text-body-secondary d-sm-none">{item.name.join(' ')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <nav className="mt-n1 mb-md-2 mb-lg-3 mb-xl-4" aria-label="Portfolio pagination">
          <ul className="pagination justify-content-center">
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
      </section>
    </>
  )
}

export default Detail
