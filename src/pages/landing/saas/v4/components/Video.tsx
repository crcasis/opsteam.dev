import videodark from '@/assets/img/landing/saas-4/video-cover-dark.png'
import videolight from '@/assets/img/landing/saas-4/video-cover-light.jpg'
import GlightBox from '@/components/GlightBox'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Video = () => {
  return (
    <>
      <section className="position-relative py-5">
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none"
          style={{ background: 'linear-gradient(360deg, #fff 5.39%, #f6f9fc 78.66%)' }}
        />
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block"
          style={{ background: 'linear-gradient(360deg, #121519 5.39%, rgba(255, 255, 255, .03) 78.66%)' }}
        />
        <Container className="position-relative z-2 py-2 py-sm-3 py-sm-4 py-md-5">
          <Row className="align-items-center py-lg-2 py-xl-3 my-xl-1 my-xxl-3">
            <Col md={5} xl={4}>
              <h2 className="h1 pb-2 pb-sm-3 mb-md-0">
                Learn <span className="text-gradient-primary">how Around works</span> in a nutshell. Watch a short introductory video
              </h2>
            </Col>
            <Col md={7} className="offset-xl-1">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-5">
                  <GlightBox
                    href="https://www.youtube.com/watch?v=ADpOLD2z1Ns"
                    className="glightbox btn btn-icon btn-xl btn-primary rounded-circle stretched-link"
                    data-bs-toggle="video"
                    aria-label="Play video"
                  >
                    <i className="ai-play-filled" />
                  </GlightBox>
                </div>
                <Image src={videolight} className="d-dark-mode-none rounded-3" alt="Video cover" />
                <Image src={videodark} className="d-none d-dark-mode-block rounded-3" alt="Video cover" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Video
