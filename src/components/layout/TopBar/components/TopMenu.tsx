import useToggle from '@/hook/useToggle'
import { Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { landing } from './data'

export type Props = {
    theme?:string
}

const TopMenu = ({theme} :Props) => {
  const { pathname } = useLocation()
  const isActive = (url: any) => pathname === url || pathname.startsWith(url)

  const { isOpen: portfolioOpen, toggle: portToggle } = useToggle()

  return (
    <>
      <ul className="navbar-nav navbar-nav-scroll me-auto">
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">
            Home
          </Link>
        </li>
        <Dropdown as={'li'} className="nav-item">
          <DropdownToggle
            as={Link}
            onClick={portToggle}
            className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
            to=""
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside">
            Portfolio
          </DropdownToggle>
          <ul className={`dropdown-menu ${portfolioOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
            {landing.slice(0, 3).map((item, idx) => (
              <li key={idx}>
                <DropdownItem className={`${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                  {item.label}
                </DropdownItem>
              </li>
            ))}
          </ul>
        </Dropdown>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/about/agency' ? 'active' : ''}`} to="/about/agency">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/services/v3' ? 'active' : ''}`} to="/services/v3">
            Success Stories
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
