import blog01 from '@/assets/img/landing/shop-1/blog/01.jpg'
import blog02 from '@/assets/img/landing/shop-1/blog/02.jpg'
import blog03 from '@/assets/img/landing/shop-1/blog/03.jpg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BlogPost = {
  image: string
  title: string
  description: string
}

const blogPosts: BlogPost[] = [
  {
    image: blog01,
    title: 'Paintings for home decor',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem',
  },
  {
    image: blog02,
    title: 'How to keep flowers fresh longer',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem',
  },
  {
    image: blog03,
    title: 'Bedroom decoration explained',
    description:
      'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem',
  },
]

const Blog = () => {
  return (
    <>
      <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 pb-3 pb-md-4">Our blog</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            500: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
        >
          {blogPosts.map((post, idx) => (
            <SwiperSlide key={idx}>
              <div className="position-relative">
                <Image className="rounded-1" src={post.image} alt={post.title} />
                <div className="pt-3 mt-3">
                  <h3 className="h4 mb-3">
                    <Link className="stretched-link" to="">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-0">{post.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 pt-1 mt-4 d-lg-none" />
        </Swiper>
        <div className="text-center mt-2 mb-sm-1 mt-lg-0 pt-4 pt-lg-5 pb-2 pb-md-4">
          <Link className="btn btn-outline-primary w-100 w-sm-auto" to="">
            More articles
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog
