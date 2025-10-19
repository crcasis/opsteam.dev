import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type FaqType = {
  question: string
  answer: string
}

const faq: FaqType[] = [
  {
    question: 'Finance and insurance',
    answer:
      'Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit consectetur posuere suscipit.',
  },
  {
    question: 'Startup and technology',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui platea nunc semper auctor.',
  },
  {
    question: 'Medicine and beauty',
    answer:
      ' Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit consectetur posuere suscipit.',
  },
  {
    question: 'Real estate and catering',
    answer:
      'Aenean suscipit, lacus eu sagittis pretium, quam purus aliquet velit, in vestibulum eros massa et eros. Proin sed mollis tortor. Integer non felis condimentum, gravida metus nec, mollis mauris ultrices malesuada.',
  },
  {
    question: 'E-commerce',
    answer:
      'Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem tristique senectus et netus.',
  },
  {
    question: 'Educational and training',
    answer:
      'Sed sollicitudin interdum nunc ut pharetra. Proin vehicula volutpat mattis. Curabitur a ipsum leo. Praesent dapibus est ac risus maximus, sit amet placerat diam congue elit sem commodo justo scelerisque ipsum.',
  },
]

const Industries = () => {
  return (
    <>
      <section className="bg-dark position-relative pb-5 pb-lg-0 pt-md-2 pt-lg-4 pt-xl-5" data-bs-theme="dark">
        <Container className="pb-sm-3 pb-md-4 pb-lg-0 pt-5">
          <Row className="pb-2 pb-lg-0 pt-1 pt-sm-4">
            <Col md={5} xl={4}>
              <h2 className="h1 text-center text-md-start pb-3 mb-0 mb-md-3 mb-lg-4">The industries which we work in</h2>
              <Link className="btn btn-outline-primary d-none d-md-inline-flex" to="">
                More about industries
              </Link>
            </Col>
            <Col md={7} lg={6} className="offset-lg-1 offset-xl-2">
              <div className="ps-md-4 ps-lg-0">
                <Accordion defaultActiveKey={'1'} className="accordion-alt" id="industries">
                  {faq.map((item, idx) => (
                    <AccordionItem eventKey={`${idx + 1}`} className="mb-n3 mb-lg-n2 mb-xl-1" key={idx}>
                      <AccordionHeader as={'h3'}>{item.question}</AccordionHeader>
                      <AccordionBody>{item.answer}</AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
          <div className="text-center d-md-none mt-4">
            <Link className="btn btn-outline-primary" to="">
              More about industries
            </Link>
          </div>
        </Container>
        <div className="d-none d-lg-flex align-items-end mt-xl-n5">
          <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom">
            <svg className="text-info" width={116} height={191} viewBox="0 0 116 191" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M58 191C90.0325 191 116 165.033 116 133L116 4C116 1.79086 114.209 7.8281e-08 112 1.74846e-07L60 2.44784e-06C26.8629 3.89631e-06 4.54735e-07 26.8629 1.9032e-06 60L5.09413e-06 133C6.49432e-06 165.033 25.9675 191 58 191Z" />
            </svg>
          </div>
          <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay={150}>
            <svg className="text-warning" width={199} height={120} viewBox="0 0 199 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect width={199} height={120} rx={60} />
            </svg>
          </div>
          <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay={300}>
            <svg className="text-danger" width={169} height={169} viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="84.5" cy="84.5" r="84.5" />
            </svg>
          </div>
          <div data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay={450}>
            <svg className="text-primary" width={169} height={169} viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.38722e-06 84.5C5.92617e-06 101.213 4.95585 117.55 14.2408 131.446C23.5258 145.342 36.7229 156.172 52.1633 162.568C67.6036 168.963 84.5937 170.637 100.985 167.376C117.377 164.116 132.433 156.068 144.251 144.251C156.068 132.433 164.116 117.377 167.376 100.985C170.637 84.5937 168.963 67.6036 162.568 52.1632C156.172 36.7229 145.342 23.5258 131.446 14.2408C117.55 4.95584 101.213 -5.92617e-06 84.5 -7.38722e-06L84.5 84.5L7.38722e-06 84.5Z" />
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
