import saasdark from '@/assets/img/landing/saas-1/features/01-dark.png'
import saaslight from '@/assets/img/landing/saas-1/features/01-light.png'
import GlightBox from '@/components/GlightBox'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

type FeatureType = {
  class: string
  title: string
  description: string
}

const feature: FeatureType[] = [
  {
    class: 'order-lg-1',
    title: 'Target your audience effectively',
    description:
      'Nisl in enim, gravida risus enim risus non et in iaculis non facilisis eget blandit id vulputate morbi proin vitae tincidunt vestibulum viverra. Quis odio mauris velit egestas risus vulputate.',
  },
  {
    class: 'order-lg-3',
    title: 'Build dashboard in minutes',
    description:
      'Facilisi eu neque amet, orci tellus nibh amet tincidunt nunc, feugiat arcu vulputate duis. Quis odio mauris, in sed pharetra velit egestas risus purus tincidunt.',
  },
  {
    class: 'order-lg-4',
    title: 'Easily download your tables and data',
    description:
      'Cursus dolor sagittis, nisi sit pharetra pharetra ornare nec diam id in in commodo mattis at retium at id nisi ullamcorper tortor augue parturient at tellus lorem enim.',
  },
  {
    class: 'order-lg-5',
    title: 'Access to dashboard from all devices',
    description:
      'Ac pharetra pharetra morbi turpis auctor vel eget amet nulla diam facilisis sit morbi sit aliquam in amet ultrices aliquet leo facilisis lorem proin pharetra ornare.',
  },
]

const Feature = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="pt-2 pt-md-4 pt-lg-3 pt-xl-4 g-4 g-sm-3 g-md-4">
          <Col lg={8} className="order-lg-2">
            <div className="d-md-flex h-100 bg-primary rounded-5 overflow-hidden px-4 px-sm-5 pt-5">
              <div className="d-md-flex px-2 px-sm-0 px-xl-2 px-xxl-4 pt-xl-3">
                <div className="text-center text-md-start pe-md-5 pb-3 pb-md-0 me-xxl-3 mb-4 md-0">
                  <h2 className="h1 text-white pb-2 pb-md-3 mb-lg-4">How Does It Work?</h2>
                  <GlightBox
                    className="glightbox btn btn-icon btn-xl btn-warning rounded-circle"
                    href="https://www.youtube.com/watch?v=j5Rb-OkP-Go"
                    data-bs-toggle="video"
                    aria-label="Play video"
                  >
                    <i className="ai-play-filled" />
                  </GlightBox>
                </div>
                <div className="w-100 flex-md-shrink-0 mx-auto" style={{ maxWidth: 472 }}>
                  <Image className="d-dark-mode-none" src={saaslight} alt="Image" />
                  <Image className="d-none d-dark-mode-block" src={saasdark} alt="Image" />
                </div>
              </div>
            </div>
          </Col>
          {feature.map((item, idx) => (
            <Col sm={6} lg={4} className={`${item.class}`} key={idx}>
              <Card className="border-0 bg-secondary h-100 py-lg-2 py-xl-4">
                <CardBody>
                  <h3>{item.title}</h3>
                  <p className="mb-0">{item.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default Feature
