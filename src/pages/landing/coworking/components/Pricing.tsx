import { Card, CardBody, Col, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mb-3 mb-lg-4">Choose a convenient plan</h2>
        <Row className="row-cols-3 flex-nowrap pb-3 overflow-auto">
          <Col style={{ minWidth: '19rem' }}>
            <Card className="h-100 py-lg-4">
              <CardBody className="w-100 mx-auto text-center" style={{ maxWidth: '23rem' }}>
                <h3>Light</h3>
                <div className="display-2 text-primary">$8</div>
                <div className="mb-4">per day</div>
                <p className="mb-4 pb-4">Phasellus in hendrerit interdum lorem proin pretium dictum urna</p>
                <button className="btn btn-primary w-100" type="button">
                  Get this plan now
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col style={{ minWidth: '19rem' }}>
            <Card className="border-primary bg-primary h-100 py-lg-4">
              <CardBody className="w-100 mx-auto text-center" style={{ maxWidth: '23rem' }}>
                <h3 className="text-light">Pro</h3>
                <div className="display-2 text-light">$97</div>
                <div className="text-light opacity-70 mb-4">per month</div>
                <p className="text-light opacity-70 mb-4 pb-4">Morbi et massa fames ac scelerisque sit commodo dignissim aucibus</p>
                <button className="btn btn-light w-100" type="button">
                  Get this plan now
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col style={{ minWidth: '19rem' }}>
            <Card className="h-100 py-lg-4">
              <CardBody className="w-100 mx-auto text-center" style={{ maxWidth: '23rem' }}>
                <h3>Medium</h3>
                <div className="display-2 text-primary">$36</div>
                <div className="mb-4">per week</div>
                <p className="mb-4 pb-4">Enim aenean phasellus in hendrerit interdum lorem proin pretium</p>
                <button className="btn btn-primary w-100" type="button">
                  Get this plan now
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Pricing
