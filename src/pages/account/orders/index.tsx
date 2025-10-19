import { Card, CardBody, Col } from 'react-bootstrap'
import Order from './components/Order'
import Pagination from './components/Pagination'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <div className="d-flex align-items-center mb-4">
          <h1 className="h2 mb-0">Orders</h1>
          <select className="form-select ms-auto" style={{ maxWidth: 200 }}>
            <option value="All tme">For all time</option>
            <option value="Last week">Last week</option>
            <option value="Last month">Last month</option>
            <option value="Last month">Last month</option>
            <option value="In progress">In progress</option>
            <option value="Canceled">Canceled</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        <Card className="border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <CardBody className="pb-4">
            <Order />
            <Pagination />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default page
