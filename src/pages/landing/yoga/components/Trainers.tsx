import trainers01 from '@/assets/img/landing/yoga-studio/trainers/01.jpg'
import trainers02 from '@/assets/img/landing/yoga-studio/trainers/02.jpg'
import trainers03 from '@/assets/img/landing/yoga-studio/trainers/03.jpg'
import trainers04 from '@/assets/img/landing/yoga-studio/trainers/04.jpg'
import trainers05 from '@/assets/img/landing/yoga-studio/trainers/05.jpg'
import trainers06 from '@/assets/img/landing/yoga-studio/trainers/06.jpg'
import trainers07 from '@/assets/img/landing/yoga-studio/trainers/07.jpg'
import trainers08 from '@/assets/img/landing/yoga-studio/trainers/08.jpg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Trainer = {
  name: string
  role: string
  image: string
}

const trainers: Trainer[] = [
  { name: 'Alisa Black', role: 'Fly-yoga trainer', image: trainers01 },
  { name: 'Michelle Yang', role: 'Fly-yoga and relax trainer', image: trainers02 },
  { name: 'Robert Fox', role: 'Stretching trainer', image: trainers03 },
  { name: 'Jane Cooper', role: 'Fly-yoga trainer', image: trainers04 },
  { name: 'Cody Fisher', role: 'Fly-yoga and relax trainer', image: trainers05 },
  { name: 'Jenny Wilson', role: "Women's practices", image: trainers06 },
  { name: 'Annette Black', role: 'Fly-yoga trainer', image: trainers07 },
  { name: 'Ralph Edwards', role: 'Stretching trainer, healthy back', image: trainers08 },
]

const Trainers = () => {
  return (
    <>
      <section className="container pb-2 pb-sm-3 pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 text-center pt-2 pt-sm-4 pt-lg-5 pb-2 mb-3 mb-lg-4 mt-md-3 mt-lg-0">We employ the best trainers</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {trainers.map((item, idx) => (
            <Col className="text-center pt-2" key={idx}>
              <Link className="card-hover card-lifted d-inline-block text-decoration-none" to="">
                <Image className="card-lifted d-block rounded-5 mb-3" src={item.image} width={340} alt="Alisa Black" />
                <h3 className="h5 mb-1">{item.name}</h3>
                <p className="mb-0 text-body-secondary">{item.role}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default Trainers
