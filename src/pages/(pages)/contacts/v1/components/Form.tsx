import { Card, CardBody, Col, Row } from 'react-bootstrap'

const Form = () => {
  return (
    <>
      <section className="container" style={{ marginTop: '-260px' }} data-bs-theme="dark">
        <Card className="border-0 bg-primary position-relative py-lg-4 py-xl-5">
          <svg
            className="position-absolute end-0 mt-n2"
            width={242}
            height={331}
            viewBox="0 0 242 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M172.014 250.127C137.236 227.74 112.349 192.144 144.586 153.591C157.686 137.932 176.759 127.973 196.524 122.046C234.647 110.639 277.027 113.361 313.349 129.576C338.19 140.666 361.129 159.183 369.934 184.502C383.476 223.496 359.75 260.161 321.569 273.118C288.832 284.223 247.685 279.513 214.885 269.837C201.003 265.743 185.745 258.966 172.014 250.127Z"
              fill="#121519"
              fillOpacity=".07"
            />
            <path
              d="M20.3265 69.264C19.7064 43.0736 29.8071 17.1878 62.3851 19.8622C75.6229 20.9505 87.9525 27.2066 98.3563 35.3132C118.426 50.9253 132.424 73.896 136.952 98.6413C140.044 115.562 138.424 134.218 127.978 148C111.901 169.236 83.4531 170.283 62.5246 155.209C44.5807 142.281 32.0983 119.217 25.3391 98.6799C22.4836 89.9885 20.5616 79.6021 20.3265 69.264Z"
              fill="#121519"
              fillOpacity=".07"
            />
          </svg>
          <svg
            className="position-absolute start-0 bottom-0 ms-3"
            width={169}
            height={217}
            viewBox="0 0 169 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.2574 90.0177C29.666 97.6253 26.6254 106.591 24.9502 114.96C19.9522 140.043 26.4112 168.792 49.6162 181.885C66.0705 191.17 91.0017 189.904 108.062 183.692C125.725 177.266 135.045 168.04 142.29 150.389C151.409 128.174 150.912 99.6904 125.93 91.6429C115.423 88.254 104.723 86.5065 94.2249 82.5889C84.6622 79.0248 74.8545 72.1766 64.4411 71.6149C50.8011 70.8777 40.9122 79.0146 34.2574 90.0177Z"
              fill="#121519"
              fillOpacity="0.07"
            />
            <path
              d="M147.005 75.6331C152.135 70.7783 156.106 64.2374 159.153 57.9073C166.014 43.6372 174.127 22.1368 160.207 9.68505C152.924 3.17188 139.243 3.86644 130.324 5.29774C118.428 7.20428 107.295 8.85077 96.5031 14.783C85.8056 20.6599 79.0155 33.6997 77.0014 45.6686C75.4978 54.5776 79.63 63.6672 84.7391 70.7453C91.8208 80.5571 103.503 84.2003 114.817 84.3975C121.101 84.5081 127.716 84.0527 133.89 82.8121C138.932 81.7962 143.273 79.1597 147.005 75.6331Z"
              fill="#121519"
              fillOpacity="0.07"
            />
          </svg>
          <CardBody className="position-relative z-2 py-5">
            <form className="mx-auto" style={{ maxWidth: 800 }}>
              <h2 className="h1 card-title text-center pb-4">Get a free consultation</h2>
              <Row className="g-4">
                <Col sm={6}>
                  <label className="form-label fs-base" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control form-control-lg" type="text" placeholder="Your name" required id="name" />
                </Col>
                <Col sm={6}>
                  <label className="form-label fs-base" htmlFor="company">
                    Company
                  </label>
                  <input className="form-control form-control-lg" type="text" placeholder="Your company name" id="company" />
                </Col>
                <Col sm={6}>
                  <label className="form-label fs-base" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control form-control-lg" type="email" placeholder="Email address" required id="email" />
                </Col>
                <Col sm={6}>
                  <label className="form-label fs-base" htmlFor="phone">
                    Phone
                  </label>
                  <input className="form-control form-control-lg" type="text" placeholder="Phone number" id="phone" />
                </Col>
                <Col sm={12}>
                  <label className="form-label fs-base" htmlFor="message">
                    How can we help?
                  </label>
                  <textarea className="form-control form-control-lg" rows={6} placeholder="Enter your message here..." required id="message" />
                </Col>
                <Col sm={12}>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="seo" />
                    <label className="form-check-label fs-base" htmlFor="seo">
                      SEO Website Audit
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="email-marketing" defaultChecked />
                    <label className="form-check-label fs-base" htmlFor="email-marketing">
                      Email Marketing
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="social" />
                    <label className="form-check-label fs-base" htmlFor="social">
                      Social Networks
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="content-marketing" />
                    <label className="form-check-label fs-base" htmlFor="content-marketing">
                      Content Marketing
                    </label>
                  </div>
                </Col>
                <Col sm={12} className="text-center pt-4">
                  <button className="btn btn-lg btn-light" type="submit">
                    Send a request
                  </button>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default Form
