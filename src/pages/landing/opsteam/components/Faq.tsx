import industries01 from '@/assets/img/landing/opsteam/industries/01.jpg'
import industries02 from '@/assets/img/landing/opsteam/industries/02.jpg'
import industries03 from '@/assets/img/landing/opsteam/industries/03.jpg'
import industries04 from '@/assets/img/landing/opsteam/industries/04.jpg'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Image, Row } from 'react-bootstrap'
import type { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext'

type Industry = {
  id: string
  title: string
  content: string
  image: string
}

const industries: Industry[] = [
  {
    id: 'finance',
    title: 'Finance and insurance',
    content:
      'Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit.',
    image: industries01,
  },
  {
    id: 'tech',
    title: 'Startup and technology',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui.',
    image: industries02,
  },
  {
    id: 'medicine',
    title: 'Medicine and beauty',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget.',
    image: industries03,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    content:
      'Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem.',
    image: industries04,
  },
]

const Faq = () => {
  const [activeKey, setActiveKey] = useState<AccordionEventKey>('0')

  return (
    <section className="container py-5 mt-2 mt-sm-3 mt-md-4">
      <h2 className="h1 text-center pt-lg-3">Industries we work in</h2>
      <p className="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">Most of our projcts come from the industries below</p>
      <Row className="align-items-lg-center">
        <Col md={6} lg={5} className="pb-2 pb-lg-0 mb-4 mb-md-0">
          <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={(k) => setActiveKey(k || '0')} className="accordion-alt" id="industries">
            {industries.map((item, index) => (
              <AccordionItem eventKey={`${index}`} key={index} className="mb-n3 mb-lg-n2 mb-xl-1">
                <AccordionHeader as={'h3'} className="accordion-header">
                  {item.title}
                </AccordionHeader>
                <AccordionBody>{item.content}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </Col>
        <Col md={6} lg={7} xl={6} className="offset-xl-1">
          <div className="ps-lg-4 ps-xl-0">
            <div className="binded-content">
              {industries.map((item, idx) => (
                <div className={`binded-item ${activeKey === `${idx}` ? 'active' : 'd-none'}`} key={idx} id={`${item.id}-img`}>
                  <Image className="rounded-5" src={item.image} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Faq
