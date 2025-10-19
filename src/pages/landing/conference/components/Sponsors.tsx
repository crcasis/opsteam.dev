import angulardark from '@/assets/img/landing/conference/sponsors/angular-dark.svg'
import angularlight from '@/assets/img/landing/conference/sponsors/angular-light.svg'
import bootstrapdark from '@/assets/img/landing/conference/sponsors/bootstrap-dark.svg'
import bootstraplight from '@/assets/img/landing/conference/sponsors/bootstrap-light.svg'
import envatodark from '@/assets/img/landing/conference/sponsors/envato-dark.svg'
import envatolight from '@/assets/img/landing/conference/sponsors/envato-light.svg'
import laraveldark from '@/assets/img/landing/conference/sponsors/laravel-dark.svg'
import laravellight from '@/assets/img/landing/conference/sponsors/laravel-light.svg'
import magentodark from '@/assets/img/landing/conference/sponsors/magento-dark.svg'
import magentolight from '@/assets/img/landing/conference/sponsors/magento-light.svg'
import pingdomdark from '@/assets/img/landing/conference/sponsors/pingdom-dark.svg'
import pingdomlight from '@/assets/img/landing/conference/sponsors/pingdom-light.svg'
import reactdark from '@/assets/img/landing/conference/sponsors/react-dark.svg'
import reactlight from '@/assets/img/landing/conference/sponsors/react-light.svg'
import woocommercedark from '@/assets/img/landing/conference/sponsors/woocommerce-dark.svg'
import woocommercelight from '@/assets/img/landing/conference/sponsors/woocommerce-light.svg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

type SponsorType = {
  name: string
  darkLogo: string
  lightLogo: string
  description: string
}

const sponsorsData: SponsorType[] = [
  {
    name: 'Envato',
    darkLogo: envatodark,
    lightLogo: envatolight,
    description: 'Faucibus amet cursus accumsan eleifend tempus diam id duis. Mi velit nulla purus commodo non.',
  },
  {
    name: 'Angular',
    darkLogo: angulardark,
    lightLogo: angularlight,
    description: 'Nulla consequat tincidunt ut aliquet quam dignissim. Sagittis, enim libero ultrices eleifend congue.',
  },
  {
    name: 'Pingdom',
    darkLogo: pingdomdark,
    lightLogo: pingdomlight,
    description: 'Ornare leo sed gravida quam volutpat vulputate massa aliquam. Sem lacus, quam tellus duis sit pellentesque.',
  },
  {
    name: 'WooCommerce',
    darkLogo: woocommercedark,
    lightLogo: woocommercelight,
    description: 'Imperdiet nunc, mauris, sed at egestas. Massa laoreet facilisis turpis adipiscing semper venenatis ipsum.',
  },
  {
    name: 'Magento',
    darkLogo: magentodark,
    lightLogo: magentolight,
    description: 'Purus eu faucibus at vel, aliquam. Faucibus nibh odio sed elementum blandit ut sociis et.',
  },
  {
    name: 'Bootstrap',
    darkLogo: bootstrapdark,
    lightLogo: bootstraplight,
    description: 'Adipiscing ultrices risus maecenas libero donec nam. In sollicitudin nulla sagittis, neque sit ullamcorper.',
  },
  {
    name: 'Laravel',
    darkLogo: laraveldark,
    lightLogo: laravellight,
    description: 'Pharetra morbi id nibh ut at risus tortor consequat. Dictum urna vulputate quis ut facilisis turpis purus commodo.',
  },
  {
    name: 'React',
    darkLogo: reactdark,
    lightLogo: reactlight,
    description: 'Suspendisse luctus maecenas tristique urna turpis aenean est. Porttitor porta nec tincidunt ut aliquet quam.',
  },
]

const Sponsors = () => {
  return (
    <>
      <section className="bg-secondary pb-md-2 pt-lg-2 pb-lg-4 py-xl-4 py-xxl-5">
        <Container className="py-5">
          <h2 className="h1 text-center pb-sm-2 py-md-3 mt-sm-2 mb-lg-4">Sponsored by</h2>
          <SimpleBar className="mb-4 mb-lg-5 pb-3 px-3" data-simplebar>
            <Row className="row-cols-lg-4 flex-nowrap flex-lg-wrap gy-lg-5 mx-n3">
              {sponsorsData.map((sponsor, idx) => (
                <Col key={idx} style={{ minWidth: 225 }}>
                  <Image className="d-block d-dark-mode-none mb-2 mb-lg-2" src={sponsor.darkLogo} alt={`${sponsor.name} Logo`} />
                  <Image className="d-none d-dark-mode-block mb-2 mb-lg-2" src={sponsor.lightLogo} alt={`${sponsor.name} Logo`} />
                  <p className="text-body-secondary mb-2">{sponsor.description}</p>
                </Col>
              ))}
            </Row>
          </SimpleBar>
          <div className="text-center mb-2 mb-sm-3">
            <Link className="btn btn-lg btn-primary" to="">
              Become sponsor
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Sponsors
