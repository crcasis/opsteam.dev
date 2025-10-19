import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import avatar15 from '@/assets/img/avatar/15.jpg'
import avatar16 from '@/assets/img/avatar/16.jpg'
import avatar17 from '@/assets/img/avatar/17.jpg'
import avatar18 from '@/assets/img/avatar/18.jpg'
import airbnbcolor from '@/assets/img/landing/saas-1/brands/airbnb-color.svg'
import airbnbgray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import airbnblight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import alpinecolor from '@/assets/img/landing/saas-1/brands/alpine-color.svg'
import alpinegray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import alpinelight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import championcolor from '@/assets/img/landing/saas-1/brands/champion-color.svg'
import championgray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'
import championlight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import fostercolor from '@/assets/img/landing/saas-1/brands/foster-color.svg'
import fostergray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import fosterlight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import klinoscolor from '@/assets/img/landing/saas-1/brands/klinos-color.svg'
import klinosgray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import klinoslight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import starcraftcolor from '@/assets/img/landing/saas-1/brands/starcraft-color.svg'
import starcraftgray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import starcraftlight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import { Card, Col, Image, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

type Logo = {
  color: string
  gray: string
  light: string
  width: number
  alt: string
}

type TestimonialType = {
  key: string
  logo: Logo
  avatar: string
  name: string
  role: string
  text: string
}

const testimonials: TestimonialType[] = [
  {
    key: 'foster',
    logo: { color: fostercolor, gray: fostergray, light: fosterlight, width: 140, alt: 'Foster' },
    avatar: avatar13,
    name: 'Lilianna Bocouse',
    role: 'Head of Marketing',
    text: `Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.`,
  },
  {
    key: 'klinos',
    logo: { color: klinoscolor, gray: klinosgray, light: klinoslight, width: 131, alt: 'Klinos' },
    avatar: avatar14,
    name: 'Darell Steward',
    role: 'Project Manager',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.`,
  },
  {
    key: 'champion',
    logo: { color: championcolor, gray: championgray, light: championlight, width: 162, alt: 'Champion' },
    avatar: avatar15,
    name: 'Annette Black',
    role: 'Lead Designer',
    text: `Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.`,
  },
  {
    key: 'airbnb',
    logo: { color: airbnbcolor, gray: airbnbgray, light: airbnblight, width: 132, alt: 'Airbnb' },
    avatar: avatar16,
    name: 'Ralph Edwards',
    role: 'CEO, Co-Founder',
    text: `Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.`,
  },
  {
    key: 'starcraft',
    logo: { color: starcraftcolor, gray: starcraftgray, light: starcraftlight, width: 158, alt: 'StarCraft' },
    avatar: avatar17,
    name: 'Jane Cooper',
    role: 'Strategic Advisor',
    text: `Morbi at fermentum enim, pulvinar malesuada quam. Morbi sit amet tellus luctus, vulputate arcu nec, consectetur diam. Proin est lacus, interdum ac aliquam sit amet, aliquam eget leo. Donec condimentum erat quam, tincidunt tempus augue consectetur a. Donec quis purus dictum, iaculis mi fringilla.`,
  },
  {
    key: 'alpine',
    logo: { color: alpinecolor, gray: alpinegray, light: alpinelight, width: 146, alt: 'Alpine' },
    avatar: avatar18,
    name: 'Albert Flores',
    role: 'Business Analyst',
    text: `Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla. Aliquam congue risus tortor, sed posuere leo faucibus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut dui ante, rutrum eget vehicula sed.`,
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5">
        <TabContainer defaultActiveKey={'foster'}>
          <h2 className="text-center pt-5 pb-3 mb-lg-4 mt-lg-3 mt-xl-4 mt-xxl-5">More than 2,000 clients using Around to analyze data</h2>
          <div className="overflow-auto pb-3 pb-xl-4 mb-3 mb-lg-4">
            <Nav as={'ul'} className="nav-tabs justify-content-between flex-nowrap text-nowrap p-0 m-0" role="tablist" style={{ minWidth: 1000 }}>
              {testimonials.map((item, idx) => (
                <NavItem className="mb-0" key={idx}>
                  <NavLink eventKey={item.key} href="#foster" data-bs-toggle="tab" role="tab">
                    <div className="swap-image">
                      <Image className="swap-to" src={item.logo.color} width={item.logo.width} alt={item.logo.alt} />
                      <div className="swap-from">
                        <Image className="d-dark-mode-none" src={item.logo.gray} width={item.logo.width} alt={item.logo.alt} />
                        <Image className="d-none d-dark-mode-block" src={item.logo.light} width={item.logo.width} alt={item.logo.alt} />
                      </div>
                    </div>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <Card className="border-0 bg-secondary">
            <TabContent className="card-body px-lg-0 py-lg-5">
              {testimonials.map((item, idx) => (
                <TabPane eventKey={item.key} className="fade" id="foster" role="tabpanel" key={idx}>
                  <Row className="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
                    <Col md={4} lg={3} className="offset-lg-1 mb-3 mb-md-0">
                      <Image className="d-block rounded-circle mb-3" src={item.avatar} width={86} alt="Lilianna Bocouse" />
                      <h4 className="mb-0">{item.name}</h4>
                      <p className="fs-lg text-body-secondary mb-0">{item.role}</p>
                    </Col>
                    <Col md={8} lg={7}>
                      <p className="text-dark lead mb-0">“{item.text}”</p>
                    </Col>
                  </Row>
                </TabPane>
              ))}
            </TabContent>
          </Card>
        </TabContainer>
      </section>
    </>
  )
}

export default Testimonial
