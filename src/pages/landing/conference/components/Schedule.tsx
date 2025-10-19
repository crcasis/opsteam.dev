import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import avatar19 from '@/assets/img/avatar/19.jpg'
import { Col, Image, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const Schedule = () => {
  return (
    <>
      <section className="container py-5 mb-lg-2 mt-lg-3 my-xl-4 my-xxl-5">
        <TabContainer defaultActiveKey={'dayone'}>
          <div className="d-md-flex align-items-center justify-content-between pt-2 pt-sm-3 pb-3 mt-md-3 mb-3 mb-lg-4">
            <div className="d-flex align-items-center mb-4 mb-md-0">
              <h2 className="h1 mb-0">Event schedule</h2>
              <div className="text-warning flex-shrink-0 ps-sm-1 ms-3">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z" />
                </svg>
              </div>
            </div>
            <Nav as={'ul'} className="nav-tabs flex-nowrap mb-0" role="tablist">
              <NavItem as={'li'} className="me-1">
                <NavLink eventKey={'dayone'} className="px-3 px-sm-4" href="#dayOne" data-bs-toggle="tab" role="tab">
                  Day one (Nov 15)
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey={'daytwo'} className="nav-link px-3 px-sm-4" href="#dayTwo" data-bs-toggle="tab" role="tab">
                  Day two (Nov 16)
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent className="border-top border-bottom mb-3 mb-sm-4 mb-lg-5">
            <TabPane eventKey={'dayone'} className="fade" id="dayOne" role="tabpanel">
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">9:30 - 10:30 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Opening party &amp; registration</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">
                    Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit metus turpis enim urna nec risus vehicula pharetra diam
                    erat ac proin donec.
                  </p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar05} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar08} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-1 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar12} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">10:30 - 11:30 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">What are the top ideas for startup in 2023</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">Iaculis tellus morbi dui metus non leo pellentesque et euismod et tellus.</p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar10} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar06} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">11:30 - 12:00 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Coffee break</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">12:00 - 15:00 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Workshop: leading UI/UX design trends</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">
                    Mi ullamcorper porttitor auctor nunc dui massa mattis fusce convallis. Aliquam quam nulla faucibus id. Eu cum quisque imperdiet
                    semper ut ligula scelerisque.
                  </p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar19} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">15:00 - 17:30 pm</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Group discussion: How to align and empower cross-team success</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit metus.</p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar08} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar06} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane eventKey={'daytwo'} className="fade" id="dayTwo" role="tabpanel">
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">12:00 - 15:00 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Workshop: How Blockchain affects modern IT market</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">
                    Mi ullamcorper porttitor auctor nunc dui massa mattis fusce convallis. Aliquam quam nulla faucibus id. Eu cum quisque imperdiet
                    semper ut ligula scelerisque.
                  </p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar19} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">9:30 - 10:30 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">The future of front-end frameworks</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">
                    Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit metus turpis enim urna nec risus vehicula pharetra diam
                    erat ac proin donec.
                  </p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar05} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar08} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-1 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar12} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">11:30 - 12:00 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Coffee break</h3>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">15:00 - 17:30 pm</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">Group discussion: How good UI desig influences our perception</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit metus.</p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar08} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar06} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="py-3 my-2 my-md-3">
                <Col md={3}>
                  <div className="h6 mb-2 mb-md-0">10:30 - 11:30 am</div>
                </Col>
                <Col md={6}>
                  <h3 className="h4 mb-0">What are the top ideas for startup in 2024</h3>
                  <p className="pt-2 pt-md-3 mb-md-0">Iaculis tellus morbi dui metus non leo pellentesque et euismod et tellus.</p>
                </Col>
                <Col md={3} className="text-md-end">
                  <div className="d-inline-flex">
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar10} width={48} alt="Avatar" />
                    </div>
                    <div className="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                      <Image className="rounded-circle" src={avatar06} width={48} alt="Avatar" />
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </TabContainer>
      </section>
    </>
  )
}

export default Schedule
