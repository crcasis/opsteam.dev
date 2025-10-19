import cart01 from '@/assets/img/shop/cart/01.png'
import cart02 from '@/assets/img/shop/cart/02.png'
import cart03 from '@/assets/img/shop/cart/03.png'
import { useState } from 'react'
import { Image, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
  toggle: () => void
}

type CartItem = {
  id: number
  title: string
  price: number
  oldPrice?: number
  image: string
  qty: number
  color?: string
  weight?: string
}

const CartOffcanvas = ({ isOpen, toggle }: Props) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      title: 'Candle in concrete bowl',
      price: 11,
      oldPrice: 15,
      image: cart01,
      qty: 2,
      color: 'Gray night',
      weight: '140g',
    },
    {
      id: 2,
      title: 'Exquisite glass vase',
      price: 23,
      image: cart02,
      qty: 1,
    },
    {
      id: 3,
      title: 'Set for a dinner party of 7 items',
      price: 47,
      image: cart03,
      qty: 1,
    },
  ])

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQty = (id: number, change: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + change) } : i)))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      <Offcanvas show={isOpen} onHide={toggle} placement="end" className="py-2 p-sm-4 p-md-5" id="cartOffcanvas" style={{ width: 680 }}>
        <div className="px-4 pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <OffcanvasTitle as={'h2'} className="d-flex align-items-center mb-1">
              Your cart <span className="fs-base fw-normal text-body-secondary ms-3">({items.length} items)</span>
            </OffcanvasTitle>
            <OffcanvasHeader closeButton />
          </div>
        </div>
        <OffcanvasBody>
          {items.map((item) => (
            <div key={item.id} className="d-sm-flex align-items-center border-top py-4">
              <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-md-3 mb-2 mb-sm-0" to="/shop/single">
                <Image src={item.image} width={110} alt={item.title} />
              </Link>
              <div className="w-100 pt-1 ps-sm-4">
                <div className="d-flex">
                  <div className="me-3">
                    <h3 className="h5 mb-2">
                      <Link to="/shop/single">{item.title}</Link>
                    </h3>
                    <div className="d-flex flex-wrap">
                      {item.color && (
                        <div className="text-body-secondary fs-sm me-3">
                          Color: <span className="text-dark fw-medium">{item.color}</span>
                        </div>
                      )}
                      {item.weight && (
                        <div className="text-body-secondary fs-sm me-3">
                          Weight: <span className="text-dark fw-medium">{item.weight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-end ms-auto">
                    <div className="fs-5 mb-2">${item.price.toFixed(2)}</div>
                    {item.oldPrice && <del className="text-body-secondary ms-auto">${item.oldPrice.toFixed(2)}</del>}
                  </div>
                </div>
                <div className="count-input ms-n3">
                  <button className="btn btn-icon fs-xl" type="button" onClick={() => updateQty(item.id, -1)}>
                    -
                  </button>
                  <input className="form-control" type="number" value={item.qty} readOnly />
                  <button className="btn btn-icon fs-xl" type="button" onClick={() => updateQty(item.id, 1)}>
                    +
                  </button>
                </div>
                <div className="nav justify-content-end mt-n5 mt-sm-n3">
                  <a className="nav-link fs-xl p-2" href="#" onClick={() => removeItem(item.id)}>
                    <i className="ai-trash" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </OffcanvasBody>

        <div className="px-4 pb-3 pb-sm-4 pb-sm-5">
          <div className="d-sm-flex align-items-center border-top pt-4">
            <div className="input-group input-group-sm border-dashed mb-3 mb-sm-0 me-sm-4 me-md-5">
              <input className="form-control text-uppercase" type="text" placeholder="Your coupon code" />
              <button className="btn btn-secondary" type="button">
                Apply coupon
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className="fs-xl me-3">Total:</span>
              <span className="h3 mb-0">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between px-4 pb-3">
          <div className="nav d-none d-sm-block">
            <a className="nav-link fw-semibold px-0" href="#cartOffcanvas" data-bs-dismiss="offcanvas">
              <i className="ai-chevron-left fs-xl me-2" />
              Back to shop
            </a>
          </div>
          <a className="btn btn-lg btn-primary w-100 w-sm-auto" href="/shop/checkout">
            Proceed to checkout
            <i className="ai-chevron-right ms-2 me-n1" />
          </a>
        </div>
      </Offcanvas>
    </>
  )
}

export default CartOffcanvas
