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

  const { isOpen: landingsOpen, toggle: landingsToggle } = useToggle()

  const { isOpen: portfolioOpen, toggle: portToggle } = useToggle()
  const { isOpen: pagesOpen, toggle: pagesToggle } = useToggle()
  const { isOpen: shopOpen, toggle: shopToggle } = useToggle()
  const { isOpen: blogOpen, toggle: blogToggle } = useToggle()
  const { isOpen: aboutOpen, toggle: aboutToggle } = useToggle()
  const { isOpen: serviceOpen, toggle: serviceToggle } = useToggle()
  const { isOpen: contactsOpen, toggle: contactsToggle } = useToggle()
  const { isOpen: loginOpen, toggle: loginToggle } = useToggle()
  const { isOpen: accountOpen, toggle: accountToggle } = useToggle()
  const { isOpen: comingOpen, toggle: comingToggle } = useToggle()

  return (
    <>
      <ul className="navbar-nav navbar-nav-scroll me-auto">
        <Dropdown as={'li'} className="nav-item">
          <DropdownToggle
            onClick={landingsToggle}
            as={Link}
            className={`nav-link ${isActive('/landing') ? 'active ' : ''}`}
            to=""
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside">
            Landings
          </DropdownToggle>
          <ul className={`dropdown-menu overflow-hidden p-0 ${landingsOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
            <div className="d-lg-flex">
              <div className="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4">
                <ul className="list-unstyled mb-0">
                  {landing.slice(0, 10).map((item, idx) => (
                    <li key={idx}>
                      <DropdownItem className={`${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                        {item.label}
                        {item.badge && <span className="text-danger fs-xs ms-2">{item.badge}</span>}
                      </DropdownItem>
                      {item.image && (
                        <span
                          className={`mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 ${item.class}`}
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-dropdown-column pb-2 pt-lg-3 pb-lg-4">
                <ul className="list-unstyled mb-0">
                  {landing.slice(10, 20).map((item, idx) => (
                    <li key={idx}>
                      <DropdownItem className={`${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                        {item.label}
                        {item.badge && <span className="text-danger fs-xs ms-2">{item.badge}</span>}
                      </DropdownItem>
                      {item.image && (
                        <span
                          className={`mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 ${item.class}`}
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-dropdown-column position-relative border-start z-3" />
            </div>
          </ul>
        </Dropdown>
        <Dropdown as={'li'} className="nav-item">
          <DropdownToggle
            as={Link}
            onClick={pagesToggle}
            className={`nav-link ${isActive('/portfolio') || isActive('/shop') || isActive('/blog') || isActive('/about') || isActive('/service') || isActive('/contacts') || isActive('/specialty') || isActive('/pricing') ? 'active' : ''}`}
            to=""
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false">
            Pages
          </DropdownToggle>
          <ul className={`dropdown-menu ${pagesOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={portToggle}
                className={`dropdown-item ${isActive('/portfolio') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Portfolio
              </DropdownToggle>
              <ul className={`dropdown-menu ${portfolioOpen ? 'show' : ''} `} data-bs-theme={`${theme}`}>
                {landing.slice(20, 27).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={shopToggle}
                className={`dropdown-item ${isActive('/shop') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Shop
              </DropdownToggle>
              <ul className={` dropdown-menu ${shopOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(27, 30).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={blogToggle}
                className={`dropdown-item ${isActive('/blog') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Blog
              </DropdownToggle>
              <ul className={`dropdown-menu ${blogOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(30, 37).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={aboutToggle}
                className={`dropdown-item  ${isActive('/about') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                About
              </DropdownToggle>
              <ul className={`dropdown-menu ${aboutOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(37, 39).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={serviceToggle}
                className={`dropdown-item ${isActive('/services') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Services
              </DropdownToggle>
              <ul className={`dropdown-menu ${serviceOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(39, 42).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <li>
              <DropdownItem className={` ${pathname === '/pricing'}`} as={Link} to="/pricing">
                Pricing
              </DropdownItem>
            </li>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={contactsToggle}
                className={`dropdown-item ${isActive('/contacts') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Contacts
              </DropdownToggle>
              <ul className={`dropdown-menu ${contactsOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(42, 45).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            <Dropdown as={'li'}>
              <DropdownToggle
                as={Link}
                onClick={comingToggle}
                className={`dropdown-item ${isActive('/coming') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Specialty Pages
              </DropdownToggle>
              <ul className={`dropdown-menu ${comingOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(45, 50).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </ul>
        </Dropdown>
        <Dropdown as={'li'} className="nav-item">
          <DropdownToggle
            as={Link}
            onClick={accountToggle}
            className={`nav-link ${isActive('/account') ? 'active' : ''}`}
            to=""
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside">
            Account
          </DropdownToggle>
          <ul className={`dropdown-menu ${accountOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
            <Dropdown as={'li'}>
              <DropdownToggle
                onClick={loginToggle}
                as={Link}
                className={`dropdown-item ${isActive('/auth') ? 'active' : ''}`}
                to=""
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside">
                Auth pages
              </DropdownToggle>
              <ul className={`dropdown-menu ${loginOpen ? 'show' : ''}`} data-bs-theme={`${theme}`}>
                {landing.slice(50, 54).map((item, idx) => (
                  <li key={idx}>
                    <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                      {item.label}
                    </DropdownItem>
                  </li>
                ))}
              </ul>
            </Dropdown>
            {landing.slice(54, 61).map((item, idx) => (
              <li key={idx}>
                <DropdownItem className={` ${pathname === item.link ? 'active' : ''}`} as={Link} to={item.link}>
                  {item.label}
                </DropdownItem>
              </li>
            ))}
          </ul>
        </Dropdown>
        <li className="nav-item">
          <Link className={`nav-link ${pathname === '/contacts/v1' ? 'active' : ''}`} to="/contacts/v1">
            Contacts
          </Link>
        </li>
      </ul>
    </>
  )
}

export default TopMenu
