import res01 from '@/assets/img/landing/saas-2/resources/01.jpg'
import res02 from '@/assets/img/landing/saas-2/resources/02.jpg'
import res03 from '@/assets/img/landing/saas-2/resources/03.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type ResourceType = {
  image: string
  title: string
  description: string
  shares: number
  comments: number
  time: string
  category: string
}

const resources: ResourceType[] = [
  {
    image: res01,
    title: 'Analytics for the HR department for the Klinos company',
    description:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra molestie fames...',
    shares: 6,
    comments: 12,
    time: '12 hours ago',
    category: 'Analytics',
  },
  {
    image: res02,
    title: 'Analytics for the Marketing department of Fast Inc.',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Laoreet sem adipiscing sollicitudin erat massa...',
    shares: 10,
    comments: 19,
    time: '3 days ago',
    category: 'Analytics',
  },
  {
    image: res03,
    title: 'Research data structuring and presentation in diagrams',
    description:
      'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra...',
    shares: 21,
    comments: 37,
    time: '5 days ago',
    category: 'Analytics',
  },
]

const Resources = () => {
  return (
    <>
      <section className="container py-5 my-md-3 my-lg-2 my-xl-4 my-xxl-5">
        <div className="d-md-flex align-items-center pb-3 mb-md-3 mb-lg-4 mt-2 mt-sm-3 pt-2 pt-sm-4 pt-lg-5">
          <h2 className="h1 text-center text-md-start mb-4 mb-md-0 me-md-4">Resources for you</h2>
          <ul className="nav nav-pills flex-nowrap fs-sm text-nowrap overflow-auto w-100 mx-auto me-md-0 mb-0 pb-3 pb-md-0" style={{ maxWidth: 408 }}>
            <li className="nav-item mb-0">
              <Link className="nav-link border" to="">
                Articles
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link border active" to="">
                Case studies
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link className="nav-link border" to="">
                Tutorrials
              </Link>
            </li>
          </ul>
        </div>
        <Swiper
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {resources.map((item, idx) => (
            <SwiperSlide key={idx}>
              <article>
                <Link to="">
                  <Image className="rounded-5" src={item.image} alt={item.title} />
                </Link>
                <h3 className="h4 pt-4">
                  <Link to="">{item.title}</Link>
                </h3>
                <p>{item.description}</p>
                <div className="d-flex flex-wrap align-items-center pt-1 mt-n2">
                  <Link className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" to="">
                    {item.shares}
                    <i className="ai-share fs-lg ms-1" />
                  </Link>
                  <Link className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" to="">
                    {item.comments}
                    <i className="ai-message fs-lg ms-1" />
                  </Link>
                  <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                  <span className="fs-sm text-body-secondary mt-2">{item.time}</span>
                  <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                  <Link className="badge bg-primary bg-opacity-10 text-primary fs-xs mt-2" to="">
                    {item.category}
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
        </Swiper>
        <div className="text-center pt-4 my-2 mt-lg-0 pt-lg-5 pb-sm-2 pb-md-4">
          <Link className="btn btn-outline-primary rounded-pill" to="">
            Read all case studies
          </Link>
        </div>
      </section>
    </>
  )
}

export default Resources
