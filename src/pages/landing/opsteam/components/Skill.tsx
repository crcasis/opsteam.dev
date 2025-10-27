import aws from '@/assets/img/landing/opsteam/skills/aws.png'
import azure from '@/assets/img/landing/opsteam/skills/azure.png'
import gcp from '@/assets/img/landing/opsteam/skills/gcp.png'
import githubActions from '@/assets/img/landing/opsteam/skills/github-actions.png'
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
    title: 'AWS',
    description: 'Our AWS Cloud Architect build and deploy infrastructure as code with HA and CI/CD pipelines. ',
    image: aws,
  },
  {
    type: 'text',
    description:
      ' Build and scale a kubernetes platform with HA and CI/CD pipelines. The infrastructure has been fully automated using managed services - SKS - Secure Kubernetes Service, DBaaS and terraform.',
    image: aws,
  },
  {
    type: 'flip',
    title: 'Azure',
    description: 'Setting up an infrastructure based on AKS (Kubernetes) and microservices was the client\'s requirement. Using HA and security as the foundation of our team.',
    image: azure,
  },
  {
    type: 'text',
    description:
      'We have GCP-focused devops that have developed PaaS solutions, with services such as Cloud Functions, App Engine for APIs, SQL databases, Vertex AI, and BigQuery for datasets.',
    image: gcp,
  },
  {
    type: 'flip',
    title: 'Alpega gmbh',
    description:
      'Providing multi-cloud solutions is important to Opsteam, we develop multi-tenancy solutions in cloud environments such as Azure, AWS and GCP',
    image: aws,
  },
  {
    type: 'text',
    description:
      'Using terraform is the best solution for infrastructure as code. We have experiencie with terragrunt and modules to be able to build and manage complex infrastructures.',
    image: aws,
  },
  {
    type: 'flip',
    title: 'Automation',
    description: 'Scripting and automation is a key aspect of our work. We use Python, bash and go to build and manage our infrastructure.',
    image: githubActions,
  },
  {
    type: 'text',
    description:
      'Pipelines automation - We use github actions, gitlab pipelines and jenkins to execute pipelines for our infrastructure and deploy our applications.',
    image: aws,
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
