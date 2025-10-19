import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <>
      <section className="col">
        <Card className="h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <CardBody>
            <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i className="ai-map-pin text-primary lead pe-1 me-2" />
              <h2 className="h4 mb-0">Address</h2>
              <Link className="btn btn-sm btn-secondary ms-auto" to="/account/settings">
                <i className="ai-edit ms-n1 me-2" />
                Edit info
              </Link>
            </div>
            <div className="d-flex align-items-center pb-1 mb-2">
              <h3 className="h6 mb-0 me-3">Shipping address</h3>
              <span className="badge bg-primary bg-opacity-10 text-primary">Primary</span>
            </div>
            <p className="mb-0">
              401 Magnetic Drive Unit 2,
              <br />
              Toronto, Ontario, M3J 3H9
              <br />
              Canada
            </p>
            <div className="d-flex align-items-center pt-4 pb-1 my-2">
              <h3 className="h6 mb-0 me-3">Billing address 1</h3>
              <span className="badge bg-primary bg-opacity-10 text-primary">Primary</span>
            </div>
            <p className="mb-0">
              314 Robinson Lane,
              <br />
              Wilmington, DE 19805,
              <br />
              USA
            </p>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default Address
