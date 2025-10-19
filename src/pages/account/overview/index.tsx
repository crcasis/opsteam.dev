import { Col, Row } from 'react-bootstrap'
import Address from './components/Address'
import Basic from './components/Basic'
import Billing from './components/Billing'
import Order from './components/Order'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <h1 className="h2 mb-4">Overview</h1>
        <Basic />
        <Row className="row-cols-1 row-cols-md-2 g-4 mb-4">
          <Address />
          <Billing />
        </Row>
        <Order />
      </Col>
    </>
  )
}

export default page
