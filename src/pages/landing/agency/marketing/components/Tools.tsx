import admiteddark from '@/assets/img/landing/marketing-agency/tools/admitad-dark.svg'
import admitedlight from '@/assets/img/landing/marketing-agency/tools/admitad-light.svg'
import bing from '@/assets/img/landing/marketing-agency/tools/bing.svg'
import facebook from '@/assets/img/landing/marketing-agency/tools/facebook.svg'
import googledark from '@/assets/img/landing/marketing-agency/tools/google-ads-dark.svg'
import googlelight from '@/assets/img/landing/marketing-agency/tools/google-ads-light.svg'
import analyticsdark from '@/assets/img/landing/marketing-agency/tools/google-analytics-dark.svg'
import analyticslight from '@/assets/img/landing/marketing-agency/tools/google-analytics-light.svg'
import google from '@/assets/img/landing/marketing-agency/tools/google.svg'
import instagramdark from '@/assets/img/landing/marketing-agency/tools/instagram-dark.svg'
import instagramlight from '@/assets/img/landing/marketing-agency/tools/instagram-light.svg'
import microsoftdark from '@/assets/img/landing/marketing-agency/tools/microsoft-dark.svg'
import microsoftlight from '@/assets/img/landing/marketing-agency/tools/microsoft-light.svg'
import tiktokdark from '@/assets/img/landing/marketing-agency/tools/tiktok-dark.svg'
import tiktoklight from '@/assets/img/landing/marketing-agency/tools/tiktok-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tools = () => {
  return (
    <>
      <section className="container">
        <div className="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5">
          <div className="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
            <div className="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
              <h2 className="h1 mb-4">
                The tools <br className="d-none d-lg-inline" />
                we work with
              </h2>
              <p className="pb-3 mb-3 mb-lg-4">
                Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit
                commodo dignissim.
              </p>
              <Link className="btn btn-primary d-none d-lg-inline-flex" to="">
                See all tools
              </Link>
            </div>
            <div className="order-lg-1 w-100 mx-auto mx-lg-0" style={{ maxWidth: 558 }}>
              <Row className="row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={300}>
                    <Image src={bing} alt="Bing" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={500}>
                    <Image src={facebook} alt="Facebook" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={200}>
                    <Image className="d-dark-mode-none" src={microsoftdark} alt="Facebook" />
                    <Image className="d-none d-dark-mode-block" src={microsoftlight} alt="Facebook" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={800}>
                    <Image src={google} alt="Google" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back">
                    <Image className="d-dark-mode-none" src={googledark} alt="Google Ads" />
                    <Image className="d-none d-dark-mode-block" src={googlelight} alt="Google Ads" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={600}>
                    <Image className="d-dark-mode-none" src={admiteddark} alt="Admitad" />
                    <Image className="d-none d-dark-mode-block" src={admitedlight} alt="Admitad" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={400}>
                    <Image className="d-dark-mode-none" src={analyticsdark} alt="Google Analytics" />
                    <Image className="d-none d-dark-mode-block" src={analyticslight} alt="Google Analytics" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={700}>
                    <Image className="d-dark-mode-none" src={instagramdark} alt="Instagram" />
                    <Image className="d-none d-dark-mode-block" src={instagramlight} alt="Instagram" />
                  </div>
                </Col>
                <Col>
                  <div className="bg-light rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={100}>
                    <Image className="d-dark-mode-none" src={tiktokdark} alt="TikTok" />
                    <Image className="d-none d-dark-mode-block" src={tiktoklight} alt="TikTok" />
                  </div>
                </Col>
              </Row>
              <div className="d-lg-none text-center pt-4 mt-2 mt-md-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay={900}>
                <Link className="btn btn-primary" to="">
                  See all tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tools
