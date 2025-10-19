import { useState } from 'react'
import { Alert, Button, Card, CardBody, Col, Modal, ModalBody, ModalHeader, ModalTitle, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PaymentMethod = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <CardBody>
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-card text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Payment methods</h2>
          </div>
          <Alert variant="danger" className="d-flex mb-4">
            <i className="ai-octagon-alert fs-xl me-2" />
            <p className="mb-0">Your primary credit card expired on 01/04/2023. Please add a new card or update this one.</p>
          </Alert>
          <Row className="row-cols-1 row-cols-md-2 g-4">
            <Col>
              <Card className="h-100 rounded-3 p-3 p-sm-4">
                <div className="d-flex align-items-center pb-2 mb-1">
                  <h3 className="h6 text-nowrap text-truncate mb-0">Isabella Bocouse</h3>
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
                <div className="d-flex align-items-center">
                  <svg width={52} height={42} viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.6402 28.2865H18.5199L21.095 12.7244H25.2157L22.6402 28.2865ZM15.0536 12.7244L11.1255 23.4281L10.6607 21.1232L10.6611 21.124L9.27467 14.1256C9.27467 14.1256 9.10703 12.7244 7.32014 12.7244H0.8262L0.75 12.9879C0.75 12.9879 2.73586 13.3942 5.05996 14.7666L8.63967 28.2869H12.9327L19.488 12.7244H15.0536ZM47.4619 28.2865H51.2453L47.9466 12.7239H44.6345C43.105 12.7239 42.7324 13.8837 42.7324 13.8837L36.5873 28.2865H40.8825L41.7414 25.9749H46.9793L47.4619 28.2865ZM42.928 22.7817L45.093 16.9579L46.3109 22.7817H42.928ZM36.9095 16.4667L37.4975 13.1248C37.4975 13.1248 35.6831 12.4463 33.7916 12.4463C31.7469 12.4463 26.8913 13.3251 26.8913 17.5982C26.8913 21.6186 32.5902 21.6685 32.5902 23.7803C32.5902 25.8921 27.4785 25.5137 25.7915 24.182L25.1789 27.6763C25.1789 27.6763 27.0187 28.555 29.8296 28.555C32.6414 28.555 36.8832 27.1234 36.8832 23.2271C36.8832 19.1808 31.1331 18.8041 31.1331 17.0449C31.1335 15.2853 35.1463 15.5113 36.9095 16.4667Z"
                      fill="#2566AF"
                    />
                    <path
                      d="M10.6611 22.1235L9.2747 15.1251C9.2747 15.1251 9.10705 13.7239 7.32016 13.7239H0.8262L0.75 13.9874C0.75 13.9874 3.87125 14.6235 6.86507 17.0066C9.72766 19.2845 10.6611 22.1235 10.6611 22.1235Z"
                      fill="#E6A540"
                    />
                  </svg>
                  <div className="ps-3 fs-sm">
                    <div className="text-dark">Visa •••• 9016</div>
                    <div className="text-body-secondary">Debit - Expires 03/24</div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 rounded-3 p-3 p-sm-4">
                <div className="d-flex align-items-center pb-2 mb-1">
                  <h3 className="h6 text-nowrap text-truncate mb-0">Isabella Bocouse</h3>
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
                <div className="d-flex align-items-center">
                  <svg width={52} height={42} viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4109 30.6159H20.5938V10.7068H31.4111L31.4109 30.6159Z" fill="#FF5F00" />
                    <path
                      d="M21.28 20.6617C21.28 16.6232 23.1264 13.0256 26.0016 10.7072C23.8252 8.94968 21.1334 7.99582 18.3618 8.00001C11.5344 8.00001 6 13.6688 6 20.6617C6 27.6547 11.5344 33.3235 18.3618 33.3235C21.1334 33.3277 23.8254 32.3738 26.0018 30.6163C23.1268 28.2983 21.28 24.7005 21.28 20.6617Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M46.0028 20.6617C46.0028 27.6547 40.4684 33.3235 33.641 33.3235C30.8691 33.3276 28.1768 32.3738 26 30.6163C28.876 28.2979 30.7224 24.7005 30.7224 20.6617C30.7224 16.623 28.876 13.0256 26 10.7072C28.1768 8.94974 30.8689 7.99589 33.6408 8.00001C40.4682 8.00001 46.0026 13.6688 46.0026 20.6617"
                      fill="#F79E1B"
                    />
                  </svg>
                  <div className="ps-3 fs-sm">
                    <div className="text-dark">MasterCard •••• 4242</div>
                    <div className="text-body-secondary">Checking - Expires 01/25</div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 rounded-3 p-3 p-sm-4">
                <div className="d-flex align-items-center pb-2 mb-1">
                  <h3 className="h6 text-nowrap text-truncate mb-0">Isabella Bocouse</h3>
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
                <div className="d-flex align-items-center">
                  <svg width={52} height={42} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 42">
                    <path
                      fill="#03a9f4"
                      d="M37.3,11.8c-0.2-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.4,0.3-0.4,0.6c0,0.2-0.1,0.5-0.1,0.7c-1.4,6.3-4.2,9.4-8.5,9.4h-6.4c-0.3,0-0.6,0.2-0.7,0.6l-2.1,10L18,35.5c-0.2,1.2,0.5,2.3,1.7,2.5c0.1,0,0.3,0,0.4,0h4.3c1,0,1.8-0.7,2.1-1.6l1.7-6.9h3.7c4.4,0,7.4-3.5,8.5-9.8l0,0C41.1,16.7,39.9,13.5,37.3,11.8z"
                    />
                    <path
                      fill="#283593"
                      d="M36,6.5c-1.4-1.6-3.4-2.5-5.5-2.5H18.6c-1.8,0-3.3,1.3-3.5,3l-3.7,24.4c-0.2,1.2,0.6,2.3,1.8,2.4c0.1,0,0.2,0,0.3,0H19c0.3,0,0.6-0.2,0.7-0.6l2-9.4h5.8c5.1,0,8.4-3.5,9.9-10.5c0.1-0.3,0.1-0.6,0.1-0.8C38,10.3,37.4,8.1,36,6.5z"
                    />
                  </svg>
                  <div className="ps-2 fs-sm">
                    <div className="text-dark">Electronic payment system</div>
                    <div className="text-body-secondary">bocouse@example.com</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 justify-content-center align-items-center border-dashed rounded-3 py-5 px-3 px-sm-4">
                <Link onClick={handleShow} className="stretched-link d-flex align-items-center fw-semibold text-decoration-none" to="#addCard">
                  <i className="ai-circle-plus fs-xl me-2" />
                  Add new payment methods
                </Link>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </section>

      <Modal show={showModal} centered onHide={handleClose} className="fade" id="addCard">
        <ModalHeader closeButton className="border-0">
          <ModalTitle as={'h4'}>Add new card</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form className="needs-validation pt-0" noValidate>
            <div className="mb-4">
              <label className="form-label" htmlFor="card-name">
                Name on card
              </label>
              <input className="form-control" type="text" placeholder="John Doe" required id="card-name" />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="card-number">
                Card number
              </label>
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  data-format='{"creditCard": true}'
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                  id="card-number"
                />
                <div className="input-group-text py-0">
                  <div className="credit-card-icon" />
                </div>
              </div>
            </div>
            <Row className="row-cols-2 g-4 pb-2 pb-sm-3 mb-4">
              <Col>
                <label className="form-label" htmlFor="card-expiration">
                  Expiration date
                </label>
                <input
                  className="form-control"
                  type="text"
                  data-format='{"date": true, "datePattern": ["m", "y"]}'
                  placeholder="MM/YY"
                  required
                  id="card-expiration"
                />
              </Col>
              <Col>
                <label className="form-label" htmlFor="card-cvv">
                  CVV Code
                </label>
                <input
                  className="form-control"
                  type="text"
                  data-format='{"numericOnly": true, "blocks": [3]}'
                  placeholder="XXX"
                  required
                  id="card-cvv"
                />
              </Col>
            </Row>
            <div className="d-flex flex-column flex-sm-row">
              <Button variant="secondary" className="mb-3 mb-sm-0" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" className="ms-sm-3" type="submit">
                Save new card
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default PaymentMethod
