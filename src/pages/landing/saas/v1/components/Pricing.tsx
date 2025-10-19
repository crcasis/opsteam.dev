import business from '@/assets/img/landing/saas-1/pricing/business.svg'
import premium from '@/assets/img/landing/saas-1/pricing/premium.svg'
import starter from '@/assets/img/landing/saas-1/pricing/starter.svg'
import { useState } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

type PlanType = {
  name: string
  boder: string
  color: 'primary' | 'info' | 'warning'
  icon: string
  price: { monthly: string; annual: string }
  features: string[]
  notIncluded?: string[]
  buttonClass: string
  featured?: boolean
}

const plans: PlanType[] = [
  {
    name: 'Starter',
    color: 'info',
    boder: 'border-0',
    icon: starter,
    price: { monthly: '15.00', annual: '12.00' },
    features: ['In lorem eget amet sit', 'Sodales sit velit ornare', 'Tristique suspendisse proin'],
    notIncluded: ['Nunc nullam in dignissim', 'Imperdiet amet suspendisse', 'Tristique nibh erat et quis'],
    buttonClass: 'btn-outline-primary',
  },
  {
    name: 'Business',
    color: 'primary',
    boder: 'border-primary',
    icon: business,
    price: { monthly: '35.00', annual: '28.00' },
    features: [
      'In lorem eget amet sit',
      'Sodales sit velit ornare',
      'Tristique suspendisse proin',
      'Nunc nullam in dignissim',
      'Imperdiet amet suspendisse',
    ],
    notIncluded: ['Tristique nibh erat et quis'],
    buttonClass: 'btn-primary',
    featured: true,
  },
  {
    boder: 'border-0',
    name: 'Premium',
    color: 'warning',
    icon: premium,
    price: { monthly: '50.00', annual: '40.00' },
    features: [
      'In lorem eget amet sit',
      'Sodales sit velit ornare',
      'Tristique suspendisse proin',
      'Nunc nullam in dignissim',
      'Imperdiet amet suspendisse',
      'Tristique nibh erat et quis',
    ],
    buttonClass: 'btn-outline-primary',
  },
]

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section className="bg-secondary pt-2 py-sm-3 py-md-4 py-lg-5">
      <Container className="py-5 mt-lg-3 mt-xl-4 mt-xxl-5 mb-lg-2 mb-xl-4">
        <h2 className="h1 text-center mt-lg-n3 mb-2 mb-sm-0">Pricing</h2>
        <div className="price-switch-wrapper mt-sm-n4">
          <div className="text-center py-3 mb-4">
            <div className="form-check form-check-inline pe-4">
              <input
                className="form-check-input"
                type="radio"
                id="monthly"
                name="price"
                checked={billing === 'monthly'}
                onChange={() => setBilling('monthly')}
              />
              <label className="form-check-label text-dark fs-base fw-medium" htmlFor="monthly">
                Monthly payment
              </label>
            </div>
            <div className="form-check d-inline-flex align-items-end me-sm-n5">
              <div className="d-inline-flex">
                <input
                  checked={billing === 'annual'}
                  onChange={() => setBilling('annual')}
                  className="form-check-input me-2"
                  type="radio"
                  id="annual"
                  name="price"
                  data-annual-switch
                />
                <label className="form-check-label text-dark fs-base fw-medium" htmlFor="annual">
                  Annual payment
                </label>
              </div>
              <div className="d-inline-block text-center ps-3 ms-sm-4">
                <div className="text-danger fs-sm fw-bold mb-sm-1">Save 20%</div>
                <svg
                  className="text-danger ms-n4 d-none d-sm-block"
                  width={52}
                  height={38}
                  viewBox="0 0 52 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.5002 1C50.3336 5.33333 48.5 13 44.0002 20.5C39.5005 28 29.0002 32.5 28.5002 23C28.0002 13.5 39.5002 7 36.5002 14.5C33.5002 22 18.5 35.5 4 30"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.83039 29.8565C6.35946 29.7566 8.93618 29.122 11.2178 28.1747L11.2178 28.1748L11.2196 28.1739C11.5476 28.0299 11.7182 27.6503 11.5867 27.3359C11.448 26.9871 11.0624 26.8028 10.7213 26.9517C7.91141 28.0931 4.64686 28.7829 1.62704 28.4553L1.62706 28.4551L1.62094 28.4549C1.27015 28.4384 0.944127 28.6914 0.902297 29.0451L0.902167 29.045L0.901827 29.0501C0.896722 29.1266 0.902407 29.2007 0.917743 29.2707C0.94057 29.4967 1.07932 29.7124 1.30195 29.8067C4.07984 31.0931 5.87728 34.0754 7.0096 36.882L7.00959 36.882L7.01015 36.8833C7.13957 37.1912 7.5283 37.3687 7.86577 37.2206L7.86579 37.2205C8.19919 37.0741 8.36065 36.6916 8.22031 36.3385L8.22006 36.3379C7.2736 34.0027 5.84935 31.53 3.83039 29.8565Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {plans.map((plan, idx) => (
              <Col key={idx}>
                <Card className={`${plan.boder} h-100 py-lg-3 ${plan.featured ? 'shadow-lg border-2' : ''}`}>
                  <CardBody className="w-100 mx-auto" style={{ maxWidth: '21rem' }}>
                    <div className="d-flex align-items-center border-bottom pb-4 mb-4">
                      <div className={`bg-${plan.color} rounded flex-shrink-0 p-2`}>
                        <Image className="d-block m-1" src={plan.icon} width={44} alt={`${plan.name} icon`} />
                      </div>
                      <div className="ps-3">
                        <h3 className={`h4 text-${plan.color} mb-0`}>{plan.name}</h3>
                        <div className="d-flex align-items-end">
                          <span className="h5 mb-1 me-1">$</span>
                          <span className="h2 mb-0">{billing === 'monthly' ? plan.price.monthly : plan.price.annual}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled mb-1 pb-4">
                      {plan.features.map((f, i) => (
                        <li className="d-flex pb-1 mb-2" key={i}>
                          <i className="ai-check fs-xl mt-1 me-2" /> {f}
                        </li>
                      ))}
                      {plan.notIncluded?.map((f, i) => (
                        <li className="d-flex text-body-secondary pb-1 mb-2" key={i}>
                          <i className="ai-cross lead opacity-80 me-2" /> {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`btn ${plan.buttonClass} w-100`} type="button">
                      Get this plan now
                    </button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Pricing
