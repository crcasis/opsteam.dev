import alpine from '@/assets/img/brands/alpine.svg'
import champion from '@/assets/img/brands/champion-dark.svg'
import deloitte from '@/assets/img/brands/deloitte-dark.svg'
import foster from '@/assets/img/brands/foster.svg'
import bootstrap from '@/assets/img/landing/web-studio/skills/bootstrap.svg'
import css3 from '@/assets/img/landing/web-studio/skills/css3.svg'
import figma from '@/assets/img/landing/web-studio/skills/figma.svg'
import python from '@/assets/img/landing/web-studio/skills/python.svg'
import { Card, CardBody, Container, Image } from 'react-bootstrap'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type SkillItem = {
  type: 'flip' | 'text'
  title?: string
  description?: string
  image: string
  brandImage?: string
}

const skills: SkillItem[] = [
  {
    type: 'flip',
    title: 'Figma',
    description: 'Figma is a convenient online service for interface development and prototyping with the ability to work together in real time.',
    image: figma,
  },
  {
    type: 'text',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui. Sed condimentum felis at pretium.',
    image: foster,
  },
  {
    type: 'flip',
    title: 'CSS3',
    description: 'Cascading Style Sheets Level 3 is the iteration of the CSS standard used in the styling and formatting of Web pages.',
    image: css3,
  },
  {
    type: 'text',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget, aliquet ut odio. Curabitur in vestibulum tellus.',
    image: champion,
  },
  {
    type: 'flip',
    title: 'Bootstrap',
    description:
      'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components.',
    image: bootstrap,
  },
  {
    type: 'text',
    description:
      'Nulla facilisi. Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem. Proin feugiat egestas dolor.',
    image: alpine,
  },
  {
    type: 'flip',
    title: 'Python',
    description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    image: python,
  },
  {
    type: 'text',
    description:
      'Suspendisse potenti. Nulla vel varius urna. Donec at libero ipsum. Nullam scelerisque tempus malesuada. Donec vehicula odio est, at faucibus purus sollicitudin ut. Fusce mollis ultrices ex sed pellentesque velit euismod.',
    image: deloitte,
  },
]

const Skill = () => {
  return (
    <>
      <section className="pt-2 py-md-4 py-lg-5 mt-2 mt-xl-4 mt-xxl-5">
        <Container className="d-flex align-items-center justify-content-between pb-4 mb-sm-2 mb-md-3">
          <h2 className="h1 mb-0">Our skills</h2>
          <div className="d-flex">
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle" id="prev-skill">
              <i className="ai-arrow-left" />
            </button>
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" id="next-skill">
              <i className="ai-arrow-right" />
            </button>
          </div>
        </Container>

        <div className="container-start">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '#prev-skill',
              nextEl: '#next-skill',
            }}
            spaceBetween={24}
            slidesPerView={'auto'}
            loop
            className="text-center"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="w-sm-auto h-auto">
                {skill.type === 'flip' ? (
                  <Card className="card-flip card-hover border-0 w-sm-auto h-100 bg-secondary rounded-5">
                    <div className="card-flip-inner mx-auto" style={{ maxWidth: 306 }}>
                      <div className="card-flip-front p-0">
                        <CardBody className="d-flex flex-column justify-content-center align-items-center h-100">
                          <Image src={skill.image} width={72} alt="" />
                        </CardBody>
                      </div>
                      <div className="card-flip-back p-0 bg-transparent">
                        <CardBody className="d-flex flex-column justify-content-center align-items-center h-100">
                          <Image src={skill.image} width={52} alt="" />
                          <p className="fs-sm pt-3 mb-0">{skill.description}</p>
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="border-0 bg-secondary h-100">
                    <CardBody className="mx-auto" style={{ maxWidth: 416 }}>
                      <p className="fs-lg mb-1">{skill.description}</p>
                      <Image src={skill.image} width={150} alt="Brand" />
                    </CardBody>
                  </Card>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Skill
