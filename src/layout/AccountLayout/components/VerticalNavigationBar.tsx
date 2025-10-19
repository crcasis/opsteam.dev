import avatar from '@/assets/img/avatar/02.jpg'
import { Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const navItems = [
  { href: '/account/overview', icon: 'ai-user-check', label: 'Overview' },
  { href: '/account/settings', icon: 'ai-settings', label: 'Settings' },
  { href: '/account/billing', icon: 'ai-wallet', label: 'Billing' },
  { href: '/account/orders', icon: 'ai-cart', label: 'Orders' },
  { href: '/account/earnings', icon: 'ai-activity', label: 'Earnings' },
  { href: '/account/chat', icon: 'ai-messages', label: 'Chat', badge: 4 },
  { href: '/account/favorites', icon: 'ai-heart', label: 'Favorites' },
  { href: '/auth/sign-in', icon: 'ai-logout', label: 'Sign out' },
]
const VerticalNavigationBar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <div className="pb-2 pb-lg-0 mb-4 mb-lg-5">
        <Image className="d-block rounded-circle mb-2" src={avatar} width={80} alt="Isabella Bocouse" />
        <h3 className="h5 mb-1">Isabella Bocouse</h3>
        <p className="fs-sm text-body-secondary mb-0">bocouse@example.com</p>
      </div>
      <nav className="nav flex-column pb-2 pb-lg-4 mb-3">
        <h4 className="fs-xs fw-medium text-body-secondary text-uppercase pb-1 mb-2">Account</h4>
        {navItems.slice(0, 3).map((item) => (
          <a key={item.href} href={item.href} className={`nav-link fw-semibold py-2 px-0 ${pathname === item.href ? 'active' : ''}`}>
            <i className={`${item.icon} fs-5 opacity-60 me-2`} />
            {item.label}
          </a>
        ))}
      </nav>
      <nav className="nav flex-column pb-2 pb-lg-4 mb-1">
        <h4 className="fs-xs fw-medium text-body-secondary text-uppercase pb-1 mb-2">Dashboard</h4>
        {navItems.slice(3, 7).map((item) => (
          <a key={item.href} href={item.href} className={`nav-link fw-semibold py-2 px-0 ${pathname === item.href ? 'active' : ''}`}>
            <i className={`${item.icon} fs-5 opacity-60 me-2`} />
            {item.label}
            {item.badge && <span className="badge bg-danger ms-auto">{item.badge}</span>}
          </a>
        ))}
      </nav>
      <nav className="nav flex-column">
        <a className="nav-link fw-semibold py-2 px-0" href="/auth/sign-in">
          <i className="ai-logout fs-5 opacity-60 me-2" />
          Sign out
        </a>
      </nav>
    </>
  )
}

export default VerticalNavigationBar
