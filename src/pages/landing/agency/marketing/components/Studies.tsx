import studies01 from '@/assets/img/landing/marketing-agency/case-studies/01.jpg'
import studies02 from '@/assets/img/landing/marketing-agency/case-studies/02.jpg'
import studies03 from '@/assets/img/landing/marketing-agency/case-studies/03.jpg'
import { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CaseStudy = {
  image: string
  title: string
  description: string
  stats: { label: string; value: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    image: studies01,
    title: 'Growth of subscribers and sales on social networks for the eco shoe brand',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.',
    stats: [
      { label: 'leads for $ 2.1', value: '1000+' },
      { label: 'revenue increase', value: '160%' },
      { label: 'sales channels', value: '12+' },
    ],
  },
  {
    image: studies02,
    title: 'Business strategy for a brand of vintage bags and accessories',
    description:
      'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate scelerisque.',
    stats: [
      { label: 'leads for $ 2.1', value: '1200+' },
      { label: 'revenue increase', value: '130%' },
      { label: 'sales channels', value: '14+' },
    ],
  },
  {
    image: studies03,
    title: 'Growth of subscribers and sales on social networks for the eco cosmetics',
    description:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames pulvinar elit.',
    stats: [
      { label: 'leads for $ 2.1', value: '900+' },
      { label: 'revenue increase', value: '150%' },
      { label: 'sales channels', value: '10+' },
    ],
  },
]

const Studies = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <Row className="align-items-center pt-md-4 mt-2 mt-sm-3">
          <Col md={6} className="position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <div
              className="d-none d-xxl-block position-absolute"
              style={{ width: 861, height: 719, top: 50, left: '-260px' }}
              data-aos="zoom-in"
              data-aos-duration={700}
              data-aos-offset={400}
            >
              <svg
                className="text-primary opacity-10"
                width={861}
                height={719}
                viewBox="0 0 861 719"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25.1985 361.161C26.6142 363.592 28.4042 365.854 30.3902 367.846L115.89 453.613C117.366 455.093 119.008 456.457 120.69 457.697C220.882 531.542 166.267 694.09 321.314 716.256C481 739.09 730.799 588.084 806.496 453.151C844.188 385.962 885.87 273.92 840.453 199.651C808.854 147.97 742.627 142.437 686.285 142.442C616.832 142.453 556.116 167.459 491.294 135.468C449.5 114.831 426.769 82.5406 392.702 51.7928C206.459 -116.148 -88.0611 166.69 25.1985 361.161Z" />
              </svg>
            </div>
            <div className="binded-content z-2">
              {caseStudies.map((item, idx) => (
                <div className={`binded-item ${activeIndex === idx ? 'active' : ''}`} id="image1" key={idx}>
                  <Image className="d-block rounded-5" src={item.image} alt="Image" />
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} xl={5} className="offset-xl-1">
            <div className="ps-md-4 ps-xl-0">
              <div className="d-flex align-items-center ms-n3 pb-3 mb-sm-2 mb-xl-4">
                <button className="btn btn-icon btn-link" type="button" id="prev-case-study" aria-label="Prev">
                  <i className="ai-arrow-left" />
                </button>
                <div className="text-center text-nowrap mx-3" id="slides-count" style={{ width: 33 }} />
                <button className="btn btn-icon btn-link" type="button" id="next-case-study" aria-label="Next">
                  <i className="ai-arrow-right" />
                </button>
              </div>
              <Swiper
                spaceBetween={40}
                autoHeight
                modules={[Pagination, Navigation]}
                pagination={{
                  el: '#slides-count',
                  type: 'fraction',
                }}
                navigation={{
                  prevEl: '#prev-case-study',
                  nextEl: '#next-case-study',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {caseStudies.map((study, idx) => (
                  <SwiperSlide className="pb-1" data-swiper-binded="#image1" key={idx}>
                    <h3 className="h4">{study.title}</h3>
                    <p className="pb-3 mb-3 mb-xl-4">{study.description}</p>
                    <div
                      className="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2"
                      style={{ maxWidth: 440 }}
                    >
                      {study.stats.map((stat, i) => (
                        <div key={i} className="pe-4">
                          <div className="h2 mb-1">{stat.value}</div>
                          <div className="fs-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="d-sm-flex">
                      <Link className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" to="">
                        Read a full story
                      </Link>
                      <Link className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" to="">
                        All case studies
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Studies
