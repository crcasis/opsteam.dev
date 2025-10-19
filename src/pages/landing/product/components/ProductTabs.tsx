import colorsblue from '@/assets/img/landing/product/colors/blue.png'
import colorsgray from '@/assets/img/landing/product/colors/gray.png'
import colorsgreen from '@/assets/img/landing/product/colors/green.png'
import colorspink from '@/assets/img/landing/product/colors/pink.png'
import { Col, Image, Nav, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const ProductTabs = () => {
  return (
    <>
      <section className="container pt-md-2 pt-lg-4 pt-xl-5">
        <Row className="align-items-center mt-2 mt-sm-0 pt-4 pt-sm-5">
          <Col md={6} lg={7} xxl={8} className="order-md-2 pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <div className="position-relative ms-md-auto" style={{ maxWidth: 636 }}>
              <div
                className="position-absolute bottom-0 start-0 w-100 bg-secondary rounded-5"
                style={{ height: '91.5%' }}
                data-aos="zoom-in"
                data-aos-duration={700}
                data-aos-offset={300}
              />
              <TabContainer defaultActiveKey={'green'}>
                <div className="position-relative z-2 pb-4 pb-sm-5">
                  <TabContent className="pb-3 mb-3">
                    <TabPane eventKey={'gray'} id="gray" role="tabpanel">
                      <Image className="d-block mx-auto" src={colorsgray} width={486} alt="Gray" />
                    </TabPane>
                    <TabPane eventKey={'blue'} id="blue" role="tabpanel">
                      <Image className="d-block mx-auto" src={colorsblue} width={486} alt="Blue" />
                    </TabPane>
                    <TabPane eventKey={'green'} id="green" role="tabpanel">
                      <Image className="d-block mx-auto" src={colorsgreen} width={486} alt="Green" />
                    </TabPane>
                    <TabPane eventKey={'pink'} id="pink" role="tabpanel">
                      <Image className="d-block mx-auto" src={colorspink} width={486} alt="Pink" />
                    </TabPane>
                  </TabContent>
                  <div className="h6 fs-sm text-center pb-2 mb-1" id="colorOption">
                    Green day
                  </div>
                  <Nav className="nav-tabs justify-content-center">
                    <NavLink eventKey={'gray'} className="border-0 p-0 me-2" data-bs-toggle="tab" data-bs-target="#gray">
                      <input
                        className="btn-check"
                        type="radio"
                        name="color"
                        data-binded-label="colorOption"
                        defaultValue="Gray light"
                        id="gray-color"
                      />
                      <label
                        className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                        htmlFor="gray-color"
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      >
                        <span className="d-block rounded-circle" style={{ width: '.75rem', height: '.75rem', backgroundColor: '#576071' }} />
                      </label>
                    </NavLink>
                    <NavLink eventKey={'blue'} className="border-0 p-0 me-2" data-bs-toggle="tab" data-bs-target="#blue">
                      <input
                        className="btn-check"
                        type="radio"
                        name="color"
                        data-binded-label="colorOption"
                        defaultValue="Blue sky"
                        id="blue-color"
                      />
                      <label
                        className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                        htmlFor="blue-color"
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      >
                        <span className="d-block rounded-circle" style={{ width: '.75rem', height: '.75rem', backgroundColor: '#a1b7d9' }} />
                      </label>
                    </NavLink>
                    <NavLink eventKey={'green'} className="border-0 p-0 me-2" data-bs-toggle="tab" data-bs-target="#green">
                      <input
                        className="btn-check"
                        type="radio"
                        name="color"
                        data-binded-label="colorOption"
                        defaultValue="Green day"
                        defaultChecked
                        id="green-color"
                      />
                      <label
                        className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                        htmlFor="green-color"
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      >
                        <span className="d-block rounded-circle" style={{ width: '.75rem', height: '.75rem', backgroundColor: '#b3cca3' }} />
                      </label>
                    </NavLink>
                    <NavLink eventKey={'pink'} className="border-0 p-0 me-2" data-bs-toggle="tab" data-bs-target="#pink">
                      <input
                        className="btn-check"
                        type="radio"
                        name="color"
                        data-binded-label="colorOption"
                        defaultValue="Pink dream"
                        id="pink-color"
                      />
                      <label
                        className="btn btn-icon btn-xs btn-outline-secondary rounded-circle"
                        htmlFor="pink-color"
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      >
                        <span className="d-block rounded-circle" style={{ width: '.75rem', height: '.75rem', backgroundColor: '#fda9a9' }} />
                      </label>
                    </NavLink>
                  </Nav>
                </div>
              </TabContainer>
            </div>
          </Col>
          <Col md={6} lg={5} xxl={4} className="order-md-1">
            <div className="pe-md-4 pe-xl-0">
              <h2 className="h1 pb-md-2 pb-xl-3">
                <span
                  style={{
                    background: 'linear-gradient(90.72deg, #cbfdb1 3.49%, #acbff1 50.67%, #efa7ec 100.79%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Multicolor
                </span>
                for those who like to be bright and stand out
              </h2>
              <p className="mb-0">
                Turpis nullam netus sed aliquam consectetur at felis consequat tincidunt orci varius arcu urna neque eget maecenas consequat lacus
                habitasse adipiscing.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default ProductTabs
