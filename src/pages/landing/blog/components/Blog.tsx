import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import { CardBody, CardFooter, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogPost = {
  title: string
  excerpt: string
  date: string
  category: string
  author: {
    name: string
    avatar: string
  }
  link: string
}

const posts: BlogPost[] = [
  {
    title: 'The fashion for eco bags with vintage prints',
    excerpt: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...',
    date: '12 hours ago',
    category: 'Fashion',
    author: {
      name: 'Lillia Black',
      avatar: avatar11,
    },
    link: '/blog/single-v1',
  },
  {
    title: 'How to look for inspiration for new goals',
    excerpt: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...',
    date: '12 hours ago',
    category: 'Inspiration',
    author: {
      name: 'Darlene Robertson',
      avatar: avatar05,
    },
    link: '/blog/single-v2',
  },
  {
    title: 'Destinations to inspire and restore resources',
    excerpt: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse...',
    date: 'July 16, 2022',
    category: 'Travel',
    author: {
      name: 'Guy Hawkins',
      avatar: avatar08,
    },
    link: '/blog/single-v3',
  },
]

const Blog = () => {
  return (
    <>
      <section className="container pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 pb-3 pb-lg-4">Editor's picks</h2>
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
          {posts.map((post, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <article className="card border-0 bg-secondary">
                <CardBody className="pb-4">
                  <div className="d-flex align-items-center mb-4 mt-n1">
                    <span className="fs-sm text-body-secondary">{post.date}</span>
                    <span className="fs-xs opacity-20 mx-3">|</span>
                    <Link className="badge text-nav fs-xs border" to="">
                      {post.category}
                    </Link>
                  </div>
                  <h3 className="h4 card-title">
                    <Link to={post.link}>{post.title}</Link>
                  </h3>
                  <p className="card-text">{post.excerpt}</p>
                </CardBody>
                <CardFooter className="pt-3">
                  <Link className="d-flex align-items-center text-decoration-none pb-2" to="">
                    <Image className="rounded-circle" src={post.author.avatar} width={48} alt={post.author.name} />
                    <h6 className="ps-3 mb-0">{post.author.name}</h6>
                  </Link>
                </CardFooter>
              </article>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
        </Swiper>
        <div className="text-center pt-4 mt-2 mt-lg-0 pt-lg-5 pb-sm-2 pb-md-4">
          <Link className="btn btn-primary" to="/blog/grid-sidebar">
            Read all articles
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog
