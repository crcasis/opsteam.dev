import { Card, CardBody, Col } from 'react-bootstrap'
import Item from './components/Item'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <div className="d-flex align-items-center mb-4">
          <h1 className="h2 mb-0">
            Favorites <span className="fs-base fw-normal text-body-secondary">(6 items)</span>
          </h1>
          <button className="btn btn-sm btn-outline-danger ms-auto" type="button">
            <i className="ai-trash ms-n1 me-2" />
            Clear all
          </button>
        </div>
        <Card className="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <CardBody className="pb-4">
            <Item />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default page
