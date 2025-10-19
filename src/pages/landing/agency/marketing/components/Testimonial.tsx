import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import avatar15 from '@/assets/img/avatar/15.jpg'
import avatar16 from '@/assets/img/avatar/16.jpg'
import { useState } from 'react'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialItem = {
  avatar: string
  name: string
  role: string
  text: string
}

const testimonials: TestimonialItem[] = [
  {
    avatar: avatar13,
    name: 'Lilianna Bocouse',
    role: 'Head of Marketing',
    text: `“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”`,
  },
  {
    avatar: avatar14,
    name: 'Darell Steward',
    role: 'Project Manager',
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”`,
  },
  {
    avatar: avatar15,
    name: 'Annette Black',
    role: 'Lead Designer',
    text: `“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”`,
  },
  {
    avatar: avatar16,
    name: 'Ralph Edwards',
    role: 'CEO, Co-Founder',
    text: `“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”`,
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="container">
        <Card className="border-0 bg-primary bg-opacity-10 position-relative overflow-hidden">
          <svg
            className="d-block position-absolute top-0 start-0 text-white text-dark-mode-dark"
            width={125}
            height={99}
            viewBox="0 0 125 99"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeMiterlimit={10}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-17.819-8.269c-.305.249-.567.498-.814.791-1.018 1.172-1.585 2.695-2.08 4.204-4.145 12.479-9.482 29.206-10.223 42.652-.553 10.063 2.516 19.232 8.885 27.317 9.729 12.347 18.367 9.096 32.037 9.887 16.084.937 25.391 8.173 39.497 16.156 13.103 7.426 27.427 6.943 39.163-1.128 13.859-9.521 26.045-30.056 30.495-46.387 4.494-16.493 8.071-34.611.247-51.865-12.273-27.053-55.726-15.233-74.457-11.996-8.827 1.523-17.131 5.829-26.176 6.708-5.73.556-11.547-.527-17.349-.059-5.25.425-14.935.234-19.225 3.72z" />
            <path d="M-3.201 8.561c-.582.923-1.003 1.992-1.28 3.105-2.414 9.594-4.974 20.77-4.552 29.792.175 3.589.945 7.016 2.458 10.282 1.323 2.871 3.127 5.595 5.395 8.188 7.329 8.378 13.801 6.459 23.631 7.162 11.721.849 18.862 5.727 29.143 10.795 9.467 4.658 19.705 3.882 28.285-2.402 10.049-7.323 18.571-22.058 21.581-33.937 3.054-12.054 5.104-25.134-.742-37.438-9.074-19.188-39.54-11.981-53.836-9.828-7.199 1.084-14.979 4.409-22.468 5.463-2.429.337-4.683.483-6.588.469-2.516.234-5.002.601-7.358 1.435C6.499 3.054-.074 4.474-2.692 7.829c-.204.234-.349.483-.509.732z" />
            <path d="M12.237 24.598c-.189.63-.407 1.304-.48 2.007-.625 6.781-.509 12.23 1.12 16.932.625 1.787 1.44 3.545 2.763 5.288 1.134 1.494 2.487 2.944 4.043 4.35 4.915 4.423 9.249 3.823 15.226 4.423 7.344.747 12.303 3.296 18.803 5.419 5.831 1.904 11.983.806 17.393-3.662C77.329 54.2 82.186 45.28 83.771 37.854c1.6-7.617 2.109-15.658-1.745-23.025-5.904-11.293-23.355-8.774-33.229-7.66-5.555.63-12.826 3.047-18.774 4.233-2.283.454-4.203.791-5.41.894a14.19 14.19 0 0 0-5.148 2.973c-2.69 2.432-6.151 5.39-7.082 8.656-.058.234-.087.469-.146.674z" />
            <path d="M31.449 24.407c-3.548 2.915-5.337 11.454-3.766 16.243 2.021 6.166 4.77 4.409 10.194 5.258 9.962 1.567 16.666 6.796 24.475-2.666 8.725-10.56 1.251-23.538-11.605-23.142-5.831.176-17.756 3.676-19.298 4.306z" />
          </svg>
          <svg
            className="d-block position-absolute bottom-0 end-0 text-info opacity-20"
            width={140}
            height={86}
            viewBox="0 0 140 86"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.56155 84.728C3.89813 95.3168 8.77193 105.696 14.3618 114.354C31.1345 140.282 61.2598 159.203 93.1024 149.868C115.683 143.25 136.909 120.078 146.906 99.6379C157.262 78.4816 157.784 62.3169 149.314 40.7686C138.656 13.647 114.088 -10.3284 84.9291 4.90565C72.6616 11.3094 61.6112 19.2912 48.9043 25.2334C37.333 30.6501 22.7611 33.4689 12.9718 42.2129C0.148055 53.665 -1.80519 69.4006 1.56155 84.728Z" />
          </svg>
          <svg
            className="d-block position-absolute text-danger opacity-20"
            width={100}
            height={109}
            viewBox="0 0 100 109"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{ right: 60, bottom: 62 }}
          >
            <path d="M13.0417 15.1485C18.7381 10.3806 25.7233 6.78779 32.3773 4.42805C52.3217 -2.62478 76.5803 -0.291377 89.9528 18.0914C99.436 31.1261 101.262 52.5761 98.137 67.8474C94.9071 83.6571 88.4295 92.6458 74.8221 100.795C57.6962 111.053 34.339 113.786 24.8896 93.3249C20.9119 84.7197 18.2546 75.7674 13.8455 67.2289C9.83276 59.4504 3.10546 51.8265 1.45115 42.988C-0.716922 31.4112 4.80452 22.0566 13.0417 15.1485Z" />
          </svg>
          <CardBody className="position-relative z-2 px-lg-0 py-lg-5">
            <Row className="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <Col md={4} lg={3} className="offset-lg-1 mb-3 mb-md-0">
                <div className="binded-content">
                  {testimonials.map((item, idx) => (
                    <div className={`binded-item ${activeIndex === idx ? 'active' : ''}`} id="author1" key={idx}>
                      <Image className="d-block rounded-circle mb-3" src={item.avatar} width={86} alt="Lilianna Bocouse" />
                      <h4 className="mb-0">{item.name}</h4>
                      <p className="fs-lg text-body-secondary mb-0">{item.role}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col md={8} lg={7}>
                <Swiper
                  spaceBetween={40}
                  loop
                  autoHeight
                  pagination={{
                    el: '#testimonials-bullets',
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide data-swiper-binded="#author1" key={idx}>
                      <p className="text-dark lead mb-0">{item.text}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <div className="swiper-pagination position-relative bottom-0 pt-4 mt-2 mt-md-3" id="testimonials-bullets" />
      </section>
    </>
  )
}

export default Testimonial
