import saas01 from '@/assets/img/landing/saas-1/industries/01.png'
import saas02 from '@/assets/img/landing/saas-1/industries/02.png'
import saas03 from '@/assets/img/landing/saas-1/industries/03.png'
import saas04 from '@/assets/img/landing/saas-1/industries/04.png'
import { useState } from 'react'
import { Col, Container, Image, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type IndustriesType = {
  title: string
  name: string
  subTitle: string
  description: string
  image: string
}

const industrie: IndustriesType[] = [
  {
    title: 'Marketers',
    name: 'marketers-text',
    subTitle: 'Track user journey from first interaction to conversion',
    description:
      'Porttitor in mauris tellus ipsum commodo praesent nunc vel integer mi at tristique id faucibus pretium vestibulum massa nisl at massa sagittis congue ac uismod tortor dictum enim tincidunt gravida odio. Auctor arcu ante malesuada pharetra gravida nunc euismod egestas quam dolor ut vel venenatis quis egestas orci.',
    image: saas01,
  },
  {
    title: 'Agencies',
    name: 'agencies-text',
    subTitle: 'Analyze your marketing activities quickly and efficiently',
    description:
      'Phasellus sed orci, praesent sed integer egestas imperdiet morbi vitae vel diam risus in sed elit semper est malesuada venenatis egestas diam consequat sit scelerisque integer sit nisl nunc.',
    image: saas02,
  },
  {
    title: 'E-Commerce',
    name: 'ecommerce-text',
    subTitle: "Track the user's path to the order on all product interaction paths",
    description:
      'Sollicitudin et donec tincidunt arcu cras felis ipsum dolor sollicitudin. Nec purus, lobortis tristique pellentesque venenatis. Varius nulla quis morbi lectus sit dui viverra mi. Amet in diam vitae non at euismod massa orci at dis libero facilisi lacus morbi. Magna vitae ac condimentum enim vitae cras egestas elementum.',
    image: saas03,
  },
  {
    title: 'Startups',
    name: 'startups-text',
    subTitle: 'Track fast growth with important data',
    description:
      'Porttitor in mauris tellus ipsum commodo praesent nunc vel integer mi at tristique id faucibus pretium vestibulum massa nisl at massa sagittis congue ac uismod tortor dictum enim tincidunt gravida odio. Auctor arcu ante malesuada pharetra gravida nunc euismod egestas quam dolor ut vel venenatis quis egestas orci.',
    image: saas04,
  },
]

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="bg-dark border-top border-light py-2 py-sm-3 py-md-4 py-lg-5" data-bs-theme="dark">
        <Container className="py-5 my-lg-3 my-xl-4 my-xxl-5">
          <h2 className="h1 text-center text-md-start mt-lg-n3 pb-4 pb-md-5" style={{ maxWidth: 660 }}>
            Around suitable for any business, from stores to agencies
          </h2>
          <TabContainer
            defaultActiveKey={'marketers-text'}
            activeKey={industrie[activeIndex].name}
            onSelect={(key) => {
              const idx = industrie.findIndex((i) => i.name === key)
              if (idx !== -1) setActiveIndex(idx)
            }}
          >
            <Row className="pt-sm-2 pt-md-0 pt-xl-1 pt-xxl-3">
              <Col md={6} xl={5} className="offset-xl-1 order-md-2 pb-4 pb-md-0 mb-2 mb-md-0">
                <div className="binded-content" style={{ maxWidth: 526 }}>
                  {industrie.map((item, idx) => (
                    <div key={idx} className={`binded-item ${activeIndex === idx ? 'active' : ''}`}>
                      <div className="d-flex justify-content-center position-absolute top-0 start-0 w-100 h-100">
                        <div className="bg-primary rounded-5 h-100" style={{ width: '88.2%' }} />
                      </div>
                      <Image className="d-block position-relative z-2" src={item.image} alt="Image" />
                    </div>
                  ))}
                </div>
              </Col>
              <Col md={6} className="order-md-1">
                <Nav as={'ul'} className="nav-tabs flex-nowrap overflow-auto text-nowrap pb-3 mb-3 mb-xl-4" role="tablist">
                  {industrie.map((item, idx) => (
                    <NavItem as={'li'} className="mb-0" key={idx}>
                      <NavLink eventKey={item.name} className="" href={`#${item.name}`} role="tab">
                        {item.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <TabContent className="pt-lg-2 pt-xl-3">
                  {industrie.map((item, idx) => (
                    <TabPane eventKey={item.name} className="fade" id="marketers-text" role="tabpanel" key={idx}>
                      <h3 className="mb-lg-4">{item.subTitle}</h3>
                      <p className="text-body">{item.description}</p>
                      <Link className="btn btn-lg btn-link px-0 mt-n2 mt-lg-0" to="">
                        Learn more
                        <i className="ai-arrow-right ms-2" />
                      </Link>
                    </TabPane>
                  ))}
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </section>
    </>
  )
}

export default Industries
