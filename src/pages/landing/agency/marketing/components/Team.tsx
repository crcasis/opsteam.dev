import team01 from '@/assets/img/landing/creative-agency/team/01.jpg'
import team02 from '@/assets/img/landing/creative-agency/team/02.jpg'
import team03 from '@/assets/img/landing/creative-agency/team/03.jpg'
import team04 from '@/assets/img/landing/creative-agency/team/04.jpg'
import team05 from '@/assets/img/landing/creative-agency/team/05.jpg'
import team06 from '@/assets/img/landing/creative-agency/team/06.jpg'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Social = {
  platform: string
  icon: string
}

type TeamMember = {
  name: string
  role: string
  image: string
  socials: Social[]
}

const teamData: TeamMember[] = [
  {
    name: 'Alisa Black',
    role: 'Head of Marketing',
    image: team02,
    socials: [
      { platform: 'Instagram', icon: 'ai-instagram' },
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'LinkedIn', icon: 'ai-linkedin' },
    ],
  },
  {
    name: 'Guy Hawkins',
    role: 'President of Sales',
    image: team01,
    socials: [
      { platform: 'X', icon: 'ai-x' },
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'Instagram', icon: 'ai-instagram' },
    ],
  },
  {
    name: 'Robert Fox',
    role: 'Web Designer',
    image: team06,
    socials: [
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'Behance', icon: 'ai-behance' },
      { platform: 'Dribbble', icon: 'ai-dribbble' },
    ],
  },
  {
    name: 'Jane Cooper',
    role: 'Marketing Coordinator',
    image: team04,
    socials: [
      { platform: 'Instagram', icon: 'ai-instagram' },
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'LinkedIn', icon: 'ai-linkedin' },
    ],
  },
  {
    name: 'Cody Fisher',
    role: 'SMM Specialist',
    image: team03,
    socials: [
      { platform: 'X', icon: 'ai-x' },
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'Instagram', icon: 'ai-instagram' },
    ],
  },
  {
    name: 'Jacob Jones',
    role: 'Web Designer',
    image: team05,
    socials: [
      { platform: 'Facebook', icon: 'ai-facebook' },
      { platform: 'Behance', icon: 'ai-behance' },
      { platform: 'Dribbble', icon: 'ai-dribbble' },
    ],
  },
]

const Team = () => {
  return (
    <>
      <section className="position-relative pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="position-absolute w-100 start-0 bottom-0 overflow-hidden">
          <div className="text-primary opacity-10" style={{ width: 3840, height: 250 }}>
            <svg width={3840} height={250} viewBox="0 0 3840 250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3840,32.1V250H0V32.1c72.5,0,112.1-17.4,271.6,5.5c199.3,28.5,206,34.7,378.4,29c172.4-5.7,287.8-34.5,418.9-34.5S1317,55.2,1430,48.4c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6c68.4,0.1,166.7,14,223.1,23.4c84.8,6.6,128.1,27.8,288.5,43.5c199.8,19.5,156.2,5.5,328.6-0.2c172.4-5.7,287.8-34.5,418.9-34.5c131.1,0,248.1,23.1,361.1,16.3c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6C3718.2,0,3800.9,11.2,3840,32.1z" />
            </svg>
          </div>
        </div>
        <Container className="position-relative z-2 pb-3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-md-3 mt-xxl-2 mb-3 mb-lg-4">
          <div className="text-center mx-auto" style={{ maxWidth: 460 }}>
            <h2 className="h1">We are all passionate about what we do</h2>
            <svg
              className="d-inline-block heartbeat text-danger"
              width={52}
              height={38}
              viewBox="0 0 52 38"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52,6.3c0.8-12.6-18.6-4-24.8,1.6c-0.4,0.4-1.1,0.4-1.5,0.1C9.9-2.7-2,1.5,0.3,10c1.5,5.6,16.2,20.4,25.5,27.7c0.4,0.3,1,0.3,1.4,0C36.7,29.5,51.2,19.1,52,6.3z" />
            </svg>
          </div>
        </Container>
        <div className="container-start pe-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            loop
            navigation={{ prevEl: '#prev-feature', nextEl: '#next-feature' }}
          >
            {teamData.map((member, idx) => (
              <SwiperSlide className="w-auto" key={idx}>
                <div className="card-hover text-center" style={{ maxWidth: 306 }}>
                  <Image className="d-block rounded-5 mb-4" src={member.image} alt="Image" />
                  <h3 className="h5 mb-1">{member.name}</h3>
                  <p className="text-body-secondary mb-2">{member.role}</p>
                  <div className="d-none d-lg-flex nav justify-content-center opacity-0">
                    {member.socials.map((item, idx) => (
                      <Link className="nav-link btn btn-icon btn-sm fs-sm fw-normal me-1" key={idx} to="" aria-label="Instagram">
                        <i className={item.icon} />
                      </Link>
                    ))}
                  </div>
                  <div className="d-lg-none nav justify-content-center">
                    {member.socials.map((item, idx) => (
                      <Link key={idx} className="nav-link btn btn-icon btn-sm fs-sm fw-normal me-1" to="" aria-label={item.platform}>
                        <i className={item.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Team
