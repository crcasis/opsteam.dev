import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardEmpty from './components/CardEmpty'
import CartOffcanvas from './components/CartOffcanvas'
import SearchBar from './components/SearchBar'
import ThemeMode from './components/ThemeMode'
import TopMenu from './components/TopMenu'
import User from './components/User'

export type Props = {
  theme?: string
  classname?: string
  user?: boolean
  buynow?: boolean
  searchbar?: boolean
  userSignIn?: boolean
  showCart?: boolean
  showRoundBuyNow?: boolean
  showCartEmpty?: boolean
  showSqureBuyNow?: boolean
}

const Header = ({ theme, classname, user, buynow, searchbar, userSignIn, showCart, showRoundBuyNow, showCartEmpty, showSqureBuyNow }: Props) => {
  const { scrollY } = useScrollEvent()
  const [showSearch, setShowSearch] = useState(false)
  const { isOpen, toggle } = useToggle()

  const [navOpen, setNavOpen] = useState(false)
  const handleNavToggle = () => setNavOpen((prev) => !prev)

  return (
    <>
      <header data-bs-theme={`${theme}`}>
        <div className={`navbar navbar-expand-lg fixed-top ${classname} navbar-${scrollY > 100 && 'stuck'}`}>
          <Container>
          <Link className="navbar-brand pe-sm-3" to="/">
  <span className="text-primary flex-shrink-0 me-2">
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 57 57"
      style={{ enableBackground: 'new 0 0 57 57' }}
      xmlSpace="preserve"
      width={35}
      height={35}
    >
      <rect x="0" y="0" width="57" height="57" fill="#ECF0F1" />
      <path
        fill="#BDC3C7"
        d="M20,44c-0.256,0-0.512-0.098-0.707-0.293L4.586,29l14.707-14.707c0.391-0.391,1.023-0.391,1.414,0
        s0.391,1.023,0,1.414L7.414,29l13.293,13.293c0.391,0.391,0.391,1.023,0,1.414C20.512,43.902,20.256,44,20,44z"
      />
      <path
        fill="#BDC3C7"
        d="M37,44c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L49.586,29L36.293,15.707
        c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L52.414,29L37.707,43.707C37.512,43.902,37.256,44,37,44z"
      />
      <path
        fill="#BDC3C7"
        d="M24.001,50c-0.071,0-0.144-0.008-0.216-0.023c-0.539-0.118-0.88-0.651-0.762-1.191l9-41
        c0.118-0.539,0.654-0.88,1.191-0.762c0.539,0.118,0.88,0.651,0.762,1.191l-9,41C24.874,49.682,24.46,50,24.001,50z"
      />
    </svg>
  </span>
  Opsteam
</Link>

            <ThemeMode />

            {showSqureBuyNow && (
              <Link className="btn btn-primary btn-sm fs-sm rounded-0 order-lg-3 d-none d-sm-inline-flex" to="/contacts/v1" rel="noopener">
                <i className="ai-calendar fs-xl me-2 ms-n1" />
                Book an appointment
              </Link>
            )}

            {showRoundBuyNow && (
              <Link className="btn btn-primary btn-sm fs-sm rounded-pill order-lg-3 d-none d-sm-inline-flex" to="/contacts/v1" rel="noopener">
                <i className="ai-calendar fs-xl me-2 ms-n1" />
                Book an appointment
              </Link>
            )}

            {buynow && (
              <Link className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" to="/contacts/v1" rel="noopener">
                <i className="ai-calendar fs-xl me-2 ms-n1" />
                Book an appointment
              </Link>
            )}

            <div className="nav align-items-center order-lg-3 ms-n1 me-3 me-sm-0">
              {searchbar && (
                <button className="nav-link fs-4 p-2 mx-sm-1" onClick={() => setShowSearch(true)} aria-label="Search">
                  <i className="ai-search" />
                </button>
              )}
              {userSignIn && (
                <Link className="nav-link fs-4 p-2 mx-sm-1 d-none d-sm-flex" to="/auth/sign-in" aria-label="Account">
                  <i className="ai-user" />
                </Link>
              )}
              {showCart && (
                <Link
                  onClick={toggle}
                  className="nav-link position-relative fs-4 p-2"
                  to="#cartOffcanvas"
                  data-bs-toggle="offcanvas"
                  aria-label="Shopping cart"
                >
                  <i className="ai-cart" />
                  <span className="badge bg-primary fs-xs position-absolute end-0 top-0 me-n1" style={{ padding: '.25rem .375rem' }}>
                    3
                  </span>
                </Link>
              )}

              {showCartEmpty && (
                <Link
                  onClick={toggle}
                  className="nav-link position-relative fs-4 p-2"
                  to="#cartOffcanvas"
                  data-bs-toggle="offcanvas"
                  aria-label="Shopping cart"
                >
                  <i className="ai-cart" />
                </Link>
              )}
            </div>
            {user && <User />}
            <button
              className="navbar-toggler ms-sm-3"
              type="button"
              onClick={handleNavToggle}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <nav className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarNav">
              <TopMenu />

              <div className="d-sm-none p-3 mt-n3">
                <Link className="btn btn-primary w-100 mb-1" to="/contacts/v1" rel="noopener">
                  <i className="ai-calendar fs-xl me-2 ms-n1" />
                  Book an appointment
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      </header>

      <SearchBar show={showSearch} onHide={() => setShowSearch(false)} />

      {showCart && <CartOffcanvas isOpen={isOpen} toggle={toggle} />}

      {showCartEmpty && <CardEmpty isOpen={isOpen} toggle={toggle} />}
    </>
  )
}

export default Header
