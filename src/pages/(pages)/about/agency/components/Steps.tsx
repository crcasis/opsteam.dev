import img from '@/assets/img/about/agency/steps-image.jpg'
import { Col, Row } from 'react-bootstrap'

type StepType = {
  number: string
  title: string
  description: string
}

const stepsData: StepType[] = [
  {
    number: '01',
    title: 'Formulation of the problem',
    description: 'Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.',
  },
  {
    number: '02',
    title: 'Assessment of the current state',
    description: 'Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.',
  },
  {
    number: '03',
    title: 'Business plan creation',
    description: 'A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.',
  },
  {
    number: '04',
    title: 'Strategy implementation',
    description: 'Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc vel nec risus.',
  },
]

const Steps = () => {
  return (
    <>
      <section className="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
        <Row className="align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
          <Col md={6} xl={5} className="pb-3 pb-md-0 mb-4 mb-md-0">
            <div
              className="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto"
              style={{ maxWidth: 530, backgroundImage: `url(${img})` }}
            >
              <div className="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50" />
              <div className="position-relative z-2 p-4" data-bs-theme="dark">
                <div className="text-center mx-auto" style={{ maxWidth: 275 }}>
                  <span className="d-block text-body fs-sm text-uppercase mb-3">How we work</span>
                  <h2 className="display-6 mb-0">The key to success</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <div className="ps-md-4 ps-xl-0">
              <div className="steps steps-hoverable">
                {stepsData.map((step) => (
                  <div className="step py-3 py-xl-4" key={step.number}>
                    <div className="step-number">
                      <div className="step-number-inner">{step.number}</div>
                    </div>
                    <div className="step-body">
                      <h3 className="h5 pb-1 mb-2">{step.title}</h3>
                      <p className="mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Steps
