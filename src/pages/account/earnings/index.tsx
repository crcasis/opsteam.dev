import { Card, CardBody, Col } from 'react-bootstrap'
import Device from './components/Device'
import Stats from './components/Stats'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <div className="d-sm-flex align-items-center mb-4">
          <h1 className="h2 mb-4 mb-sm-0 me-4">Your earnings</h1>
          <div className="d-flex ms-auto">
            <button className="btn btn-secondary me-3 me-sm-4" type="button">
              <i className="ai-download me-2 ms-n1" />
              Download
            </button>
            <select className="form-select">
              <option value="Last week">Last week</option>
              <option value="Last month">Last month</option>
              <option value="Last 3 months">Last 3 months</option>
              <option value="Last 6 months">Last 6 months</option>
              <option value="Last year">Last year</option>
            </select>
          </div>
        </div>
        <Card className="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <CardBody>
            <Stats />
            <Device />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default page
