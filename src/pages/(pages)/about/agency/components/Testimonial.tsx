import avatar21 from '@/assets/img/avatar/21.jpg'
import avatar33 from '@/assets/img/avatar/33.jpg'
import avatar34 from '@/assets/img/avatar/34.jpg'
import avatar35 from '@/assets/img/avatar/35.jpg'
import { useState } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TestimonialType = {
  avatar: string
  name: string
  role: string
  description: string
}

const tes: TestimonialType[] = [
  {
    avatar: avatar21,
    name: 'Lilianna Bocouse',
    role: 'Head of Marketing',
    description:
      '“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”',
  },
  {
    avatar: avatar33,
    name: 'Darell Steward',
    role: 'Project Manager',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”',
  },
  {
    avatar: avatar34,
    name: 'Annette Black',
    role: 'Lead Designer',
    description:
      '“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”',
  },
  {
    avatar: avatar35,
    name: 'Ralph Edwards',
    role: 'CEO, Co-Founder',
    description:
      '“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”',
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <section className="pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
        <Container className="pt-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
          <div className="fs-sm text-uppercase mb-3">Testimonials</div>
          <h2 className="display-6 pb-3 mb-lg-4">What our clients say</h2>
          <Card className="border-0 bg-secondary overflow-hidden">
            <CardBody className="position-relative z-2 px-lg-0 py-lg-5">
              <Row className="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
                <Col md={4} lg={3} className="offset-lg-1 mb-3 mb-md-0">
                  <div className="binded-content">
                    {tes.map((item, idx) => (
                      <div className={`binded-item h-auto ${activeIndex === idx ? 'active' : ''}`} id="author1" key={idx}>
                        <Image className="d-block rounded-circle mb-3" src={item.avatar} width={86} alt="Lilianna Bocouse" />
                        <h4 className="mb-0">{item.name}</h4>
                        <p className="fs-lg text-body-secondary mb-0">{item.role}</p>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col md={8} lg={7}>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={40}
                    loop
                    autoHeight={true}
                    pagination={{
                      el: '#testimonials-bullets',
                      clickable: true,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  >
                    {tes.map((item, idx) => (
                      <SwiperSlide data-swiper-binded="#author1" key={idx}>
                        <p className="text-dark lead mb-0">{item.description}</p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <div className="swiper-pagination position-relative bottom-0 pt-4 mt-2 mt-md-3" id="testimonials-bullets" />
        </Container>
      </section>
    </>
  )
}

export default Testimonial
