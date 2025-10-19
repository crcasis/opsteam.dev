import avatar07 from '@/assets/img/avatar/07.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import { Card, CardBody, CardFooter, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogPost = {
  date: string
  category: string
  title: string
  excerpt: string
  author: string
  authorImg: string
}

const posts: BlogPost[] = [
  {
    date: 'August 13, 2022',
    category: 'Inspiration',
    title: 'Promotion of an online store from scratch, first sales',
    excerpt:
      'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames...',
    author: 'Guy Hawkins',
    authorImg: avatar10,
  },
  {
    date: 'July 25, 2022',
    category: 'Inspiration',
    title: 'Business strategy for a brand of vintage bags',
    excerpt:
      'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...',
    author: 'Cody Fisher',
    authorImg: avatar07,
  },
  {
    date: 'July 08, 2022',
    category: 'Inspiration',
    title: 'Sales on social networks for the eco cosmetics',
    excerpt:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit commodo dignissim...',
    author: 'Jane Cooper',
    authorImg: avatar09,
  },
]

const Blog = () => {
  return (
    <section className="bg-primary bg-opacity-10 py-5">
      <Container className="py-sm-2 pt-md-3 py-lg-2 py-xl-4 py-xxl-5">
        <h3 className="h1 text-center pt-2 pt-sm-3 pb-3 mb-3 mb-lg-4">Resources for you</h3>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {posts.map((post, idx) => (
            <SwiperSlide key={idx}>
              <article className="h-auto">
                <Card className="border-0 h-100">
                  <CardBody className="pb-4">
                    <div className="d-flex align-items-center mb-4 mt-n1">
                      <span className="fs-sm text-body-secondary">{post.date}</span>
                      <span className="fs-xs opacity-20 mx-3">|</span>
                      <Link className="badge text-nav fs-xs border" to="">
                        {post.category}
                      </Link>
                    </div>
                    <h3 className="h4 card-title">
                      <Link to="">{post.title}</Link>
                    </h3>
                    <p className="card-text">{post.excerpt}</p>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                      <Image className="rounded-circle" src={post.authorImg} width={48} alt={post.author} />
                      <h6 className="ps-3 mb-0">{post.author}</h6>
                    </Link>
                  </CardFooter>
                </Card>
              </article>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
        </Swiper>

        <div className="text-center pt-4 pb-1 pb-sm-2 pb-md-4 py-lg-5 my-2 mt-lg-0">
          <Link className="btn btn-outline-primary" to="">
            Read all articles
          </Link>
        </div>
      </Container>
      <div style={{ height: 380 }} />
    </section>
  )
}

export default Blog
