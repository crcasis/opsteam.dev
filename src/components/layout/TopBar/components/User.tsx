import avatar from '@/assets/img/avatar/01.jpg'
import useToggle from '@/hook/useToggle'
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownToggle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const User = () => {
  const { isOpen: pagesOpen, toggle: pagesToggle } = useToggle()
  return (
    <>
      <Dropdown className="nav d-none d-sm-block order-lg-3">
        <DropdownToggle onClick={pagesToggle} as={Link} className="nav-link d-flex align-items-center p-0" to="">
          <Image className="border rounded-circle" src={avatar} width={48} alt="Isabella Bocouse" />
          <div className="ps-2">
            <div className="fs-xs lh-1 opacity-60">Hello,</div>
            <div className="fs-sm dropdown-toggle content-none">Isabella</div>
          </div>
        </DropdownToggle>
        <div className={`dropdown-menu dropdown-menu-end my-1 ${pagesOpen ? 'show' : ''}`}>
          <DropdownHeader as={'h6'} className="fs-xs fw-medium text-body-secondary text-uppercase pb-1">
            Account
          </DropdownHeader>
          <DropdownItem href="/account/overview">
            <i className="ai-user-check fs-lg opacity-70 me-2" />
            Overview
          </DropdownItem>
          <DropdownItem href="/account/settings">
            <i className="ai-settings fs-lg opacity-70 me-2" />
            Settings
          </DropdownItem>
          <DropdownItem href="/account/billing">
            <i className="ai-wallet fs-base opacity-70 me-2 mt-n1" />
            Billing
          </DropdownItem>
          <DropdownDivider />
          <DropdownHeader as={'h6'} className="fs-xs fw-medium text-body-secondary text-uppercase pb-1">
            Dashboard
          </DropdownHeader>
          <DropdownItem href="/account/orders">
            <i className="ai-cart fs-lg opacity-70 me-2" />
            Orders
          </DropdownItem>
          <DropdownItem href="/account/earnings">
            <i className="ai-activity fs-lg opacity-70 me-2" />
            Earnings
          </DropdownItem>
          <Link className="dropdown-item d-flex align-items-center" to="/account/chat">
            <i className="ai-messages fs-lg opacity-70 me-2" />
            Chat
            <span className="badge bg-danger ms-auto">4</span>
          </Link>
          <DropdownItem href="/account/favorites">
            <i className="ai-heart fs-lg opacity-70 me-2" />
            Favorites
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href="/auth/sign-in">
            <i className="ai-logout fs-lg opacity-70 me-2" />
            Sign out
          </DropdownItem>
        </div>
      </Dropdown>
    </>
  )
}

export default User
