import { Col, Image, Row } from 'react-bootstrap'
import gcpPartner from '@/assets/img/brands/gcp-partner.png'
import awsPartner from '@/assets/img/brands/aws-partner.png'
import linux from '@/assets/img/brands/linux.png'

const Award = () => {
  return (
    <>
      <section className="container pb-5 pt-lg-3 pt-xl-4 pt-xxl-5 mt-n2 mt-md-0">
        <Row className="justify-content-center row-cols-3 gx-0 gx-sm-3 gx-md-2 gx-lg-3 gx-xl-4">
          <Col>
            <div className="py-sm-2 my-xl-1">
              <Image className="d-block d-dark-mode-none mx-auto" src={linux} width={196} alt="Linux" />
              <Image className="d-none d-dark-mode-block mx-auto" src={linux} width={196} alt="Linux" />
            </div>
          </Col>
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
