import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar07 from '@/assets/img/avatar/07.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import { Col, Image, Row } from 'react-bootstrap'

type ResultItemType = {
  icon: string
  title: string
  description: string
  delay?: number
}

const resultsData: ResultItemType[] = [
  {
    icon: 'ai-target',
    title: 'Reach your goals',
    description: 'Eu pharetra sagittis ornarenam elit scelerisque pellentesque mauris diam outertn.',
    delay: 200,
  },
  {
    icon: 'ai-fruit',
    title: 'Healthy eating habits',
    description: 'Ultricies at vitae nunc, facilisi sagittis nullam mattis nunc metus suspendisse.',
    delay: 300,
  },
  {
    icon: 'ai-body',
    title: 'Nice & healthy body',
    description: 'Nunc congue dolor sodales faucibus nun faucibus tristique tempor in diam.',
    delay: 400,
  },
  {
    icon: 'ai-heart-alt',
    title: 'Feel great',
    description: 'Lacus neque sed fringilla proin bibendum interdum vivamus verum dignissim.',
    delay: 500,
  },
]

const Results = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <Row className="py-2 py-sm-3 my-md-3">
          <Col
            lg={5}
            xl={4}
            className="pb-2 pb-sm-0 mb-4 mb-sm-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-offset={280}
            data-disable-parallax-down="md"
          >
            <h2 className="h1 pb-3 mb-lg-4">Results after taking the guide</h2>
            <div className="d-flex align-items-center">
              <div className="d-flex me-3">
                <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                  <Image className="rounded-circle" src={avatar07} width={48} alt="Avatar" />
                </div>
                <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                  <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                </div>
                <div className="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                  <Image className="rounded-circle" src={avatar05} width={48} alt="Avatar" />
                </div>
                <div className="bg-light flex-shrink-0 rounded-circle position-relative z-1 ms-n3" style={{ padding: 3 }}>
                  <Image className="rounded-circle" src={avatar11} width={48} alt="Avatar" />
                </div>
              </div>
              <p className="mb-0">
                <strong className="text-dark">400+</strong> got the result
              </p>
            </div>
          </Col>
          <Col lg={7} xxl={6} className="offset-xl-1 offset-xxl-2">
            <Row className="row-cols-1 row-cols-sm-2 gy-4 gy-lg-5">
              {resultsData.map((item, idx) => (
                <Col key={idx} data-aos="fade-up" data-aos-delay={item.delay} data-aos-offset={280} data-disable-parallax-down="md">
                  <div className="pe-sm-2 pe-md-4 me-xl-3">
                    <div className="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4">
                      <i className={`${item.icon} fs-1`} />
                    </div>
                    <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                    <p className="fs-lg mb-2">{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Results
