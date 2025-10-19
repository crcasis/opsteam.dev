import airbnd from '@/assets/img/landing/insurance/partners/airbnb.svg'
import championdark from '@/assets/img/landing/insurance/partners/champion-dark.svg'
import championlight from '@/assets/img/landing/insurance/partners/champion-light.svg'
import clutchdark from '@/assets/img/landing/insurance/partners/clutch-dark.svg'
import clutchlight from '@/assets/img/landing/insurance/partners/clutch-light.svg'
import deloittedark from '@/assets/img/landing/insurance/partners/deloitte-dark.svg'
import deloittelight from '@/assets/img/landing/insurance/partners/deloitte-light.svg'
import timesdark from '@/assets/img/landing/insurance/partners/times-dark.svg'
import times from '@/assets/img/landing/insurance/partners/times-light.svg'
import { Col, Image, Row } from 'react-bootstrap'

const Partner = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <div className="overflow-auto pb-sm-4 pb-md-5 pt-sm-2 pt-md-3 mt-n2 mt-sm-0 mt-md-1 mt-lg-3 mb-lg-2" data-simplebar>
          <Row className="row-cols-5 g-0 pb-2" style={{ minWidth: 768 }}>
            <Col className="d-flex justify-content-center">
              <Image className="d-dark-mode-none" src={deloittelight} width={196} alt="Deloitte" />
              <Image className="d-none d-dark-mode-block" src={deloittedark} width={196} alt="Deloitte" />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image src={airbnd} width={196} alt="Airbnb" />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image className="d-dark-mode-none" src={championlight} width={196} alt="Champion" />
              <Image className="d-none d-dark-mode-block" src={championdark} width={196} alt="Champion" />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image className="d-dark-mode-none" src={times} width={196} alt="Financial Times" />
              <Image className="d-none d-dark-mode-block" src={timesdark} width={196} alt="Financial Times" />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image className="d-dark-mode-none" src={clutchlight} width={196} alt="Clutch" />
              <Image className="d-none d-dark-mode-block" src={clutchdark} width={196} alt="Clutch" />
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Partner
