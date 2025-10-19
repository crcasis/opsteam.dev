import { useState } from 'react'
import { Card, CardBody, Col, Row, Table } from 'react-bootstrap'

const Pricing = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="container py-5 mt-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <div className="text-center pb-3 pt-lg-2 pt-xl-4 my-1 my-sm-3 my-lg-4">
          <h1 className="display-2">Pricing plans</h1>
          <p className="fs-lg mb-0">Select a service plan that best suits your business needs</p>
        </div>
        <Row className="row-cols-3 flex-nowrap pb-4 overflow-auto">
          <Col style={{ minWidth: '19rem' }}>
            <Card className="h-100 py-lg-4">
              <CardBody className="w-100 mx-auto text-center" style={{ maxWidth: '23rem' }}>
                <h3>Light</h3>
                <div className="display-2 text-primary">$8</div>
                <div className="mb-4">per month</div>
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
                <h3 className="text-light">Premium</h3>
                <div className="display-2 text-light">$72</div>
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
                <div className="mb-4">per month</div>
                <p className="mb-4 pb-4">Enim aenean phasellus in hendrerit interdum lorem proin pretium</p>
                <button className="btn btn-primary w-100" type="button">
                  Get this plan now
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="text-center pt-md-1 pt-lg-2">
          <button className="btn btn-more btn-link fs-4" type="button" aria-expanded={open} aria-label="Compare plans" onClick={() => setOpen(!open)}>
            {open ? 'Compare plans' : 'Compare plans'}
          </button>
        </div>
        <div className={`collapse ${open ? 'show' : ''}`} id="comparePlans">
          <div className="table-responsive pt-sm-2 pt-lg-3">
            <Table className="text-center text-nowrap">
              <thead>
                <tr>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    <span className="h5 mb-0">Light</span>
                  </th>
                  <th scope="col" className="border-0 py-3">
                    <span className="h5 mb-0">Premium</span>
                  </th>
                  <th scope="col" className="border-0 py-3">
                    <span className="h5 mb-0">Medium</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Billed monthly</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">$18</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">$72</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">$36</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Members
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">Just you</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">3 members</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Guest access
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Just you</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">3 members</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      File uploads
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">2 GB</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">30 GB</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">10 GB</span>
                  </td>
                </tr>
                <tr>
                  <th scope="col" className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-1 mb-0">Collaboration</div>
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Real-time collaboration</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Link sharing
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Collaborative workspace
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Filter views
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <span className="text-dark">3</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 py-3">
                    <span className="text-dark">12</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Teams
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="col" className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-3 mb-0">Features</div>
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Web, desktop, &amp; mobile apps</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Reminders
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Priorities</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Comments
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Integrations</span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">5</span>
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <span className="text-dark">Unlimited</span>
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <span className="text-dark">15</span>
                  </td>
                </tr>
                <tr>
                  <th scope="col" className="border-0 text-start pt-4 pb-3 ps-4">
                    <div className="h5 pt-3 mb-0">Admin &amp; security</div>
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="border-0 py-3">
                    &nbsp;
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Admin &amp; member roles
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 text-start py-3 ps-4">
                    <span className="text-body fw-medium">Team billing</span>
                  </th>
                  <td className="border-0 py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                    <span className="d-flex align-items-center text-body fw-medium">
                      Priority support
                      <i
                        className="ai-circle-info fs-lg ms-2"
                        data-bs-toggle="popover"
                        data-bs-trigger="hover"
                        data-bs-placement="right"
                        data-bs-html="true"
                        data-bs-content="Feature description text"
                      />
                    </span>
                  </th>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                  <td className="border-0 bg-secondary py-3">
                    <i className="ai-check fs-xl text-success" />
                  </td>
                  <td className="border-0 rounded-3 rounded-start-0 bg-secondary py-3">
                    <i className="ai-cross fs-xl text-danger" />
                  </td>
                </tr>
                <tr>
                  <td className="border-0 pt-4">&nbsp;</td>
                  <td className="border-0 pt-4">
                    <button className="btn btn-outline-primary mt-3" type="button">
                      Get started $18
                    </button>
                  </td>
                  <td className="border-0 pt-4">
                    <button className="btn btn-outline-primary mt-3" type="button">
                      Get started $72
                    </button>
                  </td>
                  <td className="border-0 pt-4">
                    <button className="btn btn-outline-primary mt-3" type="button">
                      Get started $36
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
