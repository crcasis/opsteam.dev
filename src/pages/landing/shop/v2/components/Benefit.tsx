import glutenfree from '@/assets/img/landing/shop-2/benefits/glutenfree.svg'
import love from '@/assets/img/landing/shop-2/benefits/love.svg'
import natural from '@/assets/img/landing/shop-2/benefits/natural.svg'
import vegan from '@/assets/img/landing/shop-2/benefits/vegan.svg'
import { Image } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type BenefitType = {
  image: string
  title: string
  description: string
}

const benifits: BenefitType[] = [
  { image: glutenfree, title: 'Gluten-Free', description: 'Made without gluten, offer to savor taste and quality without limitations.' },
  { image: vegan, title: 'Vegan', description: "Made without animal products, they're perfect for vegans." },
  { image: natural, title: '100% Natural', description: 'We have no place for artificial additives and preservatives.' },
  { image: love, title: 'Made with Love', description: 'Each macaron is meticulously handcrafted with a deep passion for detail and quality.' },
]

const Benefit = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          breakpoints={{
            460: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          className="pt-3 pb-2 py-sm-3 py-md-4 py-xl-5 my-lg-2"
        >
          {benifits.map((item, idx) => (
            <SwiperSlide className="text-center" key={idx}>
              <Image className="d-block mx-auto mb-4" src={item.image} width={82} alt="Icon" />
              <h3 className="h4 pb-2 mb-1">{item.title}</h3>
              <p className="fs-sm mb-0">{item.description}</p>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none" />
        </Swiper>
      </section>
    </>
  )
}

export default Benefit
