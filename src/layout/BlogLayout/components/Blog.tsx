import list01 from '@/assets/img/blog/list/01.jpg'
import list04 from '@/assets/img/blog/list/04.jpg'
import list05 from '@/assets/img/blog/list/05.jpg'
import list06 from '@/assets/img/blog/list/06.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogType = {
  image: string
  description: string
  link: string
}

const blog: BlogType[] = [
  {
    image: list01,
    description: 'The fashion for eco bags with vintage prints will still be relevant for more than one year',
    link: '/blog/single-v1 ',
  },
  {
    image: list04,
    description: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    link: '/blog/single-v3 ',
  },
  {
    image: list06,
    description: 'A session with a psychologist as a personal choice or a fashion trend in society',
    link: '/blog/single-v1 ',
  },
  {
    image: list05,
    description: 'Top 10 best TV shows on Netflix for your next weekend',
    link: '/blog/single-v3 ',
  },
]

const Blog = () => {
  return (
    <>
      <section className="container pt-2 pt-sm-3 pb-5 mb-md-3 mb-lg-4 mb-xl-5">
        <div className="d-flex align-items-center pb-3 mb-3 mb-lg-4">
          <h2 className="h1 mb-0 me-4">Related articles</h2>
          <div className="d-flex ms-auto">
            <button className="btn btn-prev btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-post" aria-label="Prev">
              <i className="ai-arrow-left" />
            </button>
            <button className="btn btn-next btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-post" aria-label="Next">
              <i className="ai-arrow-right" />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={24}
          loop
          autoHeight={true}
          navigation={{
            prevEl: '#prev-post',
            nextEl: '#next-post',
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="pb-2 pb-sm-3 pb-md-4"
        >
          {blog.map((item, idx) => (
            <SwiperSlide className="swiper-slide" key={idx}>
              <div className="position-relative">
                <Image className="rounded-5" src={item.image} alt="Post image" />
                <h3 className="h4 mt-4 mb-0">
                  <Link className="stretched-link" to={item.link}>
                    {item.description}
                  </Link>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default Blog
