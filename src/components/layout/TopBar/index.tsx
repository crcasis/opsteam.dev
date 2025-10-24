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
                <svg width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
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
