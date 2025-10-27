import aws from '@/assets/img/landing/opsteam/skills/aws.png'
import azure from '@/assets/img/landing/opsteam/skills/azure.png'
import gcp from '@/assets/img/landing/opsteam/skills/gcp.png'
import githubActions from '@/assets/img/landing/opsteam/skills/github-actions.png'
import azureDevOps from '@/assets/img/landing/opsteam/skills/azure-devops.png'
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
    description: 'Our AWS Cloud Architect builds and deploys infrastructure as code with HA and CI/CD pipelines.',
    image: aws,
  },
  {
    type: 'text',
    description:
      'Build and scale a Kubernetes platform with HA and CI/CD pipelines. The infrastructure has been fully automated using managed services - SKS - Secure Kubernetes Service, DBaaS and Terraform.',
    image: aws,
  },
  {
    type: 'flip',
    title: 'Azure',
    description: 'Setting up an infrastructure based on AKS (Kubernetes) and microservices with HA and security as the foundation.',
    image: azure,
  },
  {
    type: 'text',
    description:
      'We have GCP-focused DevOps that have developed PaaS solutions, with services such as Cloud Functions, App Engine for APIs, SQL databases, Vertex AI, and BigQuery for datasets.',
    image: gcp,
  },
  {
    type: 'flip',
    title: 'Multi-Cloud',
    description: 'Providing multi-cloud solutions is important to Opsteam, we develop multi-tenancy solutions in cloud environments such as Azure, AWS, and GCP',
    image: aws,
  },
  {
    type: 'text',
    description:
      'Using Terraform is the best solution for infrastructure as code. We have experience with Terragrunt and modules to build and manage complex infrastructures.',
    image: aws,
  },
  {
    type: 'flip',
    title: 'Automation',
    description: 'Scripting and automation is a key aspect of our work. We use Python, bash, and Go to build and manage our infrastructure.',
    image: githubActions,
  },
  {
    type: 'text',
    description:
      'Pipelines automation - We use GitHub Actions, GitLab Pipelines, and Jenkins to execute pipelines for our infrastructure and deploy our applications.',
    image: azureDevOps,
  },
]

const Skill = () => {
  return (
    <>
      <section className="py-5 my-2 my-lg-3 my-xl-4 my-xxl-5">
        <Container className="d-flex align-items-center justify-content-between pt-sm-3 pt-md-4 pt-xl-5 pb-4 mb-sm-2 mb-md-3">
          <h2 className="h1 mb-0">Our skills</h2>
          <div className="d-flex gap-3">
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle" id="prev-skill">
              <i className="ai-arrow-left" />
            </button>
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle" id="next-skill">
              <i className="ai-arrow-right" />
            </button>
          </div>
        </Container>

        <div className="container-start pb-2 pb-sm-3 pb-md-4 pb-lg-5">
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
                        <CardBody className="d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 opacity-100">
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
