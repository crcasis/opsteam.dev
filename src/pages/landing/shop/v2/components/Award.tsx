import awards01 from '@/assets/img/landing/shop-2/awards/01.png'
import awards02 from '@/assets/img/landing/shop-2/awards/02.png'
import awards03dark from '@/assets/img/landing/shop-2/awards/03-dark.png'
import awards03light from '@/assets/img/landing/shop-2/awards/03-light.png'
import awards04 from '@/assets/img/landing/shop-2/awards/04.png'
import { Col, Image, Row } from 'react-bootstrap'

const Award = () => {
  return (
    <>
      <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
        <div className="overflow-auto" data-simplebar>
          <Row className="row-cols-4 g-0 py-3 my-sm-3" style={{ minWidth: 600 }}>
            <Col>
              <Image className="d-block mx-auto" src={awards01} width={226} alt="Award" />
            </Col>
            <Col>
              <Image className="d-block mx-auto" src={awards02} width={226} alt="Award" />
            </Col>
            <Col>
              <Image className="d-block d-dark-mode-none mx-auto" src={awards03light} width={226} alt="Award" />
              <Image className="d-none d-dark-mode-block mx-auto" src={awards03dark} width={226} alt="Award" />
            </Col>
            <Col>
              <Image className="d-block mx-auto" src={awards04} width={226} alt="Award" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Award
