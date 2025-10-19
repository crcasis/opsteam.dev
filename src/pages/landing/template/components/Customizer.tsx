import bordersdark from '@/assets/img/landing/intro/customizer/borders-dark.svg'
import borderslight from '@/assets/img/landing/intro/customizer/borders-light.svg'
import customizerdark from '@/assets/img/landing/intro/customizer/colors-dark.svg'
import customizerlight from '@/assets/img/landing/intro/customizer/colors-light.svg'
import typographydark from '@/assets/img/landing/intro/customizer/typography-dark.svg'
import typographylight from '@/assets/img/landing/intro/customizer/typography-light.svg'
import { Image } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'

const Customizer = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="display-5 text-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-lg-3 mt-xxl-2 mb-0">Around customizer</h2>
        <Row
          className="align-items-center py-4 mt-2 mt-sm-3 mt-md-4 mb-2 mb-md-3 mb-lg-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} lg={7} className="order-md-2 d-flex justify-content-end">
            <Image className="d-dark-mode-none" src={customizerlight} width={593} alt="Colors" />
            <Image className="d-none d-dark-mode-block" src={customizerdark} width={593} alt="Colors" />
          </Col>
          <Col
            md={6}
            lg={5}
            className="order-md-1 mt-md-n5"
            data-aos="fade-up"
            data-aos-duration={850}
            data-aos-offset={200}
            data-disable-parallax-down="md"
          >
            <span className="badge fs-sm bg-primary bg-opacity-10 text-primary mb-4">Colors</span>
            <h2 className="mb-4">Change theme brand colors quickly and easily</h2>
            <p className="fs-lg mb-0 mb-lg-4">
              Customize theme colors to match your brand palette using the color picker or just type in the color hex. Supported colors: primary,
              warning, success, info, danger.
            </p>
          </Col>
        </Row>
        <Row
          className="align-items-center py-4 my-2 my-md-3 my-lg-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} lg={7}>
            <Image className="d-dark-mode-none" src={typographylight} width={636} alt="Typography" />
            <Image className="d-none d-dark-mode-block" src={typographydark} width={636} alt="Typography" />
          </Col>
          <Col md={6} lg={5} className="mt-md-n4" data-aos="fade-up" data-aos-duration={850} data-aos-offset={200} data-disable-parallax-down="md">
            <span className="badge fs-sm bg-info bg-opacity-10 text-info mb-4">Typography</span>
            <h2 className="mb-4">Set up fonts from the huge Google font collection</h2>
            <p className="fs-lg mb-0 mb-lg-4">
              Easily change the font to your liking. Choose the font from Google Fonts library of 1,442 open source font families. Update headings and
              body font sizes right from customizer.
            </p>
          </Col>
        </Row>
        <Row
          className="align-items-center py-4 my-2 my-md-3 my-lg-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-offset={300}
          data-disable-parallax-down="md"
        >
          <Col md={6} lg={7} className="order-md-2 d-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-dark-mode-none" src={borderslight} width={636} alt="Borders" />
            <Image className="d-none d-dark-mode-block" src={bordersdark} width={636} alt="Borders" />
          </Col>
          <Col md={6} lg={5} className="order-md-1" data-aos="fade-up" data-aos-duration={850} data-aos-offset={200} data-disable-parallax-down="md">
            <span className="badge fs-sm bg-danger bg-opacity-10 text-danger mb-4">Borders</span>
            <h2 className="mb-4">Rounded or square? Customize borders as you wish</h2>
            <p className="fs-lg mb-0 mb-lg-4">
              It's up to you to make your website soft and friendly with increased border radius or add business vibes with less rounded shapes. You
              can also change border width.
            </p>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Customizer
