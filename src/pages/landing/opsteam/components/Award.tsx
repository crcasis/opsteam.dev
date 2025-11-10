import awwwardsdark from '@/assets/img/brands/awwwards-dark.svg'
import awwwardslight from '@/assets/img/brands/awwwards-light.svg'
import clutchdark from '@/assets/img/brands/clutch-dark.svg'
import clutchlight from '@/assets/img/brands/clutch-light.svg'
import clutchratingdark from '@/assets/img/brands/clutch-rating-dark.svg'
import clutchratinglight from '@/assets/img/brands/clutch-rating-light.svg'
import deloittedark from '@/assets/img/brands/deloitte-dark.svg'
import deloittelight from '@/assets/img/brands/deloitte-light.svg'
import vuejsdark from '@/assets/img/brands/vuejs-dark.svg'
import vuejslight from '@/assets/img/brands/vuejs-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import awsPartner from '@/assets/img/brands/aws-partner.svg'

const Award = () => {
  return (
    <>
      <section className="container pb-5 pt-lg-3 pt-xl-4 pt-xxl-5 mt-n2 mt-md-0">
        <Row className="justify-content-center row-cols-2 row-cols-3 row-cols-md-5 gx-0 gx-sm-3 gx-md-2 gx-lg-3 gx-xl-4">
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={clutchratingdark} width={196} alt="Clutch" />
              <Image className="d-none d-dark-mode-block mx-auto" src={clutchratinglight} width={196} alt="Clutch" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={deloittedark} width={196} alt="Deloitte" />
              <Image className="d-none d-dark-mode-block mx-auto" src={deloittelight} width={196} alt="Deloitte" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={vuejsdark} width={196} alt="Vue.js" />
              <Image className="d-none d-dark-mode-block mx-auto" src={vuejslight} width={196} alt="Vue.js" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={awsPartner} width={196} alt="AWS Partner" />
              <Image className="d-none d-dark-mode-block mx-auto" src={awsPartner} width={196} alt="AWS Partner" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={clutchdark} width={196} alt="Clutch" />
              <Image className="d-none d-dark-mode-block mx-auto" src={clutchlight} width={196} alt="Clutch" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Award
