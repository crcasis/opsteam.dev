import avatar50 from '@/assets/img/avatar/50.jpg'
import avatar51 from '@/assets/img/avatar/51.jpg'
import avatar52 from '@/assets/img/avatar/52.jpg'
import angulardark from '@/assets/img/landing/saas-4/integrations/angular-dark.svg'
import angularlight from '@/assets/img/landing/saas-4/integrations/angular-light.svg'
import envatodark from '@/assets/img/landing/saas-4/integrations/envato-dark.svg'
import envatolight from '@/assets/img/landing/saas-4/integrations/envato-light.svg'
import firefoxdark from '@/assets/img/landing/saas-4/integrations/firefox-dark.svg'
import firefoxlight from '@/assets/img/landing/saas-4/integrations/firefox-light.svg'
import laravel from '@/assets/img/landing/saas-4/integrations/laravel.svg'
import magentodark from '@/assets/img/landing/saas-4/integrations/magento-dark.svg'
import magentolight from '@/assets/img/landing/saas-4/integrations/magento-light.svg'
import pingdomdark from '@/assets/img/landing/saas-4/integrations/pingdom-dark.svg'
import pingdomlight from '@/assets/img/landing/saas-4/integrations/pingdom-light.svg'
import shopifydark from '@/assets/img/landing/saas-4/integrations/shopify-dark.svg'
import shopifylight from '@/assets/img/landing/saas-4/integrations/shopify-light.svg'
import vitedark from '@/assets/img/landing/saas-4/integrations/vite-dark.svg'
import vitelight from '@/assets/img/landing/saas-4/integrations/vite-light.svg'
import woocommercedark from '@/assets/img/landing/saas-4/integrations/woocommerce-dark.svg'
import woocommercelight from '@/assets/img/landing/saas-4/integrations/woocommerce-light.svg'
import { initIsotope } from '@/helpers/init-isotope'
import { useEffect } from 'react'
import { Card, CardBody, Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Testimonial = () => {
  useEffect(() => {
    initIsotope()
  }, [])
  return (
    <>
      <section className="position-relative pt-2 pt-sm-0 pt-md-2 pt-lg-3 pt-xl-4 pb-lg-4">
        <Container className="pb-2">
          <h2 className="h1 text-center">Trusted by leading companies</h2>
          <p className="fs-lg text-center pb-4 pb-lg-5 mb-2 mb-sm-3 mb-xl-4">Learn why top companies from around the globe choose us</p>
          <div className="masonry-grid row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4" data-isotope='{"layoutMode": "masonry"}'>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={envatolight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Envato" />
                <Image src={envatodark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Envato" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Streamline your workflow and save valuable time with this SaaS platform's powerful AI models, which takes care of the heavy
                    lifting and delivers top-notch results.
                  </p>
                  <Image src={avatar50} className="d-inline-block rounded-circle" width={80} alt="Avatar" />
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Emma Johnson</h3>
                    <p className="fs-sm text-body-secondary mb-0">CEO, Co-Founder</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={firefoxlight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Firefox" />
                <Image src={firefoxdark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Firefox" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great
                    service, and outstanding results.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Robert Thompson</h3>
                    <p className="fs-sm text-body-secondary mb-0">Chief Information Officer</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={magentolight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Magento" />
                <Image src={magentodark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Magento" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing
                    AI models into your application.
                  </p>
                  <Image src={avatar51} className="d-inline-block rounded-circle" width={80} alt="Avatar" />
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Christopher Davis</h3>
                    <p className="fs-sm text-body-secondary mb-0">Network Administrator</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={pingdomlight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Pingdom" />
                <Image src={pingdomdark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Pingdom" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an
                    API for seamless integration.
                  </p>
                  <Image src={avatar52} className="d-inline-block rounded-circle" width={80} alt="Avatar" />
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Samantha Grace</h3>
                    <p className="fs-sm text-body-secondary mb-0">Data Analyst</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={woocommercelight} className="d-block d-dark-mode-none mx-auto" width={165} alt="WooCommerce" />
                <Image src={woocommercedark} className="d-none d-dark-mode-block mx-auto" width={165} alt="WooCommerce" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you
                    to take your business to the next level.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">William Matthews</h3>
                    <p className="fs-sm text-body-secondary mb-0">Software Developer</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={shopifylight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Shopify" />
                <Image src={shopifydark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Shopify" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers
                    exceptional service to ensure your success.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Olivia Rodriguez</h3>
                    <p className="fs-sm text-body-secondary mb-0">Human Resources</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={laravel} className="d-block mx-auto" width={165} alt="Laravel" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and
                    accurate, dependable results.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Benjamin Smith</h3>
                    <p className="fs-sm text-body-secondary mb-0">Project Manager</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={vitelight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Vite" />
                <Image src={vitedark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Vite" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Stay ahead of the curve and leverage cutting-edge technology with this SaaS platform's unparalleled performance and impressive
                    results.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Abigail Collins</h3>
                    <p className="fs-sm text-body-secondary mb-0">Chief Technology Officer</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="masonry-grid-item">
              <Card className="border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src={angularlight} className="d-block d-dark-mode-none mx-auto" width={165} alt="Angular" />
                <Image src={angulardark} className="d-none d-dark-mode-block mx-auto" width={165} alt="Angular" />
                <CardBody className="text-center pt-1">
                  <p className="pb-3 mb-3">
                    Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides
                    excellent support and streamlines your processes.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="h5 mb-1">Elijah Brown</h3>
                    <p className="fs-sm text-body-secondary mb-0">Project Manager</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </div>
        </Container>
        <div className="d-none d-md-block">
          <span
            className="position-absolute start-0 bottom-0 w-100 z-1 d-dark-mode-none"
            style={{ height: 390, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%)' }}
          />
          <span
            className="position-absolute start-0 bottom-0 w-100 z-2 d-none d-dark-mode-block"
            style={{ height: 375, background: 'linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #121519 50.14%)' }}
          />
        </div>
        <div className="d-md-none">
          <span
            className="position-absolute start-0 bottom-0 w-100 z-1 d-dark-mode-none"
            style={{ height: 300, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%)' }}
          />
          <span
            className="position-absolute start-0 bottom-0 w-100 z-2 d-none d-dark-mode-block"
            style={{ height: 290, background: 'linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #121519 50.14%)' }}
          />
        </div>
        <div className="position-absolute start-0 bottom-0 w-100 d-flex justify-content-center z-2 pb-5 px-3 mb-3 mb-md-4 mb-lg-5">
          <Link to="" className="btn btn-outline-primary rounded-pill mb-xl-3 mb-xxl-4">
            Read more reviews
          </Link>
        </div>
      </section>
    </>
  )
}

export default Testimonial
