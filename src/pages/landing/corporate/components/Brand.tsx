import airbnb from '@/assets/img/brands/airbnb.svg'
import auchan from '@/assets/img/brands/auchan.svg'
import championdark from '@/assets/img/brands/champion-dark.svg'
import championlight from '@/assets/img/brands/champion-light.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import philips from '@/assets/img/brands/philips.svg'
import pumadark from '@/assets/img/brands/puma-dark.svg'
import pumalight from '@/assets/img/brands/puma-light.svg'
import starcraftdark from '@/assets/img/brands/starcraft-dark.svg'
import starcraftlight from '@/assets/img/brands/starcraft-light.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import { Col, Image, Row } from 'react-bootstrap'

const Brand = () => {
  return (
    <>
      <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
        <h2 className="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">We partner with more than 60 brands</h2>
        <p className="text-center pb-2 pb-sm-3">Clients who have become our friends for many years</p>
        <Row className="row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5">
          <Col>
            <Image className="d-block mx-auto" src={auchan} width={220} alt="Auchan" />
          </Col>
          <Col>
            <Image className="d-block mx-auto" src={suzuki} width={220} alt="Suzuki" />
          </Col>
          <Col>
            <Image className="d-block d-dark-mode-none mx-auto" src={championdark} width={220} alt="Champion" />
            <Image className="d-none d-dark-mode-block mx-auto" src={championlight} width={220} alt="Champion" />
          </Col>
          <Col>
            <Image className="d-block d-dark-mode-none mx-auto" src={starcraftdark} width={220} alt="Starcraft" />
            <Image className="d-none d-dark-mode-block mx-auto" src={starcraftlight} width={220} alt="Starcraft" />
          </Col>
          <Col>
            <Image className="d-block mx-auto" src={klinos} width={220} alt="Klinos" />
          </Col>
          <Col>
            <Image className="d-block d-dark-mode-none mx-auto" src={pumadark} width={220} alt="Puma" />
            <Image className="d-none d-dark-mode-block mx-auto" src={pumalight} width={220} alt="Puma" />
          </Col>
          <Col>
            <Image className="d-block mx-auto" src={airbnb} width={220} alt="Airbnb" />
          </Col>
          <Col>
            <Image className="d-block mx-auto" src={philips} width={220} alt="Philips" />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Brand
