import avatar36 from '@/assets/img/avatar/36.jpg'
import avatar37 from '@/assets/img/avatar/37.jpg'
import avatar38 from '@/assets/img/avatar/38.jpg'
import avatar39 from '@/assets/img/avatar/39.jpg'
import avatar40 from '@/assets/img/avatar/40.jpg'
import avatar41 from '@/assets/img/avatar/41.jpg'
import avatar42 from '@/assets/img/avatar/42.jpg'
import avatar43 from '@/assets/img/avatar/43.jpg'
import noise from '@/assets/img/landing/conference/noise.png'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

type Speaker = {
  image: string
  name: string
  position: string
  company?: string
  link?: string
}

const speakers: Speaker[] = [
  { image: avatar36, name: 'Marvin McKinney', position: 'Founder & CEO, Uber' },
  { image: avatar37, name: 'Jenny Wilson', position: 'Marketer, Glassdoor' },
  { image: avatar38, name: 'Albert Flores', position: 'Product Manager, Google' },
  { image: avatar39, name: 'Anneta Nikson', position: 'Founder & CEO, Perfecto' },
  { image: avatar40, name: 'Esther Howard', position: 'VP of Strategy, Stretto Inc.' },
  { image: avatar41, name: 'Jerome Bell', position: 'Strategic Advisor, Shopify' },
  { image: avatar42, name: 'Kathryn Murphy', position: 'Marketing Coordinator' },
  { image: avatar43, name: 'Guy Hawkins', position: 'President of Sales' },
]

const Speakers = () => {
  return (
    <>
      <section className="container py-5 mb-lg-3 mb-xl-4 mt-xl-3 my-xxl-5">
        <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mb-5">Meet our speakers</h2>
        <SimpleBar className="mb-4 mb-lg-5 pb-4 px-3" data-simplebar>
          <Row className="row-cols-lg-4 flex-nowrap flex-lg-wrap gy-lg-5 mx-n3">
            {speakers.map((speaker, idx) => (
              <Col key={idx}>
                <Link className="d-block text-center text-decoration-none" to="" style={{ minWidth: 210 }}>
                  <Image className="rounded-circle" src={speaker.image} width={120} alt={speaker.name} />
                  <h3 className="h5 pt-4 mb-1">{speaker.name}</h3>
                  <p className="text-body-secondary mb-0">{speaker.position}</p>
                </Link>
              </Col>
            ))}
          </Row>
        </SimpleBar>
        <Card className="bg-primary overflow-hidden py-2 py-sm-3 py-md-4 mb-sm-2 mb-md-4">
          <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-5" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 opacity-15"
            style={{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light' }}
          />
          <CardBody className="position-relative d-sm-flex align-items-center justify-content-between z-2 text-center">
            <div className="d-md-flex align-items-center pe-md-4">
              <div className="d-none d-md-block text-warning flex-shrink-0 me-3">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z" />
                </svg>
              </div>
              <h2 className="text-light pb-1 pb-md-0 mb-md-0">Do you have an experience you want to share?</h2>
            </div>
            <Link className="btn btn-lg btn-warning me-xl-4" to="">
              Become our speaker
            </Link>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default Speakers
