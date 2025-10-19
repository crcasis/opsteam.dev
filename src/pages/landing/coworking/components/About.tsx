import { CardBody, Col, Row } from 'react-bootstrap'

type AboutType = {
  icon: string
  value: string
}

const aboutItems: AboutType[] = [
  { icon: 'ai-space', value: '362 m²' },
  { icon: 'ai-shower', value: '5 showers' },
  { icon: 'ai-clock', value: '24/7 access' },
  { icon: 'ai-parking', value: '2 parkings' },
  { icon: 'ai-stairs', value: '3 floors' },
  { icon: 'ai-canteen', value: '2 cafes' },
]

const About = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mx-auto mb-sm-2 mb-md-3 mb-lg-4" style={{ maxWidth: 525 }}>
          <h2 className="h1">About Around</h2>
          <p className="mb-0">Enim aenean phasellus in hendrerit interdum lorem proin pretium, dictum urna suspendisse quis risus vivamus.</p>
        </div>
        <Row className="row-cols-2 row-cols-sm-3 gy-sm-2 g-md-4">
          {aboutItems.map((item, idx) => (
            <Col className="card border-0 bg-transparent p-xxl-2" key={idx}>
              <CardBody className="text-center p-3 p-sm-4">
                <i className={`${item.icon} display-1 fw-normal text-primary mb-3 mb-sm-4`} />
                <div className="h2 fw-normal mb-0">{item.value}</div>
              </CardBody>
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default About
