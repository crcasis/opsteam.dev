import marble from '@/assets/img/shop/pattern/marble.jpg'
import wood from '@/assets/img/shop/pattern/wood.jpg'
import pro01 from '@/assets/img/shop/products/01.png'
import pro02 from '@/assets/img/shop/products/02.png'
import pro03 from '@/assets/img/shop/products/03.png'
import pro04 from '@/assets/img/shop/products/04.png'
import pro05 from '@/assets/img/shop/products/05.png'
import pro06 from '@/assets/img/shop/products/06.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ColorOption = {
  id: string
  label: string
  color: string
  pattern?: string
  checked?: boolean
}

type Product = {
  id: number
  name: string
  price: string
  oldPrice?: string
  badge?: { text: string; className: string }
  image: string
  link: string
  colors?: ColorOption[]
  outOfStock?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Dispenser for soap',
    price: '$16.00',
    image: pro02,
    link: '/shop/single',
  },
  {
    id: 2,
    name: 'Loft style lamp',
    price: '$21.00',
    oldPrice: '$35.00',
    badge: { text: 'Sale', className: 'bg-danger bg-opacity-10 text-danger' },
    image: pro01,
    link: '/shop/single',
    colors: [
      { id: 'color1-1', label: 'Dark gray', color: '#576071', checked: true },
      { id: 'color1-2', label: 'Light gray', color: '#d5d4d3' },
      { id: 'color1-3', label: 'Blue', color: '#a1b7d9' },
    ],
  },
  {
    id: 3,
    name: 'Glossy round vase',
    price: '$15.00',
    image: pro03,
    link: '/shop/single',
    colors: [
      { id: 'color2-1', label: 'Light gray', color: '#d5d4d3', checked: true },
      { id: 'color2-2', label: 'Dark gray', color: '#576071' },
      { id: 'color2-3', label: 'Blue', color: '#a1b7d9' },
    ],
  },
  {
    id: 4,
    name: 'Living room table',
    price: '$46.00',
    badge: { text: 'Out of stock', className: 'bg-gray text-nav' },
    image: pro06,
    link: '/shop/single',
    outOfStock: true,
  },
  {
    id: 5,
    name: 'Ceramic flower pot',
    price: '$19.00',
    image: pro04,
    link: '/shop/single',
    colors: [
      {
        id: 'color3-1',
        label: 'Gray concrete',
        color: '#c0c0c0',
        pattern: marble,
        checked: true,
      },
      { id: 'color3-2', label: 'Beige', color: '#d9c9a1' },
      { id: 'color3-3', label: 'Blue', color: '#a1b7d9' },
    ],
  },
  {
    id: 6,
    name: 'Pendant lamp',
    price: '$22.00',
    badge: { text: 'New', className: 'bg-primary bg-opacity-10 text-primary' },
    image: pro05,
    link: '/shop/single',
    colors: [
      { id: 'color4-1', label: 'Gray', color: '#bab8b7', checked: true },
      {
        id: 'color4-2',
        label: 'Woody brown',
        color: '#c0c0c0',
        pattern: wood,
      },
      {
        id: 'color4-3',
        label: 'Gray marble',
        color: '#c0c0c0',
        pattern: marble,
      },
    ],
  },
]

const Item = () => {
  return (
    <>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map((p) => (
          <Col key={p.id} className="pb-2 pb-sm-3">
            <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
              {p.badge && <span className={`badge position-absolute top-0 start-0 mt-3 ms-3 ${p.badge.className}`}>{p.badge.text}</span>}
              <button
                className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
                type="button"
                aria-label="Remove"
              >
                <i className="ai-trash fs-xl text-danger" />
              </button>
              <div className="swiper swiper-nav-onhover">
                <a className="swiper-wrapper" href={p.link}>
                  <div className="swiper-slide p-2 p-xl-4">
                    <Image className="d-block mx-auto" src={p.image} width={226} height={226} alt={p.name} />
                  </div>
                </a>
                <button className="btn btn-prev btn-icon btn-sm btn-light bg-light border-0 rounded-circle start-0" type="button" aria-label="Prev">
                  <i className="ai-chevron-left fs-xl text-nav" />
                </button>
                <button className="btn btn-next btn-icon btn-sm btn-light bg-light border-0 rounded-circle end-0" type="button" aria-label="Next">
                  <i className="ai-chevron-right fs-xl text-nav" />
                </button>
              </div>
            </div>
            <div className="d-flex mb-1">
              <h3 className="h6 mb-0">
                <Link to={p.link}>{p.name}</Link>
              </h3>
              {p.colors && (
                <div className="d-flex ps-2 mt-n1 ms-auto">
                  {p.colors.map((c) => (
                    <div key={c.id} className="ms-1">
                      <input className="btn-check" type="radio" name={`color-${p.id}`} id={c.id} defaultChecked={c.checked} />
                      <label className="btn btn-icon btn-xs btn-outline-secondary rounded-circle" htmlFor={c.id}>
                        <span
                          className={`d-block rounded-circle ${c.pattern ? 'bg-size-cover bg-position-center' : ''}`}
                          style={{
                            width: '.625rem',
                            height: '.625rem',
                            backgroundColor: c.color,
                            backgroundImage: c.pattern ? `url(${c.pattern})` : undefined,
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="d-flex align-items-center">
              <span className="me-2">{p.price}</span>
              {p.oldPrice && <del className="fs-sm text-body-secondary">{p.oldPrice}</del>}
              {!p.outOfStock && (
                <div className="nav ms-auto" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to cart">
                  <Link className="nav-link fs-lg py-2 px-1" to="" aria-label="Add to Cart">
                    <i className="ai-cart" />
                  </Link>
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Item
