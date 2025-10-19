import capterra from '@/assets/img/landing/saas-1/brands/capterra.svg'
import clutchdark from '@/assets/img/landing/saas-1/brands/clutch-dark.svg'
import clutchlight from '@/assets/img/landing/saas-1/brands/clutch-light.svg'
import product from '@/assets/img/landing/saas-1/brands/product-hunt.svg'
import { Image } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Review = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pb-sm-2 pb-lg-3 mt-lg-2 mx-auto" style={{ maxWidth: 740 }}>
          Customers have consistently rated Around 4.7/5 stars
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            500: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          spaceBetween={24}
        >
          <SwiperSlide>
            <div className="text-center p-3 p-sm-4 m-lg-2">
              <div className="d-flex justify-content-center fs-lg mb-4">
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
              </div>
              <p className="mb-3">“Around provides us with the detailed and accurate data we need.”</p>
              <Image className="d-inline-block d-dark-mode-none" src={clutchdark} width={196} alt="Clutch" />
              <Image className="d-none d-dark-mode-inline-block" src={clutchlight} width={196} alt="Clutch" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center p-3 p-sm-4 m-lg-2">
              <div className="d-flex justify-content-center fs-lg mb-4">
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
              </div>
              <p className="mb-3">“Tools are constantly improved and contain a lot of useful information.”</p>
              <Image className="d-inline-block" src={product} width={196} alt="Product Hunt" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center p-3 p-sm-4 m-lg-2">
              <div className="d-flex justify-content-center fs-lg mb-4">
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-warning mx-2" />
                <i className="ai-star-filled text-body-secondary opacity-40 mx-2" />
              </div>
              <p className="mb-3">"We can easily analyze our big data quickly and efficiently all the time."</p>
              <Image className="d-inline-block" src={capterra} width={196} alt="Capterra" />
            </div>
          </SwiperSlide>
          <div className="swiper-pagination position-relative bottom-0 d-lg-none" />
        </Swiper>
      </section>
    </>
  )
}

export default Review
