import gallery1 from '@/assets/img/about/agency/gallery/01.jpg'
import gallery2 from '@/assets/img/about/agency/gallery/02.jpg'
import gallery3 from '@/assets/img/about/agency/gallery/03.jpg'
import gallery4 from '@/assets/img/about/agency/gallery/04.jpg'
import gallery5 from '@/assets/img/about/agency/gallery/05.jpg'
import gallery6 from '@/assets/img/about/agency/gallery/06.jpg'
import GlightBox from '@/components/GlightBox'
import { Container, Image } from 'react-bootstrap'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type GalleryType = {
  src: string
  alt: string
  maxWidth: number
}

const galleryItems: GalleryType[] = [
  { src: gallery1, alt: 'Gallery image #1', maxWidth: 416 },
  { src: gallery2, alt: 'Gallery image #2', maxWidth: 526 },
  { src: gallery3, alt: 'Gallery image #3', maxWidth: 306 },
  { src: gallery4, alt: 'Gallery image #4', maxWidth: 367 },
  { src: gallery5, alt: 'Gallery image #5', maxWidth: 526 },
  { src: gallery6, alt: 'Gallery image #6', maxWidth: 416 },
]

const Gallery = () => {
  return (
    <>
      <section className="position-relative pt-5 mt-2 mt-xl-4 mt-xxl-5">
        <div className="bg-secondary position-absolute start-0 bottom-0 w-100" style={{ height: 252 }} />
        <Container className="py-3 pt-sm-4 pt-lg-5 mt-xl-2 mt-xxl-3 mb-3 mb-lg-4">
          <div className="fs-sm text-uppercase mb-3">Where</div>
          <div className="d-sm-flex align-items-center justify-content-between">
            <h2 className="display-6 mb-0 me-sm-4">We are located in London</h2>
            <div className="d-none d-sm-flex">
              <button className="prev-gallery btn btn-icon btn-outline-primary rounded-circle me-3" type="button" aria-label="Prev">
                <i className="ai-arrow-left" />
              </button>
              <button className="next-gallery btn btn-icon btn-outline-primary rounded-circle" type="button" aria-label="Next">
                <i className="ai-arrow-right" />
              </button>
            </div>
          </div>
        </Container>
        <div className="container-start position-relative z-2 pe-0">
          <Swiper
            modules={[Navigation]}
            slidesPerView={'auto'}
            spaceBetween={24}
            loop
            navigation={{
              prevEl: '.prev-gallery',
              nextEl: '.next-gallery',
            }}
          >
            <div className="swiper-wrapper gallery align-items-end">
              {galleryItems.map((item, idx) => (
                <SwiperSlide className="w-auto align-items-end" key={idx}>
                  <GlightBox className="d-block gallery-item card-hover zoom-effect" href={item.src} style={{ maxWidth: item.maxWidth }}>
                    <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                      <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-40" />
                    </div>
                    <div className="zoom-effect-wrapper rounded-5">
                      <div className="zoom-effect-img">
                        <Image src={item.src} alt={item.alt} />
                      </div>
                    </div>
                  </GlightBox>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          <div className="d-flex d-sm-none pt-4">
            <button className="prev-gallery btn btn-icon btn-outline-primary rounded-circle me-3" type="button" aria-label="Prev">
              <i className="ai-arrow-left" />
            </button>
            <button className="next-gallery btn btn-icon btn-outline-primary rounded-circle" type="button" aria-label="Next">
              <i className="ai-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
