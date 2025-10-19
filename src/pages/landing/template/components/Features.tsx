import bootstrap from '@/assets/img/landing/intro/features/bootstrap.png'
import figma from '@/assets/img/landing/intro/features/figma.png'
import googlefonts from '@/assets/img/landing/intro/features/google-fonts.png'
import html5 from '@/assets/img/landing/intro/features/html5.png'
import js from '@/assets/img/landing/intro/features/js.png'
import npm from '@/assets/img/landing/intro/features/npm.png'
import sass from '@/assets/img/landing/intro/features/sass.png'
import touch from '@/assets/img/landing/intro/features/touch.png'
import vector from '@/assets/img/landing/intro/features/vector.png'
import { Col, Image, Row } from 'react-bootstrap'

type Feature = {
  icon: string
  title: string
  description: string
  class: string
}

const featuresData: Feature[] = [
  {
    icon: bootstrap,
    title: 'Built with latest Bootstrap',
    description:
      "Around is the powerful front-end solution for websits and web apps based on Bootstrap 5 - the world's most popular responsive, mobile-first front-end component library.",
    class: 'pe-md-3 pe-lg-3 pe-xl-5',
  },
  {
    icon: sass,
    title: 'Easy to Customize with Sass',
    description:
      'Around is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.',
    class: 'ps-md-3 px-lg-2 px-xl-4',
  },
  {
    icon: npm,
    title: 'Kick-start your development',
    description:
      'Start your development process fast and easy with Npm scripts setup. Configuration files are included in the download package. Full tasks automation and local server hot reload.',
    class: 'pe-md-3 ps-lg-3 ps-xl-5',
  },
  {
    icon: js,
    title: 'Future-proof JavaScript',
    description:
      "Around core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally don't need jQuery any more and we can use ES6 modules to structure the code.",
    class: 'pe-md-3 pe-lg-3 pe-xl-5',
  },
  {
    icon: html5,
    title: 'W3C valid HTML code',
    description:
      'All HTML files are checked with W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Around is innovative at its core.',
    class: 'ps-md-3 px-lg-2 px-xl-4',
  },
  {
    icon: figma,
    title: 'Premium Figma file included',
    description:
      "A well-crafted Figma design file is included in the download package. It offers a visually stunning and organized layout, utilizing Figma's components and styles.",
    class: 'pe-md-3 ps-lg-3 ps-xl-5',
  },
  {
    icon: touch,
    title: 'Touch-enabled sliders',
    description:
      "In the era of touch screens it's important to ensure great user experience on handheld devices, when it comes to such frequently used interface component as slider.",
    class: 'pe-md-3 pe-lg-3 pe-xl-5',
  },
  {
    icon: googlefonts,
    title: 'Google fonts',
    description:
      'Around uses Google font (Inter) which is free, fast to load and of very high quality. Currently Google fonts library includes 1400+ font families to choose from.',
    class: 'ps-md-3 px-lg-2 px-xl-4',
  },
  {
    icon: vector,
    title: 'Vector based HD ready icons',
    description:
      'Around is equiped with font-based icon pack and svg icons to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.',
    class: 'pe-md-3 ps-lg-3 ps-xl-5',
  },
]

const Features = () => {
  return (
    <>
      <section className="container py-5 mt-n3 mt-sm-n2 mt-md-0 my-lg-3 my-xl-4 my-xxl-5">
        <h2 className="display-5 text-center pt-md-3 pt-lg-4 pb-xxl-2 mt-xl-3 mb-4 mb-sm-5">More Around features</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 gy-sm-5 pb-md-4 pb-lg-5 mb-2 mb-lg-0 mb-xxl-2">
          {featuresData.map((feature, index) => (
            <Col className="text-center text-sm-start pt-2 pt-sm-0" key={index}>
              <div className={`${feature.class} `}>
                <Image className="d-inline-block mb-3 mb-lg-4" src={feature.icon} width={56} alt="" />
                <h3 className="h5 mb-2">{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default Features
