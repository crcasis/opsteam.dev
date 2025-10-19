import img1 from '@/assets/img/landing/creative-agency/team/01.jpg'
import img2 from '@/assets/img/landing/creative-agency/team/02.jpg'
import img3 from '@/assets/img/landing/creative-agency/team/03.jpg'
import img4 from '@/assets/img/landing/creative-agency/team/04.jpg'
import img5 from '@/assets/img/landing/creative-agency/team/05.jpg'
import img6 from '@/assets/img/landing/creative-agency/team/06.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Social = {
  platform: 'facebook' | 'instagram' | 'dribbble' | 'behance' | 'stack-overflow' | 'x' | 'google'
}

type Member = {
  name: string
  role: string
  class: string
  image: string
  socials: Social[]
}

const team: Member[] = [
  {
    name: 'Nick Black',
    role: 'Web Designer',
    image: img1,
    class: 'mb-xl-3 me-sm-1 pe-xl-3',
    socials: [{ platform: 'facebook' }, { platform: 'dribbble' }, { platform: 'stack-overflow' }],
  },
  {
    name: 'Emilia Denver',
    role: 'Identity Designer',
    image: img2,
    socials: [{ platform: 'facebook' }, { platform: 'instagram' }, { platform: 'behance' }],
    class: 'mb-xl-3 ms-sm-1 ps-xl-3',
  },
  {
    name: 'Jane Cooper',
    role: 'Marketing Coordinator',
    image: img3,
    socials: [{ platform: 'facebook' }, { platform: 'x' }, { platform: 'google' }],
    class: 'mb-xl-3 me-sm-1 pe-xl-3',
  },
  {
    name: 'Jenny Wilson',
    role: 'Web Designer',
    image: img4,
    socials: [{ platform: 'facebook' }, { platform: 'dribbble' }, { platform: 'behance' }],
    class: 'mb-xl-3 ms-sm-1 ps-xl-3',
  },
  {
    name: 'Robert Fox',
    role: 'Graphic Designer',
    image: img5,
    socials: [{ platform: 'instagram' }, { platform: 'dribbble' }, { platform: 'behance' }],
    class: 'mb-xl-3 me-sm-1 pe-xl-3',
  },
  {
    name: 'Jacob Jones',
    role: 'Branding Designer',
    image: img6,
    socials: [{ platform: 'facebook' }, { platform: 'x' }, { platform: 'behance' }],
    class: 'mb-xl-3 ms-sm-1 ps-xl-3',
  },
]

const Team = () => {
  return (
    <>
      <section className="container pt-2 pt-xxl-3 pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <Row className="pb-md-3">
          <Col md={4} className="mb-2 mb-sm-3 mb-md-4 pb-2" style={{ marginTop: '-120px' }}>
            <div className="position-sticky top-0" style={{ paddingTop: 120 }}>
              <h2 className="display-3 mb-0 mb-md-3 pb-lg-3">Meat our creative team</h2>
              <Link className="btn btn-lg btn-link px-0" to="">
                View all 16 members
                <i className="ai-arrow-right ms-2" />
              </Link>
            </div>
          </Col>
          <Col md={8}>
            <Row className="row-cols-1 row-cols-sm-2 g-4">
              {team.map((member, index) => (
                <Col key={index}>
                  <div className={`card-hover pb-3 mb-lg-2 ${member.class}`}>
                    <div className="position-relative">
                      <Image src={member.image} alt={member.name} className="img-fluid" />
                      <div className="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
                        {member.socials.map((s, i) => (
                          <Link
                            key={i}
                            className={`btn btn-light btn-icon btn-sm btn-${s.platform} rounded-circle mx-2`}
                            to=""
                            aria-label={s.platform}
                          >
                            <i className={`ai-${s.platform}`} />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="border-bottom pt-4 pb-3">
                      <h3 className="h4 mb-2">{member.name}</h3>
                      <span className="fs-lg text-body-secondary">{member.role}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Team
