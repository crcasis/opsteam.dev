import insta01 from '@/assets/img/landing/shop-2/instagram/01.jpg'
import insta02 from '@/assets/img/landing/shop-2/instagram/02.jpg'
import insta03 from '@/assets/img/landing/shop-2/instagram/03.jpg'
import insta04 from '@/assets/img/landing/shop-2/instagram/04.jpg'
import insta05 from '@/assets/img/landing/shop-2/instagram/05.jpg'
import insta06 from '@/assets/img/landing/shop-2/instagram/06.jpg'
import insta07 from '@/assets/img/landing/shop-2/instagram/07.jpg'
import insta08 from '@/assets/img/landing/shop-2/instagram/08.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type InstagramItem = {
  image: string
  likes: number
  comments: number
}

const instagramData: InstagramItem[] = [
  { image: insta01, likes: 2048, comments: 320 },
  { image: insta02, likes: 1764, comments: 283 },
  { image: insta03, likes: 4560, comments: 417 },
  { image: insta04, likes: 1505, comments: 274 },
  { image: insta05, likes: 3708, comments: 198 },
  { image: insta06, likes: 2925, comments: 409 },
  { image: insta07, likes: 1348, comments: 120 },
  { image: insta08, likes: 963, comments: 98 },
]

const Instagram = () => {
  return (
    <>
      <section>
        <h2 className="container h1 pb-2 pb-sm-3 pb-lg-4">Let's be social</h2>
        <div className="overflow-auto" data-simplebar>
          <Row className="row-cols-8 g-0" style={{ minWidth: 1200 }}>
            {instagramData.map((item, idx) => (
              <Col key={idx}>
                <Link className="card-hover zoom-effect d-block position-relative" to="">
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 z-2 opacity-0">
                    <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                    <div className="d-flex align-items-center text-light position-relative z-2">
                      <i className="ai-heart me-1" />
                      <span className="text-light fs-sm me-3">{item.likes}</span>
                      <i className="ai-message me-1" />
                      <span className="text-light fs-sm">{item.comments}</span>
                    </div>
                  </div>
                  <div className="zoom-effect-wrapper">
                    <Image className="zoom-effect-img" src={item.image} alt="Image" />
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  )
}

export default Instagram
