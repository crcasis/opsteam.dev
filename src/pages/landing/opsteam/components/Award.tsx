import clutchratingdark from '@/assets/img/brands/clutch-rating-dark.svg'
import clutchratinglight from '@/assets/img/brands/clutch-rating-light.svg'
import deloittedark from '@/assets/img/brands/deloitte-dark.svg'
import deloittelight from '@/assets/img/brands/deloitte-light.svg'
import vuejsdark from '@/assets/img/brands/vuejs-dark.svg'
import vuejslight from '@/assets/img/brands/vuejs-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import gcpPartner from '@/assets/img/brands/gcp-partner.png'
import awsPartner from '@/assets/img/brands/aws-partner.png'
import eu from '@/assets/img/brands/eu.png'
import linux from '@/assets/img/brands/linux.png'
// import k8s from '@/assets/img/brands/k8s.png'

const Award = () => {
  return (
    <>
      <section className="container pb-5 pt-lg-3 pt-xl-4 pt-xxl-5 mt-n2 mt-md-0">
        <Row className="justify-content-center row-cols-2 row-cols-3 row-cols-md-5 gx-0 gx-sm-3 gx-md-2 gx-lg-3 gx-xl-4">
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={eu} width={196} alt="European Union" />
              <Image className="d-none d-dark-mode-block mx-auto" src={eu} width={196} alt="European Union" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={linux} width={196} alt="Linux" />
              <Image className="d-none d-dark-mode-block mx-auto" src={linux} width={196} alt="Linux" />
            </div>
          </Col>
          {/* <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={k8s} width={196} alt="Kubernetes" />
              <Image className="d-none d-dark-mode-block mx-auto" src={k8s} width={196} alt="Kubernetes" />
            </div>
          </Col> */}
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={gcpPartner} width={196} alt="GCP Partner" />
              <Image className="d-none d-dark-mode-block mx-auto" src={gcpPartner} width={196} alt="GCP Partner" />
            </div>
          </Col>
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={awsPartner} width={196} alt="AWS Partner" />
              <Image className="d-none d-dark-mode-block mx-auto" src={awsPartner} width={196} alt="AWS Partner" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Award
