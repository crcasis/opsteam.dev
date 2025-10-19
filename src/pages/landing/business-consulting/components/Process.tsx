import ceo from '@/assets/img/landing/business-consulting/ceo.png'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

type StepType = {
  id: number
  title: string
  description: string
  delay?: number
}

const steps: StepType[] = [
  {
    id: 1,
    title: 'Formulation of the problem',
    description: 'Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.',
  },
  {
    id: 2,
    title: 'Assessment of the current state',
    description: 'Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.',
    delay: 250,
  },
  {
    id: 3,
    title: 'Business plan creation',
    description: 'A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.',
    delay: 500,
  },
  {
    id: 4,
    title: 'Strategy implementation',
    description: 'Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc vel nec risus.',
    delay: 700,
  },
]

const Process = () => {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pb-5 pt-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
          <Row className="pb-md-3 pb-lg-4 mb-2 mb-lg-3">
            <Col md={5} className="d-flex flex-column align-items-center mb-4 mb-md-0">
              <div className="position-relative" style={{ maxWidth: 416 }}>
                <Image className="d-block position-relative z-2" src={ceo} alt="Nicolas Black" />
                <div
                  className="bg-primary position-absolute start-0 bottom-0 w-100"
                  style={{ height: '85.4%', borderRadius: '2.25rem 8rem 2.25rem 2.25rem' }}
                />
              </div>
              <div className="text-center text-md-start pt-3 mt-3">
                <h2 className="mb-2">Nicolas Black</h2>
                <p className="fs-xl text-body-secondary mb-2">CEO Around Group</p>
                <div className="position-relative pt-4" style={{ maxWidth: 500 }}>
                  <div className="position-absolute top-0 start-0 w-100 text-center text-md-start ms-md-1">
                    <svg
                      className="text-border"
                      width={155}
                      height={111}
                      viewBox="0 0 155 111"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M125.969 38.7937C129.372 30.2345 134.734 21.7781 141.902 13.6311C144.17 11.053 144.48 7.34066 142.623 4.45316C141.18 2.18441 138.808 0.94696 136.23 0.94696C135.508 0.94696 134.786 0.99826 134.064 1.25633C118.905 5.69065 83.4811 21.4171 82.5014 71.8454C82.1407 91.2842 96.3717 107.99 114.883 109.898C125.144 110.93 135.353 107.578 142.933 100.772C150.512 93.914 154.844 84.117 154.844 73.9077C154.844 56.8922 142.778 41.9905 125.969 38.7937Z" />
                      <path d="M32.5904 109.898C42.7999 110.93 53.0092 107.578 60.5888 100.772C68.1686 93.914 72.5 84.117 72.5 73.9077C72.5 56.8922 60.4342 41.9905 43.6248 38.7937C47.0281 30.2345 52.3905 21.7781 59.5578 13.6312C61.8265 11.0531 62.1359 7.34071 60.2794 4.45321C58.8358 2.18446 56.4638 0.947006 53.8857 0.947006C53.1641 0.947006 52.4421 0.998306 51.7202 1.25638C36.5608 5.6907 1.13734 21.4172 0.157654 71.8454V72.5671C0.157654 91.6968 14.2341 107.99 32.5904 109.898Z" />
                    </svg>
                  </div>
                  <p className="fs-xl position-relative z-2 mb-0">
                    The main task of our organization is
                    <strong>to assess the state of your enterprise now and how you can achieve your goals.</strong> Self-assessment of current
                    activities and review of processes formulate decisions to achieve the desired outcome.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={7} lg={6} xxl={5} className="offset-lg-1 offset-xxl-2">
              <div className="ps-md-4 ps-lg-0">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="position-relative d-flex justify-content-end my-3 py-1"
                    data-aos="fade-left"
                    data-aos-easing="ease-out-back"
                    data-aos-delay={step.delay || 0}
                  >
                    <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y z-2 pe-none">
                      {String(step.id).padStart(2, '0')}
                    </div>
                    <Card className="border-0 ps-3" style={{ width: 'calc(100% - 1.75rem)' }}>
                      <CardBody className="ps-4">
                        <h3 className="h5 card-title pb-2 mb-1">{step.title}</h3>
                        <p className="card-text">{step.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Process
