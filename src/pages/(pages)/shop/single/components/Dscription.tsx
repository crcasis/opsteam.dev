import single from '@/assets/img/shop/single/01.jpg'
import single02 from '@/assets/img/shop/single/02.jpg'
import { Col, Image, Row } from 'react-bootstrap'

const Dscription = () => {
  return (
    <>
      <section className="container pb-4 pb-md-5 mb-lg-4">
        <div
          className="bg-size-cover bg-repeat-0 bg-position-center rounded-1 mb-md-2 py-xl-4 py-xxl-5"
          style={{ backgroundImage: `url(${single})` }}
        >
          <Row className="py-lg-5">
            <Col md={8} className="offset-md-3 col-lg-6 offset-lg-5 col-xl-5 offset-xl-6 py-5">
              <div className="bg-light rounded-1 mx-4 p-4 p-md-5">
                <div className="py-3 p-sm-3">
                  <h2 className="h3 mb-sm-4">Scented candle</h2>
                  <p className="mb-0">
                    Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper
                    turpis nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem amet, euismod aliquam, lacus laoreet dui
                    facilisi morbi ullamcorper turpis nisi aconsequat cursus volutpat facilisi eget.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <Row className="align-items-center pb-md-3">
          <Col md={6} lg={5} className="mb-4 mb-md-0">
            <Image className="rounded-1" src={single02} alt="Image" />
          </Col>
          <Col md={6} lg={5} className="offset-lg-1">
            <div className="ps-md-4 ps-lg-0">
              <h2 className="h3 mb-sm-4">Description</h2>
              <p className="mb-4 mb-lg-5">
                Ut sit at orci cursus gravida pretium proin nulla id purus, placerat eget mauris eu ac volutpat facilisi eget morbi ullamcorper turpis
                nisi aconsequat cursus malesuada leo ultrices nisl dictumst turpis tortor sem eu ac volutpat facilisi eget morbi
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  Weight:<span className="text-dark fw-semibold ms-2">140 - 440 gramms</span>
                </li>
                <li className="mb-3">
                  Material:<span className="text-dark fw-semibold ms-2">Concrete bowl</span>
                </li>
                <li className="mb-3">
                  Duration:<span className="text-dark fw-semibold ms-2">60 hours of comfort and combustion</span>
                </li>
                <li className="mb-3">
                  Composition:<span className="text-dark fw-semibold ms-2">100% soy wax, cotton wick</span>
                </li>
                <li>
                  Country:<span className="text-dark fw-semibold ms-2">Frances</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Dscription
