import team01 from '@/assets/img/landing/corporate/team/01.jpg'
import team02 from '@/assets/img/landing/corporate/team/02.jpg'
import team03 from '@/assets/img/landing/corporate/team/03.jpg'
import team04 from '@/assets/img/landing/corporate/team/04.jpg'
import team05 from '@/assets/img/landing/corporate/team/05.jpg'
import team06 from '@/assets/img/landing/corporate/team/06.jpg'
import { Card, CardBody, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type SocialLink = {
  platform: string
  icon: string
  btnClass: string
}

type TeamMember = {
  image: string
  name: string
  role: string
  socials: SocialLink[]
}

const teamMembers: TeamMember[] = [
  {
    image: team03,
    name: 'Jane Cooper',
    role: 'Head of PR department',
    socials: [
      { platform: 'Instagram', icon: 'ai-instagram', btnClass: 'btn-instagram' },
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'LinkedIn', icon: 'ai-linkedin', btnClass: 'btn-linkedin' },
    ],
  },
  {
    image: team01,
    name: 'Guy Hawkins',
    role: 'Head of marketing',
    socials: [
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'X', icon: 'ai-x', btnClass: 'btn-x' },
      { platform: 'LinkedIn', icon: 'ai-linkedin', btnClass: 'btn-linkedin' },
    ],
  },
  {
    image: team02,
    name: 'Martha Winter',
    role: 'Data analyst',
    socials: [
      { platform: 'Instagram', icon: 'ai-instagram', btnClass: 'btn-instagram' },
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'LinkedIn', icon: 'ai-linkedin', btnClass: 'btn-linkedin' },
    ],
  },
  {
    image: team05,
    name: 'Robert Fox',
    role: 'CTO',
    socials: [
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'X', icon: 'ai-x', btnClass: 'btn-x' },
      { platform: 'Stack Overflow', icon: 'ai-stack-overflow', btnClass: 'btn-stack-overflow' },
    ],
  },
  {
    image: team06,
    name: 'Michelle Yang',
    role: 'CEO, Founder',
    socials: [
      { platform: 'Instagram', icon: 'ai-instagram', btnClass: 'btn-instagram' },
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'LinkedIn', icon: 'ai-linkedin', btnClass: 'btn-linkedin' },
    ],
  },
  {
    image: team04,
    name: 'Albert Flores',
    role: 'Art director',
    socials: [
      { platform: 'Facebook', icon: 'ai-facebook', btnClass: 'btn-facebook' },
      { platform: 'Behance', icon: 'ai-behance', btnClass: 'btn-behance' },
      { platform: 'Dribbble', icon: 'ai-dribbble', btnClass: 'btn-dribbble' },
    ],
  },
]

const Team = () => {
  return (
    <>
      <section className="pt-5 mt-2 mt-xl-4 mt-xxl-5">
        <Container className="pt-3 pt-sm-4 pt-lg-5 mt-xl-2 mt-xxl-3">
          <div className="fs-sm text-uppercase mb-3">Our team</div>
          <h2 className="display-6 pb-3 mb-lg-4">Team of professionals</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col">
                <Card className="card-hover border-0 rounded-5 overflow-hidden">
                  <Image src={member.image} alt={member.name} className="w-100" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                    <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50" />
                    <CardBody className="d-flex flex-column justify-content-end h-100 position-relative z-2 text-center" data-bs-theme="dark">
                      <h3 className="h5 mb-1">{member.name}</h3>
                      <p className="text-body mb-3">{member.role}</p>
                      <div className="d-flex justify-content-center">
                        {member.socials.map((social, idx) => (
                          <Link
                            key={idx}
                            className={`btn btn-icon btn-sm btn-light ${social.btnClass} rounded-circle mx-2`}
                            to=""
                            aria-label={social.platform}
                          >
                            <i className={social.icon} />
                          </Link>
                        ))}
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Team
