import img from '@/assets/img/about/agency/parallax-image.jpg'
import Jarallax from '@/components/Jarallax'
import { Col, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section className="container position-relative z-3" style={{ marginTop: '-135px' }}>
        <div className="rounded-5 overflow-hidden">
          <div className="jarallax ratio ratio-16x9" data-jarallax data-speed="0.6">
            <Jarallax className="jarallax-img" style={{ backgroundImage: `url(${img})` }} />
          </div>
        </div>
        <Row className="pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
          <Col md={6} lg={5}>
            <div className="fs-sm text-uppercase mb-3">What we do</div>
            <h2 className="display-6">We are a team who create marketing strategies</h2>
          </Col>
          <Col md={6} xl={5} className="offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
            <p className="fs-xl">
              Morbi et massa fames ac scelerisque sit commodo dignissim <strong>faucibus quisque proin</strong> lectus laoreet sem adipiscing
              sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus
              et.
            </p>
            <p className="fs-xl">
              Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur.
              <strong>Vel magna sit aliquet viverra morbi massa mattis urna,</strong> feugiat egestas tincidunt ipsum diam quam massa amet odio nisi
              duis dolor.
            </p>
            <p className="fs-xl mb-0">
              Ac facilisis eros sem faucibus aliquet venenatis amet fermentum nisi. Mauris consectetur sem malesuada. viverra a non sapien odio id
              risus volutpat at.
            </p>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default About
