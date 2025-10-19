import order1 from '@/assets/img/account/orders/01.png'
import order02 from '@/assets/img/account/orders/02.png'
import order03 from '@/assets/img/account/orders/03.png'
import order04 from '@/assets/img/account/orders/04.png'
import order05 from '@/assets/img/account/orders/05.png'
import order06 from '@/assets/img/account/orders/06.png'
import cart1 from '@/assets/img/shop/cart/01.png'
import cart2 from '@/assets/img/shop/cart/02.png'
import cart4 from '@/assets/img/shop/cart/04.png'
import cart5 from '@/assets/img/shop/cart/05.png'
import cart6 from '@/assets/img/shop/cart/06.png'
import cart7 from '@/assets/img/shop/cart/07.png'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, CardBody, Col, Image, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        <CardBody>
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-cart text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Orders</h2>
            <Link className="btn btn-sm btn-secondary ms-auto" to="/account/orders">
              View all
            </Link>
          </div>
          <Accordion className="accordion-alt accordion-orders" id="orders">
            <AccordionItem eventKey="1" className="border-top mb-0">
              <AccordionHeader>
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary">#78A6431D409</div>
                    <span className="badge bg-info bg-opacity-10 text-info fs-xs">In progress</span>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="d-none d-sm-block fs-sm text-body-secondary mb-2">Order date</div>
                    <div className="d-sm-none fs-sm text-body-secondary mb-2">Date</div>
                    <div className="fs-sm fw-medium text-dark">Jan 27, 2023</div>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary mb-2">Total</div>
                    <div className="fs-sm fw-medium text-dark">$16.00</div>
                  </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex ms-auto">
                  <div className="mx-1">
                    <Image src={order1} width={48} alt="Product" />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="table-responsive pt-1">
                  <Table className="align-middle w-100" style={{ minWidth: 450 }}>
                    <tbody>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart1} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Candle in concrete bowl</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">Gray night</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="bg-secondary rounded-1 p-4 my-2">
                  <Row>
                    <Col sm={5} md={3} lg={4} className="mb-3 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                      <div className="fs-sm">Upon the delivery</div>
                      <Link className="btn btn-link py-1 px-0 mt-2" to="">
                        <i className="ai-time me-2 ms-n1" />
                        Order history
                      </Link>
                    </Col>
                    <Col sm={7} md={5} className="mb-4 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                      <div className="fs-sm">
                        401 Magnetic Drive Unit 2,
                        <br />
                        Toronto, Ontario, M3J 3H9, Canada
                      </div>
                    </Col>
                    <Col md={4} lg={3} className="text-md-end">
                      <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button">
                        <i className="ai-star me-2 ms-n1" />
                        Leave a review
                      </button>
                    </Col>
                  </Row>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="2" className="border-top mb-0">
              <AccordionHeader>
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary">#47H76G09F33</div>
                    <span className="badge bg-danger bg-opacity-10 text-danger fs-xs">Canceled</span>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="d-none d-sm-block fs-sm text-body-secondary mb-2">Order date</div>
                    <div className="d-sm-none fs-sm text-body-secondary mb-2">Date</div>
                    <div className="fs-sm fw-medium text-dark">Sep 14, 2023</div>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary mb-2">Total</div>
                    <div className="fs-sm fw-medium text-dark">$59.00</div>
                  </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex ms-auto">
                  <div className="mx-1">
                    <Image src={order02} width={48} alt="Product" />
                  </div>
                  <div className="mx-1">
                    <Image src={order03} width={48} alt="Product" />
                  </div>
                  <div className="mx-1">
                    <Image src={order04} width={48} alt="Product" />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="table-responsive pt-1">
                  <Table className="align-middle w-100" style={{ minWidth: 450 }}>
                    <tbody>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart4} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Analogue wall clock</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">Turquoise</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$25</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$25</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart5} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Glossy round vase</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">White</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$15</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$15</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart6} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Ceramic flower pot</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">Gray concrete</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$19</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$19</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="bg-secondary rounded-1 p-4 my-2">
                  <Row>
                    <Col sm={5} md={3} lg={4} className="mb-3 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                      <div className="fs-sm">Upon the delivery</div>
                      <Link className="btn btn-link py-1 px-0 mt-2" to="">
                        <i className="ai-time me-2 ms-n1" />
                        Order history
                      </Link>
                    </Col>
                    <Col sm={7} md={5} className="mb-4 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                      <div className="fs-sm">
                        401 Magnetic Drive Unit 2,
                        <br />
                        Toronto, Ontario, M3J 3H9, Canada
                      </div>
                    </Col>
                    <Col md={4} lg={3} className="text-md-end">
                      <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button">
                        <i className="ai-star me-2 ms-n1" />
                        Leave a review
                      </button>
                    </Col>
                  </Row>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="3" className="border-top mb-0">
              <AccordionHeader>
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary">#34VB5540K83</div>
                    <span className="badge bg-primary bg-opacity-10 text-primary fs-xs">Delivered</span>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="d-none d-sm-block fs-sm text-body-secondary mb-2">Order date</div>
                    <div className="d-sm-none fs-sm text-body-secondary mb-2">Date</div>
                    <div className="fs-sm fw-medium text-dark">Jul 10, 2023</div>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary mb-2">Total</div>
                    <div className="fs-sm fw-medium text-dark">$38.00</div>
                  </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex ms-auto">
                  <div className="mx-1">
                    <Image src={order1} width={48} alt="Product" />
                  </div>
                  <div className="mx-1">
                    <Image src={order05} width={48} alt="Product" />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="table-responsive pt-1">
                  <Table className="align-middle w-100" style={{ minWidth: 450 }}>
                    <tbody>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart1} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Candle in concrete bowl</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">Gray night</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$16</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart2} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Exquisite glass vase </Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">Rose</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">2</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$11</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$22</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="bg-secondary rounded-1 p-4 my-2">
                  <Row>
                    <Col sm={5} md={3} lg={4} className="mb-3 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                      <div className="fs-sm">Upon the delivery</div>
                      <Link className="btn btn-link py-1 px-0 mt-2" to="">
                        <i className="ai-time me-2 ms-n1" />
                        Order history
                      </Link>
                    </Col>
                    <Col sm={7} md={5} className="mb-4 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                      <div className="fs-sm">
                        401 Magnetic Drive Unit 2,
                        <br />
                        Toronto, Ontario, M3J 3H9, Canada
                      </div>
                    </Col>
                    <Col md={4} lg={3} className="text-md-end">
                      <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button">
                        <i className="ai-star me-2 ms-n1" />
                        Leave a review
                      </button>
                    </Col>
                  </Row>
                </div>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="4" className="border-top border-bottom mb-0">
              <AccordionHeader>
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary">#502TR872W2</div>
                    <span className="badge bg-primary bg-opacity-10 text-primary fs-xs">Delivered</span>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="d-none d-sm-block fs-sm text-body-secondary mb-2">Order date</div>
                    <div className="d-sm-none fs-sm text-body-secondary mb-2">Date</div>
                    <div className="fs-sm fw-medium text-dark">May 11, 2023</div>
                  </div>
                  <div className="me-3 me-sm-4">
                    <div className="fs-sm text-body-secondary mb-2">Total</div>
                    <div className="fs-sm fw-medium text-dark">$17.00</div>
                  </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex ms-auto">
                  <div className="mx-1">
                    <Image src={order06} width={48} alt="Product" />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <div className="table-responsive pt-1">
                  <table className="table align-middle w-100" style={{ minWidth: 450 }}>
                    <tbody>
                      <tr>
                        <td className="border-0 py-1 px-0">
                          <div className="d-flex align-items-center">
                            <Link className="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-md-2 p-lg-3" to="/shop/single">
                              <Image src={cart7} width={110} alt="Product" />
                            </Link>
                            <div className="ps-3 ps-sm-4">
                              <h4 className="h6 mb-2">
                                <Link to="/shop/single">Dispenser for soap</Link>
                              </h4>
                              <div className="text-body-secondary fs-sm me-3">
                                Color: <span className="text-dark fw-medium">White marble</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Quantity</div>
                          <div className="fs-sm fw-medium text-dark">1</div>
                        </td>
                        <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Price</div>
                          <div className="fs-sm fw-medium text-dark">$17</div>
                        </td>
                        <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                          <div className="fs-sm text-body-secondary mb-2">Total</div>
                          <div className="fs-sm fw-medium text-dark">$17</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-secondary rounded-1 p-4 my-2">
                  <Row>
                    <Col sm={5} md={3} lg={4} className="mb-3 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Payment:</div>
                      <div className="fs-sm">Upon the delivery</div>
                      <Link className="btn btn-link py-1 px-0 mt-2" to="">
                        <i className="ai-time me-2 ms-n1" />
                        Order history
                      </Link>
                    </Col>
                    <Col sm={7} md={5} className="mb-4 mb-md-0">
                      <div className="fs-sm fw-medium text-dark mb-1">Delivery address:</div>
                      <div className="fs-sm">
                        401 Magnetic Drive Unit 2,
                        <br />
                        Toronto, Ontario, M3J 3H9, Canada
                      </div>
                    </Col>
                    <Col md={4} lg={3} className="text-md-end">
                      <button className="btn btn-sm btn-outline-primary w-100 w-md-auto" type="button">
                        <i className="ai-star me-2 ms-n1" />
                        Leave a review
                      </button>
                    </Col>
                  </Row>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </CardBody>
      </section>
    </>
  )
}

export default Order
