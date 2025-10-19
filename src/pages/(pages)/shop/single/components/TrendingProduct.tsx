import shop01 from '@/assets/img/shop/products/01.png'
import shop02 from '@/assets/img/shop/products/02.png'
import shop03 from '@/assets/img/shop/products/03.png'
import shop06 from '@/assets/img/shop/products/06.png'
import shop09 from '@/assets/img/shop/products/09.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Product {
  name: string
  price: number
  oldPrice?: number
  image: string
  badge?: { text: string; color: string }
  colors?: string[]
}

const products: Product[] = [
  {
    name: 'Loft style lamp',
    price: 21,
    oldPrice: 35,
    image: shop01,
    badge: { text: 'Sale', color: 'danger' },
    colors: ['#576071', '#d5d4d3', '#a1b7d9'],
  },
  { name: 'Dispenser for soap', price: 16, image: shop02 },
  {
    name: 'Glossy round vase',
    price: 11,
    oldPrice: 15,
    image: shop03,
    badge: { text: 'Sale', color: 'danger' },
    colors: ['#d5d4d3', '#576071', '#a1b7d9'],
  },
  { name: 'Scented candle', price: 13, image: shop09, badge: { text: 'New', color: 'primary' } },
  { name: 'Living room table', price: 46, image: shop06 },
]

const TrendingProduct = () => {
  return (
    <>
      <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div className="d-flex align-items-center justify-content-between pb-4 mb-2 mb-md-3">
          <h2 className="h1 pt-1 mb-0">You may also like</h2>

          <div className="d-flex">
            <button
              className="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle ms-3"
              type="button"
              id="trending-prev"
              aria-label="Prev"
            >
              <i className="ai-arrow-left" />
            </button>
            <button
              className="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle ms-3"
              type="button"
              id="trending-next"
              aria-label="Next"
            >
              <i className="ai-arrow-right" />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: '#trending-prev',
            nextEl: '#trending-next',
          }}
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card-hover position-relative bg-secondary rounded-1 p-3 mb-4">
                {item.badge && (
                  <span className={`badge bg-${item.badge.color} bg-opacity-10 text-${item.badge.color} position-absolute top-0 start-0 mt-3 ms-3`}>
                    {item.badge.text}
                  </span>
                )}
                <button
                  className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
                  type="button"
                  aria-label="Add to Favorites"
                >
                  <i className="ai-heart fs-xl text-nav" />
                </button>
                <Link className="d-block p-2 p-xl-4" to="/shop/single">
                  <Image className="d-block mx-auto" src={item.image} width={226} alt="Product" />
                </Link>
              </div>
              <div className="d-flex mb-1">
                <h3 className="h6 mb-0">
                  <Link to="/shop/single">{item.name}</Link>
                </h3>
                {item.colors && (
                  <div className="d-flex ps-2 mt-n1 ms-auto">
                    {item.colors.map((color, idx) => (
                      <div className="ms-1" key={idx}>
                        <input
                          className="btn-check"
                          type="radio"
                          name={`color-${item}`}
                          id={`color-${item}-${idx}`}
                          defaultChecked={idx === 0}
                          defaultValue="Dark gray"
                        />
                        <label className="btn btn-icon btn-xs btn-outline-secondary rounded-circle" htmlFor={`color-${item}-${idx}`}>
                          <span className="d-block rounded-circle" style={{ width: '.625rem', height: '.625rem', backgroundColor: color }} />
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">${item.price.toFixed(2)}</span>
                {item.oldPrice && <del className="fs-sm text-body-secondary">${item.oldPrice.toFixed(2)}</del>}
                <div
                  className="nav ms-auto"
                  data-bs-toggle="tooltip"
                  data-bs-template='<div class="tooltip fs-xs" role="tooltip"><div class="tooltip-inner bg-light text-body-secondary p-0"></div></div>'
                  data-bs-placement="left"
                  title="Add to cart"
                >
                  <Link className="nav-link fs-lg py-2 px-1" to="" aria-label="Add to Cart">
                    <i className="ai-cart" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default TrendingProduct
