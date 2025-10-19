import ind01 from '@/assets/img/landing/business-consulting/industries/01.jpg'
import ind02 from '@/assets/img/landing/business-consulting/industries/02.jpg'
import ind03 from '@/assets/img/landing/business-consulting/industries/03.jpg'
import { Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Industry = {
  title: string
  image: string
  services: string[]
}

const industries: Industry[] = [
  {
    title: 'Services',
    image: ind01,
    services: ['Id habitasse dui habitant', 'Rutrum tempor sit tincidunt', 'Imperdiet est quis enim facilisis'],
  },
  {
    title: 'Retail',
    image: ind02,
    services: ['Ultrices volutpat sit mattis', 'Egestas neque arcu duis', 'Metus magna viverra blandit'],
  },
  {
    title: 'Technology',
    image: ind03,
    services: ['Diam diam nunc monte', 'Nulla egestas arcu proin sit', 'Nunc sapien turpis vulputate'],
  },
]

const Industrie = () => {
  return (
    <>
      <section className="container pb-5 pt-3 pt-sm-4 pt-lg-5 my-xl-3 my-xxl-5">
        <h2 className="h1 text-center">Industries we work in</h2>
        <p className="text-center pb-4 mb-2 mb-lg-3">We have been helping businesses in the following industries for over a decade</p>
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
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Card className="border-0 h-100">
                <div className="card-img-top overflow-hidden">
                  <Image className="rounded-5 rounded-end-0" src={industry.image} alt={industry.title} />
                </div>
                <CardBody>
                  <h3 className="h4 card-title">{industry.title}</h3>
                  <ul className="ps-4 mb-n2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="mb-2">
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
        </Swiper>

        <div className="text-center pt-4 mt-2 mt-lg-0 pt-lg-5">
          <Link className="btn btn-primary" to="">
            See all industries
          </Link>
        </div>
      </section>
    </>
  )
}

export default Industrie
