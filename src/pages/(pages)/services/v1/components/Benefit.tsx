import serv1 from '@/assets/img/services/v1/01.jpg'
import { Card, Col, Row } from 'react-bootstrap'

type BenefitType = {
  id: number
  title: string
  description: string
}

const benefitItems: BenefitType[] = [
  {
    id: 1,
    title: 'Individual approach',
    description: 'Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.',
  },
  {
    id: 2,
    title: 'Integrated analytics',
    description:
      'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do leo proin odio est sed sit felis facilisi integer.',
  },
  {
    id: 3,
    title: 'Step by step work',
    description: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.',
  },
  {
    id: 4,
    title: 'Full spectrum of services',
    description:
      'Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam ultrices interdum vitae vestibulum. Hac erat leo proin odio est sed sit felis facilisi integer sed.',
  },
]

const Benefit = () => {
  return (
    <>
      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <Row className="pb-md-4 pb-xl-5">
          <Col md={6} className="mb-2 mb-md-0">
            <Card className="border-0 h-100 bg-size-cover bg-position-center" style={{ backgroundImage: `url(${serv1})` }}>
              <div className="d-none d-sm-block d-md-none" style={{ height: 450 }} />
              <div className="d-sm-none" style={{ height: 350 }} />
            </Card>
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">
                Benefits <br />
                of working with us
              </h2>
              {benefitItems.map((item, idx) => (
                <div key={idx} className={`d-flex ${item.id !== benefitItems.length ? 'pb-3 mb-2 mb-xl-3' : 'mb-2 mb-xl-3'}`}>
                  <div className="text-body-secondary pt-1">0{item.id}</div>
                  <div className="ps-3">
                    <h3 className="h5">{item.title}</h3>
                    <p className="mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Benefit
