import insta01 from '@/assets/img/landing/influencer/instagram/01.jpg'
import insta02 from '@/assets/img/landing/influencer/instagram/02.jpg'
import insta03 from '@/assets/img/landing/influencer/instagram/03.jpg'
import insta04 from '@/assets/img/landing/influencer/instagram/04.jpg'
import insta05 from '@/assets/img/landing/influencer/instagram/05.jpg'
import insta06 from '@/assets/img/landing/influencer/instagram/06.jpg'
import insta07 from '@/assets/img/landing/influencer/instagram/07.jpg'
import insta08 from '@/assets/img/landing/influencer/instagram/08.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type InstagramPost = {
  image: string
  likes: number
  comments: number
}

const instagramPosts: InstagramPost[] = [
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
      <section className="pt-2 pt-sm-4 pt-md-5">
        <Container className="pt-5 mt-1 mt-sm-0 mt-lg-2 mt-xl-4 mt-xxl-5">
          <div className="d-flex position-relative align-items-center">
            <Link className="btn btn-icon btn-primary stretched-link me-3 me-sm-4" to="" aria-label="Instagram">
              <i className="ai-instagram" />
            </Link>
            <h2 className="mb-0">jane_cooper</h2>
          </div>
        </Container>
        <div className="overflow-auto" data-simplebar>
          <Row className="row-cols-8 g-0 pt-4 pb-2 pb-xl-0 mt-2 mt-lg-3" style={{ minWidth: 1200 }}>
            {instagramPosts.map((post, idx) => (
              <Col key={idx}>
                <Link className="card-hover zoom-effect d-block position-relative" to="">
                  <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 z-2 opacity-0">
                    <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60" />
                    <div className="d-flex align-items-center text-light position-relative z-2">
                      <i className="ai-heart me-1" />
                      <span className="text-light fs-sm me-3">{post.likes}</span>
                      <i className="ai-message me-1" />
                      <span className="text-light fs-sm">{post.comments}</span>
                    </div>
                  </div>
                  <div className="zoom-effect-wrapper">
                    <Image className="zoom-effect-img" src={post.image} alt="Image" />
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
