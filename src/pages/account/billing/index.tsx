import { Col } from 'react-bootstrap'
import BillingAddress from './components/BillingAddress'
import PaymentMethod from './components/PaymentMethod'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <h1 className="h2 mb-4">Billing</h1>
        <PaymentMethod />
        <BillingAddress />
      </Col>
    </>
  )
}

export default page
