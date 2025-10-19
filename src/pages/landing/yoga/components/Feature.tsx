import halls from '@/assets/img/landing/yoga-studio/features/bright-halls.jpg'
import room from '@/assets/img/landing/yoga-studio/features/changing-room.jpg'
import flower from '@/assets/img/landing/yoga-studio/features/flower.svg'
import lessons from '@/assets/img/landing/yoga-studio/features/free-lessons.jpg'
import rugs from '@/assets/img/landing/yoga-studio/features/free-rugs.jpg'
import cafe from '@/assets/img/landing/yoga-studio/features/lounge-cafe.jpg'
import area from '@/assets/img/landing/yoga-studio/features/spa-area.jpg'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FeatureType = {
  title: string
  description: string
  icon?: string
  bgImage?: string
  isHighlight?: boolean
}

const features: FeatureType[] = [
  {
    title: 'Spa area',
    description: 'Orci purus, in tellus sit bibendum scelerisque adipiscing venenatis.',
    icon: 'ai-spa',
    bgImage: area,
  },
  {
    title: 'Changing room',
    description: 'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
    icon: 'ai-towel',
    bgImage: room,
  },
  {
    title: 'Free lessons',
    description: 'Nisi vestibulum quam amet, egestas aliquam cursus mauris dignissim tellus.',
    icon: 'ai-flower',
    bgImage: lessons,
  },
  {
    title: 'Lounge cafe',
    description: 'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
    icon: 'ai-cafe',
    bgImage: cafe,
  },
  {
    title: 'Bright halls',
    description: 'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
    icon: 'ai-sofa',
    bgImage: halls,
  },
  {
    title: 'Free rugs',
    description: 'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
    icon: 'ai-rug',
    bgImage: rugs,
  },
  {
    title: 'Get started a free trial',
    description: 'The best yoga practices, adapted at a high level to the needs of the modern pace of life.',
    isHighlight: true,
    bgImage: flower,
  },
]

const Feature = () => {
  return (
    <>
      <section className="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Container className="pt-2 pt-sm-4 pt-lg-5 mt-md-3 mt-lg-0">
          <Row className="pb-3 mb-3 mb-lg-4">
            <Col lg={11} className="d-sm-flex justify-content-between text-center text-sm-start">
              <h2 className="h1 mb-sm-0 mx-auto me-sm-4" style={{ maxWidth: 440 }}>
                Advantages that make us a unique place
              </h2>
              <p className="pt-2 mb-0 mx-auto" style={{ maxWidth: 420 }}>
                The best yoga and meditation practices, adapted a ta high level to the needs of the modern pace of life.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="container-start pe-0">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={24}
            loop
            navigation={{ prevEl: '#prev-feature', nextEl: '#next-feature' }}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx} className="w-auto h-auto">
                <Card className={`border-0 card-hover h-100 py-4 ${feature.isHighlight ? 'bg-primary' : 'bg-secondary'}`} style={{ maxWidth: 306 }}>
                  {feature.bgImage && !feature.isHighlight && (
                    <div
                      className="opacity-0 position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center rounded-5"
                      style={{ backgroundImage: `url(${feature.bgImage})` }}
                    />
                  )}
                  {feature.isHighlight && feature.bgImage && (
                    <Image className="position-absolute top-0 start-0" src={feature.bgImage} width={306} alt="Decor" />
                  )}
                  <CardBody className="text-center position-relative z-2">
                    {feature.icon && !feature.isHighlight && <i className={`${feature.icon} h1 fw-normal text-primary d-block mb-4`} />}
                    <h3 className={`${feature.isHighlight ? 'text-white' : ''}`}>{feature.title}</h3>
                    <p className={`card-text ${feature.isHighlight ? 'text-white fs-sm' : ''}`}>{feature.description}</p>
                    {feature.isHighlight && (
                      <Link className="btn btn-light text-primary" to="">
                        Try a free lesson
                      </Link>
                    )}
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <Container className="d-flex justify-content-center justify-content-sm-end pt-3 mt-3 mt-lg-4">
            <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-feature" aria-label="Prev">
              <i className="ai-arrow-left" />
            </button>
            <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-feature" aria-label="Next">
              <i className="ai-arrow-right" />
            </button>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Feature
