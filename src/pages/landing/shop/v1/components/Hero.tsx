import shop01 from '@/assets/img/landing/shop-1/hero/01.png'
import shop02 from '@/assets/img/landing/shop-1/hero/02.png'
import shop03 from '@/assets/img/landing/shop-1/hero/03.png'
import shop04 from '@/assets/img/landing/shop-1/hero/04.png'
import shop05 from '@/assets/img/landing/shop-1/hero/05.png'
import bg from '@/assets/img/landing/shop-1/hero/bg.jpg'
import Jarallax from '@/components/Jarallax'
import { CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Product = {
  name: string
  price: string
  oldPrice?: string
  image: string
}

const products: Product[] = [
  { name: 'Exquisite glass vase', price: '$19.00', image: shop01 },
  { name: 'Pot for home flowers', price: '$11.00', oldPrice: '$15.00', image: shop02 },
  { name: 'Ceramic soap dispenser', price: '$16.00', image: shop03 },
  { name: 'Wooden clock with metal hands', price: '$24.00', image: shop04 },
  { name: 'Scented candle in ceramic shell', price: '$13.00', image: shop05 },
]

const Hero = () => {
  return (
    <>
      <section>
        <div className="jarallax bg-dark min-vh-100 py-5" data-jarallax data-type="scroll-opacity" data-speed="0.7">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-40" />
          <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${bg})` }} />
          <Container className="position-relative z-5 py-sm-4 py-lg-5 mt-4">
            <Row className="pt-lg-2 py-xl-4 py-xxl-5 mb-md-4 mb-lg-5">
              <Col md={10} lg={9} xl={8} xxl={7} className="pt-5 mb-5">
                <h1 className="display-2 text-light text-uppercase pb-sm-2 pb-md-3">Decor to create comfort at home</h1>
                <p className="text-light opacity-70 pb-3 pb-md-4 mb-3" style={{ maxWidth: 520 }}>
                  On the site you will find all the wonderful decor items from photo frames to tablecloths for the dining table
                </p>
                <Link className="btn btn-outline-light" to="/shop/catalog">
                  Explore the catalog
                </Link>
              </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="fw-medium text-light text-uppercase">Most Popular</div>
              <div className="d-flex">
                <button
                  className="btn btn-prev btn-icon btn-sm btn-outline-light rounded-circle ms-3"
                  type="button"
                  id="popular-prev"
                  aria-label="Prev"
                >
                  <i className="ai-arrow-left" />
                </button>
                <button
                  className="btn btn-next btn-icon btn-sm btn-outline-light rounded-circle ms-3"
                  type="button"
                  id="popular-next"
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
                860: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: '#popular-prev',
                nextEl: '#popular-next',
              }}
            >
              {products.map((item, idx) => (
                <SwiperSlide className="h-auto" key={idx}>
                  <Link className="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" to="/shop/single">
                    <CardBody className="p-4 px-sm-3 px-md-4">
                      <div className="d-flex align-items-center">
                        <Image src={item.image} width={97} alt="Product" />
                        <div className="ps-3 ps-md-4">
                          <h3 className="fs-sm mb-2">{item.name}</h3>
                          <p className="fs-sm mb-0">
                            {item.price}
                            {item.oldPrice && <del className="text-body-secondary fs-xs">{item.oldPrice}</del>}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Hero
