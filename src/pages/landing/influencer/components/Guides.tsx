import guides01 from '@/assets/img/landing/influencer/guides/01.jpg'
import guides02 from '@/assets/img/landing/influencer/guides/02.jpg'
import guides03 from '@/assets/img/landing/influencer/guides/03.jpg'
import { Card, CardBody, CardFooter, Container, Image } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type GuideType = {
  image: string
  price: string
  title: string
  programs: number
  exercises: number
  features: string[]
}

const guidesData: GuideType[] = [
  {
    image: guides01,
    price: '$125.00',
    title: 'Effective weight loss',
    programs: 6,
    exercises: 230,
    features: ['Ut nunc ultricies nibh blandit odio in.', 'Nibh viverra volutpat viverra.', 'Ac lacus ut viverra iaculis neque scelerisque.'],
  },
  {
    image: guides02,
    price: '$154.99',
    title: 'Beginner to expert guide',
    programs: 12,
    exercises: 400,
    features: ['Nutrition guides for the best overall results.', 'Stretching routines.', 'Direct coaching and 24/7 access to community.'],
  },
  {
    image: guides03,
    price: '$121.00',
    title: 'Yoga for pregnancy',
    programs: 8,
    exercises: 420,
    features: ['Adipiscing vulputate ever in potenti velit.', 'Non metus orci convallis posuere.', 'Dolor commodo dignissim pharetra tempor.'],
  },
]

const Guides = () => {
  return (
    <>
      <section className="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
        <div
          className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block"
          style={{ borderTopLeftRadius: '8rem', borderBottomRightRadius: '8rem' }}
        />
        <div
          className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block d-xxl-none"
          style={{ borderTopLeftRadius: '4rem', borderBottomRightRadius: '4rem' }}
        />
        <div
          className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-lg-none"
          style={{ borderTopLeftRadius: '2.25rem', borderBottomRightRadius: '2.25rem' }}
        />
        <Container className="position-relative z-2 py-5 mt-xl-2 mb-lg-2 mb-xl-3 mb-xxl-5 mt-xxl-4">
          <h2 className="h1 pt-xxl-1 pb-4 mb-2 mb-lg-3">Guides</h2>
          <Swiper
            spaceBetween={24}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            pagination={{ el: '.swiper-pagination', clickable: true }}
          >
            {guidesData.map((guide, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <Card className="h-100 border-0 rounded-4 pb-3">
                  <div className="position-relative" data-bs-theme="light">
                    <CardBody className="position-absolute start-0 bottom-0 py-4">
                      <div className="d-table badge bg-danger rounded-pill mb-2">{guide.programs} programs</div>
                      <div className="d-table badge bg-light text-nav rounded-pill">&gt; {guide.exercises} exercises</div>
                    </CardBody>
                    <Image className="rounded-4 rounded-bottom-0" src={guide.image} alt={guide.title} />
                  </div>
                  <CardBody className="pb-4">
                    <div className="text-primary fw-bold pb-2 mb-1">{guide.price}</div>
                    <h3 className="h4">{guide.title}</h3>
                    <ul className="fs-sm ps-4 mb-0">
                      {guide.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <CardFooter className="border-0 pt-0">
                    <button className="btn btn-outline-primary w-100" type="button">
                      Buy now
                    </button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
          </Swiper>
        </Container>
      </section>
    </>
  )
}

export default Guides
