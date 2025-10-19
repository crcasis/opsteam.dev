import hotspots from '@/assets/img/landing/product/hotspots-image.png'
import { Col, Container, Image, OverlayTrigger, Popover, PopoverBody, PopoverHeader, Row } from 'react-bootstrap'

const ProductDetail = () => {
  return (
    <>
      <section className="bg-secondary position-relative py-5">
        <Container className="py-1 py-sm-4 py-xl-5 my-md-3 my-xl-0 my-xxl-4">
          <h2 className="h1 text-center pb-3 mb-3 mb-lg-4">Product details</h2>
          <div className="hotspots mx-auto" style={{ maxWidth: 650 }}>
            <Image className="d-block" src={hotspots} alt="Image" />
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="right"
              overlay={
                <Popover id="popover-memory">
                  <PopoverHeader as="h3">Memory foam ear pads</PopoverHeader>
                  <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</PopoverBody>
                </Popover>
              }
            >
              <div className="position-absolute" style={{ top: '8%', right: '16%', width: '4rem', height: '4rem', cursor: 'pointer' }}>
                <div className="hotspot">
                  <div className="hotspot-inner">
                    <i className="ai-plus" />
                  </div>
                </div>
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="right"
              overlay={
                <Popover id="popover-noise">
                  <PopoverHeader as="h3">Noise suppression</PopoverHeader>
                  <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare.</PopoverBody>
                </Popover>
              }
            >
              <div className="position-absolute" style={{ bottom: '9%', left: '48%', width: '4rem', height: '4rem', cursor: 'pointer' }}>
                <div className="hotspot">
                  <div className="hotspot-inner">
                    <i className="ai-plus" />
                  </div>
                </div>
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="top"
              overlay={
                <Popover id="popover-wireless">
                  <PopoverHeader as="h3">Wireless Bluetooth</PopoverHeader>
                  <PopoverBody>Excepteur sint occaecat cupidatat non proident sunt culpa officia.</PopoverBody>
                </Popover>
              }
            >
              <div className="position-absolute" style={{ bottom: '36%', left: '6%', width: '4rem', height: '4rem', cursor: 'pointer' }}>
                <div className="hotspot">
                  <div className="hotspot-inner">
                    <i className="ai-plus" />
                  </div>
                </div>
              </div>
            </OverlayTrigger>
          </div>
          <Row className="pt-5 my-2">
            <Col xs={6} md={3}>
              <h3 className="mb-md-4">Other features</h3>
              <ul className="list-unstyled pb-1 pb-sm-2 pb-lg-3 mb-4 mb-xl-5">
                <li className="mt-2">Noise suppression</li>
                <li className="mt-2">Memory foam ear pads</li>
              </ul>
              <h3 className="mb-md-4">Battery</h3>
              <ul className="list-unstyled mb-0">
                <li className="mt-2">Up to 60 hours life</li>
                <li className="mt-2">Charge via Micro-USB cable</li>
                <li className="mt-2">Fast charging technology</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h3 className="mb-md-4">Connectivity</h3>
              <ul className="list-unstyled pb-1 pb-sm-2 pb-lg-3 mb-4 mb-xl-5">
                <li className="mt-2">Wireless Bluetooth</li>
                <li className="mt-2">Micro-USD port</li>
              </ul>
              <h3 className="mb-md-4">General</h3>
              <ul className="list-unstyled mb-0">
                <li className="mt-2">Height: 7.9 in / 19.6 cm</li>
                <li className="mt-2">Weight: 7.55 oz / 0,75 g</li>
                <li className="mt-2">Form factor: On ear</li>
              </ul>
            </Col>
            <Col md={6} xl={4} className="offset-xl-1 pt-1 pt-sm-3 pt-md-0 mt-4 mt-md-0">
              <h3 className="mb-md-4">Highlights</h3>
              <p>
                Donec urna, sed molestie tincidunt elit nunc pellentesque ipsum purus a turpis elementum augue magna hendrerit bibendum morbi
                elementum non egestas in nec donec sit magna amet et mauris nisl suscipit urna in morbi sit elementum venenatis.
              </p>
              <p className="mb-0">
                Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis
                nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui facilisi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductDetail
