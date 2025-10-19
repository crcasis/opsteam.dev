import parallaximg from '@/assets/img/landing/coworking-space/parallax-image.jpg'
import GlightBox from '@/components/GlightBox'
import Jarallax from '@/components/Jarallax'
import { Col, Row } from 'react-bootstrap'

const Video = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="text-center text-md-start pb-3 pt-1 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-0 mb-3 mb-lg-4">
          <Col md={6}>
            <h2 className="h1 mb-md-0">Our working atmosphere</h2>
          </Col>
          <Col md={6} className="pt-2">
            <p className="mb-0">
              Morbi et massa fames ac scelerisque sit commodo dignissim aucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat
              massa tellus lorem aenean.
            </p>
          </Col>
        </Row>
        <div className="rounded-5 overflow-hidden">
          <div className="jarallax ratio ratio-16x9 d-flex align-items-center justify-content-center" data-jarallax data-speed="0.6">
            <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${parallaximg})` }} />
            <div className="w-auto position-relative p-4">
              <GlightBox
                className="glightbox btn btn-icon btn-xl btn-primary rounded-circle stretched-link"
                href="https://www.youtube.com/watch?v=IxRVa1DbSAg"
                data-bs-toggle="video"
                aria-label="Play video"
              >
                <i className="ai-play-filled" />
              </GlightBox>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
