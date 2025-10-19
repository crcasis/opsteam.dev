import team01 from '@/assets/img/landing/corporate/team/01.jpg'
import team02 from '@/assets/img/landing/corporate/team/02.jpg'
import team03 from '@/assets/img/landing/corporate/team/03.jpg'
import team04 from '@/assets/img/landing/corporate/team/04.jpg'
import team05 from '@/assets/img/landing/corporate/team/05.jpg'
import team06 from '@/assets/img/landing/corporate/team/06.jpg'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type MemberType = {
  image: string
  name: string
  position: string
  socials: { icon: string; href: string; label: string }[]
}

const team: MemberType[] = [
  {
    image: team01,
    name: 'Guy Hawkins',
    position: 'Head of marketing',
    socials: [
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-x', href: '', label: 'X' },
      { icon: 'ai-linkedin', href: '', label: 'LinkedIn' },
    ],
  },
  {
    image: team02,
    name: 'Martha Winter',
    position: 'Data analyst',
    socials: [
      { icon: 'ai-instagram', href: '', label: 'Instagram' },
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-linkedin', href: '', label: 'LinkedIn' },
    ],
  },
  {
    image: team03,
    name: 'Jane Cooper',
    position: 'Head of PR department',
    socials: [
      { icon: 'ai-instagram', href: '', label: 'Instagram' },
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-linkedin', href: '', label: 'LinkedIn' },
    ],
  },
  {
    image: team04,
    name: 'Albert Flores',
    position: 'Art director',
    socials: [
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-behance', href: '', label: 'Behance' },
      { icon: 'ai-dribbble', href: '', label: 'Dribbble' },
    ],
  },
  {
    image: team05,
    name: 'Robert Fox',
    position: 'CTO',
    socials: [
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-x', href: '', label: 'X' },
      { icon: 'ai-stack-overflow', href: '', label: 'Stack Overflow' },
    ],
  },
  {
    image: team06,
    name: 'Michelle Yang',
    position: 'CEO, Founder',
    socials: [
      { icon: 'ai-instagram', href: '', label: 'Instagram' },
      { icon: 'ai-facebook', href: '', label: 'Facebook' },
      { icon: 'ai-linkedin', href: '', label: 'LinkedIn' },
    ],
  },
]

const Team = () => {
  return (
    <>
      <section className="container pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
          <Col lg={4} className="d-flex flex-column">
            <h2 className="display-2 d-none d-lg-block">Meet our team</h2>
            <h2 className="h1 d-lg-none text-center mb-0">Meet our team</h2>
            <div className="d-none d-lg-flex mt-auto mb-n3">
              <div data-aos="fade-left" data-aos-duration={700} data-aos-anchor-placement="bottom-bottom">
                <svg className="text-info" width={169} height={169} viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="84.5" cy="84.5" r="84.5" />
                </svg>
              </div>
              <div data-aos="fade-right" data-aos-duration={700} data-aos-anchor-placement="bottom-bottom">
                <svg className="text-primary" width={169} height={169} viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z" />
                </svg>
              </div>
            </div>
          </Col>

          {team.slice(0, 3).map((member, idx) => (
            <Col sm={6} md={4} key={idx}>
              <Card className="card-hover border-0 rounded-1 overflow-hidden">
                <Image src={member.image} alt={member.name} width={500} height={600} className="w-100 h-auto" />
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50" />
                  <CardBody className="d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
                    <h3 className="h5 mb-1">{member.name}</h3>
                    <p className="text-body mb-3">{member.position}</p>
                    <div className="d-flex justify-content-center">
                      {member.socials.map((s, i) => (
                        <a
                          key={i}
                          className={`btn btn-icon btn-sm btn-light rounded-circle mx-2 ${s.icon.replace('ai-', 'btn-')}`}
                          href={s.href}
                          aria-label={s.label}
                        >
                          <i className={s.icon} />
                        </a>
                      ))}
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          ))}

          <Col lg={4} className="d-none d-lg-flex flex-column justify-content-center text-center">
            <p className="lead px-3 mb-0">
              The main competencies of the team: find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              neque congue aliqua dolor do amet sint velit officia viverra arcu in rhoncus egestas lorem consequat sollicitudin.
            </p>
          </Col>
          {team.slice(3, 6).map((member, idx) => (
            <Col sm={6} md={4} key={idx}>
              <Card className="card-hover border-0 rounded-1 overflow-hidden">
                <Image src={member.image} alt={member.name} width={500} height={600} className="w-100 h-auto" />
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                  <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50" />
                  <CardBody className="d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
                    <h3 className="h5 mb-1">{member.name}</h3>
                    <p className="text-body mb-3">{member.position}</p>
                    <div className="d-flex justify-content-center">
                      {member.socials.map((s, i) => (
                        <Link
                          key={i}
                          className={`btn btn-icon btn-sm btn-light rounded-circle mx-2 ${s.icon.replace('ai-', 'btn-')}`}
                          to={s.href}
                          aria-label={s.label}
                        >
                          <i className={s.icon} />
                        </Link>
                      ))}
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          ))}
          <Col lg={4} className="d-flex flex-column justify-content-center text-center">
            <div className="mx-auto" style={{ maxWidth: 245 }}>
              <h3 className="h2 mb-4">Get to know our team better</h3>
              <Link className="btn btn-outline-primary" to="">
                About us
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Team
