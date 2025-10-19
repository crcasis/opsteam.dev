import marble from '@/assets/img/shop/pattern/marble.jpg'
import wood from '@/assets/img/shop/pattern/wood.jpg'
import gallery1 from '@/assets/img/shop/single/gallery/01.png'
import gallery2 from '@/assets/img/shop/single/gallery/02.png'
import gallery3 from '@/assets/img/shop/single/gallery/03.png'
import th01 from '@/assets/img/shop/single/gallery/th01.png'
import th02 from '@/assets/img/shop/single/gallery/th02.png'
import GlightBox from '@/components/GlightBox'
import { useState } from 'react'
import { Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [count, setCount] = useState(1)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1))

  const [selectedColor, setSelectedColor] = useState('Gray concrete')

  const handleChange = (e: any) => {
    setSelectedColor(e.target.value)
  }

  return (
    <>
      <section className="container py-5 mt-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-2 pb-md-4 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/shop/catalog">Shop catalog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single product
            </li>
          </ol>
        </nav>

        <h2 className="h1 d-md-none">Scented candle</h2>
        <div className="d-flex d-md-none align-items-center pb-3 mb-3">
          <div className="h3 mb-0 me-3">$14.00</div>
          <del className="fs-5 fw-medium text-body-secondary me-3">$19.00</del>
          <span className="badge bg-danger bg-opacity-10 text-danger d-md-none">Sale</span>
        </div>
        <Row className="pb-sm-1 pb-md-4">
          <Col md={6} className="gallery mb-3 mb-md-0">
            <GlightBox className="d-block gallery-item card-hover zoom-effect mb-4" href={gallery1}>
              <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
              </div>
              <div className="zoom-effect-wrapper rounded-1">
                <div className="zoom-effect-img bg-secondary p-4">
                  <Image className="d-block mx-auto" src={gallery1} width={562} alt="Candle image #1" />
                </div>
              </div>
            </GlightBox>
            <Row className="row-cols-1 row-cols-sm-2 g-4 mb-4">
              <Col>
                <GlightBox className="d-block gallery-item card-hover zoom-effect" href={gallery1}>
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
                  </div>
                  <div className="zoom-effect-wrapper rounded-1">
                    <div className="zoom-effect-img bg-secondary p-4">
                      <Image className="d-block mx-auto" src={th01} width={226} alt="Candle image #2" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
              <Col>
                <GlightBox className="d-block gallery-item card-hover zoom-effect" href={gallery2}>
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                    <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
                  </div>
                  <div className="zoom-effect-wrapper rounded-1">
                    <div className="zoom-effect-img bg-secondary p-4">
                      <Image className="d-block mx-auto" src={th02} width={226} alt="Candle image #3" />
                    </div>
                  </div>
                </GlightBox>
              </Col>
            </Row>
            <GlightBox className="d-block gallery-item card-hover zoom-effect" href={gallery3}>
              <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
                <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20" />
              </div>
              <div className="zoom-effect-wrapper rounded-1">
                <div className="zoom-effect-img bg-secondary p-4">
                  <Image className="d-block mx-auto" src={gallery3} width={460} alt="Candle image #4" />
                </div>
              </div>
            </GlightBox>
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <div className="d-none d-md-block" style={{ marginTop: '-90px' }} />
            <div className="position-md-sticky top-0 ps-md-4 ps-lg-5 ps-xl-0">
              <div className="d-none d-md-block" style={{ paddingTop: 90 }} />
              <div className="d-flex align-items-center pt-3 py-3">
                <span className="badge bg-danger bg-opacity-10 text-danger d-none d-md-inline-block me-4">Sale</span>
                <span className="fs-sm">V00273124</span>
              </div>
              <h1 className="d-none d-md-inline-block pb-1 mb-2">Scented candle</h1>
              <p className="fs-sm mb-4">
                Find aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur neque congue aliqua dolor do amet sint
                ovar velit.
              </p>
              <div className="d-none d-md-flex align-items-center pb-3 mb-3">
                <div className="h3 mb-0 me-3">$14.00</div>
                <del className="fs-5 fw-medium text-body-secondary">$19.00</del>
              </div>
              <div className="h6">
                Color:
                <span className="text-body-secondary fw-normal ms-1" id="colorOption">
                  {selectedColor}
                </span>
              </div>
              <div className="d-flex pb-3">
                {[
                  { value: 'Gray concrete', color: '#c0c0c0', img: marble },
                  { value: 'Soft beige', color: '#d9c9a1' },
                  { value: 'Bluish sky', color: '#a1b7d9' },
                  { value: 'Green grass', color: '#74947d' },
                  { value: 'Woody brown', color: '#af8352', img: wood },
                ].map((opt, idx) => (
                  <div className="me-2 mb-2" key={opt.value}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="color"
                      id={`color${idx + 1}`}
                      value={opt.value}
                      checked={selectedColor === opt.value}
                      onChange={handleChange}
                    />
                    <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor={`color${idx + 1}`}>
                      <span
                        className="d-block bg-size-cover bg-position-center rounded-circle"
                        style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          backgroundColor: opt.color,
                          backgroundImage: opt.img ? `url(${opt.img})` : 'none',
                        }}
                      />
                    </label>
                  </div>
                ))}
              </div>
              <div className="h6">Weight</div>
              <div className="d-flex">
                <div className="me-3">
                  <input className="btn-check" type="radio" name="weight" defaultValue="140 g" defaultChecked id="weight1" />
                  <label className="btn btn-outline-secondary px-2" htmlFor="weight1">
                    <span className="mx-1">140 g</span>
                  </label>
                </div>
                <div className="me-3">
                  <input className="btn-check" type="radio" name="weight" defaultValue="260 g" id="weight2" />
                  <label className="btn btn-outline-secondary px-2" htmlFor="weight2">
                    <span className="mx-1">260 g</span>
                  </label>
                </div>
                <div className="me-3">
                  <input className="btn-check" type="radio" name="weight" defaultValue="440 g" id="weight3" />
                  <label className="btn btn-outline-secondary px-2" htmlFor="weight3">
                    <span className="mx-1">440 g</span>
                  </label>
                </div>
              </div>

              <div className="d-sm-flex d-md-block d-lg-flex py-4 py-md-5 my-3 my-md-0 mt-lg-0 mb-lg-4">
                <div className="count-input bg-gray rounded-3 me-4 mb-3 mb-sm-0 mb-md-3 mb-lg-0">
                  <button className="btn btn-icon btn-lg fs-xl" type="button" data-decrement onClick={decrement}>
                    -
                  </button>
                  <input className="form-control" type="number" value={count} readOnly />
                  <button className="btn btn-icon btn-lg fs-xl" type="button" data-increment onClick={increment}>
                    +
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-lg btn-primary w-100 w-lg-auto me-2" type="button">
                    <i className="ai-cart me-2 ms-n1" />
                    Add to cart
                  </button>
                  <div className="nav">
                    <OverlayTrigger overlay={<Tooltip>Add to Favorites</Tooltip>} placement="top">
                      <Link to="" className="nav-link fs-3 px-3" data-bs-toggle="tooltip">
                        <i className="ai-heart" />
                      </Link>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <h4 className="h6 me-4">Share product:</h4>
                <Link className="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle me-3 mb-3" to="" aria-label="Telegram">
                  <i className="ai-telegram" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle me-3 mb-3" to="" aria-label="Instagram">
                  <i className="ai-instagram" />
                </Link>
                <Link className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mb-3" to="" aria-label="Facebook">
                  <i className="ai-facebook" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Gallery
