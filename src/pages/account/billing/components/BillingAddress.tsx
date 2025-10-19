import { useState } from 'react'
import { Alert, Button, Card, CardBody, Col, Modal, ModalBody, ModalHeader, ModalTitle, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BillingAddress = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <CardBody>
          <div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-map-pin text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Billing address</h2>
          </div>
          <Row className="row-cols-1 row-cols-md-2 g-4">
            <Col>
              <Card className="h-100 rounded-3 p-3 p-sm-4">
                <div className="d-flex align-items-center pb-2 mb-1">
                  <h3 className="h6 text-nowrap text-truncate mb-0">Billing address #1</h3>
                  <span className="badge bg-primary bg-opacity-10 text-primary fs-xs ms-3">Primary</span>
                  <div className="d-flex ms-auto">
                    <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>} placement="top">
                      <Link to="" className="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2" data-bs-toggle="tooltip">
                        <i className="ai-edit-alt" />
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>} placement="top">
                      <Link to="" className="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2" data-bs-toggle="tooltip">
                        <i className="ai-trash" />
                      </Link>
                    </OverlayTrigger>
                  </div>
                </div>
                <p className="mb-0">
                  314 Robinson Lane,
                  <br />
                  Wilmington, DE 19805,
                  <br />
                  USA
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 rounded-3 p-3 p-sm-4">
                <div className="d-flex align-items-center pb-2 mb-1">
                  <h3 className="h6 text-nowrap text-truncate mb-0">Billing address #2</h3>
                  <div className="d-flex ms-auto">
                    <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>} placement="top">
                      <Link to="" className="nav-link fs-xl fw-normal py-1 pe-0 ps-1 ms-2" data-bs-toggle="tooltip">
                        <i className="ai-edit-alt" />
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>} placement="top">
                      <Link to="" className="nav-link text-danger fs-xl fw-normal py-1 pe-0 ps-1 ms-2" data-bs-toggle="tooltip">
                        <i className="ai-trash" />
                      </Link>
                    </OverlayTrigger>
                  </div>
                </div>
                <p className="mb-0">
                  401 Magnetic Drive Unit 2,
                  <br />
                  Toronto, Ontario, M3J 3H9
                  <br />
                  Canada
                </p>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 justify-content-center align-items-center border-dashed rounded-3 py-5 px-3 px-sm-4">
                <Link
                  onClick={handleShow}
                  className="stretched-link d-flex align-items-center fw-semibold text-decoration-none my-sm-3"
                  to="#addAddress"
                >
                  <i className="ai-circle-plus fs-xl me-2" />
                  Add new address
                </Link>
              </Card>
            </Col>
          </Row>
          <div className="py-4 mt-sm-2 mt-md-3">
            <h3 className="h6 mb-1">Tax location</h3>
            <p className="mb-0">United States - 10% VAT</p>
          </div>
          <Alert variant="info" className="d-flex mb-0">
            <i className="ai-circle-info fs-xl me-2" />
            <p className="mb-0">
              Your text location determines the taxes that are applied to your bill.
              <Link to="" className="alert-link">
                Learn more
              </Link>
            </p>
          </Alert>
        </CardBody>
      </section>

      <Modal show={showModal} centered onHide={handleClose} className=" modal-lg fade" id="addAddress">
        <ModalHeader closeButton className="border-0">
          <ModalTitle as={'h4'}>Add new address</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form className="needs-validation pt-0" noValidate>
            <div className="alert alert-warning d-flex mb-4">
              <i className="ai-triangle-alert fs-xl me-2" />
              <p className="mb-0">
                Updating your address may affect your
                <Link to="" className="alert-link">
                  Tax Location
                </Link>
              </p>
            </div>
            <Row className="row-cols-1 row-cols-lg-2 g-4 pb-2 pb-sm-3 mb-4">
              <Col>
                <label className="form-label" htmlFor="country">
                  Country
                </label>
                <select className="form-select" required id="country">
                  <option disabled selected>
                    Select a country
                  </option>
                  <option value="Australia">Australia</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Canada">Canada</option>
                  <option value="Denmark">Denmark</option>
                  <option value="USA">USA</option>
                </select>
              </Col>
              <Col>
                <label className="form-label" htmlFor="city">
                  City
                </label>
                <select className="form-select" required id="city">
                  <option disabled selected>
                    Select a city
                  </option>
                  <option value="Sydney">Sydney</option>
                  <option value="Brussels">Brussels</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Copenhagen">Copenhagen</option>
                  <option value="New York">New York</option>
                </select>
              </Col>
              <Col>
                <label className="form-label" htmlFor="state">
                  State
                </label>
                <select className="form-select" required id="state">
                  <option disabled selected>
                    Select a state
                  </option>
                  <option value="Arizona">Arizona</option>
                  <option value="California">California</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Texas">Texas</option>
                  <option value="Virginia">Virginia</option>
                </select>
              </Col>
              <Col>
                <label className="form-label" htmlFor="address1">
                  Address line 1
                </label>
                <input className="form-control" type="text" required id="address1" />
              </Col>
              <Col>
                <label className="form-label" htmlFor="address2">
                  Address line 2
                </label>
                <input className="form-control" type="text" id="address2" />
              </Col>
              <Col>
                <label className="form-label" htmlFor="postcode">
                  Post code
                </label>
                <input
                  className="form-control"
                  type="text"
                  data-format='{"delimiter": "-", "blocks": [3, 4], "uppercase": true}'
                  placeholder="XXX-XXXX"
                  id="postcode"
                />
              </Col>
              <Col>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="set-primary" />
                  <label className="form-check-label text-dark fw-medium" htmlFor="set-primary">
                    Set as primary billing address
                  </label>
                </div>
              </Col>
            </Row>
            <div className="d-flex flex-column flex-sm-row">
              <Button variant="secondary" className="mb-3 mb-sm-0" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" className="ms-sm-3" type="submit">
                Save address
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default BillingAddress
