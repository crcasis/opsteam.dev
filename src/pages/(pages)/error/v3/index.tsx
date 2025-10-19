import lampdark from '@/assets/img/404/lamp-dark.png'
import lamplight from '@/assets/img/404/lamp-light.png'
import categories01 from '@/assets/img/shop/categories/01.jpg'
import categories02 from '@/assets/img/shop/categories/02.jpg'
import categories03 from '@/assets/img/shop/categories/03.jpg'
import categories04 from '@/assets/img/shop/categories/04.jpg'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <Container className="overflow-hidden pb-5">
        <div className="d-flex justify-content-center px-5 mt-n1">
          <Image
            className="d-dark-mode-none"
            src={lamplight}
            width={348}
            alt="Lamp"
            style={{ transformOrigin: '50% 0', animation: 'swinging 3.5s ease-in-out forwards infinite' }}
          />
          <Image
            className="d-none d-dark-mode-block"
            src={lampdark}
            width={348}
            alt="Lamp"
            style={{ transformOrigin: '50% 0', animation: 'swinging 3.5s ease-in-out forwards infinite' }}
          />
        </div>
        <div className="d-flex justify-content-center pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
          <div style={{ maxWidth: 420 }}>
            <div className="d-none d-sm-block" style={{ marginTop: '-127px' }} />
            <div className="d-sm-none" style={{ marginTop: '-25%' }} />
            <div className="d-flex align-items-center mb-4">
              <h1 className="display-1 mb-0">404</h1>
              <p className="text-dark lead ps-4 mb-0">Whoops! That page is missing...</p>
            </div>
            <form className="input-group">
              <input className="form-control" type="search" placeholder="Enter keywords" required />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <h2 className="h4 text-center pb-lg-2 mb-4">Let's go back on track!</h2>
        <Row className="g-4 pb-3 pb-lg-4 pb-xl-5">
          <Col md={4}>
            <Card className="zoom-effect h-100 border-0 rounded-1 overflow-hidden" style={{ minHeight: 320 }}>
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
              <div className="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
                <div
                  className="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
                  style={{ backgroundImage: `url(${categories01})` }}
                />
              </div>
              <Link
                className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                to="/shop/catalog"
              >
                <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the living room</span>
              </Link>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
              <div className="zoom-effect-wrapper rounded-1">
                <Image className="zoom-effect-img" src={categories02} alt="Category image" />
              </div>
              <Link
                className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                to="/shop/catalog"
              >
                <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the kitchen</span>
              </Link>
            </Card>
            <Row className="g-4 pt-4">
              <Col sm={6}>
                <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
                  <div className="zoom-effect-wrapper rounded-1">
                    <Image className="zoom-effect-img" src={categories03} alt="Category image" />
                  </div>
                  <Link
                    className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                    to="/shop/catalog"
                  >
                    <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bathroom</span>
                  </Link>
                </Card>
              </Col>

              <Col sm={6}>
                <Card className="zoom-effect border-0 rounded-1 overflow-hidden">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2" />
                  <div className="zoom-effect-wrapper rounded-1">
                    <Image className="zoom-effect-img" src={categories04} alt="Category image" />
                  </div>
                  <Link
                    className="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
                    to="/shop/catalog"
                  >
                    <span className="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">For the bedroom</span>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
