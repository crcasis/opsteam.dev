import authors01 from '@/assets/img/landing/blog/authors/01.png'
import authors02 from '@/assets/img/landing/blog/authors/02.png'
import authors03 from '@/assets/img/landing/blog/authors/03.png'
import authors04 from '@/assets/img/landing/blog/authors/04.png'
import authors05 from '@/assets/img/landing/blog/authors/05.png'
import hoverimg from '@/assets/img/landing/blog/authors/hover.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Author = {
  name: string
  role: string
  image: string
}

const authors: Author[] = [
  { name: 'Jane Cooper', role: 'Chief editor', image: authors01 },
  { name: 'Darlene Robertson', role: 'Marketing consultant', image: authors02 },
  { name: 'Guy Hawkins', role: 'Psychologist', image: authors03 },
  { name: 'Cameron Williamson', role: 'Fashion blogger', image: authors04 },
  { name: 'Albert Flores', role: 'Travel blogger', image: authors05 },
]

const Authors = () => {
  return (
    <>
      <section className="container-start pt-xl-2 pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <Row className="g-0 pb-md-4 pb-lg-5">
          <Col xl={2}>
            <div className="d-flex flex-xl-column align-items-center align-items-xl-start pe-xl-5 pb-3 pb-lg-4 mb-3">
              <h2 className="h1 mb-0 mb-xl-5">Top authors</h2>
              <div className="d-flex ms-auto ms-xl-0 pe-sm-3 pe-xl-0">
                <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle me-3" type="button" id="prev-author" aria-label="Prev">
                  <i className="ai-arrow-left" />
                </button>
                <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle" type="button" id="next-author" aria-label="Next">
                  <i className="ai-arrow-right" />
                </button>
              </div>
            </div>
          </Col>
          <Col xl={9} className="offset-xl-1">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              navigation={{
                prevEl: '#prev-author',
                nextEl: '#next-author',
              }}
              breakpoints={{
                576: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
                1400: { slidesPerView: 'auto' },
              }}
            >
              {authors.map((author, idx) => (
                <SwiperSlide key={idx} className="w-xxl-auto">
                  <Link className="d-block card-hover text-decoration-none mx-auto" to="" style={{ maxWidth: 416 }}>
                    <div className="bg-secondary rounded-5 position-relative overflow-hidden">
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center opacity-0"
                        style={{ backgroundImage: `url(${hoverimg})` }}
                      />
                      <Image className="position-relative z-2" src={author.image} alt={author.name} />
                    </div>
                    <div className="border-bottom pt-4 pb-3">
                      <h3 className="h4 mb-1">{author.name}</h3>
                      <p className="text-body-secondary mb-0">{author.role}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Authors
