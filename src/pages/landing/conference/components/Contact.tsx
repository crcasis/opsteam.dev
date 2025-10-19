import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import noise from '@/assets/img/landing/conference/noise.png'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <section className="bg-primary position-relative py-5" data-bs-theme="light">
        <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-5" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-15"
          style={{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light' }}
        />
        <Container className="position-relative z-2 pt-sm-2 pb-3 py-md-4 py-lg-5">
          <Row className="align-items-center">
            <Col md={6} lg={5} xxl={4} className="pb-2 pb-md-0 mb-4 mb-md-0">
              <div className="text-warning pb-3 mb-1 mb-md-2 mb-lg-3">
                <svg className="d-block" width={28} height={28} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0L14.659 4.14233C15.4424 9.06596 20.2555 12.9977 26.4868 13.8042L28 14L26.4868 14.1958C20.2555 15.0023 15.4424 18.934 14.659 23.8577L14 28L13.341 23.8577C12.5576 18.934 7.74447 15.0023 1.51323 14.1958L0 14L1.51323 13.8042C7.74447 12.9977 12.5576 9.06596 13.341 4.14234L14 0Z" />
                </svg>
              </div>
              <h2 className="display-5 text-light mb-4 mb-md-5">This is the event that can not be missed!</h2>
              <div className="d-flex align-items-center">
                <div className="d-flex me-3">
                  <div className="bg-white flex-shrink-0 rounded-circle position-relative z-4" style={{ padding: 3 }}>
                    <Image className="rounded-circle" src={avatar05} width={48} alt="Avatar" />
                  </div>
                  <div className="bg-white flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style={{ padding: 3 }}>
                    <Image className="rounded-circle" src={avatar08} width={48} alt="Avatar" />
                  </div>
                  <div className="bg-white flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style={{ padding: 3 }}>
                    <Image className="rounded-circle" src={avatar09} width={48} alt="Avatar" />
                  </div>
                  <div className="bg-white flex-shrink-0 rounded-circle position-relative z-1 ms-n3" style={{ padding: 3 }}>
                    <Image className="rounded-circle" src={avatar12} width={48} alt="Avatar" />
                  </div>
                </div>
                <p className="text-light mb-0">
                  <strong>1.5k</strong> <span className="text-light opacity-70">attendees</span>
                </p>
              </div>
            </Col>
            <Col md={6} className="offset-lg-1 offset-xxl-2">
              <Card className="bg-white border-0 p-1 p-sm-2 p-lg-3">
                <form className="card-body needs-validation p-4" noValidate>
                  <div className="mb-4">
                    <label className="form-label fs-base" htmlFor="email">
                      Email
                    </label>
                    <input className="form-control form-control-lg" type="email" placeholder="Email address" required id="email" />
                    <div className="invalid-feedback">Please provide a valid email address!</div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label fs-base" htmlFor="name">
                      Name
                    </label>
                    <input className="form-control form-control-lg" type="text" placeholder="Your name" required id="name" />
                    <div className="invalid-feedback">Please enter your name!</div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label fs-base" htmlFor="message">
                      Message
                    </label>
                    <textarea className="form-control form-control-lg" rows={5} placeholder="Your message" required id="message" />
                    <div className="invalid-feedback">Please enter your message!</div>
                  </div>
                  <button className="btn btn-lg btn-warning" type="submit">
                    Send request
                  </button>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
