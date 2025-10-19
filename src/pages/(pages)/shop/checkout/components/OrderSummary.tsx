import cart01 from '@/assets/img/shop/cart/01.png'
import cart02 from '@/assets/img/shop/cart/02.png'
import cart03 from '@/assets/img/shop/cart/03.png'
import { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

const OrderSummary = () => {
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

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const taxes = 8
  const shipping = 15
  const total = subtotal + taxes + shipping

  return (
    <Col lg={5} className="offset-lg-1 pt-1">
      <h2 className="pb-2 pt-md-2 my-4 mt-lg-5">
        Order summary <span className="fs-base fw-normal text-body-secondary">({items.length} items)</span>
      </h2>

      {items.map((item) => (
        <div key={item.id} className="d-sm-flex align-items-center border-top py-4">
          <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" to="/shop/single">
            <Image src={item.image} width={110} alt={item.title} />
          </Link>
          <div className="w-100 pt-1 ps-sm-4">
            <div className="d-flex">
              <div className="me-3">
                <h3 className="h5 mb-2">
                  <Link to="/shop/single">{item.title}</Link>
                </h3>
                <div className="d-sm-flex flex-wrap">
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
              <Link className="nav-link fs-xl p-2" to="" onClick={() => removeItem(item.id)}>
                <i className="ai-trash" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="border-top pt-4 mb-3">
        <div className="input-group input-group-sm border-dashed" style={{ maxWidth: 310 }}>
          <input className="form-control text-uppercase" type="text" placeholder="Your coupon code" />
          <button className="btn btn-secondary" type="button">
            Apply coupon
          </button>
        </div>
      </div>

      <ul className="list-unstyled py-3 mb-0">
        <li className="d-flex justify-content-between mb-2">
          Subtotal:<span className="fw-semibold ms-2">${subtotal.toFixed(2)}</span>
        </li>
        <li className="d-flex justify-content-between mb-2">
          Taxes:<span className="fw-semibold ms-2">${taxes.toFixed(2)}</span>
        </li>
        <li className="d-flex justify-content-between mb-2">
          Shipping cost:<span className="fw-semibold ms-2">${shipping.toFixed(2)}</span>
        </li>
      </ul>
      <div className="d-flex align-items-center justify-content-between border-top fs-xl pt-4">
        Total:<span className="fs-3 fw-semibold text-dark ms-2">${total.toFixed(2)}</span>
      </div>
    </Col>
  )
}

export default OrderSummary
