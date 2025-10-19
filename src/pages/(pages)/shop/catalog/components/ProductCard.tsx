import product01 from '@/assets/img/shop/products/01.png'
import product02 from '@/assets/img/shop/products/02.png'
import product03 from '@/assets/img/shop/products/03.png'
import product04 from '@/assets/img/shop/products/04.png'
import product05 from '@/assets/img/shop/products/05.png'
import product06 from '@/assets/img/shop/products/06.png'
import product07 from '@/assets/img/shop/products/07.png'
import product08 from '@/assets/img/shop/products/08.png'
import product09 from '@/assets/img/shop/products/09.png'
import product10 from '@/assets/img/shop/products/10.png'
import product11 from '@/assets/img/shop/products/11.png'
import product12 from '@/assets/img/shop/products/12.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const products = [
  {
    id: 1,
    title: 'Loft style lamp',
    price: 21,
    oldPrice: 35,
    badge: 'Sale',
    badgeClass: 'bg-danger',
    images: product01,
    colors: ['#576071', '#d5d4d3', '#a1b7d9'],
  },
  {
    id: 2,
    title: 'Dispenser for soap',
    price: 16,
    images: product02,
  },
  {
    id: 3,
    title: 'Glossy round vase',
    price: 11,
    oldPrice: 15,
    badge: 'Sale',
    badgeClass: 'bg-danger',
    images: product03,
    colors: ['#d5d4d3', '#576071', '#a1b7d9'],
  },
  {
    id: 4,
    title: 'Ceramic flower pot',
    price: 19,
    badge: 'New',
    badgeClass: 'bg-primary',
    images: product04,
    colors: ['#c0c0c0', '#d9c9a1', '#a1b7d9'],
  },
  {
    id: 5,
    title: 'Pendant lamp',
    price: 22,
    images: product05,
  },
  {
    id: 6,
    title: 'Living room table',
    price: 46,
    images: product06,
  },
  {
    id: 7,
    title: 'Teapot for hot drinks',
    price: 17,
    images: product07,
  },
  {
    id: 8,
    title: 'Analogue wall clock',
    price: 25,
    badge: 'New',
    badgeClass: 'bg-primary',
    images: product08,
    colors: ['#a8c2c0', '#b4a9c3', '#a1b7d9'],
  },
  {
    id: 9,
    title: 'Scented candle',
    price: 13,
    images: product09,
  },
  {
    id: 10,
    title: 'Matte color pitcher',
    price: 11,
    oldPrice: 15,
    badge: 'Sale',
    badgeClass: 'bg-danger',
    images: product10,
    colors: ['#aea6a6', '#d9c9a1', '#a1b7d9'],
  },
  {
    id: 11,
    title: 'Plate with granite print',
    price: 14,
    images: product11,
  },
  {
    id: 12,
    title: 'Kitchen organizer',
    price: 32,
    images: product12,
  },
]

const ProductCard = () => {
  return (
    <>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map((p, idx) => (
          <Col className="pb-2 pb-sm-3" key={idx}>
            <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
              {p.badge && (
                <span
                  className={`badge ${p.badgeClass} bg-opacity-10 text-${p.badgeClass.replace('bg-', '')} position-absolute top-0 start-0 mt-3 ms-3`}
                >
                  {p.badge}
                </span>
              )}
              <button
                className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
                type="button"
                aria-label="Add to Favorites"
              >
                <i className="ai-heart fs-xl text-nav" />
              </button>
              <Swiper loop modules={[Navigation]} navigation={{ prevEl: '.btn-prev', nextEl: '.btn-next' }} className="swiper-nav-onhover">
                <SwiperSlide className="p-2 p-xl-4">
                  <Link to="/shop/single">
                    <Image className="d-block mx-auto" src={p.images} width={226} height={226} alt={p.title} />
                  </Link>
                </SwiperSlide>
                <button className="btn btn-prev btn-icon btn-sm btn-light bg-light border-0 rounded-circle start-0" type="button">
                  <i className="ai-chevron-left fs-xl text-nav" />
                </button>
                <button className="btn btn-next btn-icon btn-sm btn-light bg-light border-0 rounded-circle end-0" type="button">
                  <i className="ai-chevron-right fs-xl text-nav" />
                </button>
              </Swiper>
            </div>
            <div className="d-flex mb-1">
              <h3 className="h6 mb-0">
                <Link to="/shop/single">{p.title}</Link>
              </h3>
              {p.colors && (
                <div className="d-flex ps-2 mt-n1 ms-auto">
                  {p.colors.map((c, idx) => (
                    <div className="ms-1" key={idx}>
                      <input className="btn-check" type="radio" name={`color${p.id}`} id={`color${p.id}-${idx}`} defaultChecked={idx === 0} />
                      <label className="btn btn-icon btn-xs btn-outline-secondary rounded-circle" htmlFor={`color${p.id}-${idx}`}>
                        <span className="d-block rounded-circle" style={{ width: '.625rem', height: '.625rem', backgroundColor: c }} />
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">${p.price.toFixed(2)}</span>
              {p.oldPrice && <del className="fs-sm text-body-secondary">${p.oldPrice.toFixed(2)}</del>}
              <div className="nav ms-auto" title="Add to cart">
                <Link className="nav-link fs-lg py-2 px-1" to="" aria-label="Add to Cart">
                  <i className="ai-cart" />
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductCard
