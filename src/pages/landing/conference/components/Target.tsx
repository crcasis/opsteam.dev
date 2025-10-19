import { Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type AudienceType = {
  id: string
  title: string
  description: string
  points: string[]
}

const audienceData: AudienceType[] = [
  {
    id: 'designers',
    title: 'UI/UX Designers',
    description:
      'Ipsum sed nascetur dolor accumsan integer phasellus tincidunt. Nulla quisque pellentesque adipiscing placerat integer feugiat facilisi elit mi. Dictum nunc lacinia vel molestie laoreet aliquet ridiculus diam justo viverra.',
    points: [
      'At donec auctor quam ut scelerisque dui.',
      'Mollis sed fringilla placerat lobortis viverra aliquam ut nisl nisi.',
      'Odio ullamcorper in praesent venenatis non non sed pharetra dipise.',
      'Lobortis dui nibh at condimentum.',
    ],
  },
  {
    id: 'developers',
    title: 'Developers',
    description:
      'Etiam sed porta massa. In sapien metus, lobortis eu tortor id, maximus commodo enim. Phasellus feugiat mi vitae enim cursus, ut scelerisque augue scelerisque. Pellentesque habitant morbi tristique senectus et netus.',
    points: [
      'Donec imperdiet dolor at leo sodales.',
      'Fringilla placerat lobortis viverra aliquam ut nisl nisi.',
      'Lobortis ullamcorper in praesent venenatis non non sed pharetra dipise.',
      'Mollis dui nibh at condimentum.',
    ],
  },
  {
    id: 'managers',
    title: 'Managers',
    description:
      'Ipsum sed nascetur dolor accumsan integer phasellus tincidunt. Nulla quisque pellentesque adipiscing placerat integer feugiat facilisi elit mi. Dictum nunc lacinia vel molestie laoreet aliquet ridiculus diam justo viverra.',
    points: [
      'At donec auctor quam ut scelerisque dui.',
      'Mollis sed fringilla placerat lobortis viverra aliquam ut nisl nisi.',
      'Odio ullamcorper in praesent venenatis non non sed pharetra dipise.',
      'Lobortis dui nibh at condimentum.',
    ],
  },
  {
    id: 'marketers',
    title: 'Marketers',
    description:
      'Etiam sed porta massa. In sapien metus, lobortis eu tortor id, maximus commodo enim. Phasellus feugiat mi vitae enim cursus, ut scelerisque augue scelerisque. Pellentesque habitant morbi tristique senectus et netus.',
    points: [
      'Donec imperdiet dolor at leo sodales.',
      'Fringilla placerat lobortis viverra aliquam ut nisl nisi.',
      'Lobortis ullamcorper in praesent venenatis non non sed pharetra dipise.',
      'Mollis dui nibh at condimentum.',
    ],
  },
]

const Target = () => {
  return (
    <>
      <section className="container pt-5 mt-xl-3 mt-xxl-5">
        <TabContainer defaultActiveKey={'designers'}>
          <Row className="pt-1 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2">
            <Col lg={4}>
              <h2 className="h1 pb-1 pb-sm-2 mb-4">Who may attend Conference?</h2>
            </Col>
            <Col lg={8} xl={7} className="offset-xl-1">
              <div className="ps-lg-4 ps-xl-0">
                <div data-simplebar>
                  <Nav as={'ul'} className="nav-tabs flex-nowrap mb-2" role="tablist">
                    {audienceData.map((item, idx) => (
                      <NavItem key={idx}>
                        <NavLink eventKey={item.id} className="text-nowrap px-4 px-lg-3 px-xl-4" href="#designers">
                          {item.title}
                        </NavLink>
                      </NavItem>
                    ))}
                  </Nav>
                </div>
                <TabContent className="py-2 pb-md-0 pt-sm-3 pt-lg-4 mb-4 mb-md-5">
                  {audienceData.map((item, idx) => (
                    <TabPane eventKey={item.id} className="fade " key={idx} id="designers" role="tabpanel">
                      <p className="fs-xl mb-4">{item.description}</p>
                      <ul className="fs-xl mb-0">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="mb-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </TabPane>
                  ))}
                </TabContent>
                <Link className="btn btn-lg btn-primary w-100 w-sm-auto" to="#tickets" data-scroll data-scroll-offset={120}>
                  Buy access pass
                  <i className="ai-arrow-down ms-2 me-n2" />
                </Link>
              </div>
            </Col>
          </Row>
        </TabContainer>
      </section>
    </>
  )
}

export default Target
