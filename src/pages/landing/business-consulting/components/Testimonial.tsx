import avatar22 from '@/assets/img/avatar/22.jpg'
import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar25 from '@/assets/img/avatar/25.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'
import avatar29 from '@/assets/img/avatar/29.jpg'
import { Card, CardBody, Image } from 'react-bootstrap'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial = () => {
  return (
    <>
      <section className="container mt-n3 mt-sm-n2 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 text-center pb-3 pb-lg-4">Testimonials</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          loop
          autoHeight
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="pb-1 pb-md-2 pb-lg-3 pb-xl-4"
        >
          <SwiperSlide>
            <Card className="border-0 mb-4">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar22} width={60} alt="Jane Cooper" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Jane Cooper</div>
                    <div className="fs-sm text-body-secondary">Medical Assistant</div>
                  </div>
                </div>
                <p className="card-text">
                  Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.
                </p>
              </CardBody>
            </Card>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar25} width={60} alt="Cameron Williamson" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Cameron Williamson</div>
                    <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                  </div>
                </div>
                <p className="card-text">
                  Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna
                  sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-0 mb-4">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar23} width={60} alt="Wade Warren" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Wade Warren</div>
                    <div className="fs-sm text-body-secondary">President of Sales</div>
                  </div>
                </div>
                <p className="card-text">
                  Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec
                  in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.
                </p>
              </CardBody>
            </Card>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar26} width={60} alt="Leslie Alexander" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Leslie Alexander</div>
                    <div className="fs-sm text-body-secondary">CEO, Divi</div>
                  </div>
                </div>
                <p className="card-text">
                  Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-0 mb-4">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar24} width={60} alt="Esther Howard" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Esther Howard</div>
                    <div className="fs-sm text-body-secondary">CEO, Slack</div>
                  </div>
                </div>
                <p className="card-text">
                  Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.
                </p>
              </CardBody>
            </Card>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar27} width={60} alt="Brooklyn Simmons" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Brooklyn Simmons</div>
                    <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                  </div>
                </div>
                <p className="card-text">
                  In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum
                  curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-0 mb-4">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar28} width={60} alt="Fannie Summers" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Fannie Summers </div>
                    <div className="fs-sm text-body-secondary">VP of Sales</div>
                  </div>
                </div>
                <p className="card-text">
                  In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a
                  ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.
                </p>
              </CardBody>
            </Card>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <Image className="rounded-circle" src={avatar29} width={60} alt="Robert Fox" />
                  <div className="ps-3">
                    <div className="h6 mb-1">Robert Fox</div>
                    <div className="fs-sm text-body-secondary">Marketing Coordinator</div>
                  </div>
                </div>
                <p className="card-text">
                  At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.
                </p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <div className="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4" />
        </Swiper>
      </section>
    </>
  )
}

export default Testimonial
