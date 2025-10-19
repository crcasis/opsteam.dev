import ecommerce from '@/assets/img/landing/saas-4/categories/ecommerce.jpg'
import marketing from '@/assets/img/landing/saas-4/categories/marketing.jpg'
import programming from '@/assets/img/landing/saas-4/categories/programming.jpg'
import robotics from '@/assets/img/landing/saas-4/categories/robotics.jpg'
import transportation from '@/assets/img/landing/saas-4/categories/transportation.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Category = {
  title: string
  description: string
  image: string
}

const categories: Category[] = [
  { title: 'E-commerce', description: 'Order processing, price suggestions, user research', image: ecommerce },
  { title: 'Transportation', description: 'Itinerary planning, freight pricing calculations, etc.', image: transportation },
  { title: 'Marketing', description: 'Market research, data visualization, user testing', image: marketing },
  { title: 'Robotics', description: 'Enhancing robot learning, improve robotic precision', image: robotics },
  { title: 'Programming', description: 'Code generation, code debugging and optimization', image: programming },
]

const Categories = () => {
  return (
    <>
      <section className="container position-relative z-3">
        <div className="d-none d-lg-block" style={{ marginTop: '-428px' }} />
        <div className=" d-lg-none" style={{ marginTop: '-370px' }} />
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            560: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to="" className="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 z-1"
                  style={{ background: 'linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%)' }}
                />
                <div className="position-absolute bottom-0 w-100 z-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">{item.title}</h3>
                    <div className="d-flex align-items-center justify-content-between opacity-0">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">{item.description}</span>
                      <i className="ai-circle-arrow-right fs-3 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="zoom-effect-wrapper">
                  <div className="zoom-effect-img">
                    <Image src={item.image} alt="Ecommerce" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4" />
        </Swiper>
      </section>
    </>
  )
}

export default Categories
