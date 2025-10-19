import boost from '@/assets/img/portfolio/brands/boost.svg'
import championdark from '@/assets/img/portfolio/brands/champion-blue-dark.svg'
import championlight from '@/assets/img/portfolio/brands/champion-blue-light.svg'
import purpledark from '@/assets/img/portfolio/brands/champion-purple-dark.svg'
import purplelight from '@/assets/img/portfolio/brands/champion-purple-light.svg'
import clutchdark from '@/assets/img/portfolio/brands/clutch-dark.svg'
import clutchlight from '@/assets/img/portfolio/brands/clutch-light.svg'
import deloittedark from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloittelight from '@/assets/img/portfolio/brands/deloitte-light.svg'
import green from '@/assets/img/portfolio/brands/foster-green.svg'
import vuedark from '@/assets/img/portfolio/brands/vuejs-dark.svg'
import vuelight from '@/assets/img/portfolio/brands/vuejs-light.svg'
import slider01 from '@/assets/img/portfolio/slider/01.png'
import slider02 from '@/assets/img/portfolio/slider/02.png'
import slider03 from '@/assets/img/portfolio/slider/03.png'
import slider04 from '@/assets/img/portfolio/slider/04.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Detail = () => {
  return (
    <>
      <div className="vh-100 pt-5 pt-lg-4">
        <Swiper modules={[Mousewheel]} direction="vertical" mousewheel={{ thresholdDelta: 20 }} className="h-100">
          <SwiperSlide>
            <div className="position-relative h-100">
              <div className="bg-info position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" />
              <div className="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
                <div className="position-relative w-100 order-lg-2">
                  <div className="bg-info position-absolute top-0 end-0 w-100 h-100 d-lg-none" />
                  <Link to="/portfolio/single-v1">
                    <Image className="d-block position-relative z-2 mx-auto scale-up" src={slider01} width={748} alt="Image" />
                  </Link>
                </div>
                <div className="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
                  <div className="text-center text-sm-start mx-auto" style={{ maxWidth: 450 }}>
                    <Image className="d-block d-dark-mode-none mx-auto mx-sm-0 mb-2 mb-lg-3" src={championdark} alt="Champion" />
                    <Image className="d-none d-dark-mode-block mx-auto mx-sm-0 mb-2 mb-lg-3" src={championlight} alt="Champion" />
                    <h2 className="h1 pb-2 pb-sm-0">An application for a national bank</h2>
                    <p className="d-none d-sm-block pb-3 pb-lg-4 mb-1">
                      Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing
                      ut orci molestie arcu, sapien sed felis.
                    </p>
                    <div className="d-none d-lg-flex align-items-center pb-2 pb-lg-3 mb-3">
                      <h6 className="text-body mb-0 me-3">Awards:</h6>
                      <Image className="d-block d-dark-mode-none me-4" src={vuedark} width={90} alt="Vue.js" />
                      <Image className="d-none d-dark-mode-block me-4" src={vuelight} width={90} alt="Vue.js" />
                      <Image className="d-block d-dark-mode-none" src={deloittedark} width={95} alt="Deloitte" />
                      <Image className="d-none d-dark-mode-block" src={deloittelight} width={95} alt="Deloitte" />
                    </div>
                    <Link className="btn btn-sm btn-outline-dark fs-sm rounded-pill" to="/portfolio/single-v1">
                      Read the full story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative h-100">
              <div className="bg-danger position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" />
              <div className="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
                <div className="position-relative w-100 order-lg-2">
                  <div className="bg-danger position-absolute top-0 end-0 w-100 h-100 d-lg-none" />
                  <Link to="/portfolio/single-v1">
                    <Image className="d-block position-relative z-2 ms-auto from-end" src={slider02} width={748} alt="Image" />
                  </Link>
                </div>
                <div className="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
                  <div className="text-center text-sm-start mx-auto" style={{ maxWidth: 450 }}>
                    <Image className="d-block mx-auto mx-sm-0 mb-2 mb-lg-3" src={boost} alt="Boost" />
                    <h2 className="h1 pb-2 pb-sm-1">Landing page for a marketing agency</h2>
                    <ul className="list-unstyled d-none d-sm-block pb-1 pb-lg-2 mb-3">
                      <li className="d-flex pb-1 mb-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                        Faucibus sit est dui id gravida
                      </li>
                      <li className="d-flex pb-1 mb-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                        Lectus in sem eu facilisis ornare
                      </li>
                      <li className="d-flex pb-1 mb-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2" />
                        Massa maecenas cras vivamus
                      </li>
                    </ul>
                    <Link className="btn btn-sm btn-outline-dark fs-sm rounded-pill" to="/portfolio/single-v1">
                      Read the full story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative h-100">
              <div className="bg-primary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" />
              <div className="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
                <div className="position-relative w-100 order-lg-2">
                  <div className="bg-primary position-absolute top-0 end-0 w-100 h-100 d-lg-none" />
                  <Link to="/portfolio/single-v1">
                    <Image className="d-block position-relative z-2 mx-auto scale-up" src={slider03} width={748} alt="Image" />
                  </Link>
                </div>
                <div className="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
                  <div className="text-center text-sm-start mx-auto" style={{ maxWidth: 450 }}>
                    <Image className="d-block mx-auto mx-sm-0 mb-2 mb-lg-3" src={green} alt="Foster" />
                    <h2 className="h1 pb-2 pb-sm-0">Design and dev of a dashboard</h2>
                    <p className="d-none d-sm-block pb-3 pb-lg-4 mb-1">
                      Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing
                      ut orci molestie arcu, sapien sed felis.
                    </p>
                    <Link className="btn btn-sm btn-outline-dark fs-sm rounded-pill" to="/portfolio/single-v1">
                      Read the full story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative h-100">
              <div className="position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" style={{ backgroundColor: '#d7e4f4' }} />
              <div className="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
                <div className="position-relative w-100 order-lg-2">
                  <div className="position-absolute top-0 end-0 w-100 h-100 d-lg-none" style={{ backgroundColor: '#d7e4f4' }} />
                  <Link to="/portfolio/single-v1">
                    <Image className="d-block position-relative z-2 mx-auto scale-up" src={slider04} width={748} alt="Image" />
                  </Link>
                </div>
                <div className="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
                  <div className="text-center text-sm-start mx-auto" style={{ maxWidth: 450 }}>
                    <Image className="d-block d-dark-mode-none mx-auto mx-sm-0 mb-2 mb-lg-3" src={purpledark} alt="Champion" />
                    <Image className="d-none d-dark-mode-block mx-auto mx-sm-0 mb-2 mb-lg-3" src={purplelight} alt="Champion" />
                    <h2 className="h1 pb-2 pb-sm-0">An application for a task tracker</h2>
                    <p className="d-none d-sm-block pb-3 pb-lg-4 mb-1">
                      Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing
                      ut orci molestie arcu, sapien sed felis.
                    </p>
                    <div className="d-none d-lg-flex align-items-center pb-2 pb-lg-3 mb-3">
                      <h6 className="text-body mb-0 me-3">Awards:</h6>
                      <Image className="d-block d-dark-mode-none me-4" src={clutchdark} width={92} alt="Clutch" />
                      <Image className="d-none d-dark-mode-block me-4" src={clutchlight} width={92} alt="Clutch" />
                      <Image className="d-block d-dark-mode-none" src={deloittedark} width={95} alt="Deloitte" />
                      <Image className="d-none d-dark-mode-block" src={deloittelight} width={95} alt="Deloitte" />
                    </div>
                    <Link className="btn btn-sm btn-outline-dark fs-sm rounded-pill" to="/portfolio/single-v1">
                      Read the full story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="position-fixed start-50 bottom-0 translate-middle-x rounded-4 rounded-bottom-0 bg-light shadow z-5 fs-sm fw-medium text-dark py-2 px-3">
          Scroll for more
        </div>
      </div>
    </>
  )
}

export default Detail
