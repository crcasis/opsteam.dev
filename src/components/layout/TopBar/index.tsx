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
                    d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                  ></path>
                </svg>
              </span>
              Around
            </Link>

            <ThemeMode />

            {showSqureBuyNow && (
              <Link className="btn btn-primary btn-sm fs-sm rounded-0 order-lg-3 d-none d-sm-inline-flex" to="" rel="noopener">
                <i className="ai-cart fs-xl me-2 ms-n1" />
                Buy now
              </Link>
            )}

            {showRoundBuyNow && (
              <Link className="btn btn-primary btn-sm fs-sm rounded-pill order-lg-3 d-none d-sm-inline-flex" to="" rel="noopener">
                <i className="ai-cart fs-xl me-2 ms-n1" />
                Buy now
              </Link>
            )}

            {buynow && (
              <Link className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" to="" rel="noopener">
                <i className="ai-cart fs-xl me-2 ms-n1" />
                Buy now
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
                <Link className="btn btn-primary w-100 mb-1" to="" rel="noopener">
                  <i className="ai-cart fs-xl me-2 ms-n1" />
                  Buy now
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
