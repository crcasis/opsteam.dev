import cover from '@/assets/img/landing/product/video-cover.jpg'
import GlightBox from '@/components/GlightBox'
import { Col, Image, Row } from 'react-bootstrap'

const Feature = () => {
  return (
    <>
      <section className="container pt-5">
        <div className="position-relative mt-sm-2 mb-4 mb-sm-5">
          <Image className="d-block rounded-5" src={cover} alt="Video cover" />
          <div className="d-nline-flex position-absolute top-50 start-50 translate-middle z-2 p-4">
            <GlightBox
              className="glightbox btn btn-icon btn-xl btn-primary rounded-circle stretched-link"
              href="https://www.youtube.com/watch?v=udMULpKcnn8"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <i className="ai-play-filled" />
            </GlightBox>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-sm-3 pt-2 pt-sm-0 pt-lg-3">
          <Col className="pb-4 mb-1">
            <div style={{ maxWidth: 336 }}>
              <svg className="d-block mb-3 mb-lg-4" width={40} height={40} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.863 5.094C22.465 3.705 25 4.824 25 6.983v26.033c0 1.985-2.315 3.361-4.137 1.889l-9.507-8.24-3.856.001c-1.282 0-2.5-1.047-2.5-2.5v-8.333c0-1.331 1.086-2.5 2.5-2.5l3.857-.001 9.506-8.238zm1.092 1.259l-9.742 8.443a.84.84 0 0 1-.546.204H7.5c-.427 0-.833.355-.833.833v8.333c0 .427.353.833.833.833h4.167c.167 0 .38.07.546.204l9.742 8.443c.805.559 1.379-.153 1.379-.63V6.983c0-.687-.799-1.093-1.379-.63zm9.712 9.48c.427 0 .833.371.833.833v2.5H35c.46 0 .833.373.833.833 0 .427-.361.833-.833.833h-2.5v2.5c0 .46-.373.833-.833.833-.427 0-.833-.372-.833-.833v-2.5h-2.5c-.46 0-.833-.373-.833-.833a.84.84 0 0 1 .833-.833h2.5v-2.5c0-.46.373-.833.833-.833z" />
              </svg>
              <h3 className="h4">Active noise suppression</h3>
              <p className="mb-0">
                Adipiscing posuere dui, amet, augue nisl dictum justo enim sed neque congue non quam ultrices interdum vitae vestibulum.
              </p>
            </div>
          </Col>
          <Col className="pb-4 mb-1">
            <div className="mx-sm-auto" style={{ maxWidth: 336 }}>
              <svg className="d-block mb-3 mb-lg-4" width={40} height={40} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.683 13.683C33.683 6.126 27.556 0 20 0S6.316 6.126 6.316 13.683c-1.954.243-3.801 1.52-3.801 4.485v7.146c0 3.345 2.341 4.561 4.561 4.561h2.204a.76.76 0 0 0 .76-.76V14.398a.76.76 0 0 0-.76-.76H7.837C7.837 6.92 13.282 1.475 20 1.475S32.162 6.92 32.162 13.637h-1.444a.76.76 0 0 0-.76.76v14.694a.76.76 0 0 0 .76.76h1.444c-.213 5.222-2.721 6.446-7.731 6.667v-.509a1.52 1.52 0 0 0-1.52-1.52H18.13a1.52 1.52 0 0 0-1.52 1.52v2.471A1.52 1.52 0 0 0 18.13 40h4.797a1.52 1.52 0 0 0 1.52-1.52v-.441c4.819-.221 8.985-1.216 9.236-8.233 1.954-.243 3.801-1.52 3.801-4.485v-7.146c0-2.98-1.84-4.249-3.801-4.493zM8.521 15.105v13.227H7.039c-1.125 0-3.041-.395-3.041-3.041v-7.146c0-2.623 1.893-3.041 3.041-3.041h1.482zm14.405 22.227v1.155H18.13v-2.471h4.797v1.315zm13.037-12.018c0 2.622-1.893 3.041-3.041 3.041h-1.444V15.158h1.482c1.125 0 3.041.395 3.041 3.041l-.038 7.115z" />
              </svg>
              <h3 className="h4">Memory foam ear pads</h3>
              <p className="mb-0">
                Dignissim eget ultrices feugiat dolor volutpat amet et suscipit metus sed laoreet platea amet, sit sem at dui tempor netus.
              </p>
            </div>
          </Col>
          <Col className="pb-4 mb-1">
            <div className="ms-sm-auto" style={{ maxWidth: 336 }}>
              <svg className="d-block mb-3 mb-lg-4" width={40} height={40} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M.769 16.945a.77.77 0 0 0-.769.769v3.846a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-3.846a.77.77 0 0 0-.769-.769zm3.852-3.149a.77.77 0 0 0-.769.769v10.65a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-10.65a.77.77 0 0 0-.769-.769zm3.84-5.312a.77.77 0 0 0-.769.769v21.539a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769V9.253a.77.77 0 0 0-.769-.769zm3.848 3.846a.77.77 0 0 0-.769.769v13.077a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769V13.1a.77.77 0 0 0-.769-.769zm11.612-1.862a.77.77 0 0 0-.769.769v17.307a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769V11.237a.77.77 0 0 0-.769-.769zm7.618 1.093a.77.77 0 0 0-.769.769v15.384a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769V12.33a.77.77 0 0 0-.769-.769zm3.848 3.846a.77.77 0 0 0-.769.769v7.692a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-7.692a.77.77 0 0 0-.769-.769zm-7.696-10a.77.77 0 0 0-.769.769v27.692a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769V6.177a.77.77 0 0 0-.769-.769zM16.152 17.715a.77.77 0 0 0-.769.769v3.077a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-3.077a.77.77 0 0 0-.769-.769zm23.078-.258a.77.77 0 0 0-.769.769v3.329a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-3.329a.77.77 0 0 0-.769-.769zM19.926 15.99a.77.77 0 0 0-.769.769v6.262a.77.77 0 0 0 .769.769.77.77 0 0 0 .769-.769v-6.262a.77.77 0 0 0-.769-.769z" />
              </svg>
              <h3 className="h4">Surround sound</h3>
              <p className="mb-0">
                Tellus sit quam libero, ut quam praesent mi, elementum vulputate amet viverra purus sed velit morbi tellus sodales sed vitae.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Feature
