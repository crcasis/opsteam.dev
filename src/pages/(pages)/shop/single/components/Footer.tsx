import flagde from '@/assets/img/flags/de.png'
import flagen from '@/assets/img/flags/en.png'
import flagfr from '@/assets/img/flags/fr.png'
import flagit from '@/assets/img/flags/it.png'
import appstore from '@/assets/img/market/appstore-light.svg'
import googleplay from '@/assets/img/market/googleplay-light.svg'
import card from '@/assets/img/shop/footer-cards.png'
import { useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const useLink = [
  { link: 'Trending' },
  { link: 'Sale' },
  { link: 'About us' },
  { link: 'Blog' },
  { link: 'Contact' },
  { link: 'Shipping & Returns' },
  { link: 'Delivery info' },
]

const decors = [
  { link: 'Vases ' },
  { link: 'Mirrors ' },
  { link: 'Paintings ' },
  { link: 'Figurines ' },
  { link: 'Textile ' },
  { link: 'Lighting ' },
  { link: 'Photo frames ' },
]

const Footer = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section: any) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <>
      <footer className="footer bg-dark position-relative pb-4 pt-md-3 py-lg-4 py-xl-5">
        <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255,255,255, .03)' }} />
        <Container className="position-relative z-2 pt-5 pb-2" data-bs-theme="dark">
          <Row id="links">
            <Col md={3} xl={2} className="pb-2 pb-md-0">
              <h3 className="h6 text-uppercase d-none d-md-block">Useful links</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  toggleSection('useful')
                }}
                to=""
                className="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none"
                data-bs-toggle="collapse"
                aria-expanded={openSection === 'useful'}
                aria-controls="useful"
                data-show-label="Useful links"
                data-hide-label="Useful links"
                aria-label="Useful links"
              />
              <div className={`${openSection === 'useful' ? 'd-block' : 'collapse'} d-md-block`} id="useful" data-bs-parent="#links">
                <ul className="nav flex-column pb-2 pb-md-0">
                  {useLink.map((item, idx) => (
                    <li className="nav-item" key={idx}>
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        {item.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={3} xl={2} className="pb-2 pb-md-0">
              <h3 className="h6 text-uppercase d-none d-md-block">Decors</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  toggleSection('decors')
                }}
                className="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none"
                to="#decors"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded={openSection === 'decors'}
                aria-controls="decors"
                data-show-label="Decors"
                data-hide-label="Decors"
                aria-label="Decors"
              />
              <div className={`${openSection === 'decors' ? 'd-block' : 'collapse'} d-md-block`} id="decors" data-bs-parent="#links">
                <ul className="nav flex-column pb-2 pb-md-0">
                  {decors.map((item, idx) => (
                    <li className="nav-item" key={idx}>
                      <Link className="nav-link fw-normal px-0 py-1" to="">
                        {item.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={3} xl={2} className="pb-2 pb-md-0">
              <h3 className="h6 text-uppercase d-none d-md-block">Categories</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  toggleSection('categories')
                }}
                className="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none"
                to="#categories"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded={openSection === 'categories'}
                aria-controls="categories"
                data-show-label="Categories"
                data-hide-label="Categories"
                aria-label="Categories"
              />
              <div className={`${openSection === 'categories' ? 'd-block' : 'collapse'} d-md-block`} id="categories" data-bs-parent="#links">
                <ul className="nav flex-column pb-2 pb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="">
                      Kitchen
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="">
                      Bathroom
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="">
                      Living room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="">
                      Bedroom
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className="pb-2 pb-md-0">
              <h3 className="h6 text-uppercase d-none d-md-block">Showroom</h3>
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  toggleSection('showroom')
                }}
                className="btn-more h6 mb-1 text-uppercase text-decoration-none d-flex align-items-center collapsed d-md-none"
                to="#showroom"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded={openSection === 'showroom'}
                aria-controls="showroom"
                data-show-label="Showroom"
                data-hide-label="Showroom"
                aria-label="Showroom"
              />
              <div className={`${openSection === 'showroom' ? 'd-block' : 'collapse'} d-md-block`} id="showroom" data-bs-parent="#links">
                <ul className="nav flex-column pb-3">
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="">
                      1501 Main St, Ste 50
                      <br />
                      Tewksbury MA 01876
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="mailto:email@example.com">
                      email@example.com
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-normal px-0 py-1" to="+15262200459">
                      +1&nbsp;526&nbsp;220&nbsp;0459
                    </Link>
                  </li>
                </ul>
                <ul className="list-unstyled mb-0 pb-3 pb-md-0">
                  <li className="text-light opacity-90 mb-2">Mon-Fri: 8:00 - 21:00</li>
                  <li className="text-light opacity-90 mb-2">Sat: 8:00 - 21:00</li>
                  <li className="text-light opacity-90">Sun: 8:00 - 21:00</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} xl={3} className="mt-md-2 mt-xl-0 pt-2 pt-md-4 pt-xl-0">
              <h3 className="h6 text-uppercase mb-1 pb-1">Download our app</h3>
              <div className="d-flex d-xl-block d-xxl-flex">
                <Link className="btn btn-secondary px-3 py-2 mt-3 me-3" to="">
                  <Image className="mx-1" src={appstore} width={120} alt="App Store" />
                </Link>
                <Link className="btn btn-secondary px-3 py-2 mt-3" to="">
                  <Image className="mx-1" src={googleplay} width={119} alt="Google Play" />
                </Link>
              </div>
            </Col>
          </Row>

          <div className="d-sm-flex align-items-end justify-content-between border-bottom mt-2 mt-sm-1 pt-4 pt-sm-5">
            <nav className="nav d-flex mb-3 mb-sm-4">
              <Link className="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-4" to="">
                Support
              </Link>
              <Link className="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-4" to="">
                Privacy
              </Link>
              <Link className="nav-link text-body-secondary fs-sm fw-normal ps-0 pe-2 py-2 me-sm-4" to="">
                Terms of use
              </Link>
            </nav>

            <Dropdown className="mb-4">
              <DropdownToggle as={'button'} className="btn btn-outline-secondary px-4">
                <Image className="me-2" src={flagen} width={18} alt="English / USD" />
                Eng / USD
              </DropdownToggle>
              <DropdownMenu align={'end'} className="my-1">
                <DropdownItem>
                  <select className="form-select form-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </DropdownItem>
                <DropdownItem className="pb-1">
                  <Image className="me-2" src={flagfr} width={18} alt="Français" />
                  Français
                </DropdownItem>
                <DropdownItem className="pb-1">
                  <Image className="me-2" src={flagde} width={18} alt="Deutsch" />
                  Deutsch
                </DropdownItem>
                <DropdownItem className="">
                  <Image className="me-2" src={flagit} width={18} alt="Italiano" />
                  Italiano
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="d-sm-flex align-items-center pt-4">
            <div className="d-sm-flex align-items-center pe-sm-2">
              <Link className="navbar-brand d-inline-flex align-items-center me-sm-5 mb-4 mb-sm-0" to="/">
                <span className="text-primary flex-shrink-0 me-2">
                  <svg version="1.1" width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                    />
                  </svg>
                </span>
                <span className="text-light opacity-90">Around</span>
              </Link>
              <div className="d-flex mb-4 mb-sm-0">
                <Link className="btn btn-icon btn-sm btn-secondary btn-telegram rounded-circle mx-2 ms-sm-0 me-sm-3" to="" aria-label="Telegram">
                  <i className="ai-telegram" />
                </Link>
                <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2 ms-sm-0 me-sm-3" to="" aria-label="Instagram">
                  <i className="ai-instagram" />
                </Link>
                <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2 ms-sm-0 me-sm-3" to="" aria-label="Facebook">
                  <i className="ai-facebook" />
                </Link>
                <Link className="btn btn-icon btn-sm btn-secondary btn-pinterest rounded-circle mx-2 ms-sm-0 me-sm-3" to="" aria-label="Piterest">
                  <i className="ai-pinterest" />
                </Link>
              </div>
            </div>
            <Image className="ms-sm-auto" src={card} width={187} alt="Accepted cards" />
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
