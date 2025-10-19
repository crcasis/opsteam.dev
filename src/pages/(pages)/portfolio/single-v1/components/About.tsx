import avatar21 from '@/assets/img/avatar/21.jpg'
import v102 from '@/assets/img/portfolio/single/v1/02.jpg'
import v103 from '@/assets/img/portfolio/single/v1/03.jpg'
import v104 from '@/assets/img/portfolio/single/v1/04.jpg'
import v105 from '@/assets/img/portfolio/single/v1/05.jpg'
import { Card, CardBody, Col, Image, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div>
        <Row className="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
          <Col md={10} lg={8} xl={7}>
            <h2 className="pb-sm-2">Social networks</h2>
            <p className="fs-lg mb-2 mb-sm-3 mb-lg-2">
              Velit non pharetra eget eu varius amet dui pharetra nam velit purus id nec aliquet auctor scelerisque egestas magna nulla. Eget posuere
              fames id nibh nisi sodales malesuada nisl purus. Libero, velit, in tincidunt non habitasse dui, risus eros, vel laoreet euismod sit
              vitae, at urna nullam lacus urna ac ut pulvinar arcu lacus porttitor aliquam.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 pt-4 pt-lg-5">
          <Col className="mb-4 mb-sm-0">
            <div className="d-flex align-items-center justify-content-center bg-secondary h-100 rounded-5 p-4 p-xl-5">
              <Image className="d-block rounded-4 my-2" src={v102} width={367} alt="Image" />
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-end justify-content-center bg-secondary h-100 rounded-5 px-4 px-xl-5">
              <Image className="d-block rounded-4 rounded-bottom-0 mt-4" src={v103} width={524} alt="Image" />
            </div>
          </Col>
        </Row>
      </div>

      <Row className="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
        <Col md={10} lg={8} xl={7} className="pt-md-3 pt-lg-4">
          <h2 className="pb-sm-2">Content marketing</h2>
          <p className="fs-lg mb-2 mb-sm-3 mb-lg-2">
            Diam at quam a sagittis non tellus penatibus massa, gravida eu sit nunc, eu, amet mattis massa tincidunt sagittis. Semper imperdiet
            viverra netus euismod eget sed condimentum netus. Lectus odio eros eu nibh habitant elementum elementum, morbi pharetra, amet neque in
            donec massa morbi sed vehicula varius ipsum et morbi eu ut.
          </p>
        </Col>
      </Row>
      <Row className="pt-4 pt-lg-5">
        <Col sm={8} className="mb-4 mb-sm-0">
          <Image className="rounded-5" src={v104} alt="Image" />
        </Col>
        <Col sm={4}>
          <Image className="rounded-5" src={v105} alt="Image" />
        </Col>
      </Row>
      <Row className="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
        <Col md={10} lg={8} xl={7} className="pt-md-3 pt-lg-4">
          <h2 className="pb-sm-2">Results</h2>
          <p className="fs-lg mb-2 mb-sm-3 mb-lg-2">
            Facilisi morbi habitant massa euismod. Vehicula viverra vestibulum at quis orci morbi nullam in. Etiam sit in platea faucibus venenatis.
            Morbi cursus vehicula nam pellentesque lacus neque aenean non. Feugiat feugiat nullam feugiat cras volutpat.
          </p>
        </Col>
      </Row>
      <Row className="pt-4 pt-lg-5">
        <Col md={9} lg={7} xl={6}>
          <Row className="row-cols-1 row-cols-sm-3">
            <Col className="mb-4 mb-sm-0">
              <div className="h1 mb-0">1200+</div>
              <p className="fs-sm mb-0">leads for $ 2.1</p>
            </Col>
            <Col className="mb-4 mb-sm-0">
              <div className="h1 mb-0">130%</div>
              <p className="fs-sm mb-0">revenue increase</p>
            </Col>
            <Col className="mb-4 mb-sm-0">
              <div className="h1 mb-0">124+</div>
              <p className="fs-sm mb-0">new posts</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="py-5 my-lg-2 my-xl-4 my-xxl-5">
        <h2 className="h1 pb-2 pb-lg-4 pt-sm-4 pt-lg-5 mt-n3 mt-sm-0">Testimonial from Vintage</h2>
        <Card className="border-0 bg-secondary mb-2 mb-sm-3 mb-md-4 mb-lg-5">
          <CardBody className="px-lg-0 py-lg-5">
            <Row className="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <Col md={4} lg={3} className="offset-lg-1 mb-3 mb-md-0">
                <Image className="d-block rounded-circle mb-3" src={avatar21} width={86} alt="Lilian Bocouse" />
                <h4 className="mb-0">Lilian Bocouse</h4>
                <p className="fs-lg text-body-secondary mb-0">Head of Marketing</p>
              </Col>
              <Col md={8} lg={7}>
                <p className="text-dark lead mb-0">
                  “Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved
                  and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and
                  efficiently.”
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default About
