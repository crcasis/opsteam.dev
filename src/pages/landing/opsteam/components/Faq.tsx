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
      'We empower financial and insurance companies with secure, automated DevOps pipelines using tools like AWS, Terraform, Kubernetes, Jenkins, Github actions and GitLab CI/CD. Our solutions ensure compliance, scalability, and faster, more reliable software delivery.',
    image: industries01,
  },
  {
    id: 'tech',
    title: 'Startup and technology',
    content:
      'We support startups and tech companies in building reliable, data-driven platforms through modern DevOps practices. Using tools like Ansible, CircleCI, ArgoCD, Prometheus, Grafana, and the ELK Stack, we enable automation, observability, and continuous improvement to help your technology scale with confidence.',
    image: industries02,
  },
  {
    id: 'medicine',
    title: 'Medicine and beauty',
    content:
      'We help healthcare and beauty companies streamline operations and deliver reliable digital services with robust DevOps practices. Leveraging Apache Kafka for real-time data streaming and modern databases like PostgreSQL, MongoDB, and MySQL, we enable secure, scalable, and highly available systems that support patient care, analytics, and customer engagement.',
    image: industries03,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    content:
      'We help e-commerce businesses deliver fast, secure, and reliable online experiences. By implementing load balancing, Web Application Firewalls (WAF), and high-availability cloud architectures, we ensure your platforms scale seamlessly, stay protected, and handle traffic peaks with confidence.',
    image: industries04,
  },
]

const Faq = () => {
  const [activeKey, setActiveKey] = useState<AccordionEventKey>('0')

  return (
    <section className="container py-5 mt-2 mt-sm-3 mt-md-4">
      <h2 className="h1 text-center pt-lg-3">Industries we work in</h2>
      <p className="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">Most of our projects come from the industries below</p>
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
