import Header from '@/components/layout/TopBar'
import { Row } from 'react-bootstrap'
import Checkout from './components/Checkout'
import OrderSummary from './components/OrderSummary'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <Header searchbar userSignIn />
      <div className="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style={{ width: '52.5%' }} />
      <form className="needs-validation container position-relative z-2 pt-5 pb-lg-5 pb-md-4 pb-2">
        <Row>
          <Checkout />
          <OrderSummary />
        </Row>
        <div className="d-lg-none pb-2 mt-2 mt-lg-0 pt-4 pt-lg-5">
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" defaultChecked id="save-info2" />
            <label className="form-check-label" htmlFor="save-info2">
              <span className="text-body-secondary">
                Your personal information will be used to process your order, to support your experience on this site and for other purposes described
                in the
              </span>
              <Link className="fw-medium" to="">
                privacy policy
              </Link>
            </label>
          </div>
          <button className="btn btn-lg btn-primary w-100 w-sm-auto" type="submit">
            Place an order
          </button>
        </div>
      </form>

      <footer className="footer container position-relative z-2 pt-4 pt-xl-5 pb-4">
        <div className="nav fs-sm pb-1 pb-sm-3">
          <span className="text-body-secondary me-1">© All rights reserved. Made by</span>
          <Link className="nav-link d-inline fw-normal p-0" to="https://stackbros.in/" target="_blank" rel="noopener">
            Opsteam.dev
          </Link>
        </div>
      </footer>
    </>
  )
}

export default page
