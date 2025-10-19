import gallery01 from '@/assets/img/landing/product/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/product/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/product/gallery/03.png'
import gallery04 from '@/assets/img/landing/product/gallery/04.png'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

const Gallery = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <div className="text-center pt-sm-2 pt-md-4 pt-lg-3 pt-xl-4 pb-3 mx-auto mb-3 mb-lg-4" style={{ maxWidth: 720 }}>
          <h2 className="h1 pt-1 pt-sm-2">Take another look at Around Max</h2>
          <p className="mb-0">
            Turpis nullam netus sed aliquam consectetur at felis consequat tincidunt orci varius arcu urna neque eget maecenas consequat lacus
            habitasse adipiscing.
          </p>
        </div>
        <Row className="g-4 mb-3 mb-xl-0 pb-sm-2 pb-md-4 pb-xl-5">
          <Col md={5} lg={4} className="order-md-1">
            <Card className="border-0 h-100 bg-size-cover bg-position-top-center" style={{ minHeight: 280, backgroundImage: `url(${gallery01})` }} />
          </Col>
          <Col md={7} lg={8} className="order-md-2">
            <Card className="border-0 bg-secondary h-100 px-xl-4 pb-sm-2 pb-xl-4">
              <Image className="d-block mx-auto" src={gallery03} width={408} alt="Image" />
              <CardBody>
                <h3>Eco-friendly made from recycled plastic</h3>
                <p className="card-text">
                  Turpis nullam netus sed aliquam at felis ante ipsum in consequat tincidunt orci varius arcu urna neque maecenas consequat lacus
                  malesuada habitasse or adipiscing in lacus ipsum or natoque tincidunt arcu uter cursus et quam odio amet urna neque eget.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={5} lg={4} className="order-md-4">
            <Card className="border-0 h-100 bg-size-cover bg-position-center" style={{ minHeight: 280, backgroundImage: `url(${gallery02})` }} />
          </Col>
          <Col md={7} lg={8} className="order-md-3">
            <Card className="border-0 bg-secondary h-100">
              <Row className="g-0">
                <Col lg={6}>
                  <Image className="d-block" src={gallery04} width={377} alt="Image" />
                </Col>
                <Col lg={6} className="align-self-center mt-n4 mt-lg-0">
                  <CardBody>
                    <h3>Headphones for sports, for life, for pleasure</h3>
                    <p className="card-text">
                      Donec urna, sed molestie tincidunt elit nunc pellentesque ipsum purus a turpis elementum augue magna hendrerit bibendum morbi
                      elementum non egestas in nec donec sit magna amet et mauris nisl suscipit urna in morbi sit elementum venenatis.
                    </p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Gallery
