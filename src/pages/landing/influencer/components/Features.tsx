import achievementsdark from '@/assets/img/landing/influencer/achievements-dark.svg'
import achievementslight from '@/assets/img/landing/influencer/achievements-light.svg'
import features from '@/assets/img/landing/influencer/features.jpg'
import { Col, Image, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <>
      <section
        className="container py-5 my-lg-3 my-xl-4 my-xxl-5"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-offset={280}
        data-disable-parallax-down="md"
      >
        <Row className="align-items-xl-center py-2 py-sm-3 my-md-3 mb-lg-4 mb-xl-5">
          <Col md={6} className="pb-4 pb-md-0 mb-3 mb-md-0">
            <Image className="rounded-4" src={features} alt="Influencer" />
          </Col>
          <Col md={6} xl={5} className="offset-xl-1" data-aos="fade-up" data-aos-duration={850} data-aos-offset={180} data-disable-parallax-down="md">
            <div className="ps-md-4 ps-xl-0">
              <h2 className="h1 pb-3 mb-2 mb-md-3 mb-xl-4">Why training with me?</h2>
              <ul className="list-unstyled pb-1 pb-xl-2">
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-fruit text-primary fs-4 mt-n1 me-3" />
                  Nutrition guides for the best overall results.
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-drop text-primary fs-4 mt-n1 me-3" />
                  Individually designed programs and workout plans.
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-stones text-primary fs-4 mt-n1 me-3" />
                  Stretching routines.
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-weight text-primary fs-4 mt-n1 me-3" />
                  Workouts designed for optimal results.
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-heart-alt text-primary fs-4 mt-n1 me-3" />
                  Bonus features like weight history, gratitude journal, ect.
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <i className="ai-chat text-primary fs-4 mt-n1 me-3" />
                  Direct coaching and 24/7 access to support community.
                </li>
              </ul>
              <h3 className="h5 text-body mb-lg-4">My achievements:</h3>
              <Image className="d-dark-mode-none" src={achievementsdark} alt="Achievements" />
              <Image className="d-none d-dark-mode-block" src={achievementslight} alt="Achievements" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Features
