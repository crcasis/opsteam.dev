import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ServiceType = {
  title: string
  description: string
  icon: string
  color: string
  class?: string
}

const servicesData: ServiceType[] = [
  {
    title: 'SEO Website Audit',
    description:
      'Consectetur adipiscing elit proin volutpat mollis egestas nam in luctus facilisis ultrices llentesque volutpat ligula est dignissim.',
    icon: 'ai-search-settings',
    color: 'primary',
  },
  {
    title: 'Content Marketing',
    description: 'Morbi et massa fames ac lerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames ac massa.',
    icon: 'ai-bulb-alt',
    color: 'info',
    class: 'mt-4',
  },
  {
    title: 'Email Marketing',
    description: 'Sapiener ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam diam natoque scelerisque viverra.',
    icon: 'ai-mail-filled',
    color: 'warning',
    class: 'mt-sm-0 mt-lg-4',
  },
  {
    title: 'Social Networks',
    description:
      'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.',
    icon: 'ai-telegram fs-2',
    color: 'danger',
  },
]

const Services = () => {
  return (
    <>
      <section className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
          <Col lg={4} className="offset-xl-1">
            <h2 className="h1 text-center text-lg-start pb-3 pb-lg-1">Our servises</h2>
            <ul className="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />
                Individual approach to the brand
              </li>
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />
                We guarantee the result after a month
              </li>
              <li className="d-flex pt-2">
                <i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />
                Completing tasks exactly on time
              </li>
            </ul>
            <a className="btn btn-primary d-none d-lg-inline-flex" href="#">
              See all servises
            </a>
          </Col>
          <Col lg={8} xl={7} xxl={6}>
            <Row className="row-cols-1 row-cols-sm-2">
              <Col>
                {servicesData.slice(0, 2).map((item, idx) => (
                  <Card className={`border-0 bg-${item.color} ${item.class} bg-opacity-10`} key={idx}>
                    <CardBody>
                      <i className={`${item.icon} fs-1 text-${item.color} d-block mb-3`} />
                      <h3 className="h4">{item.title}</h3>
                      <p className="fs-sm">{item.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </Col>
              <Col className="pt-lg-3">
                {servicesData.slice(2, 4).map((item, idx) => (
                  <Card className={`border-0 bg-${item.color} bg-opacity-10 mt-4 ${item.class} `} key={idx}>
                    <CardBody>
                      <i className={`${item.icon} fs-1 text-${item.color} d-block mb-3`} />
                      <h3 className="h4">{item.title}</h3>
                      <p className="fs-sm">{item.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
            <div className="d-lg-none text-center pt-3 mt-3 mt-sm-4">
              <Link className="btn btn-primary" to="">
                See all servises
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Services
