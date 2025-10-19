import parallaximg from '@/assets/img/landing/coworking-space/parallax-image.jpg'
import CustomFlatpickr from '@/components/CustomFlatpickr'
import Jarallax from '@/components/Jarallax'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className="pt-5">
        <Container className="position-relative z-2 pt-5 mt-3 mt-sm-4 mt-md-5">
          <Row className="pt-xl-3 pt-xxl-4">
            <Col xxl={6} lg={7}>
              <h1 className="display-3 text-center text-lg-start">The best space for work and business meetings</h1>
            </Col>
            <Col lg={5} className="offset-xxl-1 pt-sm-3">
              <p className="fs-lg text-center text-lg-start pb-3 pb-sm-0 pb-md-2 mb-4 mb-sm-5">
                Magna in purus in facilisis pretium eleifend in nullamer magna morbi eleifend vel convallis quis utrices neque tellus purus in
                facilisis pretium eleifend vel convallis.
              </p>
              <Card className="border-0 bg-primary py-4 px-xxl-4">
                <form className="card-body" data-bs-theme="dark">
                  <h2 className="h3 card-title text-white text-center pb-2 pb-xxl-3">Reserve your spot</h2>
                  <div className="mb-3">
                    <label className="form-label fs-base" htmlFor="space">
                      Space
                    </label>
                    <select className="form-select form-select-lg" required id="space">
                      <option disabled>Choose space</option>
                      <option value="Coworking main room">Coworking main room</option>
                      <option value="Coworking terrace">Coworking terrace</option>
                      <option value="Skype room 1" selected>
                        Skype room 1
                      </option>
                      <option value="Skype room 2">Skype room 2</option>
                      <option value="Meeting room 1">Meeting room 1</option>
                      <option value="Meeting room 2">Meeting room 2</option>
                      <option value="Gaming room">Gaming room</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-base" htmlFor="company">
                      Company size
                    </label>
                    <input className="form-control form-control-lg" type="number" defaultValue={1} required id="company" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date and time</label>
                    <div className="position-relative">
                      <CustomFlatpickr
                        className="form-control form-control-lg date-picker pe-5"
                        placeholder="Choose date/time"
                        options={{
                          enableTime: true,
                          dateFormat: 'Y-m-d H:i',
                          altInput: true,
                          altFormat: 'F j, Y H:i',
                        }}
                      />
                      <i className="ai-calendar position-absolute top-50 end-0 translate-middle-y fs-lg text-white opacity-80 me-3" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fs-base" htmlFor="email">
                      Email address
                    </label>
                    <input className="form-control form-control-lg" type="email" placeholder="johnDoe@example.com" required id="email" />
                  </div>
                  <div className="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row align-items-center justify-content-center justify-content-lg-start pt-3 pt-xxl-4">
                    <button
                      className="btn btn-light w-100 w-sm-auto w-lg-100 w-xxl-auto mb-2 mb-sm-0 mb-lg-2 mb-xxl-0 me-sm-3 me-lg-0 me-xxl-3"
                      type="submit"
                    >
                      Book space now
                    </button>
                    <Link className="d-flex align-items-center fs-sm fw-semibold text-white text-decoration-none px-3 py-2" to="tel:+15262200459">
                      <i className="ai-phone fs-xl me-2" />
                      +1&nbsp;526&nbsp;220&nbsp;0459
                    </Link>
                  </div>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="jarallax" data-jarallax data-speed="0.6">
          <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${parallaximg})` }} />
          <div className="d-none d-xxl-block" style={{ height: 830, marginTop: '-470px' }} />
          <div className="d-none d-xl-block d-xxl-none" style={{ height: 780, marginTop: '-490px' }} />
          <div className="d-none d-lg-block d-xl-none" style={{ height: 700, marginTop: '-560px' }} />
          <div className="d-none d-sm-block d-lg-none" style={{ height: 520, marginTop: '-450px' }} />
          <div className="d-sm-none" style={{ height: 500, marginTop: '-450px' }} />
        </div>
      </section>
    </>
  )
}

export default Hero
