import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import grid01 from '@/assets/img/blog/grid/01.jpg'
import grid02 from '@/assets/img/blog/grid/02.jpg'
import grid03 from '@/assets/img/blog/grid/03.jpg'
import grid04 from '@/assets/img/blog/grid/04.jpg'
import grid05 from '@/assets/img/blog/grid/05.jpg'
import grid06 from '@/assets/img/blog/grid/06.jpg'
import { Card, CardBody, CardFooter, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialItem = {
  title: string
  description: string
  image: string
  link: string
  date: string
  category: string
  author: {
    name: string
    avatar: string
  }
}

const testimonials: TestimonialItem[] = [
  {
    title: 'Top books for inspiration',
    description: 'Vulputate auctor lacus imperdiet facilisi tristique nisl pulvinar porta diam duis...',
    image: grid01,
    link: '/blog/single-v1',
    date: '12 hours ago',
    category: 'Books',
    author: { name: 'Jenny Wilson', avatar: avatar06 },
  },
  {
    title: 'Ways to travel in 2022',
    description: 'Duis consectetur quis enim iaculis eu sagittis posuere imperdiet scelerisque...',
    image: grid02,
    link: '/blog/single-v2',
    date: '2 days ago',
    category: 'Travel',
    author: { name: 'Darlene Robertson', avatar: avatar05 },
  },
  {
    title: 'Inspiration in quarantine',
    description: 'Nec in est vel ac et odio interdum risus maecenas pulvinar potenti gravida sed...',
    image: grid03,
    link: '/blog/single-v3',
    date: '1 week ago',
    category: 'Inspiration',
    author: { name: 'Guy Hawkins', avatar: avatar12 },
  },
  {
    title: 'New series from Netflix',
    description: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse...',
    image: grid04,
    link: '/blog/single-v1',
    date: 'July 15, 2022',
    category: 'TV Shows',
    author: { name: 'Lillia Black', avatar: avatar11 },
  },
  {
    title: 'How to look for inspiration?',
    description: 'Risus arcu urna nisl massa nec leo tesque ac suspendisse magna verot ipsum...',
    image: grid05,
    link: '/blog/single-v2',
    date: 'May 28, 2022',
    category: 'Inspiration',
    author: { name: 'David Bocous', avatar: avatar08 },
  },
  {
    title: 'A psychologist as choice',
    description: 'Eu aenean euismod in tellus ipsum et natoque aliquam maecenas. Sed lectus...',
    image: grid06,
    link: '/blog/single-v3',
    date: 'April 14, 2022',
    category: 'Psychology',
    author: { name: 'Guy Hawkins', avatar: avatar12 },
  },
]

const Testimonial = () => {
  return (
    <>
      <section className="bg-secondary py-5">
        <Container className="d-flex align-items-center pt-lg-2 pt-xl-4 pt-xxl-5 pb-3 mt-1 mt-sm-3 mb-3 my-md-4">
          <h2 className="h1 mb-0">Most popular</h2>
          <div className="d-flex ms-auto">
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="prev-popular" aria-label="Prev">
              <i className="ai-arrow-left" />
            </button>
            <button className="btn btn-sm btn-icon btn-outline-primary rounded-circle ms-3" type="button" id="next-popular" aria-label="Next">
              <i className="ai-arrow-right" />
            </button>
          </div>
        </Container>
        <div className="container-start">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 'auto' },
            }}
            navigation={{
              prevEl: '#prev-popular',
              nextEl: '#next-popular',
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="w-sm-auto h-auto">
                <Card className="h-100 border-0 mx-auto" style={{ maxWidth: 416 }}>
                  <Link to={item.link}>
                    <Image className="card-img-top" src={item.image} alt={item.title} />
                  </Link>
                  <CardBody className="pb-4">
                    <div className="d-flex align-items-center mb-4 mt-n1">
                      <span className="fs-sm text-body-secondary">{item.date}</span>
                      <span className="fs-xs opacity-20 mx-3">|</span>
                      <Link className="badge text-nav fs-xs border" to="#">
                        {item.category}
                      </Link>
                    </div>
                    <h3 className="h4 card-title">
                      <Link to={item.link}>{item.title}</Link>
                    </h3>
                    <p className="card-text">{item.description}</p>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                      <Image className="rounded-circle" src={item.author.avatar} width={48} alt={item.author.name} />
                      <h6 className="ps-3 mb-0">{item.author.name}</h6>
                    </Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Container className="text-center pt-4 pb-1 pb-sm-3 pb-md-4 py-lg-5 mb-xl-1 mb-xxl-4 mt-2 mt-lg-0">
          <Link className="btn btn-primary mb-1" to="/blog/grid-sidebar">
            Read all articles
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Testimonial
