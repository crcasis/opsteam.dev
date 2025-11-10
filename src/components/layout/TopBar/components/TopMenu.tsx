import { Link, useLocation } from 'react-router-dom'

export type Props = {
    theme?: string
}

const TopMenu = ({}: Props) => {
  const { pathname } = useLocation()
  const isActive = (url: string) => pathname === url || pathname.startsWith(url)

  return (
    <>
      <ul className="navbar-nav navbar-nav-scroll me-auto">
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive('/portfolio/list-v2') ? 'active' : ''}`} to="/portfolio/list-v2">
            Success Stories
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/about/agency' ? 'active' : ''}`} to="/about/agency">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/services/v3' ? 'active' : ''}`} to="/services/v3">
            Talent Acquisition
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/contacts' ? 'active' : ''}`} to="/contacts">
            Contact
          </Link>
        </li>
      </ul>
    </>
  )
}

export default TopMenu
