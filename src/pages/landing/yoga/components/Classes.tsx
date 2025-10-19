import beginners from '@/assets/img/landing/yoga-studio/classes/beginners.jpg'
import fly from '@/assets/img/landing/yoga-studio/classes/fly-yoga.jpg'
import forpregnant from '@/assets/img/landing/yoga-studio/classes/for-pregnant.jpg'
import healthy from '@/assets/img/landing/yoga-studio/classes/healthy-back.jpg'
import relax from '@/assets/img/landing/yoga-studio/classes/relax-yoga.jpg'
import stretching from '@/assets/img/landing/yoga-studio/classes/stretching.jpg'
import { Col, Image, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type ClassFeature = {
  icon: string
  title: string
  description: string
}

type YogaClass = {
  id: string
  name?: string
  title: string
  description: string
  image: string
  features: ClassFeature[]
}

const navItem: YogaClass[] = [
  {
    id: 'beginners',
    name: 'Beginners',
    title: 'Yoga for beginners',
    description:
      'Purus magna lectus feugiat arcu tellus vitae urna neque, eu velit in vulputate sodales ut tellus amet lorem sit consectetur quisque justo laoreet proin.',
    image: beginners,
    features: [
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-cafe', title: 'Lounge cafe', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
  {
    id: 'stretching',
    name: 'Stretching',
    title: 'Stretching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus nec nunc bibendum facilisis pellentesque ut eros. Praesent bibendum sed mi aliquet tempus.',
    image: stretching,
    features: [
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-cafe', title: 'Lounge cafe', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
  {
    id: 'fly-yoga',
    title: 'Fly-yoga',
    name: 'Fly-yoga',
    description:
      'Varius purus dui nunc faucibus mauris iaculis tortor enim cursus quisque eu, vel amet massa suscipit cursus sit mattis quis magnis dignissim dui fames tortor amet quis.',
    image: fly,
    features: [
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-rug', title: 'Free rugs', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
  {
    id: 'for-pregnant',
    title: 'For pregnant',
    name: 'For pregnant',
    description:
      'At duis est ante tortor, dictum dictumst nisl erat. Tellus erat pharetra eget vestibulum. Netus eu sit cursus et vehicula porttitor nulla turpis a. In volutpat at orci.',
    image: forpregnant,
    features: [
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-cafe', title: 'Lounge cafe', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
  {
    id: 'healthy-back',
    title: 'Healthy back',
    name: 'Healthy back',
    description:
      'Facilisi tempus pharetra, egestas dolor. Nulla lorem interdum cursus habitasse. Morbi aliquam, mauris, varius nulla tortor ut nullam. Est eu eu eget fames leo nisl est.',
    image: healthy,
    features: [
      { icon: 'ai-cafe', title: 'Lounge cafe', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
  {
    id: 'relax-yoga',
    title: 'Relax yoga',
    name: 'Relax yoga',
    description:
      'Aliquam risus, leo mattis commodo id pretium. In sapien, lacus, cursus id vulputate. Pellentesque quis et posuere maecenas sed aenean quisque ut. Pellentesque sed at.',
    image: relax,
    features: [
      { icon: 'ai-towel', title: 'Changing rooms', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-cafe', title: 'Lounge cafe', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-sofa', title: 'Bright halls', description: 'Neque, blandit consectetur viverra placerat ante.' },
      { icon: 'ai-spa', title: 'Spa area', description: 'Neque, blandit consectetur viverra placerat ante.' },
    ],
  },
]

const Classes = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <TabContainer defaultActiveKey={'beginners'}>
          <h2 className="h1 text-center pt-2 pt-sm-3">Our classes</h2>
          <p className="text-center pb-3 mb-3 mb-lg-4">Whether you are a beginner or an experienced yoga</p>
          <Nav
            as={'ul'}
            className="nav-tabs flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-3 mb-3 mb-lg-4"
            role="tablist"
            style={{ maxWidth: 892 }}
          >
            {navItem.map((item, idx) => (
              <NavItem key={idx} as={'li'} className="mb-0">
                <NavLink eventKey={item.id} href={`#${item.id}`} data-bs-toggle="tab" role="tab">
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent>
            {navItem.map((item, idx) => (
              <TabPane key={idx} eventKey={item.id} className="fade" id={item.id} role="tabpanel">
                <Row className="align-items-lg-center">
                  <Col md={6} className="pb-4 pb-md-0 mb-2 mb-md-0">
                    <Image className="rounded-5" src={item.image} alt={item.title} />
                  </Col>
                  <Col md={6} lg={5} xl={4} className="offset-lg-1">
                    <div className="ps-md-4 ps-lg-0">
                      <h2 className="mb-xl-4">{item.title}</h2>
                      <p className="pb-3 mb-3 mb-xl-4">{item.description}</p>
                      <Row className="row-cols-2 g-4 pb-2 pb-xl-0 mb-4 mb-xl-5">
                        {item.features.map((feature, idx) => (
                          <Col key={idx}>
                            <i className={`${feature.icon} d-block h2 text-primary fw-normal pb-2 mb-1`} />
                            <h3 className="h6 mb-2">{feature.title}</h3>
                            <p className="fs-sm mb-0">{feature.description}</p>
                          </Col>
                        ))}
                      </Row>
                      <Link className="btn btn-primary w-100 w-sm-auto" to="">
                        Try a free lesson
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            ))}
          </TabContent>
        </TabContainer>
      </section>
    </>
  )
}

export default Classes
