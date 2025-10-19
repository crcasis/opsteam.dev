import shop01 from '@/assets/img/landing/shop-2/products/01.png'
import shop02 from '@/assets/img/landing/shop-2/products/02.png'
import shop03 from '@/assets/img/landing/shop-2/products/03.png'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Product = {
  name: string
  price: string
  image: string
  badge: string
}

const products: Product[] = [
  { name: 'The Sunshine Box (6)', price: '$18.00', image: shop01, badge: 'New' },
  { name: 'Fromage (9)', price: '$24.00', image: shop02, badge: 'New' },
  { name: 'Rainbow (20)', price: '$58.00', image: shop03, badge: 'New' },
  { name: 'Fromage (9)', price: '$24.00', image: shop02, badge: 'New' },
]

const Slider = () => {
  return (
    <>
      <section className="container pt-5 mt-md-2 mt-lg-4 mt-xl-5">
        <div className="position-relative z-2 d-flex justify-content-end pt-4 pb-4 mt-2 mt-sm-3 mt-md-4 mb-n5 mb-lg-4">
          <button className="btn btn-prev btn-icon btn-sm btn-outline-dark rounded-circle ms-3" type="button" id="new-prev" aria-label="Prev">
            <i className="ai-arrow-left" />
          </button>
          <button className="btn btn-next btn-icon btn-sm btn-outline-dark rounded-circle ms-3" type="button" id="new-next" aria-label="Next">
            <i className="ai-arrow-right" />
          </button>
        </div>
        <Row>
          <Col lg={3} className="pb-3 mb-3 mb-md-4">
            <h2 className="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">New arrivals</h2>
            <p className="fs-lg mb-4">Explore our new mouthwatering selection that we've recently introduced.</p>
            <a className="btn btn-dark rounded-pill" href="#">
              Shop boxes
            </a>
          </Col>

          <Col lg={9}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              loop={true}
              navigation={{
                prevEl: '#new-prev',
                nextEl: '#new-next',
              }}
              breakpoints={{
                500: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
              }}
            >
              {products.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="card-hover position-relative bg-secondary rounded mb-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary position-absolute top-0 start-0 mt-3 ms-3">{item.badge}</span>
                    <button
                      className="btn btn-icon btn-sm btn-light bg-light border-0 rounded-circle position-absolute top-0 end-0 mt-3 me-3 z-5 opacity-0"
                      type="button"
                      aria-label="Add to Favorites"
                    >
                      <i className="ai-heart fs-xl text-nav" />
                    </button>
                    <Link className="d-block" to="">
                      <Image className="d-block mx-auto" src={item.image} alt="Product" />
                    </Link>
                  </div>
                  <div className="d-flex mb-1">
                    <h3 className="h6 mb-0">
                      <Link to="">{item.name}</Link>
                    </h3>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-2">{item.price}</span>
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
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Slider
