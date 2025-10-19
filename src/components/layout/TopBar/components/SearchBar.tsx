import instagram from '@/assets/img/landing/shop-1/instagram/02.jpg'
import cart from '@/assets/img/shop/cart/01.png'
import cart2 from '@/assets/img/shop/cart/02.png'
import { Image, Modal, ModalBody, ModalHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export type Props = {
  show: boolean
  onHide: () => void
}

const SearchBar = ({ show, onHide }: Props) => {
  return (
    <Modal className="fade" show={show} onHide={onHide} top>
      <ModalHeader className="d-block position-relative border-0 pb-3">
        <form className="position-relative w-100 mt-2 mb-4">
          <button
            className="btn-close position-absolute top-50 end-0 translate-middle-y m-0 me-n1"
            type="reset"
            onClick={onHide}
            aria-label="Close"
          />
          <i className="ai-search fs-xl position-absolute top-50 start-0 translate-middle-y ms-3" />
          <input className="form-control form-control-lg px-5" type="search" placeholder="Type to search" />
        </form>
        <div className="fs-xs fw-medium text-body-secondary text-uppercase">Suggestions</div>
      </ModalHeader>
      <ModalBody className="pt-3">
        <div className="d-flex align-items-center border-bottom pb-4 mb-4">
          <Link className="position-relative d-inline-block flex-shrink-0 bg-secondary rounded-1" to="/shop/single">
            <span className="badge bg-success position-absolute top-0 start-100 translate-middle ms-n1">Shop</span>
            <Image src={cart} width={90} alt="Product" />
          </Link>
          <div className="ps-3">
            <h4 className="h6 mb-2">
              <Link to="/shop/single">Candle in concrete bowl</Link>
            </h4>
            <span className="mb-0 me-2">$11.00</span>
            <del className="fs-sm text-body-secondary ms-auto">$15.00</del>
          </div>
        </div>
        <div className="d-flex align-items-center border-bottom pb-4 mb-4">
          <Link className="position-relative d-inline-block flex-shrink-0" to="#">
            <span className="badge bg-info position-absolute top-0 start-100 translate-middle ms-n1">Blog</span>
            <Image className="rounded-1" src={instagram} width={90} alt="Post" />
          </Link>
          <div className="ps-3">
            <h4 className="h6 mb-0">
              <Link to="">Bedroom decoration explained. Tips &amp; tricks from the field experts.</Link>
            </h4>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link className="position-relative d-inline-block flex-shrink-0 bg-secondary rounded-1" to="/shop/single">
            <span className="badge bg-success position-absolute top-0 start-100 translate-middle ms-n1">Shop</span>
            <Image src={cart2} width={90} alt="Product" />
          </Link>
          <div className="ps-3">
            <h4 className="h6 mb-2">
              <Link to="/shop/single">Exquisite glass vase</Link>
            </h4>
            <span className="mb-0 me-2">$23.00</span>
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default SearchBar
