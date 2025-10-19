import { Col, Row } from 'react-bootstrap'

type StatItem = {
  value: string
  label: string
  class?: string
  hasBorder?: boolean
}

const stats: StatItem[] = [
  { value: '540+', label: 'Happy clients', hasBorder: true },
  { value: '1070', label: 'Projects completed', hasBorder: true, class: 'd-none d-md-block' },
  { value: '30+', label: 'Full time specialists', hasBorder: true },
  { value: '15', label: 'Awards won', hasBorder: false },
]

const Stat = () => {
  return (
    <>
      <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
        <div className="bg-light rounded-5 py-4 py-md-5 px-lg-5">
          <Row className="row-cols-2 row-cols-md-4 g-0">
            {stats.map((stat, index) => (
              <Col key={index} className="d-md-flex justify-content-center text-center text-md-start position-relative">
                {stat.hasBorder && (
                  <div className={`position-absolute top-50 end-0 translate-middle-y border-end ${stat.class}`} style={{ height: 60 }} />
                )}
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 display-5 text-primary mb-0">{stat.value}</div>
                  <span>{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  )
}

export default Stat
