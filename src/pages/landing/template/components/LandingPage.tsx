import bloghomepagedark from '@/assets/img/landing/intro/landings/blog-homepage-dark.jpg'
import bloghomepagelight from '@/assets/img/landing/intro/landings/blog-homepage-light.jpg'
import consultingdark from '@/assets/img/landing/intro/landings/business-consulting-dark.jpg'
import consultinglight from '@/assets/img/landing/intro/landings/business-consulting-light.jpg'
import conferencedark from '@/assets/img/landing/intro/landings/conference-dark.jpg'
import conferencelight from '@/assets/img/landing/intro/landings/conference-light.jpg'
import corporatedark from '@/assets/img/landing/intro/landings/corporate-dark.jpg'
import corporatelight from '@/assets/img/landing/intro/landings/corporate-light.jpg'
import coworkingspacedark from '@/assets/img/landing/intro/landings/coworking-space-dark.jpg'
import coworkingspacelight from '@/assets/img/landing/intro/landings/coworking-space-light.jpg'
import creativeagencydark from '@/assets/img/landing/intro/landings/creative-agency-dark.jpg'
import creativeagencylight from '@/assets/img/landing/intro/landings/creative-agency-light.jpg'
import influencerdark from '@/assets/img/landing/intro/landings/influencer-dark.jpg'
import influencerlight from '@/assets/img/landing/intro/landings/influencer-light.jpg'
import insurancedark from '@/assets/img/landing/intro/landings/insurance-dark.jpg'
import insurancelight from '@/assets/img/landing/intro/landings/insurance-light.jpg'
import marketingagencydark from '@/assets/img/landing/intro/landings/marketing-agency-dark.jpg'
import marketingagencylight from '@/assets/img/landing/intro/landings/marketing-agency-light.jpg'
import appdark from '@/assets/img/landing/intro/landings/mobile-app-showcase-dark.jpg'
import applight from '@/assets/img/landing/intro/landings/mobile-app-showcase-light.jpg'
import productdark from '@/assets/img/landing/intro/landings/product-landing-dark.jpg'
import productlight from '@/assets/img/landing/intro/landings/product-landing-light.jpg'
import saasV1dark from '@/assets/img/landing/intro/landings/saas-v1-dark.jpg'
import saasV1light from '@/assets/img/landing/intro/landings/saas-v1-light.jpg'
import saasV2dark from '@/assets/img/landing/intro/landings/saas-v2-dark.jpg'
import saasV2light from '@/assets/img/landing/intro/landings/saas-v2-light.jpg'
import saasV3dark from '@/assets/img/landing/intro/landings/saas-v3-dark.jpg'
import saasV3light from '@/assets/img/landing/intro/landings/saas-v3-light.jpg'
import sassV4dark from '@/assets/img/landing/intro/landings/saas-v4-dark.jpg'
import sassV4light from '@/assets/img/landing/intro/landings/saas-v4-light.jpg'
import shopV1dark from '@/assets/img/landing/intro/landings/shop-homepage-v1-dark.jpg'
import shopV1light from '@/assets/img/landing/intro/landings/shop-homepage-v1-light.jpg'
import shopV2dark from '@/assets/img/landing/intro/landings/shop-homepage-v2-dark.jpg'
import shopV2light from '@/assets/img/landing/intro/landings/shop-homepage-v2-light.jpg'
import webstudiodark from '@/assets/img/landing/intro/landings/web-studio-dark.jpg'
import webstudiolight from '@/assets/img/landing/intro/landings/web-studio-light.jpg'
import yogastudiodark from '@/assets/img/landing/intro/landings/yoga-studio-dark.jpg'
import yogastudiolight from '@/assets/img/landing/intro/landings/yoga-studio-light.jpg'
import sandwatchdark from '@/assets/json/animation-sandwatch-dark.json'
import sandwatch from '@/assets/json/animation-sandwatch-light.json'
import { Player, Player as PlayerType } from '@lordicon/react'
import { useEffect, useRef } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type LandingCardType = {
  title: string
  href: string
  imgLight: string
  imgDark: string
  isNew?: boolean
}

const landingPagesData: LandingCardType[] = [
  { title: 'Mobile App Showcase', href: '/landing/mobile', imgLight: applight, imgDark: appdark },
  { title: 'Product Landing', href: '/landing/product', imgLight: productlight, imgDark: productdark },
  { title: 'SaaS v.1', href: '/landing/saas/v1', imgLight: saasV1light, imgDark: saasV1dark },
  { title: 'SaaS v.2', href: '/landing/saas/v2', imgLight: saasV2light, imgDark: saasV2dark },
  { title: 'SaaS v.3', href: '/landing/saas/v3', imgLight: saasV3light, imgDark: saasV3dark },
  { title: 'SaaS v.4', href: '/landing/saas/v4', imgLight: sassV4light, imgDark: sassV4dark, isNew: true },
  { title: 'Shop Homepage v.1', href: '/landing/shop/v1', imgLight: shopV1light, imgDark: shopV1dark },
  { title: 'Shop Homepage v.2', href: '/landing/shop/v2', imgLight: shopV2light, imgDark: shopV2dark, isNew: true },
  { title: 'Marketing Agency', href: '/landing/agency/marketing', imgLight: marketingagencylight, imgDark: marketingagencydark },
  { title: 'Creative Agency', href: '/landing/agency/creative', imgLight: creativeagencylight, imgDark: creativeagencydark },
  { title: 'Conference (Event)', href: '/landing/conference', imgLight: conferencelight, imgDark: conferencedark },
  { title: 'Influencer', href: '/landing/influencer', imgLight: influencerlight, imgDark: influencerdark },
  { title: 'Business Consulting', href: '/landing/business-consulting', imgLight: consultinglight, imgDark: consultingdark },
  { title: 'Corporate', href: '/landing/corporate', imgLight: corporatelight, imgDark: corporatedark },
  { title: 'Insurance Company', href: '/landing/insurance', imgLight: insurancelight, imgDark: insurancedark, isNew: true },
  { title: 'Coworking Space', href: '/landing/coworking', imgLight: coworkingspacelight, imgDark: coworkingspacedark },
  { title: 'Yoga Studio', href: '/landing/yoga', imgLight: yogastudiolight, imgDark: yogastudiodark },
  { title: 'Web Studio', href: '/landing/web-studio', imgLight: webstudiolight, imgDark: webstudiodark },
  { title: 'Blog Homepage', href: '/landing/blog', imgLight: bloghomepagelight, imgDark: bloghomepagedark },
]

const LandingPage = () => {
  const lightRef = useRef<PlayerType | null>(null)
  const darkRef = useRef<PlayerType | null>(null)

  useEffect(() => {
    lightRef.current?.playFromBeginning()
    darkRef.current?.playFromBeginning()
  }, [])
  return (
    <>
      <section className="bg-gray py-2 py-lg-3 py-xl-4 py-xxl-5" id="landings">
        <Container className="py-5 mt-1 mb-2 mt-sm-2 mb-sm-3 mt-md-3 mb-md-4 my-lg-4 my-xl-5">
          <h2 className="display-5 text-center pt-xxl-2">Landing pages</h2>
          <p className="fs-lg text-center pb-3 pb-lg-0 mb-lg-5">Choose from pre-built layouts of our unique landing pages</p>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 pb-xl-3">
            {landingPagesData.map((item, idx) => (
              <Col key={idx}>
                <div className="card-hover card-lifted mx-auto" style={{ maxWidth: 416 }}>
                  {item.isNew && <span className="badge bg-danger rouded-pill position-absolute top-0 end-0 translate-middle-y me-n2 z-2">New</span>}
                  <div className="card-lifted overflow-hidden rounded-3 mb-3">
                    <Image className="d-dark-mode-none" src={item.imgLight} alt="Mobile App Showcase" />
                    <Image className="d-none d-dark-mode-block" src={item.imgDark} alt="Mobile App Showcase" />
                  </div>
                  <h3 className="h5 text-center mb-0">
                    <Link className="stretched-link" to={item.href}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </Col>
            ))}
            <Col>
              <Card className="border-0 bg-transparent h-100">
                <CardBody className="d-flex justify-content-center align-items-center border-dashed border-2 rounded-3 py-5 mb-3">
                  <div className="py-5" style={{ width: '5.5rem' }}>
                    <div className="d-dark-mode-none">
                      <Player
                        size={88}
                        ref={lightRef}
                        icon={sandwatch}
                        colors="transparent"
                        onComplete={() => lightRef.current?.playFromBeginning()}
                      />
                    </div>
                    <div className="d-none d-dark-mode-block">
                      <Player
                        size={88}
                        ref={darkRef}
                        icon={sandwatchdark}
                        colors="transparent"
                        onComplete={() => darkRef.current?.playFromBeginning()}
                      />
                    </div>
                  </div>
                </CardBody>
                <h3 className="h5 text-nav text-center mb-0">Coming Soon</h3>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default LandingPage
