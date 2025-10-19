import service1 from '@/assets/img/landing/insurance/services/01.jpg'
import service2 from '@/assets/img/landing/insurance/services/02.jpg'
import service3 from '@/assets/img/landing/insurance/services/03.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <section className="overflow-hidden pb-5">
        <Container className="pb-sm-3 mb-md-2 mb-lg-3">
          <Row className="g-4">
            <Col md={7} data-aos="fade-right" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <Image className="object-fit-cover w-100 h-100 rounded-3" src={service1} alt="Image" />
            </Col>
            <Col md={5} data-aos="fade-left" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <div className="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                <h2 className="mb-xl-4">Car insurance</h2>
                <p className="mb-4 mb-xl-5">
                  Explore our car insurance plans designed to give you peace of mind on the road. Whether you're a daily commuter, a weekend
                  adventurer, or a family driver, we've got you covered. With competitive rates, customizable coverage options, and a commitment to
                  your safety, our car insurance is your trusted driving companion. Get a quote today and experience the ease of driving with
                  confidence.
                </p>
                <ul className="list-unstyled mb-4 mb-xl-5">
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Comprehensive coverage
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Customizable plans
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Financial security
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Car insurance discounts
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link className="btn btn-outline-primary" to="">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="overflow-hidden pb-5">
        <Container className="pb-sm-3 mb-md-2 mb-lg-3">
          <Row className="g-4">
            <Col md={7} className="order-md-2" data-aos="fade-left" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <Image className="object-fit-cover w-100 h-100 rounded-3" src={service2} alt="Image" />
            </Col>
            <Col md={5} className="order-md-1" data-aos="fade-right" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <div className="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                <h2 className="mb-xl-4">Travel insurance</h2>
                <p className="mb-4 mb-xl-5">
                  Explore the world with confidence, knowing you're protected wherever you go. Discover our travel insurance plans designed to keep
                  you safe on your journeys. From solo escapades to family getaways, we offer a range of travel insurance options to match your travel
                  style and needs.
                </p>
                <ul className="list-unstyled mb-4 mb-xl-5">
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Comprehensive protection
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Tailored plans
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Emergency medical assistance
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link className="btn btn-outline-primary" to="o">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="overflow-hidden pb-5">
        <Container className="pb-sm-3 mb-md-2 mb-lg-3">
          <Row className="g-4">
            <Col md={7} data-aos="fade-right" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <Image className="object-fit-cover w-100 h-100 rounded-3" src={service3} alt="Image" />
            </Col>
            <Col md={5} data-aos="fade-left" data-aos-duration={600} data-aos-offset={280} data-disable-parallax-down="md">
              <div className="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
                <h2 className="mb-xl-4">Health insurance</h2>
                <p className="mb-4 mb-xl-5">
                  Your health and well-being are our top priorities. We're more than just insurance; we're your partner in good health. We offer a
                  range of health insurance options to suit your unique healthcare needs.
                </p>
                <ul className="list-unstyled mb-4 mb-xl-5">
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Manage your policy online - anywhere, anytime
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    International coverage
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Fast access to treatment
                  </li>
                  <li className="d-flex pb-2 mb-1">
                    <span className="bg-primary mt-2 me-2" style={{ width: 10, height: 10, borderRadius: 2 }} />
                    Fast, simple claiming
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link className="btn btn-outline-primary" to="">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
