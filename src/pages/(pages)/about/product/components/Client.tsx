import airbndcolor from '@/assets/img/landing/saas-1/brands/airbnb-color.svg'
import airbndgray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import airbndlight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import alpinecolor from '@/assets/img/landing/saas-1/brands/alpine-color.svg'
import alpinegray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import alpinelight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import championcolor from '@/assets/img/landing/saas-1/brands/champion-color.svg'
import championgray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'
import championlight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import fostercolor from '@/assets/img/landing/saas-1/brands/foster-color.svg'
import fostergray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import fosterlight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import klinoscolor from '@/assets/img/landing/saas-1/brands/klinos-color.svg'
import klinosgray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import klinoslight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import starcaftcolor from '@/assets/img/landing/saas-1/brands/starcraft-color.svg'
import starcaftgray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import starcaftlight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Client = () => {
  return (
    <>
      <section className="container pt-5 mt-xl-3 mt-xxl-4">
        <h2 className="h4 text-center pb-3 pb-md-4 mb-lg-4">Join 1000+ companies who's reached Around</h2>
        <Row className="row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 justify-content-center align-items-center g-4">
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={fostercolor} width={145} alt="Foster" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={fostergray} width={145} alt="Foster" />
                <Image className="d-none d-dark-mode-block" src={fosterlight} width={145} alt="Foster" />
              </div>
            </Link>
          </Col>
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={klinoscolor} width={140} alt="Klinos" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={klinosgray} width={140} alt="Klinos" />
                <Image className="d-none d-dark-mode-block" src={klinoslight} width={140} alt="Klinos" />
              </div>
            </Link>
          </Col>
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={championcolor} width={160} alt="Champion" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={championgray} width={160} alt="Champion" />
                <Image className="d-none d-dark-mode-block" src={championlight} width={160} alt="Champion" />
              </div>
            </Link>
          </Col>
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={airbndcolor} width={130} alt="Airbnb" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={airbndgray} width={130} alt="Airbnb" />
                <Image className="d-none d-dark-mode-block" src={airbndlight} width={130} alt="Airbnb" />
              </div>
            </Link>
          </Col>
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={starcaftcolor} width={160} alt="Starcraft" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={starcaftgray} width={160} alt="Starcraft" />
                <Image className="d-none d-dark-mode-block" src={starcaftlight} width={160} alt="Starcraft" />
              </div>
            </Link>
          </Col>
          <Col className="text-center">
            <Link className="swap-image my-1 my-sm-2" to="">
              <Image className="swap-to" src={alpinecolor} width={150} alt="Alpine" />
              <div className="swap-from">
                <Image className="d-dark-mode-none" src={alpinegray} width={150} alt="Alpine" />
                <Image className="d-none d-dark-mode-block" src={alpinelight} width={150} alt="Alpine" />
              </div>
            </Link>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Client
