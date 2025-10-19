import gallery from '@/assets/img/landing/shop-1/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/shop-1/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/shop-1/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/shop-1/gallery/04.jpg'
import { Col, Image, OverlayTrigger, Popover, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const popover1 = (
    <Popover className="p-2">
      <Link to="/shop/single" className="d-flex text-decoration-none mb-2">
        <span className="h6 fs-sm mb-0">
          Bronze floor <br /> led lamp
        </span>
        <i className="ai-chevron-right fs-xl text-dark ms-2" />
      </Link>
      <span>$185.00</span>
    </Popover>
  )

  const popover2 = (
    <Popover className="p-2">
      <Link to="/shop/single" className="d-flex text-decoration-none mb-2">
        <span className="h6 fs-sm mb-0">
          Photo frame <br /> Defacto
        </span>
        <i className="ai-chevron-right fs-xl text-dark ms-2" />
      </Link>
      <span>$21.00</span>
    </Popover>
  )

  const popover3 = (
    <Popover className="p-2">
      <Link to="/shop/single" className="d-flex text-decoration-none mb-2">
        <span className="h6 fs-sm mb-0">
          Yellow satin <br /> armchair
        </span>
        <i className="ai-chevron-right fs-xl text-dark ms-2" />
      </Link>
      <span>$276.00</span>
    </Popover>
  )

  const popover4 = (
    <Popover className="p-2">
      <Link to="/shop/single" className="d-flex text-decoration-none mb-2">
        <span className="h6 fs-sm mb-0">
          Gary concrete <br /> table stand
        </span>
        <i className="ai-chevron-right fs-xl text-dark ms-2" />
      </Link>
      <span>$35.00</span>
    </Popover>
  )

  return (
    <>
      <section className="container pb-5 mb-lg-4 mb-xl-5">
        <h2 className="h1 pb-3 mb-lg-4">Ideas for your home</h2>
        <Row className="pb-2 pb-sm-3 pb-md-4 mb-xxl-2 g-4">
          <Col md={6}>
            <div className="hotspots hotspots-alt">
              <Image className="d-block rounded-1" src={gallery} alt="Image" />
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover1}>
                <span className="hotspot" style={{ top: '20%', left: '27%' }}>
                  <div className="hotspot-inner" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover2}>
                <span className="hotspot" style={{ top: '14.7%', right: '32.7%' }}>
                  <div className="hotspot-inner" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover3}>
                <span className="hotspot" style={{ bottom: '41%', left: '34.6%' }}>
                  <div className="hotspot-inner" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popover4}>
                <span className="hotspot" style={{ bottom: '24.3%', right: '27.5%' }}>
                  <div className="hotspot-inner" />
                </span>
              </OverlayTrigger>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <Image className="d-block rounded-1 mb-4" src={gallery02} alt="Image" />
            <Image className="rounded-1" src={gallery03} alt="Image" />
          </Col>
          <Col sm={6} md={3}>
            <Image className="rounded-1" src={gallery04} alt="Image" />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Gallery
