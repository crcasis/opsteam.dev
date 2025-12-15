import list06 from '@/assets/img/portfolio/list/06.png'
import list08 from '@/assets/img/portfolio/list/08.png'
import list09 from '@/assets/img/portfolio/list/09.png'
import { Image } from 'react-bootstrap'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CaseStudy = {
  title: string
  description: string
  image: string
  bgColor: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Development of an application for a national bank',
    description:
      'In today\'s market, 70% of platforms are legacy. We create plans to migrate these platforms to the cloud, based on security and scalability as fundamental pillars.',
    image: list06,
    bgColor: 'bg-info',
  },
  {
    title: 'Landing page for a marketing agency Boost',
    description:
      'Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur vel magna sit aliquet viverra morbi massa mattis urna, feugiat egestas tincidunt.',
    image: list08,
    bgColor: 'bg-danger',
  },
  {
    title: 'Development of an application for a task tracker',
    description:
      'Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec.',
    image: list09,
    bgColor: '#d7e4f4',
  },
]

const Blog = () => {
  return (
    <>
      <div className="d-flex align-items-center pb-3 mb-3 mb-lg-4">
        <h2 className="h1 mb-0">More case studies</h2>
        <div className="d-flex ms-auto">
          <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="prev-project" aria-label="Prev">
            <i className="ai-arrow-left" />
          </button>
          <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="next-project" aria-label="Next">
            <i className="ai-arrow-right" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        loop
        navigation={{
          prevEl: '#prev-project',
          nextEl: '#next-project',
        }}
        breakpoints={{
          576: { slidesPerView: 2 },
        }}
        className="pb-md-4 pb-xl-5"
      >
        {caseStudies.map((study, idx) => (
          <SwiperSlide key={idx}>
            <a className="d-block position-relative" href="">
              {study.bgColor.startsWith('#') ? (
                <div className="rounded-5 position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: study.bgColor }} />
              ) : (
                <div className={`rounded-5 position-absolute top-0 start-0 w-100 h-100 ${study.bgColor}`} />
              )}
              <Image className="d-block position-relative z-2 mx-auto" src={study.image} width={636} alt={study.title} />
            </a>
            <div className="pt-4 mt-sm-2">
              <h4>
                <a href="">{study.title}</a>
              </h4>
              <p className="mb-0">{study.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Blog
